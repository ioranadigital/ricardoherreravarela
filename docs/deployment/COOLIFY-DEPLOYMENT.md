# 🚀 Deployment en Coolify

**Proyecto:** ricardoherreravarela (Next.js Portfolio)  
**Dominio:** ricardoherreravarela.com  
**Fecha:** 2026-07-03  
**Status:** Preparado para deployment

---

## 📋 Pre-requisitos

- ✅ VPS en Hetzner (o similar) con Coolify instalado
- ✅ Acceso SSH a tu VPS
- ✅ Dominio DNS configurado apuntando a tu VPS
- ✅ Coolify versión 4.0+

---

## PASO 1: Preparar en Local (Ya completado ✅)

Los siguientes archivos YA están listos:

- ✅ `Dockerfile` — Multi-stage build optimizado
- ✅ `.dockerignore` — Archivos ignorados en build
- ✅ `.env.local` — Variables locales
- ✅ `.env.production` — Variables de producción
- ✅ `next.config.ts` — Configurado con `output: "standalone"`

**Siguiente:** Hacer commit y push a GitHub/Git

```bash
cd E:\git\interno\ricardoherreravarela
git add .env.local .env.production Dockerfile .dockerignore next.config.ts
git commit -m "feat: prepare for Coolify deployment"
git push origin main
```

---

## PASO 2: En Coolify (Dashboard)

### 2.1 Crear un Nuevo Proyecto

1. Abre **Coolify Dashboard** (ej: https://coolify.tu-vps.com)
2. Haz login
3. Ve a **Projects** → **+ New Project**
4. Dale un nombre: `ricardoherreravarela`

### 2.2 Agregar Aplicación

1. En el proyecto que acabas de crear, ve a **Applications** → **+ Add Application**
2. Selecciona **Docker** como tipo
3. Configura:
   - **Name:** ricardoherreravarela
   - **Repository:** https://github.com/tu-usuario/tu-repo.git
   - **Branch:** main
   - **Dockerfile:** Dockerfile (default)
   - **Build Pack:** Docker

### 2.3 Configurar Variables de Entorno

1. Ve a **Variables** en la aplicación
2. Agrega:

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://ricardoherreravarela.com
PORT=3000
```

### 2.4 Configurar Dominio

1. Ve a **Domains** en la aplicación
2. Agrega nuevo dominio:
   - **Domain:** ricardoherreravarela.com
   - **SSL:** ✅ Habilitado (Coolify usa Let's Encrypt automáticamente)
   - **Port:** 3000

### 2.5 Desplegar

1. Haz clic en **Deploy**
2. Coolify:
   - Clonará el repositorio
   - Ejecutará el Dockerfile (multi-stage build)
   - Subirá la imagen Docker
   - Iniciará el contenedor
   - Configurará SSL automáticamente

**Tiempo estimado:** 5-10 minutos

---

## PASO 3: Verificar Deploy

```bash
# 1. Acceder a Coolify en tu VPS
ssh usuario@tu-vps.com

# 2. Ver logs del contenedor
docker logs ricardoherreravarela

# 3. Verificar que el puerto 3000 está en uso
netstat -tuln | grep 3000

# 4. Probar localmente en la VPS
curl http://localhost:3000
```

---

## PASO 4: Verificar en el Navegador

1. Abre https://ricardoherreravarela.com
2. Verifica que:
   - ✅ Carga el sitio
   - ✅ SSL funciona (candadito verde)
   - ✅ No hay errores en consola
   - ✅ Imágenes y estilos se cargan correctamente

---

## 🔄 Flujo de Actualizaciones Futuras

Una vez deployado, cada vez que hagas `git push origin main`:

1. Coolify detecta el cambio automáticamente
2. Re-construye la imagen Docker
3. Reinicia el contenedor
4. Mantiene SSL y dominio intactos

**No hay pasos manuales.** Es completamente automático.

---

## 🐛 Troubleshooting

### Problema: "Build failed"

**Solución:**
```bash
# En Coolify, revisa los logs:
docker logs ricardoherreravarela
```

Causas comunes:
- ❌ `pnpm-lock.yaml` falta
- ❌ Error en TypeScript
- ❌ Dependencia no resuelta

**Fix:** Asegúrate de que localmente todo compila:
```bash
pnpm install
pnpm run build
```

### Problema: "503 Service Unavailable"

**Solución:** El contenedor está iniciando. Espera 2-3 minutos.

### Problema: "SSL certificate error"

**Solución:** Coolify genera certificados automáticamente. Espera 5 minutos después de agregar el dominio.

---

## 📊 Monitoreo Post-Deploy

En Coolify puedes ver:

- **Logs:** Errors y warnings
- **Resource Usage:** CPU, RAM, storage
- **Build History:** Versiones deployadas
- **SSL Status:** Expiración de certificados

---

## 🎯 Resumen

| Paso | Acción | Status |
|------|--------|--------|
| 1 | Preparar archivos locales | ✅ Hecho |
| 2 | Commit & Push a GitHub | ⏳ Pendiente |
| 3 | Crear proyecto en Coolify | ⏳ Pendiente |
| 4 | Configurar dominio y variables | ⏳ Pendiente |
| 5 | Deploy | ⏳ Pendiente |
| 6 | Verificar en navegador | ⏳ Pendiente |

---

**¿Preguntas?** Revisa los logs en Coolify o ejecuta `docker logs ricardoherreravarela` en tu VPS.
