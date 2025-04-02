import { useState } from "react";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import WalletButton from "./components/WalletButton";
import "./styles/global.scss";

interface Card {
    id: number;
    title: string;
    description: string;
}

function App() {
    const [cardToEdit, setCardToEdit] = useState<Card | null>(null);

    const handleEdit = (card: Card) => setCardToEdit(card);
    const clearEdit = () => setCardToEdit(null);

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Web3 Card Manager</h1>
                <WalletButton />
            </header>
            <main className="app-content">
                <div className="card-form-container">
                    <CardForm cardToEdit={cardToEdit} onCardUpdated={clearEdit} />
                </div>
                <div className="card-list-container">
                    <CardList onEdit={handleEdit} />
                </div>
            </main>
        </div>
    );
}

export default App;
