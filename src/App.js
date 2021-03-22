import './App.module.css';
import React from 'react';
import Users from './containers/Users/Users';

function App() {
  return (
    <>
      <header>
        <h1>Users</h1>
      </header>
      <section className="container">
        <Users />
      </section>
    </>
  );
}
export default App;
