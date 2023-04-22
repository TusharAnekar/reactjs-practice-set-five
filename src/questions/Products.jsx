import { useEffect, useState } from "react";
import { fakefetchTwo } from "../api/fakefetchTwo";

export function Products() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function getData() {
        setIsLoading(true)
        try {
            const { status, data } = await fakefetchTwo("https://example.com/api/products")
            if (status === 200) {
                setIsLoading(false)
                setProducts(data.products)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getData()
    }, [])

    function handleQuantityFilter() {
        setProducts(products.filter(({ quantity }) => quantity > 20))
    }

    function handlePriceFilter() {
        setProducts(products.filter(({ price }) => price < 100))
    }

    return (
        <section>
            <h1>Products</h1>
            <button onClick={handleQuantityFilter}>Show products with quantity more than 20</button>
            <button onClick={handlePriceFilter}>Filter by Price</button>
            <p>{isLoading && "Loading..."}</p>
            <ul>
                {
                    products.map(({ name, price, quantity }) =>
                        <li>{name} - Rs. {price} - Quantity: {quantity}</li>
                    )
                }
            </ul>
        </section>
    )
}