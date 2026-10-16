# Hướng dẫn triển khai website 20/10 Surprise cho Trang ❤️

## 📋 Tổng quan
Website đã được build thành công và sẵn sàng để triển khai. Dưới đây là hướng dẫn chi tiết để deploy lên GitHub Pages hoặc Vercel.

---

## 🚀 Cách 1: Deploy lên GitHub Pages (Miễn phí)

### Bước 1: Tạo GitHub Repository
1. Đăng nhập vào [GitHub](https://github.com)
2. Click vào "+" → "New repository"
3. Đặt tên repository (ví dụ: `20-10-surprise-for-trang`)
4. Chọn "Public" hoặc "Private" (Public sẽ dễ dàng chia sẻ link)
5. Click "Create repository"

### Bước 2: Push code lên GitHub
Mở terminal tại thư mục dự án `D:\20thang10` và chạy:

```bash
git init
git add .
git commit -m "Initial commit: 20/10 Surprise Website for Trang"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/20-10-surprise-for-trang.git
git push -u origin main
```

*Lưu ý: Thay `TEN_TAI_KHOAN` bằng username GitHub của bạn*

### Bước 3: Cài đặt GitHub Pages
1. Vào repository trên GitHub
2. Click vào **Settings** → **Pages**
3. Trong phần "Build and deployment":
   - Source: chọn **Deploy from a branch**
   - Branch: chọn **main** và folder **/(root)**
4. Click **Save**

### Bước 4: Cấu hình Vite cho GitHub Pages
Mở file `vite.config.ts` và cập nhật:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/20-10-surprise-for-trang/', // Thay bằng tên repository của bạn
})
```

Sau đó rebuild:

```bash
npm run build
```

Push thay đổi lên GitHub:

```bash
git add .
git commit -m "Configure base path for GitHub Pages"
git push
```

### Bước 5: Lấy link website
Sau 1-2 phút, GitHub sẽ deploy website. Link sẽ có dạng:
```
https://TEN_TAI_KHOAN.github.io/20-10-surprise-for-trang/
```

---

## ☁️ Cách 2: Deploy lên Vercel (Nhanh hơn, dễ hơn)

### Bước 1: Tạo tài khoản Vercel
1. Truy cập [Vercel](https://vercel.com)
2. Đăng ký tài khoản (có thể dùng GitHub, GitLab hoặc email)

### Bước 2: Import từ GitHub
1. Click **"Add New..."** → **"Project"**
2. Chọn repository `20-10-surprise-for-trang` từ GitHub
3. Cấu hình:
   - Framework Preset: **Vite**
   - Root Directory: **./**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**

### Bước 3: Lấy link website
Vercel sẽ tự động deploy và cung cấp link dạng:
```
https://20-10-surprise-for-trang.vercel.app
```

---

## 📱 Cách 3: Tải file và gửi trực tiếp

Nếu không muốn deploy online, bạn có thể:

### Bước 1: Build production
```bash
npm run build
```

### Bước 2: Tìm file build
File build sẽ nằm trong thư mục `dist/` tại `D:\20thang10\dist\`

### Bước 3: Gửi cho chị Trang
- Nén thư mục `dist/` thành file ZIP
- Gửi file ZIP qua email, Messenger, Zalo, etc.
- Chị Trang chỉ cần giải nén và mở file `index.html` trong trình duyệt

---

## ✅ Kiểm tra trước khi gửi

### Chạy dev server để kiểm tra:
```bash
npm run dev
```
Mở http://localhost:5173 và kiểm tra:
- [ ] Pháo hoa trái tim chạy mượt
- [ ] Thiệp 20/10 xuất hiện sau 3 giây
- [ ] Nút "MỞ QUÀ" hoạt động
- [ ] Lá thư hiện ra với nội dung đúng
- [ ] Hiệu ứng animations mượt mà
- [ ] Responsive trên điện thoại

### Build production để kiểm tra:
```bash
npm run build
npm run preview
```
Mở http://localhost:4173 để kiểm tra phiên bản production

---

## 🎨 Tùy chỉnh thêm (nếu cần)

### Thay đổi nội dung thư
Mở file `src/components/Letter.tsx` và chỉnh sửa biến `letterLines`:

```typescript
const letterLines = [
  "Chúc chị Trang 20/10 vui vẻ nha ❤️",
  "Chúc chị luôn xinh đẹp, vui vẻ, gặp thật nhiều điều may mắn và lúc nào cũng tràn đầy năng lượng tích cực.",
  "Mong rằng hôm nay chị sẽ nhận được thật nhiều niềm vui và những điều dễ thương.",
  "Chúc chị có một ngày 20/10 thật đặc biệt và đáng nhớ nha! 💗",
];
```

### Thay đổi màu sắc
Mở file `src/App.tsx` và chỉnh sửa gradient background:

```typescript
background: 'linear-gradient(135deg, #FFE4E1 0%, #FFB6C1 50%, #FFC0CB 100%)',
```

### Thay đổi thời gian hiển thị
Mở file `src/App.tsx` và chỉnh sửa:

```typescript
// Thời gian chờ trước khi hiện thiệp (ms)
const timer = setTimeout(() => {
  setShowCard(true);
}, 3000); // 3000ms = 3 giây
```

---

## 🐛 Khắc phục sự cố

### Lỗi build không thành công
```bash
# Xóa node_modules và cài lại
rm -rf node_modules
npm install
npm run build
```

### Lỗi TypeScript
```bash
# Kiểm tra lỗi TypeScript
npx tsc --noEmit
```

### Pháo hoa không chạy
- Kiểm tra console browser (F12) xem có lỗi không
- Đảm bảo trình duyệt hỗ trợ Canvas API

---

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra console browser (F12 → Console)
2. Kiểm tra terminal xem có lỗi không
3. Xem lại các bước trên

---

## 🎉 Chúc mừng!

Website đã sẵn sàng để gửi cho chị Trang. Hy vọng chị sẽ thích món quà này! ❤️

Link demo (nếu đã deploy): [Link sẽ được điền sau khi deploy]
