import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { ImCross } from 'react-icons/im';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';
import { SiDeutschebank } from 'react-icons/si';
import { TfiFaceSmile } from 'react-icons/tfi';

function Navbar({ handleChange, data, theme }) {
  const [navbar, setNavbar] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [flowUp, setFlowUp] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    if (window.scrollY >= 3150) {
      setFlowUp(true);
    } else {
      setFlowUp(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <div className={`col-12 py-3 d-flex justify-content-center test ${navbar ? 'addBg' : ''} `}>
        <div className="col-11  d-flex flex-wrap align-items-center justify-content-between  ">
          <div className="navLogo">{data.title}</div>
          <div className="sideCommon">
            <span>
              <a href="https://dimasts.vercel.app/" target="_blank" className={`${navbar ? 'cursorLogo' : 'navItems'} px-2`}>
                Project
              </a>
            </span>
            <span>
              <a href="https://dimasts.vercel.app/" target="_blank" className={`${navbar ? 'cursorLogo' : 'navItems'} px-2`}>
                Tools
              </a>
            </span>
            <span>
              <a href="https://dimasts.vercel.app/" target="_blank" className={`${navbar ? 'cursorLogo' : 'navItems'} px-2`}>
                Contact
              </a>
            </span>
          </div>
          {!sideBar && <SiDeutschebank className="hamburger" size={22} onClick={() => setSideBar(true)} />}
        </div>
      </div>
      {sideBar ? (
        <div className="col-12 d-flex flex-wrap absoluteNavbar vh-100">
          <div className="col-4 leftAbsolute" onClick={() => setSideBar(false)}></div>
          <div className="col-8 d-flex flex-column p-5  rounded-start-4 rightAbosolute">
            <p className="d-flex justify-content-end">
              <ImCross className="hamburger" size={22} onClick={() => setSideBar(false)} />
            </p>
            <span className="my-3 navItems">
              <a href="https://dimasts.vercel.app/" target="_blank" className="sideItems">
                Project
              </a>
            </span>
            <span className="my-3 navItems">
              <a href="https://dimasts.vercel.app/" target="_blank" className="sideItems">
                Tools
              </a>
            </span>
            <span className="my-3 navItems">
              <a href="https://dimasts.vercel.app/" target="_blank" className="sideItems">
                Contact
              </a>
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
      {navbar ? (
        <div className={`d-flex rounded-4 ms-2 p-2 ${flowUp ? ' fixedUp ' : 'up'}`}>
          <span
            className=" darkMode p-2 text-center"
            onClick={() => {
              handleChange();
            }}
          >
            {theme === 'dark' ? <BsMoonStars size={28} className="iconDarkmode" /> : <MdOutlineWbSunny size={30} className="iconDarkmode" />}
          </span>
          {flowUp && (
            <span className="darkMode p-2">
              <TfiFaceSmile size={30} className=" smileFace" />
            </span>
          )}
          <span className="icon  mt-1">
            <AiOutlineVerticalAlignTop size={30} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </span>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Navbar;
