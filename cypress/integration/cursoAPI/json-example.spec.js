/// <reference types='Cypress'/>

describe('JSON Object', () => {

    it('Json Object Examples', () => {

        const exampleObject = {
            "nombre": "juan",
            "apellido": "Gonzales"
        }

        cy.log(exampleObject['nombre'])
        cy.log(exampleObject['apellido'])
        cy.log(exampleObject.nombre)
        cy.log(exampleObject.apellido)


        const exampleArrayOfValues = [
            "sofia", "rosa", "maria"
        ]

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])


        const users = {
            "firstname": "joe",
            "lastname": "block",
            "age": 30,
            "students": [
                {
                    "firstname": "marta",
                    "lastname": "lopez"
                },
                {
                    "firstname": "paco",
                    "lastname": "baras"
                }
            ]
        }

        cy.log(users.firstname)
        cy.log(users.lastname)
        cy.log(users.age)
        cy.log(users.students[0].firstname)
        cy.log(users.students[0].lastname)
        cy.log(users.students[1].firstname)
        cy.log(users.students[1].lastname)

        const exampleArrayOfObjects = [
            {
                "name": "juan"
            },
            {
                "name": "marcos"
            },
            {
                "name": "mario"
            }
        ]

        cy.log(exampleArrayOfObjects[0].name)
        cy.log(exampleArrayOfObjects[1].name)
        cy.log(exampleArrayOfObjects[2].name)

    });
});