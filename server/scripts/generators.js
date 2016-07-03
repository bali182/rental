import faker from 'faker';
import crypto from 'crypto';

function randomLocation() {
  return {
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    name: faker.fake("{{address.city}}, {{address.streetAddress}}")
  }
};

function randomBeds() {
  return {
    type: 'beds',
    value: faker.random.number({ min: 1, max: 3 })
  }
}

function randomBaths() {
  return {
    type: 'baths',
    value: faker.random.number({ min: 1, max: 3 })
  }
}

function randomPrice() {
  return {
    type: 'price',
    value: faker.random.number({ min: 500, max: 1000 })
  }
}

function randomCurrency() {
  return {
    type: 'currency',
    value: faker.random.arrayElement(['eur', 'usd', 'gbp'])
  }
}

function randomPayments() {
  return {
    type: 'payments',
    value: faker.random.arrayElement(['week', 'month'])
  }
}

function randomFurnished() {
  return {
    type: 'furnished',
    value: faker.random.boolean()
  }
}

function randomPetsAllowed() {
  return {
    type: 'pets-allowed',
    value: faker.random.boolean()
  }
}

function randomSmokingAllowed() {
  return {
    type: 'smoking-allowed',
    value: faker.random.boolean()
  }
}

function randomPreferredTenants() {
  return {
    type: 'preferred-tenants',
    value: faker.random.arrayElement(['couple', 'single'])
  }
}

function randomProperties() {
  return [
    randomBeds,
    randomBaths,
    randomCurrency,
    randomPrice,
    randomPayments
  ].concat([
    randomFurnished,
    randomPetsAllowed,
    randomSmokingAllowed,
    randomPreferredTenants
  ].filter(_ => faker.random.boolean()))
    .map(factory => factory())
}


export function randomUser() {
  const password = 'foo'; // so we can log in with everyone
  const salt = crypto.randomBytes(64).toString('base64');

  function createHash(input) {
    const hash = crypto.createHash('sha256');
    hash.update(input)
    return hash.digest('hex');
  }

  return {
    email: faker.internet.email().toLowerCase(),
    hash: createHash(password) + createHash(salt),
    salt: salt,
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber('056 #### ####'),
  }
}

export function randomRentable() {
  return {
    location: randomLocation(),
    properties: randomProperties()
  }
};

