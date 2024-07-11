import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const teste1 = () => {
  const arrayDG = [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
    { value: 'value3', label: 'Opção 3' },
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleDigestor = (event : any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
    <Select value={selectedValue} onChange={handleDigestor}>
      {arrayDG.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    </div> );
};

export default teste1;
