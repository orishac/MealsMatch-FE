import { Link } from 'react-router-dom';
import './styles.scss';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-page__left_side">
        <div className="signup-page__left_side-circle">
        </div>
      </div>

      <div className="signup-page__right_side">
            <div className="signup-page__right_side-form">
                <h2>הרשמה</h2>

                <label>שם משתמש</label>
                <input type="text" placeholder="הזן את שם המשתמש שלך" />

                <label>אימייל</label>
                <input type="text" placeholder="הזן את האימייל שלך" />

                <label>סיסמא</label>
                <input type="password" placeholder="הזן את הסיסמא שלך" />

                <label>אימות סיסמא</label>
                <input type="password" placeholder="הקלד את הסיסמא שלך שוב" />

                <p className="login-link">
                    כבר נרשמת בעבר? <Link to="/login">לחץ כאן</Link>
                </p>
                <button className='signup-page__right_side-form__button'>הירשם</button>
            </div>
      </div>
    </div>
  );
};

export default SignupPage;