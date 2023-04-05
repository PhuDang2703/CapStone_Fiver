import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI from '../../Apis/userAPI';

export const getUsersAdmin = createAsyncThunk(
    "usersAdmin/get",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await userAPI.getUsersAdmin();
            // localStorage.setItem("user", JSON.stringify(data.content));
            return data.content;
        } catch (error) {
            console.log(error.response.data.content);
            rejectWithValue(error);
        }
    }
);

const usersSlice = createSlice({
    name: 'usersAdmin',
    initialState: {
        statusCode: 200,
        userInfo: [],
    },
    reducers: {},
    extraReducers: {
        [getUsersAdmin.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
        },
    }
});

export const { } = usersSlice.actions

export default usersSlice.reducer