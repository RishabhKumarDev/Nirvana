import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FirstPage from "./pages/FirstPage";
import InputPage from "./pages/InputPage";
import HistoryPage from "./pages/HistoryPage";
import Playground from "./components/Notification/playground";
import Notification from "./components/Notification/Notification";
import AuthPageContainer from "./components/AuthPageContainer";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotFoundPage from "./pages/NotFound";
import { useAuth } from "./Firebase/Context/Auth";

function App() {
  const location = useLocation();
  const { user, loading } = useAuth();

  const hideNavPaths = [ "/signin", "/signup", "/authpage", "*"]; // just keep this so i know diff. ways to hide nav. 
  if (loading) return <p>loading...</p>;
  return (
    <>
      {!hideNavPaths.includes(location.pathname) && <Navbar />}
      <div className="content">
        <Routes>
          {/* unauthorised user route */}
          {!user ? (
            <>
              <Route path="/authpage" element={<AuthPageContainer />} />
            </>
          ) : (
            <Route path="/authpage" element={<Navigate to="/" replace />} />
          )}

          {/* private routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<FirstPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* public routes */}
          <Route path="/playground" element={<Playground />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Notification />
      </div>
    </>
  );
}

export default App;
