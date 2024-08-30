import AboutPage from './AboutPage';
import DisplayUserProfile from './DisplayUserProfile';
import ProductListing from './ProductListing';

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
            <ProductListing />
        </div>
    );
}

export default MyApp;
