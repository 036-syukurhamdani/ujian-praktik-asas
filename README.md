# MiniSocial React App

#Deskripsi
Project ini adalah website sosial media sederhana menggunakan React JS.
Data user diambil dari API JSONPlaceholder.

#Fitur
- Menampilkan data user
- Search username
- Like button
- Follow button
- Avatar otomatis
- Tampilan modern
#Penjelasan React Hook

## 1. useState
Digunakan untuk menyimpan data seperti:
- users
- like
- follow
- filteredUsers

## 2. useEffect
Digunakan untuk mengambil data API saat website pertama dibuka.

Contoh:

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));
}, []);
