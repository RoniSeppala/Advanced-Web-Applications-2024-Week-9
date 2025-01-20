import MyList from "./MyList";
import React from "react";

type TItem = {
    id: string;
    text: string;
};

interface MyContainerProps {
    containerName: string;
    items?: {
        id: string;
        text: string;
    }[];
}

const MyContainer:React.FC<MyContainerProps> = ({containerName}) => {

    const [items, setItems] = React.useState<TItem[]>([
        { id: "1", text: "Item 1" },
        { id: "2", text: "Item 2" },
        { id: "3", text: "Item 3" },
    ]);

    return (
        <div>
        <h1>{ containerName }</h1>
            <MyList header="My List" items={items} />
        </div>
    );
}

export default MyContainer;