import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//   import NotFound from "@/app/404/page";
import IndexPage from "@/app/index/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<IndexPage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
