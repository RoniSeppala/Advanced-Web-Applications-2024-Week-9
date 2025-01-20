import MyList from "./MyList";
import React from "react";

interface MyContainerProps {
    containerName: string;
}

const MyContainer:React.FC<MyContainerProps> = ({containerName}) => {
    return (
        <div>
        <h1>{ containerName }</h1>
        <MyList header="My List" items={[{id:"1",text:"Item 1"},{id:"2",text:"Item 2"},{id:"3",text:"Item 3"}]} />
        </div>
    );
}

export default MyContainer;