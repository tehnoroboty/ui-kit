/*
// Динамически импортируем все иконки из указанной папки
const iconModules = require.context('@/assets/icons/components', false, /\.tsx$/)

// Создаем объект, содержащий все иконки
export const icons = iconModules.keys().reduce((acc: any, path: string) => {
  const iconName = path.replace('./', '').replace('.tsx', '') // Извлекаем имя файла

  if (acc[iconName] !== 'index') {
    acc[iconName] = iconModules(path).default
  } // Сохраняем компонент в объекте

  return acc
}, {})
*/
// Вариант с Vite (или Next.js 13+ с App Router)

const iconModules = import.meta.glob('@/assets/componentsIcons/*.tsx', { eager: true })

export const icons = Object.entries(iconModules).reduce(
  (acc, [path, module]) => {
    const fileName = path.split('/').pop()?.replace('.tsx', '') || '' // Получаем имя файла без расширения

    if (fileName) {
      acc[fileName] = (module as any).default
    }

    return acc
  },
  {} as Record<string, any>
)
