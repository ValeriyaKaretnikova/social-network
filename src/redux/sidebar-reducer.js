const initialState = {
  friends: [
    {
      id: 1,
      name: "Maria",
      picture: "ava1",
    },
    {
      id: 2,
      name: "Sasha",
      picture: "ava2",
    },
    {
      id: 3,
      name: "Sarah",
      picture: "ava4",
    },
    {
      id: 4,
      name: "Victor",
      picture: "ava7",
    },
    {
      id: 5,
      name: "Irene",
      picture: "ava8",
    },
    {
      id: 6,
      name: "David",
      picture: "ava9",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
