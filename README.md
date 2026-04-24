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

- **Framework Frontend:** React 19
- **Công Cụ Xây Dựng:** Vite
- **Styling:** Tailwind CSS 4
- **Hiệu Ứng Động:** Framer Motion
- **Định Tuyến:** React Router DOM
- **Biểu Tượng:** Material Symbols
- **Kiểm Tra Mã:** ESLint
- **Trình Quản Lý Gói:** npm

## 📦 Cài Đặt

1. **Sao chép kho lưu trữ**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Cài đặt các phụ thuộc**
   ```bash
   npm install
   ```

3. **Khởi động máy chủ phát triển**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt của bạn**
   ```
   http://localhost:5173
   ```

## 📜 Các Script Có Sẵn

- `npm run dev` - Khởi động máy chủ phát triển với hot reload
- `npm run build` - Xây dựng cho sản xuất
- `npm run preview` - Xem trước bản dựng sản xuất cục bộ
- `npm run lint` - Chạy ESLint để kiểm tra chất lượng mã

## 🏗️ Cấu Trúc Dự Án

```
src/
├── components/          # Các thành phần UI có thể tái sử dụng
│   ├── AnimatedPage.jsx    # Hiệu ứng chuyển trang
│   ├── CourseCard.jsx      # Thành phần hiển thị khóa học
│   ├── FeaturedCourse.jsx  # Phần khóa học nổi bật
│   ├── Header.jsx          # Thanh điều hướng
│   ├── Hero.jsx           # Phần hero
│   └── ...
├── pages/               # Các thành phần trang
│   ├── Home.jsx         # Trang đích
│   ├── AboutUs.jsx      # Trang giới thiệu
│   └── Product.jsx      # Trang sản phẩm/dịch vụ
├── assets/              # Tài sản tĩnh
│   └── course/          # Hình ảnh khóa học
├── App.jsx              # Thành phần ứng dụng chính
├── main.jsx             # Điểm vào ứng dụng
└── index.css            # Kiểu toàn cầu
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

1. **Xây dựng dự án**
   ```bash
   npm run build
   ```

2. **Triển khai thư mục `dist`** tới nhà cung cấp lưu trữ của bạn (Netlify, Vercel, v.v.)

---

**Xây dựng bằng ❤️ sử dụng React & Vite**
"# Homepage_EduLean" 
