import React from "react";

const DeleteBtn = ({ text, handleClearBtnClick }) => {
    return <button onClick={handleClearBtnClick}>{text}</button>;
};

export default DeleteBtn;
