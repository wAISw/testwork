import React, {Component, PropTypes} from 'react';
import * as styles from './styles.scss';

export class Checkbox extends Component {
  toggleCheckboxChange = (only) => {
    const {handleCheckboxChange, value} = this.props;
    handleCheckboxChange(value, only);
  };

  render() {
    const {label, value, isChecked} = this.props;

    return (
      <div className={styles.checkboxWrap}>
        <input
          className='checkbox'
          id={value}
          type='checkbox'
          value={value}
          checked={isChecked}
        />
        <label htmlFor={value} onClick={() => this.toggleCheckboxChange(false)}>
          {label}
        </label>
        <span className={styles.only} onClick={() => this.toggleCheckboxChange(true)}>Только</span>
      </div>
    );
  }
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleCheckboxChange: PropTypes.func.isRequired
};

