import "./App.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import UserProfile from "./Modules/UserProfile/Page/UserProfile";
import JobList from "./Modules/JobList/Page/JobList";
import JobDetail from "./Modules/JobDetail/Page/JobDetail";
import Admin from "./Admin";
import AddUsers from "./Admin/components/AddUsers/AddUsers";
import EditUsers from "./Admin/components/EditUsers/EditUsers";
// import { Suspense } from "react";
// import renderRoutes from "./routes/index";

function App() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <BrowserRouter> */}
          <Routes>
          {/* {renderRoutes()} */}
            <Route path="/" element={<MainLayout />} />
            <Route path="/userProfile/:userId" element={<UserProfile />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="jobs/:jobId" element={<JobDetail />} />
            <Route path="*" element={<NotFound />} />
           
            <Route path="/admin" element={<Admin />}>

            </Route>
            <Route path="/addusers" element={<AddUsers />} />
            <Route path="/editusers" element={<EditUsers />} />
            
          {/* <JobDetail /> */}
          </Routes>

        {/* </BrowserRouter> */}
      {/* </Suspense> */}
    </>
  );
}

export default App;
