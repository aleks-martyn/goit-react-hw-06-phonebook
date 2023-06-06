import { useSelector, useDispatch } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <List>
      {users.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </List>
  );
};
