import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('public/mock/ürün.json');
  const data = await response.json();
  return data.products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    filterProductsByPrice: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.filteredItems = state.items.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    },
    sortProductsByYear: (state, action) => {
      if (action.payload === 'oldest') {
        state.filteredItems.sort((a, b) => a.year - b.year);
      } else if (action.payload === 'newest') {
        state.filteredItems.sort((a, b) => b.year - a.year);
      }
    },
    sortProductsByPrice: (state, action) => {
      if (action.payload === 'asc') {
        state.filteredItems.sort((a, b) => a.price - b.price);
      } else if (action.payload === 'desc') {
        state.filteredItems.sort((a, b) => b.price - a.price);
      }
    },
    resetFilters: (state) => {
      state.filteredItems = [...state.items]; // Reset filters to show all items
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = action.payload; // Initialize with all products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { filterProductsByPrice, sortProductsByYear, sortProductsByPrice, resetFilters } = productsSlice.actions;

export default productsSlice.reducer;
