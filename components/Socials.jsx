import Link from "next/link";

import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Socials = ({ containerStyles }) => {
  return (
    <>
      <ul className={`${containerStyles}`}>
        <li className="hover:text-accent">
          <Link href="https://www.whatsapp.com/?lang=es_LA"  target="_blank" rel="noopener noreferrer">
            <FaWhatsapp/>
          </Link>
        </li>
        <li className="hover:text-accent">
          <Link href='https://twitter.com/home' target="_blank" rel="noopener noreferrer">
          <FaTwitter />  
          </Link>
        </li>
        <li className="hover:text-accent">
          <Link href='https://www.facebook.com/?locale=es_LA' target="_blank" rel="noopener noreferrer">
           <FaFacebook />
          </Link>
        </li>
        <li className="hover:text-accent">
          <Link href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Socials;
