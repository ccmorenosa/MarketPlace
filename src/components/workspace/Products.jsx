/**
 * Products components
 *
 * It renders a component with product tables and creation form.
 */
import React, { useState, useEffect } from 'react';
import DB from '../../databases';
import $ from 'jquery';


/**
 * New Product Component.
 * @param {object} props - Properties of the component.
 */
function NewProductForm(props) {

    /**
     * Create a new product in the database.
     */
    async function validateForm(event) {

        // Prevent default behavior.
        event.preventDefault();

        DB.createProduct(
            {
                "name": $("input[name='name']").val(),
                "life": $("input[name='life-time']").val()
            },
            () => {
                $("input[name='name']").val("");
                $("input[name='life-time']").val("");
            }
        );

    }

    // Class for the input tags.
    let inputTag = (
        "block mb-2 text-sm font-medium text-gray-s6 dark:text-gray-t6"
    );

    // Class for inputs.
    let inputClass = (
        "border text-sm rounded-lg block w-full p-2.5 " +
        "bg-gray-t9 border-gray-t5 dark:bg-gray-s6 dark:border-gray-s8 " +
        "focus:ring-blue-s2 dark:focus:ring-blue-t2 " +
        "focus:border-blue-s2 dark:focus:border-blue-t2 " +
        "dark:placeholder-gray-t5 "
    );

    // Class for store options.
    let storeList = (
        "max-h-48 my-5 p-3 rounded overflow-y-auto text-sm block " +
        "bg-gray-t7 dark:bg-gray-s8"
    );

    // Class for store options.
    let storeOption = (
        "flex items-center px-5 rounded hover:bg-gray-t5 dark:hover:bg-gray-s6"
    );

    // Class for store checkbox.
    let storeInput = (
        "w-4 h-4 rounded text-pink-s1 " +
        "bg-gray-t5 dark:bg-gray-s5 border-gray-t3 dark:border-gray-s3 " +
        "focus:ring-pink-t1 dark:focus:ring-pink-600 " +
        "dark:ring-offset-gray-s7 dark:focus:ring-offset-gray-s7 "
    );

    return (

        <form
            name="new-product"
            onSubmit={validateForm}
            className={
                "p-10 md:col-span-2 lg:col-span-3 sm:text-center md:text-left"
            }
        >

            <h1 className="text-lg font-bold mb-6">New Product</h1>

            <div className="mb-6">
                <label
                    htmlFor="name"
                    className={inputTag}
                >
                    Product name
                </label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    className={inputClass}
                    placeholder="Tomato"
                    required
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="life-time"
                    className={inputTag}
                >
                    Product life time (in days)
                </label>

                <input
                    type="number"
                    id="life-time"
                    name="life-time"
                    className={inputClass}
                    min={-1}
                    max={365}
                    placeholder="12"
                    required
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="stores"
                    className={inputTag}
                >
                    Stores that sells the product
                </label>

                <div className="flex h-10">
                    <input
                        type="text"
                        id="store-search"
                        className={inputClass}
                        placeholder="Search store"
                        // value=""
                        // onInput={() => {}}
                    />

                    <button
                        type="button"
                        className="ml-5 items-center px-5 text-sm font-medium text-gray-s7 rounded-lg bg-green-t1 hover:bg-green-t3 dark:bg-green-s4 dark:hover:bg-green-s5 dark:text-gray-t7"
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>

                <ul
                    className={storeList}
                >
                    <li>
                        <div className={storeOption}>
                            <input
                                id="test-1"
                                name="stores"
                                type="checkbox"
                                value=""
                                className={storeInput}
                            />
                            <label
                                htmlFor="test-1"
                                className="py-2 ml-2 text-sm font-medium rounded"
                            >
                                Auchan
                            </label>
                        </div>
                    </li>
                </ul>

            </div>



            <button
                className="p-3 w-full items-center text-sm font-medium text-gray-s7 rounded-lg bg-green-t1 hover:bg-green-t3 dark:bg-green-s4 dark:hover:bg-green-s5 dark:text-gray-t7"
            >
                Add product
            </button>

        </form>

    )

}


/**
 * Products Component.
 * @param {object} props - Properties of the component.
 */
function Products(props) {

    // Class for the Products component.
    let products = (
        "grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-10 "
    );

    return (
        <div className={products} >
            <NewProductForm />
        </div>
    );

}


// Export Products.
export default Products
