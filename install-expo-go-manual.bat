@echo off
echo.
echo ================================================
echo   INSTALLING EXPO GO ON GENYMOTION
echo ================================================
echo.

REM Set PATH to include Genymotion ADB
set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools

echo [1/3] Checking device connection...
adb devices
echo.

echo [2/3] Downloading Expo Go APK...
echo Please wait...
curl -L -o expo-go.apk "https://d1ahtucjixef4r.cloudfront.net/Exponent-2.31.5.apk"
echo.

echo [3/3] Installing Expo Go...
adb install -r expo-go.apk
echo.

echo ================================================
echo   DONE!
echo ================================================
echo.
echo Now open Expo Go app on Genymotion device
echo and scan the QR code from terminal
echo.
pause
