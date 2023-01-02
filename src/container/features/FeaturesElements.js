import styled from "styled-components";
import { Rectangle } from "../../images";

export const Container = styled.div`
  background-image: url(${Rectangle}); 
  display: flex;
  align-items:center;
  flex-direction: column;
  height:100vh;


  
`;

export const SectionContainerStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex:1;

@media screen and (min-width:600px){
  flex-direction:row;
}


`;

export const SectionContainer = styled(SectionContainerStyle)`

  border:2px solid blue;


 
`;
export const SectionContainer1 = styled(SectionContainerStyle)`

  border:2px solid green;
padding-bottom:2rem;

`;

export const ImageContainerStyle = styled.div`
  height:50vh;
  border:2px solid red;

  img {
    height: 100%;
    width: 100%;
    object-fit:contain;
  }

  @media screen and (min-width:600px){
    height:auto;
  }

`;

export const ImageContainer = styled(ImageContainerStyle)`
  margin-top: -5vh;
 
`;

export const ImageContainer1 = styled(ImageContainerStyle)``;

export const Section = styled.div`
  // width: 28vw;
  padding: 0 2rem;

  padding-top:3rem;
  margin-top: -8vh;

  
`;
export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  font-family: var(--font-title);
  margin-bottom: 0.5rem;
`;
export const SectionText = styled.p`
  color: #d4d2d2;
  font-size: 15px;
  letter-spacing:0.5px;
  margin-bottom: 20px;
  font-weight:500;
  line-height:1rem;
`;
export const Button = styled.button`
  background: var(--color-button2);
  padding: 10px 18px;
  color: #fff;
  border-radius: 30px;
  border: none;

  @media screen and (max-width: 550px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;
