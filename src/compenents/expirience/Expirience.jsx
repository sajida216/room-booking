import React from 'react'
import img from '../../Images/room11.jpg'
import img1 from '../../Images/img.jpg'
import Navbar from '../Nav'
const Expirience = () => {
    return (
      <div>
        {/* <Navbar/> */}
  <div className="position-relative mt-5 " style={{ height: "500px" }}>
  {/* Gray Box as Background */}
  <div
    className="bgcolor position-absolute shadow"
    style={{
      height: "120%",
      width: "75%",
      top: 0,
      right: 0,
      zIndex: 0,
    }}
  >
    <div className='position-absolute ' style={{ top: "10%", left: "53%", zIndex: 1}}>
         <p className="fs-4">The Convenient Hotel</p>
         <p className="fs-3">Discover unforgettable experiences with every stay at our Hotels.</p>
         <p  style={{fontSize:"20px"}}>At StayFinder, we believe every stay should be more than just a place to rest. Our carefully curated hotels offer a perfect blend of comfort, elegance, and personalized service to make your trip truly unforgettable. Whether you’re traveling for business or leisure, our accommodations are designed to create memories that last a lifetime. Indulge in world-class amenities, savor delicious cuisines, and enjoy unmatched hospitality. With StayFinder, your journey becomes as delightful as the destination</p>
    </div>
   
  </div>

  {/* Image on Top */}
  <div className="position-absolute" style={{ top: "50%", left: "5%", transform: "translateY(-50%)", zIndex: 1 }}>
    <img src={img} className="img-fluid" style={{ height: "400px" }} alt="..." />
  </div>
   <div className="position-absolute" style={{ top: "80%", left: "30%", transform: "translateY(-50%)", zIndex: 1 }}>
    <img src={img1} className="img-fluid" style={{ height: "280px" , border:"30%" }} alt="..." />
  </div>
</div>
</div>
    )
}

export default Expirience
