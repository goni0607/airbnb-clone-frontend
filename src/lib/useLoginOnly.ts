import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

export default function useLoginOnly() {
  const { isLoggedIn, isUserLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLoading) {
      if (!isLoggedIn) {
        navigate("/");
      }
    }
  }, [isUserLoading, isLoggedIn, navigate]);
  return;
}
