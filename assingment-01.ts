////////////////////////////// Problem - 01 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function typeOfUnion(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * value;
  }
}



////////////////////////////// Problem - 02 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


interface Person {
  address?: { city?: string; street?: string };
  phone?: number;
}

function getAddressCity(params: Person): string | undefined {
  return params?.address?.city;
}



////////////////////////////// Problem - 03 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Cat {
  constructor(public name: string) {}

  isCat() {
    const nameLowercase = this.name.toLowerCase();
    if (nameLowercase === "cat") {
      console.log("Yes, it's a cat");
    } else {
      console.log("No, it's not a cat");
    }
  }
}


////////////////////////////// Problem - 04 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function addedNumber(array: (number | string)[]): number {
  let total = 0;

  for (const i of array) {
    if (typeof i === "number") {
      total = total + i;
    }
  }
  return total;
}

////////////////////////////// Problem - 05 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}

function combinedProper(Car: Car, Driver: Driver) {
  const result = { carDriverCombined: { car: Car, driver: Driver } };
  return result;
}

////////////////////////////// Problem - 06 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function ArrayAdded(params: unknown): void {
  const isArray = Array.isArray(params);
  if (isArray) {
    let total = 0;
    if (params.every((item) => typeof item === "number")) {
      for (const i of params) {
        total = total + i;
      }
    } else {
      console.log("This is not Only Number of Array");
      return;
    }
    console.log(`Total sum : ${total}`);
    return;
  } else {
    console.log("This is not Array");
    return;
  }
}

////////////////////////////// Problem - 07 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function findFirstOccurrence<Type>(array: Type[], findValue: Type): number {
  const index = array.indexOf(findValue);
  return index;
}

////////////////////////////// Problem - 08 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


interface Product {
  name: string;
  price: number;
  quantity: number;
}

function myCarts(array: Product[]) {
  let totalPrice = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const productPrice = element.price;
    const productQuantity = element.quantity;
    const totalProductPrice = productPrice * productQuantity;
    totalPrice = totalProductPrice + totalPrice;
  }
  return totalPrice;
}
