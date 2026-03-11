# Hướng dẫn kết nối Genymotion với React Native/Expo

## ✅ Đã cấu hình xong!

ADB của Genymotion đã được cấu hình và kết nối thành công.

## 🚀 Cách sử dụng (3 phương pháp):

### Phương pháp 1: Expo Go App (KHUYẾN NGHỊ - Đơn giản nhất)

1. **Cài Expo Go trên Genymotion:**
   - Mở Genymotion device
   - Mở Google Play Store trên device
   - Tìm và cài "Expo Go"

2. **Chạy ứng dụng:**
   ```bash
   npm start
   ```

3. **Kết nối:**
   - Mở Expo Go app trên Genymotion
   - Quét QR code từ terminal
   - Hoặc nhập URL thủ công

### Phương pháp 2: Tunnel Mode (Nếu QR không hoạt động)

```bash
npm run start:tunnel
```

Sau đó quét QR code mới từ Expo Go app.

### Phương pháp 3: Development Build (Cần Android SDK đầy đủ)

```bash
# Chạy script setup để cấu hình biến môi trường
.\setup-android.bat

# Sau đó start Expo
npm start

# Nhấn 'a' để mở trên Android
```

## Kiểm tra kết nối:

Để kiểm tra xem Genymotion device đã kết nối chưa:

```bash
.\setup-android.bat
```

Bạn sẽ thấy:
```
List of devices attached
192.168.56.101:5555     device
```

## Lưu ý:

1. **Luôn mở Genymotion device trước** khi chạy Expo
2. Device phải ở trạng thái "On" (màu xanh)
3. Nếu gặp lỗi, chạy lại `.\setup-android.bat`

## Troubleshooting:

### Nếu không thấy device:
1. Mở Genymotion
2. Start device "My Phone"
3. Chạy lại: `.\setup-android.bat`

### Nếu Expo không kết nối:
1. Dừng Expo (Ctrl+C)
2. Chạy: `.\setup-android.bat`
3. Chạy lại: `npm start`
4. Nhấn 'a' để mở Android

## Thành công! 🎉

Bây giờ bạn có thể phát triển ứng dụng React Native với Genymotion!


## 📱 Hướng dẫn chi tiết - Phương pháp 1 (Expo Go):

### Bước 1: Cài Expo Go trên Genymotion

1. Mở Genymotion device "My Phone"
2. Trên device, mở **Google Play Store**
3. Đăng nhập tài khoản Google (nếu chưa)
4. Tìm kiếm "**Expo Go**"
5. Nhấn **Install**

### Bước 2: Chạy Metro Bundler

Trong VS Code terminal:
```bash
npm start
```

Bạn sẽ thấy:
- QR code
- URL dạng: `exp://192.168.x.x:8081`

### Bước 3: Kết nối từ Expo Go

**Cách A - Quét QR Code:**
1. Mở **Expo Go** app trên Genymotion
2. Nhấn **Scan QR Code**
3. Quét QR code từ terminal

**Cách B - Nhập URL thủ công:**
1. Mở **Expo Go** app
2. Nhấn **Enter URL manually**
3. Nhập URL từ terminal (vd: `exp://192.168.1.100:8081`)
4. Nhấn **Connect**

### Bước 4: Xem ứng dụng

Ứng dụng sẽ tự động load và bạn sẽ thấy màn hình "Bảng xếp hạng sinh viên"! 🎉

## 🔧 Nếu gặp vấn đề:

### Vấn đề: Không quét được QR code

**Giải pháp:** Dùng tunnel mode
```bash
npm run start:tunnel
```

### Vấn đề: "Unable to connect to Metro"

**Giải pháp:**
1. Kiểm tra Genymotion device và máy tính cùng mạng
2. Tắt firewall tạm thời
3. Hoặc dùng tunnel mode: `npm run start:tunnel`

### Vấn đề: Play Store không có trên Genymotion

**Giải pháp:**
1. Trong Genymotion, chọn device
2. Nhấn nút **Open GAPPS** (Google Apps)
3. Cài đặt Google Play Services
4. Khởi động lại device

## ✨ Hot Reload

Sau khi kết nối thành công:
- Mỗi khi bạn sửa code và save
- Ứng dụng sẽ tự động reload trên Genymotion
- Bạn sẽ thấy thay đổi ngay lập tức!

## 🎯 Tóm tắt nhanh:

```bash
# 1. Mở Genymotion device
# 2. Cài Expo Go từ Play Store trên device
# 3. Chạy lệnh:
npm start

# 4. Quét QR code từ Expo Go app
# 5. Enjoy! 🎉
```
