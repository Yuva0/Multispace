import { createContext, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: null,
    login: () => {},
    userUID: null
});

export const AuthContextProvider = ({ children }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [userUID, setUserID] = useState(null);

    const login = () => {
        debugger;
    };

    const context = { isLoggedIn, userUID, login };

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;