import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { NotesProvider } from "./components/NotesContext.jsx";
import { NotificationProvider } from "./components/Notification/NotificationContext.jsx";
import { AuthProvider } from "./Firebase/Context/Auth.jsx";
import { DatabaseProvider } from "./Firebase/Context/Database.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <DatabaseProvider>
          <NotificationProvider>
            <NotesProvider>
              <App />
            </NotesProvider>
          </NotificationProvider>
        </DatabaseProvider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
