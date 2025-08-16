export default function ComoFunciona() {
  return (
    <section id="comofunciona" className="container mx-auto flex flex-col md:flex-row-reverse items-center py-24 gap-10">
      <img src="/imagens/comofunciona.png" alt="Como Funciona" className="w-full md:w-1/2 rounded-lg shadow-lg" />
      <div className="md:w-1/2 text-justify">
        <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
        <p>
          Funciona assim: você se junta ao grupo, participa das discussões, tem acesso
          a conteúdos exclusivos, colabora com outros streamers e pode divulgar suas
          lives para toda a comunidade. É simples, colaborativo e eficaz.
        </p>
      </div>
    </section>
  );
}
