import React from "react";

type TItem = {
    id: string;
    text: string;
    lineThroughState: boolean;
};

interface ListProps {
    header:string;
    items:TItem[];
}

const MyList:React.FC<ListProps> = ({header,items}) => {

    const onItemClick = (item: TItem) => {
        console.log("Item clicked: ", item.id);

        item.lineThroughState = !item.lineThroughState;
    }

    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li key={item.id} className={item.lineThroughState ? "line" : ""} onClick={() => onItemClick(item)}>{item.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default MyList;