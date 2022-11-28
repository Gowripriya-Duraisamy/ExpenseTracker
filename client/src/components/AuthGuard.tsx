import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

interface AuthGuardProps {
  children?: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated} = useAuth();
  const navigate = useNavigate();
    console.log("AuthGuard", isAuthenticated);
  useEffect(() => {
    if(!isAuthenticated) {
        navigate("/", {replace: true})
    }
  }, [isAuthenticated]) //eslint-disable-line

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
