function CustomertRow ({customer, onEdit, onDelete}) {
    const handleEdit = () => { onEdit(customer) }

    const handleDelete = () => {
        onDelete(customer.id)
    }

    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.phoneNumber}</td>
            <td>{customer.email}</td>
            <td>{customer.addressLine1}</td>
            <td>{customer.addressLine2}</td>
            <td>{customer.addressLine3}</td>
            <td>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default CustomertRow