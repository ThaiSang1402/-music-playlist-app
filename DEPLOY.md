# Deploy to Render - Hướng dẫn Deploy

## 🚀 Cách deploy ứng dụng Music Playlist lên Render

### 1. Chuẩn bị

- Tài khoản GitHub
- Tài khoản Render (miễn phí tại [render.com](https://render.com))
- Code đã được push lên GitHub repository

### 2. Push code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit - Music Playlist App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Deploy trên Render

1. **Đăng nhập Render**: Truy cập [render.com](https://render.com) và đăng nhập
2. **Tạo Static Site**: Click "New" → "Static Site"
3. **Connect Repository**: Chọn GitHub repository của bạn
4. **Cấu hình build**:
   - **Name**: `music-playlist-app` (hoặc tên bạn muốn)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build:web`
   - **Publish Directory**: `dist`

### 4. Cấu hình tự động (Optional)

File `render.yaml` đã được tạo sẵn với cấu hình:

```yaml
services:
  - type: web
    name: music-playlist-app
    env: static
    buildCommand: npm install && npm run build:web
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### 5. Kiểm tra deployment

- Render sẽ tự động build và deploy
- Thời gian build: ~3-5 phút
- URL sẽ có dạng: `https://music-playlist-app.onrender.com`

### 6. Cập nhật code

Mỗi khi push code mới lên GitHub, Render sẽ tự động rebuild và deploy.

```bash
git add .
git commit -m "Update features"
git push origin main
```

## 🎵 Tính năng ứng dụng

- **Giao diện Spotify-like**: Dark theme với gradient đẹp mắt
- **Music Player**: Phát nhạc với lyrics hiển thị
- **Playlist Management**: Xem danh sách bài hát
- **Responsive Design**: Hoạt động tốt trên mobile và desktop

## 🛠 Tech Stack

- **Frontend**: React Native Web + Expo Router
- **Styling**: React Native StyleSheet với Linear Gradient
- **Build**: Expo CLI
- **Deploy**: Render Static Site

## 📱 Demo

Sau khi deploy thành công, bạn có thể:
- Truy cập web app trên bất kỳ thiết bị nào
- Chia sẻ link với bạn bè
- Sử dụng như một PWA (Progressive Web App)

---

**Lưu ý**: Đây là phiên bản web của ứng dụng React Native. Để build mobile app, sử dụng `expo build` hoặc EAS Build.