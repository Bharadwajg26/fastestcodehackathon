class Transaction {
    constructor(amount, description) {
        this.amount = amount;
        this.description = description;
    }
}

class FinanceTracker {
    constructor() {
        this.transactions = [];
        this.balance = 0.0;
    }
    
    addTransaction(amount, description) {
        const transaction = new Transaction(amount, description);
        this.transactions.push(transaction);
        this.balance += amount;
    }
    
    displayTransactions() {
        const transactionList = document.getElementById('transaction-list');
        transactionList.innerHTML = '';
        
        this.transactions.forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
            transactionList.appendChild(listItem);
        });
    }
    
    getCurrentBalance() {
        return this.balance.toFixed(2);
    }
}

const tracker = new FinanceTracker();

const form = document.getElementById('transaction-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    
    const amountInput = document.getElementById('amount');
    const descriptionInput = document.getElementById('description');
    
    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value;
    
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }
    
    tracker.addTransaction(amount, description);
    tracker.displayTransactions();
    
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = `Current Balance: $${tracker.getCurrentBalance()}`;
    
    amountInput.value = '';
    descriptionInput.value = '';
});
