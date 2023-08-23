import { Navigate, createBrowserRouter } from "react-router-dom";
import { AUTH } from "../shared/config/constants"
// Layouts
import FullLayout from "@/components/layouts/FullLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
// Protected Route
import Protected from "@/shared/config/Protected";
// Pages
import Login from "./login";
import Register from "./register";
import NotFound from "./notFound";
import Dashboard from "./dashboard";
import Landing from "./landing";
import Lead from "./lead";
import LeadDetail from "./lead/LeadDetail";
import Test from "./test";

const user = {
  type: 'user'
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/auth/login' replace />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: "app",
    element: <Protected auth={[AUTH.ADMIN, AUTH.USER, AUTH.VISITOR]} currentUser={user.type as AUTH}>
      <MainLayout />
      </Protected>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'leads',
        element: <Lead />,
      },
      {
        path: 'leads/:id',
        element: <LeadDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
]);