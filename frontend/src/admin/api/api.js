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
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_DELETEUSER_URL}/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (category) => {
  try {
    const response = await axios.post(import.meta.env.VITE_ADDCATEGORY_URL, {
      category,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_GETCATEGORY_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_DELETECATEGORY_URL}/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = async (
  name,
  description,
  price,
  inStock,
  image,
  categoryId
) => {
  try {
    const response = await axios.delete(import.meta.env.VITE_ADDPRODUCT_URL, {
      name,
      description,
      price,
      inStock,
      image,
      categoryId,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
