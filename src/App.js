import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import GptSearchPage from "./components/GptSearchPage";

let route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path :'/gptsearch',
    element : <GptSearchPage/>
  }
]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={route} />
      </div>
    </Provider>
  );
}

export default App;
