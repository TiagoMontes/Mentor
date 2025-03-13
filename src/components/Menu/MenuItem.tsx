import Link from 'next/link'

type MenuItemProps = {
  path: string
  name: string
}

export default function MenuItem({ path, name }: MenuItemProps) {
  return (
    <li className="cursor-pointer hover:text-[#D1D5DB]">
      <Link aria-description={`link-para-${name}`} href={path}>
        {name}
      </Link>
    </li>
  )
}
