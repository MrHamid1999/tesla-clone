import React from 'react'
import styled from "styled-components"


const Models = ({props}) => {
    const {name , img , link , content } = props; 
    console.log(img);
  return (
    <Container img={img}>
        <Title>
            <h2>{name}</h2>
            {name.includes('Model') ? <p>order online for <a href="#">Touchless Delivery</a></p> : <p>{content}</p>}
        </Title>
        <Buttons>
            <button>order now</button>
            <button>learn more</button>
        </Buttons>
    
    </Container>
  )
}

export default Models



const Container = styled.div`
    width : 100vw ;
    height : 100vh ;
    background : url(${props => props.img} ) ;
    background-size :  100% ;
    background-position : center
    
   
`
const Title = styled.div`
    height : 40% ;
    width : 100% ; 
    display : flex ; 
    flex-direction : column ;
    align-items : center ;
    justify-content : center; 
    h2{
        font-size : 2.54rem
    } ,
    p{
        color : rgba(0,0,0,0.8)
    }

`
const Buttons = styled.div`

`