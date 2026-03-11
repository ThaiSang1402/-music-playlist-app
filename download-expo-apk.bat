@echo off
echo ================================================
echo   DOWNLOAD EXPO GO APK
echo ================================================
echo.

echo Downloading Expo Go APK...
echo.

curl -L -o expo-go.apk "https://d1ahtucjixef4r.cloudfront.net/Exponent-2.32.0.apk"

if exist expo-go.apk (
    echo.
    echo ================================================
    echo   DOWNLOAD COMPLETE!
    echo ================================================
    echo.
    echo File saved: expo-go.apk
    echo.
    echo Next steps:
    echo 1. Drag and drop expo-go.apk into Genymotion window
    echo 2. Wait for installation to complete
    echo 3. Open Expo Go app on device
    echo 4. Enter URL: exp://192.168.1.65:8083
    echo.
) else (
    echo.
    echo Download failed!
    echo Please download manually from: https://expo.dev/go
    echo.
)

pause
