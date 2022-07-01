import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularCategotiesSelectors } from "store/popularCategorySlice";
import { fetchPopularCategories } from "store/popularCategorySlice";
import { Card } from "antd";
import { Loader } from "components/common";
import css from './goodCategory.module.css'

export const GoodCategory = () => {
    const {Meta} = Card
    
    const popularCategories = useSelector(PopularCategotiesSelectors.getPopularCategoriesSelector)
    const isLoading = useSelector(PopularCategotiesSelectors.isLoading)
    const isError = useSelector(PopularCategotiesSelectors.isError)
    const isLoaded = useSelector(PopularCategotiesSelectors.isLoaded)

    const dispatch = useDispatch()
    const getPopularCategories = () => dispatch(fetchPopularCategories())

    useEffect(() => {
        getPopularCategories()
    },[])

    return (
        <div>
            <h3>Популярные категории:</h3>
            {isLoading && <Loader/>}
            {isError && <span>ой</span>}
            {isLoaded && (<div>
                {popularCategories.map((i) => {
                return(
                    <div key={i.id}>
                        <h4>{i.category.label}</h4>
                        <div className={css.container}>
                        {i.items.map((item) => (
                            <Card 
                            className={css.card}
                                hoverable
                                style={{width: 200,}}
                                cover={<img  alt="example" src={item.img}/>}>
                                <Meta title={item.label} description={item.price}/>
                            </Card>
                        ))}
                        </div>
                    </div>
                )
            })}
            </div>)}
        </div>
    )
}
