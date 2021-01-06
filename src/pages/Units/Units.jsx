import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import UnitCard from '../../components/UnitCard/UnitCard';
import ResourceFilter from '../../components/ResourceFilter';

const darkSvg = require('../../assets/images/dark-age.svg');
const feudalSvg = require('../../assets/images/feudal-age.svg');
const castleSvg = require('../../assets/images/castle-age.svg');
const imperialSvg = require('../../assets/images/imperial-age.svg');
const allSvg = require('../../assets/images/all-ages.svg');

export class Units extends Component {
  state = {
    activeAge: '',
    ageList: [
      { name: '', svgPath: allSvg },
      { name: 'Dark', svgPath: darkSvg },
      { name: 'Feudal', svgPath: feudalSvg },
      { name: 'Castle', svgPath: castleSvg },
      {
        name: 'Imperial',
        svgPath: imperialSvg,
      },
    ],
    resources: {
      Food: { title: 'Food', values: null, isChecked: false },
      Wood: { title: 'Wood', values: null, isChecked: false },
      Gold: { title: 'Gold', values: null, isChecked: false },
    },
  };

  // sets active age to filter
  setActiveAge(name) {
    this.setState((state) => (state.activeAge = name));
  }

  // sets values to filter between for a specific resource
  setResource = (resources, title, checked) => {
    const newResource = { title, values: resources, isChecked: checked };
    this.setState((state) => (state.resources[title] = newResource));
  };

  // loops inside units costs(gold, wood, food) and checks if unit should render or not

  costFilter = (unit) => {
    const { resources } = this.state;
    const activeFilters = Object.keys(resources).filter((key) => resources[key].isChecked);
    let showUnit = true;
    if (unit.cost) {
      // checks if unit values are matching with the active filters
      activeFilters.forEach((key) => {
        if (
          unit.cost[key] === undefined ||
          resources[key].values[1] < unit.cost[key] ||
          unit.cost[key] < resources[key].values[0]
        ) {
          showUnit = false;
        }
      });
    } else {
      showUnit = false;
    }
    return showUnit;
  };

  render() {
    const { resources, ageList, activeAge } = this.state;
    const { unitList } = this.props;

    return (
      <div className="units">
        <div className="units-filters">
          <div className="age-filter section">
            <h2 className="units-title">Ages</h2>
            <div className="age-items">
              {ageList.map((item, index) => (
                <div
                  id={item.name}
                  key={`age-${index * 2}`}
                  className={`age-item${item.name === activeAge ? ' active' : ''}`}
                  onClick={() => this.setActiveAge(item.name)}
                  role="button"
                  tabIndex={index}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      this.setActiveAge(item.name);
                    }
                  }}
                >
                  <ReactSVG src={item.svgPath.toString()} />
                </div>
              ))}
            </div>
          </div>
          <div className="resource-filter section">
            <h2 className="units-title">Costs</h2>
            {Object.keys(resources).map((key, index) => {
              const { title } = resources[key];
              const { values } = resources[key];
              const { isChecked } = resources[key];
              return (
                <ResourceFilter
                  key={`filter-${index * 2}`}
                  setResource={this.setResource}
                  values={values}
                  title={title}
                  isChecked={isChecked}
                />
              );
            })}
          </div>
        </div>
        <div className="units-list section">
          {unitList
            .filter((unit) => this.costFilter(unit) && unit.age.match(activeAge))
            .map((filteredUnit) => {
              const path = filteredUnit.id;
              return (
                <Link key={filteredUnit.id} to={`/units/${path}`}>
                  <UnitCard unit={filteredUnit} key={filteredUnit.id} />
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  unitList: state.unitList,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Units);

Units.defaultProps = {
  unitList: [],
};

Units.propTypes = {
  unitList: PropTypes.arrayOf(PropTypes.object),
};
