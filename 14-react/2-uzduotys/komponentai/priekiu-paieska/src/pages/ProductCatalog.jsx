import { useState } from "react";
import HeaderWithCounter from "../components/HeaderWithCounter";
import { products } from "../data/products";
import './ProductCatalog.css';
import Product from "../components/Product/Product";
import Search from "../components/Search/Search";

const ProductCatalog = () => {
    const [data, setData] = useState(products);

    const updateData = (newData) => {
        setData(newData);
    }

    const initData = () => {
        setData(products);
    }

    return (
        <div className="catalogContainer">
            <HeaderWithCounter
                title='Prekes'
                count={data.length}/>
            <Search
                items={data}
                onSearchButtonClick={updateData}
                onResetButtonClick={initData}
            />

            {
                data.length > 0 && (
                    data.map(item => {
                        return <Product product={item} />
                   })
                )
            }

            {
                data.length === 0 && (
                    <h4>nera prekiu</h4>
                )
            }
        </div>
    )
}

export default ProductCatalog;
