import React, { useState } from 'react';

function Login() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
  };

  const [usersLogin, setUsersLogin] = useState([]);
  const [usersRegister, setUsersRegister] = useState([]);

  const addTologin = () => {
    let name = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let obj = {
        username:name,
        password:password
    }
    let k = [...usersLogin];
    k.push(obj);
    setUsersLogin(k);
  }

  const addToRegister = () => {
    let name = document.getElementById('registerName').value;
    let username = document.getElementById('registerUsername').value;
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;
    let obj = {
        name:name,
        username:username,
        email:email,
        password:password
    }
    let k = [...usersRegister];
    k.push(obj);
    setUsersRegister(k);
  }

  return (
    <div className='loginPage'>
      <div className="container mt-5 ">
      <ul className="nav nav-tabs">
        <li className="nav-item ovr">
          <a
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Login
          </a>
        </li>
        <li className="nav-item ovr">
          <a
            className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => handleTabChange('register')}
          >
            Register
          </a>
        </li>
      </ul>

      <div className="tab-content mt-4">
        {activeTab === 'login' && (
          <div className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  name="loginEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  name="loginPassword"
                  required
                />
              </div>
              <button type="submit" className="  hvr" onClick={addTologin}>Submit</button>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}>
            <h2>Register</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="registerName" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="registerName"
                  name="registerName"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerUsername" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="registerUsername"
                  name="registerUsername"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="registerEmail"
                  name="registerEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="registerPassword"
                  name="registerPassword"
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeTerms"
                  name="agreeTerms"
                  required
                />
                <label className="form-check-label" htmlFor="agreeTerms">I have read and agree to the terms</label>
              </div>
              <button type="submit" className="hvr"onClick={addToRegister}>Submit</button>
            </form>
          </div>
        )}
      </div>
      <div className="loginDetails" style={{"display":"none"}}>
        {usersLogin.map((ele) => {
            return (
                <div>
                    <p>{`${ele.username}   ${ele.password}`}</p>
                </div>
            )
        })}
      </div>
      <div className="registerDetails" style={{"display":"none"}}>
        {usersRegister.map((ele) => {
            return (
                <div>
                    <p>{`${ele.name}  ${ele.username}  ${ele.email}   ${ele.password}`}</p>
                </div>
            )
        })}
      </div>
    </div>
    </div>
  );
}

export default Login;
