import React from 'react'

const SushiWallet = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMoneyToBalance(parseInt(e.target.add.value));
        e.target.add.value = ""
    }
    
    return (
        <form className="add-balance-form" onSubmit={handleSubmit} >
            <label>Sushi Wallet</label><br/>
            <input name="add" type="number"></input><br/>
            <button type="submit">Add Money</button>
        </form>
    )
}

export default SushiWallet