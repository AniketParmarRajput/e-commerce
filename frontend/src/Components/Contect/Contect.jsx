import React from 'react';
import {
  LocalPhoneRounded as PhoneIcon,
  PublicRounded as GlobeIcon,
  LocationOnRounded as LocationIcon,
  FacebookOutlined as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Google as GoogleIcon,
} from '@mui/icons-material';


const ContactInfoItem = ({ Icon, text }) => (
  <div className="flex items-center space-x-3">
    <Icon aria-hidden="true" />
    <p>{text}</p>
  </div>
);

const SocialMediaIcon = ({ Icon, ariaLabel }) => (
  <Icon aria-label={ariaLabel} className="cursor-pointer hover:text-blue-500 transition" />
);



const Contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-16">
        <iframe title='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872818.11453838!2d75.05392751397711!3d31.291422615025297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391acc3c00000001%3A0x917a7bfe90d6492c!2sNangal%20Dam!5e0!3m2!1sen!2sin!4v1720599007425!5m2!1sen!2sin"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map Location"
        />
      </div>

      <div className="flex flex-col md:flex-row p-10 space-y-10 md:space-y-0 md:space-x-10">
        {/* Contact Information Section */}
        <div className="w-full h-72 md:w-80  bg-gray-100 p-6 rounded-md shadow-sm">
          <div className="space-y-5  ">
            <ContactInfoItem Icon={PhoneIcon} text={<><span>0123456789</span><br /><span>0123456789</span></>}/>
            <ContactInfoItem Icon={GlobeIcon} text="demo@example.com" />
            <ContactInfoItem Icon={LocationIcon} text="Your address goes here." />
          </div>
          <div className="pt-10 space-y-3 ">
            <h2 className="text-black font-semibold text-xl">Follow us</h2>
            <div className="flex space-x-4 text-gray-400 ">
              <SocialMediaIcon Icon={FacebookIcon} ariaLabel="Facebook"  />
              <SocialMediaIcon Icon={TwitterIcon} ariaLabel="Twitter" />
              <SocialMediaIcon Icon={YouTubeIcon} ariaLabel="YouTube" />
              <SocialMediaIcon Icon={GoogleIcon} ariaLabel="Google" />
              <SocialMediaIcon Icon={InstagramIcon} ariaLabel="Instagram" />

              </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1  bg-primary-gray p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-start mb-6 ">Get In Touch</h2>
          <form className="space-y-5">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <div className="flex-1">
                <label className="block mb-1 font-medium text-primary-gray3" htmlFor="name">Name</label>
                <input
                  id="name"
                  className="w-full border border-primary-gray2 p-2 rounded-md"
                  type="text"
                  aria-label="Name"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium text-primary-gray3" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="w-full border border-primary-gray2 p-2 rounded-md"
                  type="email"
                  aria-label="Email"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium text-primary-gray3" htmlFor="subject">Subject</label>
              <input
                id="subject"
                className="w-full border border-primary-gray2 p-2 rounded-md"
                type="text"
                aria-label="Subject"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium border-primary-gray2" htmlFor="message">Message</label>
              <textarea
  id="message"
  className="w-full border  border-primary-gray2 p-2 rounded-md h-36 "
  aria-label="Your Message"
/>
            </div>
            <div className="text-start">
              <button
                type="submit"
                className="bg-black text-primary-white py-2 px-6 rounded-md hover:bg-primary-Camel transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Contact;
