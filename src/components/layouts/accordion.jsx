/**
 * Accordion component.
 *
 * It renders a div with accordion for overflow.
*/
// @ts-check
import React, { useState, useEffect } from 'react';
import $ from 'jquery';


/**
 * Accordion component function.
 * @param {object} props - Properties of the component.
 */
function Accordion(props) {
    // Items to appear in the accordion.
    const [items, setItems] = useState(Array());

    /**
     * Open/close the accordion item according to the button clicked.
     * @param {any} event - Event of the button clicked.
     */
    function openStoresAccordion(event) {

        // Get the button clicked.
        let storeButton = event.currentTarget;

        // Get the corresponding body,
        let body = $(storeButton.attributes["data-accordion-target"].value);

        if (body.hasClass("hidden")) {

            body.removeClass("hidden");

        } else {

            body.addClass("hidden");

        }

    }

    // Class for the buttons of the accordion items.
    let headClass = (
        `grid p-3 text-center grid-cols-${props.cols + 1} ` +
        `md:grid-cols-${props.cols + 3} ` +
        "border-b"
    );

    // Update items.
    useEffect(
        () => {

            // Fetch data.
            props.fetchData().then((data) => {

                console.log("test");

                // Create empty array.
                let newItems = Array();

                // Class for the buttons of the accordion items.
                let bodyClass = (
                    "p-5 border border-t-0 bg-gray-t7 dark:bg-blue-s8 "
                );

                for (let i = 0; i < data.length; i++) {

                    // Add header.
                    newItems.push(
                        <div
                            key={`head-${i}`}
                            id={`heading-${data[i].id}-${i}`}
                            className={headClass}
                        >

                            <div className="border-r hidden md:block ">
                                <input
                                    type="checkbox"
                                    name="AccordionItem"
                                    id={`${data[i].id}`}
                                />
                            </div>

                            {data[i].head.map((item, j) => {
                                return <div
                                    key={`item-${i}-${j}`}
                                    className="border-r "
                                >
                                    {item}
                                </div>
                            })}

                            <div className="border-r hidden md:block ">
                                <button
                                    onClick={() => {}}
                                    className="text-xl "
                                >
                                    <i className="fa-solid fa-pen-to-square">
                                    </i>
                                </button>
                            </div>

                            <div>
                                <button
                                    onClick={openStoresAccordion}
                                    type="button"
                                    className="text-xl "
                                    data-accordion-target={
                                        `#item-${data[i].id}`
                                    }
                                >
                                    <i className="fa-solid fa-sort-down"></i>
                                </button>
                            </div>

                        </div>
                    );

                    // Add body
                    newItems.push(
                        <div
                            key={`body-${i}`}
                            id={`item-${data[i].id}`}
                            className={bodyClass + "hidden"}
                        >
                            <div
                                className={
                                    "md:hidden grid grid-cols-2 my-2 text-center"
                                }
                            >
                                <div><button
                                    onClick={() => {}}
                                    className="text-2xl text-pink p-3"
                                >
                                    <i className="fa-solid fa-circle-xmark">
                                    </i>
                                </button></div>

                                <div><button
                                    onClick={() => {}}
                                    className="text-2xl p-3"
                                >
                                    <i className="fa-solid fa-pen-to-square">
                                    </i>
                                </button></div>
                            </div>

                            <div>
                                {data[i].body}
                            </div>
                        </div>
                    );

                }

                setItems(newItems);

            });

        },
        []
    );

    return (
        <div className={props.className} data-accordion="open">
            <div className={headClass} key="header">

                <div className="border-r hidden md:block ">
                    <input
                        type="checkbox"
                        name="AccordionItem"
                        id="checkAll"
                    />
                </div>

                {props.heads.map((item, j) => {
                    return <div
                        key={`item-${j}`}
                        className="border-r "
                    >
                        {item}
                    </div>
                })}

                <div className="border-r hidden md:block ">
                    Edit
                </div>

                <div>
                    Details
                </div>

            </div>

            {items}

        </div>
    );

}


// Export Accordion.
export default Accordion;
