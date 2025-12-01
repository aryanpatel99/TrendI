
# 🛍️ **Trendi — Full Stack E-commerce Platform**

**Frontend:** 🔗 *https://trend-i-j816.vercel.app/*

**Backend:** 🔗 *https://trendi.onrender.com/*

**Admin:** 🔗 *https://trend-i-frhb.vercel.app/add*

---

## 🚀 **Project Overview**

**Trendi** is a modern single-store e-commerce web application designed to help businesses showcase and sell their products online with ease. The platform enables customers to **browse products**, **manage their cart**, and **place orders**, while admins have full control over **product management** and **user access.**

On the administrative side, Trendi includes a secure, dedicated admin panel where authorized users can add new products, update existing items, manage inventory, and maintain the store’s catalog. Regular users cannot modify products — all product management is fully restricted to the admin.

Powered by a reliable tech stack, Trendi ensures **simplicity, scalability, and security** — all wrapped in a clean UI and modular codebase.

---

## 🎯 **Project Goals**

* Create a user-focused shopping experience with seamless interactions.
* Implement secure **JWT authentication** and role-based access control.
* Support **CRUD operations** for products, users, and carts.
* Deploy on cloud platforms using **Vercel and MongoDB Atlas**.
* Payment gateway integration (Razorpay, Stripe, COD)

---

## 🧠 **System Architecture & Tech Stack**

| Layer              | Tech / Tool                          | Purpose                               |
| ------------------ | ------------------------------------ | ------------------------------------- |
| **Frontend**       | React.js, React Router, Tailwind CSS | UI & Client Routing                   |
| **Backend**        | Node.js, Express.js                  | REST API & Business Logic             |
| **Database**       | MongoDB Atlas                        | Scalable NoSQL database               |
| **Authentication** | JWT                                  | User authentication & authorization   |
| **HTTP Client**    | Axios                                | API communication                     |
| **Hosting**        | Vercel (client), Render (server)             | Cloud deployment & CI/CD              |
| **Config**         | .env                                 | Environment-specific secrets and URLs |

---

## 💡 **Key Features**

### 👤 **User Features**

* Browse all available products
* Secure Signup/Login
* Add/update/remove items in the cart
* View product details
* Search & filter products
* Pagination

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
| `/api/user/admin`   | POST   | Login authenticated admin | Public        |
| `/api/product/list`     | GET    | Fetch all products        | Authenticated,Admin |
| `/api/product/add`     | POST    | Add products        | Authenticated,Admin |
| `/api/product/remove`     | POST    | Remove products        | Authenticated,Admin |
| `/api/cart/get`         | GET    | Get cart items            | Authenticated |
| `/api/cart/add`         | POST   | Add/update cart items     | Authenticated |
| `/api/order/list`         | POST   | All orders   | Authenticated |

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

* Payment gateway (Stripe/PayPal) | Update: Implemented ✅
* Order tracking & management | Update: Implemented ✅
* Better search & recommendation flow

---

## 📄 **License**

This project is for **educational and demonstration purposes only**.

---

## 💬 **Contact & Contribution**

Got ideas or found a bug? Feel free to fork the repo, create a **pull request**, or open an **issue**.
Let’s collaborate and build something amazing! 🚀


