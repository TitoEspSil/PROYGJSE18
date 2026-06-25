# Proyecto Simple de Router en JavaScript

Este proyecto es un ejemplo básico de un sistema de enrutamiento para aplicaciones de una sola página (SPA) en JavaScript vanilla.

 Usamos module en los scripts cuando necesitamos importar y exportar 
## Temario: Lo que necesitas saber para implementar un router básico

### 1. Conceptos Básicos de SPA (Single Page Application)
   - ¿Qué es una SPA? Una aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido sin recargar la página completa.
   - Ventajas: Navegación más rápida, mejor experiencia de usuario.
   - Ejemplo: Aplicaciones como Gmail o Facebook.

### 2. Manipulación del DOM
   - Entender el DOM (Document Object Model).
   - Métodos como `getElementById`, `innerHTML`, `addEventListener`.
   - Ejemplo: Cambiar el contenido de un elemento HTML con JavaScript.

### 3. Módulos ES6
   - Importar y exportar funciones y clases con `import` y `export`.
   - Beneficios: Organización del código, reutilización.
   - Ejemplo: `import { Router } from './router.js';`

### 4. Clases en JavaScript
   - Sintaxis de clases: `class`, `constructor`, métodos.
   - Instanciación con `new`.
   - Ejemplo: Crear una clase `Router` con métodos.

### 5. Enrutamiento en el Lado del Cliente
   - Definir rutas como un objeto que mapea nombres a funciones.
   - Navegación programática: Cambiar el contenido basado en la ruta.
   - Manejo de rutas no encontradas.
   - Ejemplo: Un objeto `routes` con funciones de renderizado.

### 6. Eventos y Interacción del Usuario
   - Escuchar eventos como clicks con `addEventListener`.
   - Conectar la UI con la lógica del router.
   - Ejemplo: Botones que llaman a `router.navigate()`.

## Cómo trabajar por partes

1. **Parte 1: Estructura HTML y CSS**
   - Crea el `index.html` con la estructura básica.
   - Agrega estilos en `style.css`.

2. **Parte 2: Páginas simples**
   - Implementa funciones de renderizado en `home.js` y `about.js`.
   - Prueba renderizando manualmente en la consola.

3. **Parte 3: El Router**
   - Crea la clase `Router` en `router.js`.
   - Define las rutas y el método `navigate`.

4. **Parte 4: Integración**
   - En `main.js`, inicializa el router y conecta los botones.
   - Prueba la navegación.

## Ejecutar el proyecto

Abre `index.html` en un navegador. Haz clic en los botones para navegar entre páginas.

## Expansiones posibles

- Agregar más rutas.
- Implementar enrutamiento con hash (#) o History API.
- Agregar animaciones de transición.
- Integrar con un servidor backend.
