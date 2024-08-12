import React, { useState } from 'react';

function BookNow() {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div>
      <button id="book" onClick={() => setIsBooked(true)}>
        {isBooked ? '!! Booked !!' : 'Book Now'}
      </button>
    </div>
  );
}

export default BookNow;