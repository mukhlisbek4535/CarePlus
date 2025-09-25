# 🏥 CarePlus – Doctor Appointment Booking Platform

CarePlus is a **full-stack healthcare booking system** that connects patients, doctors, and administrators in a seamless workflow.  
It allows patients to browse specialists, book appointments, and manage their profile, while doctors and admins have their own portals to manage availability, appointments, and platform data.

This project demonstrates a **production-like full-stack architecture** with modern technologies, built as a showcase for real-world problem solving and portfolio readiness.

---

## 🚀 Features

### 👩‍⚕️ Patient Portal (Frontend)

- Browse doctors by **speciality**
- Check **doctor availability** (rolling 7 days, 30-min slots)
- Book, cancel, and manage appointments
- Responsive design built with **Tailwind CSS**

### 🩺 Doctor Portal

- Doctor login with JWT auth
- Manage availability (toggle online/offline)
- View appointments with patient details
- Profile management (degree, speciality, fees, about)

### 🛠 Admin Dashboard

- Secure admin login
- Add new doctors with profile details + image upload
- Manage all appointments (cancel, complete, track fees)
- Analytics dashboard (doctors, patients, latest bookings)

---

## 🏗 Tech Stack

**Frontend (Patients)**

- React (Vite)
- React Router
- Tailwind CSS
- Axios
- React Toastify

**Admin Panel**

- React (Vite)
- Context API for state management
- Tailwind CSS

**Backend API**

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (for doctor image uploads)
- CORS & dotenv

**Deployment**

- **Frontend & Admin** → Vercel
- **Backend API** → Render
- **Database** → MongoDB Atlas

---

## 🌐 Live Demo & Repo

- **Live App (Patients):** [[https://care-plus-pink.vercel.app/](https://care-plus-pink.vercel.app/)]
- **Live App (Doctors/Admins):** [[https://care-plus-v77p.vercel.app/](https://care-plus-v77p.vercel.app/)]
- **GitHub Repo:** [[https://github.com/mukhlisbek4535/CarePlus](https://github.com/mukhlisbek4535/CarePlus)]

### 🔑 Demo Credentials

#### Admin / Doctor Login

**Email**: admin@gmail.com
**Password**: 123
