import { Routes, Route } from 'react-router-dom';
import DummyErrorPage from '../pages/public/DummyErrorPage';
import ErrorPage from '../pages/public/ErrorPage';
import HomePage from '../pages/public/HomePage';
import NotFoundPage from '../pages/public/NotFoundPage';
import LivesPage from '../pages/public/LivesPage';
import LifePage from '../pages/public/LifePage';
const PublicRouter = () => (
    <Routes>
        <Route element={<HomePage />} path="" />
        <Route element={<DummyErrorPage />} path="dummyError" />
        <Route element={<ErrorPage />} path="500" />
        <Route element={<NotFoundPage />} path="*" />
        <Route element={<LivesPage />} path="lives" />
        <Route element={<LifePage />} path="life/:id" />
    </Routes>
);

export default PublicRouter;
