import axios from "axios";

export const registerUser = async (fullname, username, email, password) => {
  try {
    const response = await axios.post(import.meta.env.VITE_REGISTER_URL, {
      fullname,
      username,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_LOGIN_URL,
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
