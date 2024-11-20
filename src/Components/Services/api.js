import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch users data
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    localStorage.setItem('users', JSON.stringify(response.data)); // Store in localStorage
    return response.data; 
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

// Add a new user
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user); 
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    users.push(response.data); 
    localStorage.setItem('users', JSON.stringify(users));
    return response.data; 
  } catch (error) {
    throw new Error('Failed to add user');
  }
};

// Edit an existing user
export const editUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedUser); 
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex((user) => user.id === id);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    users[userIndex] = { ...users[userIndex], ...updatedUser }; // Update user in localStorage
    localStorage.setItem('users', JSON.stringify(users));
    return response.data; // Return updated user data
  } catch (error) {
    throw new Error('Failed to edit user');
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`); // API call to delete user
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex((user) => user.id === id);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    users.splice(userIndex, 1); // Remove user from localStorage
    localStorage.setItem('users', JSON.stringify(users));
    return users; // Return updated users list
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};
