function posts(state = [], action) {
  switch (action.type) {
    case "POSTS_FETCH_SUCCEEDED":
      console.log("got the posts from api");
      console.log(action.data);
      return action.data;
    case "INCREMENT_LIKES":
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;
