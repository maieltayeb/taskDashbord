
import './App.css';
import Dashboard from './pages/dashbord/dashbord';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getAllUsers}from './redux/actions/userActions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Layout from './components/layout/layout';
import Groups from './pages/groups/groups';
import Profiles from './pages/profiles/profiles';
import Users from './pages/users/usersTable';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(getAllUsers())
  },[dispatch])
  return (
    <div className="App">
       <BrowserRouter>
      <Layout>
      <Switch>
       
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/profiles">
          <Profiles />
        </Route>
      
        <Route path="/users">
          <Users />
        </Route>
        <Route  path="/dashbord">
        <Dashboard />
        </Route>
        <Route exact path="/">
        <Users />
        </Route>
      </Switch>
      </Layout>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

// import './App.css';
// import Dashboard from './components/dashbord/dashbordHeader';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import {getAllUsers}from './redux/actions/userActions';


// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// function App() {
//   const dispatch=useDispatch();
//   useEffect(()=>{
//   dispatch(getAllUsers())
//   },[dispatch])
//   return (
    
//        <Router>

//        <Switch>
//         <Route exact path="/">
//         <Dashboard />
//         </Route>
//         <Route path="/create">
//           {/* <Create /> */}
//         </Route>
//       </Switch>
//        </Router>
   
    
//   );
// }

// export default App;
