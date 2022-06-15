import {BsFillCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    // const {totalQuantity} = useContext(CartContext)
    const {totalQuantity} = useCartContext()

    return (
        <Link to="/cart" className={`widget ${totalQuantity() === 0 ? 'widget-hidden' :''}`}>
            <BsFillCartPlusFill/>
            <span>{totalQuantity()}</span>
        </Link>
    )
}

export default CartWidget