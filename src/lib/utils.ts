import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// The class names of a component, with later ones winning over earlier ones that set the same thing.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
