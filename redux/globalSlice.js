import {createSlice} from '@reduxjs/toolkit';

const KEY = 'global';
const initialState = {
  isLoading: false,
  isLogin: false,
  modalVisible: false,
  currentUserId: '',
};

const globalSlice = createSlice({
  name: KEY,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

const {reducer, actions} = globalSlice;
export const {setLoading, setLogin} = actions;
export default reducer;
