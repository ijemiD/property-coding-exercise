import { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header"));
const MainContent = lazy(() => import("./components/MainContent"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </Suspense>
  );
}
