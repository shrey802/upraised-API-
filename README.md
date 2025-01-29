# upraised-API-

The **Upraised API** is a secure and efficient API for managing gadgets in the **Impossible Missions Force (IMF)** gadget inventory system. This API allows you to perform CRUD operations (Create, Read, Update, Delete) on the gadget inventory, including features for adding new gadgets, updating existing ones, marking gadgets as decommissioned, and triggering self-destruct sequences.

The API is built using **Node.js**, **Express**, and **Supabase** as the database.

---

## Features

- **GET /gadgets**: Retrieve a list of all gadgets in the inventory.
- **POST /gadgets**: Add a new gadget to the inventory with a unique codename and success probability.
- **PATCH /gadgets/{id}**: Update an existing gadget's information (e.g., name, status).
- **DELETE /gadgets/{id}**: Mark a gadget as "Decommissioned" instead of deleting it.

## Live API url - https://upraised-api.onrender.com/

## Setup & Running Locally

 Step 1 - Clone the Repository 
 ```git clone url```
 
 Step 2 - ```npm i```

 Step 3 - ```node server.js```
