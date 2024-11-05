import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1730482849~exp=1730486449~hmac=8a09628881a7eb50b81887d777664cd60db440e7bed523c21d450d820469a143&w=826"
          alt="delicious pizza banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Order Now for an Exclusive Pizza Deal You Cannot Resist!
        </p>

        <button
          type="button"
          className="bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Exciting Deals Launch at 12 PM!
        </button>
      </div>
    </div>
  );
}
