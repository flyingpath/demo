import Navigator from './Navigator'
import Content from './Content'
import './App.css'
import { defaultTheme, Provider } from '@adobe/react-spectrum'
import React from 'react'

function App() {
  const [route, setRoute] = React.useState('home')

  return (
    <Provider theme={defaultTheme}>
      <div className='App'>
        <Navigator
          route={route}
          setRoute={setRoute}
          onChange={(route) => setRoute(route)}
        />
        <Content route={route} setRoute={setRoute} />
      </div>
    </Provider>
  )
}

export default App
