// increment
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    i,
    postId
  };
}

export function addPost(code, display_src, caption) {
  console.log("addPost called");
  var post = {
    caption,
    display_src,
    code,
    likes: 0
  };
  console.log(post);
  return {
    type: "ADD_POST_ACTION",
    post
  };
}
