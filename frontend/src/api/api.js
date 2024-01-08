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

export const updateUser = async (id, fullname, email) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_UPDATE_PROFILE_URL}/${id}`,
      {
        fullname,
        email,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const changePassword = async (id, currentPassword, newPassword) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_UPDATE_PASSWORD_URL}/${id}`,
      {
        currentPassword,
        newPassword,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
