import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import axios from 'axios'; // 👈 to send data to backend

const Placefeaters = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [hotelName, setHotelName] = useState('');
  const userId = localStorage.getItem('userId');

 const handleBooking = async () => {
  if (!hotelName || !checkInDate || !checkOutDate) {
    toast.error("Please fill in all fields");
    return;
  }
   
  try {
    const response = await axios.post('http://localhost:5000/bookings', {
      hotelName,
      checkInDate,
      checkOutDate,
      userId,
      // userEmail: "test@example.com"  // Optional if needed in DB
    });

    if (response.status === 201) {
      toast.success("Booking successful!");
    } else {
      toast.error("Booking failed");
    }
  } catch (error) {
    console.error("❌ Booking Error:", error);
    toast.error("Booking failed");
  }
};

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>. Wifi</h4>
          <h4>. Dedicated workspace</h4>
          <h4>. Exterior security cameras on property</h4>
          <h4>. TV</h4>
          <h4>. Laundry</h4>
          <h4>. Hot water</h4>
        </div>

        <div className="col-md-6 d-flex justify-content-end">
          <div className="card shadow mb-4 p-3" style={{ height: 'auto', width: '50vh' }}>
            <div className="d-flex justify-content-center align-items-center"><p>Add dates for prices</p></div>

            <select
              className="form-select"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              style={{ maxWidth: '190px', margin: '10px auto' }}
            >
              <option value="">Select hotel name</option>
              <option value="BHS star hotel">BHS star hotel</option>
              <option value="Sunset Residency">Sunset Residency</option>
              <option value="Oceanview Suites">Oceanview Suites</option>
              <option value="The Urban Nest">The Urban Nest</option>
              <option value="Palm Grove Apartments">Palm Grove Apartments</option>
              <option value="Skyline Towers">Skyline Towers</option>
              <option value="The Green Villas">The Green Villas</option>
              <option value="Lakeview Retreat">Lakeview Retreat</option>
              <option value="Hilltop Haven">Hilltop Haven</option>
              <option value="The Grand Residency">The Grand Residency</option>
            </select>

            <div className="row">
              <div className="col-md-6" style={{ maxWidth: '160px', margin: '20px auto' }}>
                <h5>Check In Date</h5>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Choose a date"
                  className="form-control"
                />
              </div>

              <div className="col-md-6" style={{ maxWidth: '170px', margin: '20px auto' }}>
                <h5>Check Out Date</h5>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Choose a date"
                  className="form-control"
                />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <button onClick={handleBooking} className="btn btn-secondary" style={{ width: '40%' }}>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placefeaters;
