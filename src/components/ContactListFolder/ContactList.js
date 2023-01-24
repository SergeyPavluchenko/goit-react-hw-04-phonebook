import PropTypes from 'prop-types';
import ContactElement from '../ContactElementFolder/ContactElement';
import { List } from './List.Styled';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactElement
        key={id}
        name={name}
        id={id}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </List>
);

ContactList.PropTypespropTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
