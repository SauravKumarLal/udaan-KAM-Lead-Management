# Key Account Manager (KAM) Lead Management System ✨✨✨

## Project Overview 🎯
- The **KAM Lead Management System** is a comprehensive solution designed for managing leads, interactions, and performance metrics in the B2B e-commerce space.
- Built using the MERN stack, this system allows Key Account Managers (KAMs) to efficiently manage restaurant accounts, track interactions, plan follow-ups, and identify underperforming accounts.
- The project emphasizes secure access using JWT-based authentication, robust error handling, and modular architecture for scalability and maintainability. 🚀

### Demo Video 🎥
- Watch the demo video here: [KAM Lead Management System Demo](https://drive.google.com/file/d/1EoW0pH4uIw0YL6i2JVbVme719uhq-sQb/view?usp=sharing)

---

## System Requirements 💻

### Hardware 🛠️
- Minimum 4 GB RAM (8 GB recommended)
- Dual-core processor
- Stable internet connection 📡

### Software 🧑‍💻
- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB Atlas (or a local MongoDB installation)
- Postman (for API testing) ✉️

---

## Installation Instructions ⚙️

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SauravKumarLal/udaan-KAM-Lead-Management.git
   cd udaan-KAM-Lead-Management
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the project root.
   - Add the following variables:
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     JWT_SECRET=your_super_secret_key
     JWT_EXPIRES_IN=1h
     PORT=5000
     ```

4. **Connect to MongoDB**:
   - Use MongoDB Atlas or a local MongoDB instance.
   - Ensure the connection string in the `MONGO_URI` variable is correct. 🌐

---

## Running Instructions 🏃‍♂️

1. **Start the Server**:
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:5000`. 🔗

2. **Verify the Server**:
   - Open a browser or Postman and make a `GET` request to `http://localhost:5000`.
   - You should see a response confirming the server is running. ✅

---

## Test Execution Guide 🔎

1. **Authentication**:
   - Use Postman to test endpoints under `/api/auth` for user registration and login.
   - Copy the JWT token received after login for subsequent API calls. 🔒

2. **Protected Routes**:
   - Add the JWT token to the `Authorization` header in the format `Bearer <token>`.
   - Test CRUD operations for leads, interactions, restaurants, and performance tracking. 📁

3. **Error Handling**:
   - Test with invalid data (e.g., missing required fields, expired token) to ensure proper error responses. ⚠️

---

## API Documentation 📄

### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and receive a JWT token.

### Lead Management
- **POST /api/leads**: Add a new lead.
- **GET /api/leads**: Retrieve all leads.
- **GET /api/leads/:id**: Get a specific lead by ID.
- **PUT /api/leads/:id**: Update a lead.
- **DELETE /api/leads/:id**: Delete a lead.
- **GET /api/leads/calls-today**: Get leads requiring follow-up calls today.

### Interaction Tracking
- **POST /api/interactions**: Add a new interaction.
- **GET /api/interactions**: Retrieve all interactions.
- **GET /api/interactions/:leadId**: Get interactions for a specific lead.

### Restaurant Management
- **POST /api/restaurants**: Add a new restaurant.
- **GET /api/restaurants**: Retrieve all restaurants.
- **GET /api/restaurants/:id**: Get a specific restaurant by ID.
- **PUT /api/restaurants/:id**: Update a restaurant.
- **DELETE /api/restaurants/:id**: Delete a restaurant.

### Performance Tracking
- **GET /api/performance**: Retrieve performance metrics for all leads.
- **PUT /api/performance/:leadId**: Update performance metrics for a lead.
- **GET /api/performance/underperforming**: Get underperforming accounts.

---

## Sample Usage Examples 📑

### 1. **Register a User**
- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "Himanshu K",
    "email": "himanshuk@gmail.com",
    "password": "himanshu123",
    "role": "user"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully."
  }
  ```

### 2. **Login User**
- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "himanshuk@gmail.com",
    "password": "himanshu123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<jwt-token>"
  }
  ```

### 3. **Add a Lead**
- **Endpoint**: `POST /api/leads`
- **Request Header**:
  ```json
  {
    "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Request Body**:
  ```json
  {
    "name": "Zaitoon",
    "contactInfo": ["99346201**", "zaitoon@gmail.com"],
    "status": "New",
    "callFrequency": 7
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64a7d5c2d02c982abc123456",
    "name": "Zaitoon",
    "contactInfo": ["99346201**", "zaitoon@gmail.com"],
    "status": "New",
    "callFrequency": 7,
    "interactions": [],
    "lastCallDate": null
  }
  ```

### 4. **Get Leads Requiring Calls Today**
- **Endpoint**: `GET /api/leads/calls-today`
- **Request Header**:
  ```json
  {
    "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Response**:
  ```json
  [
    {
      "_id": "64a7d5c2d02c982abc123456",
      "name": "Zaitoon",
      "contactInfo": ["99346201**", "zaitoon@gmail.com"],
      "status": "In Progress",
      "callFrequency": 7,
      "lastCallDate": "2024-12-17T00:00:00.000Z",
      "interactions": []
    }
  ]
  ```

---

## Future Enhancements 🔮

1. **Advanced Analytics**:
   - Include dashboards for tracking lead performance and trends. 📊
2. **Notifications**:
   - Add email or SMS reminders for scheduled calls. 🔔
3. **Frontend Integration**:
   - Build a responsive frontend using React.js or Angular. 🖥️
4. **Role Management**:
   - Extend role-based access control with more granular permissions. 🔑
5. **Deployment**:
   - Deploy the system on a cloud platform like AWS or Heroku for accessibility. ☁️

---

## Contact Information 📞

- **Developer**: Saurav Kumar Lal
- **Email**: sauravkrlal@gmail.com
- **Phone**: 6202830461
- **GitHub**: [Github Link](https://github.com/SauravKumarLal)

---

