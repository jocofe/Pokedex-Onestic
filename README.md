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
