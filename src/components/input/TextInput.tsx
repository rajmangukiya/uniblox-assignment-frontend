import React from 'react'

const TextInput = ({ id, label, name, type, required, value, onChange, placeholder, className }: { id: string, label: string, name: string, type: string, required: boolean, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string, className: string }) => {
  return (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            id={id}
            name={name}
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            className={`w-full mt-1 appearance-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            placeholder={placeholder}
        />
    </div>
  )
}

export default TextInput