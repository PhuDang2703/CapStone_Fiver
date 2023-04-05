import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from './Modules/UserProfile/Slices/userProfileSlice';
import authSlice from './Authentication/slices/authSlice';
import jobListSlice from './Modules/JobList/Slices/JobListSlice';
import usersSlice from './Admin/Slices/usersSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userProfileSlice,
    jobList: jobListSlice,
    usersAdmin: usersSlice
  },
});
export default store;
