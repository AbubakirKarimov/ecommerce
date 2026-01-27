import { Product } from './Product';

export function ProductsGrid({ products,loadCart, cart }) {
    
    return (
        <div className="products-grid">
            {products.map((product) => {

                return (
                    <Product key={product.id}loadCart={loadCart} product={product} cart={cart}/>
                );
            })}
        </div>
    );
}