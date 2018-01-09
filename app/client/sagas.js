import { all, call, put, takeEvery } from "redux-saga/effects";

function* helloSagas() {
	console.log("hey");
}

function* watchPostRequest() {
	console.log("hey posts");
	yield takeEvery("POSTS_FETCH_REQUESTED", fetchPostsData);
}

function* watchCommentsRequest() {
	console.log("hey comments");
	yield takeEvery("COMMENTS_FETCH_REQUESTED", fetchCommentsData);
}

function* fetchPostsData(action) {
	try {
		console.log("fetchPostsData");
		const response = yield call(fetch, "http://localhost:5000/loadPosts");
		const data = yield call([response, "json"]);
		// console.log(data);
		yield put({ type: "POSTS_FETCH_SUCCEEDED", data });
	} catch (error) {
		yield put({ type: "POSTS_FETCH_FAILED", error });
	}
}

function* fetchCommentsData(action) {
	try {
		console.log("fetchCommentsData");
		const response = yield call(
			fetch,
			"http://localhost:5000/loadComments"
		);
		const data = yield call([response, "json"]);
		// console.log(data);
		yield put({ type: "COMMENTS_FETCH_SUCCEEDED", data });
	} catch (error) {
		yield put({ type: "COMMENTS_FETCH_FAILED", error });
	}
}

export default function* rootSaga() {
	console.log("now watching");
	yield all([helloSagas(), watchCommentsRequest(), watchPostRequest()]);
}
