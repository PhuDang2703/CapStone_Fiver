import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI from '../../Apis/userAPI';

export const getUsersAdmin = createAsyncThunk(
    "usersAdmin/get",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await userAPI.getUsersAdmin();
            return data.content;
        } catch (error) {
            console.log(error.response.data.content);
            rejectWithValue(error);
        }
    }
);

export const addUsersAdmin = createAsyncThunk(
    "userAdmin/post",
    async (formData, { rejectWithValue, navigate }) => {
        try {
            const { data } = await userAPI.addUsersAdmin(formData);
            console.log(data)
            alert("Add user success!!")
            navigate('/admin');
            // return data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
)

export const deleteUsersAdmin = createAsyncThunk(
    "usersAdmin/delete",
    async (usersId, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await userAPI.deleteUser(usersId);
            alert('Delete success!')
            //Sau khi xoá load lại danh sách users mới;
            dispatch(getUsersAdmin());

            return data.content;
        } catch (error) {
            console.log(error.response.data.content)
            rejectWithValue(error);
        }
    }
)

export const getUsersAdminById = createAsyncThunk(
    "usersAdmin/getUsersId",
    async (usersId, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await userAPI.getUser(usersId);
            // localStorage.setItem("user", JSON.stringify(data.content));

            return data.content;
        } catch (error) {
            console.log(error.response.data.content)
            rejectWithValue(error);
        }
    }
)

const usersSlice = createSlice({
    name: 'usersAdmin',
    initialState: {
        statusCode: 200,
        setting: {
            isloading: false,
            data: null,
            error: false,
        },
        userInfo: [],
        usersInfoForUpdate: {},
    },
    reducers: {},
    extraReducers: {
        [getUsersAdmin.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
        },
        [getUsersAdminById.fulfilled]: (state, action) => {
            state.usersInfoForUpdate = action.payload;
        }
    }
});

export const { } = usersSlice.actions

export default usersSlice.reducer