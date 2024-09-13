import { useState } from "react";

const productData = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function FilterableProductTableSearch({handleIsStockData, handleSearchedText}) {

    return (
        <form>
            <input 
                type="text"
                placeholder="Search..."
                onChange={(e) => handleSearchedText(e.target.value)}
            />
            <br />
            <input
                type="checkbox"
                onInput={(e) => handleIsStockData(e.target.checked)}
            />
            <span>Only show products in stock</span>
        </form>
    )
}

function FilterableProductTableProductSectionListUnit({product}) {

    return (
        <>
            <tr>
                <td
                    style={
                        {
                            color: product.stocked ? 'black' : 'red'
                        }
                    }
                >{product.name}</td>
                <td>{product.price}</td>
            </tr>
        </>
    )
}

function FilterableProductTableProductSectionList({products}) {
    
    let filterableProductTableProductSectionList = products.map(product =>
        <FilterableProductTableProductSectionListUnit product={product} />
    )

    return (
        <table

        >
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>

            {filterableProductTableProductSectionList}
        </table>
    );
}

function FilterableProductTableProductSection({category, products}) {

    
    return (
        <div
        style={
            {
                
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                flexDirection: 'column'
            }
        }
        >
            <h3>
                {category}
            </h3>
            <FilterableProductTableProductSectionList products={products} />
        </div>
    );
}



export default function FilterableProductTable() {
    const [products, setProducts] = useState(initializeHandleIsStockData());
    const [staoked, setStaoked] = useState(false);
    const [searchText, setSearchText] = useState('');

    function initializeHandleIsStockData() {
        return productData
    }

    function handleIsStockData(isStackodData) {
        setStaoked(false)
        filterProducts(isStackodData, searchText)
    }

    function handleSearchedText(value) {
        setSearchText(value)
        filterProducts(staoked, value)
    }
    
    function filterProducts(isStackod, inputSearch) {
        let productD = productData
        if (inputSearch != '' || inputSearch != undefined) {
            productD = productD.filter(product =>
                product.name.includes(inputSearch)
            )
        }

        if(isStackod) {
            productD = productD.filter(product => product.stocked);
        }
        
        setProducts(productD)
    }

    const groupedByCategories = products.reduce((acc, product) => {
        const { category } = product;
        const categoryIndex = acc.findIndex(item => item[category]);
    
        if (categoryIndex === -1) {
            acc.push({
                [category]: [product]
            });
        } else {
            acc[categoryIndex][category].push(product);
        }
    
        return acc;
    }, []);


    const filterableProductTableProductSection = groupedByCategories.map(groupedByCategory =>
        Object.entries(groupedByCategory).map(([category, products]) => (
            <FilterableProductTableProductSection category={category} products={products} />
        ))
    );

    return(
            <div
                style={
                    {
                        textAlign: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                    }
                }
            >
                <h1>How are you doing.</h1>
                <FilterableProductTableSearch handleIsStockData={handleIsStockData} handleSearchedText = {handleSearchedText} />
                {filterableProductTableProductSection}
            </div>
    );
}
