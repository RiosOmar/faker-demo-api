const express = require("express");
const cors = require("cors");
var faker = require('faker');
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());


class User {
    constructor(){
        this._id = faker.random.uuid()
        this.firstName= faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber= faker.phone.phoneNumber()
        this.email = faker.internet.email()

    }
}

class Company {
    constructor() {
        this._id=faker.random.uuid()
        this.name=faker.company.companyName()
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/", (req, res) => {
  res.json({"message": "ok"});
});

app.get("/api/users/new", (req, res) => {
    let user1 = new User()
    console.log(user1)

    res.json({"results":user1});
  });
  
  app.get("/api/companies/new", (req, res) => {
    let company1 = new Company()

    res.json({"results":company1});
  });
  


  app.get("/api/user/company", (req, res) => {
    let user1 = new User()
    let company1 = new Company()

    res.json({"results":{user:user1, "company": company1}});
  });
  

app.listen(port, () => console.log(`Listening on port ${port}`));