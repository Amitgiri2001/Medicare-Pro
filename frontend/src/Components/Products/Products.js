import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {

    // state for pagination
    const [currentPage, setCurrentPage] = useState([1]);
    const pageLimit = 10;
    const [totalPages, setTotalPages] = useState(1);

    function nextPageHandler() {
        setCurrentPage(currentPage + 1)
    };
    function prevPageHandler() {
        setCurrentPage(currentPage - 1)
    };

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [isError, setIsError] = useState(false);

    // all category
    const [allCategory, setAllCategory] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            setIsLoading(true);
            try {
                const products = await fetch(`https://dummyjson.com/products?limit=${pageLimit}&skip=${(currentPage - 1) * 10}`);

                const productsArray = await products.json();
                console.log(typeof (productsArray));
                console.log(productsArray.products);
                setProducts(productsArray.products);
                if (!products.ok) {
                    throw new Error({ message: "Product not found" });
                }

                // stop the loading
                setIsLoading(false);
            } catch (e) {
                setIsError({ message: e.message || "can't find products" });
                console.log(e.message);
            }

        }

        async function allCategory() {
            const response = await fetch("https://dummyjson.com/products/categories");
            const categories = await response.json();

            setAllCategory(categories);
        }

        // call function
        fetchProducts();
        allCategory();
    }, [currentPage])

    async function filterByCategory(option) {
        const products = await fetch(`https://dummyjson.com/products/category/${option}?limit=${pageLimit}&skip=${(currentPage - 1) * 10}`);

        const productsArray = await products.json();
        console.log(typeof (productsArray));
        setProducts(productsArray.products);
    }


    // filtering product by category
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = allCategory;

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
        filterByCategory(option);
    };

    return (<>
        {isError && <h1>Error Fetching data</h1>}
        {!isError && !isLoading && products.length !== 0 && (<div className={styles.container}>
            {products.map(product => (
                <ProductCard key={product.id} data={product} />
            ))

            }



        </div>)}

        {/* //if Error Occurred then */}


        {!isError && isLoading && <h2>Loading....</h2>}

        {!isError && <div>
            <button onClick={prevPageHandler} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={nextPageHandler} disabled={products.length === 0}>
                Next
            </button>

            {/* filter option */}
            <div className="dropdown-container">
                <button onClick={handleButtonClick} className="dropdown-button">
                    {selectedOption || 'Select an Option'}
                </button>

                {showOptions && (
                    <div className="options-container">
                        {options.map((option) => (
                            <div key={option} onClick={() => handleOptionClick(option)} className="option">
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>}
    </>
    )
}

export default Products