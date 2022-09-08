import React from 'react'
import Balance from '../components/Balance'
import Form from '../components/Form'
import LatestFiveTransactions from '../components/Transactions/LatestFiveTransactions'

export default function Home() {
    return (
        <div>
            <Balance />
            <Form />
            <LatestFiveTransactions />
        </div>
    )
}
