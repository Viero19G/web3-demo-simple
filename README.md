# Web3 Card Manager

## Overview

Web3 Card Manager is a decentralized card management system where users can create, edit, and delete cards while interacting with the blockchain by connecting their wallets.

## 📌 Technologies Used

### Backend
- Python
- Django
- Django REST Framework (DRF)
- SQLite (or another configured database)

### Frontend
- React
- TypeScript
- Web3.js / Ethers.js
- Tailwind CSS (or another styling approach if needed)

### Additional Dependencies
- Node.js
- npm or yarn
- Python virtual environment (venv)

---

## 🛠️ Project Setup

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/Viero19G/web3-demo-simple
```

### 🔹 2. Backend Setup

#### Create and Activate a Virtual Environment (Recommended)
```sh
python -m venv venv  # Create the virtual environment
source venv/bin/activate  # Activate on Linux/macOS
venv\Scripts\activate  # Activate on Windows
```

#### Install Backend Dependencies
```sh
pip install -r requirements.txt
```

#### Apply Migrations and Start the Server
```sh
python manage.py migrate  # Apply database migrations
python manage.py runserver  # Start the backend server
```
The backend will be available at: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

### 🔹 3. Frontend Setup

#### Install Frontend Dependencies
Navigate to the frontend directory:
```sh
cd frontend
```
Then install dependencies:
```sh
npm install  # Or use: yarn install
```

#### Run the Frontend
```sh
npm run dev  # Or use: yarn dev
```
The frontend will be available at: [http://localhost:3000/](http://localhost:3000/)

---

## 🔗 Web3 Wallet Connection
If the project supports connecting to MetaMask or another Web3 wallet, follow these steps:
1. Open the browser and go to [http://localhost:3000/](http://localhost:3000/)
2. Click on the "Connect Wallet" button
3. Authorize the wallet connection

---

## 📂 Project Structure
```
/web3-card-manager
│── backend/                   # Backend em Django
│   ├── cards/                 # Aplicação principal
│   │   ├── migrations/        # Arquivos de migração do banco
│   │   ├── __init__.py
│   │   ├── admin.py           # Configuração do admin Django
│   │   ├── apps.py
│   │   ├── models.py          # Modelos de dados
│   │   ├── serializers.py     # Serializadores do Django REST Framework
│   │   ├── tests.py           # Testes do backend
│   │   ├── views.py           # Lógica das APIs
│   ├── backend/               # Configurações gerais do Django
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py        # Configurações do projeto Django
│   │   ├── urls.py            # Definição das rotas
│   │   ├── wsgi.py
│   ├── db.sqlite3             # Banco de dados SQLite
│   ├── manage.py              # Comando principal do Django
│   ├── requirements.txt       # Dependências do backend
│
│── frontend/                   # Frontend em React + TypeScript
│   ├── public/                 # Arquivos públicos (favicon, index.html)
│   ├── src/                    # Código-fonte do frontend
│   │   ├── assets/             # Imagens, ícones, fontes, etc.
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── CardForm.tsx
│   │   │   ├── CardList.tsx
│   │   │   ├── WalletButton.tsx
│   │   ├── styles/             # Estilos do projeto
│   │   │   ├── global.scss
│   │   ├── api/                # Comunicação com o backend
│   │   │   ├── api.ts
│   │   ├── App.tsx             # Componente principal
│   │   ├── main.tsx            # Ponto de entrada do React
│   │   ├── index.css           # Estilos globais
│   │   ├── App.css             # Estilos do App
│   │   ├── vite-env.d.ts       # Tipagem para Vite
│   ├── package.json            # Dependências do frontend
│   ├── tsconfig.json           # Configuração do TypeScript
│   ├── vite.config.ts          # Configuração do Vite
│
│── README.md                   # Documentação do projeto
│── .gitignore                   # Arquivos ignorados pelo Git


---

## 🔄 API Endpoints

| Method  | Endpoint          | Description        |
|---------|------------------|--------------------|
| GET     | `/api/cards/`     | Retrieve all cards |
| POST    | `/api/cards/`     | Create a new card  |
| PUT     | `/api/cards/{id}/`| Update a card      |
| DELETE  | `/api/cards/{id}/`| Delete a card      |

---
