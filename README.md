# EduLearn - Nền Tảng E-Learning

![Logo EduLearn](public/LMSicon.png)

Một nền tảng học trực tuyến tương tác được xây dựng với các công nghệ web hiện đại, cung cấp cho học sinh và giáo viên trải nghiệm học tập liền mạch.

## 🚀 Tính Năng

### Dành Cho Học Sinh
- **Bảng Điều Khiển Học Tập Tương Tác** - Truy cập khóa học từ bất kỳ nơi đâu
- **Khám Phá Khóa Học** - Duyệt các khóa học nổi bật với đánh giá và bình luận
- **Theo Dõi Tiến Độ** - Giám sát tiến độ học tập và thành tích
- **Phần Bài Tập** - Luyện tập với các bài tập tương tác

### Dành Cho Giáo Viên
- **Quản Lý Khóa Học** - Tạo và quản lý nội dung giáo dục
- **Phân Tích Học Sinh** - Theo dõi hiệu suất và mức độ tham gia của học sinh
- **Công Cụ Tạo Nội Dung** - Xây dựng các tài liệu học tập toàn diện

### Tính Năng Nền Tảng
- **Thiết Kế Đáp Ứng** - Tối ưu hóa cho desktop, tablet và thiết bị di động
- **Động Hoạ Mượt Mà** - Được cung cấp bởi Framer Motion để tăng cường UX
- **Giao Diện Hiện Đại** - Xây dựng với Tailwind CSS cho phong cách đẹp và nhất quán
- **Hiệu Suất Cao** - Quy trình phát triển và xây dựng được cung cấp bởi Vite

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Icons:** Material Symbols

### Backend
- **Framework:** ASP.NET Core 10
- **ORM:** Entity Framework Core 10
- **Database:** SQL Server / In-Memory (Development)
- **API Style:** RESTful

### DevOps
- **Version Control:** Git
- **Package Manager:** npm (Frontend), dotnet (Backend)
- **Linter:** ESLint

## 📦 Cài Đặt

### 1. Clone Repository
```bash
git clone <repository-url>
cd project
```

### 2. Cài Đặt Frontend
```bash
cd frontend
npm install
npm run dev
```
Truy cập: **http://localhost:5173**

### 3. Cài Đặt Backend
```bash
cd backend/CourseAPI
dotnet restore
dotnet run
```
Truy cập: **http://localhost:5000** hoặc **https://localhost:7001**

## 📜 Frontend Scripts

- `npm run dev` - Khởi động dev server (port 5173)
- `npm run build` - Build cho production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint

## 📜 Backend Commands

- `dotnet run` - Chạy dev server
- `dotnet build` - Build project
- `dotnet test` - Chạy tests
- `dotnet ef migrations add <name>` - Tạo migration
- `dotnet ef database update` - Apply migrations

## 🏗️ Cấu Trúc Dự Án (Monorepo)

```
project/
├── frontend/                    # React Frontend (Vite)
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── CourseCard.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── CourseListAPI.jsx
│   │   │   └── ...
│   │   ├── pages/              # Pages
│   │   │   ├── Home.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   └── Product.jsx
│   │   ├── services/           # API services
│   │   │   └── courseAPI.js   # Axios API client
│   │   ├── assets/             # Images, icons
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/                 # Static files
│   ├── .env                    # Environment config
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── backend/                    # ASP.NET Core Backend
│   └── CourseAPI/
│       ├── Models/            # Data models
│       │   ├── Course.cs
│       │   └── Category.cs
│       ├── Controllers/        # API endpoints
│       │   └── CoursesController.cs
│       ├── Data/              # DbContext
│       │   └── AppDbContext.cs
│       ├── Migrations/        # EF Core migrations
│       ├── Properties/
│       ├── Program.cs         # App configuration
│       ├── appsettings.json   # Settings & DB connection
│       ├── CourseAPI.csproj
│       ├── CourseAPI.http
│       ├── .gitignore
│       └── README.md          # Backend docs
│
├── .gitignore
└── README.md                  # This file
```

## 🎨 Hệ Thống Thiết Kế

### Màu Sắc
- **Chính:** `#1c74e9` - Màu thương hiệu chính
- **Nền:** Sáng `#f6f7f8` / Tối `#111821`
- **Văn Bản:** Tối `#0f172a` / Sáng `#f8fafc`

### Hệ Thống Chữ
- **Font:** Inter (Google Fonts)
- **Độ Dày:** 400, 500, 600, 700, 800, 900

