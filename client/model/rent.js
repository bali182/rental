export class Rent {
  constructor({id, address, rooms, baths, image, price = {currency, cost, interval}, }) {
    this.id = id;
    this.address = address;
    this.rooms = rooms;
    this.baths = baths;
    this.image = image;
    this.price = price;
  }
}