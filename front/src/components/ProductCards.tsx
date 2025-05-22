import React from "react";
import { Product } from "../types/Product";
import "../pages/Dashboard/styles.css"

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const handleBuyClick = () => {
        alert("Compra realizada com Sucesso!");
    }
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-card-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">R$ {product.price.toFixed(2)}</p>
                <a href="#" className="buy-button" onClick={handleBuyClick}>Comprar</a>
            </div>
        </div>
    );
};

export default ProductCard;