// auth.js

export const login = async (credentials) => {
    // Make a POST request to your server's login endpoint
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    
    // Store the token in localStorage
    localStorage.setItem('token', data.token);
  };
  
  export const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };
  
  export const isAuthenticated = () => {
    // Check if the token exists in localStorage
    return localStorage.getItem('token') !== null;
  };
  