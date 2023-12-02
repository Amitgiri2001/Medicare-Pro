


import React from 'react';
import styles from "./RightSideBar.module.css";
import SingleProduct from './SingleProduct/SingleProduct';

const RightSideBar = ({ isError, isLoading, products, prevPageHandler, currentPage, nextPageHandler, totalPages }) => {




    return (<div className={styles.container}>
        {isError && <h1>Error Fetching data</h1>}
        {!isError && !isLoading && products.length !== 0 && (<div className={styles.container}>
            {products.map(product => (
                <div>
                    <SingleProduct key={product.id} data={product} />
                    <hr className={styles.line} />
                </div>

            ))

            }



        </div>)}

        {/* //if Error Occurred then */}


        {!isError && isLoading && <h2>Loading....</h2>}

        {!isError && <div className={styles.pagination}>
            <button onClick={prevPageHandler} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={nextPageHandler} disabled={products.length === 0}>
                Next
            </button>



        </div>}
    </div>
    )
}

export default RightSideBar
