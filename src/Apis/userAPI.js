import axiosClient from './axiosClient';

const userAPI = {
  updateUser(data) {
    const { id } = data;
    console.log(data);
    const url = `/users/${id}`;
    return axiosClient.put(url, data);
  },
  getUser(userId) {
    const url = `/users/${userId}`;
    return axiosClient.get(url);
  },
  getUsersAdmin() {
    const url = `/users`;
    return axiosClient.get(url);
  },
  deleteUser(userId) {
    const url = `/users/${userId}`;
    return axiosClient.delete(url);
  },
  getBookingJobs() {
    const url = `/thue-cong-viec/lay-danh-sach-da-thue`;
    return axiosClient.get(url);
  },
  bookJob(info) {
    const url = `/thue-cong-viec`;
    return axiosClient.post(url, info);
  },
  deleteBookingJob(jobId) {
    const url = `/thue-cong-viec/${jobId}`;
    return axiosClient.delete(url);
  },
};
export default userAPI;
