import './App.css';
import SignIn from './login/signin';
import { useState } from 'react';
import SignUp from './login/signup';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './page/dashboard';
import Layout from './component/layoutnavbar';

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  const isLoggedIn = localStorage.getItem("token") === null ? false : true

  return (
    <div>
      <Routes>
        <Route exact path='/'
          element={
            currentForm === "login" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
          }
        />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes >
    </div >
  );
}

export default App;
