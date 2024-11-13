import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>Preço: R${product.price.toFixed(2)}</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    );
}

export default ProductCard;
