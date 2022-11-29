import { FC, ReactNode, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

interface GuestGuardProps {
  children?: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const navigatePage = useCallback(
    (authenticated: boolean) => {
      if (authenticated) {
        user?.walletExist
          ? navigate("/expense/transactions", { replace: true })
          : navigate("/expense/wallet", { replace: true });
      }
    },
    [user, navigate]
  );

  useEffect(() => {
    navigatePage(isAuthenticated);
  }, [isAuthenticated, navigatePage]);
  return <>{children}</>;
};

export default GuestGuard;
