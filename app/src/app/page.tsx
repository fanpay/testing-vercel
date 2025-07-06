import Image from "next/image";

export default function Home() {
  // Obtener todas las variables de entorno que empiezan con NEXT_PUBLIC_
  const envVars = Object.entries(process.env).filter(([key]) =>
    key.startsWith("NEXT_PUBLIC_")
  );

  // Detectar el ambiente desde una variable pública
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || "local";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="w-full py-8 flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-sm mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-700 dark:text-blue-300 mb-2">
          Hey world!!!!! 🚀
        </h1>
        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold uppercase tracking-wider shadow">
          environment: {environment}
        </span>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-6">
          <Image
            className="mx-auto dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
            <h2 className="font-semibold mb-2 text-blue-700 dark:text-blue-200 text-sm">
              Detected Environment Variables:
            </h2>
            {envVars.length > 0 ? (
              <ul className="text-xs font-mono text-blue-900 dark:text-blue-100">
                {envVars.map(([key, value]) => (
                  <li key={key} className="mb-1">
                    <b>{key}:</b> {String(value)}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-xs text-blue-700 dark:text-blue-300 italic">
                Environment variables not detected NEXT_PUBLIC_
              </div>
            )}
          </div>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1">
            <li>
              Edit file{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded font-mono font-semibold">
                src/app/page.tsx
              </code>{" "}
              to start.
            </li>
            <li>Save and check changes immediately</li>
          </ol>
          <div className="flex gap-3 justify-center mt-2">
            <a
              className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium transition-colors shadow"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a
              className="rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 px-4 py-2 text-sm font-medium transition-colors shadow"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Next.js
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400 mt-8 border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60">
        <a
          className="flex items-center gap-1 hover:underline"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={14}
            height={14}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-1 hover:underline"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={14}
            height={14}
          />
          nextjs.org
        </a>
      </footer>
    </div>
  );
}
