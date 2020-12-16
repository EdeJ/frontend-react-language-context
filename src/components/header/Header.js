import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContextProvider';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import './Header.css';

const content = {
  nl: {
    menuItems: {
      aboutUs: 'Over ons',
      allPlants: 'Alle planten',
      experience: 'Persoonlijke ervaringen'
    },
    changeTo: 'Cambiar el idioma a',
    title: 'Planten voor iedereen!'
  },
  es: {
    menuItems: {
      aboutUs: 'Sobre nosotros',
      allPlants: 'todas las plantas',
      experience: 'Experiencias personales'
    },
    changeTo: 'Wissel taal naar',
    title: 'Plantas para todos!'
  }
}

function Header() {

  const { language, toggleLanguage } = useContext(LanguageContext);
  // console.log(language);


  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about-us">
                {content[language].menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content[language].menuItems.allPlants}
              </NavLink>
              </li>
            <li onClick={toggleLanguage} className="language-switch">
              <p>{content[language].changeTo}</p>
              <FlagNL />
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header image plants" className="header-image" />
          <h1>{content[language].title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;
