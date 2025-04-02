import { useState, useEffect } from "react";
import { createCard, updateCard } from "../api";

interface Card {
    id: number;
    title: string;
    description: string;
}

interface CardFormProps {
    cardToEdit: Card | null;
    onCardUpdated: () => void;
}

const CardForm: React.FC<CardFormProps> = ({ cardToEdit, onCardUpdated }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (cardToEdit) {
            setTitle(cardToEdit.title);
            setDescription(cardToEdit.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [cardToEdit]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (cardToEdit) {
            await updateCard(cardToEdit.id, { title, description });
        } else {
            await createCard({ title, description });
        }

        setTitle("");
        setDescription("");
        onCardUpdated();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
                required
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                required
            />
            <button type="submit">{cardToEdit ? "Update" : "Create"}</button>
        </form>
    );
};

export default CardForm;
