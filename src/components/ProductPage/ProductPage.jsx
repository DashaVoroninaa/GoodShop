import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductPage } from "store/ProductPageSlice";
import { ProductPageSelectors } from "store/ProductPageSlice";
import { Loader } from "components/common";
import { Card } from "antd"

export const ProductPage = () => {

    const {Meta} = Card

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
        <div>
            {isLoading && <Loader/>}
            {isError && <button onClick={() => goBack()}>Продукт не найден, вернуться назад</button>}
            {isLoaded && (<div>
                {productPage.map((i) => (
                    <Card 
                    
                    hoverable
                    style={{width: 200,}}
                    cover={<img  alt="example" src={i.img}/>}>
                    <Meta title={i.label} description={i.price}/>
                </Card>
                ))}
            </div>)}
        </div>
    )
}
