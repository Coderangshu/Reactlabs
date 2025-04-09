import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/actions';
import { resetCart } from '../store';
import '../csses/CheckoutForm.css';

const Checkout = ({ onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        dispatch(createOrder(formData));
        dispatch(resetCart());
        setMessage("Order created successfully!");
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Checkout</h2>
                <form onSubmit={handleCheckout}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <!-- add name input field -->
                        <!-- the input should contain id, type, name, value and onChange -->
                        <!-- onChange hould call the above handleChange function -->
                        <!-- this field should not be optional field -->
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <!-- add email input field -->
                        <!-- the input should contain id, type, name, value and onChange -->
                        <!-- onChange hould call the above handleChange function -->
                        <!-- this field should not be optional field -->
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <!-- add phone number input field -->
                        <!-- the input should contain id, type, name, value and onChange -->
                        <!-- onChange hould call the above handleChange function -->
                        <!-- this field should not be optional field -->
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <!-- add address input field -->
                        <!-- the input should contain id, type, name, value and onChange -->
                        <!-- this field shoud be able to contain multiple lines -->
                        <!-- onChange hould call the above handleChange function -->
                        <!-- this field should not be optional field -->
                    </div>
                    <button type="submit">Checkout</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Checkout;

