
# 🏥 Medical History Tracker

A full-stack web application to input, store, and manage medical history records for patients. The application helps track medications, diseases, doctors consulted, and other essential health information.

## 📁 Project Structure

```
colegeProject/
├── frontend/            # React + Vite frontend
├── medicalhistory/      # Spring Boot backend (Java)
```

---

## 🚀 Features

### Frontend (React + Vite)
- User-friendly UI for entering patient medical history
- Form to input medication, doctor name, disease, and more
- Edit/Delete/Sort/Filter patient records
- LocalStorage support for offline persistence
- Auth pages: Login, Register
- Dashboard and landing page
- Responsive and modern design using Tailwind CSS

### Backend (Spring Boot)
- REST API to handle:
  - User authentication
  - Medical history CRUD operations
- CORS configuration
- JPA for database interaction
- JSON-based request and response handling

---

## 🖼️ Screenshots

- **Dashboard & Landing Page:**  
  ![Dashboard and Landing Page](https://drive.google.com/uc?id=14l25d8bN26asAjBZr-3M5A-3EXQj694n)

- **Medical History Table View:**  
  ![Medical History](https://drive.google.com/uc?id=14W4m4YJXpBBb7zpbajMvx3o8Wmj-9nF-)

- **New Medical Record Form:**  
  ![New Medical Record Form](https://drive.google.com/uc?id=1iyX_k03DVUNwX__ZtApI2p_R-Jc6gvTX)

---

## 🛠 Tech Stack

| Frontend           | Backend                | Tools & Other       |
|--------------------|------------------------|---------------------|
| React + Vite       | Spring Boot (Java)     | MongoDB (planned)   |
| Tailwind CSS       | Spring Data JPA        | Axios               |
| JavaScript / JSX   | REST API               | Maven               |

---

## 📦 Installation & Run

### Prerequisites

- Node.js & npm
- Java 17+
- Maven

### Backend (Spring Boot)

```bash
cd medicalhistory
./mvnw spring-boot:run
```

Backend runs on: `http://localhost:8080`

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 📂 API Endpoints (Sample)

| Endpoint                   | Method | Description                  |
|----------------------------|--------|------------------------------|
| `/api/auth/register`       | POST   | Register a new user          |
| `/api/auth/login`          | POST   | Login                        |
| `/api/records`             | GET    | Fetch all medical records    |
| `/api/records`             | POST   | Add new medical record       |
| `/api/records/{id}`        | PUT    | Update existing record       |
| `/api/records/{id}`        | DELETE | Delete a record              |

---

## 👨‍💻 Authors

- Chinmay J and Team

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.
