import jwt from "jsonwebtoken";
const secretKey = "nikson@#$%!shrestha@$&!*";

export const setUser = (user) => {
  return jwt.sign(user, secretKey);
};
export const getUser = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.log(error);
  }
};
