import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="font-bold text-xl">Player Allies</span>
        </div>
        <nav className="space-x-6">
          <a href="#apresentacao" className="hover:text-purple-600">Apresentação</a>
          <a href="#comofunciona" className="hover:text-purple-600">Como funciona</a>
          <a href="#streamers" className="hover:text-purple-600">Streamers</a>
          <a href="#faq" className="hover:text-purple-600">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
