import { Form, TextField, Button } from '@adobe/react-spectrum'
import { useCallback } from 'react'

const login = (e) => {
  localStorage.setItem(
    'token',
    JSON.stringify({
      account: e.target[0].value,
      password: e.target[1].value,
    })
  )

  return Promise.resolve('登入成功')
}

function LoginForm(props) {
  const { setRoute } = props

  const onLogin = useCallback(
    (e) => {
      e.preventDefault()
      login(e).then(() => {
        alert('登入成功')
        setRoute('shipment')
      })
    },
    [setRoute]
  )

  return (
    <Form maxWidth='size-3600' validationBehavior='native' onSubmit={onLogin}>
      身分認證
      <TextField
        label='使用者名稱'
        isRequired
        autoComplete='username'
        name='acc'
      />
      <TextField
        label='密碼'
        isRequired
        type='password'
        autoComplete='current-password'
        name='pass'
      />
      <Button type='submit' variant='primary'>
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
