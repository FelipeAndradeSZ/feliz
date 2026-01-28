import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LockScreen from './components/LockScreen';
import UnlockContent from './components/UnlockContent';
import { Fingerprint, Sun, Heart } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-50">🌸</div>
        <div className="absolute top-20 right-16 text-3xl animate-pulse opacity-50">✨</div>
        <div className="absolute bottom-20 left-16 text-3xl animate-pulse opacity-50">💕</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-bounce opacity-50">🦋</div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            🌻
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-2">
            Quem é você?
          </h1>
          <p className="text-cute-text/60 mb-8">Toque no seu nome 💕</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 md:gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => selectRole('me')}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-blue-200/50"
          >
            <span className="text-xl md:text-2xl font-bold block mb-3 text-blue-600">Felipe</span>
            <div className="p-3 bg-blue-100 rounded-full mx-auto mb-2">
              <Fingerprint className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-2xl">💙</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => selectRole('friend')}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-pink-200/50"
          >
            <span className="text-xl md:text-2xl font-bold block mb-3 text-pink-600">Bea</span>
            <div className="p-3 bg-pink-100 rounded-full mx-auto mb-2">
              <Sun className="w-8 h-8 text-orange-400" />
            </div>
            <span className="text-2xl">☀️</span>
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-cute-text/40 text-sm"
        >
          Um cantinho especial feito com amor 💖
        </motion.p>
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
