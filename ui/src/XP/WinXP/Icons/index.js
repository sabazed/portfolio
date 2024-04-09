import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const roundTo = (n, d) => {
  var r = n % d;
  if (r > (d / 2))
      n += d;
  return n - r;
}

function Icons({
  icons,
  onMouseDown,
  onDoubleClick,
  displayFocus,
  mouse,
  selecting,
  setSelectedIcons,
}) {
  const [iconsRect, setIconsRect] = useState([]);
  
  function measure(rect) {
    if (iconsRect.find(r => r.id === rect.id)) return;
    setIconsRect(iconsRect => [...iconsRect, rect]);
  }

  useEffect(() => {
    if (!selecting) return;
    const sx = Math.min(selecting.x, mouse.docX);
    const sy = Math.min(selecting.y, mouse.docY);
    const sw = Math.abs(selecting.x - mouse.docX);
    const sh = Math.abs(selecting.y - mouse.docY);
    console.log(iconsRect);
    const selectedIds = iconsRect
      .filter(rect => {
        const { x, y, w, h } = rect;
        return x - sx < sw && sx - x < w && y - sy < sh && sy - y < h;
      })
      .map(icon => icon.id);
    setSelectedIcons(selectedIds);
  }, [iconsRect, setSelectedIcons, selecting, mouse.docX, mouse.docY]);

  return (
    <IconsContainer>
      {icons.map((icon, i) => (
        <StyledIcon
          key={icon.id}
          {...icon}
          _coords={icon.coords}
          displayFocus={displayFocus}
          onMouseDown={onMouseDown}
          onDoubleClick={onDoubleClick}
          measure={measure}
        />
      ))}
    </IconsContainer>
  );
}

function Icon({
  title,
  onMouseDown,
  onDoubleClick,
  icon,
  className,
  id,
  component,
  measure,
  _coords
}) {  
  
  const [drag, setDrag] = useState(false);
  const [coords, setCoords] = useState(_coords);
  const [offset, setOffset] = useState([0, 0]); // To track offset between mouse and icon position
  const ref = useRef(null);

  function _onMouseDown(event) {
    event.preventDefault();
    const { left, top} = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - left;
    const offsetY = event.clientY - top;
    setOffset([offsetX, offsetY]);
    onMouseDown(id);
    setDrag(true);
  }

  function _onMouseUp() {
    setDrag(false);
    const target = ref.current;
    if (!target) return;
    const { left, top } = target.getBoundingClientRect();
    const x = roundTo(left - offset[0], 100);
    const y = roundTo(top - offset[1], 100);
    measure({ id, x, y, w: target.offsetWidth, h: target.offsetHeight });
    setCoords([x, y]);
  }

  function _onDoubleClick() {
    onDoubleClick(component);
  }

  function _onMouseMove(event) {
    if (!drag) return;
    const x = event.clientX - 40 - offset[0];
    const y = event.clientY - 40 - offset[1];
    setCoords([x, y]);
  }

  useEffect(() => _onMouseUp(), [])
  
  useEffect(() => {
    if (drag) {
      document.addEventListener('mousemove', _onMouseMove);
      document.addEventListener('mouseup', _onMouseUp);
      return () => {
        document.removeEventListener('mousemove', _onMouseMove);
        document.removeEventListener('mouseup', _onMouseUp);
      };
    }
  }, [drag]);

  return (
    <div
      className={className}
      onMouseDown={_onMouseDown}
      onDoubleClick={_onDoubleClick}
      ref={ref}
      style={{
        position: 'absolute',
        top: coords[1],
        left: coords[0]
      }}
    >
      <div className={`${className}__img__container`}>
        <img src={icon} alt={title} className={`${className}__img`} />
      </div>
      <div className={`${className}__text__container`}>
        <div className={`${className}__text`}>{title}</div>
      </div>
    </div>
  );
}

const IconsContainer = styled.div`
  position: absolute;
  margin-top: 40px;
  margin-left: 40px;
`;

const StyledIcon = styled(Icon)`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &__text__container {
    width: 100%;
    font-size: 10px;
    color: white;
    text-shadow: 0 1px 1px black;
    margin-top: 5px;
    display: flex;
    justify-content: center;

    &:before {
      content: '';
      display: block;
      flex-grow: 1;
    }
    &:after {
      content: '';
      display: block;
      flex-grow: 1;
    }
  }
  &__text {
    padding: 0 3px 2px;
    background-color: ${({ isFocus, displayFocus }) =>
      isFocus && displayFocus ? '#0b61ff' : 'transparent'};
    text-align: center;
    flex-shrink: 1;
  }
  &__img__container {
    width: 32px;
    height: 32px;
    filter: ${({ isFocus, displayFocus }) =>
      isFocus && displayFocus ? 'drop-shadow(0 0 blue)' : ''};
  }
  &__img {
    width: 32px;
    height: 32px;
    opacity: ${({ isFocus, displayFocus }) =>
      isFocus && displayFocus ? 0.5 : 1};
  }
`;

export default Icons;
