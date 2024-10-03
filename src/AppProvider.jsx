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

export default function AppProvider({ children, initialSessionToken }) {

    const [sessionToken, setSessionToken] = useState(() => {
        return initialSessionToken || localStorage.getItem('accessToken') || '';
    });

    useEffect(() => {
        if (sessionToken) {
            localStorage.setItem('accessToken', sessionToken);
        } else {
            localStorage.removeItem('accessToken');
        }
    }, [sessionToken]);

    return (
        <AppContext.Provider value={{ sessionToken, setSessionToken }}>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node,
    initialSessionToken: PropTypes.string,
};
