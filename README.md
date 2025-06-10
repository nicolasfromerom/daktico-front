# Fronted 

## Installation

- Clonar el repositorio

- Instalar proyecto con npm

    - Dentro de la raíz del proyecto ejecutar:

```bash
  npm install
```
    
## Deployment

Para desplegar este proyecto en modo de desarrollo ejecutar: 

```bash
  npm run dev
```
Para desplegar este proyecto en modo produccion ejecutar

```bash
  npm run build
```

Para iniciar sesión como administrador usar: 
    correo: admin@example.com
    contraseña: password
Para iniciar sesión como estudiante usar: 
    correo: estudiante@example.com
    contraseña: password

## Nota
Se utilizó sessionStorage en lugar de cookies para que permita iniciar sesión con diferentes usuarios en 2 pestañas distintas del navegador, ya que el cookie se comparte en todas las pestañes que utilizan ese dominio.      