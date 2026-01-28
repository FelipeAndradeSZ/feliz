import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, Dog, Crown, Flower2 } from 'lucide-react';

// Floating particles - violeta, rosas e girassóis
const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        emoji: ['🌹', '✨', '🌻', '💜', '🦋', '🌷', '💕', '⭐', '🐾', '🌸'][i % 10],
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 12 + Math.random() * 8,
        size: 14 + Math.random() * 12,
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
                        opacity: [0, 0.7, 0.7, 0],
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

// Quotes focados na Bea - amizade, não romance
const quotes = [
    { text: "Você é incrível, Bea. Nunca duvide do seu valor.", emoji: "💜" },
    { text: "Sua dedicação e esforço inspiram todos ao seu redor.", emoji: "✨" },
    { text: "A Lily tem muita sorte de ter uma dona tão especial.", emoji: "🐕" },
    { text: "Você merece todo o carinho e paz do mundo.", emoji: "💕" },
    { text: "Sua força vem de dentro, e ela é gigante.", emoji: "💪" },
    { text: "Beatriz significa 'aquela que traz felicidade'. Você faz jus ao nome.", emoji: "🌻" },
    { text: "Cada desafio que você enfrenta só prova o quanto você é forte.", emoji: "🌟" },
    { text: "Você é extraordinária em tudo o que faz.", emoji: "👑" },
];

// Message cards - tema amizade
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

