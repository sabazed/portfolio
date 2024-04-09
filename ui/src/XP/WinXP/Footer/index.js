import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import FooterMenu from './FooterMenu';
import Balloon from 'XP/components/Balloon';
import startButton from 'XP/assets/windowsIcons/windows-off.png';
import sound from 'XP/assets/windowsIcons/690(16x16).png';
import usb from 'XP/assets/windowsIcons/394(16x16).png';
import risk from 'XP/assets/windowsIcons/229(16x16).png';

const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let hourPostFix = 'AM';
  let min = date.getMinutes();
  if (hour >= 12) {
    hour -= 12;
    hourPostFix = 'PM';
  }
  if (hour === 0) {
    hour = 12;
  }
  if (min < 10) {
    min = '0' + min;
  }
  return `${hour}:${min} ${hourPostFix}`;
};

function Footer({
  onMouseDownApp,
  apps,
  focusedAppId,
  onMouseDown,
  onClickMenuItem,
}) {
  const [time, setTime] = useState(getTime);
  const [menuOn, setMenuOn] = useState(false);
  const menu = useRef(null);
  function toggleMenu() {
    setMenuOn(on => !on);
  }
  function _onMouseDown(e) {
    if (e.target.closest('.footer__window')) return;
    onMouseDown();
  }
  function _onClickMenuItem(name) {
    onClickMenuItem(name);
    setMenuOn(false);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);
  useEffect(() => {
    const target = menu.current;
    if (!target) return;
    function onMouseDown(e) {
      if (!target.contains(e.target) && menuOn) setMenuOn(false);
    }
    window.addEventListener('mousedown', onMouseDown);
    return () => window.removeEventListener('mousedown', onMouseDown);
  }, [menuOn]);

  return (
    <Container onMouseDown={_onMouseDown}>
      <div className="footer__items left">
        <div ref={menu} className="footer__start__menu">
          {menuOn && <FooterMenu onClick={_onClickMenuItem} />}
        </div>
        {/* <img
          src={startButton}
          alt="start"
          className="footer__start"
          onMouseDown={toggleMenu}
          style={{padding: '2px 8px'}}
        /> */}
        <div className="footer__start" onMouseDown={toggleMenu} >
          <img src={startButton} className='footer__start__img' alt='start'></img>
          <span className='footer__start__txt'>Start</span>
        </div>
        {[...apps].map(
          app =>
            !app.header.noFooterWindow && (
              <FooterWindow
                key={app.id}
                id={app.id}
                icon={app.header.icon}
                title={app.header.title}
                onMouseDown={onMouseDownApp}
                isFocus={focusedAppId === app.id}
              />
            ),
        )}
      </div>

      <div className="footer__items right">        
        <img className="footer__icon" src={risk} alt="" />
        <div style={{ position: 'relative', width: 0, height: '20px' }}>
          <Balloon />
        </div>
        <img className="footer__icon" src={usb} alt="" />
        <img className="footer__icon" src={sound} alt="" />
        <div className="footer__time">{time}</div>
      </div>
    </Container>
  );
}

function FooterWindow({ id, icon, title, onMouseDown, isFocus }) {
  function _onMouseDown() {
    onMouseDown(id);
  }
  return (
    <div
      onMouseDown={_onMouseDown}
      className={`footer__window ${isFocus ? 'focus' : 'cover'}`}
    >
      <img className="footer__icon" src={icon} alt={title} />
      <div className="footer__text">{title}</div>
    </div>
  );
}

const Container = styled.footer`
  height: 30px;
  background-color: #d4d0c8; 
  border-top: 2px solid #FFFCF7;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  .footer__items.left {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  .footer__items.right {
    flex-shrink: 0;
    padding: 0 5px;
    margin: 1px;
    border: 2px inset
  }
  .footer__items {
    display: flex;
    align-items: center;
  }
  .footer__start {
    height: 24px;
    margin: 0 8px 0 5px;
    display: flex;
    align-items: center;
    padding: 0 5px 1px 3px;
    font-weight: 600;
    box-shadow: inset -1px -1px 0px 0px #404040, inset 1px 1px 0px 0px #ffffff, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #eceae7;
    &:hover {
      filter: brightness(110%);
    }
    &:active {
      pointer-events: none;
      filter: brightness(85%);
    }
    * {
      margin: 0 1px;
    }
  }
  .footer__start__img {
    width: auto;
    height: 17px;
  }
  .footer__start__txt {
    width: auto;
    height: 17px;
  }
  .footer__start__menu {
    position: absolute;
    left: 5px;
    bottom: calc(100% + 3px);
  }
  .footer__window {
    flex: 1;
    max-width: 180px;
    color: #000;
    margin: 2px;
    padding: 0 5px;
    height: 24px;
    font-size: 13px;
    box-shadow: inset -1px -1px 0px 0px #404040, inset 1px 1px 0px 0px #ffffff, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #eceae7;
    position: relative;
    display: flex;
    align-items: center;
  }
  .footer__icon {
    height: 16px;
    width: 16px;
    margin: 0 1px;
  }
  .footer__text {
    padding-left: 5px;
    padding-bottom: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .footer__window.focus {
    background: conic-gradient(#d4d0c8 90deg, #ffffff 90deg 180deg, #d4d0c8 180deg 270deg, #ffffff 270deg);
    background-repeat: repeat;
    background-size: 2px 2px;
    box-shadow: inset -1px -1px 0px 0px #ffffff, inset 1px 1px 0px 0px #404040, inset -2px -2px 0px 0px #eceae7, inset 2px 2px 0px 0px #808080;
  }
  .footer__time {
    margin: 0 5px;
    color: #000;
    font-size: 13px;
    font-weight: lighter;
    text-shadow: none;
  }
`;

export default Footer;
