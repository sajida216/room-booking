import React from 'react'
import { Link } from "react-router-dom";
import Img1 from '../../Images/room1.jpg'
import Img2 from '../../Images/room2.jpg'
import Img3 from '../../Images/room3.jpg'
import Img4 from '../../Images/room4.jpg'
import Img5 from '../../Images/room5.jpg'
import Img6 from '../../Images/room9.jpg'
import Img7 from '../../Images/room7.jpg'
import Img8 from '../../Images/room8.jpg'
import Img9 from '../../Images/room10.jpg'
import Img10 from '../../Images/room11.jpg'
 const properties = [
    { id: 1, image: Img1, name: "BHS star hotel", price: "₹7565 For 2 nights",location:"Banglore",category: "room1" },
    { id: 2, image: Img2, name: "Sunset Residency", price:"₹8565 For 2 nights",location:"Delhi",category: "room2"},
    { id: 3, image: Img3, name: "Oceanview Suites", price: "₹6565 For 2 nights",location:"Munnar",category: "room3"},
    { id: 4, image: Img4, name: "The Urban Nest", price: "₹8500 For 2 nights",location:"Kochi",category: "room4" },
    { id: 5, image: Img5, name: "Palm Grove Apartments", price: "₹7565 For 2 nights",location:"Banglore" ,category: "room5"},
    { id: 6, image: Img6, name: "Skyline Towers", price: "₹7500 For 2 nights",location:"Mysore" ,category: "room6"},
    { id: 7, image: Img7, name: "The Green Villas", price: "₹8765 For 2 nights",location:"Kashmir" ,category: "room7"},
    { id: 8, image: Img8, name: "Lakeview Retreat", price:"₹9500 For 2 nights",location:"Banglore" ,category: "room8"},
    { id: 9, image: Img9, name: "Hilltop Haven", price: "₹7999 For 2 nights",location:"Manglore",category: "room9" },
    { id: 10, image: Img10, name: "The Grand Residency", price: "₹7799 For 2 nights",location:"Banglore",category: "room10" },
  ]
const Card = (hotel) => {
  
//new add
      //const navigate = useNavigate();

  // const handleBookNow = (hotelName, category) => {
  //   navigate(`/about/${category}`, {
  //     state: { hotelName },
  //   });
  // };

  return (
    <div className=' d-flex flex-wrap gap-4 mt-4  ' >
      {properties.map((property) => (
        <div className="card shadow" style={{ width: '25rem' }} key={property.id}>
          <img src={property.image} className="card-img-top" alt={property.name} style={{ height: '15rem' }} />
          <div classNames="card-body">
            <p className="card-text ms-3 mt-3 fs-3">{property.name}</p>
            <p className="card-text ms-3 fs-5 txtcolor">{property.price}</p>
            <p className="card-text ms-3 fs-5 txtcolor">{property.location}</p>
            <div className="d-flex justify-content-end">
              {/* <a  to="/about" className="btn btn-primary mb-3 me-3">Book Now</a> to={`/about/${property.category}`  onClick={() => handleBookNow(property.name, property.category)}} */}
               < Link to={`/aboutrooms/${property.category}`}  className="btn btn-primary mb-3 me-3">
                 Book Now
               </Link>
        
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Card;
