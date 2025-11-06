import { useNavigate } from 'react-router'
import NavButton from './NavButton'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="flex items-center justify-between bg-black text-white p-5">
                <NavButton to="/" label="Home" />
                <NavButton to="/cart" label="Cart" />
                <NavButton to="/orders" label="Orders" />
                <NavButton to="/logout" label="Logout" />
            </div>
        </div>
    )
}

export default Navbar