# Contact Single Page Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## JSON server that serves the data

We need the fake data to work with that is why I am using json-server package.
Run `npm install -g json-server` to install json-server

Create a db.json file in src/data folder

```json
{
  "contact": [
    {
      "firstName": "Abhijit",
      "lastName": "Bedre",
      "email": "abhijit.bedre@gmail.com",
      "phone": "123456789",
      "status": "Active",
      "id": 1
    },
    {
      "firstName": "Tanuj",
      "lastName": "Pandey",
      "email": "tanuj.d.pandey@gmail.com",
      "phone": "123456789",
      "status": "Inactive",
      "id": 2
    }
  ]
}
```

## Run
command line 1
json-server --watch src/data/db.json --port 4004

command line 2
ng serve
