export default function Apresentacao() {
  return (
    <section id="apresentacao" className="container mx-auto flex flex-col md:flex-row items-center py-24 gap-10 mt-20">
      <img src="/imagens/apresentacao.png" alt="Apresentação" className="w-full md:w-1/2 rounded-lg shadow-lg" />
      <div className="md:w-1/2 text-justify">
        <h2 className="text-3xl font-bold mb-4">Apresentação</h2>
        <p>
          Player Allies é uma comunidade para streamers que querem crescer juntos,
          trocar experiências, colaborar em projetos e fortalecer seu network. Aqui
          você encontra apoio, oportunidades e visibilidade para o seu canal.
        </p>
      </div>
    </section>
  );
}
