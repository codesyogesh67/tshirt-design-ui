import styled from "styled-components";
import { Rectangle } from "../../images";

export const Container = styled.div`
  background-image: url(${Rectangle}); 
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  align-items:center;
  flex-direction: column;
  padding: 3rem 6rem;
  padding-right: 5rem;



  @media only screen and (max-width: 768px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 2rem;
  }

`;

export const SectionContainerStyle = styled.div`
display:flex;
flex-direction:column;


@media screen and (min-width:768px){
  flex-direction:row;
}
`;

export const SectionContainer = styled(SectionContainerStyle)` 

`;
export const SectionContainer1 = styled(SectionContainerStyle)`
flex-direction:column-reverse;
  @media screen and (min-width:768px){
    flex-direction:row;
  }


`;

export const ImageContainerStyle = styled.div`
  height:50vh;
  img {
    height: 100%;
    width: 100%;
    object-fit:contain;
  }
`;

export const ImageContainer = styled(ImageContainerStyle)`

 
`;

export const ImageContainer1 = styled(ImageContainerStyle)`

`;

export const Section = styled.div`

padding-left:6rem;
padding-right:4rem;
  display:flex;
  align-items:center;
  margin-bottom:2rem;

  @media screen and (min-width:768px){
    padding-left:2rem;
    padding-right:0;
    flex:1;
    margin-bottom:0rem;
  }


}

  
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
