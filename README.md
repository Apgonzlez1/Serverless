# Serverless
serverless, serverless framework, IaC, funciones lambda, dynamoDB, API Gateway
# Serverless CRUD API con AWS Lambda, API Gateway y DynamoDB

Este proyecto implementa una API RESTful utilizando arquitectura **Serverless**, desplegada mediante el **Serverless Framework**, integrando funciones **AWS Lambda**, **API Gateway** y **DynamoDB** para manejar tareas (CRUD).

---

## Tecnologías y servicios utilizados

- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
- [API Gateway](https://aws.amazon.com/api-gateway/)
- [Serverless Framework](https://www.serverless.com/)
- Node.js

---

##  Estructura del proyecto

 AppTask2/
│
├── crearTask.js // POST: Crear nueva tarea
├── obtenerTasks.js // GET: Obtener todas las tareas
├── obtenerTask.js // GET: Obtener una tarea por ID
├── actualizarTask.js // PUT: Actualizar una tarea
├── eliminarTask.js // DELETE: Eliminar una tarea
└── serverless.yml // Configuración del proyecto serverless

yaml
Copiar
Editar

---

## Instalación y ejecución local

1. **Clonar el repositorio:**

```bash
git clone https://github.com/tuusuario/nombre-repo.git
cd nombre-repo
Instalar dependencias:

bash
Copiar
Editar
npm install
Desplegar localmente:

bash
Copiar
Editar
sls dev --verbose
Esto genera endpoints temporales para probar tu API en desarrollo.

Endpoints disponibles:

Método	Endpoint	Descripción
POST	/tarea	Crear una nueva tarea
GET	/tareas	Obtener todas las tareas
GET	/tareas/{id}	Obtener una tarea por su ID
PUT	/tareas/{id}	Actualizar una tarea existente
DELETE	/tareas/{id}	Eliminar una tarea por su ID


Ejemplos de pruebas en Postman
GET todas:
Endpoint: https://tuservidor.amazonaws.com/tareas

GET una tarea por ID:
Endpoint: https://tuservidor.amazonaws.com/tareas/{id}

POST (crear tarea):
Método: POST
Body (JSON):

json
Copiar
Editar
{
  "titulo": "Tarea ejemplo",
  "descripcion": "Descripción de la tarea"
}
PUT (actualizar tarea):
Método: PUT
Endpoint: /tareas/{id}
Body (JSON):

json
Copiar
Editar
{
  "titulo": "Nuevo título",
  "descripcion": "Nueva descripción"
}
DELETE (eliminar tarea):
Método: DELETE
Endpoint: /tareas/{id}




Adriana Pamela Gonzalez Orellana
