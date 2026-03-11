@echo off
cls
echo.
echo ================================================
echo   EXPO DEVELOPMENT SERVER
echo ================================================
echo.
echo [INFO] Genymotion device detected
echo [INFO] Starting Expo without Android SDK...
echo.
echo IMPORTANT:
echo 1. Make sure Genymotion device is ON
echo 2. Install "Expo Go" app from Play Store
echo 3. Scan QR code from Expo Go app
echo.
echo ================================================
echo.

REM Clear problematic environment variables
set ANDROID_HOME=
set ANDROID_SDK_ROOT=

REM Start Expo
call npm start

pause
