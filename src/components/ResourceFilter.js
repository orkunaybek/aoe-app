import React from "react";
import Slider from "@material-ui/core/Slider";

export default function RangeSlider({ title, isChecked, setResource }) {
  const [value, setValue] = React.useState([20, 37]);
  const [checked, setChecked] = React.useState(isChecked);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setResource(newValue, title, checked);
  };

  const handleCheck = () => {
    setResource(value, title, !checked);
    setChecked(!checked);
  };
  return (
    <div className={title.toLowerCase()}>
      <label className="form-csCheck" htmlFor={title.toLowerCase()}>
        <input className="form-check-input form-control" onChange={handleCheck} type="checkbox" id={title.toLowerCase()} />
        <span className="form-csCheck-checkmark"></span>
        <span>{title}</span>
      </label>
      <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider" disabled={!checked} />
    </div>
  );
}
