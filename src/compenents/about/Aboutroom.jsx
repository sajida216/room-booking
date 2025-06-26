import React from 'react'
//import { useParams } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../Nav';
import PlaceFeaters from '../about/Placefeaters'

import Img1 from '../../Images/img.jpg'
import Img2 from '../../Images/room2.jpg'
import Img3 from '../../Images/room3.jpg'
import Img4 from '../../Images/room4.jpg'
import Img5 from '../../Images/room5.jpg'
import Img6 from '../../Images/room9.jpg'
import Img7 from '../../Images/room7.jpg'
import Img8 from '../../Images/room8.jpg'
import Img9 from '../../Images/room10.jpg'
import Img10 from '../../Images/room11.jpg'
 
//hall
import Img1A from '../../Images/hall4.jpg'
import Img2A from '../../Images/hall5.jpg'
import Img3A from '../../Images/hall6.jpg'
import Img4A from '../../Images/hall8.jpg'
import Img5A from '../../Images/hall9.jpg'
import Img6A from '../../Images/room9.jpg'
import Img7A from '../../Images/room7.jpg'
import Img8A from '../../Images/room8.jpg'
import Img9A from '../../Images/room10.jpg'
import Img10A from '../../Images/room11.jpg'
//kitchen
import Img1B from '../../Images/kitchen1.jpg'
import Img2B from '../../Images/kitchen2.jpg'
import Img3B from '../../Images/kitchen3.jpg'
import Img4B from '../../Images/kitchen4.jpg'
import Img5B from '../../Images/kitchen5.jpg'
//pool
import Img6B from '../../Images/pool1.jpg'
import Img7B from '../../Images/citout1.jpg'
import Img8B from '../../Images/pool3.jpg'
import Img9B from '../../Images/pool4.jpeg'
import Img10B from '../../Images/pool5.jpg'

import Img1C from '../../Images/sitout1.jpg'
import Img2C from '../../Images/sitout2.jpg'
import Img3C from '../../Images/sitout3.jpg'
import Img4C from '../../Images/sitout4.jpg'
import Img5C from '../../Images/sitout6.jpg'
import Img6C from '../../Images/sitout7.jpg'
import Img7C from '../../Images/sitout8.jpg'
import Img8C from '../../Images/citout2.jpg'
import Img9C from '../../Images/sitout10.jpg'
import Img10C from '../../Images/citout1.jpg'

 const Rooms =[
        { id: 1, image: Img1, name: "BHS star hotel", category: "room1"},
        { id: 2, image: Img2, name: "Sunset Residency", category: "room2"},
        { id: 3, image: Img3, name: "Oceanview Suites",category: "room3"},
        { id: 4, image: Img4, name: "The Urban Nest",category: "room4"},
        { id: 5, image: Img5, name:  "Palm Grove Apartments",category: "room5"},
        { id: 6, image: Img6, name: "Skyline Towers",category: "room6"},
        { id: 7, image: Img7, name: "The Green Villas",category: "room7"},
        { id: 8, image: Img8, name: "Lakeview Retreat",category: "room8"},
        { id: 9, image: Img9, name: "Hilltop Haven",category: "room9"},
        { id: 10, image: Img10, name: "The Grand Residency",category: "room10"},

         { id: 11, image: Img1A, category: "room1"},
        { id: 12, image: Img2A,category: "room2"},
        { id: 13, image: Img2A,category: "room3"},
        { id: 14, image: Img3A,category: "room4"},
        { id: 15, image: Img4A,category: "room5"},
        { id: 16, image: Img5A,category: "room6"},
        { id: 17, image: Img6A,category: "room7"},
        { id: 18, image: Img7A, category: "room8"},
        { id: 19, image: Img8A, category: "room9"},
        { id: 20, image: Img9A,category: "room10"},
        { id: 21, image: Img10A,category: "room11"},

         { id: 22, image: Img1B,category: "room1"},
        { id: 23, image: Img2B, category: "room2"},
        { id: 24, image: Img3B, category: "room3"},
        { id: 25, image: Img4B, category: "room5"},
        { id: 27, image: Img6B, category: "room6"},
        { id: 28, image: Img7B, category: "room7"},
        { id: 29, image: Img8B,category: "room8"},
        { id: 30, image: Img9B, category: "room9"},
        { id: 31, image: Img10B,category: "room10"},

         { id: 32, image: Img1C, category: "room1"},
        { id: 34, image: Img2C, category: "room2"},
        { id: 35, image: Img3C, category: "room3"},
        { id: 36, image: Img4C, category: "room4"},
        { id: 37, image: Img5C, category: "room5"},
        { id: 38, image: Img6C, category: "room6"},
        { id: 39, image: Img7C, category: "room7"},
        { id: 40, image: Img8C, category: "room8"},
        { id: 41, image: Img9C,category: "room9"},
        { id: 42, image: Img10C, category: "room10"},
    ] 
const roomfeatures =[
  // {id:1,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:2,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:3,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:4,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:5,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:6,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:7,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:8,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:9,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
  // {id:10,room:"2 Bed room , Living Room , Kitchen , Bathroom , Patio"},
]
const Aboutroom = () => {
    const { id } = useParams(); 
    //  new
  //   const location = useLocation();
  // const hotelName = location.state?.hotelName || "";

    console.log("Category ID from URL:", id);
console.log("Rooms:", Rooms);
    const Roomsfiltered = Rooms.filter((room) => room.category === id);
console.log("Filtered rooms:", Roomsfiltered);

  return (

<div>
   <Navbar/>
   <div>
    {Roomsfiltered.map((item) =>(
        <div className='justify-content-center align-item-center mt-4 fs-3' style={{ marginLeft:"760px"}}>
            {item.name}
         </div> 
         ))}
   </div>
  <div className='d-flex flex-wrap '>
   {Roomsfiltered.map((item) =>(
      <div key={item.id}>
       
        {/* Images displayed in row-wise format */}
        <div className=' justify-content-center p-4'>
          {/* {item.image.map((img, index) => ( */}
            <img
               src={item.image}
              alt={item.name}
              className='card-img-top'
              style={{
                height: '20rem',
                width: '26rem',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
        </div>
      </div>
      
    ))}
<h4 className='ms-5'><spam>. 2 Bedroom  . Living Room  . Kitchen  . Bathroom . Patio</spam> </h4>
  </div>

  <div className='ms-5 fs-4 mt-5'>
    <div className='d-flex justify-content-center'><h2>What this place offers</h2></div>
     <PlaceFeaters /> 
  </div>
 
 </div>
  )
}

export default Aboutroom

//hotelName={hotelName}
    // <div className='card ms-5 mt-5 mb-5'style={{ width: '25rem' }} >
    //     <div className=''>
    //         {Roomsfiltered.map((item) =>(
    //         <div key={item.id} className=''>  
    //         <div className='d-flex flex-wrap gap-4'>
    //           <img src={item.image} alt={item.name} className="card-img-top "  style={{ height: '10rem',
    //    padding:12,
    //     //  height:'20%',
    //     width:'80%',
    //     objectFit: 'cover',
    //     borderRadius: '8px', }}/>
    //         </div>
    //         <div classNames="card-body">
    //           <p>1 bedroom</p>
    //         </div>
    //          </div>
    //         ))}
    //     </div>
    // </div>
 
