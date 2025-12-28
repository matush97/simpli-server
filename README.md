# Backend part of the project

## Project start

Download packages using the command:
### `npm install`

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3001](http://localhost:3001) 

## Available endpoints
Endpoints are created for two entities: announcement and category.

### Entity announcement
Contains endpoints create, list, get, update and delete.
The data model contains title (string), content (string), category (array of objects),
publicationDate (date), lastUpdate (date).

### Entity category
Contains endpoints create a list.
The data model for category contains value (string), label (string).

## Testing API (Postman, Insomnia)

### POST api/announcement/create
Method - Post

Query - http://localhost:3001/api/announcement/create

JSON - {
"title": "announcement",
"content": "some information",
"publicationDate": "2025-12-01 00:42:00.000Z"
"category": [{value: "city", label: "City"]
}

### GET api/announcement/list
Method - GET

Query - http://localhost:3001/api/announcement/list

JSON - {
"category": [{value: "city", label: "City"],
"search": "announcement"
}
or empty object {}

### GET api/announcement/get
Method - GET

Query - http://localhost:3001/api/announcement/get/:id

### GET api/announcement/get
Method - GET

Query - http://localhost:3001/api/announcement/get/:id

### PATCH api/announcement/update
Method - PATCH

Query - http://localhost:3001/api/announcement/update

JSON - {
"id": "6950184209d3abf48dc9923c",
"category": [ {"value": "culture","label": "Culture"}]
}

In the endpoint update, we can modify attributes: title, content, category, publicationDate

### DELETE api/announcement/update
Method - DELETE

Query - http://localhost:3001/api/announcement/delete

JSON - {
"id": "6950184209d3abf48dc9923c"
}

### POST api/category/create
Method - POST

Query - http://localhost:3001/api/category/create

JSON - 
{
"itemList": [
{
"value": "city",
"label": "City"
},
{
"value": "communityEvents",
"label": "Community events"
},
{
"value": "crimeSafety",
"label": "Crime & Safety"
},
{
"value": "culture",
"label": "Culture"
},
{
"value": "discountsBenefits",
"label": "Discounts & Benefits"
},
{
"value": "emergencies",
"label": "Emergencies"
},
{
"value": "forSeniors",
"label": "For Seniors"
},
{
"value": "kidsFamily",
"label": "Kids & Family"
}
]
}

### GET api/category/list
Method - GET

Query - http://localhost:3001/api/category/list

JSON -  {}