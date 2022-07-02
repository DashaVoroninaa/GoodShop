import css from './header.module.css'
import {ShoppingOutlined, UserOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom"
import { GoodsSelectors } from 'store/registrationSlice'
import { useSelector } from 'react-redux'
import { GoodSearch } from 'components/GoodSearch/GoodsSearch'

export const Header = () => {
    const isAuth = useSelector(GoodsSelectors.getAuth);

    return (
        <header className={css.wrapper}>
            <Link to={'/'}>
                <div>header</div>
            </Link>
            <GoodSearch/>
            <div>
                {isAuth ? (
                    <div>
                        <ShoppingOutlined />
                        <Link to={'/'}>
                            <button>exid</button>
                        </Link>
                    </div>
                ) : (
                    <Link to={'/login'}>
                        <span>Log in</span>
                    </Link>
                )}
            </div>
        </header>
    )
}
