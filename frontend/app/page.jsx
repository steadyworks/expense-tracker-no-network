'use client'
import { useState, useEffect } from 'react'

const API = 'http://localhost:8000/api'

export default function Home() {
  const [expenses, setExpenses] = useState([])
  const [summary, setSummary] = useState({ balance: 0, income: 0, expenses: 0 })
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('expense')
  const [filter, setFilter] = useState('all')

  // TODO: fetch expenses and summary from the API on mount and store in state

  const addExpense = async () => {
    // TODO: POST the form values to /api/expenses, then re-fetch expenses and summary
    // Clear amount and description inputs on success
  }

  const deleteExpense = async (id) => {
    // TODO: DELETE /api/expenses/<id>, then re-fetch expenses and summary
  }

  const filteredExpenses = expenses.filter(e => filter === 'all' || e.type === filter)

  return (
    <div>
      <h1>Expense Tracker</h1>

      <div>
        <span data-testid="balance">Balance: $0.00</span>
        <span data-testid="total-income">Income: $0.00</span>
        <span data-testid="total-expenses">Expenses: $0.00</span>
      </div>

      <div>
        <input data-testid="amount-input" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" type="number" />
        <input data-testid="description-input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <input data-testid="category-input" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
        <select data-testid="type-select" value={type} onChange={e => setType(e.target.value)}>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
        <button data-testid="add-button" onClick={addExpense}>Add</button>
      </div>

      <div>
        <select data-testid="filter-select" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">all</option>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
      </div>

      <div data-testid="expense-list">
        {/* TODO: render filteredExpenses here, each with a Delete button */}
      </div>
    </div>
  )
}
