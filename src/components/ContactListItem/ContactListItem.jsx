import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Text, Marker } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Marker></Marker>
      <Text>
        {name}: <span>{number}</span>
      </Text>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Item>
  );
};
