import { useNavigate } from 'react-router'

const NavButton = ({ to, label }: { to: string, label: string }) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(to)
    }

  return (
    <button className='cursor-pointer' onClick={handleClick}>{label}</button>
  )
}

export default NavButton