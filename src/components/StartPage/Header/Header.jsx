import css from './header.module.css'
import {ShoppingOutlined, UserOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom"
import { GoodsSelectors } from 'store'
import { useSelector } from 'react-redux'


export const Header = () => {
    const isAuth = useSelector(GoodsSelectors.getAuth);

    
    
    return (
        <header className={css.wrapper}>
            <Link to={'/'}>
                <div>header</div>
            </Link>
            <input type="text" />
            <div>
                {isAuth ? (
                    <div>
                        <Link to={'/'}>
                            <button>exid</button>
                        </Link>
                        
                        <ShoppingOutlined />
                    </div>
                ) : (
                    <Link to={'/login'}>
                        <UserOutlined />
                    </Link>
                )}
            </div>
        </header>
    )
}
