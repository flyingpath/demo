import LoginForm from './components/LoginForm'
import Main from './components/Main'
import './index.css'

function Content(props) {
  const { route, setRoute } = props

  if (route === 'home') return <div className='content'>簡單的公司資訊</div>

  if (route === 'login') {
    return (
      <div className='content'>
        <LoginForm setRoute={setRoute} />
      </div>
    )
  }

  if (route === 'shipment') {
    return <Main setRoute={setRoute} />
  }

  return null
}

export default Content
