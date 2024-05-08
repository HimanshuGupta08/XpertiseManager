/* eslint-disable no-unused-vars */
import React from 'react';
import UserView from './UserView';

// Assuming you have a userId, you can pass it to the UserView component
const userId = 1; // or whatever userId you want to fetch

// Use React in the UserView component
const App = () => {
  return (
    <div className="App">
      <UserView userId={userId} />
    </div>
  );
};

export default App;