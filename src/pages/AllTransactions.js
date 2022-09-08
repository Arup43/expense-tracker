import Transactions from '../components/Transactions/Transactions'
import Pagination from '../components/ui/Pagination'
import Filter from '../components/ui/Filter'

export default function AllTransactions() {

    return (
        <div>
            <Filter />
            <Transactions />
            <Pagination />
        </div>
    )
}
