import { useCallback } from 'react'
import { Button } from '@adobe/react-spectrum'

import './index.css'

const navList = [
  { label: '首頁', route: 'home' },
  { label: '登入', route: 'login' },
  { label: '登出', route: 'logout' },
]

function Navigator(props) {
  const handleChange = useCallback(
    (route) => {
      props.onChange?.(route)
    },
    [props]
  )

  return (
    <div className='navigator'>
      {navList.map((nav, index) => (
        <Button
          key={index}
          UNSAFE_className='nav'
          variant='accent'
          onPress={() => {
            if (nav.label === '登出') {
              if (localStorage.getItem('token')) {
                localStorage.removeItem('token')
                alert('登出成功')
                props.setRoute('home')
              }
              return
            }
            handleChange(nav.route)
          }}
          style={props.route === nav.route ? 'fill' : 'outline'}
        >
          {nav.label}
        </Button>
      ))}
    </div>
  )
}

export default Navigator
