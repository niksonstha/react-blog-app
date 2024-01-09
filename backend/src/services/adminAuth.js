import jwt from "jsonwebtoken";
const secretKey = "nikson@#$%!shrestha@$&!*";

export const setAdmin = (admin) => {
  const { _id, email, fullname } = admin;
  return jwt.sign({ _id, email, fullname }, secretKey, {
    expiresIn: "1h",
  });
};
export const getAdmin = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.log(error);
  }
};
