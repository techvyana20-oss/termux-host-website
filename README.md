# Termux Host Website

A simple HTML/CSS/JavaScript project that can be hosted and run locally on **Android using Termux**. Perfect for learning how to serve web pages directly from your phone.

---

## 🚀 Steps to Setup and Run

### Step 1: Update Termux Packages
```bash
pkg update -y && pkg upgrade -y
```

### Step 2: Install Python and Nano
```bash
pkg install -y python nano
```

### Step 3: Install Git
```bash
pkg install git -y
```

### Step 4: Clone the Repository
```bash
git clone https://github.com/techvyana20-oss/termux-host-website.git
```

### Step 5: Navigate to Project Folder
```bash
ls
cd termux-host-website
```

### Step 6: Start Python HTTP Server
```bash
python3 -m http.server 8000
```
_Server will display: Serving HTTP on 0.0.0.0 port 8000 ..._

### Step 7: Open Website in Browser
```bash
termux-open-url http://localhost:8000/index.html
```
_or manually open in Chrome: http://localhost:8000/index.html_

### Step 8: Edit and Refresh
- Edit your HTML, CSS, or JS files with `nano` or any editor.
- Refresh browser to see live changes.

---

## 📸 Screenshot

![Website Screenshot](![Screeshot](https://github.com/user-attachments/assets/292ef54f-936b-42ca-89ff-7d2da7677747))  

---

## 📝 License
This project is licensed under the **MIT License**. See the LICENSE file for details.

---

## 👨‍💻 Author
- Tech Vyana 2.0  
- GitHub: [techvyana20-oss](https://github.com/techvyana20-oss)
