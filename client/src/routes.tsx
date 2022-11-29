import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment, lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
import GuestGuard from "./components/GuestGuard";
import AuthGuard from "./components/AuthGuard";
import MainLayout from "./views/Main/index";

export interface RouteAttributes {
  path: string;
  guard?: any;
  layout?: any;
  component?: any;
  navigatePath?: string;
  nestedPath?: string;
}

export const routes: RouteAttributes[] = [
  {
    path: "/404",
    component: lazy(() => import("./views/Error/")),
  },
  {
    path: "/expense/transactions",
    guard: AuthGuard,
    layout: MainLayout,
  },
  {
    path: "/expense/wallet",
    guard: AuthGuard,
    component: lazy(() => import("./views/Wallet"))
  },
  {
    path: "/",
    guard: GuestGuard,
    navigatePath: "/user/login",
  },
  {
    path: "/user/:type",
    guard: GuestGuard,
    component: lazy(() => import("./views/Login")),
  },
  {
    path: "*",
    component: lazy(() => import("./views/Error/")),
  },
];

const RenderRoutes = (routes: RouteAttributes[]) => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        {routes.map((route, index) => {
          const Guard = route.guard || Fragment;
          const Component = route.component || Fragment;
          const Layout = route.layout || Fragment;
          let element;
          if (route.navigatePath) {
            element = <Navigate to={route.navigatePath} />;
          } else {
            element = (
              <Guard>
                <Layout>
                  <Component />
                </Layout>
              </Guard>
            );
          }
          return <Route key={index} path={route.path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default RenderRoutes;
