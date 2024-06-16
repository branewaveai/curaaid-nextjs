import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CurrencyState {
  currency: string;
  exchangeRate: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CurrencyState = {
  currency: "USD",
  exchangeRate: 1,
  status: "idle",
  error: null,
};

export const fetchExchangeRate = createAsyncThunk(
  "currency/fetchExchangeRate",
  async (currency: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/USD`
      );
      return response.data.rates[currency];
    } catch (error) {
      return rejectWithValue("Failed to fetch exchange rate");
    }
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchExchangeRate.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.status = "succeeded";
          state.exchangeRate = action.payload;
        }
      )
      .addCase(fetchExchangeRate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch exchange rate";
      });
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
