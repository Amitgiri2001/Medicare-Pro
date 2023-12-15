// i need to handle when pagination have to be enable with filter

import React, { useState, useEffect } from 'react';
import styles from "./AllProducts.module.css";
import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CompareTable from './CompareTable/CompareTable';

// Redux
import { useSelector } from 'react-redux';

const AllProducts = () => {
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 10;
    const [totalPages, setTotalPages] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [isError, setIsError] = useState(false);
    // filtering product by category

    const [selectedOption, setSelectedOption] = useState(null);
    const [allCategory, setAllCategory] = useState([]);

    // discount filter
    const [discount, setDiscount] = useState(0);

    const [compareArray, setCompareArray] = useState([]);

    const options = allCategory;

    // check if we did price filtering
    const [isPriceFilter, setIsPriceFilter] = useState({ min: 0, max: 300000 });

    // search Data
    const searchData = useSelector((state) => state.value);
    console.log(searchData);

    // Modal Code
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    function nextPageHandler() {
        setCurrentPage((currentPageNo) => currentPageNo + 1)
    };
    function prevPageHandler() {
        setCurrentPage((currentPageNo) => currentPageNo - 1)
    };






    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const handleCompareClick = (product, identifier) => {

        if (identifier === "checked") {
            setCompareArray((prevArray) => [...prevArray, product]);
        }
        else if (identifier === "unchecked") {
            setCompareArray((prevArray) => prevArray.filter(pro => pro !== product));
        }
    };



    useEffect(() => {
        // console.log(selectedOption);
        console.log(isPriceFilter)

        // for pagination when no filter applied
        // call function
        if (selectedOption === null) {
            async function fetchProducts() {
                setIsLoading(true);
                try {
                    const products = await fetch(`https://dummyjson.com/products?limit=${pageLimit}&skip=${(currentPage - 1) * 10}`);

                    const productsArray = await products.json();

                    console.log(productsArray.products);
                    setProducts(productsArray.products.filter(product => (product.price * 80 >= isPriceFilter.min && product.price * 80 < isPriceFilter.max && product.discountPercentage >= discount)));
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


            fetchProducts();
        } else {
            async function filterByCategory(option) {
                try {
                    setIsLoading(true);
                    const response = await fetch(`https://dummyjson.com/products/category/${option}?limit=${pageLimit}&skip=${(currentPage - 1) * 10}`);

                    if (!response.ok) {
                        throw new Error(`Failed to fetch products for category ${option}`);
                    }

                    const productsArray = await response.json();
                    // console.log(typeof productsArray);
                    setProducts(productsArray.products.filter(product => product.price * 80 >= isPriceFilter.min && product.price * 80 < isPriceFilter.max && product.discountPercentage >= discount));
                    setIsLoading(false)
                } catch (error) {
                    setIsError({ message: error.message || "Failed to fetch products" });
                    console.error(error.message);
                }
            }
            filterByCategory(selectedOption);
        }

        // filtering product by Price
        // ///////in frontend/

        // function filterProductByPrice(minPrice, maxPrice) {
        //     setIsLoading(true);
        //     setProducts((prevProducts) => { return prevProducts.filter(product => product.price * 80 >= minPrice && product.price * 80 < maxPrice) });
        //     setIsLoading(false);
        // }

        // currently not working
        // filterProductByPrice(isPriceFilter.min, isPriceFilter.max);
        async function allCategory() {
            const response = await fetch("https://dummyjson.com/products/categories");
            const categories = await response.json();
            setAllCategory(categories);
        }

        allCategory();


        // Search
        if (searchData !== "" && searchData != undefined) {
            async function searchFilterProduct() {
                setIsLoading(true);
                const response = await fetch(`https://dummyjson.com/products/search?q=${searchData}`);

                const product = await response.json();
                setProducts(product.products);
                setIsLoading(false);
            }
            searchFilterProduct();
        }



    }, [currentPage, selectedOption, pageLimit, isPriceFilter, discount, searchData]);


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <LeftSideBar allCategory={allCategory} handleOptionClick={handleOptionClick} setIsPriceFilter={setIsPriceFilter} setDiscount={setDiscount} />
            </div>

            <div className={styles.right}>
                <RightSideBar isError={isError} isLoading={isLoading} products={products} prevPageHandler={prevPageHandler} currentPage={currentPage} nextPageHandler={nextPageHandler} totalPages={totalPages} handleCompareClick={handleCompareClick} />


                {/* compare Button */}
                {compareArray.length >= 2 && <div>
                    <button onClick={onOpenModal} className={styles.compare}>Compare</button>
                    <Modal open={open} onClose={onCloseModal} center>
                        <CompareTable product1={compareArray[compareArray.length - 1]} product2={compareArray[compareArray.length - 2]} />
                    </Modal>
                </div>}

                {/* {console.log(compareArray)} */}

            </div>

        </div>
    )
}


export default AllProducts