import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminProtectedRoute = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validateAdmin = () => {
    const cookie = Cookies.get("aid");

    if (!cookie) {
      navigate("/admin/login");
    }
  };
  useEffect(() => {
    validateAdmin();
  }, [validateAdmin]);
  return <Outlet />;
};

export default AdminProtectedRoute;
