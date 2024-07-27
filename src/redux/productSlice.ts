import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductData } from '../types/product';

export const fetchProductData = createAsyncThunk('product/fetchProductData', async () => {
  const response = await axios.get('/stackline_frontend_assessment_data_2021.json');
  return response.data[0] as ProductData;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null as ProductData | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product data';
      });
  },
});

export default productSlice.reducer;
