import styled from 'styled-components'
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(225,225, 225, 0.5), rgba(225,225, 225, 0.5)), url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg");
`;

const Wrapper = styled.div`
    
`;

const Title = styled.h1`
    
`;

const Form = styled.form`
    
`;

const Input = styled.input`
    
`;

const Option = styled.option``;

const Agreement = styled.span`

`;

const Button = styled.button`

`;


const ProductList = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur aut autem consectetur deleniti dignissimos dolorum, enim laboriosam libero magnam nulla numquam possimus quidem quod rem, sequi ut vero.</Agreement>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default ProductList