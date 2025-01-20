import MyList from "./MyList";
import React from "react";

type TItem = {
    id: string;
    text: string;
    lineThroughState?: boolean;
};

interface MyContainerProps {
    containerName?: string;
}

const MyContainer:React.FC<MyContainerProps> = ({containerName}) => {
    const [textContent, setTextContent] = React.useState<string>("");

    const addItem = (item: {text: string }) => {
        const id: string = Math.random().toString(36)
        const newItem: TItem = { id, text: item.text, lineThroughState: false }

        setItems([...items, newItem])
    }

    const [items, setItems] = React.useState<TItem[]>([
        { id: "1", text: "Item 1" , lineThroughState: false},
        { id: "2", text: "Item 2" , lineThroughState: false},
        { id: "3", text: "Item 3" , lineThroughState: false},
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add item to list

        addItem({ text: textContent });

        setTextContent("");

    }

    return (
        <div>
        <h1>{ containerName }</h1>
            <MyList header="My List" items={items} setItems={setItems} />
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Add item" onChange={(e) => setTextContent(e.target.value)} value={textContent}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default MyContainer;