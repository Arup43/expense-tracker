const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    type: "",
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        typeSelected: (state, action) => {
            state.type = action.payload;
        }
    }
})

export default filterSlice.reducer;
export const {typeSelected} = filterSlice.actions;