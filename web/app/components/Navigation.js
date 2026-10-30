import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/clues">Clues</Link>
      <Link href="/notebook">Notebook</Link>

      {/* Future pages, will update */}
      <Link href="/">Gallery Map</Link>   
      <Link href="/">Accusation</Link>
      <Link href="/">Exit</Link>
    </nav>
  );
}