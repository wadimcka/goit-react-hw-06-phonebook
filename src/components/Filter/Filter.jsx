import React from 'react';
import { FilterInput, FilterInputLabel, FilterWrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handlChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterWrap>
      <FilterInputLabel htmlFor="">Find contacts by name</FilterInputLabel>
      <FilterInput type="text" value={filter} onChange={handlChange} />
    </FilterWrap>
  );
}

export default Filter;
