
import "./styles.scss";
import Star from '../../assets/star.svg?react';
import Heart from '../../assets/heart-2.svg?react';
import Wolt from "../../assets/wolt.svg?react"
import Cibus from "../../assets/cibus.svg?react"
import Tenbis from "../../assets/tenbis.svg?react"
import Tabit from "../../assets/tabit.svg?react"

const Card = () => {
  return (
    <div className="card">
        <div className="card__image"></div>
        <div className="card__detailes">
            <h1>שם המסעדה</h1>
            <div className="card__companies">      
                <Cibus data-testid="cibus-logo" className="company-logo" />
                <Tabit data-testid="tabit-logo" className="company-logo"/>
                <Tenbis data-testid="tenbis-logo" className="company-logo"/>
                <Wolt data-testid="wolt-logo" className="company-logo"/>
            </div>
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
