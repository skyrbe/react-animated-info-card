import React, { useState } from 'react';
import styled from '@emotion/styled'
import './styles.css';

const Container = styled.div(_ => ({
  position: 'relative'
}));

const Image = styled.div(props => ({
  width: props.width || '400px',
  height: props.height || '300px',
  borderRadius: props.borderRadius || '5px',
  backgroundImage: `url(${props.imagePath})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  cursor: 'pointer',
  boxShadow: '0 36px 10px -20px rgba(0, 0, 0, 0.2)',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 1
}));

const Info = styled.div(props => ({
  width: props.width || '400px',
  height: props.height || '300px',
  borderRadius: props.borderRadius || '5px',
  position: 'absolute',
  top: '0',
  left: '0'
}));

const InfoCard = ({
  children,
  styles
}) => {

  const [isExpanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Container>
      <Image {...styles} onClick={toggleExpanded} />
      <Info {...styles}>
        {children}
      </Info>
    </Container>
  );
};

export default InfoCard;