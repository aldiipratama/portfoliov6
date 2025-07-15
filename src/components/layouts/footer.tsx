import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-card py-8 px-4 sm:px-10 flex flex-col items-center justify-center text-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy;Copyrigth {currentYear} <Link href={'https://instagram.com/alx.dyy'} className="hover:text-primary">Aldipratama</Link>. All rights reserved.
      </p>
    </footer>
  )
}
