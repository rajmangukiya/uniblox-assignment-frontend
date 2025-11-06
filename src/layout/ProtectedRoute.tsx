import { getAPI } from '../helper/API/APIData'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Navbar from '../components/navbar/Navbar'

const ProtectedRoute = () => {

  const navigate = useNavigate()

  const authCheck = async () => {
    try {
      const response = await getAPI('user/get-one')
      
      if (response.status !== 200) {
        navigate('/login')
      }
    } catch (error) {
      navigate('/login')
    }
  }

  useEffect(() => {
    authCheck()
  }, [])

  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoute