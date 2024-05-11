import ProductRow from "./ProductRow.jsx";

function ProductTable (product, onEdit, onDelete) {
    return (
        <table>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Expiration Date</th>
                <th>Product CategoryID</th>
            </tr>
            </thead>
            <tbody>
            {product.map((product) => {
                <ProductRow key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
            })}
            </tbody>
        </table>
    )
}
export default ProductTable