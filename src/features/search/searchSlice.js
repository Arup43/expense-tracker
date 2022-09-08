const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    search: "",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchKeyEntered: (state, action) => {
            state.search = action.payload;
        }
    }
})

export default searchSlice.reducer;
export const {searchKeyEntered} = searchSlice.actions;