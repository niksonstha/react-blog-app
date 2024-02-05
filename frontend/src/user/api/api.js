import { instance } from "../../axios/axios";

export const registerUser = async (fullname, username, email, password) => {
  try {
    const response = await instance.post("/user/createUser", {
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
    const response = await instance.post(
      "/user/loginUser",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, fullname, email) => {
  try {
    const response = await instance.patch(`/user/${id}`, {
      fullname,
      email,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const changePassword = async (id, currentPassword, newPassword) => {
  try {
    const response = await instance.patch(`/user/changePassword/${id}`, {
      currentPassword,
      newPassword,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
