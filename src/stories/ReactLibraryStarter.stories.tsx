import React from 'react'
import { MyComponent } from '..'

export default {
  title: 'React Library Starter',
}

export const Default: React.FC = () => {
  return (
    <MyComponent
      text="Welcome to your library! 😄"
      description="Go ahead and make magic today."
    />
  )
}
