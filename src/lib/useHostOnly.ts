import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

export default function useHostOnly() {
  const { user, isUserLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLoading) {
      if (!user.is_host) {
        navigate("/");
      }
    }
  }, [isUserLoading, user?.is_host, navigate]);
  return;
}
