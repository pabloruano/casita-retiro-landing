import React from 'react';

function Card({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function Button({ children, asChild, ...props }) {
  if (asChild) {
    return React.cloneElement(children, props);
  }
  return <button {...props}>{children}</button>;
}

export default function CasitaRetiroLanding() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-400 to-yellow-300 text-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          ¡Inglés divertido en Retiro / Pacífico!
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
          Profesores nativos · Grupos reducidos · Metodología Play‑Based Learning
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="rounded-2xl px-8 py-4 text-lg shadow-xl">
            <a href="https://wa.me/34621070732?text=¡Hola!%20Quiero%20reservar%20una%20clase%20de%20prueba%20gratuita%20en%20Retiro%20Pacífico." target="_blank" rel="noopener noreferrer">
              Reserva tu clase GRATIS
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="rounded-2xl px-8 py-4 text-lg shadow">
            <a href="#programas">Ver programas</a>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Por qué elegir La Casita de Inglés 🌟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'Clase de prueba gratis', desc: 'Sin compromiso. Venid, jugad, experimentad nuestra metodología.' },
            { title: 'Deducción fiscal', desc: 'La extraescolar de inglés es 100 % desgravable en la declaración de la Renta.' },
            { title: 'Recupera tus clases', desc: 'Clases recuperables durante 30 días, sin papeleo.' },
            { title: 'Descuentos hermanos', desc: '–5 % al segundo hermano, –10 % al tercero.' },
          ].map((item) => (
            <Card key={item.title} className="rounded-2xl shadow-lg hover:shadow-2xl transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Aprender jugando – Play‑Based Learning</h2>
          <p className="mb-6">
            Más de 20 años combinando creatividad, movimiento y cariño para que el inglés sea parte natural de la vida de tus hijos.
          </p>
          <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/IaroCLGffzQ?rel=0" title="Metodología La Casita de Inglés" className="absolute top-0 left-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programas" className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Programas</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            { name: 'Home Express', age: '3 – 12 años', duration: '1 h / semana', price: '67 €/mes', schedule: 'L‑V 17:30‑18:30 · 18:30‑19:30 | S 11:00‑13:00' },
            { name: 'Home Circle', age: '3 – 8 años', duration: '2 h / semana', price: '99 €/mes', schedule: 'L‑V 17:30‑19:30 | S 11:00‑13:00' },
            { name: 'Home Run', age: '9 – 13 años', duration: '2 h / semana', price: '99 €/mes', schedule: 'L‑V 17:30‑19:30 | S 11:00‑13:00' },
            { name: 'Baby & Me', age: '1 – 3 años', duration: '1 h / semana', price: '67 €/mes', schedule: 'Consulta horarios' },
            { name: 'Home Square', age: '3 – 12 años', duration: '2×1 h / semana', price: 'Consúltanos', schedule: 'Personalizable' },
            { name: 'Mix It Up!', age: 'A partir de 4 años', duration: 'Presencial + Online', price: 'Consúltanos', schedule: 'Flexible' },
          ].map((p) => (
            <Card key={p.name} className="rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{p.age}</p>
                <p className="mb-1">{p.duration}</p>
                <p className="mb-4 font-bold">{p.price}</p>
                <p className="text-sm text-gray-600 flex-grow">{p.schedule}</p>
                <Button asChild size="sm" className="mt-4 rounded-xl w-full">
                  <a href="https://wa.me/34621070732" target="_blank">¡Quiero más info!</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Lo que nuestras familias dicen</h2>
          <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/5k7RnPEJg9w?rel=0" title="Testimonios La Casita de Inglés" className="absolute top-0 left-0 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Encuéntranos</h2>
            <p className="mb-2 font-medium">
              Calle José Sánchez Pescador 10<br />28007 Madrid (Retiro)
            </p>
            <p className="mb-2">
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/34621070732" className="underline text-orange-500">621 070 732</a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:retiro@lacasitadeingles.com" className="underline text-orange-500">retiro@lacasitadeingles.com</a>
            </p>
            <Button asChild className="mt-4 rounded-2xl px-8 py-4 text-lg shadow-xl">
              <a href="https://wa.me/34621070732" target="_blank">Reserva tu clase GRATIS</a>
            </Button>
          </div>
          <div className="w-full h-72 md:h-full rounded-2xl overflow-hidden shadow-lg">
            <iframe title="Google Maps - La Casita de Inglés Retiro" src="https://maps.google.com/maps?q=Calle%20Jose%20Sanchez%20Pescador%2010%20Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0"></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-orange-500 text-white text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">¿Listo para que tus hijos amen el inglés?</h2>
        <p className="mb-8 text-lg md:text-xl">Reserva ya una clase de prueba gratuita y descubre nuestra metodología.</p>
        <Button asChild size="lg" className="rounded-2xl px-8 py-4 text-lg shadow-xl bg-white text-orange-600 hover:bg-gray-100">
          <a href="https://wa.me/34621070732?text=¡Hola!%20Quiero%20reservar%20una%20clase%20de%20prueba%20gratuita%20en%20Retiro%20Pacífico." target="_blank" rel="noopener noreferrer">Reserva tu clase GRATIS</a>
        </Button>
        {/* Decorative wave */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C360,90 720,-30 1080,30 C1260,60 1440,45 1440,45 L1440,75 L0,75 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        <p>
          © {new Date().getFullYear()} La Casita de Inglés Retiro ·{' '}
          <a href="https://lacasitadeingles.com/aviso-legal" target="_blank" rel="noopener noreferrer" className="underline">Aviso legal</a>{' '}
          |{' '}
          <a href="https://lacasitadeingles.com/politica-privacidad" target="_blank" rel="noopener noreferrer" className="underline">Privacidad</a>
        </p>
      </footer>
    </div>
  );
}

