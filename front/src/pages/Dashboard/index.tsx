import React, {useEffect, useState} from "react";
import { Product } from "../../types/Product";
import ProductCard from "../../components/ProductCards";
import { fetchProducts } from "../../service/productApi";
import "./styles.css";

const Dash: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            }catch (err) {
                setError('Erro ao carregar produtos');
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p>{error}</p>;

    return(
        <div className="container">
            <div className="product-grid">
                {products.map(product => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Dash