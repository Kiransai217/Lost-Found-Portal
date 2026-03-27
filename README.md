
# Lost & Found Portal

## 📌 Project Description
The Lost & Found Portal is a full stack web application that helps users report lost items and post found items in a centralized system. It simplifies the process of finding lost belongings by connecting users efficiently.

---

## 🚀 Features
- User Signup and Login (Authentication)
- Secure password hashing using bcrypt
- Add, Edit, Delete items (CRUD operations)
- Personal Dashboard for users
- Session-based authentication
- Firebase Firestore database integration

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- Firebase Firestore
- EJS (Embedded JavaScript Templates)
- HTML, CSS
- bcrypt
- express-session

---

## 📂 Project Structure
```

Lost-Found-Portal/
│
├── routes/
│   ├── auth.js
│   └── item.js
│
├── views/
│   ├── signup.ejs
│   ├── login.ejs
│   ├── dashboard.ejs
│   ├── addItem.ejs
│   └── editItem.ejs
│
├── public/
│   └── style.css
│
├── app.js
├── firebase.js
├── package.json
└── README.md

````

---

## ⚙️ How to Use

### 1. Clone the Repository
```bash
git clone https://github.com/Kiransai217/Lost-Found-Portal.git
````

### 2. Navigate to Project Folder

```bash
cd Lost-Found-Portal
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add Firebase Credentials

* Place your `firebaseKey.json` file in the root folder
* Make sure it is added in `.gitignore`

### 5. Run the Application

```bash
node app.js
```

### 6. Open in Browser

```
http://localhost:3000
```

---

## 🔄 User Flow

1. User registers (Signup)
2. User logs in
3. Redirected to dashboard
4. Add / Edit / Delete items
5. Logout securely

---

## 🗄️ Database Design (Firestore)

* **users**

  * name
  * email
  * password

* **items**

  * title
  * description
  * category
  * contact
  * userId

---

## 📈 Future Improvements

* Add image upload feature
* Implement search and filters
* Improve UI/UX design
* Add notifications
* Deploy to cloud

---

## 👨‍💻 Author

**Kiran Sai**
