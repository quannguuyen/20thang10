import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LetterProps {
  isVisible: boolean;
  onClose: () => void;
}

const Letter = ({ isVisible, onClose }: LetterProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      setShowContent(false);
    }
  }, [isVisible]);

  const letterLines = [
    "Chúc chị Chang 20/10 vui vẻ nhoaaa!!",
    "Em mong rằng hôm nay chị sẽ nhận được thật nhiều niềm vui và những điều dễ thương nghen.",
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            zIndex: 20,
            background: 'rgba(255, 245, 250, 0.95)',
          }}
        >
          <motion.div
            initial={{ y: 100, scale: 0.8, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              width: '90%',
              maxWidth: '500px',
              background: 'linear-gradient(135deg, #FFF5EE 0%, #FFE4E1 50%, #FFC0CB 100%)',
              borderRadius: '15px',
              padding: '40px',
              boxShadow: '0 25px 80px rgba(255, 105, 180, 0.3), 0 10px 30px rgba(255, 105, 180, 0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                right: '15px',
                bottom: '15px',
                border: '2px solid rgba(255, 182, 193, 0.5)',
                borderRadius: '10px',
                pointerEvents: 'none',
              }}
            />

            <motion.div
              style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
              }}
            >
              {showContent && (
                <>
                  {letterLines.map((line, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
                      style={{
                        fontFamily: 'Dancing Script, cursive',
                        fontSize: index === 0 ? '28px' : '22px',
                        color: '#C71585',
                        margin: '15px 0',
                        lineHeight: '1.6',
                        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      {line}
                    </motion.p>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    style={{
                      fontSize: '24px',
                      margin: '30px 0 20px 0',
                      fontFamily: 'Dancing Script, cursive',
                      color: '#C71585',
                    }}
                  >
                    Chúc chị một ngày 20/10 thật tuyệt vời! 🐸🐸
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '10px',
                      marginTop: '20px',
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        style={{ fontSize: '20px' }}
                      >
                        ❤️
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    style={{
                      marginTop: '30px',
                      padding: '10px 15px',
                      background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)',
                      border: 'none',
                      borderRadius: '50%',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#fff',
                      cursor: 'pointer',
                      fontFamily: 'Quicksand, sans-serif',
                      boxShadow: '0 4px 15px rgba(255, 105, 180, 0.4)',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ✕
                  </motion.button>
                </>
              )}
            </motion.div>

            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  fontSize: '10px',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Letter;
