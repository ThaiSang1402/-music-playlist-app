# 📱 Cài Expo Go trên Genymotion

## ⚠️ LƯU Ý QUAN TRỌNG:

**ĐỪNG nhấn `a` trong Expo terminal!**

Lỗi "The system cannot find the path specified" xảy ra vì:
- Bạn nhấn `a` (open Android) 
- Nhưng chưa có Expo Go app để mở

## ✅ CÁCH ĐÚNG:

1. Cài Expo Go trên Genymotion
2. Chạy `npm start`
3. Mở Expo Go app trên device
4. Quét QR code
5. XONG!

---

## 🎯 HƯỚNG DẪN CÀI EXPO GO:

### Bước 1: Cài Google Play Services (Nếu chưa có)

**Trong Genymotion Desktop:**

1. Chọn device "My Phone"
2. Nhấn vào device
3. Tìm và nhấn **"Open GAPPS"** hoặc **"Install Google Play Services"**
4. Chọn phiên bản phù hợp
5. Nhấn **Install**
6. Đợi cài xong
7. **Khởi động lại device**

### Bước 2: Cài Expo Go

**Trên Genymotion device:**

1. Mở **Play Store**
2. Đăng nhập Google account
3. Tìm kiếm **"Expo Go"**
4. Nhấn **Install**
5. Đợi cài xong (1-2 phút)

### Bước 3: Kết nối

**Trong VS Code terminal:**
```bash
npm start
```

**Trên Genymotion device:**
1. Mở **Expo Go** app
2. Nhấn **"Scan QR Code"**
3. Quét QR code từ terminal
4. Ứng dụng sẽ load! 🎉

---

## 🔧 NẾU KHÔNG CÓ PLAY STORE:

### Tải APK thủ công:

1. **Tải Expo Go APK:**
   - Truy cập: https://expo.dev/go
   - Hoặc: https://apkpure.com/expo-go/host.exp.exponent
   - Tải file APK về máy

2. **Cài APK lên Genymotion:**
   
   **Cách A - Kéo thả:**
   - Kéo file APK vào cửa sổ Genymotion device
   - Đợi cài xong

   **Cách B - Dùng ADB:**
   ```bash
   # Set PATH
   set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools
   
   # Cài APK
   adb install expo-go.apk
   ```

---

## ✨ SAU KHI CÀI XONG:

```bash
# 1. Start Expo
npm start

# 2. Mở Expo Go trên device
# 3. Quét QR code
# 4. Enjoy! 🎉
```

**QUAN TRỌNG:** Không nhấn `a` trong terminal! Chỉ quét QR code từ Expo Go app!
