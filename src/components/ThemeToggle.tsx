import { cn } from "#/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

type ThemeMode = 'light' | 'dark' | 'system';

function getInitialMode(): ThemeMode {
    if (typeof window === 'undefined') {
        return 'dark';
    }

    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored
    }
    return 'system';
}

function applyThemeMode(mode: ThemeMode) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(resolved);

    if (mode === 'system') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', mode)
    }
    document.documentElement.style.colorScheme = resolved;
    return resolved;
}

export default function ThemeToggle() {
    const [mode, setMode] = useState<ThemeMode>('system');

    useEffect(() => {
        const initialMode = getInitialMode();
        setMode(initialMode);
        applyThemeMode(initialMode);
    }, []);

    useEffect(() => {
        if (mode != 'system') {
            return;
        }
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const onChange = () => applyThemeMode('system');

        media.addEventListener('change', onChange);

        return () => {
            media.removeEventListener('change', onChange);
        }
    }, [mode])

    function toggleMode() {
        const nextMode: ThemeMode =
            mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light'
        setMode(nextMode);
        if (!document.startViewTransition) {
            applyThemeMode(nextMode);
        } else {
            document.startViewTransition(() => applyThemeMode(nextMode));
        }
        window.localStorage.setItem('theme', nextMode)
    }

    return (
        <button className={"ml-auto size-12"} onClick={() => { console.log("Hello there"); toggleMode() }}>
            {mode === 'light' ?
                <DotLottieReact
                    src="/lotties/Sun.json"
                    loop
                    autoplay
                /> :
                <DotLottieReact
                    src="/lotties/Moon.json"
                    loop
                    autoplay
                />
            }
        </button>
    )
}