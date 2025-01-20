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
    const [textContent, setTextContent] = React.useState<string>("");

    const addItem = (item: {text: string }) => {
        const id: string = Math.random().toString(36)
        const newItem: TItem = { id, text: item.text }

        setItems([...items, newItem])
    }

    const [items, setItems] = React.useState<TItem[]>([
        { id: "1", text: "Item 1" },
        { id: "2", text: "Item 2" },
        { id: "3", text: "Item 3" },
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        // Add item to list
        e.preventDefault();

        addItem({ text: textContent });

    }

    return (
        <div>
        <h1>{ containerName }</h1>
            <MyList header="My List" items={items} />
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Add item" onChange={(e) => setTextContent(e.target.value)} value={textContent}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default MyContainer;