const product = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function FilterableProductTableSearch() {
    return (
        <form>
            <input 
                type="text"
                placeholder="Search..."
            />
            <br />
            <input
                type="checkbox"
            />
            <span>Only show products in stock</span>
        </form>
    )
}

function FilterableProductTableProductSectionListUnit() {

    return (
        <>
            <tr>
                <td
                    style={
                        {
                            color: 'red'
                        }
                    }
                >Apple Bananna Fruit</td>
                <td>$1</td>
            </tr>
        </>
    )
}

function FilterableProductTableProductSectionList() {

    return (
        <table

        >
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>

            <FilterableProductTableProductSectionListUnit />
            <FilterableProductTableProductSectionListUnit />
            <FilterableProductTableProductSectionListUnit />
        </table>
    );
}

function FilterableProductTableProductSection() {
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
                Fruits
            </h3>
            <FilterableProductTableProductSectionList />
        </div>
    );
}



export default function FilterableProductTable() {

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
                <FilterableProductTableSearch />
                <FilterableProductTableProductSection />
                <FilterableProductTableProductSection />
                <FilterableProductTableProductSection />
            </div>
    );
}