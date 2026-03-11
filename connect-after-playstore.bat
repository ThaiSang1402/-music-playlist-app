@echo off
cls
echo.
echo ================================================
echo   CONNECT TO GENYMOTION - FINAL STEP
echo ================================================
echo.

REM Set PATH
set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools

echo [Step 1] Checking device connection...
adb devices
echo.

echo [Step 2] Checking if Expo Go is installed...
adb shell pm list packages | findstr "exponent"
if %ERRORLEVEL% EQU 0 (
    echo ✓ Expo Go is installed!
    echo.
    echo [Step 3] Starting Expo...
    set ANDROID_HOME=
    set ANDROID_SDK_ROOT=
    call npm start
) else (
    echo ✗ Expo Go is NOT installed yet
    echo.
    echo Please install Expo Go from Play Store:
    echo 1. Open Play Store on Genymotion device
    echo 2. Search "Expo Go"
    echo 3. Install it
    echo 4. Run this script again
    echo.
    pause
)
