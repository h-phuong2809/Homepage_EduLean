# CourseAPI - ASP.NET Core Backend

RESTful API backend cho Course Learning Platform, xây dựng với ASP.NET Core 10, Entity Framework Core, và SQL Server.

## 📋 Yêu Cầu

- .NET SDK 10.0 hoặc cao hơn
- SQL Server (LocalDB hoặc Full version)
- Visual Studio Code hoặc Visual Studio

## 🚀 Hướng Dẫn Cài Đặt

### 1. Clone và Di Chuyển Vào Thư Mục

```bash
cd backend/CourseAPI
```

### 2. Khôi Phục Dependencies

```bash
dotnet restore
```

### 3. Cấu Hình Database

Chỉnh sửa file `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=CourseDB;Trusted_Connection=true;TrustServerCertificate=true"
  }
}
```

**Tùy Chọn:**
- `(localdb)\mssqllocaldb` - LocalDB (mặc định)
- `localhost` - SQL Server local
- Connection string tùy chỉnh cho server khác

### 4. Chạy Ứng Dụng

```bash
dotnet run
```

API sẽ khởi động tại:
- **HTTP**: `http://localhost:5000`
- **HTTPS**: `https://localhost:7001`

Database sẽ **tự động tạo** khi app chạy lần đầu.

---

## 📚 API Endpoints

### Courses Controller: `/api/courses`

#### GET - Lấy Tất Cả Courses
```http
GET /api/courses
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "React Basics",
    "description": "Learn React fundamentals",
    "instructor": "John Doe",
    "price": 99.99,
    "category": "Web Development",
    "duration": 20,
    "studentCount": 150,
    "rating": 4.5,
    "createdAt": "2026-04-24T12:00:00Z",
    "updatedAt": "2026-04-24T12:00:00Z"
  }
]
```

#### GET - Lấy Course Theo ID
```http
GET /api/courses/{id}
```

#### POST - Tạo Course Mới
```http
POST /api/courses
Content-Type: application/json

{
  "title": "Angular Course",
  "description": "Master Angular framework",
  "instructor": "Jane Smith",
  "price": 129.99,
  "category": "Web Development",
  "duration": 30,
  "studentCount": 0,
  "rating": 0
}
```

#### PUT - Cập Nhật Course
```http
PUT /api/courses/{id}
Content-Type: application/json

{
  "id": 1,
  "title": "Updated Title",
  "description": "Updated description",
  ...
}
```

#### DELETE - Xóa Course
```http
DELETE /api/courses/{id}
```

#### GET - Tìm Kiếm Course
```http
GET /api/courses/search/{searchTerm}
```

---

## 🗄️ Database Schema

### Courses Table
```sql
- Id (int, Primary Key)
- Title (nvarchar(200))
- Description (nvarchar(1000))
- Instructor (nvarchar(max))
- Price (decimal)
- Category (nvarchar(max))
- Duration (int) - hours
- StudentCount (int)
- Rating (float)
- CreatedAt (datetime2)
- UpdatedAt (datetime2)
```

### Categories Table
```sql
- Id (int, Primary Key)
- Name (nvarchar(100))
- Description (nvarchar(max))
- CreatedAt (datetime2)
```

---

## 📦 Migrations

### Tạo Migration Mới
```bash
dotnet ef migrations add MigrationName
```

### Áp Dụng Migration
```bash
dotnet ef database update
```

### Xem Migrations
```bash
dotnet ef migrations list
```

---

## 🔧 CORS Configuration

Frontend URLs được phép:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative dev server)

Thêm URL khác trong `appsettings.json`:
```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://yourdomain.com"
    ]
  }
}
```

---

## 🔐 HTTPS Development

Để tin tưởng HTTPS certificate:
```bash
dotnet dev-certs https --trust
```

---

## 📝 Environment Variables

### Development
```bash
ASPNETCORE_ENVIRONMENT=Development
```

### Production
```bash
ASPNETCORE_ENVIRONMENT=Production
```

---

## 🐛 Troubleshooting

### Database Connection Error
- Kiểm tra SQL Server đã chạy
- Xác nhận connection string trong `appsettings.json`
- Chạy: `dotnet ef database update`

### Port Already in Use
- Ports mặc định: 5000 (HTTP), 7001 (HTTPS)
- Thay đổi trong `launchSettings.json`

### Migration Issues
```bash
# Drop database và tạo lại
dotnet ef database drop
dotnet ef database update
```

---

## 📚 Công Nghệ Sử Dụng

- **Framework**: ASP.NET Core 10
- **ORM**: Entity Framework Core 10
- **Database**: SQL Server
- **API Style**: RESTful

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Created for Course Learning Platform