## 🔧 Phát Triển

### Chất Lượng Mã
- Cấu hình ESLint để đảm bảo phong cách mã nhất quán
- Kích hoạt linting React Hooks
- Tải lại nóng để phản hồi tức thời

### Tiếp Cận Styling
- CSS dựa trên tiện ích với Tailwind CSS
- Thuộc tính tùy chỉnh CSS cho các biến chủ đề
- Nguyên tắc thiết kế đáp ứng

### Chiến Lược Hiệu Ứng
- Chuyển trang với Framer Motion
- Các tương tác vi mô mượt mà
- Hiệu ứng được tối ưu hóa về hiệu suất

## 🚀 Triển Khai

### Frontend
1. **Build project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy `dist` folder** tới Netlify, Vercel, hoặc static hosting

### Backend
1. **Publish project**
   ```bash
   cd backend/CourseAPI
   dotnet publish -c Release
   ```

2. **Deploy tới Azure App Service, AWS, hoặc server khác**

---

## 📡 API Documentation

### Base URL
- **Development**: `http://localhost:5000/api` 
- **Production**: `https://api.yourdomain.com/api`

### Courses Endpoint: `/api/courses`

| Method | Endpoint | Mô Tả |
|--------|----------|-------|
| **GET** | `/api/courses` | Lấy tất cả courses |
| **GET** | `/api/courses/{id}` | Lấy course theo ID |
| **POST** | `/api/courses` | Tạo course mới |
| **PUT** | `/api/courses/{id}` | Cập nhật course |
| **DELETE** | `/api/courses/{id}` | Xóa course |
| **GET** | `/api/courses/search/{term}` | Tìm kiếm courses |

### Sample Requests

**GET - Lấy tất cả courses**
```bash
curl http://localhost:5000/api/courses
```

**POST - Tạo course**
```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -d '{
    "title": "React Advanced",
    "description": "Master React patterns",
    "instructor": "John Doe",
    "price": 149.99,
    "category": "Web Development",
    "duration": 25,
    "studentCount": 0,
    "rating": 0
  }'
```

---

## 🔄 Frontend-Backend Integration

File: `frontend/src/services/courseAPI.js`

```javascript
import { courseAPI } from '../services/courseAPI';

// Fetch all courses
const courses = await courseAPI.getAllCourses();

// Get course by ID
const course = await courseAPI.getCourseById(1);

// Create course
await courseAPI.createCourse(courseData);

// Update course
await courseAPI.updateCourse(id, courseData);

// Delete course
await courseAPI.deleteCourse(id);

// Search courses
const results = await courseAPI.searchCourses('React');
```

---

## 🐙 Git Workflow

### Clone & Setup
```bash
git clone https://github.com/your-username/Homepage_EduLean.git
cd project
```

### Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Commit Changes
```bash
git add .
git commit -m "feat: describe your changes

- Detail 1
- Detail 2"
```

### Push & Create PR
```bash
git push origin feature/your-feature-name
# Then create PR on GitHub
```

### Merge to Main
```bash
git checkout main
git pull origin main
git merge feature/your-feature-name
git push origin main
```

### Commit Convention
- `feat:` - Tính năng mới
- `fix:` - Sửa bug
- `docs:` - Cập nhật tài liệu
- `refactor:` - Cấu trúc lại code
- `chore:` - Cập nhật dependencies

---

## 🔧 Environment Variables

### Frontend
File: `frontend/.env`
```
VITE_API_URL=http://localhost:5000/api
```

File: `frontend/.env.production`
```
VITE_API_URL=https://api.yourdomain.com/api
```

### Backend
File: `backend/CourseAPI/appsettings.json`
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=CourseDB;Trusted_Connection=true;"
  },
  "Cors": {
    "AllowedOrigins": ["http://localhost:5173"]
  }
}
```

---

## 🚨 Troubleshooting

### Frontend Issues
- **API không respond**: Kiểm tra backend đang chạy, check `VITE_API_URL`
- **Port 5173 đã dùng**: Thay đổi port trong `vite.config.js`
- **CORS error**: Thêm frontend URL vào `appsettings.json` của backend

### Backend Issues
- **Database connection error**: Kiểm tra SQL Server, check connection string
- **Migration error**: Chạy `dotnet ef database drop` rồi `dotnet ef database update`
- **Port 5000/7001 đã dùng**: Thay đổi trong `launchSettings.json`

---

**Xây dựng bằng ❤️ sử dụng React, Vite, ASP.NET Core & EF Core** 
