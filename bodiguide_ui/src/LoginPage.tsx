import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.module.css';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onForgotPassword: () => void;
}

const LoginPage: React.FC<LoginProps> = (props) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic to gather username and password
    const usernameInput = document.getElementById('usernameInput') as HTMLInputElement | null;
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement | null;

    const username = usernameInput?.value || '';
    const password = passwordInput?.value || '';

    // Call the onLogin prop with the entered credentials
    props.onLogin(username, password);
  };

  const handleCreateAccount = () => {
    // Navigate to the SignUp page
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome!</h2>
        <p>Please login to continue</p>
        <div className="input-group">
          <input type="text" id="usernameInput" placeholder="Username" />
        </div>
        <div className="input-group">
          <input type="password" id="passwordInput" placeholder="Password" />
        </div>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={props.onForgotPassword}>Forgot Password?</button>
        {/* Add navigation to the Create an account button */}
        <button onClick={handleCreateAccount}>Create an account</button>
      </div>
    </div>
  );
};

export default LoginPage;