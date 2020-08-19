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

});
