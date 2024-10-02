import React from 'react';
import ScrolltoTop from '../ScrolltoTop/ScrolltoTop';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import paymentImage from '../asset/payment.png';
import Whatapps from '../Whatapps/Whatapps';

const Section = ({ title, children }) => (
  <section className="p-6 md:p-10 pt-0 space-y-4 md:space-y-5">
    <h2 className="text-primary-white font-semibold text-lg md:text-xl">{title}</h2>
    <hr className="border-2 border-primary-Camel my-4 md:my-6 w-14" />
    <div>{children}</div>
  </section>
);

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="w-full bg-black">
    {/* Information Sections */}
    <div className="flex flex-col md:flex-row border-b text-primary-white justify-between items-start md:items-center md:h-96">
      {/* Responsive flex-col for mobile and flex-row for larger screens */}
      <Section title="INFORMATION">
        <ul className="space-y-3 md:space-y-4">
          {['Delivery Information', 'Terms & Conditions', 'Returns', 'Contact'].map((item) => (
            <li key={item} className="cursor-pointer text-primary-gray3 transition-all duration-500 ease-in-out hover:pl-2 hover:text-primary-white">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="MY ACCOUNT">
        <ul className="space-y-3 md:space-y-4">
          {['My account', 'Wishlist', 'Privacy Policy', 'FAQ'].map((item) => (
            <li key={item} className="cursor-pointer text-primary-gray3 hover:text-primary-white transition-all duration-500 ease-in-out hover:pl-2">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="CATEGORIES">
        <ul className="space-y-3 md:space-y-4">
          {['Decorative', 'Kitchen Utensils', 'Chairs & Bar Stools', 'Interior Lighting'].map((item) => (
            <li key={item} className="cursor-pointer text-primary-gray3 hover:text-primary-white transition-all duration-500 ease-in-out hover:pl-2">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="ABOUT US">
        <p className="w-full md:w-72 text-primary-gray3">
          We are a team of designers and developers that create high-quality solutions for various platforms.
        </p>
        <address className="w-full md:w-72 text-primary-gray3">
          Address: Your address goes here. <br />
          Email: <a href="mailto:demo@example.com" className="underline">demo@example.com</a>
        </address>
      </Section>
    </div>

    {/* Social Media & Newsletter */}
    <div className="text-primary-white h-auto md:h-60 border-b flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 space-y-6 md:space-y-0 md:space-x-20">
      <div className="space-y-4 md:space-y-5">
        <h2 className="font-semibold text-lg md:text-xl">FOLLOW US</h2>
        <div className="flex space-x-4">
          {[<FacebookOutlinedIcon key="facebook" />, <TwitterIcon key="twitter" />, <InstagramIcon key="instagram" />, <LinkedInIcon key="linkedin" />].map((icon) => (
            <span key={icon.type.displayName} className="cursor-pointer hover:text-primary-Camel transition duration-300">
              {icon}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4 md:space-y-5">
        <h2 className="text-primary-white font-semibold text-lg md:text-xl">DON'T MISS OUT</h2>
        <div className="flex">
          <input
            type="email"
            aria-label="Email Address"
            placeholder="Your email address..."
            className="w-full md:w-96 rounded placeholder-primary-gray3 outline-none border border-primary-gray3 bg-primary-black px-3 py-2"
          />
          <button className="bg-primary-Camel text-primary-white hover:bg-primary-white hover:text-primary-Camel font-semibold px-5 py-2 transition duration-300">
            SUBSCRIBE!
          </button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="h-40 text-primary-gray3 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 space-y-4 md:space-y-0">
      <p>© {currentYear} <span className='text-primary-white cursor-pointer'>THERANKME</span>. Made with ❤️ by <span className='text-primary-white cursor-pointer'>THERANKME</span></p>
      <img src={paymentImage} alt="Accepted Payment Methods" className="max-h-10" />
    </div>

    <ScrolltoTop />
    <Whatapps />
  </footer>
);

export default Footer;
