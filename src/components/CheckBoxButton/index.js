import React from 'react'

import { Container } from './styles'

const CheckboxButton = ({ children, activeButton, ...rest }) => {

  return (
    <Container {...rest} activeButton={activeButton}>
      <p>{children}</p>
    </Container>
  )
}

export default CheckboxButton
