import {useState} from "react";

function ProductForm ({ onSubmit }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [categoryID, setCategoryID] = useState('')

    const handleChangeName = (event) => { setName(event.target.value) }
    const handleChangePrice = (event) => { setPrice(event.target.value) }
    const handleChangeExpirationDate = (event) => { setExpirationDate(event.target.value) }
    const handleChangeCategoryID = (event) => { setCategoryID(event.target.value) }

    // Sending the form
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({name, price, expirationDate, categoryID})

        setName('')
        setPrice('')
        setExpirationDate('')
        setCategoryID('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="write the product's name here" value={name} onChange={handleChangeName} required/>
            <input type="number" placeholder="write the product's price here" value={price} onChange={handleChangePrice} required/>
            <input type="date" placeholder="write the product's expiration date here" value={expirationDate} onChange={handleChangeExpirationDate} required/>
            <input type="number" placeholder="write the product's categoryID here" value={categoryID} onChange={handleChangeCategoryID} required/>
            <button type="submit">Send</button>
        </form>
    )
}

export default ProductForm