import { faker } from "@faker-js/faker";

export const generateCheckoutData = () => {
  return {
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    zipcode: faker.location.zipCode()
  }

}