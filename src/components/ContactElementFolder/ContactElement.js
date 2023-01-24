import PropTypes from 'prop-types';
import { ListEl, Text, TextEl, Button } from './ContactElement.Styled';

const ContactElement = ({ id, name, number, onDelete }) => (
  <>
    <ListEl key={id}>
      <Text>
        <TextEl>{name}:</TextEl>
        <TextEl> {number}</TextEl>
      </Text>
      <Button onClick={() => onDelete(id)} type="button">
        Delete
      </Button>
    </ListEl>
  </>
);

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactElement;
