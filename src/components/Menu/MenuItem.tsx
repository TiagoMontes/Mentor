import Link from 'next/link'

type MenuItemProps = {
  path: string
  name: string
}

export default function MenuItem({ path, name }: MenuItemProps) {
  return (
    <li className="cursor-pointer hover:text-gray-300">
      <Link href={path}>{name}</Link>
    </li>
  )
}
