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
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Checkout</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Checkout;

