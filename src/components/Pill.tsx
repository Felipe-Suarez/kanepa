interface PillProps {
  text: string;
  active: boolean;
  onClick: (text: string) => void;
}

export default function Pill({ text, active, onClick }: PillProps) {
  return (
    <button
      onClick={() => onClick(text)}
      className={`border rounded-full px-6 py-3 font-semibold text-base ${
        active && "text-red-500 border border-red-500"
      }`}
    >
      {text}
    </button>
  );
}
