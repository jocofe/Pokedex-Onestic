<a name="readme-top"></a>

<!-- Logo -->
<br />
<div align="center">
  <a href="https://github.com/jocofe/Pokedex-Onestic">
    <img style="width: 32px; height: 32px;"src="/public/Pokeball icon.svg" alt="Logo">
  </a>

  <h3 align="center">Pokédex Sinnoh</h3>

  <p align="center">
    Prueba Front-End Onestic Pokédex.
    <br />
    <a href="https://github.com/jocofe/Pokedex-Onestic"><strong>Explorar documentos »</strong></a>
    <br />
    <br />
    <a href="https://pokedex-onestic.vercel.app/">Ver demo</a>
  </p>
</div>

<!-- Memoria -->

## Memoria del proyecto

<h3>1. Design System</h3>

Para comenzar el proyecto he planteado el diseño elaborando un Design System breve en Figma:

<a href="https://www.figma.com/design/IxnQKiirmNKp5xvOmg6s8z/Pokedex-%2F-Onestic?t=MaYhqXy8YaIvLF5U-1">Figma Design System</a>

En dicho Design System podréis encontrar un índice nada más abrirlo con todos los apartados que lo componen (color, tipografía, componentes, layouts, etc.). Mi decisión de hacer este pequeño Design System previamente al desarrollo se debe a que me ayuda a plantear tanto la interfaz como las funcionalidades de una forma visual.

<h3>2. Creación repositorio, instalación React con Vite y deploy en Vercel.</h3>

El siguiente paso que he seguido ha sido crear el repositorio en Github a través de la aplicación de escritorio de Github, instalar React a través del compilador de Vite e incorporar el archivo "vercel.json" para añadir la regla de reescritura de las url para que funcionen correctamente en Vercel.
He seguido esta documentación para repasar la instalación: <a href="https://vitejs.dev/guide/">Vite Guide</a>
Y esta para hacer las reescrituras de URL: <a href="https://vercel.com/docs/edge-network/rewrites">Vercel Rewrites</a>
Una vez cumplidos estos pasos, he procedido a publicar el repositorio en Github.

<h3>3. Inicializado de Git Flow para crear ramas de dev y feature.</h3>

Para trabajar en el repositorio he utilizado Git Flow y he ido creando ramas de features que, una vez finalizadas, he mergeado en develop para hacer realease cuando consideraba oportuno.

<h3>4. Creación de assets.</h3>

En primer lugar me gusta preparar el entorno de desarrollo con los assets que voy a necesitar, sean .svgs, imágenes, etc. Por ello he creado el fichero icons.tsx donde he metido todos los svgs que voy a utilizar y que están representados en el Design System.

<h3>5. Creación componentes</h3>

La siguiente tarea que realicé fue hacer ciertos componentes como el Topbar, Buttons y PokemonCard. Para posteriormente hacer la llamada a la API y pintar los datos en las PokemonCard.

<h3>6. Llamada y mapeo API</h3>

Para la llamada a la API consulté la documentación de <a src='https://pokeapi.co/'>PokeAPI</a> y pensé en cómo resolver el problema de tener solo la pokédex de Sinnoh. Para resolverlo planteé un array que iba entre los números 387 y 493 que son los pokémon nacionales de Sinnoh y lo pasé a la función fetch de la API como id.
También mapee la información para darle tipos y propiedades. Posteriormente con CSS hice un grid e implementé que se mostrara solo 15 PokemonCard e hice la lógica de la paginación.

<h3>7. Lógica Favorites</h3>

La lógica de favorites está basada en el uso del LocalStorage para persistir la información en la sesión. Tuve que mirar la documentación sobre el uso del LocalStorage y algún artículo para entender su funcionamiento y apoyándome con ChatGPT pude lograr sacar la lógica para que en el componente Socials cuando se le diera al corazón en el componente PokemonCard se guardase la información y así poder representarla en una nueva página dónde solo se ven los favoritos.

<h3>8. Cambio de modo dark-light</h3>
El cambio de modo está incompleto, pues hice un contexto para saber en qué modo está la aplicación pero no funciona bien cuando se navega de la home o favorites a la página de vista del Pokémon. Dentro de la página de pokémon sí que funciona bien el cambio cuando se pulsa el botón de cambiar de modo pero al salir y volver a entrar sucede el mismo fallo. Por falta de tiempo lo he dejado así.

<h3>9. Vista Página Pokémon</h3>

Aquí al igual que en el componente PokemonCard, que no lo he mencionado antes, he puesto que los tipos y el fondo de la página de pokémon en el header, tengan background-color con variables de css según el tipo de pokémon que sea. Además he hecho unas barras para los stats y he implementado PokemonCards de las evoluciones de dicho pokemon si las tiene. En caso de que no tenga simplemente sale el Pokémon otra vez. Aquí me hubiera gustado que si se le daba al botón de favoritos se guardara, pero la información de este componente es distinta debido al mapeo de la información que viene de la API, al ser otra URL, por falta de tiempo no he podido completarlo. Pero si tiene más evoluciones y haces click en una de ellas, la página se recarga en el top con el nuevo pokémon en vista.

<h3>10. Detalles y notas</h3>

Quizá al hacer el Design system haya tenido menos tiempo de desarrollo, pero me ha ayudado a plantear las funcionalidades, detalles y demás de la aplicación. Me ha faltado arreglar el cambio de modo dark-light como comentaba anteriormente. El testing no he podido hacerlo tampoco por tiempo pero lo hemos visto en el PostGrado y me hubiera gustado aún que fuera mostrarlo con un botón. También en el diseño planteé el uso de la barra de búsqueda y tampoco he podido implementarlo pero la idea era que en la vista home se pudiera buscar y que saliera la PokemonCard de dicho Pokémon. También, por último, me hubiera gustado refactorizar el código un poco.

ACTUALIZADO [14/07/2024]

Sé que estos cambios están fuera de tiempo pero quería arreglar por lo menos la versión dark-mode de la aplicación que me había complicado bastante con la lógica para lograrla y he conseguido simplificarla con un context haciendo cambios en las clases dependiendo del valor de ese context. He implementado la búsqueda por término en las páginas de home y favoritos a través de un context. La de home busca el término en toda la pokédex, la de favoritos solo busca el término en los favoritos del usuario y si se presiona enter en el searchbar o se clicka en la lupa se va a la página principal realizando la búsqueda en todos los pokémon. También he arreglado el problema que había con los favoritos en la página de PokemonPage, el problema venía por mi tipado con Typescript con los datos que me proporcionaba la API y lo he conseguido arreglar.
