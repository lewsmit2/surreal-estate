import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faTag, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "../styles/propertycard.css";

const PropertyCard = ({ props }) => {
    const { bathrooms, bedrooms, city, email, title, type, price } = props;
    return (
        <div className="properties">
        <div className="property-card">
            <div className="property-card__title">
                {title}
            </div>
            <div className="property-card__type">
                {type}
            </div>
            <div className="property-card__bathrooms">
            <FontAwesomeIcon icon={faBath} />
                {bathrooms}
            </div>
            <div className="property-card__bedrooms">
            <FontAwesomeIcon icon={faBed} />
                {bedrooms}
            </div>
            <div className="property-card__price">
            <FontAwesomeIcon icon={faTag} />
                {price}
            </div>
            <div className="property-card__city">
            <FontAwesomeIcon icon={faLocationDot} />
                {city}
            </div>
            <div className="property-card__email">
            <FontAwesomeIcon icon={faEnvelope} />
                {email}
            </div>
         </div>
         </div>
  )
}

export default PropertyCard