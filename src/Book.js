import React from 'react';
import BookNow from './BookNow';

function Book() {
  return (
    <div>
        {/* <!-- Book Now --> */}
    <div class="book">
        <div class="inner-book">
            <div><input type="text" placeholder="Arrival"/></div>
            <div><input type="text" placeholder="Departure"/></div>
            <div><input type="number" placeholder="Capacity"/></div>
            <div><input type="text" placeholder="State"/></div>
            {/* <div class="book-btn">
                <button onClick={bookNow} class="bookNow" id="book">Book Now</button>
            </div> */}
            <BookNow></BookNow>
            <div class="blue"></div>
        </div>
    </div>

    </div>
  )
}

export default Book