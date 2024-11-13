import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Camiseta', price: 29.99 },
    { id: 2, name: 'Calça Jeans', price: 79.99 },
    { id: 3, name: 'Jaqueta', price: 99.99 },
];

function ProductList() {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
