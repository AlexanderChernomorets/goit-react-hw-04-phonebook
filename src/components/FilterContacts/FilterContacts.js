import PropTypes from 'prop-types';
import {
  FilterSection,
  FilterTitle,
  FilterInput,
} from './filterContact.styled';

function FilterContact({ filter, onChange }) {
  return (
    <FilterSection>
      <FilterTitle>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          placeholder="🔎 Enter name for Search"
          onChange={({ target }) => onChange(target.value)}
        />
      </FilterTitle>
    </FilterSection>
  );
}
export default FilterContact;

FilterContact.propType = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
