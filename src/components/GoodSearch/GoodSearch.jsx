import { debounce } from "lodash"
import { useCallback, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { getSearch } from "api"
import { useParams } from "react-router-dom"
import css from './goodSearch.module.css'
 
const Input = ({value, onChange, options = [], onOptionClick}) => {
    
    const {categoryTypeId} = useParams()

    const changeHandler = (e) => {
        onChange(e.target.value, e)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type='text'placeholder='search...' className={css.search}/>
            <ul>
                {options.map((i) => {
                    return (
                        <Link key={i.id} to={`/${categoryTypeId}/${i.id}`} onClick={onOptionClick}>
                            <li onClick={() => onOptionClick(i)}>{i.label}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export const GoodSearch = () => {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState([])
    const navigate = useNavigate()
    const {categoryTypeId} = useParams()

    const getSearchDebounced = useCallback(debounce((value) => {
        getSearch(value).then((r) => setOptions(r.data))
    }, 1500)) 

    useEffect(() => {
        if(value.length > 2) {
            getSearchDebounced(value)
        }
    }, [value])

    const onOptionClick = (i) => {
        navigate(`/${categoryTypeId}/${i.id}`)
    }

    return <Input value={value} onChange={setValue} options={options} onOptionClick={onOptionClick}/>
}
