import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', form);
            alert('Message sent!');
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (err) {
            console.error('Error sending message', err);
            alert('Error sending message');
        }
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
