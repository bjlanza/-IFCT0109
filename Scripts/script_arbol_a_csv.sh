#!/bin/sh
# Este script genera un archivo .csv con el árbol de todos los directorios, subdirectorios y ficheros, 
# y guarda la ruta, el nombre, la fecha de última modificación y el tamaño.
# El script pide introducir la ruta, absoluta o relativa, cuyo arbol se quiere generar, y el nombre del archivo.
echo "Introduce la ruta cuyo arbol quieres generar"
read RUTA
echo "Introduce el nombre que quieres para el archivo"
read NOMBRE
find $RUTA -printf '"%P";"%f";"%Tc";"%s";\n' > arbol_$NOMBRE.csv