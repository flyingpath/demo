import Navigator from './Navigator'
import Content from './Content'
import './App.css'
import { defaultTheme, Provider } from '@adobe/react-spectrum'
import React, { useCallback } from 'react'

const routeDontNeedLogin = ['home', 'login']

function App() {
  const [route, setRoute] = React.useState('home')

  const handleRoute = useCallback((route) => {
    if (routeDontNeedLogin.includes(route)) {
      setRoute(route)
    } else {
      if (localStorage.getItem('token')) {
        setRoute(route)
      } else {
        setRoute('login')
      }
    }
  }, [])

  return (
    <Provider theme={defaultTheme}>
      <div className='App'>
        <Navigator
          route={route}
          setRoute={handleRoute}
          onChange={(route) => handleRoute(route)}
        />
        <Content route={route} setRoute={handleRoute} />
      </div>
    </Provider>
  )
}

export default App
