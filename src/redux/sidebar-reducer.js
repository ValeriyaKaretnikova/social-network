const initialState = {
  friends: [
    {
      id: 1,
      name: "Masha",
      picture: "ava1",
    },
    {
      id: 2,
      name: "Sasha",
      picture: "ava2",
    },
    {
      id: 3,
      name: "Sveta",
      picture: "ava4",
    },
    {
      id: 4,
      name: "Viktor",
      picture: "ava7",
    },
    {
      id: 5,
      name: "Irina",
      picture: "ava8",
    },
    {
      id: 6,
      name: "Dima",
      picture: "ava9",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
