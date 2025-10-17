# Elasticsearch Earthquake App 🌍

A web service that ingests, stores, and queries earthquake data using **Elasticsearch**.  
Allows searching earthquake records by magnitude, location, date, depth, and other filters.

---

## 🧰 Tech Stack & Dependencies

- **Node.js / Express** — server framework  
- **@elastic/elasticsearch** — Elasticsearch client  
- **Axios** — HTTP requests  
- **Config** — configuration management  
- **dotenv** — environment variables  
- **cors** — cross-origin support  
- **log-timestamp** — timestamp logging  
- **nodemon** — dev tool for live reloads  

---

## ⚙️ Features

- Import / ingest earthquake data into Elasticsearch  
- Search earthquakes with filters on:
  - magnitude
  - location (city, region, country)
  - date or date range
  - depth
  - other metadata
- Full-text search on descriptive fields (if available)  
- Pagination, sorting, and filtering support  
- CORS enabled to allow frontend clients  

---

## 🔐 Environment Variables

Create a `.env` file in the project root with entries like:

```env
ELASTICSEARCH_NODE=http://localhost:9200
ELASTICSEARCH_USERNAME=
ELASTICSEARCH_PASSWORD=
PORT=3000
````

You may also use a `config` file (e.g. `config/default.json`) for fallback or structured configuration.

---

## 🚀 Setup & Run

### 1. Clone the repo

```bash
git clone https://github.com/plinadev/elasticsearch-earthquake-app.git
cd elasticsearch-earthquake-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Elasticsearch

* Start an Elasticsearch instance (local or remote)
* Ensure it’s reachable at `ELASTICSEARCH_NODE` configured in `.env`

### 4. Run the server

```bash
npm run dev
```

(You may have a script like `nodemon src/index.ts` configured.)

Server runs at `http://localhost:<PORT>` (default 3000 or as set in `.env`).

---
