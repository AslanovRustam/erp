import { Route, Routes } from "react-router";
import Layout from "./comopnents/Layout/Layout";
import Routine from "./pages/Routine";
import BasicInformation from "./pages/BasicInformation";
import AccountOperations from "./pages/AccountOperations";
import ReportJob from "./pages/ReportJob";
import SystemSettings from "./pages/SystemSettings";

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
