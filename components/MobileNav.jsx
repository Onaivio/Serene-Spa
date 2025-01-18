import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/treatments", name: "Treatments" },
  { href: "/contact", name: "Contact" },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  //es la ruta de la página a la que queremos navegar

  return (
    <>
      <nav className="relative flex flex-col justify-between h-full p-8">
        <div
          className="cursor-pointer text-accent"
          onClick={() => setMobileNav(false)}
        >
          <IoCloseOutline className="text-4xl" />
        </div>
        <ul className="flex flex-col gap-10 text-white text-xl">
          {links?.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={index}
                onClick={() => setMobileNav(false)}
                className={`${
                  pathname === link.href && "border-b-2 border-accent-100"
                } uppercase max-w-max mx-auto`}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
        <div>
          <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
          <p className="text-white py-4 text-center text-sm">
            Desarrollado por <span className="text-accent">Oscar Garcia</span> &copy;
          </p>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
