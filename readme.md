# Aplicacion: Access Map

Plataforma de Información y Guía de Accesibilidad en Espacios Públicos y Privados

## Documentacion

### Descripción

La aplicacion "AccessMap" es una plataforma web enfocada en la accesibilidad, que permite a personas con movilidad reducida obtener información sobre la accesibilidad de espacios públicos y privados en función de su ubicación.

### Objetivos Generales

- [ ] Crear un diseño accesible y responsive para que la plataforma sea fácilmente utilizada en diversos dispositivos.
- [ ] Implementar una API de geolocalización, como Google Maps API o Mapbox, para obtener datos de ubicación y visualizar mapas interactivos.
- [ ] Implementar una API de terceros, como Google Places para obtener información sobre la accesibilidad de espacios públicos y privados.
- [ ] Desarrollar una interfaz frontend para explorar y visualizar datos de accesibilidad en función de la ubicación del usuario o de lugares seleccionados en el mapa.
- [ ] Integrar un sistema de comentarios y valoraciones por parte de los usuarios para compartir sus experiencias y mejorar la información sobre accesibilidad.
- [ ] Crear un backend que procese la información de ubicaciones y accesibilidad, y que se comunique con las APIs de geolocalización y accesibilidad para obtener datos actualizados.
- [ ] Considerar la accesibilidad a nivel de aplicación y a nivel de usabilidad de la misma


## Para los Desarrolladores

### Instalacion de los paquetes de dependencia

Para la instalacion

```sh
npm install
```

### Ejecusion de comandos en modo de desarrollo

Durante el proceso de desarrollo sera necesario tener el servicio de API (back-end) funcionando y la aplicasion web.

#### Levantar el servicio de API - back-end

Ejecutar la instalacion de los paquetes de dependencia es necesaria.

```sh
npm run be
```

Nota: `be` es por Back-End

El servicio funciona sobre el puerto `3000` por defecto

#### Levantar el servicio de la aplicasion web o interfaz de usuario

En una consola diferente a la del servicio de API ejecutar el siguiente comando

```sh
npm run fe
```

Nota: `fe` es por Font-End

y luego visitar la direccion `http://localhost:5173/` utilizando un browser
