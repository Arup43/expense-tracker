import React from 'react'
import { useDispatch } from 'react-redux'
import { typeSelected } from '../../features/filter/filterSlice';
import { searchKeyEntered } from '../../features/search/searchSlice';
import { pageSelected } from '../../features/pagination/paginationSlice';

export default function Filter() {

    const dispatch = useDispatch();
    const [search, setSearch] = React.useState("");
    const [type, setType] = React.useState("");

    const selectType = (type) => {
        setType(type);
        dispatch(typeSelected(type));
        dispatch(pageSelected(1));
        dispatch(searchKeyEntered(""));
        setSearch("");
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchKeyEntered(search));
        dispatch(typeSelected(""));
        dispatch(pageSelected(1));
        setType("");
    }

    return (
        <div>
            <div className="form-group radio">
                <label>Type</label>
                <div className="radio_group">
                    <input
                        required
                        type="radio"
                        value="income"
                        name="type"
                        onChange={e=>selectType(e.target.value)}
                        checked={type === "income"}
                    />
                    <label>Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="type"
                        placeholder="Expense"
                        onChange={e=>selectType(e.target.value)}
                        checked={type === "expense"}
                    />
                    <label>Expense</label>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Search</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter search keyword"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </form>
        </div>
    )
}
