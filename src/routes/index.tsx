import { createFileRoute } from "@tanstack/react-router";
import post from "@/assets/post.jpeg.asset.json";

const LINK = "https://image-based-design-m6ya.vercel.app/";

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

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <a href={LINK} target="_blank" rel="noopener noreferrer" className="block w-full max-w-[1024px]">
        <img src={post.url} alt="Seu negócio na internet — clique para ver mais" className="h-auto w-full" />
      </a>
    </main>
  );
}
