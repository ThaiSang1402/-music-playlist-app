@echo off
echo ================================================
echo   INSTALL EXPO GO MANUALLY ON GENYMOTION
echo ================================================
echo.

echo [1/4] Checking Genymotion device...
cd android
call gradlew.bat --version >nul 2>&1
cd ..

set ADB_PATH=android\platform-tools\adb.exe
if not exist "%ADB_PATH%" (
    set ADB_PATH=adb
)

%ADB_PATH% devices
echo.

echo [2/4] Downloading Expo Go APK...
echo Please download Expo Go APK manually from:
echo https://expo.dev/go
echo.
echo Or use this direct link:
echo https://d1ahtucjixef4r.cloudfront.net/Exponent-2.32.0.apk
echo.
echo After downloading, place the APK file in this folder.
echo.

set /p APK_FILE="Enter APK filename (e.g., expo-go.apk): "

if not exist "%APK_FILE%" (
    echo Error: File not found!
    pause
    exit /b 1
)

echo.
echo [3/4] Installing Expo Go on Genymotion...
%ADB_PATH% install "%APK_FILE%"

echo.
echo [4/4] Done!
echo Now open Expo Go on Genymotion and enter:
echo exp://192.168.1.65:8083
echo.
pause
