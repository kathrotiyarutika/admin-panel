import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Component/pages/Layout";
import Home from "./Component/pages/Home";
import Contact from "./Component/pages/Contact";
import LoginReg from "./Component/pages/Auth/LoginReg";
import SendPasswordResetEmail from "./Component/pages/Auth/SendPasswordResetEmail";
import ResetPassword from "./Component/pages/Auth/ResetPassword";
import Dashboard from "./Component/pages/Dashboard";
import CreateTour from "./tour/CreateTour";

// import Hooks from "./Components/Hooks";
// import Task from "./Components/Task";
// import Example from "./Components/Example";
// import TodoList from "./Components/TodoList";
// import List from "./Components/List";
// import Login from "./Components/Login"
// import Cards from "./Components/Cards";
// import Data from "./Data";
// import Slotgame from "./Components/Slotgame";
// import Form from "./Components/Form";
// import Axios from "./Components/Axios";

// console.log(Data);
function App() {
  return (
    <>
      {/* <List /> */}
      {/* <TodoList /> */}
      {/* <Example /> */}
      {/* <Login /> */}
      {/* <h1 className="heading_style">List of top 5 Netflix Series in 2022 </h1>
      {Data.map((val, index) => {
        return (
          <div key={index}>
            <Cards
              src={val.src}
              title={val.title}
              series={val.series}
              link={val.link}
            />
          </div>
        );
      })} */}
      {/* <h1 className="heading_style">Slot Machine Game 🎰</h1>
      <div className="slotmachine">
        <Slotgame x="😃" y="😃" z="😃" />
        <hr />
        <Slotgame x="🍎" y="🥝" z="🍎" />
        <hr />
        <Slotgame x="😆" y="😆" z="🤣" />
        <hr />
        <Slotgame x="🌎" y="🌎" z="🌎" />
      </div> */}
      {/* <Hooks /> */}
      {/* <Form /> */}
      {/* <Task />  */}
      {/* <Axios /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="loginReg" element={<LoginReg />} />
            <Route path="tour" element={<CreateTour />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// https://youtu.be/5PfvoAj-SMk
