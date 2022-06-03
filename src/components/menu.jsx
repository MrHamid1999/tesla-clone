import styled from "styled-components"

const Menu = () => {
  return (
    <Container>
        <Logo href="">
            <img src="../../public/img/tesla-logo.png" alt="" />
        </Logo>
        <LeftMenu></LeftMenu>
        <RightMenu></RightMenu>
    </Container>
  )
}

export default Menu

const Container = styled.div`
    position : fixed ; 
    background : none ;
    display : flex ; 
    justify-content : space -between ;
    top: 0
`
const Logo = styled.a`
    
`
const LeftMenu = styled.div``
const RightMenu = styled.div``