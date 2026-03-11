@echo off
cls
echo.
echo ================================================
echo   RUN ON GENYMOTION - DIRECT CONNECTION
echo ================================================
echo.

REM Set PATH
set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools

echo [1/3] Checking Genymotion device...
adb devices
echo.

echo [2/3] Checking if Expo Go is installed...
adb shell pm list packages | findstr "exponent" > nul
if %ERRORLEVEL% EQU 0 (
    echo ✓ Expo Go is installed!
    echo.
    echo [3/3] Opening Expo Go and connecting...
    
    REM Get the Expo URL from running Metro
    echo.
    echo ================================================
    echo   INSTRUCTIONS:
    echo ================================================
    echo.
    echo 1. Expo Go will open on Genymotion device
    echo 2. In Expo Go, tap "Enter URL manually"
    echo 3. Enter this URL:
    echo.
    echo    exp://192.168.1.191:8082
    echo.
    echo    (Or scan QR code from terminal)
    echo.
    echo ================================================
    echo.
    
    REM Open Expo Go app
    adb shell monkey -p host.exp.exponent 1
    
    echo.
    echo Expo Go opened on Genymotion!
    echo Now enter the URL or scan QR code.
    echo.
    pause
    
) else (
    echo ✗ Expo Go is NOT installed!
    echo.
    echo Please install Expo Go first:
    echo 1. Open Play Store on Genymotion device
    echo 2. Search "Expo Go"
    echo 3. Install it
    echo 4. Run this script again
    echo.
    pause
)
