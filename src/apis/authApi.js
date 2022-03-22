class Auth{
    loginUser = (params) => {
        const url = 'auth/login';
        return axiosClient.post(url, params);
      };
}

const authApi = new Auth()
export default authApi