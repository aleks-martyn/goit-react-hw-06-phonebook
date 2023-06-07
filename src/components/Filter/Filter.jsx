import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel, Text } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event =>
    dispatch(setFilter(event.currentTarget.value.trim()));

  return (
    <FilterLabel>
      <Text>Find contacts by name</Text>
      <input type="text" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
};
