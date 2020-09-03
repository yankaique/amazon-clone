import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen (props){
    const product = data.products.find(x=>x._id === props.match.params.id)
    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"/>
            </div>
            <div className="details-inf">
                <ul className="info-first-list">
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="1">4</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">Add to Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;