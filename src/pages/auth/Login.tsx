import React, { useState } from 'react'
import { postAPI } from '../../helper/API/APIData'
import { useNavigate } from 'react-router'
import TextInput from '../../components/input/TextInput'
import { Link } from 'react-router'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      const response = await postAPI('user/login', formData)
      const data = await response.json()
      if (response.status === 200) {
        navigate('/')
      } else {
        window.alert(data.error || data.message)
      }
    } catch (error) {
      window.alert(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <TextInput id="email" label="Email Address" name="email" type="email" required={true} value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
            </div>
            <div>
              <TextInput id="password" label="Password" name="password" type="password" required={true} value={formData.password} onChange={handleChange} placeholder="Enter your password" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
          <div className='text-center text-sm text-gray-500'> Don't have an account? <Link to="/register" className='text-indigo-600 hover:text-indigo-700'>Register</Link> </div>
        </form>
      </div>
    </div>
  )
}

export default Login