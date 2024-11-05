'use client'
import { title } from 'process'
import React from 'react'

type Offer = {
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Pizza Happy Hour",  // Added comma here
      description: "Get 50% off on all drinks from 5 PM to 7 PM with your pizza orders."
    },

    {
      title: "Family Feast Deal",  // Added comma here
      description: "Order any two main pizzas and get a family meal deal with exclusive discounts"
    },

    {
      title: "Weekend Pizza Special",  // Added comma here
      description: "Indulge in our weekend special:Buy one pizza,get a side of garlic bread for free"
    }
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> {/* Fixed grid-col-3 to grid-cols-3 */}
          {offers.map((offer, index) => (
            <button 
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'
            >
              <h3 className='text-2xl font-semibold text-red-700'>{offer.title}</h3>
              <p className='text-slate-700 mt-3'>{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers