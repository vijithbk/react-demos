import React, { useState } from 'react'

function Transaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div class="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
                </div>
                <div class="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} id="amount" onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button class="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default Transaction
