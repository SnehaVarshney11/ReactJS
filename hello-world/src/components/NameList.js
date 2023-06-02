// FILE OF List Rendering
import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Alice', 'Charles']
    const nameList = names.map(name => <h2>{name}</h2>)

    const person = [
        {
            id: 1,
            name: 'Alice',
            age: '20',
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Bruce',
            age: '23',
            skill: 'HTML'
        },
        {
            id: 3,
            name: 'Charle',
            age: '21',
            skill: 'React'
        },
        {
            id: 4,
            name: 'Denial',
            age: '25',
            skill: 'CSS'
        },
    ]
    // const personList = person.map(person => <h2>I am {person.name}. I am {person.age} yaers old. I know {person.skill}.</h2>)
    //About LIST AND KEY
    const personList = person.map(person => <Person key={person.id} person = {person}/>)
  return (
    <div>
        {
            // names.map(name => <h2>{name}</h2>)
            //nameList
            personList
        }
    </div>
  )
}

export default NameList
