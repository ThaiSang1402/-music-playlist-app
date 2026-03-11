@echo off
cls
echo.
echo ================================================
echo   QUICK CONNECT - EXPO + GENYMOTION
echo ================================================
echo.

REM Set environment
set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools
set ANDROID_HOME=
set ANDROID_SDK_ROOT=

echo [Step 1] Checking Genymotion device...
adb devices
echo.

echo [Step 2] Opening Expo Go download page...
echo.
echo OPTION 1: Install from Play Store (Recommended)
echo   1. Open Play Store on Genymotion device
echo   2. Search "Expo Go"
echo   3. Install it
echo.
echo OPTION 2: Download APK manually
echo   Opening browser to download Expo Go APK...
start https://expo.dev/go
echo.
echo   After downloading:
echo   - Drag and drop the APK file onto Genymotion device
echo   - Or run: adb install expo-go.apk
echo.

echo [Step 3] After installing Expo Go:
echo   1. Open Expo Go app on device
echo   2. Scan QR code from terminal
echo   3. Or enter URL: exp://192.168.1.191:8081
echo.
echo ================================================
echo.
pause

echo Starting Expo Metro Bundler...
set ANDROID_HOME=
set ANDROID_SDK_ROOT=
call npm start
