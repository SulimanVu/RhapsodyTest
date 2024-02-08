import { Link } from 'react-router-dom';
import ErrorBoundary from 'shell/ErrorBoundary';

import Router from './router';

const LoginApp = () => {
  return (
    <ErrorBoundary>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/login/register">Register</Link>
          </li>
          <li>
            <Link to="/login/reset-password">Reset Password</Link>
          </li>
        </ul>
      </nav>

      <Router />
    </ErrorBoundary>
  );
};

export default LoginApp;
