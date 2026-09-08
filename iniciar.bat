@echo off
chcp 65001 >nul
cd /d "%~dp0"

if not exist .venv (
  echo Criando ambiente virtual...
  py -m venv .venv 2>nul || python -m venv .venv
)

call .venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -r requirements.txt

echo.
echo Site disponível em http://127.0.0.1:5000
echo Painel administrativo em http://127.0.0.1:5000/admin
echo.
python app.py
pause
