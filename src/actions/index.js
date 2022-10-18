import jasonPlaceholder from "../apis/jasonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jasonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jasonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

/// Alternate way //////

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
// const response = await jasonPlaceholder.get(`users/${id}`);

// dispatch({ type: "FETCH_USER", payload: response.data });
// });
