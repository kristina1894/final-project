import { useLocalStorage } from "@mantine/hooks"

export function useTheme(initialTheme = "light") {
  const [theme, setTheme] = useLocalStorage("theme", initialTheme)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return [theme, toggleTheme]
}
