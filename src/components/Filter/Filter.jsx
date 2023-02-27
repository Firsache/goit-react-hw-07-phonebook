// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredName } from 'redux/contacts/selectors';
import { setFilteredName } from 'redux/contacts/contactsSlice';

import { Label, Span, Input } from 'components/Form/Form.styled';

export function Filter() {
  const filteredName = useSelector(selectFilteredName);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilteredName(event.target.value));
  };

  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filterName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filteredName}
        onChange={handleFilter}
      />
    </Label>
  );
}
