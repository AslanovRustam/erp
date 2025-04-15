import Main from "../comopnents/Main/Main";
import Form from "../comopnents/Form/Form";
import SalesDetails from "../comopnents/SalesDetails/SalesDetails";
import EditButtons from "../comopnents/EditButtons/EditButtons";
import Bottom from "../comopnents/Bottom/Bottom";

export default function Routine() {
  return (
    <Main title="銷售主檔">
      <Form />
      <SalesDetails />
      <EditButtons />
      <Bottom />
    </Main>
  );
}
