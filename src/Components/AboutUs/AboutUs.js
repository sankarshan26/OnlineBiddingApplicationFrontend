import React from 'react';
import Footer from "../Footer/Footer.js";
import Navbar from '../NavigationBar/Navbar';

function About() {
  return (
    <div>
      <Navbar/>


  <section class="container mx-auto my-8 p-8 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center">
    <div class="md:order-2 mb-6 md:mb-0 p-12">
      <h2 class="text-3xl font-semibold mb-4 text-center">Our Story</h2>
      <p class="text-gray text-xl">
        Welcome to Online Auctions, where we believe that every item has a story and a new chapter waiting to be
        written. Our journey began with a passion for connecting people with unique and extraordinary treasures from
        around the world.
      </p>
      <p class="text-gray text-xl mt-2">
        At Online Auctions, we strive to create a seamless and exciting platform for buyers and sellers to engage in
        the thrill of auctions. Whether you're a seasoned collector or a first-time bidder, we're here to make your
        experience unforgettable.
      </p>
    </div>
    {/* <div class="md:w-4/12 md:order-1 ">
      <img src="https://thumbs.dreamstime.com/z/inside-auction-house-fasig-tipton-lexington-united-states-may-161317587.jpg?w=768" alt="Our Story Image" class="rounded-full"/>
    </div> */}
  </section>

  <section class="container mx-auto my-8 p-8 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center">
    <div class="p-10">
      <h2 class="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
      <p class="text-gray text-xl">
        Our mission is to redefine the online auction experience by providing a user-friendly platform that empowers
        individuals to discover, bid, and win exceptional items. We are committed to fostering a community where
        passion meets rarity, and every bid opens a new world of possibilities.
      </p>
    </div>
  </section>

  <section class="container mx-auto my-8 p-8 bg-white rounded-3xl shadow-lg">
    <h2 class="text-3xl font-semibold mb-4">Meet the Development Team</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div class="bg-gray-200 p-4 rounded shadow-md flex flex-col items-center">
      <a href="https://www.linkedin.com/in/sankarshan-mishra/" target="_blank" rel="noreferrer" >
        <img src="https://media.licdn.com/dms/image/D5603AQF-jthEiom01Q/profile-displayphoto-shrink_100_100/0/1685634936904?e=1705536000&v=beta&t=JY2XqtLxMkuY5N9hbY8j9NZWfa-5nQjq33vTQQB8ooE" alt="Sankarshan" class="rounded-full mb-2" style={{"width":"150px","height":"150px"}}/>
        <h3 class=" font-semibold mb-2 text-gray text-xl text-center">Sankarshan Mishra</h3>
        <p class=" text-gray font-medium text-center">Frontend Developer</p></a>
      </div>
      <div class="bg-gray-200 p-4 rounded shadow-md flex flex-col items-center">
      <a href="https://www.linkedin.com/in/aditya-deshmukh-aa6422289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" >
        <img src="https://media.licdn.com/dms/image/D4D03AQHBcgV3OcZTGA/profile-displayphoto-shrink_400_400/0/1697951547993?e=1705536000&v=beta&t=zckeA09HCkroYYY2IvXzbWv9rRdPvvC9TddohUvRfzs" alt="Aditya" class="rounded-full mb-2" style={{"width":"150px","height":"150px"}}/>
        <h3 class=" font-semibold mb-2 text-gray text-xl text-center">Aditya Deshmukh</h3>
        <p class=" text-gray font-medium text-center">Backend Developer</p></a>
      </div>
      <div class="bg-gray-200 p-4 rounded shadow-md flex flex-col items-center">
      <a href="https://www.linkedin.com/in/sai-krishna-kanth-vs-97112523b/" target="_blank" rel="noreferrer" >
        <img src="https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg" alt="Alex Johnson" class="rounded-full mb-2" style={{"width":"150px","height":"150px"}}/>
        <h3 class=" font-semibold mb-2 text-gray text-xl text-center">Sai Krishna Kanth VS</h3>
        <p class=" text-gray font-medium text-center">Frontend Developer</p></a>
      </div>
      <div class="bg-gray-200 p-4 rounded shadow-md flex flex-col items-center">
      <a href="https://www.linkedin.com/in/karthik-reddy-a5a636277/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" >
        <img src="https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg" alt="Alex Johnson" class="rounded-full mb-2" style={{"width":"150px","height":"150px"}}/>
        <h3 class=" font-semibold mb-2 text-gray text-xl text-center">Karthik Reddy</h3>
        <p class=" text-gray font-medium text-center">Design Team</p></a>
      </div>
      <div class="bg-gray-200 p-4 rounded shadow-md flex flex-col items-center">
      <a href="https://www.linkedin.com/in/sankarshan-mishra/" target="_blank" rel="noreferrer" >
        <img src="https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg" alt="Alex Johnson" class="rounded-full mb-2" style={{"width":"150px","height":"150px"}}/>
        <h3 class=" font-semibold mb-2 text-gray text-xl text-center">Anushka Singh</h3>
        <p class=" text-gray font-medium text-center">Design Team</p></a>
      </div>
    </div>
  </section>


<Footer/>
    </div>
    
  )
}

export default About
