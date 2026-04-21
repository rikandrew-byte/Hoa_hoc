@echo off
chcp 65001 > nul

echo.
echo =====================================
echo  SCRIPT DEPLOY LEN GITHUB
echo =====================================
echo.

git add .
echo Da them tat ca cac file vao staging.
echo.

set /p commit_message="Nhap noi dung commit: "

git commit -m "%commit_message%"

git push origin main

echo.
echo =====================================
echo  DA DAY CODE LEN GITHUB THANH CONG!
echo =====================================
echo.
pause