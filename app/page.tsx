import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-950 px-8">
      <div className="text-center max-w-2xl flex flex-col items-center gap-6">
        <Image
          src="/ByrdCloudLI.png"
          alt="Byrd Cloud Solutions LLC"
          width={480}
          height={160}
          priority
        />
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Cloud infrastructure, architecture, and managed services built on Azure.
        </p>
      </div>
    </main>
  );
}
