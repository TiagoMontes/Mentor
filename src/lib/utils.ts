import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ItemType } from '@/type'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const itemsMenu: ItemType[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]
