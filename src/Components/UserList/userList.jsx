import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser, addUser, editUser } from '../Services/api.js';
import UserForm from '../UserForm/UserForm';
import './UserList.css';



const UserList = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currPage,setPage]=useState(1)
  //pagination
  const numOfPages=Math.ceil(users.length/5)
    let pages=Array(numOfPages).fill(1)
    const last=currPage*5
    const first=last-5
    const visible=users.slice(first,last) 
    const handleCurrPage=(curr)=>{
      setPage(curr)
  }
  // Load data from API
  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => setError('Failed to fetch users.'));
  }, []);

  // Delete a user
  const handleDelete = (id) => {
    deleteUser(id)
      .then((updatedUsers) => setUsers(updatedUsers))
      .catch(() => setError('Failed to delete user.'));
  };

  // Add or update user in the state
  const handleSave = async (user) => {
    console.log(user,"user data")
    try {
      if (user.id) {
        await editUser(user.id, user); 
        setUsers(JSON.parse(localStorage.getItem('users')));
      } else {
        const newUser = { id: Math.max(...users.map(user => user.id)) + 1,...user}; // Create a new user object with a unique ID
  
        console.log("Adding user", newUser);
        await addUser(newUser);
        setUsers(JSON.parse(localStorage.getItem('users')));
      }
      setSelectedUser(null); // Close the form
    } catch (err) {
      setError('Failed to save user.');
    }
  };

  // Edit user
  const handleEdit = (user) => setSelectedUser(user);

  return (
    <div>
      <h1>User Management</h1>

      {error && <p className="error">{error}</p>}
     <div>
      <div className="pagination">
     <span onClick={()=>setPage(prev=>prev-1)}>👈</span>
    {pages.map((item,ind)=>(<span key={ind} onClick={()=>handleCurrPage(item+ind)} className={item+ind===currPage?"active":""}> {item+ind} </span>))}
    <span onClick={()=>setPage(prev=>prev+1)}>👉</span>
    </div>
     </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='bottom-btn'>
      <button onClick={() => setSelectedUser({})}>Add User</button>
      </div>

      {selectedUser && (
        <div className="Formfiling">
          <div className="form-container">
            <UserForm
              user={selectedUser}
              onSave={handleSave}
              onCancel={() => setSelectedUser(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
