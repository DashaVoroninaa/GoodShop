import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CategoriesSelectors} from "store/categorySlice"
import { fetchCategories } from "store/categorySlice"
import { Link } from "react-router-dom"
import { Menu } from "antd"
import MenuItem from "antd/lib/menu/MenuItem"
import css from './menu.module.css'

export const MenuOriginal = () => {
    
    const categories = useSelector(CategoriesSelectors.getCategoriesSelector)

    const dispatch = useDispatch()
    const getCategories = () => dispatch(fetchCategories())

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div>
            <span>Категории:</span>
            <Menu>
                {categories.map((i) => {
                    return(
                        <MenuItem key={i.id}>
                            <Link to={i.id} className={css.title}>
                                <div>{i.label}</div>
                            </Link>
                        </MenuItem>
                    )
                })}
            </Menu>
        </div>
    )
}
