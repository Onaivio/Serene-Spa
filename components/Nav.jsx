import Link from "next/link";

import { useContext } from "react";
import { CursorContext } from "./CursorProvider";
import { usePathname } from "next/navigation";

const Nav = () => {

    const pathname = usePathname();
    //es la ruta de la página a la que queremos navegar

  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/treatments", name: "Treatments" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links?.map((link, index) => {
          return (
            <Link href={link.href} key={index} 
            className={`${pathname === link.href && "border-b-2 border-accent"} uppercase`}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
