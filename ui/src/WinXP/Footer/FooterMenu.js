import React, { useState } from 'react';
import styled from 'styled-components';

import SubMenu from 'components/SubMenu';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import setAccess from 'assets/windowsIcons/227(32x32).png';
import outlook from 'assets/windowsIcons/887(32x32).png';
import mediaPlayer from 'assets/windowsIcons/846(32x32).png';
import messenger from 'assets/windowsIcons/msn.png';
import documents from 'assets/windowsIcons/308(32x32).png';
import recentDocuments from 'assets/windowsIcons/301(32x32).png';
import pictures from 'assets/windowsIcons/307(32x32).png';
import music from 'assets/windowsIcons/550(32x32).png';
import computer from 'assets/windowsIcons/676(32x32).png';
import controlPanel from 'assets/windowsIcons/300(32x32).png';
import connect from 'assets/windowsIcons/309(32x32).png';
import printer from 'assets/windowsIcons/549(32x32).png';
import paint from 'assets/windowsIcons/680(32x32).png';
import help from 'assets/windowsIcons/747(32x32).png';
import search from 'assets/windowsIcons/299(32x32).png';
import run from 'assets/windowsIcons/743(32x32).png';
import lock from 'assets/windowsIcons/546(32x32).png';
import shut from 'assets/windowsIcons/310(32x32).png';
import allProgramsIcon from 'assets/windowsIcons/all-programs.ico';
import notepad from 'assets/windowsIcons/327(32x32).png';
import empty from 'assets/empty.png';

import { AllPrograms, ConnectTo, MyRecentDocuments } from './FooterMenuData';

