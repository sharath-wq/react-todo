import React from "react";

const Date = ({ date, month, year }) => {
    return (
        <div className="container">
            <span className="day">{date}</span>
            <div className="subContainer">
                <span className="month">{month}</span>
                <span className="year">{year}</span>
            </div>
        </div>
    );
};

export default Date;
