import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomeBlogs from "./components/HomeBlogs";
import View from "./components/View";


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route exact path='/' element = {<Home/>}/>
            <Route exact path='/createblog' element = {<CreateBlog/>}/>
            <Route exact path='/login' element = {<Login/>}/>
            <Route exact path='/register' element = {<Register/>}/>
            <Route exact path='/homeblog' element = {<HomeBlogs/>}/>
            <Route exact path="/view/:id" element={<View/>}/>


            {/* <Route exact path="/view/:id" element={<View/>}/>
              <Route exact path="/edit/:id" element={<Edit/>}/>  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
