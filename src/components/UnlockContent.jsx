import React from 'react';
import { motion } from 'framer-motion';

const UnlockContent = () => {
    return (
        <div className="min-h-screen bg-cute-bg flex flex-col items-center p-8 text-center bg-pattern">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-cute-red mb-4">Yay! Conseguimos! 🎉</h1>
                <p className="text-xl text-cute-text mb-8">Agora estamos conectados ✨</p>

                <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold text-cute-pink mb-4">Bem-vinda, princesa! 👑</h2>
                    <p className="text-gray-600">
                        Fiz isso aqui pra te lembrar o quanto você é especial.
                        Sempre que sentir saudades, venha aqui e espere por mim.
                        Eu sempre vou aparecer. ❤️
                    </p>
                    <div className="mt-8">
                        {/* Future widgets here */}
                        <div className="w-full h-32 bg-cute-lavender rounded-xl flex items-center justify-center text-cute-text opacity-50">
                            Espaço para foto ou música
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default UnlockContent;
