import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <label>Find contacts by name or number</label>
    <input
      className={style.filterInput}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
