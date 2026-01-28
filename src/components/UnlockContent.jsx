import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, Sun, Moon, CloudRain, Coffee, Music, Send } from 'lucide-react';

// Floating particles component
const FloatingParticles = () => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        emoji: ['💖', '✨', '🌸', '💫', '🦋', '🌷', '💕', '⭐', '🌺'][i % 9],
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 10,
        size: 12 + Math.random() * 16,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute"
                    initial={{
                        x: `${p.x}vw`,
                        y: '110vh',
                        opacity: 0,
                        rotate: -20
                    }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 1, 1, 0],
                        rotate: 20
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    style={{ fontSize: p.size }}
                >
                    {p.emoji}
                </motion.div>
            ))}
        </div>
    );
};

// Inspiring quotes
const quotes = [
    { text: "Você é mais forte do que imagina, mais corajosa do que acredita, e mais amada do que sabe.", emoji: "💪" },
    { text: "Dias difíceis constroem pessoas mais fortes. Você está se tornando incrível.", emoji: "🌟" },
    { text: "Cada lágrima que você derrama rega as sementes da sua força interior.", emoji: "🌱" },
    { text: "O sol sempre volta a brilhar, e você também vai.", emoji: "☀️" },
    { text: "Você não está sozinha. Nunca esteve, e nunca estará.", emoji: "🤝" },
    { text: "Sua dor de hoje é a força de amanhã.", emoji: "🦋" },
    { text: "Permita-se ter dias ruins, mas nunca duvide do seu valor.", emoji: "💎" },
    { text: "Mesmo na escuridão, você brilha. Você é luz.", emoji: "✨" },
];

// Message cards with special messages
const MessageCard = ({ title, message, icon: Icon, delay, gradient }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay }}
        whileHover={{ scale: 1.02, y: -5 }}
        className={`relative overflow-hidden rounded-3xl p-6 shadow-2xl ${gradient}`}
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-white/90 leading-relaxed">{message}</p>
        </div>
    </motion.div>
);

// Interactive heart button
const HeartButton = () => {
    const [hearts, setHearts] = useState([]);

    const addHeart = () => {
        const newHeart = {
            id: Date.now(),
            x: Math.random() * 60 - 30,
        };
        setHearts(prev => [...prev, newHeart]);
        setTimeout(() => {
            setHearts(prev => prev.filter(h => h.id !== newHeart.id));
        }, 2000);
    };

    return (
        <motion.div
            className="relative cursor-pointer"
            whileTap={{ scale: 0.9 }}
            onClick={addHeart}
        >
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="p-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg shadow-pink-300/50"
            >
                <Heart className="w-12 h-12 text-white" fill="white" />
            </motion.div>

            <AnimatePresence>
                {hearts.map(heart => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 1, y: 0, x: heart.x }}
                        animate={{ opacity: 0, y: -100 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-0 left-1/2 text-3xl pointer-events-none"
                    >
                        💕
                    </motion.div>
                ))}
            </AnimatePresence>
            <p className="text-center mt-3 text-cute-text/70 text-sm">Toque para enviar amor 💕</p>
        </motion.div>
    );
};

