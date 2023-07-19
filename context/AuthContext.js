import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';


export const AuthContext = createContext();

// Create the AuthProvider component to manage the user's authentication state
export const AuthProvider = ({ children }) => {
  // State to hold the user object and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect runs when the component mounts and sets up the authentication listener
  useEffect(() => {
    // The `onAuthStateChanged` function provided by Firebase listens for changes in the user's authentication state
    // When a user logs in or out, this function will be triggered with the user object (if logged in) or null (if logged out)
    const unsubscribe = auth.onAuthStateChanged(user => {
      // Update the user state with the current user object (can be null if logged out)
      setUser(user);
      // Set loading to false to indicate that the authentication process is complete
      setLoading(false);
    });

    // Clean up the subscription to the authentication listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // If the loading state is true, it means the authentication process is still ongoing
  if (loading) {
    // You can render a loading indicator here or return null to render nothing
    return null;
  }

  // If the loading is complete, render the AuthContext.Provider with the user value
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};