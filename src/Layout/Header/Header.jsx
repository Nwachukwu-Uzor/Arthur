import React from 'react'
import Wrapper from '../../UI/Wrapper/Wrapper'

const Header = () => {
  return (
    <Wrapper>
      <img src={require("../../assets/Logo.png")} alt="logo" className='h-5' />
    </Wrapper>
  )
}

export default Header