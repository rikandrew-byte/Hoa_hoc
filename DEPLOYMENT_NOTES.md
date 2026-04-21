# Ghi Chú Triển Khai - Lab Hóa Học 8

## Thông Tin Dự Án
- **Tên dự án**: Lab Hóa Học 8
- **Mô tả**: Ứng dụng học tập hóa học lớp 8 với AI chatbot, bảng tuần hoàn, và bài tập tương tác
- **Repository GitHub**: https://github.com/rikandrew-byte/Hoa_hoc.git
- **Thư mục local**: `d:/Software/học-tốt-hóa-học-8`

## Thông Tin API
- **API Key (Gemini)**: `AIzaSyBYMZtbdYxGvMPl1gZjz6pY_3CXvLgrzOU`
- **Biến môi trường**: `VITE_GOOGLE_API_KEY` hoặc `GOOGLE_API_KEY`
- **File cấu hình**: `.env` (đã tạo trong project)

## Các Thay Đổi Đã Thực Hiện

### 1. Cấu Hình API
- Tạo file `.env` với API key
- Cập nhật `vite.config.ts` để load biến môi trường
- Sửa `src/components/AIChatbox.tsx` để sử dụng `import.meta.env.VITE_GOOGLE_API_KEY`

### 2. Giao Diện
- **Light Mode**: Đổi nền sang tông xanh nhạt (`#e8f0f6`, `#dbe6ef`) để giảm chói mắt
- **Dark Mode**: 
  - Tất cả chữ màu trắng sáng (`#fff`)
  - Tiêu đề chương có màu sắc sinh động (teal, yellow, blue, pink)
  - Chữ trong khung thông tin sáng rõ (`#e2e8f0`, `#f1f5f9`)

### 3. Tên Tab
- "Dữ liệu" → "Lý thuyết"
- "Bản đồ" → "Bảng tuần hoàn"
- "Luyện tập" → "Bài tập"
- "Cố vấn" → "Thầy giáo AI"

### 4. Màu Sắc Khung Thông Tin
- **Core Concepts**: Nền xanh lá (`emerald-500/10`), viền xanh lá
- **Lab Requirements**: Nền xanh dương (`blue-500/10`), viền xanh dương
- Chữ trong khung: `text-slate-700 dark:text-slate-200 font-medium`

## Hướng Dẫn Deploy

### Deploy lên Vercel (Khuyến nghị)
1. Truy cập: https://vercel.com
2. Đăng nhập bằng GitHub
3. Click "New Project"
4. Chọn repository: `rikandrew-byte/Hoa_hoc`
5. Framework Preset: Vite (tự động phát hiện)
6. **Environment Variables**:
   - Key: `VITE_GOOGLE_API_KEY`
   - Value: `AIzaSyBYMZtbdYxGvMPl1gZjz6pY_3CXvLgrzOU`
7. Click "Deploy"
8. Đợi 2-3 phút để build và deploy

### Deploy lên Render
1. Truy cập: https://render.com
2. Đăng nhập bằng GitHub
3. Click "New +" → "Static Site"
4. Chọn repository: `rikandrew-byte/Hoa_hoc`
5. **Build Settings**:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
6. **Environment Variables**:
   - Key: `VITE_GOOGLE_API_KEY`
   - Value: `AIzaSyBYMZtbdYxGvMPl1gZjz6pY_3CXvLgrzOU`
7. Click "Create Static Site"
8. Đợi 5-10 phút để build và deploy

## Lệnh Git Đã Sử Dụng
```bash
git init
git add .
git commit -m "Initial commit: Lab Hóa Học 8 - Ứng dụng học tập hóa học lớp 8"
git branch -M main
git remote add origin https://github.com/rikandrew-byte/Hoa_hoc.git
git push -u origin main
```

## Lệnh Chạy Local
```bash
# Cài đặt dependencies
npm install

# Chạy dev server (cổng 5173)
npm run dev -- --port=5173

# Build production
npm run build

# Preview production build
npm run preview
```

## Cấu Trúc Project
```
học-tốt-hóa-học-8/
├── src/
│   ├── components/
│   │   ├── AIChatbox.tsx       # Chatbot AI với Gemini
│   │   ├── Exercise.tsx        # Component bài tập
│   │   └── PeriodicTable.tsx   # Bảng tuần hoàn
│   ├── data/
│   │   ├── curriculum.ts       # Dữ liệu chương trình học
│   │   └── questionBank.ts     # Ngân hàng câu hỏi
│   ├── App.tsx                 # Component chính
│   ├── index.css               # Styles chính
│   └── main.tsx                # Entry point
├── .env                        # Biến môi trường (local)
├── .env.example                # Template biến môi trường
├── vite.config.ts              # Cấu hình Vite
└── package.json                # Dependencies
```

## Lưu Ý Quan Trọng
1. **File `.env` không được push lên GitHub** (đã có trong `.gitignore`)
2. **Khi deploy**: Phải thêm biến môi trường `VITE_GOOGLE_API_KEY` trên platform
3. **API Key**: Nên tạo API key mới cho production và giới hạn domain
4. **Port**: Dev server chạy trên port 5173 (có thể thay đổi trong `package.json`)

## Troubleshooting

### Lỗi "API Key must be set"
- Kiểm tra file `.env` có tồn tại và có đúng key
- Restart dev server sau khi thêm `.env`
- Trên production: Kiểm tra biến môi trường đã được thêm chưa

### Lỗi Git Push
- Kiểm tra đã đăng nhập GitHub chưa
- Kiểm tra quyền truy cập repository
- Nếu repository đã có code: dùng `git pull origin main --rebase` trước khi push

### Build Errors
- Chạy `npm install` để cài đặt lại dependencies
- Xóa folder `node_modules` và `package-lock.json`, sau đó `npm install` lại
- Kiểm tra version Node.js (khuyến nghị >= 18)

## Liên Hệ & Hỗ Trợ
- **Author**: Andrew Tseng
- **GitHub**: https://github.com/rikandrew-byte
- **Repository**: https://github.com/rikandrew-byte/Hoa_hoc

---
*Ghi chú này được tạo tự động vào ngày 21/04/2026*
