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
            {isLoading && <Loader/>}
            {isError && <span>ой</span>}
            {isLoaded && (<div>
                {popularCategories.map((i) => {
                return(
                    <div>
                        <div>{i.category.label}</div>
                    {i.items.slice(0, 9).map((item) => (
                        <Card
                            hoverable
                            style={{width: 250,}}
                            cover={<img  alt="example" src={item.img} className={css.img}/>}>
                            <Meta title={item.label} description={item.price} />
                        </Card>
                    ))}
                    </div>
                )
            })}
            </div>)}
        </div>
    )
}
