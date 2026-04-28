# 🌍 Visit Countries App

## 📌 Overview

The **Visit Countries App** is a React application that allows users to mark countries as visited and manage their visited countries list dynamically.

Users can:

* View a list of countries
* Mark countries as **Visited**
* Remove countries from the **Visited Countries** section
* See updates instantly based on their actions

---

## 🚀 Features

### 1️⃣ Initial Display

* Displays all countries from `initialCountriesList`
* If a country is **not visited**, it shows a **Visit** button
* If a country is **visited**, it shows **Visited** text
* Visited countries appear in the **Visited Countries** section

---

### 2️⃣ Visit Button Functionality

When the **Visit** button is clicked:

* The selected country moves to the **Visited Countries** section
* The **Visit** button changes to **Visited**
* UI updates automatically

---

### 3️⃣ Remove Button Functionality

When the **Remove** button is clicked:

* The country is removed from **Visited Countries**
* The **Visited** text changes back to **Visit**
* Country returns to the main list state

---

### 4️⃣ Empty Visited Countries View

If no countries are visited:

* The message **"No Visited Countries"** is displayed

---

## 🧠 State Management Logic

The application stores countries inside component state:

```
state = {
  countryList: initialCountriesList
}
```

Each country object contains:

```
{
  id: string,
  name: string,
  imageUrl: string,
  isVisited: boolean
}
```

---

## 🔄 Visit Country Logic

```
onClickVisit = id => {
  this.setState(prevState => ({
    countryList: prevState.countryList.map(each =>
      each.id === id ? {...each, isVisited: true} : each
    ),
  }))
}
```

---

## ❌ Remove Country Logic

```
onClickRemove = id => {
  this.setState(prevState => ({
    countryList: prevState.countryList.map(each =>
      each.id === id ? {...each, isVisited: false} : each
    ),
  }))
}
```

---

## 🖼️ Technologies Used

* React JS
* JavaScript (ES6)
* Styled Components
* CSS Flexbox

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── VisitCountries/
 │    ├── CountryCard/
 │
 ├── App.js
 ├── index.js
```

---

## ▶️ How to Run the Project

1. Install dependencies

```
npm install
```

2. Start the application

```
npm start
```

3. Open browser

```
http://localhost:3000
```

---

## ✨ Expected Behavior Summary

✔ Countries list loads initially
✔ Visit button updates country status
✔ Country appears in visited section
✔ Remove button restores original state
✔ Empty visited section shows message properly

---

## 📌 Author

Developed as part of a React practice assignment to understand:

* State updates
* Conditional rendering
* List rendering with keys
* Event handling


