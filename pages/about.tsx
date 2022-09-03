import Image from "next/image";

const customLoader = ({ src }: any) => {
  return src;
};

function About() {
    return (
      <div className="flex justify-center">
        
        <article className="break-normal px-6 md:px-0 my-10 prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark">
          <h1>Sobre somos</h1>
          <p>
            Antes de presentarnos queremos que nos acompañes a través de un recorrido por diferentes lugares. Todos los datos que encontrarás en nustro blog son reales y desde la mirada de quien les narra. Te invitmos sin embargo siempre a verificar la información ya que siempre cabe una actualización. Entenderás entonces, que algunos relatos estarán corriendo a contrarreloj, y otros servirán como tips generales para que te prepares a vivir la experiencia.
          </p>
          <p>
            Como trata de nuestras experiencias, no incluyen datos de tours o de hoteles 5 estrellas, no es del turista que pagó con mucha anticipación hasta el mínimo detalle. Somos personas que trabajamos, ahorramos y si podemos, viajamos. Definimos el destino durante el viaje y vamos adaptándonos a las condiciones. Nos gusta caminar, conocer mucha gente, probar cualquier clase de comida y bebida que sea tradicional, típica o popular, aprender con free tours, visitar museos y sitios turísticos, también cotidianos para conocer su historia y comprender su forma de vida, y por supuesto caminar más, siempre a nuestro ritmo.
          </p>
          <p>
            Y ahora sí, quienes somos, yo, Nadezhda, colombiana de Bogotá, bióloga, y desde pequeña querendona de la vida del campo, gracias a mis padres, que aunque citadinos siempre logramos escapar a la vida rural y su dura realidad, aunque fuera por cortos periodos de tiempo, mayormente en las vacaciones escolares, buscando la tranquilidad para leer, estudiar y ser, alejándonos de consumismos y enajenaciones que suele dar la “modernidad”, y aunque estuve inmersa en las neurociencias y genética durante la carrera, el campo me sedujo y terminé enamorandome de las aves con sus curiosidades y haciendo una especialización para entender cómo es que se manejan los recursos naturales en nuestro país (Colombia).
          </p>
          <p>
            <Image
            loader={customLoader}
            src={'images/profile-nadezh.png'}
            width={400}
            height={300}/>
          </p>
          <p>
            Y Andres, bogotano, ingeniero de sistemas (informática, software), amante de los idiomas, buscador de respuestas en los viajes, las artes y los libros, siempre saliendo de su zona de confort para entender el mundo y sus personajes, un romántico de la vida pero sin ser crédulo, siempre adaptándose a los nuevos sitios con gran facilidad, que considero una habilidad sorprendente.
          </p>
          <p>

          
            <Image
            loader={customLoader}
            src={'images/profile-andres.png'}
            width={400}
            height={300}/>
          </p>
        </article>
      </div>)
  }
  
  export default About