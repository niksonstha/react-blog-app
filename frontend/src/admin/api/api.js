import { instance } from "../../axios/axios";

export const adminRegister = async (fullname, email, password) => {
  try {
    const response = await instance.post("/admin/register", {
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
    const response = await instance.post(
      "/admin/loginAdmin",
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
    const response = await instance.get("/admin/getAllUsers");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = async (id) => {
  try {
    const response = await instance.delete(`/admin/deleteUser/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (category) => {
  try {
    const response = await instance.post("/category/addCategory", {
      category,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async () => {
  try {
    const response = await instance.get("/category/getCategory");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await instance.delete(`/category/deleteCategory/${id}`);
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
  imagePath,
  categoryId
) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("image", imagePath);
    bodyFormData.append("name", name);
    bodyFormData.append("description", description);
    bodyFormData.append("price", price);
    bodyFormData.append("inStock", inStock);
    bodyFormData.append("categoryId", categoryId);
    const response = await instance.post("/product/addProduct", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await instance.get("/product/showProduct");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await instance.delete(`/product/deleteProduct/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