// Lily section - com foto real
const LilyTribute = ({ delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay }}
        className="relative bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-violet-200/50 overflow-hidden"
    >
        {/* Paw prints decoration */}
        <div className="absolute top-2 right-2 text-2xl opacity-20">🐾</div>
        <div className="absolute bottom-2 left-2 text-2xl opacity-20">🐾</div>

        <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-300 to-purple-300 rounded-full blur-xl opacity-40" />
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
                    <span className="text-2xl">💜</span>
                </motion.div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Dog className="w-6 h-6 text-violet-600" />
                    <h3 className="text-2xl font-bold text-violet-800">Lily</h3>
                </div>
                <p className="text-violet-700 leading-relaxed mb-4">
                    Sua companheira de todas as horas. Ela sabe quando você precisa de um
                    abraço peludo e está sempre lá, com o rabinho abanando, pronta pra te
                    fazer sorrir. O amor dela por você é infinito. 💜
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {['Fiel', 'Carinhosa', 'Protetora', 'Sua melhor amiga'].map((trait, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                        >
                            {trait}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

// Animated bouquet component - flores se formando uma a uma
const AnimatedBouquet = ({ delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    // Flores do buquê - rosas e girassóis
    const flowers = [
        { type: 'rose', color: '#DC2626', x: 0, y: -60, delay: 0.2, size: 50 },
        { type: 'sunflower', color: '#FBBF24', x: -45, y: -35, delay: 0.5, size: 45 },
        { type: 'rose', color: '#BE185D', x: 45, y: -35, delay: 0.8, size: 45 },
        { type: 'sunflower', color: '#F59E0B', x: -30, y: -70, delay: 1.1, size: 40 },
        { type: 'rose', color: '#E11D48', x: 30, y: -70, delay: 1.4, size: 40 },
        { type: 'sunflower', color: '#FCD34D', x: 0, y: -90, delay: 1.7, size: 35 },
    ];

    // Componente de Rosa
    const Rose = ({ color, size, flowerDelay }) => (
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: flowerDelay, type: "spring", bounce: 0.4 }}
            className="absolute"
            style={{ width: size, height: size }}
        >
            {/* Pétalas da rosa */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: flowerDelay + 0.1 * i }}
                    className="absolute rounded-full"
                    style={{
                        width: size * 0.5,
                        height: size * 0.6,
                        backgroundColor: color,
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-${size * 0.15}px)`,
                        borderRadius: '50% 50% 50% 50%',
                        boxShadow: `inset -2px -2px 4px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.3)`,
                    }}
                />
            ))}
            {/* Centro da rosa */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: flowerDelay + 0.5 }}
                className="absolute rounded-full"
                style={{
                    width: size * 0.35,
                    height: size * 0.35,
                    background: `radial-gradient(circle, ${color} 0%, #831843 100%)`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 'inset 0 0 8px rgba(0,0,0,0.3)',
                }}
            />
        </motion.div>
    );

    // Componente de Girassol
    const Sunflower = ({ color, size, flowerDelay }) => (
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: flowerDelay, type: "spring", bounce: 0.4 }}
            className="absolute"
            style={{ width: size, height: size }}
        >
            {/* Pétalas do girassol */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: flowerDelay + 0.05 * i }}
                    className="absolute"
                    style={{
                        width: size * 0.25,
                        height: size * 0.5,
                        backgroundColor: color,
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${size * 0.25}px)`,
                        borderRadius: '50% 50% 30% 30%',
                        boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.2)',
                    }}
                />
            ))}
            {/* Centro do girassol (sementes) */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: flowerDelay + 0.6 }}
                className="absolute rounded-full"
                style={{
                    width: size * 0.45,
                    height: size * 0.45,
                    background: 'radial-gradient(circle, #92400E 0%, #451A03 100%)',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
                }}
            />
        </motion.div>
    );

    return (
        <div className="relative flex flex-col items-center py-8">
            {/* Glow de fundo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 0.4, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 0 }}
                className="absolute w-80 h-80 bg-gradient-to-br from-violet-300 via-pink-200 to-yellow-200 rounded-full blur-3xl"
            />

            {/* Container do buquê */}
            <div className="relative w-64 h-80 md:w-80 md:h-96">
                {/* Caules */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isVisible ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={isVisible ? { scaleY: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                            className="absolute bottom-0 w-1.5 bg-gradient-to-t from-green-700 to-green-500 rounded-full origin-bottom"
                            style={{
                                height: 120 + i * 10,
                                left: `${50 + (i - 2) * 8}%`,
                                transform: `translateX(-50%) rotate(${(i - 2) * 8}deg)`,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Laço violeta */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2, type: "spring" }}
                    className="absolute bottom-16 left-1/2 -translate-x-1/2"
                >
                    <div className="relative">
                        {/* Laço esquerdo */}
                        <div className="absolute -left-6 -top-2 w-8 h-5 bg-violet-500 rounded-full transform -rotate-30"
                            style={{ borderRadius: '60% 40% 60% 40%' }} />
                        {/* Laço direito */}
                        <div className="absolute -right-6 -top-2 w-8 h-5 bg-violet-500 rounded-full transform rotate-30"
                            style={{ borderRadius: '40% 60% 40% 60%' }} />
                        {/* Centro do laço */}
                        <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg" />
                        {/* Fitas pendentes */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-12 bg-gradient-to-b from-violet-500 to-violet-400 rounded-b-full"
                            style={{ transform: 'translateX(-50%) rotate(-5deg)' }} />
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-10 bg-gradient-to-b from-violet-500 to-violet-400 rounded-b-full"
                            style={{ transform: 'translateX(-30%) rotate(8deg)' }} />
                    </div>
                </motion.div>

                {/* Folhas decorativas */}
                {[
                    { x: -50, y: 60, rotate: -30 },
                    { x: 50, y: 60, rotate: 30 },
                    { x: -40, y: 40, rotate: -45 },
                    { x: 40, y: 40, rotate: 45 },
                ].map((leaf, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
                        className="absolute bg-green-500 rounded-full"
                        style={{
                            width: 25,
                            height: 40,
                            left: `calc(50% + ${leaf.x}px)`,
                            bottom: `calc(${leaf.y}px)`,
                            transform: `rotate(${leaf.rotate}deg)`,
                            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                            boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
                        }}
                    />
                ))}

                {/* Flores */}
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
                    {flowers.map((flower, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                left: flower.x,
                                top: flower.y,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            {flower.type === 'rose' ? (
                                <Rose color={flower.color} size={flower.size} flowerDelay={flower.delay} />
                            ) : (
                                <Sunflower color={flower.color} size={flower.size} flowerDelay={flower.delay} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Sparkles animados */}
                {isVisible && [...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-xl md:text-2xl pointer-events-none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, -50 - Math.random() * 80],
                        }}
                        transition={{
                            duration: 2 + Math.random(),
                            delay: 2.5 + i * 0.2,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 3,
                        }}
                        style={{
                            left: `${30 + Math.random() * 40}%`,
                            bottom: `${30 + Math.random() * 30}%`,
                        }}
                    >
                        {['✨', '💜', '🌟', '💫'][i % 4]}
                    </motion.div>
                ))}
            </div>

            {/* Mensagem */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.5 }}
                className="mt-4 text-center text-violet-600 font-medium text-lg"
            >
                Para você, com carinho 💜
            </motion.p>
        </div>
    );
};

// Glowing orb decoration - violeta theme
const GlowingOrb = ({ color, size, top, left, delay }) => (
    <motion.div
        className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
            background: color,
            width: size,
            height: size,
            top,
            left,
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
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
        <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Background decorations - violeta theme */}
            <GlowingOrb color="#8B5CF6" size="300px" top="-80px" left="-80px" delay={0} />
            <GlowingOrb color="#A78BFA" size="250px" top="40%" left="85%" delay={1} />
            <GlowingOrb color="#C4B5FD" size="280px" top="75%" left="-40px" delay={2} />
            <GlowingOrb color="#DDD6FE" size="200px" top="20%" left="60%" delay={1.5} />

            {/* Floating particles */}
            <FloatingParticles />

            {/* Welcome overlay */}
            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-violet-200 via-purple-100 to-pink-100"
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
                                💜
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl md:text-4xl font-bold text-violet-600"
                            >
                                Oi, Bea! 🌻
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
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-4 mb-3">
                        Para Você, Beatriz
                    </h1>
                    <p className="text-base md:text-lg text-violet-600/70 px-4">
                        Um cantinho especial só seu 💜
                    </p>
                </motion.header>

                {/* Quote carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-8 md:mb-12"
                >
                    <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-violet-200/50 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
                        <motion.div
                            className="absolute top-4 right-4"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
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
                                <p className="text-lg md:text-xl text-violet-800 font-medium italic leading-relaxed px-2">
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
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-500 w-6'
                                        : 'bg-violet-200 hover:bg-violet-300 w-2'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Animated Bouquet Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-12 md:mb-16"
                >
                    <AnimatedBouquet delay={0.9} />
                </motion.div>

                {/* Lily tribute section */}
                <div className="mb-8 md:mb-12">
                    <LilyTribute delay={1.1} />
                </div>

                {/* Message cards - amizade focused */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                    <MessageCard
                        title="Você é Incrível"
                        message="Sua dedicação e esforço são inspiradores. Você dá o seu melhor em tudo o que faz, e isso é admirável. Continue brilhando!"
                        icon={Crown}
                        delay={1.3}
                        gradient="bg-gradient-to-br from-violet-500 to-purple-600"
                    />
                    <MessageCard
                        title="Você é Especial"
                        message="Não é só o que você faz. É quem você é. Sua gentileza, sua determinação, seu coração enorme. O mundo é melhor porque você existe."
                        icon={Star}
                        delay={1.4}
                        gradient="bg-gradient-to-br from-purple-500 to-pink-500"
                    />
                    <MessageCard
                        title="Força Interior"
                        message="Mesmo nos dias difíceis, você continua. Isso mostra o quanto você é forte. Cada obstáculo te faz mais resiliente."
                        icon={Heart}
                        delay={1.5}
                        gradient="bg-gradient-to-br from-pink-500 to-rose-500"
                    />
                    <MessageCard
                        title="Você Merece"
                        message="Merece paz, alegria e tudo de bom. Nunca se esqueça de cuidar de você mesma também. Você é prioridade. 💜"
                        icon={Flower2}
                        delay={1.6}
                        gradient="bg-gradient-to-br from-violet-400 to-indigo-500"
                    />
                </div>

                {/* Self-care reminders */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-violet-200/50 mb-8 md:mb-12"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-center text-violet-800 mb-6">
                        Lembretinhos de Carinho 💜
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            { icon: "💧", text: "Beba água" },
                            { icon: "😴", text: "Descanse" },
                            { icon: "🍎", text: "Alimente-se" },
                            { icon: "🌬️", text: "Respire fundo" },
                            { icon: "🐕", text: "Abraça a Lily" },
                            { icon: "🎵", text: "Ouça música" },
                            { icon: "🌹", text: "Seja gentil consigo" },
                            { icon: "💜", text: "Cuide de você" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center p-3 md:p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl cursor-pointer hover:shadow-lg transition-all border border-violet-100"
                            >
                                <span className="text-2xl md:text-3xl mb-2">{item.icon}</span>
                                <span className="text-xs md:text-sm text-violet-700 font-medium text-center">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final message */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="text-center pb-8"
                >
                    <motion.div
                        className="inline-block mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-5xl">💜</span>
                    </motion.div>
                    <motion.p
                        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 mb-3"
                    >
                        Você é Amada, Bea. Sempre.
                    </motion.p>
                    <p className="text-violet-500/50 text-xs mt-4">
                        Volte aqui sempre que precisar. Esse cantinho é seu. 🌻
                    </p>
                </motion.footer>
            </div>
        </div>
    );
};

export default UnlockContent;
