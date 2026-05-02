import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-display text-2xl font-bold tracking-widest text-white uppercase mb-4">Veloir</h2>
          <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
            Premium digital products and creative studio services by @drogow. Elevating digital presence through exceptional design and video.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider mb-4">Links</h3>
          <ul className="space-y-3">
            <li><Link href="/shop" className="text-zinc-400 hover:text-primary-light transition-colors">Shop</Link></li>
            <li><Link href="/studio" className="text-zinc-400 hover:text-primary-light transition-colors">Studio</Link></li>
            <li><Link href="/login" className="text-zinc-400 hover:text-primary-light transition-colors">Client Portal</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white uppercase tracking-wider mb-4">Legal</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="text-zinc-400 hover:text-primary-light transition-colors">Legal Notice</Link></li>
            <li><Link href="#" className="text-zinc-400 hover:text-primary-light transition-colors">Terms of Sale</Link></li>
            <li><Link href="#" className="text-zinc-400 hover:text-primary-light transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between">
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Veloir. All rights reserved.</p>
        <p className="text-zinc-600 text-sm mt-2 md:mt-0">Made with ❤️ by @drogow</p>
      </div>
    </footer>
  );
}
