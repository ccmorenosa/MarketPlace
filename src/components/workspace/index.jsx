/**
 * Workspace component.
 *
 * It renders the workspace pages where the user works.
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "../layouts";


/**
 * Workspace component function.
 * @param {object} props - Properties of the component.
 */
function Workspace(props) {

    // Class for the main div.
    let viewClass = (
        "h-screen w-screen flex flex-col " +
        "bg-blue-t9 dark:bg-blue-s9 " +
        "justify-center text-gray-s8 dark:text-gray-t8 "
    );

    return (
        <div className={viewClass}>

            <Layout.Header />

            <Layout.Scroll>



            </Layout.Scroll>

        </div>
    )

}


// Export Workspace.
export default Workspace;
