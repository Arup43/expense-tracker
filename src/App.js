import Home from "./pages/Home";
import Layout from "./components/Layout";
import AllTransactions from "./pages/AllTransactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/alltransactions" element={<AllTransactions />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
