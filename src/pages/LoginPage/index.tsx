import { Link } from 'react-router-dom';
import './styles.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__left_side">
        <div className="login-page__left_side-form">
          <h2>היכנס</h2>

          <label>אימייל</label>
          <input type="text" placeholder="הזן את האימייל שלך" />

          <label>סיסמא</label>
          <input type="password" placeholder="הזן את הסיסמא שלך" />

          <p className="register-link">
            ?עוד לא רשום <Link to="/signup">לחץ כאן</Link>
          </p>
          <button className='login-page__left_side-form__button'>שלח</button>
        </div>
      </div>

      <div className="login-page__right_side">
        <div className="login-page__right_side-circle">
        </div>
      </div>
    </div>
  );
};

export default LoginPage;