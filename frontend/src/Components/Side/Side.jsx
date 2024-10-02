import React from 'react'
import image1 from '../asset/service-promo-1.png';
import image2 from '../asset/service-promo-2.png';
import image3 from '../asset/service-promo-3.png';
import image4 from '../asset/service-promo-4.png';

const Side = () => {
  return (
    <div>
      <section className="flex justify-evenly h-80">
        {[
          { img: image1, title: 'FREE SHIPPING', description: 'Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!' },
          { img: image2, title: '30 DAYS MONEY BACK', description: '100% satisfaction guaranteed, or get your money back within 30 days!' },
          { img: image3, title: 'SAFE PAYMENT', description: 'Pay with the world’s most popular and secure payment methods.' },
          { img: image4, title: 'LOYALTY CUSTOMER', description: 'Card for the other 30% of their purchases at a rate of 1% cash back.' },
        ].map((feature, idx) => (
          <div key={idx} className="text-center flex flex-col justify-center items-center w-[290px] space-y-5">
            <img className="h-20" src={feature.img} alt="Feature Icon" />
            <h1 className="text-xl font-bold">{feature.title}</h1>
            <p>{feature.description}</p>
            
          </div>
        ))}
      </section>
    </div>
  )
}

export default Side
