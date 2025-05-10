
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  commands: string[];
  typingSpeed?: number;
  className?: string;
  loop?: boolean;
  startDelay?: number;
}

const Terminal = ({
  commands,
  typingSpeed = 50,
  className,
  loop = false,
  startDelay = 1000,
}: TerminalProps) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTypingWithDelay = () => {
      timeoutRef.current = setTimeout(() => {
        setIsTyping(true);
      }, startDelay);
    };

    startTypingWithDelay();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    const currentCommand = commands[currentCommandIndex];

    if (displayedText.length < currentCommand.length) {
      // Still typing the current command
      const timer = setTimeout(() => {
        setDisplayedText(currentCommand.slice(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      // Finished typing current command
      const timer = setTimeout(() => {
        // Move to next command or loop back to first
        const nextIndex = (currentCommandIndex + 1) % commands.length;
        
        if (nextIndex === 0 && !loop) {
          // Stop if we've gone through all commands and not looping
          setIsTyping(false);
        } else {
          setCurrentCommandIndex(nextIndex);
          setDisplayedText("");
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [commands, currentCommandIndex, displayedText, isTyping, loop, typingSpeed]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={cn("cyber-terminal font-mono", className)}>
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
        <span className="ml-2 text-xs text-cyber/70">[0xmohamed@terminal] ~ </span>
      </div>
      <div className="text-sm md:text-base text-cyber">
        <span className="text-green-400">$</span> {displayedText}
        {cursorVisible && <span className="ml-0.5 opacity-70">_</span>}
      </div>
    </div>
  );
};

export default Terminal;
