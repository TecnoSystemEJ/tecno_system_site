import React from "react";
import Link from "next/link";

interface props {
  ulStyles: string;
  liStyles: string;
  handleNavClick?: () => void;
}

const navigation = [
  ["inicio", ""],
  ["contato", ""],
  ["serviços", ""],
  ["sobre a empresa", ""],
];

const NavBarListMobile = ({ ulStyles, liStyles, handleNavClick }: props) => {
  return (
    <ul className={ulStyles}>
      {navigation.map((pair, index) => {
        return (
          <li key={index} className={liStyles} onClick={handleNavClick}>
            <Link href={pair[1]}>{pair[0]}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarListMobile;
