import React from 'react';
import PropTypes from 'prop-types';
import audio from '../assets/creation-sound.mp3';

export default function UnitCard({ unit }) {
  const sound = new Audio(audio);
  const start = () => {
    sound.play();
  };
  return (
    <div
      className="unit-card"
      onClick={start}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          start();
        }
      }}
    >
      <div className="name">{unit.name ? unit.name : ''}</div>
      <div className="card-bottom">
        <div className="age">{unit.age ? unit.age : ''}</div>
        {unit.cost ? (
          <div className="costs">
            {Object.keys(unit.cost).map((resource, index) => (
              <div className="resource" key={`cost-${index * 2}`}>
                <span className={resource.toLocaleLowerCase()} />
                {unit.cost[resource]}
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
UnitCard.defaultProps = {
  unit: {
    age: '',
    name: '',
    cost: {
      Wood: 0,
      Gold: 0,
      Food: 0,
    },
  },
};
UnitCard.propTypes = {
  unit: PropTypes.shape({
    age: PropTypes.string,
    name: PropTypes.string,
    cost: PropTypes.shape({
      Gold: PropTypes.number,
      Food: PropTypes.number,
      Wood: PropTypes.number,
    }),
  }),
};
