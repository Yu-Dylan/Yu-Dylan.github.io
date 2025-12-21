export default function PublicationsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-brown mb-8">Publications & Projects</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-brown mb-4">Research</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-salmon/30 pl-4 py-1">
              <a 
                href="/files/research/empty-boxes.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-salmon hover:underline"
              >
                Empty Boxes Research Paper
              </a>
              <p className="text-sm text-warm-gray mt-1">PDF</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brown mb-4">Code Projects</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-salmon/30 pl-4 py-1">
              <a 
                href="/files/code/conway-life.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-salmon hover:underline"
              >
                Conway's Game of Life
              </a>
              <p className="text-sm text-warm-gray mt-1">Interactive simulation</p>
            </div>
            <div className="border-l-2 border-salmon/30 pl-4 py-1">
              <a 
                href="/files/code/snake.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-salmon hover:underline"
              >
                Snake Game
              </a>
              <p className="text-sm text-warm-gray mt-1">Classic game implementation</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brown mb-4">Teaching Materials</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-salmon/30 pl-4 py-1">
              <a 
                href="/files/handouts" 
                className="text-base font-medium text-salmon hover:underline"
              >
                Math Handouts Collection
              </a>
              <p className="text-sm text-warm-gray mt-1">Various teaching materials and problem sets</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
