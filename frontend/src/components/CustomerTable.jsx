import CustomerRow from "./CustomerRow.jsx";

function CustomerTable (customer, onEdit, onDelete) {
    return (
        <table>
            <thead>
            <tr>
                <th>Customer Name</th>
                <th>Customer Phone number</th>
                <th>Customer Email</th>
                <th>Customer Address Line 1</th>
                <th>Customer Address Line 2</th>
                <th>Customer Address Line 3</th>
            </tr>
            </thead>
            <tbody>
            {customer.map((product) => {
                <CustomerRow key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
            })}
            </tbody>
        </table>
    )
}
export default CustomerTable