import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userservices from "../../../services/UserServices";
const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();
    const [roles,setRoles] = useState("");
    // call this function khi muốn xác thực người dùng

    const setToken = (newToken) => {
        setToken_(newToken);
        // userservices.getUserInfo(token).then((res)=>{
        //     setRoles(res.data.user.roles);
        // })
        navigate("/", { replace: true });
    };
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [token]
    );
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
export default AuthProvider;