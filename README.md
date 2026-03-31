# Link Almohadas

Aplicacion web para gestion interna y catalogo publico de almohadas decorativas.

## Stack

- React + Vite
- Firebase Authentication
- Firestore
- Firebase Storage
- React Router con `HashRouter` para compatibilidad con GitHub Pages

## Configuracion inicial

1. Instalar dependencias:

```bash
npm install
```

2. Revisar `.env` y completar:

- `VITE_SUPERADMIN_EMAIL`
- `VITE_WHATSAPP_SELLER_NUMBER` si queres el boton de consulta por WhatsApp

3. Ajustar `OWNER_EMAIL_HERE` en:

- `firestore.rules`
- `storage.rules`

4. En Firebase Authentication, crear manualmente el primer usuario con el mismo email que pusiste en `VITE_SUPERADMIN_EMAIL`.

Ese usuario entrara como `superadmin` por email propietario.

5. Publicar reglas y hosting cuando quieras:

```bash
firebase login
firebase deploy
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run build:pages`
- `npm run deploy:pages`
- `npm run deploy:firebase`
- `npm run deploy:firebase:full`

## Deploy en GitHub Pages

```bash
npm run deploy:pages
```

Despues, en GitHub:

1. Ir a `Settings > Pages`
2. Elegir `Deploy from a branch`
3. Seleccionar la rama `gh-pages`
4. Guardar

## Deploy en Firebase Hosting

```bash
npm run build
firebase login
firebase deploy
```

## Flujo de usuarios

- `superadmin`: entra con el email configurado en `VITE_SUPERADMIN_EMAIL`
- `seller`: se crea desde el panel del super admin y recibe acceso restringido
- `cliente final`: entra directo al catalogo publico sin login
