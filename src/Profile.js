import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);

  if (Object.keys(user).length === 0) {
    return <div>Please fill out the form to view your profile.</div>;
  }

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Batch: {user.batch}</p>
    </div>
  );
};

export default Profile;