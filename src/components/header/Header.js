import React, { useState, createRef } from "react";
import Menu from "../menu/Menu";
import "./Header.scss";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const ref = createRef();
  const scrollClickHandler = () => {
    const top = ref.current.clientHeight;
    window.scrollTo({
      behavior: "smooth",
      top: top,
    });
  };
  const menuClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" ref={ref}>
      <div className="header__inner">
        <Menu isHeader={true} isOpen={isOpen} />
        <button className="header__nav-button" onClick={menuClickHandler}>
          ∞ MENU
        </button>
        <p className="header__scroll" onClick={scrollClickHandler}>
          scroll down to see more
        </p>
      </div>
    </header>
  );
}

export default Header;
