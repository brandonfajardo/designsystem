import './App.css'
import React, {
  useEffect,
  useState,
} from 'react'
import { iconButtonSizeProps } from './components/ui/iconButton/iconButtonPropsConst'
import { Input } from './components/ui/input/input'
import { IconButtonPlayround } from './components/ui/iconButton/IconButtonPlayround'
import { ButtonPlayround } from './components/ui/button/ButtonPlayround'
import { buttonSizeProps } from './components/ui/button/ButtonPropsConst'
import { TabPlayround } from './components/ui/tabs/TabPlayround'

// Theme toggle component
const ThemeToggle: React.FC<{
  theme:
    | 'light'
    | 'dark'
    | 'system'
  setTheme: (
    t:
      | 'light'
      | 'dark'
      | 'system',
  ) => void
}> = ({
  theme,
  setTheme,
}) => {
  // Icons for the theme toggle
  const icons = {
    light: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    dark: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    system: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 21h8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  }
  const options: Array<{
    key:
      | 'light'
      | 'dark'
      | 'system'
    label: string
  }> = [
    {
      key: 'light',
      label: 'Light',
    },
    {
      key: 'dark',
      label: 'Dark',
    },
    {
      key: 'system',
      label: 'System',
    },
  ]
  return (
    <div className="flex gap-2 mb-8 justify-center">
      {options.map((opt) => (
        <button
          key={opt.key}
          onClick={() =>
            setTheme(opt.key)
          }
          className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-all shadow-sm font-semibold w-40
            ${theme === opt.key ? 'bg-blue-500 text-white scale-105 shadow-md' : 'bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900'}
          `}
          aria-pressed={
            theme === opt.key
          }
        >
          <span className="w-5 h-5">
            {icons[opt.key]}
          </span>
          <span>
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  )
}

function App() {
  // Theme: 'light' | 'dark' | 'system'
  const getInitialTheme =
    () => {
      if (
        typeof window ===
        'undefined'
      )
        return 'light'
      if (
        localStorage.theme ===
        'dark'
      )
        return 'dark'
      if (
        localStorage.theme ===
        'light'
      )
        return 'light'
      return 'system'
    }
  const [theme, setTheme] =
    useState<
      | 'light'
      | 'dark'
      | 'system'
    >(getInitialTheme)
  const [
    systemDark,
    setSystemDark,
  ] = useState(() => {
    if (
      typeof window ===
      'undefined'
    )
      return false
    return window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
  })

  // Watch system theme change
  useEffect(() => {
    const mq =
      window.matchMedia(
        '(prefers-color-scheme: dark)',
      )
    const handler = (
      e: MediaQueryListEvent,
    ) =>
      setSystemDark(e.matches)
    mq.addEventListener(
      'change',
      handler,
    )
    return () =>
      mq.removeEventListener(
        'change',
        handler,
      )
  }, [])

  // Apply theme
  useEffect(() => {
    let isDark = false
    if (theme === 'dark')
      isDark = true
    else if (
      theme === 'light'
    )
      isDark = false
    else isDark = systemDark
    document.documentElement.classList.toggle(
      'dark',
      isDark,
    )
    if (theme === 'system') {
      localStorage.removeItem(
        'theme',
      )
    } else {
      localStorage.theme =
        theme
    }
  }, [theme, systemDark])

  return (
    <div className="flex flex-col gap-20 w-full p-8 max-w-screen-lg mx-auto">
      <ThemeToggle
        theme={theme}
        setTheme={setTheme}
      />
      <Input />
      <TabPlayround />
      <IconButtonPlayround
        size={
          iconButtonSizeProps.XXSMALL
        }
      />
      <IconButtonPlayround
        size={
          iconButtonSizeProps.XSMALL
        }
      />
      <IconButtonPlayround
        size={
          iconButtonSizeProps.SMALL
        }
      />
      <IconButtonPlayround
        size={
          iconButtonSizeProps.MEDIUM
        }
      />
      <IconButtonPlayround
        size={
          iconButtonSizeProps.LARGE
        }
      />
      <ButtonPlayround
        size={
          buttonSizeProps.XXSMALL
        }
      />
    </div>
  )
}

export default App
