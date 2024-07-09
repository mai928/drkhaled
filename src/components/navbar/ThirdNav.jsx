import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ThirdNav = ({ isFixed }) => {

  const { t, i18n } = useTranslation()
  const [activeItem, setActiveItem] = useState('/');
  const handleClickActive = (item) => {
    setActiveItem(item);
  };


  return (
    <div className="container">
      <ul className={`container  ${isFixed && `fixed top-0 left-0 shadow-lg z-50`} bg-white-500 flex justify-around items-center py-4 border-y-[1px]  border-white-400 rounded-b-3xl`}>
        {navLinks.map((item) => (
          <li key={item.title}>
            <Link 
              onClick={() => {
                handleClickActive(item.path)
              }}


              className={` font-bold text-lg hover:text-primary-500 ${activeItem === item.path ? "text-primary-500" : "text-secondary-500"
                }`}
                href={item.path}
            >
              {t(item.title)}
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThirdNav;


