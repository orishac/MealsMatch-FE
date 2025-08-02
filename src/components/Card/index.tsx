
import "./styles.scss";
import Star from '../../assets/star.svg?react';
import Heart from '../../assets/heart-2.svg?react';

const Card = () => {
  return (
    <div className="card">
        <div className="card__image"></div>
        <div className="card__detailes">
            <h1>שם המסעדה</h1>
            <div className="card__detailes-info">
                <div className="card__detailes-info-rate">
                    <h2>3.4</h2>
                    <div className="card__star" data-testid="star-icon">
                         <Star/>
                    </div>

                </div>
                <div className="card__heart" data-testid="heart-icon">
                    <Heart/>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Card;
