// Put js code here
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers'

import reduxCrudAsync from 'redux-crud-async'
const config  = {
  host : 'http://192.168.0.42:1337'
}
var crud = new reduxCrudAsync(config)

io.socket.post('/auth/signup', {
  email : 'test1@test.com',
  username : 'test1',
  password : '123123',
  password_confirmation : '123123'

}, function(resData, jwres){
  console.log(resData)
  console.log(jwres)


  io.socket.post('/auth/signup', {
    email : 'test1@test.com',
    username : 'test1',
    password : '123123',
    password_confirmation : '123123'

  }, function(resData, jwres){
    console.log(resData)
    console.log(jwres)


  })

})




// Add the reducer to your store on the `routing` key
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     routing: routerReducer
//   })
// )
//
// // Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)
//
// ReactDOM.render(
//   <Provider store={store}>
//     { /* Tell the Router to use our enhanced history */ }
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <Route path="foo" component={Foo}/>
//         <Route path="bar" component={Bar}/>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('mount')
// )