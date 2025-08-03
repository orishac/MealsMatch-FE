
import Card from '../../components/Card';
import CategoriesCarousel from '../../components/CategoriesCarousel';
import './styles.scss'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__categories">
        <div className="home-page__carousel_title">
          בחר קטגוריה
        </div>
        <div className="home-page__categories">
          <CategoriesCarousel />
        </div>
      </div>
      <div className="home-page__reccomendations">
        <div className="home-page__reccomendations-title">
          מסעדות מומלצות
        </div>
        <div className="home-page__reccomendations-content">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;