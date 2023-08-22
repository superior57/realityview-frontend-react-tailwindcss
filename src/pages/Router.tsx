import {
  createBrowserRouter,
} from "react-router-dom";
import { AUTH } from "../shared/config/constants"
import FullLayout from "@/components/layouts/FullLayout";
import Dashboard from "./dashboard";
import Protected from "@/shared/config/Protected";
import NotFound from "./notFound";
const user = {
  type: 'user'
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        path: "dashboard",
        element: <Protected auth={[AUTH.ADMIN, AUTH.USER, AUTH.VISITOR]} currentUser={user.type as AUTH}>
          <Dashboard />
        </Protected>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
]);