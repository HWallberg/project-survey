import React from 'react'
import Survey from './components/Survey'
import Header from './components/Header';



export const App = () => {
  return (
    <div className="background">
      <>
        <Header />
        <div className='survey-box'>
          <Survey />
        </div>
        </>
    </div>
  )
}
