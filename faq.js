import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { question: "Como faço para entrar na comunidade?", answer: "Clique no botão de WhatsApp e siga os passos para entrar no grupo." },
    { question: "Posso divulgar minhas lives?", answer: "Sim! Todos os membros podem compartilhar suas transmissões para a comunidade." },
    { question: "Existe alguma taxa de participação?", answer: "Não, a comunidade é totalmente gratuita." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="container mx-auto py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded-lg p-4">
            <button onClick={() => toggle(i)} className="w-full text-left font-semibold">{f.question}</button>
            {openIndex === i && <p className="mt-2 text-gray-700">{f.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
