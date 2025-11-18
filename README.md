
# 🛍️ **Trendi — Full Stack E-commerce Platform**

**Frontend:** 🔗 *https://trend-i-j816.vercel.app/*


---

## 🚀 **Project Overview**

**Trendi** is a modern full-stack e-commerce platform built for small and medium businesses to easily launch their online stores. The platform enables customers to **browse products**, **manage their cart**, and **place orders**, while admins have full control over **product management** and **user access.**

Powered by a reliable tech stack, Trendi ensures **simplicity, scalability, and security** — all wrapped in a clean UI and modular codebase.

---

## 🎯 **Project Goals**

* Create a user-focused shopping experience with seamless interactions.
* Implement secure **JWT authentication** and role-based access control.
* Support **CRUD operations** for products, users, and carts.
* Deploy on cloud platforms using **Vercel and MongoDB Atlas**.
* Establish a foundation for future enhancements like orders, payment gateways, etc.

---

## 🧠 **System Architecture & Tech Stack**

| Layer              | Tech / Tool                          | Purpose                               |
| ------------------ | ------------------------------------ | ------------------------------------- |
| **Frontend**       | React.js, React Router, Tailwind CSS | UI & Client Routing                   |
| **Backend**        | Node.js, Express.js                  | REST API & Business Logic             |
| **Database**       | MongoDB Atlas                        | Scalable NoSQL database               |
| **Authentication** | JWT                                  | User authentication & authorization   |
| **HTTP Client**    | Fetch API                                | API communication                     |
| **Hosting**        | Vercel (client + server)             | Cloud deployment & CI/CD              |
| **Config**         | .env                                 | Environment-specific secrets and URLs |

---

## 💡 **Key Features**

### 👤 **User Features**

* Browse all available products
* Secure Signup/Login
* Add/update/remove items in the cart
* View product details
* Search & filter products

### 🧑‍💼 **Admin Features**

* Manage all products (create, update, delete)
* Protected routes for admin actions
* Access to entire product list and user roles
* Smart API-based platform control

---

## ⚙️ **API Endpoints (Highlights)**

| Endpoint            | Method | Description               | Access        |
| ------------------- | ------ | ------------------------- | ------------- |
| `/api/user/register`  | POST   | Register new user         | Public        |
| `/api/user/login`   | POST   | Login authenticated users | Public        |
| `/api/product/list`     | GET    | Fetch all products        | Authenticated |
| `/api/products/:id` | PUT    | Update a product by ID    | Admin         |
| `/api/products/:id` | DELETE | Remove a product by ID    | Admin         |
| `/api/cart`         | GET    | Get cart items            | Authenticated |
| `/api/cart`         | POST   | Add/update cart items     | Authenticated |

---

## 🧱 **Deployment**

* 🖥️ **Frontend:** Vercel
* ⚙️ **Backend:** Render
* 📦 **Database:** MongoDB Atlas
* 📬 **State Management:** React State + localStorage

---

## 👥 **Roles & Permissions**

| Role      | Permissions                                  |
| --------- | -------------------------------------------- |
| **Admin** | Manage products, users, and platform control |
| **User**  | Browse products, manage cart, place orders   |

---

## 🌐 **Live Demo**

🔗 *https://trend-i-j816.vercel.app/*

---

## 🧩 **Upcoming Enhancements**

* Payment gateway (Stripe/PayPal)
* Order tracking & management
* Wishlist support
* Improved admin dashboard
* Better search & recommendation flow

---

## 📄 **License**

This project is for **educational and demonstration purposes only**.

---

## 💬 **Contact & Contribution**

Got ideas or found a bug? Feel free to fork the repo, create a **pull request**, or open an **issue**.
Let’s collaborate and build something amazing! 🚀


