function ProductRow ({product, onEdit, onDelete}) {
    const handleEdit = () => { onEdit(product) }

    const handleDelete = () => {
        onDelete(product.id)
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.expirationDate}</td>
            <td>{product.categoryID}</td>
            <td>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}
export default ProductRow