import React, { Component } from "react";
import UnitCard from "../components/UnitCard";
import { Link } from "react-router-dom";
import ResourceFilter from "../components/ResourceFilter";
import { ReactSVG } from "react-svg";
import { UnitContext } from "../context/UnitContext";

export default class Units extends Component{
  static contextType = UnitContext;
  state = {
    activeAge: "",
    ageList: [
      { name: "", svgPath: require("../assets/images/all-ages.svg") },
      { name: "Dark", svgPath: require("../assets/images/dark-age.svg") },
      { name: "Feudal", svgPath: require("../assets/images/feudal-age.svg") },
      { name: "Castle", svgPath: require("../assets/images/castle-age.svg") },
      { name: "Imperial", svgPath: require("../assets/images/imperial-age.svg") },
    ],
    resources: {
      Food: { title: "Food", values: null, isChecked: false },
      Wood: { title: "Wood", values: null, isChecked: false },
      Gold: { title: "Gold", values: null, isChecked: false },
    },
  };

  setActiveAge = (name) => {
    this.setState((state) => (state.activeAge = name));
  };

  setResource = (resources, title, checked) => {
    let newResource = { title: title, values: resources, isChecked: checked };
    this.setState((state) => (state["resources"][title] = newResource));
  };

  costFilter = (unit) => {
    let activeFilters = Object.keys(this.state.resources).filter((key) => {
      return this.state.resources[key]["isChecked"];
    });
    let result = true;
    if (unit.cost) {
      activeFilters.forEach((key) => {
        if (result) {
          if (
            unit.cost[key] === undefined ||
            this.state.resources[key]["values"][1] < unit.cost[key] ||
            unit.cost[key] < this.state.resources[key]["values"][0]
          ) {
            result = false;
          }
        }
      });
    } else result = false;

    return result;
  };
render(){ 
    // filter functions should be refactored
    let filters = () => {
      return Object.keys(this.state.resources).map((key, index) => {
        let title = this.state.resources[key]["title"];
        let values = this.state.resources[key]["values"];
        let isChecked = this.state.resources[key]["isChecked"];

        return (
          <ResourceFilter
            key={index}
            setResource={this.setResource}
            values={values}
            title={title}
            isChecked={isChecked}
          />
        );
      });
    };

    let filteredUnits = () => {
      let unitList = [];
      this.context.unitList.forEach((unit) => {
        if (
          this.costFilter(unit) &&
          unit.age.match(this.state.activeAge)
        ) {
          unitList.push(unit);
        }
      });
      return unitList.map((filteredUnit) => {
        let path = filteredUnit.id;
        return (
          <Link key={filteredUnit.id} to={`/units/${path}`}>
            <UnitCard unit={filteredUnit} key={filteredUnit.id} />
          </Link>
        );
      });
    };
    return (
      <div className="units">
        <div className="units-filters">
          <div className="age-filter section">
            <h2 className="units-title">Ages</h2>
            <div className="age-items">
              {
                this.state.ageList.map((item, index) => {
                  return (
                    <div
                      id={item.name}
                      key={index}
                      className={
                        "age-item" + (item.name === this.state.activeAge
                          ? " active"
                          : "")
                      }
                      onClick={() => this.setActiveAge(item.name)}
                    >
                      <ReactSVG src={item.svgPath} />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="resource-filter section">
            <h2 className="units-title">Costs</h2>
            {filters()}
          </div>
        </div>
        <div className="units-list section">{filteredUnits()}</div>
      </div>
    );
  }
}

