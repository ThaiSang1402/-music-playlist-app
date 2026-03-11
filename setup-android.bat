@echo off
echo Setting up Android environment for Genymotion...

REM Set Android SDK to Genymotion path
set ANDROID_HOME=C:\Program Files\Genymobile\Genymotion
set ANDROID_SDK_ROOT=C:\Program Files\Genymobile\Genymotion

REM Add Genymotion tools to PATH
set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools

echo.
echo Android environment configured!
echo ANDROID_HOME=%ANDROID_HOME%
echo.
echo Testing ADB connection...
adb devices

echo.
echo Now you can run: npm start
