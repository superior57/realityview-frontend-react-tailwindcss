import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import axios from 'axios';

// Define a type for the slice state
interface UserState {
  isSignin: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  isSignin: false,
};

export const userSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSignin: (state, action: PayloadAction<boolean>) => {
      state.isSignin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isSignin = action.payload;
    });
  },
});

export const usersAction = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getIsSignin = (state: RootState) => state.user.isSignin;

export default userSlice.reducer;

export const signIn = createAsyncThunk(
  'user/signin',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (data: any) => {
    const response = await axios.post('user/signin', {
      email: data.email,
      password: data.password,
    });
    return response.data;
  }
);

export const setSignin = (
  value: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    await dispatch(usersAction.setSignin(value));
  };
};
