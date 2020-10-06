import { useState, useRef } from 'react';
import Router from 'next/router';

import useRequest from '../../hooks/use-request';

const NewTicket = () => {
    const priceInput = useRef(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const { doRequest, errors } = useRequest({
        url: "/api/tickets",
        method: "post",
        body: {
            title, price
        },
        onSuccess: (ticket) => Router.push('/'),
    });

    const onSubmit = (event) => {
        event.preventDefault();

        doRequest();
    }

    const onBlur = () => {
        const value = parseFloat(price);
        
        if (isNaN(value)) {
            return;
        }

        if (value.toFixed(2) !== price) {
            priceInput.current.classList.add('bg-warning');
        } else {
            priceInput.current.classList.remove('bg-warning');
        }

        setPrice(value.toFixed(2));
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Create a Ticket</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        value={price}
                        ref={priceInput}
                        onBlur={onBlur}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                    />
                </div>
                { errors }
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default NewTicket;