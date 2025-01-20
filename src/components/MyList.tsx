import React from "react";

type TItem = {
    id: string;
    text: string;
    lineThroughState: boolean;
};

interface ListProps {
    header:string;
    items:TItem[];
    setItems?: React.Dispatch<React.SetStateAction<TItem[]>>;
}

const MyList:React.FC<ListProps> = ({header,items, setItems}) => {

    const onItemClick = (item: TItem) => {
        console.log("Item clicked: ", item.id);

        const updatedItems = items.map(i => 
            i.id === item.id ? { ...i, lineThroughState: !i.lineThroughState } : i
        );

        if (setItems){
            setItems(updatedItems);
        } else {
            console.log("No setItems function provided");
        }
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