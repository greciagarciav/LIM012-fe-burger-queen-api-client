import { filterPipe } from './filter.pipe';

describe('filterPipe', () => {
  const pipe = new filterPipe();
  const data  = [{
    dateEntry: "2020-08-12",
    id: "12333",
    image: "assets/images/BQ.png",
    name: "Jugo de frutas natural",
    price: "7",
    type: "breakfast",
  }, {
    dateEntry: "2020-08-12",
    id: "12rr33",
    image: "assets/images/BQ.png",
    name: "Hamburguesa doble",
    price: "7",
    type: "hamburguer"
  }]

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter the items by hamburger type', () => {
    expect(pipe.transform(data,'hamburguer')).toEqual([{
      dateEntry: "2020-08-12",
      id: "12rr33",
      image: "assets/images/BQ.png",
      name: "Hamburguesa doble",
      price: "7",
      type: "hamburguer"
    }]);
  });

  it('should filter the items by breakfast type', () => {
    expect(pipe.transform(data , 'breakfast')).toEqual([{
      dateEntry: "2020-08-12",
      id: "12333",
      image: "assets/images/BQ.png",
      name: "Jugo de frutas natural",
      price: "7",
      type: "breakfast",
    }]);
  });

  const dataOrders  = [{
    "id": "456",
    "client": "Alba3",
    "products": [
      {
        "qty": 1,
        "product": {
          "_id": "141",
        }
      }
    ],
    "status": "pending",
    "dateEntry": "Date"
  },
  {
    "user": "",
    "client": "grecia",
    "products": [
      {
        "product": {
          "_id": "122112"
        },
        "qty": 3
      }
    ],
    "status": "delivering",
    "id": "i6OTdFC"
  },
  {
    "user": "",
    "client": "grrrrr",
    "products": [
      {
        "product": {
          "_id": "56456"
        },
        "qty": 3
      }
    ],
    "status": "delivered",
    "id": "LhJVKLy"
  }];

  it('should filter the items by status type', () => {
    expect(pipe.transform(dataOrders , 'pending')).toEqual([{
      "id": "456",
      "client": "Alba3",
      "products": [
        {
          "qty": 1,
          "product": {
            "_id": "141",
          }
        }
      ],
      "status": "pending",
      "dateEntry": "Date"
    }]);
  });

  it('should filter the items by status type', () => {
    expect(pipe.transform(dataOrders , 'delivering')).toEqual([{
      "user": "",
      "client": "grecia",
      "products": [
        {
          "product": {
            "_id": "122112"
          },
          "qty": 3
        }
      ],
      "status": "delivering",
      "id": "i6OTdFC"
    }]);
  });

  it('should filter the items by status type', () => {
    expect(pipe.transform(dataOrders , 'delivered')).toEqual([{
      "user": "",
      "client": "grrrrr",
      "products": [
        {
          "product": {
            "_id": "56456"
          },
          "qty": 3
        }
      ],
      "status": "delivered",
      "id": "LhJVKLy"
    }]);
  });
});
