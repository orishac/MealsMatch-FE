import './styles.scss';
import Star from '../../assets/star.svg?react';
import Heart from '../../assets/heart-2.svg?react';
import Wolt from "../../assets/wolt.svg?react";
import Cibus from "../../assets/cibus.svg?react";
import Tenbis from "../../assets/tenbis.svg?react";
import Tabit from "../../assets/tabit.svg?react";

const RestaurantPage = () => {
  return (
    <div className="restaurant-page">
      <div className="restaurant-page__header">
                 <div className="restaurant-page__image-gallery">
           <div className="restaurant-page__main-image"></div>
         </div>
        
                 <div className="restaurant-page__info">
           <div className="restaurant-page__title-section">
             <h1 className="restaurant-page__name">שם המסעדה</h1>
           </div>
           <div className="restaurant-page__rating-section">
             <div className="restaurant-page__rating">
               <span className="restaurant-page__rating-number">4.2</span>
               <div className="restaurant-page__star">
                 <Star />
               </div>
               <span className="restaurant-page__reviews">(127 ביקורות)</span>
             </div>
             <div className="restaurant-page__heart">
               <Heart />
             </div>
           </div>
          
          <div className="restaurant-page__tags">
            <span className="restaurant-page__tag">איטלקי</span>
            <span className="restaurant-page__tag">פיצה</span>
            <span className="restaurant-page__tag">פסטה</span>
          </div>
          
          
          
          <div className="restaurant-page__delivery-companies">
            <h3>הזמנה דרך:</h3>
            <div className="restaurant-page__companies">
              <Cibus className="company-logo" />
              <Tabit className="company-logo" />
              <Tenbis className="company-logo" />
              <Wolt className="company-logo" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="restaurant-page__content">
        <div className="restaurant-page__details-section">
          <h2 className="restaurant-page__section-title">פרטים נוספים</h2>
          <div className="restaurant-page__details-grid">
            <div className="restaurant-page__detail-item">
              <h4>שעות פעילות</h4>
              <p>ראשון-חמישי: 11:00-23:00</p>
              <p>שישי: 11:00-16:00</p>
              <p>שבת: 19:00-23:00</p>
            </div>
            <div className="restaurant-page__detail-item">
              <h4>כתובת</h4>
              <p>רחוב הרצל 123, תל אביב</p>
            </div>
            <div className="restaurant-page__detail-item">
              <h4>טלפון</h4>
              <p>03-1234567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
