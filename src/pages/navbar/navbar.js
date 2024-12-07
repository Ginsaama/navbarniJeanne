import React from 'react';
import '../../App.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Navbar = () => {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleClick = () => {
      navigate('/googlemaps');  // Navigate to the Google Maps page
    };
    return (
        <nav class="relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
  <div class="flex w-full items-center justify-between px-3">
        
    <span class="text-xl text-black dark:text-white">iRenta</span>

{/* Search Bar */}
    <div class="flex w-full items-center justify-center px-3">
    <div class="relative w-full max-w-[400px]">
  <input
    type="text"
    class="w-full pl-5 pr-3 py-1.5 text-base font-normal text-surface border-primary rounded-l-2xl rounded-tr-2xl"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="search-button" />

  <button
    id="search-button"
    type="button"
    class="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2 text-xs bg-primary rounded-tr-2xl rounded-bl-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
    </svg>
  </button>
</div>
<button
onClick={handleClick}
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        class="px-2 pb-2 pt-2.5 ml-5 w-40 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none bg-button rounded-2xl">
        Recto, Manila
      </button>
    </div>


    <div class="flex items-center space-x-4">
    <button
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        class="bg-primary px-6 pb-2 pt-2.5 w-24 rounded-2xl text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none active:bg-primary-600">
        Login
      </button>
    </div>
  </div>
</nav>
    );
};

export default Navbar;