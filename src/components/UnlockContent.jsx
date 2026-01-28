import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, Sun, Moon, Sunrise, Dog, Crown, Flame } from 'lucide-react';

// Floating particles component
const FloatingParticles = () => {
    const particles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        emoji: ['💖', '✨', '🌸', '💫', '🦋', '🌷', '💕', '⭐', '🐾', '☀️'][i % 10],
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 8,
        size: 14 + Math.random() * 14,
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
                        opacity: [0, 0.8, 0.8, 0],
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

// Personalized quotes for Bea
const quotes = [
    { text: "Você é o Sol que ilumina os dias de todos ao seu redor, Bea. Mesmo quando não percebe.", emoji: "☀️" },
    { text: "Sua dedicação e esforço são inspiradores. Tenho muito orgulho de você.", emoji: "💪" },
    { text: "Nos dias difíceis, lembre-se: a Lily te ama incondicionalmente, e eu também.", emoji: "🐕" },
    { text: "Você merece todo o amor do mundo. Nunca duvide disso.", emoji: "💖" },
    { text: "Sua força vem de dentro, mas quando precisar, estarei aqui.", emoji: "🤝" },
    { text: "Beatriz significa 'aquela que traz felicidade'. Você faz jus ao nome.", emoji: "✨" },
    { text: "Cada desafio que você enfrenta só prova o quanto você é incrível.", emoji: "🌟" },
    { text: "Você não é só esforçada. Você é extraordinária.", emoji: "👑" },
];

// Message cards with special messages
const MessageCard = ({ title, message, icon: Icon, delay, gradient }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay }}
        whileHover={{ scale: 1.02, y: -5 }}
        className={`relative overflow-hidden rounded-3xl p-5 md:p-6 shadow-2xl ${gradient}`}
    >
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">{message}</p>
        </div>
    </motion.div>
);

