#!/bin/bash
# Detener en caso de error
set -e

# Moverse al directorio donde reside el script
cd "$(dirname "$0")"

echo "🚀 Iniciando despliegue de Algorah..."

# 1. Traer los últimos cambios de GitHub
echo "📥 Trayendo cambios de Git..."
git pull origin main

# 2. Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# 3. Construir la versión de producción (Vite)
echo "🏗️ Construyendo el sitio (Vite)..."
npm run build

# 4. Asegurar que el servidor de correos esté corriendo con PM2
echo "⚙️  Reiniciando el backend de correo..."
if pm2 list | grep -q "algorah-server"; then
    pm2 restart algorah-server
else
    pm2 start server.js --name "algorah-server"
fi

echo "✅ ¡Despliegue completado con éxito! Algorah está al aire."
