import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { filterProductsByPrice } from '../redux/ProductsSlice'; // Ensure the correct path

const minDistance = 1500;
const minPrice = 1500;
const maxPrice = 10000;

export default function PriceRangeSlider() {
  const [value, setValue] = React.useState([minPrice, maxPrice]);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    setValue(newValue);
    dispatch(filterProductsByPrice({ minPrice: newValue[0], maxPrice: newValue[1] }));
  };

  return (
    <Box sx={{ width: 300, backgroundColor: 'lightgray', padding: 3, borderRadius: 4 
     }}>
        <p className='pb-4'>Fiyat Aralığı:</p>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
        disableSwap
        step={100}
        marks={[
          { value: minPrice, label: `${minPrice}` },
          { value: maxPrice, label: `${maxPrice}` }
        ]}
      />
    </Box>
  );
}