function FooterMenu({ className, onClick }) {
  const [hovering, setHovering] = useState('');
  function onMouseOver(e) {
    const item = e.target.closest('.menu__item');
    if (!item) return;
    setHovering(item.querySelector('.menu__item__text').textContent);
  }
  return (
    <div className={className}>
      <header>
          <span className="header__text">Saba</span>
      </header>
      <section className="menu" onMouseOver={onMouseOver}>
        <div className="menu__left">
          <Item onClick={onClick} text="Internet" icon={ie}>
            <div className="menu__item__subtext">Internet Explorer</div>
          </Item>
          <Item onClick={onClick} text="E-mail" icon={outlook}>
            <div className="menu__item__subtext">Outlook Express</div>
          </Item>
          <div className="menu__separator" />
          <Items
            onClick={onClick}
            items={[
              { icon: mine, text: 'Minesweeper' },
              { icon: notepad, text: 'Notepad' },
              { icon: paint, text: 'Paint' },
              { icon: mediaPlayer, text: 'Windows Media Player' },
              { icon: messenger, text: 'Windows Messenger' },
            ]}
          />
          <div style={{ flex: 1 }} />
          <div className="menu__separator" />
          <Item
            style={
              hovering === 'All Programs'
                ? {
                    backgroundColor: '#2f71cd',
                    color: '#FFF',
                  }
                : {}
            }
            text={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                All Programs
                <img
                  src={allProgramsIcon}
                  alt=""
                  style={{
                    marginLeft: '5px',
                    height: '18px',
                  }}
                />
              </div>
            }
            icon={empty}
          >
            {hovering === 'All Programs' && (
              <SubMenu data={AllPrograms} onClick={onClick} />
            )}
          </Item>
        </div>
        <div className="menu__right">
          <Item text="My Documents" icon={documents} onClick={onClick} />
          <Item
            style={
              hovering === 'My Recent Documents'
                ? {
                    backgroundColor: '#2f71cd',
                    color: '#FFF',
                  }
                : {}
            }
            text="My Recent Documents"
            icon={recentDocuments}
          >
            <div
              style={{
                borderLeftColor:
                  hovering === 'My Recent Documents' ? '#FFF' : '#00136b',
              }}
              className="menu__arrow"
            />
            {hovering === 'My Recent Documents' && (
              <SubMenu
                left="153px"
                data={MyRecentDocuments}
                onClick={onClick}
              />
            )}
          </Item>
          <Items
            onClick={onClick}
            items={[
              { icon: pictures, text: 'My Pictures' },
              { icon: music, text: 'My Music' },
              { icon: computer, text: 'My Computer' },
            ]}
          />
          <div className="menu__separator" />
          <Items
            onClick={onClick}
            items={[
              { icon: controlPanel, text: 'Control Panel' },
              { icon: setAccess, text: 'Set Program Access and Defaults' },
            ]}
          />
          <Item
            style={
              hovering === 'Connect To'
                ? {
                    backgroundColor: '#2f71cd',
                    color: '#FFF',
                  }
                : {}
            }
            text="Connect To"
            icon={connect}
          >
            <div
              style={{
                borderLeftColor: hovering === 'Connect To' ? '#FFF' : '#00136b',
              }}
              className="menu__arrow"
            />
            {hovering === 'Connect To' && (
              <SubMenu left="153px" data={ConnectTo} onClick={onClick} />
            )}
          </Item>
          <Item onClick={onClick} text="Printers and Faxes" icon={printer} />
          <div className="menu__separator" />
          <Items
            onClick={onClick}
            items={[
              { icon: help, text: 'Help and Support' },
              { icon: search, text: 'Search' },
              { icon: run, text: 'Run...' },
            ]}
          />
        </div>
      </section>
      <footer>
        <div className="footer__item" onClick={() => onClick('Log Off')}>
          <img className="footer__item__img" src={lock} alt="" />
          <span>Log Off</span>
        </div>
        <div
          className="footer__item"
          onClick={() => onClick('Turn Off Computer')}
        >
          <img className="footer__item__img" src={shut} alt="" />
          <span>Turn Off Computer</span>
        </div>
      </footer>
    </div>
  );
}
function Items({ items, ...rest }) {
  return items.map((item, i) => <Item key={i} {...item} {...rest} />);
}
function Item({
  style,
  text,
  icon,
  onHover = () => {},
  onClick = () => {},
  children,
}) {
  function _onClick() {
    onClick(text);
  }
  function onMouseEnter() {
    onHover(text);
  }
  return (
    <div
      className="menu__item"
      style={style}
      onClick={_onClick}
      onMouseEnter={onMouseEnter}
    >
      <img className="menu__item__img" src={icon} alt={text} />
      <div className="menu__item__texts">
        <div className="menu__item__text ">{text}</div>
        {children}
      </div>
    </div>
  );
}
export default styled(FooterMenu)`
  font-size: 13px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4d0c8;
  padding: 2px;
  box-shadow: inset -1px -1px 0px 0px #404040, inset 1px 1px 0px 0px #eceae7, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #ffffff;
  header {
    position: relative;
    align-self: flex-start;
    display: flex;
    align-items: center;
    color: #fff;
    height: 36px;
    padding: 6px 5px 5px;
    width: 100%;
    background: linear-gradient(to right, #0a246a 0%, #a6caf0 100%, #a6caf0 101%);
    overflow: hidden;
  }
  .header__text {
    padding: 0 3px;
    font-size: 14px;
    font-weight: 700;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
    font-style: italic;
  }
  footer {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: flex-end;
    color: #000;
    height: 36px;
    width: 100%;
    background-color: #d4d0c8;
  }

  .footer__item {
    padding: 3px;
    display: flex;
    margin-right: 10px;
    align-items: center;
    &:hover {
      background-color: #2f71cd;
      color: white;
    }
    &:hover:active > * {
      transform: translate(1px, 1px);
    }
  }
  .footer__item__img {
    margin-right: 2px;
    width: 22px;
    height: 22px;
  }
  .menu {
    display: flex;
    margin: 0 2px;
    position: relative;
    box-shadow: 0 1px #838079;
  }
  .menu__right {
    background-color: #d4d0c8;
    border-left: solid #838079 1px;
    padding: 6px 5px 5px;
    width: 190px;
    color: #000;
  }
  .menu__left {
    background-color: #d4d0c8;
    padding: 6px 5px 0;
    width: 190px;
    display: flex;
    flex-direction: column;
  }
  .sub_menu {
    border: 1px solid black;
    position: absolute;
    left: 100%;
    bottom: 0;
    background-color: #d4d0c8;
    display: flex;
    flex-direction: column;
  }

  .menu__separator {
    height: 2px;
    box-shadow: inset 0px 0px 0px 0px #ffffff, inset 1px 1px 0px 0px #838079, inset -2px -2px 0px 0px #eceae7, inset 2px 2px 0px 0px #808080;
    background-clip: content-box;
  }
  .menu__item {
    padding: 1px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .menu__left .menu__item {
    height: 34px;
  }
  .menu__right .menu__item {
    height: 26px;
    margin-bottom: 4px;
    line-height: 13px;
  }
  .menu__item:hover {
    color: white;
    background-color: #2f71cd;
  }
  .menu__item:hover .menu__item__subtext {
    color: white;
  }
  .menu__item__texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: relative;
  }
  .menu__right .menu__item__img {
    margin-right: 3px;
    width: 22px;
    height: 22px;
  }
  .menu__left .menu__item__img {
    margin-right: 3px;
    width: 30px;
    height: 30px;
  }
  .menu__right .menu__item:nth-child(-n + 5),
  .menu__left .menu__item:nth-child(-n + 2),
  .menu__left .menu__item:last-child {
    .menu__item__text {
      font-weight: 700;
    }
  }
  .menu__item__subtext {
    color: rgba(0, 0, 0, 0.4);
    line-height: 12px;
    margin-bottom: 1px;
  }
  .menu__left .menu__item:last-child {
    height: 24px;
  }
  .menu__item:hover .menu__arrow {
    border-left-color: #fff;
  }
  .menu__arrow {
    border: 3.5px solid transparent;
    border-right: 0;
    border-left-color: #00136b;
    position: absolute;
    left: 146px;
  }
`;
