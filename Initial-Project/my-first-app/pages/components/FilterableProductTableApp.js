import { useState } from "react";

function FilterableProductTableSearch(
    {   
        handleIsStockData, 
        handleSearchedText,
        inputSearchData,
        isStokedData
    }
) {

    return (
        <form>
            <input 
                type="text"
                placeholder="Search..."
                value={inputSearchData}
                onChange={(e) => handleSearchedText(e.target.value)}
            />
            <br />
            <input
                type="checkbox"
                value={isStokedData}
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

function FilterableProductTableProductSectionList({filteredProduct}) {
    
    let filterableProductTableProductSectionList = filteredProduct.map(product =>
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

function FilterableProductTableProductSection(
    {
        products,
        inputSearchData,
        isStocked
    }
) {
    let filteredProductData = products


    if (inputSearchData != '' || inputSearchData != undefined) {
        filteredProductData = filteredProductData.filter(product =>
            product.name.includes(inputSearchData)
        )
    }

    if(isStocked) {
        filteredProductData = filteredProductData.filter(product => product.stocked);
    }

    const groupedByCategories = filteredProductData.reduce((acc, product) => {
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
        Object.entries(groupedByCategory).map(([category, filteredProductPerCategory]) => (
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
                    <FilterableProductTableProductSectionList filteredProduct={filteredProductPerCategory} />
            </div>
        ))
    );

    
    return (
        <>
            {filterableProductTableProductSection}
        </>
    );
}



function FilterableProductTable({products}) {
    const [staoked, setStaoked] = useState(false);
    const [searchText, setSearchText] = useState('');

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
                <FilterableProductTableSearch 
                    handleIsStockData={setStaoked}
                    handleSearchedText={setSearchText}
                    inputSearchData={searchText}
                    isStokedData={staoked}
                />
                <FilterableProductTableProductSection
                    products={products}
                    inputSearchData={searchText}
                    isStocked={staoked}
                />
            </div>
    );
}

export default function FilterableProductTableApp() {
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]

    return (
        <>
        <h1>WorkingFine</h1>
            <FilterableProductTable products={products} />
        </>
    );
}
