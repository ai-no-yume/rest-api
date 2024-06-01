import {useState} from "react";

function CustomerForm (onSubmit) {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [addressLine3, setAddressLine3] = useState('')

    const handleChangeName = (event) => { setName(event.target.value) }
    const handleChangePhoneNumber = (event) => { setPhoneNumber(event.target.value) }
    const handleChangeEmail = (event) => { setEmail(event.target.value) }
    const handleChangeAddressLine1 = (event) => { setAddressLine1(event.target.value) }
    const handleChangeAddressLine2 = (event) => { setAddressLine2(event.target.value) }
    const handleChangeAddressLine3 = (event) => { setAddressLine3(event.target.value) }

    // Sending the form
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({name, phoneNumber, email, addressLine1, addressLine2, addressLine3})

        setName('')
        setPhoneNumber('')
        setEmail('')
        setAddressLine1('')
        setAddressLine2('')
        setAddressLine3('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="write the customer's name here" value={name} onChange={handleChangeName} required/>
            <input type="tel" placeholder="write the customer's phone number here" value={phoneNumber} onChange={handleChangePhoneNumber} required/>
            <input type="email" placeholder="write the customer's email here" value={email} onChange={handleChangeEmail} required/>
            <input type="text" placeholder="write the first customer's address line" value={addressLine1} onChange={handleChangeAddressLine1} required/>
            <input type="text" placeholder="write the second customer's address line" value={addressLine2} onChange={handleChangeAddressLine2} required/>
            <input type="text" placeholder="write the third customer's address line" value={addressLine3} onChange={handleChangeAddressLine3} required/>
            <button type="submit">Send</button>
        </form>
    )
}

export default CustomerForm