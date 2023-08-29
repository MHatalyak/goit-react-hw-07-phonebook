import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './store';
import { FilterContainer, FilterLabel, FilterInput } from './App.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>Filter contacts by name:</FilterLabel>
      <FilterInput type="text" value={filter} onChange={handleFilterChange} />
    </FilterContainer>
  );
};

export default Filter;
