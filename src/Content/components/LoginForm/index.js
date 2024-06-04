import { Form, TextField, Button } from '@adobe/react-spectrum'

function LoginForm(props) {
  const { setRoute } = props

  return (
    <Form
      maxWidth='size-3600'
      validationBehavior='native'
      onSubmit={(e) => {
        localStorage.setItem(
          'token',
          JSON.stringify({
            account: e.target[0].value,
            password: e.target[1].value,
          })
        )
        alert('登入成功')
        setRoute('home')
      }}
    >
      <TextField label='使用者名稱' isRequired />
      <TextField label='密碼' isRequired />
      <Button type='submit' variant='primary'>
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
