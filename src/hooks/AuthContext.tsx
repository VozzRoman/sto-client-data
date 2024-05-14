
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, sendPasswordResetEmail , UserCredential, signOut , onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import firebase from 'firebase/compat/app';

interface AuthData {
  currentUser: firebase.User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthData | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
 };
 const resetPassword = (email: string) => {
	return sendPasswordResetEmail(auth, email);
 }
 const logout = () => {
	return signOut(auth);
 };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
		setRefreshing(false);
      setCurrentUser(user as firebase.User);
    });

    return unsubscribe;
  }, []);

  const value: AuthData = {
    currentUser,
    signup,
	 login,
	 logout,
	 resetPassword,
	 
	 
  };

  return (
    <AuthContext.Provider value={value}>
      {!refreshing && children}
    </AuthContext.Provider>
  );
};

