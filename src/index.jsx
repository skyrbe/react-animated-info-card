/* eslint-disable */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import './styles.css';

const Image = styled.div((props) => ({
  width: props.width || '400px',
  height: props.height || '300px',
  borderRadius: props.borderRadius || '5px',
  backgroundImage: `url(${props.imagePath})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  cursor: 'pointer',
  boxShadow: props.boxShadow || '0 20px 10px -10px rgba(0, 0, 0, 0.2)',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 1,
  transition: 'transform 0.3s ease-in'
}));

const Info = styled.div((props) => ({
  width: props.width || '400px',
  height: props.height || '300px',
  borderRadius: props.borderRadius || '5px',
  padding: '10px',
  paddingTop: parseInt(props.height) - 70 + 'px' || '130px',
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'white',
  transition: 'transform 0.3s ease-in'
}));

const InfoCard = ({
  children,
  styles
}) => {

  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  let classnames = 'react-info-card__container';
  if(isExpanded) {
    classnames = `${classnames} react-info-card__slide`;
  }
  return (
    <div className={classnames} onClick={toggleExpanded}>
      <Image {...styles} className='react-info-card__image' />
      <Info {...styles} className='react-info-card__body'>
        {children}
      </Info>
    </div>
  );
};

export default InfoCard;