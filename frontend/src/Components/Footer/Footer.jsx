import React from 'react';
import ScrolltoTop from '../ScrolltoTop/ScrolltoTop';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import paymentImage from '../asset/payment.png';
import Whatapps from '../Whatapps/Whatapps';

const Section = ({ title, children }) => (
  <section className="p-10 pt-0 space-y-5">
    <h2 className="text-primary-white font-semibold text-xl">{title}</h2>
    <hr className="border-2 border-primary-Camel my-6 w-14" />
    <div>{children}</div>
  </section>
);
const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="w-full bg-black">
    {/* Information Sections */}
    <div className="flex h-96 border-b text-primary-white flex-row justify-evenly items-center">
      <Section title="INFORMATION">
        <ul className="space-y-4">
          {['Delivery Information', 'Terms & Conditions', 'Returns', 'Contact'].map((item) => (
            <li key={item} className="cursor-pointer text-primary-gray3 transition-all duration-500 ease-in-out hover:pl-2 hover:text-primary-white">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="MY ACCOUNT">
        <ul className="space-y-4">
          {['My account', 'Wishlist', 'Privacy Policy', 'Frequently Asked Questions'].map((item) => (
            <li key={item} className="cursor-pointer text-primary-gray3 hover:text-primary-white transition-all duration-500 ease-in-out hover:pl-2">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="CATEGORIES">
        <ul className="space-y-4">
          {['Decorative', 'Kitchen Utensils', 'Chair & Bar Stools', 'Interior Lighting'].map((item) => (
            <li key={item} className="cursor-pointer text-primary-gray3 hover:text-primary-white transition-all duration-500 ease-in-out hover:pl-2">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="ABOUT US" className="text-primary-gray2 ">
        <p className="w-72 text-primary-gray3">
          We are a team of designers and developers that create high-quality Magento, Prestashop, and Opencart solutions.
        </p>
        <address className="w-72 text-primary-gray3">
          Address: Your address goes here. <br />
          Email: <a href="mailto:demo@example.com" className="underline">demo@example.com</a>
        </address>
      </Section>
    </div>

    {/* Social Media & Newsletter */}
    <div className="text-primary-white h-60 border-b flex items-center pl-20 space-x-20">
      <div className="p-10 space-y-5">
        <h2 className="font-semibold text-xl">FOLLOW US</h2>
        <div className="space-x-6">
          {[
            <FacebookOutlinedIcon key="facebook"  />,
            <TwitterIcon key="twitter" />,
            <InstagramIcon key="instagram" />,
            <LinkedInIcon key="linkedin" />
          ].map((icon) => (
            <span key={icon.type.displayName} className="cursor-pointer hover:text-primary-Camel transition duration-300">
              {icon}
            </span>
          ))}
        </div>
      </div>

      <div className="p-10 space-y-5">
        <h2 className="text-primary-white font-semibold text-xl">DON'T MISS OUT ON THE LATEST</h2>
        <div className="flex">
          <input
            type="email"
            aria-label="Email Address"
            placeholder="Your email address..."
            className="w-96 rounded placeholder-primary-gray3 outline-none border border-primary-gray3 bg-primary-black px-3 py-2"
          />
          <button className="bg-primary-Camel text-primary-white  hover:bg-primary-white hover:text-primary-Camel font-semibold px-5 py-2 hover:bg-primary-Camel-light transition duration-300">
            SUBSCRIBE!
          </button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="h-40 text-primary-gray3 flex justify-between items-center px-20">
      <p>© {currentYear} <span className='text-primary-white cursor-pointer'>THERANKME</span>. MADE WITH ❤️ BY <span className='text-primary-white cursor-pointer'>THERANKME</span></p>
      <img src={paymentImage} alt="Accepted Payment Methods" className="max-h-full" />
    </div>

    <ScrolltoTop />
   <Whatapps/>
  </footer>
);

export default Footer;
