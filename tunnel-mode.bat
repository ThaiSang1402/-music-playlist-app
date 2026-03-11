@echo off
cls
echo.
echo ================================================
echo   EXPO TUNNEL MODE - NO EXPO GO NEEDED!
echo ================================================
echo.
echo This mode works WITHOUT Expo Go app!
echo You can test your app directly in browser.
echo.
echo Starting Expo with Tunnel mode...
echo.

REM Clear Android SDK variables
set ANDROID_HOME=
set ANDROID_SDK_ROOT=

REM Start Expo with tunnel
call npx expo start --tunnel --web

pause
