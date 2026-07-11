import { useTheme } from '#/hooks/useTheme';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();

  return (
    <button className={'ml-auto size-12'} onClick={toggleMode}>
      {mode === 'light' ? (
        <DotLottieReact src="/lotties/Sun.json" loop autoplay />
      ) : (
        <DotLottieReact src="/lotties/Moon.json" loop autoplay />
      )}
    </button>
  );
}
