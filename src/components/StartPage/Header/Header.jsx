import css from './header.module.css'
import {ShoppingOutlined, UserOutlined} from '@ant-design/icons'
import { Link, useNavigate  } from "react-router-dom"
import { GoodsSelectors } from 'store/registrationSlice'
import { useSelector } from 'react-redux'
import { GoodSearch } from 'components/GoodSearch/GoodsSearch'
import { useDispatch } from 'react-redux'
import { authAction } from 'store/registrationSlice'

export const Header = () => {
    const isAuth = useSelector(GoodsSelectors.getAuth);

    const dispatch = useDispatch()
    const getsAuth = () => dispatch(authAction.getsAuth());

    const navigate = useNavigate()

    const exidButton = () => {
        getsAuth()
        navigate('/')
    } 

    return (
        <header className={css.wrapper}>
            <Link to={'/'} className={css.title}>
                <span>Header</span>
            </Link>
            <GoodSearch/>
            <div>
                {isAuth ? (
                    <div>
                        <Link to={'/cart'}>
                            <ShoppingOutlined />
                        </Link>
                        <Link to={'/'}>
                            <button onClick={exidButton}>exid</button>
                        </Link>
                    </div>
                ) : (
                    <Link to={'/login'} className={css.title}>
                        <span>Log in</span>
                    </Link>
                )}
            </div>
        </header>
    )
}
