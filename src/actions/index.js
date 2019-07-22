import _ from "lodash";
import jsonPlaceholder from "../apis/jsonplaceholder";

// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response
//   };
// };

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //console.log("About to fetch Posts");
  await dispatch(fetchPosts());
  console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => {
    dispatch(fetchUser(id));
  });
  //console.log(userIds);
  // _.chain(getState().posts)
  //   .map("userId")
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value();
};
export const fetchPosts = () => async dispatch => {
  ///with redux-thunk we can use async-await because redux-thunk works asynchronously
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  ///with redux-thunk we can use async-await because redux-thunk works asynchronously
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });
