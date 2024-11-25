import "./Slider.css";

const Slider = ({ label, value }) => {
  return (
    <div className="range-slider">
      <label>{label}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        disabled
        style={{ "--value": `${value}%` }}
      />
    </div>
  );
};

export default Slider;
