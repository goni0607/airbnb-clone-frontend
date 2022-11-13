import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

interface IProtectedPageProps {
  children: React.ReactNode;
}

export default function ProtectedPage({ children }: IProtectedPageProps) {
  const { user, isLoggedIn, isUserLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLoading) {
      if (!isLoggedIn) {
        navigate("/");
      }
    }
  }, [isUserLoading, isLoggedIn, navigate]);
  return <>{children}</>;
}
