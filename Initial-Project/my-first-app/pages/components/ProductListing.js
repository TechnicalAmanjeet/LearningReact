const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];



export default function ProductListing() {
    let productListList = products.map( product=>
        <li
            key={product?.id}
            style={
                {
                    color: product.isFruit ? 'magenta' : 'green',
                    fontSize: "50px"
                }
            }
        >
            {product?.title || "Amanjeet"}
        </li>
    );

    return (
        <div
            style={
                {
                    backgroundColor: "whitesmoke",
                    width: "400px",
                    height: "400px"
                }
            }
        >
            <ul
                style={
                    {
                        padding: "50px"
                    }
                }
            >
                {productListList}
            </ul>
        </div>
    )
}
