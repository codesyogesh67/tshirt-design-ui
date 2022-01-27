import styled from "styled-components";

export const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 6rem;
  padding-right: 4rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 4rem;
  }

  @media only ascreen and (max-width: 550px) {
    padding: 2rem;
  }
`;

export const TestimonialWrapper = styled.div`
  position: relative;
  max-width: 1050px;
  margin: 3rem;

  padding: 0 2rem;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }

  @media screen and (max-width: 550px) {
    margin-top: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-family: var(--font-title);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;

  @media screen and (max-width: 768px) {
    margin-top: 6rem;
  }

  @media screen and (max-width: 550px) {
    margin-top: 8rem;
  }
`;
export const Text = styled.p`
  border: 1px solid #d4d2d2;
  box-shadow: 12px 12px rgba(201, 196, 195, 0.5);
  min-width: 300px;
  width: 50%;
  padding: 3rem 4rem;
  text-align: center;
  color: var(--color-text);
  background: white;
  border-radius: 10px;

  @media screen and (max-width: 1050px) {
    padding: 2rem;
  }
`;

export const ImageContainer = styled.div`
  div:nth-child(1) {
    top: 150px;
    left: 12%;
    width: 120px;
  }

  div:nth-child(2) {
    left: 68%;
    top: 150px;
    width: 100px;
  }
  div:nth-child(3) {
    top: 300px;
    left: 0;
    width: 120px;
  }
  div:nth-child(4) {
    left: 83%;
    top: 300px;
  }
  div:nth-child(5) {
    top: 450px;
    left: 15%;
  }

  div:nth-child(6) {
    left: 68%;
    top: 450px;
    width: 100px;
  }

  @media screen and (max-width: 910px) {
    img:nth-child(1) {
      width: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    div:nth-child(n) {
      top: 180px;
      width: 100px;
    }

    div:nth-child(1) {
      left: 0%;
    }

    div:nth-child(2) {
      left: 20%;
    }
    div:nth-child(3) {
      left: 40%;
    }
    div:nth-child(4) {
      left: 60%;
    }
    div:nth-child(5) {
      left: 80%;
    }

    div:nth-child(6) {
      left: 100%;
    }
  }

  @media screen and (max-width: 550px) {
    div:nth-child(5) {
      top: 250px;
      left: 20%;
    }
    div:nth-child(6) {
      top: 260px;
      left: 40%;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
