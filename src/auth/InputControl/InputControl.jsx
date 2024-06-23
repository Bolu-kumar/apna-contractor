import PropTypes from "prop-types";
import styles from "./InputControl.module.css"; // Import CSS module

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

InputControl.propTypes = {
  label: PropTypes.string.isRequired, // Ensure label prop is required and of type string
};

export default InputControl;
