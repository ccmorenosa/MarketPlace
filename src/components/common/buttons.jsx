/**
 * Buttons components.
 *
 * Set of buttons used recurrently in the application.
 */
import React, { useState, useEffect } from 'react';
import $ from 'jquery';


/**
 * Dark mode button component function.
 * @param {object} props - Properties of the component.
 */
function DarkModeButton(props) {

    // Dark mode state.
    const [dark, setDark] = useState(
        localStorage.theme === 'dark' ||
        (
            !('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        )
    );

    useEffect(() => {
        if (dark) {
            localStorage.setItem("theme", "dark");
            $("html").addClass('dark');
        } else {
            localStorage.setItem("theme", "light");
            $("html").removeClass('dark');
        }
    });

    return (
        <button
            className={
                "rounded-full py-1 px-3 bg-blue-t3 dark:bg-blue-s7 " +
                "hover:bg-blue-t5 hover:dark:bg-blue-s6 " +
                "active:bg-blue-t7 active:dark:bg-blue-s5 "
            }
            onClick={() => setDark(!dark)}
        >
            <i className="fa-solid fa-sun inline dark:hidden"></i>
            <i className="fa-solid fa-moon dark:inline hidden"></i>
        </button>
    );

}



// Export buttons.
export default DarkModeButton
