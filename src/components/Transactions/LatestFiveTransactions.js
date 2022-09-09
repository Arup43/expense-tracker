import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";
import { Link } from "react-router-dom";
import { pageSelected } from "../../features/pagination/paginationSlice";

export default function LatestFiveTransactions() {
    const dispatch = useDispatch();

    const { transactions, isLoading, isError } = useSelector(
        (state) => state.transaction
    );

    useEffect(() => {
        dispatch(fetchTransactions({type: "", search: "", selectedPage: 0}));
    }, [dispatch]);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0) {

        let transactionsArray = [...transactions];
        transactionsArray.sort((a,b) => {
            return b.id - a.id;
        })

        const latestFiveTransactions = transactionsArray.slice(0, 5);

        content = latestFiveTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    const handleSeeAll = () => {
        dispatch(pageSelected(1));
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>

            <Link to={'/alltransactions'} onClick={handleSeeAll}>
                <button className="add-btn">View all</button>
            </Link>
        </>
    );
}
