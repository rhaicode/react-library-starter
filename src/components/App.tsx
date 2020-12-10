import React from 'react'
import { AppProps } from '../types'
import { ReactComponent as Check } from '../assets/check.svg'

const App: React.FC<AppProps> = ({ text, description }) => {
  return (
    <div className="app p-4 rounded-xl">
      <div className="w-24 h-24 mx-auto">
        <Check className="stroke-current text-white" />
      </div>
      <p className="text-white text-center text-2xl">{text}</p>
      <p className="text-white text-center text-sm">{description}</p>
    </div>
  )
}
export default App
