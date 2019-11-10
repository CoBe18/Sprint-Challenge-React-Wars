import React from 'react';
import Styled from 'styled-components';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


const ContentContainer = Styled.div`
max-width: 40%;
margin: 0 auto;
font-size: 1.5rem;
`;

const InfoContainer=Styled.div`
font-size: 1.5rem;
color: #FFE81F;
`;






const SWCard = (props) => {
  return (
    <ContentContainer>
        
         <Card>
        <CardBody>
        <InfoContainer>
          <CardTitle>Name: {props.name} </CardTitle>
          <CardSubtitle>DOB: {props.born} </CardSubtitle>
          <CardSubtitle>Gender: {props.gender} </CardSubtitle>
          <CardSubtitle>Height: {props.height}cm </CardSubtitle>
          <CardSubtitle>Hair: {props.hairColor} </CardSubtitle>
          <CardSubtitle>Eyes: {props.eyeColor} </CardSubtitle>
           </InfoContainer>
        </CardBody>
        {/* <img src="../../img/freestocks.jpg" alt="Card image cap" /> */}
        <CardBody>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          {/* <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink> */}
        </CardBody>
        </Card>
    </ContentContainer>
  );
};

export default SWCard;


// <CardTitle>Name: {props.name} </CardTitle>
// <CardSubtitle>DOB: {props.born} </CardSubtitle>
// <CardSubtitle>Gender: {props.gender} </CardSubtitle>
// <CardSubtitle>Height: {props.height}cm </CardSubtitle>
// <CardSubtitle>Hair: {props.hairColor} </CardSubtitle>
// <CardSubtitle>Eyes: {props.eyeColor} </CardSubtitle>