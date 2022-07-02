import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductPage } from "store/ProductPageSlice";
import { ProductPageSelectors } from "store/ProductPageSlice";
import { Loader } from "components/common";
import { Card } from "antd"
import css from './productPage.module.css'

export const ProductPage = () => {

    const {id} = useParams()

    const productPage = useSelector(ProductPageSelectors.getProductPageSelector)

    const isLoading = useSelector(ProductPageSelectors.isLoading)
    const isError = useSelector(ProductPageSelectors.isError)
    const isLoaded = useSelector(ProductPageSelectors.isLoaded)

    const dispatch = useDispatch()
    const getProductPage = (id) => dispatch(fetchProductPage(id))

    useEffect(() => {
        getProductPage(id)
    }, [id])

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div className={css.wrapper}>
            {isLoading && <Loader/>}
            {isError && <button onClick={() => goBack()} className={css.button}>Продукт не найден, вернуться назад</button>}
            {isLoaded && (<div>
                {productPage.map((i) => (
                    <div key={i.id}  className={css.wrapper}>
                        <Card className={css.card}
                            title={i.label} 
                            hoverable
                            style={{width: 600,}}
                            cover={<img  alt="example" src={i.img} className={css.img}/>}>
                        </Card>
                        <div className={css.information}>
                            <span>{i.description}</span>
                            <span>{i.price}</span>
                            <button className={css.button}>Положить в корзину</button>
                        </div>
                    </div>
                ))}
            </div>)}
        </div>
    )
}
