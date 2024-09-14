import AboutPage from './AboutPage';
import DisplayUserProfile from './DisplayUserProfile';
import ProductListing from './ProductListing';
import RespondingToEvent from './RespondingToEvent';
import FilterableProductTableApp from './FilterableProductTableApp.js';

function MyButton() {
    return (
        <button>react button</button>
    );
}

function MyApp() {
    return (
        <div>
            {/* <h2>Welcome to my First App</h2> */}
            {/* <MyButton /> */}
            {/* <AboutPage /> */}
            {/* <DisplayUserProfile /> */}
            {/* <ProductListing /> */}
            {/* <RespondingToEvent /> */}
            <FilterableProductTableApp />
        </div>
    );
}

export default MyApp;
