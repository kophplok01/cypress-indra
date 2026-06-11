import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export function createUserData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: uuidv4(),
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    phoneNumber: faker.phone.number(),
    createdAt: dayjs().format("YYYY-MM-DD"),
  };
}