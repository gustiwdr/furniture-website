Tentu, ini adalah penjelasan lengkap mengenai prinsip ABL dan Big Data yang telah kita terapkan dalam proyek ini. Anda bisa menggunakan materi ini langsung untuk laporan magang Anda pada subbab "Tahapan Pengembangan Proyek".

---

### **Penjelasan untuk Laporan Magang: Tahapan Pengembangan Proyek**

Pada pengembangan proyek e-commerce ini, dua konsep utama menjadi landasan arsitektur dan fungsionalitas: **Arsitektur Berbasis Layanan (ABL)** dan prinsip-prinsip **Big Data**. Pendekatan ini dipilih untuk memastikan proyek tidak hanya fungsional, tetapi juga _scalable_ (dapat dikembangkan), _maintainable_ (mudah dirawat), dan mampu menangani volume data yang besar secara efisien.

---

### **1. Implementasi Arsitektur Berbasis Layanan (ABL)**

**Konsep Dasar ABL:**
Arsitektur Berbasis Layanan (atau dalam konteks ini, _Application/Business Logic layer_) adalah pendekatan arsitektur perangkat lunak di mana logika bisnis aplikasi dipisahkan dari lapisan antarmuka pengguna (UI). Tujuannya adalah untuk menciptakan sistem yang modular, di mana setiap bagian memiliki tanggung jawab yang jelas dan dapat dikembangkan atau diganti tanpa mengganggu bagian lain.

Berikut adalah prinsip-prinsip ABL yang diterapkan dalam proyek ini:

#### **a. Separation of Concerns (Pemisahan Tanggung Jawab)**

Prinsip ini adalah inti dari ABL. Kami membagi aplikasi menjadi beberapa lapisan yang berbeda, masing-masing dengan tugas spesifik:

- **Presentation Layer (Lapisan Tampilan):** Bertanggung jawab penuh untuk menampilkan data dan menangkap interaksi pengguna. Lapisan ini tidak tahu-menahu tentang bagaimana data didapatkan atau diproses.

  - **File Terkait:**
    - page.tsx: Halaman utama toko yang menampilkan produk dan kontrol UI (filter, sort, pagination). Komponen ini hanya memanggil _custom hook_ untuk mendapatkan data dan fungsi yang diperlukan.
    - ProductCard.tsx: Komponen yang hanya bertugas menampilkan data satu produk. Komponen ini menerima data melalui `props` dan tidak peduli dari mana data itu berasal.

- **Hook Layer (Lapisan State Management):** Bertindak sebagai jembatan antara _Presentation Layer_ dan _Service Layer_. Lapisan ini mengelola _state_ (seperti data produk, status _loading_, _error_) dan memanggil layanan yang sesuai untuk mengambil atau memanipulasi data.

  - **File Terkait:**
    - useBigDataProducts.ts: _Custom hook_ yang berisi semua logika untuk mengelola state produk, termasuk memanggil `bigDataProductService` saat filter atau halaman berubah.

- **Service Layer (Lapisan Layanan/Logika Bisnis):** Di sinilah semua "otak" aplikasi berada. Lapisan ini bertanggung jawab untuk mengimplementasikan logika bisnis seperti memfilter, menyortir, dan melakukan paginasi data.

  - **File Terkait:**
    - bigDataProductService.ts: Kelas ini berisi semua metode untuk memanipulasi data produk dalam jumlah besar. Jika di masa depan kita beralih ke API sungguhan, kita hanya perlu mengubah file ini tanpa menyentuh lapisan UI.

- **Data Contract Layer (Lapisan Kontrak Data):** Mendefinisikan struktur data yang digunakan di seluruh aplikasi. Ini memastikan konsistensi data antara semua lapisan.
  - **File Terkait:**
    - product.ts: Berisi _interface_ TypeScript seperti `Product`, `ProductFilters`, dan `ProductSortOptions` yang menjadi "kontrak" atau standar data yang digunakan.

