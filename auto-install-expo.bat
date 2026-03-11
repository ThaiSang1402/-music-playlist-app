@echo off
cls
echo.
echo ================================================
echo   AUTO INSTALL EXPO GO - FASTEST WAY
echo ================================================
echo.

REM Set PATH
set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools

echo [1/4] Waiting for device to be ready...
adb wait-for-device
echo ✓ Device is ready!
echo.

echo [2/4] Opening Play Store to Expo Go page...
adb shell am start -a android.intent.action.VIEW -d "https://play.google.com/store/apps/details?id=host.exp.exponent"
echo.
echo ================================================
echo   MANUAL STEP REQUIRED:
echo ================================================
echo.
echo On Genymotion device:
echo 1. Play Store should open automatically
echo 2. You'll see Expo Go app page
echo 3. Click "Install" button
echo 4. Wait for installation to complete
echo.
echo After Expo Go is installed, press any key...
pause
echo.

echo [3/4] Checking if Expo Go is installed...
adb shell pm list packages | findstr "exponent"
if %ERRORLEVEL% EQU 0 (
    echo ✓ Expo Go is installed!
) else (
    echo ✗ Expo Go not found. Please install it manually.
    pause
    exit /b 1
)
echo.

echo [4/4] Starting Expo Metro Bundler...
set ANDROID_HOME=
set ANDROID_SDK_ROOT=
call npm start

echo.
echo ================================================
echo   NOW:
echo ================================================
echo 1. Open Expo Go app on Genymotion device
echo 2. Scan the QR code
echo 3. Your app will load!
echo ================================================
