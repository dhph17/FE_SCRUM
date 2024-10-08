import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export default function AppProvider({ children, initialSessionToken, initialRole }) {
    const [role, setRole] = useState(() => {
        return initialRole || localStorage.getItem('role');
    });

    const [sessionToken, setSessionToken] = useState(() => {
        return initialSessionToken || localStorage.getItem('accessToken') || '';
    });

    useEffect(() => {
        if (sessionToken && role) {
            localStorage.setItem('role', role)
            localStorage.setItem('accessToken', sessionToken);
        } else {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('role')
        }
    }, [sessionToken, role]);

    return (
        <AppContext.Provider value={{ sessionToken, setSessionToken, role, setRole }}>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node,
    initialSessionToken: PropTypes.string,
    initialRole: PropTypes.string
};
