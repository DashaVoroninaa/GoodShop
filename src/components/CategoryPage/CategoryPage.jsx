import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link, useNavigate } from "react-router-dom"
import { fetchCategoryPage } from "store/categoryPageSlice"
import { CategoryPageSelectors } from "store/categoryPageSlice"
import { Loader } from "components/common"
import { Card } from "antd"
import css from './categoryPage.module.css'

export const CategoryPage = () => {

    const {Meta} = Card

    const {categoryTypeId} = useParams()
    
    const categoryPage = useSelector(CategoryPageSelectors.getCategoryPageSelector)

    const isLoading = useSelector(CategoryPageSelectors.isLoading)
    const isError = useSelector(CategoryPageSelectors.isError)
    const isLoaded = useSelector(CategoryPageSelectors.isLoaded)

    const dispatch = useDispatch()
    const getCategoryPage = (categoryTypeId) => dispatch(fetchCategoryPage(categoryTypeId))

    useEffect(() => {
        getCategoryPage(categoryTypeId)
    }, [])

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div className={css.wrapper}>
            {isLoading && <Loader/>}
            {isError && <button onClick={() => goBack()} className={css.button}>Категория не найдена, вернуться назад</button>}
            {isLoaded && (<div  className={css.main}>
                {categoryPage.map((i) => (
                    <div>
                        <Link to={`${categoryTypeId}/${i.id}`}>
                            <Card 
                                className={css.card}
                                hoverable
                                style={{width: 200,}}
                                cover={<img  alt="example" src={i.img}/>}>
                                <Meta title={i.label} description={i.price} className={css.title}/>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}
