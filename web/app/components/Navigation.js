import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/clues">Clues</Link>
      <Link href="/characters">Character Profiles</Link> 
      <Link href="/notebook">Notebook</Link>

      {/* Future pages, will update */}
      <Link href="/gallery">Gallery Map</Link>   
      <Link href="/accusation">Accusation</Link>
      <Link href="/">Exit</Link>
    </nav>
  );
}