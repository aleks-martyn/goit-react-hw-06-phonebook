import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Text, Marker } from './ContactListItem.styled';

export const ContactListItem = ({ userId, userName, userNumber }) => {
  const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(userId))

  return (
    <Item>
      <Marker></Marker>
      <Text>
        {userName}: <span>{userNumber}</span>
      </Text>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Item>
  );
};
