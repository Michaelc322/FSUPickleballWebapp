import styled from 'styled-components'

const HeaderText = styled.h1`
  color: #2C2A29;
  font-family: Poppins;
`

const Section = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: #ffffff;
    height: 100vh;
    top: 80px;
    flex-direction: column;
`

const Container = styled.div`
  padding: 2rem;
  width: 50rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const Contact = () => {
  return (
    <Section>
      <Container className="home-container">
        <HeaderText>CONTACT</HeaderText>
      </Container>
    </Section>
  )
}

export default Contact