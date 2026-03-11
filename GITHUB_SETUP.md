# 🚀 Hướng dẫn tạo GitHub Repository

## Bước 1: Tạo Repository trên GitHub.com

1. **Truy cập GitHub**: Đi tới [github.com](https://github.com) và đăng nhập
2. **Tạo Repository mới**: 
   - Click nút **"New"** (màu xanh) hoặc **"+"** ở góc phải
   - Chọn **"New repository"**
3. **Cấu hình Repository**:
   - **Repository name**: `music-playlist-app`
   - **Description**: `🎵 Music Playlist App - Spotify-like interface built with React Native Web`
   - **Visibility**: Chọn **Public** (để deploy miễn phí trên Render)
   - **KHÔNG** check "Add a README file" (vì chúng ta đã có code)
   - Click **"Create repository"**

## Bước 2: Copy URL Repository

Sau khi tạo xong, GitHub sẽ hiển thị URL repository. Copy URL dạng:
```
https://github.com/YOUR_USERNAME/music-playlist-app.git
```

## Bước 3: Kết nối Local với GitHub

Chạy các lệnh sau trong terminal (thay YOUR_USERNAME bằng username GitHub của bạn):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/music-playlist-app.git
git push -u origin main
```

## Bước 4: Xác nhận Push thành công

Sau khi chạy lệnh push, bạn sẽ thấy:
- Code được upload lên GitHub
- Repository có đầy đủ files
- Sẵn sàng để deploy lên Render

---

**Lưu ý**: Thay `YOUR_USERNAME` bằng username GitHub thực tế của bạn!