import Login from "./Login";
import Panel from "./Panel";
import NotFound from "./NotFound";
import Home from './Home';

const routes = [
  {
    exact: true,
    path: "/panel",
    component: Panel,
    private: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;