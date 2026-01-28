import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ref, onValue, set, onDisconnect } from 'firebase/database';
import { db } from '../firebase';
import { Fingerprint, Heart } from 'lucide-react';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const LockScreen = ({ currentUser, onUnlock }) => {
    const [partnerActive, setPartnerActive] = useState(false);
    const [selfActive, setSelfActive] = useState(false);

    // Identify roles
    const myRole = currentUser === 'me' ? 'me' : 'friend';
    const partnerRole = currentUser === 'me' ? 'friend' : 'me';

    useEffect(() => {
        const partnerRef = ref(db, `session/${partnerRole}_active`);

        const unsubscribe = onValue(partnerRef, (snapshot) => {
            const val = snapshot.val();
            setPartnerActive(!!val);
        });

        return () => unsubscribe();
    }, [partnerRole]);

    // Unlock Trigger
    useEffect(() => {
        if (selfActive && partnerActive) {
            const timer = setTimeout(() => {
                if (selfActive && partnerActive) {
                    if (onUnlock) onUnlock();
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [selfActive, partnerActive, onUnlock]);

    // Handle Touch/Click
    const handleInteractionStart = async () => {
        setSelfActive(true);
        const myRef = ref(db, `session/${myRole}_active`);
        await set(myRef, true);
        onDisconnect(myRef).set(false);

        // If I am the friend, send notification to Felipe
        if (myRole === 'friend') {
            sendTelegramNotification();
        }
    };

    const handleInteractionEnd = async () => {
        setSelfActive(false);
        const myRef = ref(db, `session/${myRole}_active`);
        await set(myRef, false);
    };

    const sendTelegramNotification = async () => {
        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

        const text = "Oii Felipe! Ela está esperando por você no site! 💕";
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}`;

        try {
            await fetch(url);
        } catch (e) {
            console.error("Failed to notify", e);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cute-bg to-cute-lavender p-4 text-center">
            <AnimatePresence>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl flex flex-col items-center max-w-md w-full"
                >
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-2">Juntos</h1>
                    <p className="text-gray-500 mb-8">Precisamos estar conectados 💕</p>

                    <div className="flex justify-center items-center gap-8 mb-8">
                        {/* My Indicator */}
                        <div className="flex flex-col items-center gap-2">
                            <div className={`p-4 rounded-full transition-all duration-500 ${selfActive ? 'bg-cute-pink shadow-lg scale-110' : 'bg-gray-200'}`}>
                                <Fingerprint className={`w-12 h-12 ${selfActive ? 'text-white' : 'text-gray-400'}`} />
                            </div>
                            <span className="text-sm font-medium">{myRole === 'me' ? 'Felipe' : 'Bea'}</span>
                        </div>

                        <Heart className={`w-8 h-8 ${selfActive && partnerActive ? 'text-cute-red animate-pulse' : 'text-gray-300'}`} fill={selfActive && partnerActive ? "currentColor" : "none"} />

                        {/* Partner Indicator */}
                        <div className="flex flex-col items-center gap-2">
                            <div className={`p-4 rounded-full transition-all duration-500 ${partnerActive ? 'bg-cute-pink shadow-lg scale-110' : 'bg-gray-200'}`}>
                                <Fingerprint className={`w-12 h-12 ${partnerActive ? 'text-white' : 'text-gray-400'}`} />
                            </div>
                            <span className="text-sm font-medium">{partnerRole === 'me' ? 'Felipe' : 'Bea'}</span>
                        </div>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onPointerDown={handleInteractionStart}
                        onPointerUp={handleInteractionEnd}
                        onPointerLeave={handleInteractionEnd}
                        className="w-full py-4 bg-cute-pink hover:bg-pink-300 text-white rounded-xl text-lg font-bold shadow-md transition-colors touch-none select-none"
                    >
                        Segure aqui ❤️
                    </motion.button>

                    <p className="mt-4 text-xs text-gray-400">
                        {selfActive && partnerActive ? "Conectando... 💖" : partnerActive ? "Segure também!" : "Esperando..."}
                    </p>

                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LockScreen;
