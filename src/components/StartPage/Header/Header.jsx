import css from './header.module.css'
import {ShoppingOutlined, UserOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className={css.wrapper}>
            <Link to={'/'}>
                <div>header</div>
            </Link>
            <input type="text" />
            <Link to={'/login'}>
                <UserOutlined />
            </Link>
           
                <ShoppingOutlined />
                
            
        </header>
    )
}
