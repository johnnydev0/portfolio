import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

interface SnakeGameProps {
  isOpen: boolean;
  onClose: () => void;
}

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

const SnakeGame = ({ isOpen, onClose }: SnakeGameProps) => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 10 });
  const [direction, setDirection] = useState<Position>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("snakeHighScore");
    return saved ? parseInt(saved) : 0;
  });
  const [isPaused, setIsPaused] = useState(false);
  const gameLoopRef = useRef<number>();
  const directionRef = useRef(direction);

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some((s) => s.x === newFood.x && s.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    const initialSnake = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection({ x: 1, y: 0 });
    directionRef.current = { x: 1, y: 0 };
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  }, [generateFood]);

  const gameLoop = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake((prevSnake) => {
      const newHead = {
        x: (prevSnake[0].x + directionRef.current.x + GRID_SIZE) % GRID_SIZE,
        y: (prevSnake[0].y + directionRef.current.y + GRID_SIZE) % GRID_SIZE,
      };

      // Check self collision
      if (prevSnake.some((s) => s.x === newHead.x && s.y === newHead.y)) {
        setGameOver(true);
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem("snakeHighScore", score.toString());
        }
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 10);
        setFood(generateFood(newSnake));
        return newSnake;
      }

      return newSnake.slice(0, -1);
    });
  }, [food, gameOver, isPaused, generateFood, score, highScore]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) {
        if (e.key === " " || e.key === "Enter") {
          resetGame();
        }
        return;
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (directionRef.current.y !== 1) {
            directionRef.current = { x: 0, y: -1 };
            setDirection({ x: 0, y: -1 });
          }
          break;
        case "ArrowDown":
        case "s":
        case "S":
          if (directionRef.current.y !== -1) {
            directionRef.current = { x: 0, y: 1 };
            setDirection({ x: 0, y: 1 });
          }
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          if (directionRef.current.x !== 1) {
            directionRef.current = { x: -1, y: 0 };
            setDirection({ x: -1, y: 0 });
          }
          break;
        case "ArrowRight":
        case "d":
        case "D":
          if (directionRef.current.x !== -1) {
            directionRef.current = { x: 1, y: 0 };
            setDirection({ x: 1, y: 0 });
          }
          break;
        case " ":
          setIsPaused((p) => !p);
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, gameOver, resetGame, onClose]);

  useEffect(() => {
    if (!isOpen || gameOver || isPaused) return;

    const speed = Math.max(50, INITIAL_SPEED - Math.floor(score / 50) * 10);
    gameLoopRef.current = window.setInterval(gameLoop, speed);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isOpen, gameOver, isPaused, gameLoop, score]);

  useEffect(() => {
    if (isOpen) {
      resetGame();
    }
  }, [isOpen, resetGame]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-foreground">Snake Game</h2>
              <span className="text-sm text-muted-foreground">Easter Egg!</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Score */}
          <div className="flex justify-between mb-4 text-sm">
            <span className="text-foreground">
              Score: <span className="text-primary font-bold">{score}</span>
            </span>
            <span className="text-muted-foreground flex items-center gap-1">
              <Trophy className="w-4 h-4 text-yellow-500" />
              High Score: {highScore}
            </span>
          </div>

          {/* Game Board */}
          <div
            className="relative bg-secondary/50 rounded-lg border border-border overflow-hidden"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
            }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                  linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
              }}
            />

            {/* Snake */}
            {snake.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`absolute rounded-sm ${
                  index === 0 ? "bg-primary" : "bg-primary/70"
                }`}
                style={{
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  left: segment.x * CELL_SIZE + 1,
                  top: segment.y * CELL_SIZE + 1,
                  boxShadow: index === 0 ? "0 0 10px rgba(var(--primary-rgb), 0.5)" : undefined,
                }}
              />
            ))}

            {/* Food */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
              }}
              className="absolute bg-red-500 rounded-full"
              style={{
                width: CELL_SIZE - 4,
                height: CELL_SIZE - 4,
                left: food.x * CELL_SIZE + 2,
                top: food.y * CELL_SIZE + 2,
                boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
              }}
            />

            {/* Game Over Overlay */}
            {gameOver && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-background/90 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">Game Over!</h3>
                <p className="text-muted-foreground mb-4">Score: {score}</p>
                {score > highScore - 10 && score === highScore && (
                  <p className="text-yellow-500 mb-4">New High Score!</p>
                )}
                <button
                  onClick={resetGame}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Play Again
                </button>
              </motion.div>
            )}

            {/* Pause Overlay */}
            {isPaused && !gameOver && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-background/80 flex items-center justify-center"
              >
                <p className="text-xl font-bold text-foreground">PAUSED</p>
              </motion.div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>Use <kbd className="px-1.5 py-0.5 bg-secondary rounded">WASD</kbd> or <kbd className="px-1.5 py-0.5 bg-secondary rounded">Arrow Keys</kbd> to move</p>
            <p className="mt-1"><kbd className="px-1.5 py-0.5 bg-secondary rounded">Space</kbd> to pause • <kbd className="px-1.5 py-0.5 bg-secondary rounded">ESC</kbd> to close</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SnakeGame;
