import React from 'react'
import C2 from 'components/c2'

export default (props) => (
  <div>
    <h1>c1.js</h1>
    <C2>
      {props.children}
    </C2>
  </div>
)
