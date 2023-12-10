import React from "react";
import { IoMdAdd } from "react-icons/io";

const Button = ({ hanldeClick }) => {
    return (
        <button onClick={hanldeClick} className="btn">
            <IoMdAdd className="plus" />
        </button>
    );
};

export default Button;
