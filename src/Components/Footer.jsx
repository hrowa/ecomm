import styled from "styled-components";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div`
    
`;

const Desc = styled.div`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
    return (
        <div>
            <hr style={{border: "1px solid black", borderRadius: "50%"}}/>
        <Container>
            <Left>
                <Logo>LOGO</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi ducimus, eum inventore libero quam quos voluptatum. Aliquam autem beatae consectetur, et fugiat id impedit minus quis rerum velit voluptatibus?</Desc>
                <SocialContainer>
                    <SocialIcon color="#3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="#E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="#55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="#E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>
                    213, Dobie Street, Homeland 54691, Connerwield
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    +123 456 789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>
                    contact@lewa.io
                </ContactItem>
                <ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.jpg"/>
                </ContactItem>
            </Right>
        </Container>
        </div>
    )}

export default Footer