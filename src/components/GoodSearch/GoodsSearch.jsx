import { debounce } from "lodash"
import { useCallback, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { getSearch } from "api"
import { Input } from "./Input"
import css from './goodSearch.module.css'
 
const Search = ({options = [], onOptionClick}) => {

    return (
        <ul className={css.result}>
            {options.length > 0 ? options.map((i) => {
                return (
                    <Link key={i.id} to={`/${i.categoryTypeId}/${i.id}`} onClick={onOptionClick} className={css.title}>
                        <li onClick={() => onOptionClick(i)} className={css.text}>{i.label}</li>
                    </Link>
                )
            }) : <li className={css.title}>Ничего не найдено, попробуйте изменить запрос</li>}
        </ul>
    )
}

export const GoodSearch = () => {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState([])
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()

    const getSearchDebounced = useCallback(debounce((value) => {
        getSearch(value).then((r) => setOptions(r.items))
    }, 1500), []) 

    useEffect(() => {
        if(value.length > 2) {
            getSearchDebounced(value)
            setMenu(true)
        } else {
            setMenu(false)
        }
    }, [value])

    const onOptionClick = (i) => {
        navigate(`/${i.categoryTypeId}/${i.id}`)
    }

    return (
        <div>
            <Input value={value} onChange={setValue}/>
            {menu && <Search options={options} onOptionClick={onOptionClick}/>}
        </div>
    )
}
