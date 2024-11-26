import { ItemType } from '@/type'

export default function Item({ name, path }: ItemType) {
  return <li className="cursor-pointer hover:text-gray-300">{name}</li>
}
