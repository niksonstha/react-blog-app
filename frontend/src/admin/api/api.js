import axios from "axios";

export const adminRegister = async (fullname, email, password) => {
  try {
    const response = await axios.post(import.meta.env.VITE_ADMIN_REGISTER_URL, {
      fullname,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const adminLogin = async (email, password) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_ADMIN_LOGIN_URL,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_GETUSERS_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
};
