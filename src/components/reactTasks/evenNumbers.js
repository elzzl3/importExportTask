import React from 'react'
import _ from 'lodash'
import Numbers from './numbers'

export default props => <Numbers numbers={_.filter(props.numList, n => n % 2 === 0)} />
