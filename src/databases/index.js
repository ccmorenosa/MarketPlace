/*
 * Class that administrate the request to the database.
 */
import axios from "axios";


/**
 * Administrator of the database.
 */
class DbAdmin {

    /**
     * Create the administrator.
     */
    constructor() {

        // Define routes.
        this.routes = {
            products: "/ProductItems",
            stores: "/StoreItems",
            tags: "/TagItems",
        }

    }

    /**
     * Get all the product in the database.
     *
     * @param {function} responseFunction - Function after the request return
     * its value.
     * @param {function} exceptionFunction - Function in case the request throw
     * an exception.
     */
    fetchAllProducts(
        responseFunction = () => {},
        exceptionFunction = (e) => console.log(e)
    ) {

        // Make the GET request.
        axios.get( this.routes.products )
            .then( responseFunction )
            .catch( exceptionFunction );

    }

    /**
     * Get all the product in the database.
     *
     * @param {function} responseFunction - Function after the request return
     * its value.
     * @param {function} exceptionFunction - Function in case the request throw
     * an exception.
     */
    async fetchAllProductsAsync() {

        try {
            // Make the GET request.
            return await axios.get( this.routes.products );
        } catch (e) {
            if (e.code != "ECONNABORTED") console.log(e);
        }

    }

    /**
     * Create new product in the database.
     *
     * @param {object} productItem - Product item with name and life.
     * @param {function} responseFunction - Function after the request return
     * its value.
     * @param {function} exceptionFunction - Function in case the request throw
     * an exception.
     */
    createProduct(
        productItem,
        responseFunction = () => {},
        exceptionFunction = (e) => console.log(e)
    ) {

        // Make the POST request.
        axios.post( this.routes.products, productItem )
            .then( responseFunction )
            .catch( exceptionFunction );

    }

}


// Initiate database.
const DB = new DbAdmin();

// Export database.
export default DB;
