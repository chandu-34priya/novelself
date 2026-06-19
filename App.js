import React, { useState } from 'react';
import { NOVELS } from './data/novels';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NovelDetailPage from './pages/NovelDetailPage';
import AccountPage from './pages/AccountPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const [page, setPage] = useState('home');
  const [pageParams, setPageParams] = useState({});
  const [selectedNovel, setSelectedNovel] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedList, setSavedList] = useState([]);

  const navigate = (p, params = {}) => {
    setPage(p);
    setPageParams(params);
    window.scrollTo(0, 0);
  };

  const openNovel = (novel) => {
    setSelectedNovel(novel);
    setPage('detail');
    window.scrollTo(0, 0);
  };

  const toggleSave = (id) => {
    setSavedList((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <Navbar
        page={page}
        navigate={navigate}
        isLoggedIn={isLoggedIn}
        onLogout={() => setIsLoggedIn(false)}
        savedCount={savedList.length}
      />

      <main>
        {page === 'home' && (
          <HomePage onNavigate={navigate} onNovelClick={openNovel} />
        )}

        {page === 'search' && (
          <SearchPage initial={pageParams} onNovelClick={openNovel} />
        )}

        {page === 'detail' && selectedNovel && (
          <NovelDetailPage
            novel={selectedNovel}
            onBack={() => navigate('search')}
            isLoggedIn={isLoggedIn}
            onAddToList={toggleSave}
            savedList={savedList}
          />
        )}

        {page === 'account' && (
          <AccountPage
            isLoggedIn={isLoggedIn}
            onLogin={() => setIsLoggedIn(true)}
            onLogout={() => setIsLoggedIn(false)}
            savedList={savedList}
            novels={NOVELS}
          />
        )}

        {page === 'admin' && <AdminPage />}
      </main>

      <Footer />
    </div>
  );
}
