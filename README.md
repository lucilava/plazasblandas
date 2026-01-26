# Soft Play 0+ Website

Sitio web para alquiler de espacios de juego Montessori para bebés y eventos infantiles.

## 🚀 Cómo usar

### Subir a GitHub
1. Crea un nuevo repositorio en GitHub
2. Sube estos archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Desplegar en Cloudflare Pages

1. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)
2. Conecta tu repositorio de GitHub
3. Configura el proyecto:
   - Framework preset: None
   - Build command: (dejar vacío)
   - Build output directory: `/`
4. Haz clic en "Save and Deploy"
5. ¡Tu sitio estará en línea en minutos!

### Alternativa: GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings > Pages
3. Source: Deploy from branch
4. Branch: main / root
5. Save
6. Tu sitio estará disponible en `https://tuusuario.github.io/nombre-repositorio`

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #FF7B54;  /* Color principal */
    --secondary-color: #FFA07A; /* Color secundario */
}
```

### Cambiar número de WhatsApp
Edita en dos lugares:

1. **HTML** (`index.html` línea ~320):
```html
<a href="https://wa.me/5491112345678" ...>
```

2. **JavaScript** (`script.js` línea ~14):
```javascript
const whatsappNumber = '5491112345678';
```

Reemplaza `5491112345678` con tu número (código país + número, sin +, sin espacios ni guiones).

### Agregar imágenes reales
1. Crea una carpeta `images/` en tu proyecto
2. Agrega tus fotos
3. Reemplaza los fondos en `styles.css`:

```css
.baby-6-12 {
    background-image: url('images/baby-gateo.jpg');
}
```

### Cambiar textos
Todos los textos están en el archivo `index.html`. Busca las secciones y modifica el contenido:
- Hero section (título principal)
- Age selection (edad de los bebés)
- Why us (por qué elegirnos)
- FAQ (preguntas frecuentes)
- Footer (información de contacto)

## 📱 Características

- ✅ Diseño 100% responsivo (móvil, tablet, desktop)
- ✅ Animaciones suaves al hacer scroll
- ✅ Botón flotante de WhatsApp
- ✅ Formulario de contacto integrado con WhatsApp
- ✅ Navegación suave entre secciones
- ✅ Optimizado para SEO
- ✅ Sin dependencias externas (excepto Google Fonts)

## 🛠️ Tecnologías

- HTML5
- CSS3 (Grid, Flexbox, Variables CSS)
- JavaScript Vanilla (ES6+)
- Google Fonts (Inter)

## 📋 Estructura de archivos

```
soft-play-website/
├── index.html      # Estructura principal
├── styles.css      # Estilos y diseño
├── script.js       # Interactividad
└── README.md       # Este archivo
```

## 🎯 Secciones del sitio

1. **Header** - Navegación principal
2. **Hero** - Presentación y CTA principal
3. **Age Selection** - Espacios por edad
4. **Why Us** - Beneficios y características
5. **Gallery** - Galería de fotos
6. **FAQ** - Preguntas frecuentes y formulario
7. **Footer** - Información de contacto

## 💡 Tips para mejoras

### Agregar Google Analytics
Agrega antes del `</head>` en `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

### Agregar meta tags para redes sociales
Agrega en el `<head>`:
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="Soft Play 0+ | Diversión segura para tu bebé">
<meta property="og:description" content="Espacios de juego Montessori acolchados">
<meta property="og:image" content="https://tudominio.com/preview.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Soft Play 0+">
<meta name="twitter:description" content="Espacios de juego Montessori">
<meta name="twitter:image" content="https://tudominio.com/preview.jpg">
```

### Dominio personalizado
1. En Cloudflare Pages: Settings > Custom domains
2. Agrega tu dominio (ej: `softplay0.com.ar`)
3. Sigue las instrucciones para configurar DNS

## 📞 Soporte

Si necesitas ayuda con la personalización o despliegue, contactame!

## 📄 Licencia

Este proyecto es de uso libre para Soft Play 0+.

---

Hecho con ❤️ para Soft Play 0+
