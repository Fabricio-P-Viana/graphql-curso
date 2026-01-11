const PostsMock = [
  { id: "1", title: "Post 1" },
  { id: "2", title: "Post 2" },
  { id: "3", title: "Post 3" },
];

const post = () => {
  return PostsMock[0];
};

const posts = () => {
  return PostsMock;
}

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
