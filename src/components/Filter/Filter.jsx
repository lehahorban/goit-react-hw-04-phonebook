import PropTypes from 'prop-types';
import style from './Filter.module.css';

function Filter({ filter, onChange }) {
  return (
    <div className={style.filter}>
      <label>Find contact by name</label>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
