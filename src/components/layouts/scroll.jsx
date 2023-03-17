/**
 * Scroll component.
 *
 * It renders a div with scroll for overflow.
 */
// @ts-check
import React from "react";


/**
 * Scroll component function.
 * @param {object} props - Properties of the component.
 */
function Scroll(props) {

    // Class for scroll.
    let scroll = (
        "h-full w-full scrollbar " +
        "overflow-x-scroll scrollbar-h-2 " +
        "overflow-y-scroll scrollbar-w-2 " +
        "scrollbar-track-blue-s5 scrollbar-thumb-blue-t5 " +
        "scrollbar-track-rounded-full scrollbar-thumb-rounded-full "
    );

    return (
        <div className={scroll}>

            {props.children}

        </div>
    );

}


// Export Scroll.
export default Scroll;
