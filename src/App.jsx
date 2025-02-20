import './App.css'
import useAuth from './Hooks/useAuth'

function App() {
  const { handleGoogleLogin } = useAuth();

  const handleSocialLogin = () => {
    handleGoogleLogin()
      .then(res => console.log('login successful!'))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h2 className='text-5xl'>Do Work</h2>
      <p>Smart solution for task management!</p>
      <button onClick={handleSocialLogin}>Click me to google login</button>
    </>
  )
}

export default App