// Glowing orb decoration
const GlowingOrb = ({ color, size, top, left, delay }) => (
    <motion.div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
            background: color,
            width: size,
            height: size,
            top,
            left,
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

const UnlockContent = () => {
    const [currentQuote, setCurrentQuote] = useState(0);
    const [showWelcome, setShowWelcome] = useState(true);

    // Rotate quotes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote(prev => (prev + 1) % quotes.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    // Hide welcome after delay
    useEffect(() => {
        const timer = setTimeout(() => setShowWelcome(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
            {/* Background decorations */}
            <GlowingOrb color="#FFB6C1" size="400px" top="-100px" left="-100px" delay={0} />
            <GlowingOrb color="#DDA0DD" size="300px" top="50%" left="80%" delay={1} />
            <GlowingOrb color="#FFDAB9" size="350px" top="70%" left="-50px" delay={2} />

            {/* Floating particles */}
            <FloatingParticles />

            {/* Welcome overlay */}
            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="text-center"
                        >
                            <motion.div
                                className="text-8xl mb-4"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.5, repeat: 2 }}
                            >
                                💖
                            </motion.div>
                            <h1 className="text-4xl font-bold text-cute-red">Bem-vinda!</h1>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="inline-block"
                    >
                        <span className="text-6xl">🌸</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-2">
                        Um Cantinho Só Seu
                    </h1>
                    <p className="text-lg text-cute-text/70">
                        Um espaço de paz, amor e carinho 💕
                    </p>
                </motion.header>

                {/* Quote carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-12"
                >
                    <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400" />
                        <Sparkles className="absolute top-4 right-4 w-6 h-6 text-yellow-400 animate-pulse" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuote}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <span className="text-4xl mb-4 block">{quotes[currentQuote].emoji}</span>
                                <p className="text-xl md:text-2xl text-cute-text font-medium italic leading-relaxed">
                                    "{quotes[currentQuote].text}"
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center gap-2 mt-6">
                            {quotes.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentQuote(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentQuote
                                            ? 'bg-pink-500 w-6'
                                            : 'bg-pink-200 hover:bg-pink-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Heart button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1, type: "spring" }}
                    className="flex justify-center mb-12"
                >
                    <HeartButton />
                </motion.div>

                {/* Image gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid md:grid-cols-2 gap-6 mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.02, rotate: -1 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                        <div className="relative overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="/feliz/cozy.png"
                                alt="Cantinho aconchegante"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold text-lg">Seu Cantinho de Paz</p>
                                <p className="text-sm opacity-80">Um lugar seguro para descansar 🌙</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                        <div className="relative overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="/feliz/sunset.png"
                                alt="Pôr do sol esperançoso"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold text-lg">Amanhã Será Melhor</p>
                                <p className="text-sm opacity-80">O sol sempre volta a brilhar ☀️</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Message cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <MessageCard
                        title="De Coração"
                        message="Fiz esse cantinho especialmente pra você. Sempre que se sentir sozinha ou triste, pode vir aqui. Eu sempre vou estar do outro lado, esperando por você. ❤️"
                        icon={Heart}
                        delay={1.4}
                        gradient="bg-gradient-to-br from-pink-500 to-rose-600"
                    />
                    <MessageCard
                        title="Você é Incrível"
                        message="Nunca duvide do seu valor. Você é mais forte do que pensa, mais linda do que imagina, e mais amada do que pode mensurar. Acredite em você! ✨"
                        icon={Star}
                        delay={1.6}
                        gradient="bg-gradient-to-br from-purple-500 to-indigo-600"
                    />
                    <MessageCard
                        title="Dias Chuvosos"
                        message="Mesmo nos dias mais cinzentos, lembre-se: a chuva também é necessária para as flores crescerem. Seus dias difíceis estão te fortalecendo. 🌧️"
                        icon={CloudRain}
                        delay={1.8}
                        gradient="bg-gradient-to-br from-blue-400 to-cyan-500"
                    />
                    <MessageCard
                        title="Brilhe!"
                        message="Você tem uma luz dentro de você que ninguém pode apagar. Nos momentos escuros, olhe para dentro - sua força está lá, esperando. 💫"
                        icon={Sun}
                        delay={2.0}
                        gradient="bg-gradient-to-br from-amber-400 to-orange-500"
                    />
                </div>

                {/* Self-care reminders */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 mb-12"
                >
                    <h2 className="text-2xl font-bold text-center text-cute-text mb-6">
                        Lembretinhos de Carinho 💝
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: "💧", text: "Beba água" },
                            { icon: "😴", text: "Descanse" },
                            { icon: "🍎", text: "Alimente-se" },
                            { icon: "🌬️", text: "Respire fundo" },
                            { icon: "🚶‍♀️", text: "Movimente-se" },
                            { icon: "🎵", text: "Ouça música" },
                            { icon: "📖", text: "Leia algo bom" },
                            { icon: "💆‍♀️", text: "Cuide de você" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow"
                            >
                                <span className="text-3xl mb-2">{item.icon}</span>
                                <span className="text-sm text-cute-text font-medium text-center">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final message */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="text-center pb-8"
                >
                    <motion.p
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Você é amada. Sempre. 💖
                    </motion.p>
                    <p className="text-cute-text/60 mt-4 text-sm">
                        Feito com muito amor por alguém que se importa com você ✨
                    </p>
                </motion.footer>
            </div>
        </div>
    );
};

export default UnlockContent;
