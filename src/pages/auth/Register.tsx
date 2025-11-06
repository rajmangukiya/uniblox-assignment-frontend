import React, { useState } from 'react'
import { postAPI } from '../../helper/API/APIData'
import { useNavigate } from 'react-router'
import TextInput from '../../components/input/TextInput'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    e.preventDefault()
    const response = await postAPI('user/register', formData)
    const data = await response.json()
    if (response.status === 200) {
      navigate('/')
    } else {
        window.alert(data.error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register your account
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <TextInput id="name" label="Full Name" name="name" type="text" required={true} value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
            </div>
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register