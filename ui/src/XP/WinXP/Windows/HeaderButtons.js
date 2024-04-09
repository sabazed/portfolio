import React from 'react';
import styled from 'styled-components';

function HeaderButtons({
  buttons,
  onMaximize,
  onMinimize,
  onClose,
  maximized,
  resizable,
  className,
}) {
  const buttonElements = {
    minimize: (
      <button
        key="minimize"
        className="header__button header__button--minimize"
        onMouseUp={onMinimize}
      />
    ),
    maximize: (
      <button
        key="maximize"
        className={`header__button ${
          maximized ? 'header__button--maximized' : 'header__button--maximize'
        } ${resizable ? '' : 'header__button--disable'}`}
        onMouseUp={onMaximize}
      />
    ),
    close: (
      <button
        key="button"
        className="header__button header__button--close"
        onMouseUp={onClose}
      />
    ),
  };

  return (
    <div className={className}>
      {buttons ? (
        buttons.map(b => buttonElements[b])
      ) : (
        <>
          {buttonElements.minimize}
          {buttonElements.maximize}
          {buttonElements.close}
        </>
      )}
    </div>
  );
}

export default styled(HeaderButtons)`
  opacity: ${({ isFocus }) => (isFocus ? 1 : 0.6)};
  height: 22px;
  display: flex;
  align-items: center;
  margin-top: -1px;
  margin-right: 1px;
  border-radius: 0;
  .header__button {
    border-radius: 0;
    border: 0px;
    margin-right: 1px;
    position: relative;
    width: 18px;
    height: 16px;
    box-shadow: inset -1px -1px 0px 0px #404040, inset 0px 0px 0px 0px #eceae7, inset -2px -2px 0px 0px #808080, inset 1px 1px 0px 0px #ffffff;
    &:hover {
      filter: brightness(120%);
    }
    &:hover:active {
      filter: brightness(90%);
    }
  }
  .header__button--minimize {
    &:before {
      content: '';
      position: absolute;
      left: 4px;
      top: 10px;
      height: 2px;
      width: 7px;
      background-color: black;
    }
  }
  .header__button--maximize {
    &:before {
      content: '';
      position: absolute;
      display: block;
      left: 3.5px;
      top: 3px;
      box-shadow: inset 0 3px black, inset 0 0 0 1px black;
      height: 10px;
      width: 10px;
    }
  }
  .header__button--maximized {
    &:before {
      content: '';
      position: absolute;
      display: block;
      left: 4px;
      top: 6px;
      box-shadow: inset 0 2px black, inset 0 0 0 1px black;
      height: 7px;
      width: 7px;      
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      left: 6px;
      top: 4px;
      box-shadow: inset 0 2px black, inset 0 0 0 1px black;
      height: 7px;
      width: 7px;
    }
  }
  .header__button--close {
    &:before {
      content: '';
      position: absolute;
      left: 7.5px;
      top: 3px;
      transform: rotate(45deg);
      height: 10px;
      width: 2px;
      background-color: black;
    }
    &:after {
      content: '';
      position: absolute;
      left: 7.5px;
      top: 3px;
      transform: rotate(-45deg);
      height: 10px;
      width: 2px;
      background-color: black;
    }
  }
  .header__button--disable {
    outline: none;
    opacity: 0.5;
    &:hover {
      filter: brightness(100%);
    }
  }
`;
