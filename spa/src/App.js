import React, { lazy, Suspense } from "react";
import PropertyContext from "./store/PropertyContext";
import usePropertyHook from "./hooks/use-sampleProperty-api-hook";
import Skeleton from "@material-ui/lab/Skeleton";

const Header = lazy(() => import("./components/Header"));
const MainContent = lazy(() => import("./components/MainContent"));

export default function App() {
  const allProps = usePropertyHook();
  return (
    <PropertyContext.Provider value={{ ...allProps }}>
      <Suspense
        fallback={
          <Skeleton animation="wave" height={10} style={{ width: "100%" }} />
        }
      >
        <div>
          <Header />
          <MainContent />
        </div>
      </Suspense>
    </PropertyContext.Provider>
  );
}
