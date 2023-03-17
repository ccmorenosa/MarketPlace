/**
 * Header component.
 *
 * It renders the header of page.
 */
// @ts-check
import React from "react";
import DarkModeButton from "../common/buttons";


/**
 * Header component function.
 * @param {object} props - Properties of the component.
 */
function Header(props) {

    // Class for the main div.
    let headerClass = (
        "h-12 flex font-semibold bg-blue-t1 dark:bg-blue-s8"
    );

    // Class for the user dropdown button.
    let userButtonClass = (
        "py-1 px-3 rounded-lg focus:ring-4 focus:outline-none " +
        "bg-blue-t1 dark:bg-blue-s8 hover:bg-blue-t3 hover:dark:bg-blue-s7 "
    );

    // Class for the user dropdown button.
    let userMenuClass = (
        "w-40 shadow z-10 hidden rounded-lg divide-y divide-gray " +
        "bg-blue-t1 dark:bg-blue-s8"
    );

    // Class for the user dropdown button.
    let menuItemClass = (
        "block px-4 py-2 hover:bg-blue-t3 dark:hover:bg-blue-s7"
    );

    return (
        <div className={headerClass}>

            <div className="text-xl my-auto px-2">
                MarketPlace
            </div>

            <div className="px-5 grid grid-rows-1 grid-flow-col gap-2">

                <button
                    className="py-1 px-4 hover:bg-blue-t3 dark:hover:bg-blue-s7 rounded-lg"
                    type="button"
                >
                    Products
                </button>
                <button
                    className="py-1 px-4 hover:bg-blue-t3 dark:hover:bg-blue-s7 rounded-lg"
                    type="button"
                >
                    Stores
                </button>
                <button
                    className="py-1 px-4 hover:bg-blue-t3 dark:hover:bg-blue-s7 rounded-lg"
                    type="button"
                >
                    Tags
                </button>

            </div>

            <div className="my-auto px-2 ml-auto">

                <button
                    id="user-button"
                    data-dropdown-toggle="user-menu"
                    data-dropdown-trigger="hover"
                    className={userButtonClass}
                    type="button"
                >
                    User
                </button>

                <div id="user-menu" className={userMenuClass}>
                    <ul className="py-2 text-sm" aria-labelledby="user-button">
                        <li>
                            <a href="#" className={menuItemClass}>
                                Profile
                                <i className="mx-2 fa-solid fa-user" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={menuItemClass}>
                                Settings
                                <i className="mx-2 fa-solid fa-gear" />
                            </a>
                        </li>
                    </ul>
                    <ul className="py-2 text-sm" aria-labelledby="user-button">
                        <li>
                            <a href="#" className={menuItemClass}>
                                Sign out
                                <i className="mx-2 fa-solid fa-arrow-right-from-bracket" />
                            </a>
                        </li>
                    </ul>
                </div>


            </div>

            <div className="my-auto px-2">
                <div className="grid grid-col-1">
                    <DarkModeButton />
                </div>
            </div>

        </div>
    );

}


// Export Header.
export default Header;
