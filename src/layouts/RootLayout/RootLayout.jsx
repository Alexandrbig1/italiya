import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export default function RootLayout() {
  return (
    <div>
      <header>header</header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer>footer</footer>
    </div>
  );
}
