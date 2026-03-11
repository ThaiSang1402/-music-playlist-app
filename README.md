# 🎵 Music Playlist App

Ứng dụng nghe nhạc với giao diện Spotify-like được xây dựng bằng React Native Web và Expo Router.

![Music Playlist App](https://img.shields.io/badge/React%20Native-Web-blue) ![Expo](https://img.shields.io/badge/Expo-Router-black) ![Deploy](https://img.shields.io/badge/Deploy-Render-green)

## ✨ Tính năng

- 🎨 **Giao diện đẹp mắt**: Dark theme với gradient như Spotify
- 🎵 **Music Player**: Phát nhạc với lyrics hiển thị đầy đủ
- 📱 **Responsive Design**: Hoạt động tốt trên cả mobile và desktop
- 🎧 **Playlist Management**: Quản lý danh sách bài hát
- 🌟 **8 bài hát Việt Nam**: Dữ liệu mẫu với lyrics đầy đủ

## 🚀 Demo Live

🔗 **[Xem Demo](https://music-playlist-app.onrender.com)** (sẽ có sau khi deploy)

## 📱 Screenshots

- **Home Screen**: Giao diện chính với playlist và bài hát gần đây
- **Music Player**: Trình phát nhạc với lyrics cuộn
- **Playlist View**: Danh sách tất cả bài hát

## 🛠 Tech Stack

- **Frontend**: React Native Web
- **Navigation**: Expo Router
- **Styling**: StyleSheet + Linear Gradient
- **Build Tool**: Expo CLI
- **Deployment**: Render (Static Site)

## 🏃‍♂️ Chạy Local

### Yêu cầu
- Node.js 18+
- npm hoặc yarn

### Cài đặt
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/music-playlist-app.git
cd music-playlist-app

# Cài đặt dependencies
npm install

# Chạy development server
npm start

# Hoặc chạy web trực tiếp
npm run web
```

### Build Production
```bash
# Build cho web
npm run build:web

# Serve local (test)
npx serve dist -p 3000
```

## 🌐 Deploy lên Render

### Tự động Deploy
1. Fork repository này
2. Tạo Static Site trên [Render](https://render.com)
3. Connect với GitHub repository
4. Cấu hình:
   - **Build Command**: `npm install && npm run build:web`
   - **Publish Directory**: `dist`

### Manual Deploy
Xem hướng dẫn chi tiết trong [DEPLOY.md](./DEPLOY.md)

## 📁 Cấu trúc Project

```
music-playlist-app/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation
│   ├── music-player.tsx   # Music player page
│   └── playlist.tsx       # Playlist page
├── components/            # React components
├── data/                  # Mock data (songs)
├── assets/               # Images, icons
├── dist/                 # Build output
└── render.yaml           # Render config
```

## 🎵 Dữ liệu nhạc

Ứng dụng bao gồm 8 bài hát Việt Nam:
- Giọt Lệ Tình - Trí Hải
- Phải Đau Cuộc Đời - Chu Bin
- Nơi Này Có Anh - Sơn Tùng M-TP
- Và nhiều bài khác...

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Tác giả

**Sang Thai** - [GitHub](https://github.com/YOUR_USERNAME)

---

⭐ **Nếu project này hữu ích, hãy cho một star nhé!** ⭐