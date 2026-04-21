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

---

## Ngày 23/04/2026 (Gemini Code Assist)

### 1. Cải thiện Giao diện (UI/UX) & Responsive
- **Tái cấu trúc `PeriodicTable.tsx`**: Xây dựng lại hoàn toàn component để responsive, cho phép cuộn ngang trên di động và thêm modal hiển thị chi tiết thông tin nguyên tố.
- **Cập nhật dữ liệu**: Thêm thuộc tính `row` và `col` vào `PERIODIC_ELEMENTS` để định vị chính xác trên lưới CSS.
- **Dọn dẹp CSS**: Loại bỏ các quy tắc `@media` ghi đè cứng nhắc trong `index.css` để tận dụng hệ thống responsive của Tailwind.

### 2. Bảo mật & Cấu hình
- **Xóa file nhạy cảm**: Xóa hoàn toàn file `DEPLOYMENT_NOTES.md` để loại bỏ các API key đã bị lộ khỏi repository.
- **Cập nhật giao diện AI**: Sửa tên model hiển thị trong `AIChatbox.tsx` thành `LLAMA3-70B`.

### 3. Sửa lỗi (Bug Fix)
- Sửa lỗi type trong `src/types.ts` bằng cách thêm `row` và `col` vào `Element` interface, đảm bảo tương thích với component `PeriodicTable` mới.

---

## Ngày 24/04/2026 (Gemini Code Assist)

### 1. Sửa lỗi (Bug Fix) - AI Model Decommissioned
- **Vấn đề**: Model `llama3-70b-8192` đã bị Groq ngừng hỗ trợ, gây ra lỗi 400 khi gọi API.
- **Giải pháp**: Cập nhật model AI trong `src/components/AIChatbox.tsx` sang model `llama3-8b-8192` đang hoạt động.
- **Giao diện**: Cập nhật tên model hiển thị trên giao diện chatbox cho phù hợp.

---

## Ngày 25/04/2026 (Gemini Code Assist)

### 1. Sửa lỗi (Bug Fix) - AI Model Decommissioned (Lần 2)
- **Vấn đề**: Model `llama3-8b-8192` tiếp tục bị Groq ngừng hỗ trợ, gây ra lỗi API.
- **Giải pháp**: Chuyển sang model `gemma-7b-it`, một model ổn định và được hỗ trợ rộng rãi.
- **Giao diện**: Cập nhật tên model hiển thị trên giao diện chatbox thành `GEMMA-7B`.

---

## Ngày 26/04/2026 (Gemini Code Assist)

### 1. Chuyển đổi AI trở lại Google Gemini
- **Lý do**: Theo yêu cầu, quay lại sử dụng API key cá nhân của người dùng.
- **Thực thi**: Cập nhật `AIChatbox.tsx` để sử dụng SDK `@google/genai` và model `gemini-pro`.
- **Cấu hình**: Ứng dụng giờ sẽ đọc key từ biến môi trường `VITE_GOOGLE_API_KEY`.

### 2. Cải thiện giao diện Dark Mode
- **Vấn đề**: Các màu nền và màu chữ trong chế độ tối quá gần nhau, gây khó đọc.
- **Giải pháp**: Tinh chỉnh lại bảng màu trong `src/index.css` để tăng độ tương phản. Loại bỏ các quy tắc CSS `!important` không cần thiết.