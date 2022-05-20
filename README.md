# NODE aplicação para backend e JSON

# Comandos no console local. 
npm install

npm start



| Endpoints                   | Usage                                 | Params              |
| --------------------------- | ------------------------------------- | ------------------- |
| `GET /api/heroes`           | Get all of the heroes.                |                     |
| `GET /api/heroes?name=term` | Get all heroes with name like a term. | **term** - [String] |
| `GET /api/heroes/:id`       | Get the details of a single hero.     |                     |
| `POST /api/heroes`          | Add a new hero.                       | **name** - [String] |
| `PUT /api/heroes/:id`       | Edit the details of an existing hero. | **name** - [String] |
| `DELETE /api/heroes/:id`    | Remove the hero.                      |                     |
