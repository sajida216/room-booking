import React from 'react'
import Navbar from '../Nav'
import Searchbar from '../homepage/Searchbar.jsx'
import Card from '../cards/Card.jsx'
import Expirience from '../expirience/Expirience.jsx'
import Footer from '../footer/Footer.jsx'
const Home = () => {
  return (
    <div >
      <Navbar />
      <div class="pt-5 ms-5" >
      {/* <Searchbar /> */}
      </div>
      <div className='mt-5 ms-5'>
      <h2>Explore Our StayEase Listings Across Stunning Locations!</h2></div>
      <div  className="pt-5 ms-5">
      <Card/>
      </div>
      <Expirience/>
      <div className='mt-5' ><Footer/>
      </div>
    </div>
  );
};

export default Home;

