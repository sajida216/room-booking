import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Nav';
import Img1 from '../../Images/room1.jpg';
import axios from 'axios';

const Addcart = () => {
  const [bookingData, setBookingData] = useState([]);
  // Assume you store userId after login
const userId = localStorage.getItem('userId');


  useEffect(() => {
    const fetchBookings = async () => {
      try {
       const response = await axios.get(`http://localhost:5000/get-cart-items/${userId}`);
        setBookingData(response.data); // ✅ Now bookingData is an array
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

   // 🧹 Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/addcart/${id}`);
      // Remove from frontend
      setBookingData(bookingData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {bookingData.length > 0 ? (
          bookingData.map((booking, index) => (
            <div
              key={index}
              className="card mb-3"
              style={{ marginLeft: "30px", marginRight: "30px", width: "60%" }}
            >
              <div className="row">
                <div className="col-md-6 p-3">
                  <img src={Img1} alt="room" style={{ height: "120px", marginLeft: "20px" }} />
                </div>
                <div className="col-md-6 mt-4">
                  <p>Selected Hotel: {booking.hotelName || "Not selected"}</p>
                  <p>Check-In: {booking.checkInDate ? new Date(booking.checkInDate).toLocaleDateString() : "Not selected"}</p>
                  <p>Check-Out: {booking.checkOutDate ? new Date(booking.checkOutDate).toLocaleDateString() : "Not selected"}</p>
                   <button
                    className="btn  mt-2 mb-3 text-danger"
                    onClick={() => handleDelete(booking._id)}
                  >
                  remove Booking
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No bookings found</p>
        )}
      </div>
    </div>
  );
};

export default Addcart;
