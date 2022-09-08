import axios from "../../utils/axios";

export const getTransactions = async (type, search, selectedPage) => {
    let queryString = "";

    if(type !== "") {
        queryString += `type=${type}`;
    }

    if(search !== "") {
        queryString += `name_like=${search}`;
    }

    if(selectedPage === 0) {
        const response = await axios.get(`/transactions`);
        return response;
    }

    const response = await axios.get(`/transactions?${queryString}&_page=${selectedPage}&_limit=10`);

    return response;
};


export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);

    return response.data;
};
