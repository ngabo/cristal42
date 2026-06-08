@echo off
echo.
echo  ╔══════════════════════════════════════╗
echo  ║   Cristal42 — Serveur local          ║
echo  ║   http://localhost:3000              ║
echo  ╚══════════════════════════════════════╝
echo.
echo  Demarrage du serveur...
echo  Appuyez sur Ctrl+C pour arreter.
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Port 3000
pause
