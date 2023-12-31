async function fetchUserData() {
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    return user;
  }
  
  export { fetchUserData }; // Export the function for use in other files
  