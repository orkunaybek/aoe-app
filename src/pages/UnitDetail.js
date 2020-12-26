import React, { useContext } from "react";
import helmet from "../assets/images/helmet.png";
import time from "../assets/images/time.png";
import heart from "../assets/images/heart.png";
import attack from "../assets/images/attack.png";
import accuracy from "../assets/images/accuracy.png";
import { UnitContext } from "../context/UnitContext";

const UnitDetail = (props) => {
  let id = props.match.params.id;

  const { unitList } = useContext(UnitContext);
  let selectedUnit = unitList.filter((item) => item.id === Number(id))[0];
  if (!selectedUnit) {
    return <h1>Unit Does Not Exists</h1>;
  }
  return (
    <div className="detail">
      <div className="detail-header">
        <div className="title">
          {selectedUnit.name ? (
            <span className="name">{selectedUnit.name}</span>
          ) : (
            ""
          )}
          {selectedUnit.age ? (
            <span className="age"> ({selectedUnit.age})</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="detail-body">
        <div className="specs">
          {selectedUnit.cost ? (
            <div className="costs">
              {Object.keys(selectedUnit.cost).map((resource, index) => {
                return (
                  <div className="resource" key={index}>
                    <span className={resource.toLocaleLowerCase()}></span>
                    {selectedUnit.cost[resource]}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <p className="desc">{selectedUnit.description}</p>

          {selectedUnit.build_time ? (
            <div className="specs-item">
              <img src={time} alt="" />
              <p>{selectedUnit.build_time} sec. (Build)</p>
            </div>
          ) : (
            ""
          )}
          {selectedUnit.reload_time ? (
            <div className="specs-item">
              <img src={time} alt="" />
              <p>{selectedUnit.reload_time} sec. (Reload)</p>
            </div>
          ) : (
            ""
          )}
          {selectedUnit.hit_points ? (
            <div className="specs-item">
              <img src={heart} alt="" />
              <p>{selectedUnit.hit_points} hp</p>
            </div>
          ) : (
            ""
          )}
          {selectedUnit.attack ? (
            <div className="specs-item">
              <img src={attack} alt="" />
              <p>{selectedUnit.attack} dmg</p>
            </div>
          ) : (
            ""
          )}
          {selectedUnit.accuracy ? (
            <div className="specs-item">
              <img src={accuracy} alt="" />
              <p>{selectedUnit.accuracy} </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <img src={helmet} alt="" />
      </div>
    </div>
  );
};
export default UnitDetail;
