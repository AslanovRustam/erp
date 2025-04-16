import { Route, Routes } from "react-router";
import { lazy } from "react";
import Layout from "./comopnents/Layout/Layout";
const Routine = lazy(() => import("./pages/Routine"));
const BasicInformation = lazy(() => import("./pages/BasicInformation"));
const AccountOperations = lazy(() => import("./pages/AccountOperations"));
const ReportJob = lazy(() => import("./pages/ReportJob"));
const SystemSettings = lazy(() => import("./pages/SystemSettings"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Routine />} />
        <Route path="/basicInformation" element={<BasicInformation />} />
        <Route path="/accountOperations" element={<AccountOperations />} />
        <Route path="/reportJob" element={<ReportJob />} />
        <Route path="/systemSettings" element={<SystemSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
