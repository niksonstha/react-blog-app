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
