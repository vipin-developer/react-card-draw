import React from 'react';
const CardsComponent = ({ cardData }) => {
  return (
    <div className="cards">
      <p
        className="card-value"
        style={
          cardData.suit === '❤️' || cardData.suit === '♦️'
            ? { color: 'red' }
            : { color: 'black' }
        }
      >
        {cardData.value}
      </p>
      {cardData.suit}
    </div>
  );
};
export default CardsComponent;
