import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

interface IHostOnlyPageProps {
  children: React.ReactNode;
}

export default function HostOnlyPage({ children }: IHostOnlyPageProps) {
  const { user, isUserLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLoading) {
      if (!user.is_host) {
        navigate("/");
      }
    }
  }, [isUserLoading, navigate]);
  return <>{children}</>;
}
