import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import FormInListingPage from "../FormInListingPage";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch();

    const { transactions, isLoading, isError } = useSelector(
        (state) => state.transaction
    );

    const {type} = useSelector((state) => state.filter);
    const {search} = useSelector((state) => state.search);
    const {selectedPage} = useSelector((state) => state.pagination);

    useEffect(() => {
        dispatch(fetchTransactions({type, search, selectedPage}));
    }, [dispatch, type, search, selectedPage]);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0) {

        content = transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <>
            <FormInListingPage />
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
        </>
    );
}
