import { motion } from 'framer-motion';

interface CardProps {
  onOpen: () => void;
}

const Card = ({ onOpen }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <motion.div
        style={{
          width: '300px',
          height: '400px',
          background: 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 50%, #FF1493 100%)',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 20px 60px rgba(255, 105, 180, 0.4), 0 10px 30px rgba(255, 105, 180, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02, rotateY: 5 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpen}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '15px',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            marginTop: '80px',
          }}
        >
          <motion.div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#fff',
              margin: '20px 0',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
              fontFamily: 'Quicksand, sans-serif',
              letterSpacing: '4px',
            }}
          >
            20 . 10
          </motion.div>

          <motion.p
            style={{
              fontFamily: 'Dancing Script, cursive',
              fontSize: '24px',
              color: '#fff',
              margin: '20px 0 40px 0',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            Gửi chị Chang 💗
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.5)',
          }}
        >
          <span style={{ fontSize: '20px' }}>✨</span>
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            right: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 30px',
              background: 'linear-gradient(135deg, #fff 0%, #FFE4E1 100%)',
              border: 'none',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#FF1493',
              cursor: 'pointer',
              fontFamily: 'Quicksand, sans-serif',
              boxShadow: '0 4px 15px rgba(255, 105, 180, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            MỞ QUÀ 💌
          </motion.button>
        </motion.div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              fontSize: '12px',
              pointerEvents: 'none',
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Card;
