import { all, take, call, put, takeEvery, select } from "redux-saga/effects";

const whitelist = {
	["INCREMENT_LIKES"]: true,
	["ADD_COMMENT"]: true,
	["DELETE_COMMENT"]: true,
	["ADDED_POST"]: true
};

function* helloSagas() {
	console.log("hey");
}
function* addPostSaga(action) {
	yield put({ type: "ADD_POST", post: action.post });
	yield put({ type: "ADDED_POST" });
}
function* fetchState() {
	try {
		console.log("fetchState");
		const response = yield call(fetch, "http://localhost:5000/loadState");
		const state = yield call([response, "json"]);
		// console.log(state);
		yield all([
			put({ type: "COMMENTS_FETCH_SUCCEEDED", data: state.comments }),
			put({ type: "POSTS_FETCH_SUCCEEDED", data: state.posts })
		]);
	} catch (error) {
		yield put({ type: "STATE_LOAD_FAILED", error });
	}
}
function* WatchSaveState() {
	while (true) {
		const action = yield take();
		if (!whitelist[action.type]) {
			continue;
		}

		const data = yield select(state => ({
			posts: state.posts,
			comments: state.comments
		}));
		const opts = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		try {
			const response = yield call(
				fetch,
				"http://localhost:5000/saveComments",
				opts
			);
			yield put({ type: "STATE_SAVE_SUCCEEDED", response });
		} catch (error) {
			yield put({ type: "STATE_SAVE_FAILED" }, error);
		}
	}
}

export default function* rootSaga() {
	console.log("now watching");
	yield all([
		helloSagas(),
		fetchState(),
		WatchSaveState(),
		takeEvery("ADD_POST_ACTION", addPostSaga)
	]);
}
