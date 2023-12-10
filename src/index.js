import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./components/Todo";

const AppLayout = () => {
    return <Todo />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
