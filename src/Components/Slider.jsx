import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {useState} from "react";
import {sliderItems} from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  margin: auto;
  z-index: 2;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
`

const Wrapper = styled.div`
  height: 10%;
  display: flex;
  transform: translateX(0vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg };
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.image`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {

    const[slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                    <ImgContainer>
                    <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>BUY NOW</Button>
                    </InfoContainer>
                    </Slide>
                ))}

                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src="https://i.ibb.co/XsdmR2c/1.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>DO NOT COMPROMISE</Description>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image src="https://i.ibb.co/XsdmR2c/1.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>DO NOT COMPROMISE</Description>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider