# 🍽️ Ottawa Menus — Restaurant Control Center

A modern, cinematic admin dashboard for managing Ottawa restaurant data, generating branded menu cards, and preparing content for multi‑platform posting.

This Control Center powers the Ottawa Menus ecosystem — a community‑focused platform that highlights local restaurants, improves their online visibility, and automates content creation.

---

## 📸 Screenshots

> _Screenshots will be added as the UI evolves. Planned screenshots include:_
- Restaurant List Page (Control Center)
- Add Restaurant Form
- Restaurant Detail Page (Menu Editor)
- Menu Card Preview
- Example Generated Menu Card
- Google Maps Integration Example

---

## 🚀 Current Features

### ✅ Restaurant List Page (`/control-center/restaurants`)
A clean, responsive dashboard showing all restaurants in the system.

Includes:
- Search by name, neighbourhood, cuisine, tags, categories  
- Cinematic UI with blue‑grey background and elevated cards  
- Delivery platform links (Uber Eats, DoorDash, SkipTheDishes)  
- Google Maps link for each address  
- Preview button → generates a menu card  
- Post button → posts to Bluesky  
- “Add Restaurant” button → opens the creation form  

Tech:
- Next.js App Router  
- TypeScript + TSX  
- Tailwind CSS  
- Supabase (Postgres)  
- API routes for card generation + posting  

---

## 🏗️ Architecture Overview

### 1. Restaurant List Page
- Displays all restaurants  
- Provides quick actions (Preview, Post)  
- Links to Add Restaurant page  
- Will eventually link to Restaurant Detail pages  

### 2. Add Restaurant Page (coming next)
Will allow adding:
- Name  
- Address  
- Phone  
- Neighbourhood  
- Cuisine  
- Tags  
- Categories  
- Website URL  
- Delivery URLs  
- Google Maps URL (optional)  

### 3. Restaurant Detail Page (planned)
Will allow:
- Editing restaurant info  
- Adding/editing menu items  
- Previewing the menu card  
- Posting the menu card  
- Viewing delivery links  
- Viewing website link  
- Viewing Google Maps link  

### 4. Menu Card Generator
- `/api/generate-card?id=123`  
- Generates a branded HTML menu card  
- Used for Preview + posting  

---

## 🗺️ Google Maps Integration

### ✔ Current:
- Each restaurant address includes a **Google Maps link**  
- Uses a search‑based link (works without coordinates)  

### ✔ Planned:
- Add `google_maps_url` field to Supabase  
- Store the exact Google Maps Place URL  
- Display it on the detail page  
- Use it in menu cards  

### ✔ Sales Pitch Feature:
Ottawa Menus will help restaurant owners:

- Update their Google Maps photos  
- Improve their Google Business Profile  
- Improve their SEO  
- Improve their online visibility  
- Improve their delivery platform listings  

### ❌ Not possible inside the app:
- Uploading photos directly to Google Maps  
- Editing Google Maps listings programmatically  

### ✔ Possible with your service:
- You (or the restaurant owner) upload photos manually  
- You guide them through Google Business Profile optimization  
- You store the correct Google Maps URL in your app  

---

## 📌 Future Features (Planned)

### 🟦 Restaurant Detail Page
- Edit restaurant info  
- Add/edit/delete menu items  
- Add delivery URLs  
- Add website URL  
- Add Google Maps URL  
- Preview menu card  
- Post menu card  

### 🟦 Menu Item Editor
- Add menu items  
- Add prices  
- Add descriptions  
- Add categories  
- Add dietary tags  

### 🟦 Menu Card Generator Enhancements
- Multiple card layouts  
- Seasonal templates  
- Branding options  
- Auto‑generated captions  

### 🟦 Posting Automation
- Bluesky  
- Instagram  
- Threads  
- Google Business Posts  
- Facebook Pages  

### 🟦 Restaurant SEO Toolkit
- Google Maps optimization  
- Google Business Profile improvements  
- Website link integration  
- Delivery platform link verification  
- Photo recommendations  

---

## 🌱 Long‑Term Vision

Ottawa Menus becomes a full SaaS ecosystem:

- Restaurant discovery feed  
- Automated posting  
- Menu card generation  
- Multi‑platform publishing  
- Restaurant SEO improvement  
- Google Maps optimization  
- Delivery platform optimization  
- Community‑driven content  

---

## 🧩 Next Steps

- Build the **New Restaurant Page**  
- Build the **Restaurant Detail + Menu Editor Page**  
- Add support for website + delivery URLs  
- Add support for Google Maps URLs  
- Expand the menu card generator  

