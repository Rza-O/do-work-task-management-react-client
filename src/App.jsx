import { Navigate, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Loading from './Components/Loading'
import useAuth from './Hooks/useAuth'

function App() {
  const { user, loading } = useAuth();
  // Get current route
  const location = useLocation(); 

  if (loading) {
    return <Loading />;
  }

  // Redirect logged-in users away from login page
  if (user && location.pathname === "/login") {
    return <Navigate to="/" replace />;
  }

  // Redirect unauthenticated users to login
  if (!user && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  
  return <Outlet />;
}

export default App
