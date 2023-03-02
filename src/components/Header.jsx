import React from 'react'

const Header = ({text}) => {
  return (
    <div className='container'>
        <h2>{text}</h2>
        <p>Happy Hacking!</p>
    </div>
  )
}
Header.defaultProps ={
    text: "Feedback UI"
}

export default Header