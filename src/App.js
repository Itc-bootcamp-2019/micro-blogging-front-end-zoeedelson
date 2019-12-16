import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllPosts from './components/allPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AllPosts/>
      </header>
    </div>
  );
}

export default App;
