import { useEffect, useState } from "react";
import { getCards, deleteCard } from "../api";

interface Card {
    id: number;
    title: string;
    description: string;
}

interface CardListProps {
    onEdit: (card: Card) => void;
}

const CardList: React.FC<CardListProps> = ({ onEdit }) => {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        const rawData = await getCards();
        const data: Card[] = rawData.map((card) => ({
            id: card.id ?? -1, // 🔹 Garante que nunca seja undefined
            title: card.title || "Sem título",
            description: card.description || "Sem descrição",
        }));
    
        setCards(data);
    };
    
    

    const handleDelete = async (id: number) => {
        await deleteCard(id);
        setCards((prevCards) => prevCards.filter(card => card.id !== id));
    };

    return (
        <div>
            <h2>Card List</h2>
            {cards.map((card) => (
                <div key={card.id}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <button onClick={() => onEdit(card)}>Edit</button>
                    <button onClick={() => card.id !== undefined && handleDelete(card.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CardList;
