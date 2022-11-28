import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

interface GuestGuardProps {
    children?: ReactNode
}

const GuestGuard: FC<GuestGuardProps> = ({children}) => {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    console.log("GuestGuard", isAuthenticated);

    useEffect(() => {
        if(isAuthenticated) {
            navigate("/expense/transactions", {replace: true}); 
        }
    }, [isAuthenticated]); //eslint-disable-line
    return <>{children}</>
}

export default GuestGuard;