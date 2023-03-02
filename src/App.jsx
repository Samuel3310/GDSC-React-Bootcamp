import React from 'react'
import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'
import './styles.css'

const App = () => {
  return (
    <div className='container'>
      <Header text = "FEEDBACK UI"/>
      <FeedbackItem />
    </div>
  )
}

export default App