# Deployment Changelog & AI Handover Log

## Ngày 21/04/2026

### 1. Đẩy dự án lên GitHub
- Khởi tạo git, commit toàn bộ source code lên repo: https://github.com/rikandrew-byte/Hoa_hoc

### 2. Deploy lên Render & Vercel
- Cấu hình file render.yaml để deploy static site trên Render
- Cập nhật biến môi trường từ VITE_GOOGLE_API_KEY sang VITE_GROQ_API_KEY
- Đảm bảo secret Groq API key được cấu hình đúng trên Render Dashboard

### 3. Chuyển đổi AI từ Gemini sang Groq
- Gỡ bỏ hoàn toàn Google Gemini API key và code liên quan
- Cài đặt Groq SDK, sau đó chuyển sang dùng Groq REST API vì SDK không hỗ trợ browser
- Đảm bảo không để lộ API key trong repo (chỉ để placeholder trong .env.example)
- Đổi model Groq từ `mixtral-8x7b-32768` (đã bị decommissioned) sang `llama3-70b-8192` (model còn hoạt động)
- Đảm bảo system prompt được truyền đúng qua messages array, không có property system ngoài cùng

### 4. Kiểm tra lỗi & fix
- Fix lỗi 400 do property system không hợp lệ
- Fix lỗi model không còn hoạt động
- Đã test thành công với model mới, API trả về kết quả hợp lệ

### 5. Đã push toàn bộ thay đổi lên GitHub
- Branch: main
- Link: https://github.com/rikandrew-byte/Hoa_hoc

---

## Handover cho GCA (hoặc AI khác)
- Tiếp tục phát triển dự án tại repo trên
- Nếu cần đổi model Groq, xem danh sách model mới nhất tại https://console.groq.com/docs/models
- Nếu cần đổi nền tảng AI, cập nhật lại logic gọi API trong src/components/AIChatbox.tsx
- Đảm bảo không để lộ API key thật trong repo công khai
- Mọi thay đổi đều commit rõ ràng, ghi chú lý do trong changelog này

---

**Kết thúc phiên làm việc của Copilot.** 

---

## Ngày 22/04/2026 (Gemini Code Assist Handover)

### 1. Phân tích và sửa lỗi ban đầu
- **Bảo mật**: Phát hiện và đề xuất loại bỏ API key bị lộ trong `DEPLOYMENT_NOTES.md`. Đã xóa file này khỏi project.
- **Sửa lỗi dữ liệu**: Sửa lỗi logic trong `src/data/curriculum.ts`, gán đúng bộ câu hỏi cho bài "Sự oxi hóa và Phản ứng hóa hợp".
- **Đồng bộ giao diện**: Cập nhật văn bản trong `App.tsx` và `AIChatbox.tsx` từ "Gemini" sang "Groq".
- **Cải thiện CSS**: Loại bỏ quy tắc `!important` không cần thiết trong `src/index.css` để tăng tính nhất quán và dễ bảo trì.

### 2. Tái cấu trúc (Refactor) mã nguồn
- Tách component `App.tsx` thành 3 component con có trách nhiệm rõ ràng:
  - `src/components/Header.tsx`: Quản lý thanh điều hướng trên cùng.
  - `src/components/Sidebar.tsx`: Quản lý danh sách bài học.
  - `src/components/MainContent.tsx`: Quản lý vùng hiển thị nội dung chính.
- Cấu trúc mới giúp mã nguồn gọn gàng, dễ đọc và dễ mở rộng hơn.

### 3. Commit và Push các thay đổi
- Gộp các thay đổi trên vào một commit và đẩy lên branch `main` của repository.