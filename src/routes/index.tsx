import { createFileRoute } from "@tanstack/react-router";
import post from "@/assets/post.jpeg.asset.json";

const LINK = "https://wa.me/5535999168025";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sites Profissionais e Personalizados" },
      { name: "description", content: "Criamos sites profissionais, modernos e 100% personalizados para o seu negócio." },
      { property: "og:title", content: "Seu negócio na internet!" },
      { property: "og:description", content: "Sites profissionais e personalizados para qualquer negócio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.21-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.04c0-5.24 4.27-9.5 9.52-9.5a9.45 9.45 0 0 1 9.5 9.51c0 5.24-4.27 9.5-9.5 9.5zm8.09-17.59A11.36 11.36 0 0 0 12.05.5C5.74.5.6 5.63.6 11.94c0 2.02.53 3.99 1.53 5.72L.5 23.5l5.98-1.57a11.4 11.4 0 0 0 5.56 1.42h.01c6.3 0 11.44-5.13 11.44-11.44 0-3.06-1.19-5.93-3.35-8z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background py-6">
      <a href={LINK} target="_blank" rel="noopener noreferrer" className="block w-full max-w-[1024px]">
        <img src={post.url} alt="Seu negócio na internet — fale pelo WhatsApp" className="h-auto w-full" />
      </a>
      <a
        href={LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-full bg-whatsapp px-6 py-3 text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-8 w-8" />
        <span className="flex flex-col leading-tight">
          <span className="text-xs font-semibold uppercase tracking-wider">Fale no WhatsApp</span>
          <span className="text-2xl font-extrabold">(35) 99916-8025</span>
        </span>
      </a>
    </main>
  );
}
