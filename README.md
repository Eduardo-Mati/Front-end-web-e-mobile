# 🛒 Sistema de Vendas Fullstack

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![License](https://img.shields.io/badge/License-MIT-blue)

Um sistema de e-commerce completo desenvolvido para praticar a integração entre Frontend moderno e Backend robusto. O projeto conta com autenticação de usuários, listagem de produtos e persistência de dados em nuvem.

---

## 🌐 Deploy (Acesse o projeto online)

https://front-end-web-e-mobile.vercel.app/

obs: o banco de dados está presente no render que é uma ferramenta gratuita que apresenta o cold start onde demora um pouco para a requisição funcionar na primeira interação
---

## 🛠 Tecnologias Utilizadas

O projeto foi dividido em duas partes principais (Monorepo):

### **Frontend (`/client`)**
- ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React.js**
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript**
- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=white) **Vite**
- **CSS Modules** (Estilização)

### **Backend (`/server`)**
- ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) **Node.js** & **Express**
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white) **MongoDB Atlas** (Banco de dados NoSQL)
- **Mongoose** (Modelagem de dados)
- **JWT (JSON Web Token)** (Autenticação segura)
- **Bcrypt** (Criptografia de senhas)

### **Deploy**
- Vercel: Front-end
- Render: Back-end
  
---

## ✨ Funcionalidades

- [x] **Cadastro de Usuários:** Criptografia de senha no banco de dados.
- [x] **Login/Autenticação:** Geração de Token JWT para acesso seguro.
- [x] **Listagem de Produtos:** Consumo da API para exibir itens disponíveis.
- [x] **Interface Responsiva:** Adaptável para mobile e desktop.
- [x] **Integração Front-Back:** Conexão via Fetch/Axios.

---

## 📂 Estrutura do Projeto

Este repositório opera como um monorepo:
