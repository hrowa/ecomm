import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(225,225, 225, 0.5), rgba(225,225, 225, 0.5)), url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg");
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Option = styled.option``;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
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
                    <Button>SIGN UP</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default ProductList