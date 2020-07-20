export const dummyData = {
  "0": {
    id: "0",
    name: "김",
    phone: "010-0000-0000"
  },
  "1": {
    id: "1",
    name: "송",
    phone: "010-1111-1111"
  },
  "2": {
    id: "2",
    name: "라",
    phone: "010-2222-2222"
  },
  "3": {
    id: "3",
    name: "주",
    phone: "010-3333-3333"
  },
  "4": {
    id: "4",
    name: "최",
    phone: "010-4444-4444"
  },
}

export var nextId = Object.keys(dummyData).length;

export const setNextId = () => {
  nextId++;
}
