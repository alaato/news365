"use client";
import { createContext, useState, useContext, useEffect } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children, isAuth }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(isAuth);
	const [isAuthor, setIsAuthor] = useState(false);
	useEffect(() => {
		fetch("/api/user/isauthor/").then(response => setIsAuthor(response.ok));
	}, [isAuthenticated])

	// Functions to update authentication state
	const login = () => setIsAuthenticated(true);
	const logout = () => setIsAuthenticated(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout, isAuthor, setIsAuthor }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
