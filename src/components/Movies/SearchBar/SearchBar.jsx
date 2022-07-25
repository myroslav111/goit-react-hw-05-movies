import { useState } from 'react';
import { Form, Wrap } from './SearchBar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

const SearchBar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  // забираем дату с инпута и бросаем в стейт
  const handleNameChange = e => {
    const newName = e.currentTarget.value.toLowerCase();
    setName(newName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('click');
    const userInput = name.trim();
    if (userInput === '') {
      toast.error('fill in the fields');
      return;
    }

    onSubmit(userInput);
    // очищаем инпут
    cleanInput();
  };

  const cleanInput = () => {
    setName('');
  };

  return (
    <>
      <Wrap>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={name}
            onChange={handleNameChange}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </Form>
      </Wrap>
    </>
  );
};

export default SearchBar;
