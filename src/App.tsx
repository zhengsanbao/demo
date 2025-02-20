import React, { useState } from 'react'
import PurchaseForm from './components/PurchaseForm'
import PurchaseList from './components/PurchaseList'
import { PurchaseRequest } from './types/purchase'
import './App.css'

function App() {
  const [purchases, setPurchases] = useState<PurchaseRequest[]>([])

  return (
    <div className="app">
      <header className="app-header">
        <h1>采购上报系统</h1>
      </header>
      <main className="app-main">
        <section className="form-section">
          <PurchaseForm />
        </section>
        <section className="list-section">
          <PurchaseList purchases={purchases} />
        </section>
      </main>
    </div>
  )
}

export default App
