import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'tecnologia', label: 'Tecnología y Ciencia' },
  { value: 'arte', label: 'Arte y Creatividad' },
  { value: 'educacion', label: 'Educación y Aprendizaje' },
];

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSearch = () => {
    const selectedTheme = selectedOption ? selectedOption.value : null;
    onSearch(searchTerm, selectedTheme);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '10px' }}>
      <input
        type="text"
        placeholder="Buscar proyecto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', border: '2px solid #ccc', borderRadius: '5px', marginRight: '10px', width: '200px', fontSize: '16px' }}
      />

      <Select
        options={options}
        isClearable
        value={selectedOption}
        onChange={(value) => setSelectedOption(value)}
        placeholder="Seleccionar tema"
        styles={{ control: (styles) => ({ ...styles, width: '200px' }) }}
      />

      <button
        onClick={handleSearch}
        style={{ background: '#999', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;

