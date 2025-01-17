import React, {useState} from 'react';

import QuestionName from './QuestionName';
import QuestionOptions from './QuestionOptions';
import QuestionWhy from './QuestionWhy';
import Summary from './Summary';

// useState

const Survey = () => {
    const [nameInput, setNameInput] = useState('');
    const [location, setLocation] = useState('');
    const [why, setWhy] = useState('');
    const [next, setNext] = useState(1);


// events

    const handleNameInputChange = (event) => {
        setNameInput(event.target.value)
    }

    const handleLocationChange = (location) => {
      setLocation(location)
    }

    const handleWhyChange = (why) => {
      setWhy(why)
    }

    const handleNextChange = () => {
      setNext(next + 1)
    }


    return (
        <>
    
        <section className='Survey'>
          
          {next === 1 && (
              <QuestionName
                  nameInput={nameInput}
                  onChange={handleNameInputChange}
                  onNameInputChange={handleNameInputChange}
                  onNextChange={handleNextChange}
              />
          )}

          {next === 2 && (
              <QuestionOptions
                  location={location}
                  onChange={handleLocationChange}
                  onLocationChange={handleLocationChange}
                  onNextChange={handleNextChange}
              />
          )}

          {next === 3 && (
              <QuestionWhy
                  why={why}
                  onChange={handleWhyChange}
                  onWhyChange={handleWhyChange}
                  onNextChange={handleNextChange}
              />

          )}

          {next === 4 && (
              <Summary 
                  nameInput={nameInput} 
                  location={location} 
                  why={why}
              />
          )}
          
        </section>

    </>
  )
}

export default Survey



