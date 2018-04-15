import {  call, put,  takeLatest } from 'redux-saga/effects'
import { REQUEST_API_DATA,  receiveApiData} from './actions';
import { fetchData } from './api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  console.log('getApiData generator invoked');

   try {
     // do API Call here 
     const data = yield call(fetchData);
     yield put(receiveApiData(data));
   } catch (e) {
    console.log(e)
   }
}


export default function* mySaga() {
  console.log('mySaga generator invoked');
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

