import React from "react";
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import BlogPost from "./component/BodyComponent";
import BlogDetail from "./component/blog/BlogDetail";



import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BlogPost />} />
                <Route path="/blog" element={<BlogDetail/>} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
