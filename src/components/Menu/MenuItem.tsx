import Link from 'next/link'

type MenuItemProps = {
  path: string
  name: string
}

export default function MenuItem({ path, name }: MenuItemProps) {
  if (!path || !name) {
    throw new Error('Path and/or Name not defined')
  }

  return (
    <li className="cursor-pointer hover:text-[#D1D5DB]">
      <Link href={path}>{name}</Link>
    </li>
  )
}
