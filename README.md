# Pokémon Page by Fabián Ávila

¡Bienvenido/a a mi proyecto de una página de Pokémon! 🎮 Este sitio web permite explorar información sobre Pokémon de todas las generaciones utilizando [PokeAPI](https://pokeapi.co/) y está construido con **React**.

🌐 **Página en vivo:**  
[https://pokemon-page-by-fabian-4avila.netlify.app](https://pokemon-page-by-fabian-4avila.netlify.app)

📁 **Repositorio:**  
[https://github.com/fabian-4vila/Pokedex.git](https://github.com/fabian-4vila/Pokedex.git)

## ✨ Funcionalidades

- 🔍 Buscar Pokémon por nombre.
- 🧬 Ver información detallada de cada Pokémon:
  - Imagen
  - Tipo(s)
  - Habilidades
  - Estadísticas base
- 🔁 Navegación por generaciones.
- ⚡ Diseño responsivo y limpio.
- 📦 Datos obtenidos dinámicamente desde la API pública [PokeAPI](https://pokeapi.co/).

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [PokeAPI](https://pokeapi.co/)
- CSS
- [Netlify](https://www.netlify.com/) para despliegue

## 🚀 Instalación local

Clona el repositorio:

```bash
git clone https://github.com/fabian-4vila/Pokedex.git
cd Pokedex
```
Instala las dependencias:

```bash
npm install
```
Ejecuta la aplicación:

```bash
npm start
```
La app se abrirá en http://localhost:3000.
## 📁 Estructura del proyecto 

```bash
Pokedex/
├── public/
│   ├── images/
│   │   ├── Ellipse1.png
│   │   ├── Ellipse2.png
│   │   ├── Fabian3.png
│   │   ├── RectangleB.png
│   │   ├── RectangleR.png
│   │   ├── TitleHome.png
│   │   ├── arrowD.png
│   │   ├── arrowI.png
│   │   ├── circulo1.png
│   │   ├── circulo2.png
│   │   ├── rectangulo.black.png
│   │   ├── rectangulo.red.png
│   │   └── titleCard.png
├── src/
│   ├── components/
│   │   ├── pokedexPage/
│   │   │   ├── style/
│   │   │   │   └── Pokecard.css    
│   │   │   ├── Pagination.jsx
│   │   │   ├── PokeCard.jsx
│   │   │   └── SelectType.jsx
│   ├── hooks/
│   │   └── useFetch.js  
│   ├── pages/
│   │   ├── HomePage.css
│   │   ├── HomePage.jsx
│   │   ├── PokedexIdPages.jsx
│   │   ├── PokedexPage.css
│   │   ├── PokedexPage.jsx
│   │   ├── ProtectedRoutes.jsx
│   │   └── pokedexidPages.css
│   ├── store/
│   │   ├── slices/
│   │   │   └── trainer.slice.js
│   │   └── index.js    
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```
