const UsersMock = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Alice Johnson" },
];

const user = () => {
  return UsersMock[0];
};

const users = () => {
  return UsersMock;
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
