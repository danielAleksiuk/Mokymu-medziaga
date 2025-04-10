import Button from '../Button';
import './Product.css';

const Product = (props) => {
    let product = props.product;

    return (
        <div className='productContainer'>
            <div>
                <h4>{product.name}</h4>
                <p>price: {product.price}</p>
                <p>amount: {product.amount}</p>
            </div>
            {/* <Button title="Delete" action={deleteProduct} */}
        </div>
    )
}

export default Product;