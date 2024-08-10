import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortProductsByYear, sortProductsByPrice, resetFilters } from '../redux/ProductsSlice';

const ProductFilter = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const handleComboBoxChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    switch (value) {
      case 'oldest':
        dispatch(sortProductsByYear('oldest'));
        break;
      case 'newest':
        dispatch(sortProductsByYear('newest'));
        break;
      case 'asc':
        dispatch(sortProductsByPrice('asc'));
        break;
      case 'desc':
        dispatch(sortProductsByPrice('desc'));
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setSelectedOption('');
    dispatch(resetFilters());
  };

  return (
    <div className="h-auto w-1/5 float-end flex flex-col p-4 bg-gray-200 rounded-2xl">
      <div className="flex flex-col gap-4">
        <select
          value={selectedOption}
          onChange={handleComboBoxChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Sırala</option>
          <optgroup label="Yıl">
            <option value="oldest">En Eski - En Yeni</option>
            <option value="newest">En Yeni - En Eski</option>
          </optgroup>
          <optgroup label="Fiyat">
            <option value="asc">Ucuzdan - Pahalıya</option>
            <option value="desc">Pahalıdan - Ucuza</option>
          </optgroup>
        </select>
      </div>

      <div className="flex gap-4 mt-4 justify-end">
        <button onClick={handleReset} className="bg-red-500 text-white p-2 rounded">
          Filtreleri Sıfırla
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
