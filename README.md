# NexWatch Backend (Express + MongoDB)

This backend is tailored to your NexWatch React frontend. It provides Product, Order, and Contact APIs and includes a seed script that imports products from your frontend `products.js` file.

## Setup

1. Copy this backend folder to your machine.
2. Create a `.env` file in the project root with:

```
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/nexwatch?retryWrites=true&w=majority
PORT=4000
```

3. Install dependencies:

```
npm install
```

## Seed products (imports from your frontend file)

The seed script expects the frontend products file at:

```
/mnt/data/nexwatch-main/nexwatch-main/src/data/products.js
```

If your frontend is in a different location, edit `scripts/seedProducts.js` and update `FRONTEND_PRODUCTS_PATH`.

Run the seed:

```
MONGO_URI="your_mongo_uri" npm run seed
```

## Run server (dev)

```
npm run dev
```

## API endpoints

- `GET /api/status` — health
- `GET /api/products` — list products
- `GET /api/products/:id` — single product
- `POST /api/orders` — create order (body: items[], customer, total)
- `GET /api/orders/:id` — get order
- `POST /api/contact` — send contact message (body: name, email, subject, message)

## How frontend should call backend

If you run the backend on `http://localhost:4000`, add this to your React `package.json`:
```json
"proxy": "http://localhost:4000"
```

Then you can `fetch('/api/products')` from the frontend.

## Notes

- This is a minimal starter backend. For production, add validation, authentication, payments, and security hardening.
