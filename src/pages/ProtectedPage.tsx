import Menu from "../components/Menu/Menu";

function ProtectedPage() {

  return (
    <div className="ProtectedPage">
      <Menu />
      <h1>Welcome to Protected Page</h1>
      <p>Only authenticated users can see this page!</p>
    </div>
  );

}

export default ProtectedPage;