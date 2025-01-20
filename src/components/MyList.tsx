import React from "react";

interface MyListProps {
    listItems: string[];
}

const MyList:React.FC<MyListProps> = ({listItems}) => {
    return (
        <div>
        <h1>My List</h1>
        <h2> { listItems } </h2>
        </div>
    );
}

export default MyList;