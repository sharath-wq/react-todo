import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Date from "./Date";
import Day from "./Day";
import TodoItem from "./TodoItem";
import { getDateDetails } from "../utils/getDateDetails";
import toast, { Toaster } from "react-hot-toast";
import { generateId } from "../utils/generateId";
import DeleteBtn from "./DeleteBtn";

const Todo = () => {
    const { day, date, month, year } = getDateDetails();
    const inputRef = useRef();
    const [todoes, setTodoes] = useState([]);

    const handleAddButtonClick = () => {
        inputRef.current.focus();
        if (!inputRef.current.value) {
            toast.error("Enter Something!");
        } else {
            setTodoes([...todoes, { id: generateId(), todo: inputRef.current.value, isCompleted: false }]);
            toast.success("Todo Added");
            inputRef.current.value = "";
        }
    };

    const handleCheck = (id) => {
        setTodoes(todoes.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
    };

    const handleClearAllBtnClick = () => {
        setTodoes([]);
    };

    const handleClearBtnClick = () => {
        setTodoes(todoes.filter((todo) => !todo.isCompleted));
    };

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("todoes"));
        setTodoes(items);
    }, []);

    useEffect(() => {
        localStorage.setItem("todoes", JSON.stringify(todoes));
    }, [todoes]);

    return (
        <div className="main">
            <div className="header">
                <Date date={date} month={month} year={year} />
                <Day day={day} />
            </div>
            <div className="todos">
                <input ref={inputRef} type="text" placeholder="Type Something..." />
                {todoes.map((todo, index) => (
                    <TodoItem handleCheck={handleCheck} key={todo.id} todo={todo} />
                ))}
            </div>
            <div className="btns">
                <DeleteBtn handleClearBtnClick={handleClearBtnClick} text={"clear"} />
                <DeleteBtn handleClearBtnClick={handleClearAllBtnClick} text={"clear all"} />
            </div>
            <Button hanldeClick={handleAddButtonClick} />

            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Todo;
