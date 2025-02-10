export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-4 py-16 md:px-8">
      <main className="max-w-2xl mx-auto space-y-12">
        {/* Hero section */}
        <div className="space-y-4">
          <div className="flex items-end gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Anshul Kharb</h1>
            <a 
              href="https://linkedin.com/in/anshulkharb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            <a 
              href="mailto:hi@anshulkharb.com"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
            </a>
          </div>
          <p className="text-zinc-400 text-lg">
            {"Building "} 
            <a 
              href="https://findler.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              findler.ai
            </a>
          </p>
        </div>

        {/* About section */}
        {/* <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200">About</h2>
          <p className="text-zinc-400 leading-relaxed">
            I'm a passionate software engineer focused on building elegant solutions 
            to complex problems. With expertise in web technologies and distributed 
            systems, I create robust and scalable applications.
          </p>
        </section> */}
      </main>
    </div>
  );
}