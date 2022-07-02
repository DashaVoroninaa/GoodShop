import css from './goodSearch.module.css'

export const Input = ({value, onChange}) => {
    
    const changeHandler = (e) => {
        onChange(e.target.value, e)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' placeholder='search...' className={css.search}/>
        </div>
    )
}
