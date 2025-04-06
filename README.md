# 📚 Bookshelf API

Bookshelf API adalah proyek submission untuk kelas **Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud** dari [Dicoding](https://www.dicoding.com/).

API ini dibangun menggunakan **Hapi.js** di atas **Node.js** dan dapat digunakan untuk menyimpan, menampilkan, memperbarui, dan menghapus data buku secara lokal (tanpa database).

> 🔗 Repo GitHub: [https://github.com/YunggiAlyana/BOOKSHELF-API](https://github.com/YunggiAlyana/BOOKSHELF-API)

---

## 🚀 Fitur

- ✅ Menambahkan buku
- 📖 Menampilkan seluruh buku (dengan filter opsional)
- 🔍 Menampilkan detail buku berdasarkan ID
- ✏️ Memperbarui informasi buku
- 🗑️ Menghapus buku

---

## 🛠️ Teknologi yang Digunakan

- [Node.js](https://nodejs.org/)
- [Hapi.js](https://hapi.dev/)
- [ESLint](https://eslint.org/) (untuk code style)
- [Nodemon](https://www.npmjs.com/package/nodemon) (dev only)

---

## ⚙️ Instalasi & Menjalankan Aplikasi

1. **Clone repositori:**
   ```bash
   git clone https://github.com/YunggiAlyana/BOOKSHELF-API.git
   cd BOOKSHELF-API
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan server:**
   ```bash
   npm run start
   ```

   Atau dalam mode development:
   ```bash
   npm run dev
   ```

---

## 📌 Endpoint API

### ➕ POST `/books`
Menambahkan buku baru  
**Request body:**
```json
{
  "name": "Buku Dicoding",
  "year": 2024,
  "author": "Yunggi",
  "summary": "Belajar back-end bersama Dicoding",
  "publisher": "Dicoding Publisher",
  "pageCount": 100,
  "readPage": 50,
  "reading": true
}
```

---

### 📚 GET `/books`
Menampilkan semua buku  
**Query opsional:** `name`, `reading`, `finished`

---

### 🔍 GET `/books/{bookId}`
Menampilkan detail buku berdasarkan ID

---

### ✏️ PUT `/books/{bookId}`
Mengubah data buku berdasarkan ID  
**Request body:** sama seperti `POST /books`

---

### 🗑️ DELETE `/books/{bookId}`
Menghapus buku berdasarkan ID

---

## ⚠️ Validasi

- `name` wajib diisi (tidak boleh kosong)
- `readPage` tidak boleh lebih besar dari `pageCount`

---

## 🗂️ Struktur Proyek

```
bookshelf-api/
├── node_modules/        (akan dibuat otomatis setelah npm install)
├── src/
│   ├── server.js        (entry point aplikasi)
│   ├── routes.js        (konfigurasi routing)
│   ├── handler.js       (logic handler untuk setiap endpoint)
│   └── books.js         (penyimpanan data buku)
├── .eslintrc.js         (konfigurasi ESLint untuk style guide)
├── .gitignore           (file untuk mengabaikan folder/file tertentu)
└── package.json         (konfigurasi project & dependencies)
```

---

## 👤 Author

- **Nama**: Yunggi Alyana Rahman
- **Kelas**: Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud
