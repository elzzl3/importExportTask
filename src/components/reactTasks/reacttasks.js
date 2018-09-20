import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import HelloKitty from './hellokitty'
import Person from './person'
import PersonWithProps from './personWithProps'
import Adder from './adder'
import BoldEvenNumbers from './boldEvenNumbers'
import Company from './company'
import RandomGenerator from './random'
import NextName from './nextNames'
import BoxGrower from './boxGrower'
import NamesList from './nameList'

const Text = 'p'

export default () => {
  return (
    <div>
      <p>Question 1 Answer</p>
      <Hello />

      <p>Question 2 Answer</p>
      <Kitty />

      <HelloKitty />

      <PersonWithProps name={'John'} age={20} />
      <PersonWithProps name={'Richard'} age={27} />

      <Adder number1={1} number2={2} />
      <Adder number1={7} number2={3} />

      <BoldEvenNumbers numList={[1, 2, 3, 4, 5]} />

      <Person person={{ name: 'John', age: 20 }} />

      <Company name={'ZDEV'} employees={[{ name: 'John', age: 20 }, { name: 'Rich', age: 27 }]} />

      <Text style={{ color: 'pink' }}>Hello There!</Text>

      <button onClick={() => console.log('hello')}>Press Me</button>

      <RandomGenerator />

      <NextName names={['Richard', 'John']} />

      <BoxGrower />

      <NamesList />
    </div>
  )
}
