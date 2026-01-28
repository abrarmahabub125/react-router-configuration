import { createBrowserRouter, redirect } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Reels from "./pages/Reels";
import Marketplace from "./pages/Marketplace";
import Groupe from "./pages/Groupe";
import Notification from "./pages/Notification";
import SidebarLayout from "./layouts/SidebarLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import HomeLayout from "./layouts/HomeLayout";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
// =================================

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1 className="mt-6 text-center">Page not found.</h1>,
    children: [
      {
        path: "/",
        Component: HomeLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
        ],
      },
      {
        path: "reels",
        Component: Reels,
      },
      {
        path: "profile",
        Component: ProfileLayout,
        loader: () => {
          let user = true;
          if (!user) {
            return redirect("/reels");
          }
        },
        children: [
          {
            index: true,
            Component: Profile,
          },
        ],
      },
      {
        path: "marketplace",
        Component: SidebarLayout,
        children: [
          {
            index: true,
            element: <h1>Marketplace feed</h1>,
          },
          {
            path: "notifications",
            element: <h1>Marketplace notification</h1>,
          },
          {
            path: "inbox",
            element: <h1>Marketplace inbox</h1>,
          },
        ],
      },
      {
        path: "groups",
        Component: SidebarLayout,
        children: [
          {
            path: "feed",
            element: <h1>Groups feed</h1>,
          },
          {
            path: "discover",
            element: <h1>Discover groups</h1>,
          },
          {
            path: "joins",
            element: <h1>Joined groupe list</h1>,
          },
        ],
      },

      {
        path: "friends",
        Component: SidebarLayout,
        children: [
          {
            index: true,
            element: <h1>Friends Home</h1>,
          },
          {
            path: "requests",
            element: <h1>Friends Requests</h1>,
          },
          {
            path: "suggestions",
            element: <h1>Friends suggestions</h1>,
          },
          {
            path: "list",
            element: <h1>Friends list</h1>,
          },
          {
            path: "birthdays",
            element: <h1>Friends birthdays</h1>,
          },
        ],
      },
      {
        path: "notification",
        Component: SidebarLayout,
      },
    ],
  },
]);

export default router;
