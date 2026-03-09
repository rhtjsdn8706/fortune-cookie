const modes = {
  default: {
    face: '😊',
    bg: 'from-purple-400 to-indigo-500',
    glow: 'shadow-purple-300/50',
    accessory: '🔮',
  },
  piercing: {
    face: '😏',
    bg: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-300/50',
    accessory: '✨',
  },
  shocked: {
    face: '😱',
    bg: 'from-pink-400 to-rose-500',
    glow: 'shadow-pink-300/50',
    accessory: '💫',
  },
  burnout: {
    face: '🥺',
    bg: 'from-blue-400 to-cyan-500',
    glow: 'shadow-blue-300/50',
    accessory: '📱',
  },
};

export default function Character({ mode = 'default', size = 'lg', animate = true }) {
  const config = modes[mode] || modes.default;
  const sizeClasses = {
    sm: 'w-20 h-20 text-3xl',
    md: 'w-28 h-28 text-4xl',
    lg: 'w-36 h-36 text-5xl',
    xl: 'w-44 h-44 text-6xl',
  };

  return (
    <div className="relative inline-flex flex-col items-center" role="img" aria-label={`캐릭터: ${config.face}`}>
      <div
        className={`
          ${sizeClasses[size]}
          bg-gradient-to-br ${config.bg}
          rounded-full flex items-center justify-center
          shadow-lg ${config.glow}
          ${animate ? 'animate-bounce-slow' : ''}
          relative
        `}
      >
        <span className="select-none">{config.face}</span>
        <span className="absolute -top-1 -right-1 text-xl">
          {config.accessory}
        </span>
      </div>
    </div>
  );
}
