import React, { Component } from "react";
import audio from "../assets/creation-sound.mp3"

class Unit extends Component {
  render() {
    var sound = new Audio(audio);
    const start = () => {
      sound.play();
    };
    return (
      <div className="unit-card" onClick={start}>
        <div className="name">{this.props.unit.name ? this.props.unit.name : ""}</div>
        <div className="card-bottom">
          <div className="age">{this.props.unit.age ? this.props.unit.age : ""}</div>
          {this.props.unit.cost ? (
            <div className="costs">
              {Object.keys(this.props.unit.cost).map((resource, index) => {
                return (
                  <div className="resource" key={index}>
                    <span className={resource.toLocaleLowerCase()}></span>
                    {this.props.unit.cost[resource]}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default Unit;
