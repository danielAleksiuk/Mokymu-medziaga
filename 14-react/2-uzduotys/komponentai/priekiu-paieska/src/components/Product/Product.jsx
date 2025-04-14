import './Product.css';
import Button from '../Button';

const Product = (props) => {
    let product = props.product;

    const onDeleteButtonClick = () => {
        props.onDeleteAction(product.id)
    }

    return (
        <div className='productContainer'>
            <div>
                <h4>{product.name}</h4>
                <p>price: {product.price}</p>
                <p>amount: {product.amount}</p>
                <Button title='Delete' action={onDeleteButtonClick}/>
            </div>
        </div>
    )
}

export default Product;