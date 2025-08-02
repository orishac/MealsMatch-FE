
import CategoriesCarousel from '../../components/CategoriesCarousel';
import './styles.scss'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__categories">
        <div className="home-page__title">
          בחר קטגוריה
        </div>
        <div className="home-page__categories">
          <CategoriesCarousel />
        </div>
      </div>
      <div className="home-page__reccomendations">
        <div className="home-page__title">
          מסעדות מומלצות
        </div>
        <div className="home-page__reccomendations-content"></div>
      </div>
    </div>
  );
};

export default HomePage;