// Lily section - special tribute
const LilyTribute = ({ delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay }}
        className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-amber-200/50 overflow-hidden"
    >
        {/* Paw prints decoration */}
        <div className="absolute top-2 right-2 text-2xl opacity-20">🐾</div>
        <div className="absolute bottom-2 left-2 text-2xl opacity-20">🐾</div>

        <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full blur-xl opacity-40" />
                <img
                    src="/feliz/lily.png"
                    alt="Lily"
                    className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                />
                <motion.div
                    className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-2xl">💕</span>
                </motion.div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Dog className="w-6 h-6 text-amber-600" />
                    <h3 className="text-2xl font-bold text-amber-800">Lily</h3>
                </div>
                <p className="text-amber-700 leading-relaxed mb-4">
                    Sua companheira de todas as horas. Ela sabe quando você precisa de um
                    abraço peludo e está sempre lá, com o rabinho abanando, pronta pra te
                    fazer sorrir. O amor dela por você é infinito. 🧡
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {['Fiel', 'Carinhosa', 'Protetora', 'Sua melhor amiga'].map((trait, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium"
                        >
                            {trait}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

// Affirmations section
const Affirmations = ({ delay }) => {
    const affirmations = [
        "Eu sou forte",
        "Eu sou capaz",
        "Eu mereço amor",
        "Eu sou suficiente",
        "Eu sou corajosa",
        "Eu estou crescendo",
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 md:p-8 shadow-xl"
        >
            <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl md:text-2xl font-bold text-purple-800">Afirmações pra Você, Sol ☀️</h3>
            </div>
            <p className="text-center text-purple-600 mb-6 text-sm md:text-base">
                Repita pra você mesma. Você merece acreditar nisso.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {affirmations.map((text, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-purple-200/50"
                    >
                        <p className="text-purple-700 font-semibold text-sm md:text-base">{text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Glowing orb decoration
const GlowingOrb = ({ color, size, top, left, delay }) => (
    <motion.div
        className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
            background: color,
            width: size,
            height: size,
            top,
            left,
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
            duration: 5,
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
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    // Hide welcome after delay
    useEffect(() => {
        const timer = setTimeout(() => setShowWelcome(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
            {/* Background decorations */}
            <GlowingOrb color="#FFB6C1" size="300px" top="-80px" left="-80px" delay={0} />
            <GlowingOrb color="#DDA0DD" size="250px" top="40%" left="85%" delay={1} />
            <GlowingOrb color="#FFDAB9" size="280px" top="75%" left="-40px" delay={2} />
            <GlowingOrb color="#FFE4B5" size="200px" top="20%" left="60%" delay={1.5} />

            {/* Floating particles */}
            <FloatingParticles />

            {/* Welcome overlay */}
            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-orange-100"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="text-center px-6"
                        >
                            <motion.div
                                className="text-7xl md:text-8xl mb-4"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                ☀️
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl md:text-4xl font-bold text-rose-600"
                            >
                                Oi, Bea! 💖
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-12">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <motion.div
                        animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        className="inline-block"
                    >
                        <span className="text-5xl md:text-6xl">🌻</span>
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent mt-4 mb-3">
                        Para Você, Beatriz
                    </h1>
                    <p className="text-base md:text-lg text-cute-text/70 px-4">
                        Um cantinho especial feito com muito carinho 💕
                    </p>
                </motion.header>

                {/* Quote carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-8 md:mb-12"
                >
                    <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400" />
                        <motion.div
                            className="absolute top-4 right-4"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuote}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <span className="text-4xl md:text-5xl mb-4 block">{quotes[currentQuote].emoji}</span>
                                <p className="text-lg md:text-xl text-cute-text font-medium italic leading-relaxed px-2">
                                    "{quotes[currentQuote].text}"
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center gap-1.5 mt-6">
                            {quotes.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentQuote(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === currentQuote
                                            ? 'bg-gradient-to-r from-pink-500 to-orange-400 w-6'
                                            : 'bg-pink-200 hover:bg-pink-300 w-2'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Hero image with Lily */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-8 md:mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="/feliz/friendship.png"
                                alt="Amizade verdadeira"
                                className="w-full h-48 md:h-72 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                                <p className="font-bold text-xl md:text-2xl mb-1">Você Nunca Está Sozinha</p>
                                <p className="text-sm md:text-base opacity-90">A Lily está sempre com você. E eu também. 💕</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Lily tribute section */}
                <div className="mb-8 md:mb-12">
                    <LilyTribute delay={0.9} />
                </div>

                {/* Message cards */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                    <MessageCard
                        title="Do Felipe"
                        message="Bea, eu tenho muito orgulho de você. De verdade. Ver o quanto você se dedica e se esforça, mesmo quando as coisas são difíceis, me inspira. Você é muito mais forte do que imagina."
                        icon={Heart}
                        delay={1.1}
                        gradient="bg-gradient-to-br from-pink-500 to-rose-600"
                    />
                    <MessageCard
                        title="Você é Especial"
                        message="Não é só o que você faz. É quem você é. Sua gentileza, sua determinação, seu coração enorme. O mundo é melhor porque você existe nele."
                        icon={Crown}
                        delay={1.2}
                        gradient="bg-gradient-to-br from-purple-500 to-indigo-600"
                    />
                    <MessageCard
                        title="Força Interior"
                        message="Eu sei que às vezes é difícil. Mas olha só o quanto você já superou! Cada obstáculo te fez mais forte. Você é uma guerreira, Bea."
                        icon={Flame}
                        delay={1.3}
                        gradient="bg-gradient-to-br from-orange-400 to-red-500"
                    />
                    <MessageCard
                        title="Sol da Minha Vida"
                        message="Não é à toa que te chamam de Sol. Você ilumina tudo ao seu redor. Mesmo nos seus dias mais nublados, você ainda brilha. ☀️"
                        icon={Sun}
                        delay={1.4}
                        gradient="bg-gradient-to-br from-amber-400 to-orange-500"
                    />
                </div>

                {/* Affirmations */}
                <div className="mb-8 md:mb-12">
                    <Affirmations delay={1.5} />
                </div>

                {/* Self-care reminders */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                    className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 mb-8 md:mb-12"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-center text-cute-text mb-6">
                        Lembretinhos de Carinho 💝
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            { icon: "💧", text: "Beba água" },
                            { icon: "😴", text: "Descanse" },
                            { icon: "🍎", text: "Alimente-se" },
                            { icon: "🌬️", text: "Respire fundo" },
                            { icon: "🐕", text: "Faça carinho na Lily" },
                            { icon: "🎵", text: "Ouça música" },
                            { icon: "🌸", text: "Seja gentil consigo" },
                            { icon: "💆‍♀️", text: "Cuide de você" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center p-3 md:p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl cursor-pointer hover:shadow-lg transition-all border border-pink-100"
                            >
                                <span className="text-2xl md:text-3xl mb-2">{item.icon}</span>
                                <span className="text-xs md:text-sm text-cute-text font-medium text-center">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                    className="grid grid-cols-2 gap-4 mb-8 md:mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.03, rotate: -1 }}
                        className="relative overflow-hidden rounded-2xl shadow-lg"
                    >
                        <img
                            src="/feliz/cozy.png"
                            alt="Cantinho aconchegante"
                            className="w-full h-40 md:h-52 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <p className="absolute bottom-2 left-2 text-white text-xs md:text-sm font-medium">
                            Seu momento de paz 🌙
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03, rotate: 1 }}
                        className="relative overflow-hidden rounded-2xl shadow-lg"
                    >
                        <img
                            src="/feliz/sunset.png"
                            alt="Pôr do sol"
                            className="w-full h-40 md:h-52 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <p className="absolute bottom-2 left-2 text-white text-xs md:text-sm font-medium">
                            Amanhã será lindo ☀️
                        </p>
                    </motion.div>
                </motion.div>

                {/* Final message */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.1 }}
                    className="text-center pb-8"
                >
                    <motion.div
                        className="inline-block mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-5xl">💖</span>
                    </motion.div>
                    <motion.p
                        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 mb-3"
                    >
                        Você é Amada, Bea. Sempre.
                    </motion.p>
                    <p className="text-cute-text/60 text-sm md:text-base">
                        Feito com muito amor pelo Felipe ✨
                    </p>
                    <p className="text-cute-text/40 text-xs mt-2">
                        Volte aqui sempre que precisar. Esse cantinho é seu. 💕
                    </p>
                </motion.footer>
            </div>
        </div>
    );
};

export default UnlockContent;
