import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MoviesListPage from "./pages/MoviesListPage";
import MoviePage from "./pages/MoviePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import ScreeningPage from "./pages/ScreeningPage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from './pages/ConfirmationPage'
import RegistrationPage from './pages/RegistrationPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<MoviesListPage />} />
              <Route path="/movie/:id" element={<MoviePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/movie/:id/screens" element={<ScreeningPage />} />
              <Route
                path="/movie/:id/screen/:screenId"
                exact
                element={
                  <PrivateRoute>
                    <BookingPage />
                  </PrivateRoute>
                }
              />
              <Route path="/movie/:id/screen/:screenId/booking/:bookingId/confirm" element={<ConfirmationPage />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
