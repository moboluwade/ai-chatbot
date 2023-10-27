import Chat from "./components/Chat/Chat";
import Layout from "./views/Layout/Layout";

function App() {
  return (
   <Layout>
    {/* newer components should be built in the dedicted components folder and called in here*/}
    <Chat />
   </Layout>
  );
}

export default App;