#### **b. Loose Coupling (Keterkaitan yang Longgar)**

Setiap lapisan tidak bergantung secara kaku pada implementasi lapisan lainnya. Misalnya, page.tsx tidak tahu bahwa data berasal dari `bigDataProductService`. Ia hanya tahu cara menggunakan _hook_ `useBigDataProducts`. Ini berarti kita bisa mengganti `bigDataProductService` dengan layanan lain (misalnya, yang terhubung ke database online) tanpa perlu mengubah kode di halaman `Shop`.

---

### **2. Implementasi Prinsip-Prinsip Big Data**

Meskipun kita tidak menggunakan _framework_ Big Data seperti Hadoop atau Spark, proyek ini dirancang untuk mensimulasikan dan menangani tantangan yang muncul pada data dalam jumlah besar.

#### **a. Volume (Volume Data Besar)**

Prinsip ini mengacu pada kemampuan sistem untuk menangani data dalam jumlah besar.

- **Implementasi:** Kami membuat sebuah generator data yang mampu menciptakan 1.500+ produk dengan atribut yang beragam. Ini mensimulasikan katalog produk yang besar dan realistis.
  - **File Terkait:**
    - bigDataGenerator.ts: Kelas yang bertanggung jawab untuk menghasilkan dataset produk dalam jumlah besar secara dinamis.

#### **b. Velocity (Kecepatan Pemrosesan)**

Prinsip ini mengacu pada kecepatan data masuk dan kebutuhan untuk memprosesnya secara cepat (real-time).

- **Implementasi:** Logika filtering dan sorting dieksekusi secara _client-side_ dengan sangat cepat. Pengguna bisa menerapkan filter atau mengubah urutan produk dan melihat hasilnya secara instan tanpa menunggu _reload_ halaman.
  - **File Terkait:**
    - bigDataProductService.ts: Metode `filterProducts` dan `sortProducts` di dalam file ini dirancang untuk bekerja secara efisien pada array data yang besar, memberikan respons yang cepat terhadap input pengguna.

#### **c. Variety (Keragaman Tipe Data)**

Prinsip ini mengacu pada penanganan berbagai jenis data, baik yang terstruktur maupun tidak.

- **Implementasi:** Model data `Product` dirancang untuk mencakup berbagai tipe data, seperti:
  - **String:** `name`, `description`, `category`
  - **Number:** `price`, `rating`, `sales`
  - **Array:** `tags`, `colors`
  - **Object:** `dimensions`
  - **File Terkait:**
    - product.ts: _Interface_ `Product` mendefinisikan skema data yang kaya dan beragam ini.

#### **d. Pagination (Teknik Manajemen Memori)**

Ini adalah teknik kunci untuk menangani **Volume** data di sisi klien. Daripada merender 1.500+ produk sekaligus (yang akan membuat browser _crash_), kami hanya menampilkan sebagian kecil data per halaman.

- **Implementasi:**
  1.  Semua data (1.500+ produk) dimuat ke dalam memori di `bigDataProductService`.
  2.  Setelah difilter dan diurutkan, metode `paginateProducts` hanya "memotong" dan mengirimkan sejumlah kecil produk (misalnya, 16 produk) ke lapisan UI.
  3.  UI kemudian hanya perlu merender 16 produk tersebut, membuat aplikasi tetap ringan dan responsif.
  - **File Terkait:**
    - bigDataProductService.ts: Metode `paginateProducts` adalah inti dari implementasi ini.
    - page.tsx: Komponen ini menampilkan tombol-tombol paginasi (`Previous`, `Next`, nomor halaman) dan memanggil fungsi seperti `nextPage`, `prevPage`, `goToPage` yang disediakan oleh _hook_ `useBigDataProducts`.

Dengan mengadopsi kedua pendekatan ini, proyek ini tidak hanya memenuhi kebutuhan fungsional dasar sebuah e-commerce, tetapi juga membangun fondasi yang kuat untuk pengembangan dan penskalaan di masa depan.
