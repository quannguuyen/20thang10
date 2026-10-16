import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FireworksCanvas from './components/FireworksCanvas';
import Card from './components/Card';
import Letter from './components/Letter';

function App() {
  const [showCard, setShowCard] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenCard = () => {
    setShowLetter(true);
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #FFE4E1 0%, #FFB6C1 50%, #FFC0CB 100%)',
      position: 'relative',
    }}>
      <FireworksCanvas />

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            onAnimationComplete={() => setShowWelcome(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
              background: 'rgba(255, 245, 250, 0.3)',
            }}
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: 'clamp(28px, 5vw, 48px)',
                color: '#C71585',
                textAlign: 'center',
                margin: '0 20px',
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
                fontWeight: '600',
              }}
            >
              Dành tặng một món quà nhỏ cho chị Chang ❤️
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: 'clamp(16px, 3vw, 20px)',
                color: '#DB7093',
                textAlign: 'center',
                margin: '20px',
                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
              }}
            >
              Có một bất ngờ đang chờ chị mở ra…
            </motion.p>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                fontSize: '40px',
                marginTop: '20px',
              }}
            >
              💗
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCard && !showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <Card onOpen={handleOpenCard} />
          </motion.div>
        )}
      </AnimatePresence>

      <Letter isVisible={showLetter} onClose={handleCloseLetter} />
    </div>
  );
}

export default App;
