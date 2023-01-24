import PropTypes from 'prop-types';

import { Input, Label } from './Filter.Styled';

const Filter = ({ value, onChange }) => (
  <>
    <Label htmlFor="fname">Fined contacts by name</Label>
    <Input
      onChange={onChange}
      value={value}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
