import React, { useState, useEffect } from 'react';
import LockScreen from './components/LockScreen';
import UnlockContent from './components/UnlockContent';
import { Fingerprint } from 'lucide-react';

function App() {
  const [userRole, setUserRole] = useState(null); // 'me' or 'friend'
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // Check URL params
    const params = new URLSearchParams(window.location.search);
    const user = params.get('user');
    if (user === 'me' || user === 'friend') {
      setUserRole(user);
    }
  }, []);

  const selectRole = (role) => {
    setUserRole(role);
    // Optional: Update URL without reload
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('user', role);
    window.history.pushState({}, '', newUrl);
  };

  if (!userRole) {
    return (
      <div className="min-h-screen bg-cute-bg flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-cute-text mb-8">Quem é você? 🤔</h1>
        <div className="flex gap-4">
          <button onClick={() => selectRole('me')} className="bg-cute-lavender p-6 rounded-2xl hover:bg-cute-pink transition-colors">
            <span className="text-xl font-bold block mb-2">Felipe</span>
            <Fingerprint className="mx-auto" />
          </button>
          <button onClick={() => selectRole('friend')} className="bg-cute-lavender p-6 rounded-2xl hover:bg-cute-pink transition-colors">
            <span className="text-xl font-bold block mb-2">Ela ❤️</span>
            <Fingerprint className="mx-auto" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="antialiased">
      {unlocked ? (
        <UnlockContent />
      ) : (
        <LockScreen currentUser={userRole} onUnlock={() => setUnlocked(true)} />
      )}
    </div>
  );
}

export default App;
