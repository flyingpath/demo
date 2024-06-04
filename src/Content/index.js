import LoginForm from './components/LoginForm'
import Main from './components/Main'
import './index.css'

function Content(props) {
  const { route, setRoute } = props

  if (route === 'home') return <div className='content'>簡單的公司資訊</div>

  const isLogin = localStorage.getItem('token')

  if (route === 'login') {
    if (!isLogin) {
      return (
        <div className='content'>
          <LoginForm setRoute={setRoute} />
        </div>
      )
    } else {
      return <Main />
    }
  }
  return null
}

export default Content
