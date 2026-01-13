
# 🌤️ MINI Weather React App

A simple and responsive **Weather Application** built using **React + Vite** that fetches real-time weather data using the **OpenWeatherMap API**. Users can search for any city and instantly view current weather conditions.

---

## 🚀 Live Features

* 🔍 Search weather by **city name**
* 🌡️ Displays **temperature (°C)**
* 💧 Shows **humidity**
* 🤗 Includes **feels-like temperature**
* ☁️ Weather description (clear, cloudy, rain, etc.)
* ⚠️ Error handling for invalid city names
* 🎨 Clean UI using **Material UI (MUI)**

---

## 🛠️ Tech Stack

* **React** (with Hooks)
* **Vite** (for fast builds)
* **Material UI (MUI)**
* **OpenWeatherMap API**
* **CSS**

---

## 📂 Project Structure

```
MINI-Weather-React/
│
├── src/
│   ├── SearchBox.jsx
│   ├── WeatherApp.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── *.css
│
├── public/
├── .env               # API key (ignored by git)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔑 Environment Variables

This project uses an API key from **OpenWeatherMap**.

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_openweathermap_api_key
```

⚠️ **Important**

* Variable name must start with `VITE_`
* Do NOT add semicolons
* Restart the dev server after adding `.env`

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Rajveer812/MINI-Weather-React.git
cd MINI-Weather-React
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will start on:

```
http://localhost:5173
```

---

## 🧪 Error Handling

* Shows an error message when an invalid city is entered
* Prevents app crash on failed API responses

---

## 🔐 Security Note

This is a **frontend-only project**, so the API key is visible in the browser.
For production apps, API calls should be routed through a backend.

---

## 📸 Screenshots

*(You can add screenshots here later to make it more attractive)*

```md
![App Screenshot](screenshot.png)
```

---

## ✨ Future Improvements

* 🌍 Auto-detect user location
* 🕒 5-day weather forecast
* 🌈 Dynamic weather icons
* ⏳ Loading spinner
* 📱 Improved mobile UI

---

## 👨‍💻 Author

**Rajveer**
GitHub: [@Rajveer812](https://github.com/Rajveer812)

---

## 📄 License

This project is for **learning and educational purposes**.

---

