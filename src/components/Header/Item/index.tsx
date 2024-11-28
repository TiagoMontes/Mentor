import { ItemType } from '@/type'
import Link from 'next/link'

export default function Item({ name, path }: ItemType) {
  return (
    <li className="cursor-pointer hover:text-gray-300">
      <Link href={path}>{name}</Link>
    </li>
  )
}
