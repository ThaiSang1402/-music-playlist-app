@echo off
echo Installing Expo Go on Genymotion device...

REM Set environment
set PATH=%PATH%;C:\Program Files\Genymobile\Genymotion\tools

echo.
echo Checking device connection...
adb devices

echo.
echo Downloading and installing Expo Go APK...
adb install -r https://d1ahtucjixef4r.cloudfront.net/Exponent-2.31.5.apk

echo.
echo Done! Now run: npm start
echo Then scan QR code from Expo Go app on the device
