import css from './footer.module.css'
import {getGoods} from 'components/api/api'
import { useEffect, useState } from 'react'

export const Footer = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        getGoods(4).then((r) => setData(r.items))
    }, [])

    return (
        <footer>
            <p className={css.footer}>этот магаз не смогла сделать лохушка </p>
        </footer>
    )
}
