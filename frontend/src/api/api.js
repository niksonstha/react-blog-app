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
