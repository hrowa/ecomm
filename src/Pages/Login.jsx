import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(225,225, 225, 0.5), rgba(225,225, 225, 0.5)), url("https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ProductList = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    SIGN IN
                </Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                        <Button>LOGIN</Button>
                        <Link>FORGOT PASSWORD</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default ProductList