import { useNavigate } from 'react-router'
import NavButton from './NavButton'
import { postAPI } from '../../helper/API/APIData'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        await postAPI('user/logout', {})
        navigate('/login')
    }

    return (
        <div>
            <div className="flex items-center justify-between bg-black text-white p-5">
                <NavButton to="/" label="Home" />
                <NavButton to="/cart" label="Cart" />
                <NavButton to="/orders" label="Orders" />
                <button onClick={handleLogout} className='cursor-pointer'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar