import MyList from "./MyList";
import React from "react";

interface MyContainerProps {
    containerName: string;
}

const MyContainer:React.FC<MyContainerProps> = ({containerName}) => {
    return (
        <div>
        <h1>{ containerName }</h1>
        <MyList listItems={["item1", "item2", "item3"]} />
        </div>
    );
}

export default MyContainer;