import * as React from 'react';
import Typography from '@mui/joy/Typography';

interface TerminalProps {
  commands: string[]; // Array of commands to be displayed
  repetitions: number; // Number of times to repeat the commands
  scrollSpeed: number; // Scroll speed in milliseconds
}

const Terminal: React.FC<TerminalProps> = ({ commands, repetitions, scrollSpeed }) => {
  const [currentCommands, setCurrentCommands] = React.useState<string[]>([]);
  const terminalRef = React.useRef<HTMLDivElement>(null);

  const totalCommands = commands.length * repetitions;

  React.useEffect(() => {
    let index = 0;
    let currentRepetitions = 0;

    const intervalId = setInterval(() => {
      setCurrentCommands((prevCommands) => {
        if (index < totalCommands) {
          const nextCommand = commands[index % commands.length];
          const newCommands = [...prevCommands, nextCommand];

          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }

          index++;
          return newCommands;
        } else {
          currentRepetitions++;
          if (currentRepetitions >= repetitions) {
            clearInterval(intervalId);
          }
          return prevCommands;
        }
      });
    }, scrollSpeed);

    return () => clearInterval(intervalId);
  }, [commands, repetitions, scrollSpeed, totalCommands]);

  return (
    <div
      ref={terminalRef}
      style={{
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowY: 'auto',
        maxHeight: '100vh',
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
      }}
    >
      {currentCommands.map((command, index) => (
        <Typography key={index}>{command}</Typography>
      ))}
    </div>
  );
};

export default Terminal;

// Usage
const commands = [
  'sudo apt-get update',
  'sudo apt-get upgrade',
  'sudo apt-get install python3',
  // Add more commands here
];
const repetitions = 10;
const scrollSpeed = 100; // Adjust scroll speed as needed

// Inside your component:
<Terminal commands={commands} repetitions={repetitions} scrollSpeed={scrollSpeed} />;
