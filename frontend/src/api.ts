import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/cards/"; // Ajuste conforme seu backend

// Definição da interface para os Cards
interface Card {
    id?: number;
    title: string;
    description: string;
}

// Obter todos os cards
export const getCards = async (): Promise<Card[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Criar um novo card
export const createCard = async (card: Card) => {
    await axios.post(API_URL, card);
};

// Atualizar um card existente
export const updateCard = async (id: number, card: Card) => {
    await axios.put(`${API_URL}${id}/`, card);
};

// Deletar um card
export const deleteCard = async (id: number) => {
    await axios.delete(`${API_URL}${id}/`);
};
