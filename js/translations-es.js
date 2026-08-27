/**
 * Diccionario de traducciones: ESPAÑOL
 * Contiene textos de la UI principal y el contenido HTML de los artículos.
 */

const translationsES = {
  logo: "Fé y Razón",
  // Título de la pestaña en la portada. Antes se armaba en el código como
  // `logo + " | Apologética Católica"`, con esas dos palabras en español fijas
  // para los doce idiomas.
  siteTitle: "Fé y Razón | Apologética Católica",
  nav: {
    home: "Inicio",
    topics: "Temas",
    mission: "Misión",
    contact: "Contacto",
    usefulPages: "Recursos recomendados",
    about: "Sobre este sitio"
  },
  hero: {
    eyebrow: "Bienvenido",
    title: "Aprende y defiende<br>tu <em>fe católica</em>",
    desc: "Argumentos apologéticos sólidos para entender, vivir y compartir la fe católica con convicción y sabiduría.",
    btn1: "Explorar artículos",
    btn2: "Nuestra misión"
  },
  topics: {
    eyebrow: "Catequesis Apologética",
    title: "Temas de Fe",
    subtitle: "Argumentos sólidos para profundizar, comprender y defender la fe&nbsp;católica"

  },
  article1: {
    category: "Doctrina",
    date: "Mayo 2026",
    title: "El Sacerdocio",
    excerpt: "El rol esencial del sacerdocio en la Iglesia católica y su importancia en la vida sacramental.",
    time: "11 min lectura",
    link: "Leer →"
  },
  article2: {
    category: "Apologética",
    date: "Mayo 2026",
    title: "Por qué creemos",
    excerpt: "Razones fundamentales para creer en la fe católica y su coherencia con la razón humana.",
    time: "15 min lectura",
    link: "Leer →"
  },
  article3: {
    category: "Sacramentos",
    date: "Mayo 2026",
    title: "La Eucaristía",
    excerpt: "El sacramento central de la Iglesia católica y su significado en la vida cristiana.",
    time: "13 min lectura",
    link: "Leer →"
  },
  article4: {
    category: "Doctrina",
    date: "Agosto 2026",
    title: "Transubstanciación",
    excerpt: "El cambio sustancial del pan y vino en el Cuerpo y Sangre de Cristo durante la Misa.",
    time: "14 min lectura",
    link: "Leer →"
  },
  article5: {
    category: "Doctrina",
    date: "Mayo 2026",
    title: "Los santos",
    excerpt: "La importancia de los santos en la Iglesia católica y su intercesión por nosotros.",
    time: "12 min lectura",
    link: "Leer →"
  },
  article6: {
    category: "Doctrina",
    date: "Próximamente",
    title: "La Santísima Trinidad",
    excerpt: "Comprendiendo el misterio central de la fe católica a través de la teología y la razón.",
    time: "10 min lectura",
    link: "Leer →"
  },
  article7: {
    category: "Doctrina",
    date: "Próximamente",
    title: "El purgatorio",
    excerpt: "La purificación final antes de entrar en la presencia de Dios.",
    time: "6 min lectura",
    link: "Leer →"
  },
  article8: {
    category: "Doctrina",
    date: "Próximamente",
    title: "La nueva ley",
    excerpt: "La ley de Cristo que reemplaza la Antigua Ley y guía a los cristianos.",
    time: "8 min lectura",
    link: "Leer →"
  },
  article9: {
    category: "Apologética",
    date: "Próximamente",
    title: "La primacía de Pedro",
    excerpt: "Por qué tenemos un Papa: la sucesión apostólica y el primado de Pedro.",
    time: "11 min lectura",
    link: "Leer →"
  },
  article10: {
    category: "Recursos",
    date: "Mayo 2026",
    title: "Recursos recomendados",
    excerpt: "Una selección de recursos católicos para profundizar en tu fe y formación.",
    time: "5 min lectura",
    link: "Explorar →"
  },
  mission: {
    title: "Nuestra Misión",
    teach: {
      title: "Enseñar",
      desc: "Profundizar en la doctrina católica con argumentos sólidos basados en la Sagrada Escritura, el magisterio de la iglesia y la razón."
    },
    illuminate: {
      title: "Iluminar",
      desc: "Proporcionar respuestas claras que ayuden a los fieles a comprender mejor su fe y responder preguntas difíciles de diferentes corrientes heréticas o sectas."
    },
    defend: {
      title: "Defender",
      desc: "Ofrecer argumentos apologéticos para entender y defender la fe católica frente a objeciones, dudas y todo tipo de herejías modernas, sectas y corrientes anticatólicas."
    }
  },
  contact: {
    title: "Contacto",
    desc: "¿Tienes preguntas o quieres colaborar con nosotros? Envíanos un mensaje.",
    name: { placeholder: "Tu nombre" },
    email: { placeholder: "Tu correo electrónico" },
    subject: { placeholder: "Asunto" },
    message: { placeholder: "Tu mensaje" },
    submit: "Enviar mensaje",
    cookieNotice: "Al enviar el formulario, tus datos viajan a Formspree, el servicio que nos hace llegar el mensaje, y se usan sólo para responderte. <a href='privacidad.html'>Cómo tratamos tus datos</a>.",
    errors: {
      email: "La dirección de correo parece incompleta: fíjate que no le falte el final, como «.com».",
      send: "No se pudo enviar el mensaje. Vuelve a intentarlo en unos minutos.",
      offline: "No hay conexión con el servidor. Revisa tu conexión a internet e inténtalo de nuevo."
    },
    success: {
      title: "Mensaje recibido",
      desc: "Gracias por escribirnos. Te responderemos a la brevedad. Ad maiorem Dei gloriam.",
      back: "Escribir otro mensaje"
    }
  },
    
    // Páginas de temas (Contenido dinámico para el router/overlay)
  topicPages: {
    common: {
      prevLabel: "Artículo anterior",
      nextLabel: "Siguiente artículo",
      backToTopics: "Volver a Temas"
    },
    "el-purgatorio": {
      pageTitle: "El purgatorio | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>El purgatorio y la misericordia de Dios</h1>
            <p>Una explicación clara del purgatorio como proceso de purificación y esperanza hacia la unión definitiva con Dios.</p>
            <div class="article-meta">
                <span>6 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español deben provenir de la
"Biblia de Jerusalén Latinoamericana" (sin "vosotros"). Si no está
disponible para un versículo, usar la versión oficial en vatican.va.
NUNCA Reina-Valera ni traducciones protestantes.
-->
<!-- TODO: agregar [Crítica común] — nombrar qué grupos niegan el purgatorio (Testigos de Jehová, adventistas, protestantes en general) y qué argumento bíblico usan -->
<!-- TODO: agregar [Cita bíblica] — incluir cita de BJL con scripture-block (2 Mac 12:44-46, 1 Cor 3:13-15, Mt 12:32) -->
<p>El purgatorio es la etapa en la que las almas se purifican antes de entrar en la presencia plena de Dios. No es castigo final, sino un proceso de amor sanador.</p>
                <h2>¿Qué significa purificación?</h2>
                <p>La purificación quita las consecuencias del pecado venial y sana las heridas de la libertad. Es la preparación necesaria para la contemplación divina.</p>
                <!-- TODO: agregar [Conclusión] — sección con h2 "Conclusión" que sintetice los argumentos -->
                <blockquote>"Dios es justo y también el más misericordioso. Su justicia purifica, su misericordia acompaña."</blockquote>
                <h2>Esperanza cristiana</h2>
                <p>El purgatorio no es una condena, sino una obra de redención. Cada alma es llamada a la plenitud del amor de Dios, y la purificación es parte de ese camino.</p>
                <ul>
                    <li>La Iglesia ora por las almas en purgatorio.</li>
                    <li>Los sacramentos y las buenas obras ayudan a la purificación.</li>
                    <li>Es una manifestación de la misericordia divina.</li>
                </ul>
                <h2>Vivir la fe</h2>
                <p>Comprender este misterio invita a vivir con mayor santidad, pedir perdón y ofrecer oraciones por los difuntos, confiando en la obra salvadora de Cristo.</p>`,
      nav: {
        prevTitle: "La Santísima Trinidad",
        nextTitle: "La nueva ley en Cristo"
      }
    },
    "la-eucaristia": {
      pageTitle: "La Eucaristía | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>La Eucaristía: el sacramento central</h1>
            <p>¿Es la Eucaristía un símbolo o el Cuerpo real de Cristo? Juan 6, Pablo y los primeros cristianos dan la misma respuesta.</p>
            <div class="article-meta">
                <span>13 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español provienen de "El Libro del Pueblo
de Dios" (traducción argentina, 1990), que es la Biblia en español publicada
libremente por la Santa Sede en vatican.va/archive/ESL0506/. Usa "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Las siete citas de este artículo fueron cotejadas contra esa fuente el 27-ago-2026.
-->
<p>Pentecostales, adventistas, Testigos de Jehová y protestantes en general responden lo mismo cuando alguien menciona la Eucaristía: <em>«Es solo un símbolo.»</em> ¿Es la Eucaristía un símbolo o es real? La respuesta está en San Juan 6. No hay texto más claro, más directo ni más desafiante en todo el Evangelio sobre este tema. Y Jesús no cede. Pero Juan 6 no es el único testigo: Pablo lo confirma de manera independiente, y los primeros discípulos de los apóstoles lo entendieron sin ambigüedad. Hay tres líneas de evidencia. Ninguna tiene respuesta en la interpretación simbólica.</p>
                <h2>Yo soy el pan de Vida<br>Juan 6:47-51</h2>
                <p>Jesús no dice «represento el pan de Vida» ni «soy como el pan de Vida». Dice:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 6:47-51</span>
                    <blockquote>«<strong class="s-hi">Les aseguro que el que cree, tiene Vida eterna. Yo soy el pan de Vida.</strong> Sus padres, en el desierto, comieron el maná y murieron. Pero este es el pan que desciende del cielo, para que aquel que lo coma no muera. <strong class="s-hi">Yo soy el pan vivo bajado del cielo.</strong> El que coma de este pan vivirá eternamente, y el pan que yo daré es <strong class="s-hi">mi carne</strong> para la Vida del mundo.»</blockquote>
                </div>
                <p>El verbo «soy» no indica representación: indica identidad. Y lo que viene después no deja lugar a interpretaciones simbólicas:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 6:53-55</span>
                    <blockquote>«Jesús les respondió: «Les aseguro que <strong class="s-hi">si no comen la carne del Hijo del hombre y no beben su sangre, no tendrán Vida en ustedes</strong>. El que come mi carne y bebe mi sangre tiene Vida eterna, y yo lo resucitaré en el último día. Porque <strong class="s-hi">mi carne es la verdadera comida y mi sangre, la verdadera bebida.</strong>»</blockquote>
                </div>
                <p>No dice «si no recuerdan» ni «si no contemplan». Dice <em>comer</em> y <em>beber</em>. Y lo repite con distintas palabras para que no haya confusión: <em>la verdadera comida</em> y <em>la verdadera bebida</em>. El adjetivo «verdadera» excluye expresamente lo simbólico.</p>
                <h2>La objeción de la metáfora<br>Juan 15:1</h2>
                <p>La respuesta habitual es: «Es una metáfora, como cuando dice "Yo soy la vid" o "Yo soy la puerta".» Hay que ir a la Biblia. Cuando Jesús dijo <em>«Yo soy la verdadera vid»</em> (Jn 15:1), nadie se fue. Cuando dijo «coman mi carne», muchos se fueron. La diferencia es decisiva:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 6:60</span>
                    <blockquote>«Después de oírlo, muchos de sus discípulos decían: <strong class="s-hi">«¡Es duro este lenguaje! ¿Quién puede escucharlo?».</strong>»</blockquote>
                </div>
                <p>Jesús no los corrige diciendo «malentendieron, era una metáfora». Los deja partir. Esa es la prueba más contundente: si fuera simbólico, el buen pastor los hubiera retenido con una aclaración. No lo hace. Y hay que oír de qué se quejan: no dicen que sea difícil de entender, dicen que es duro de escuchar. Habían entendido perfectamente.</p>
                <h2>Esto genera división<br>Juan 6:66-67</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 6:66-67</span>
                    <blockquote>«<strong class="s-hi">Desde ese momento, muchos de sus discípulos se alejaron de él y dejaron de acompañarlo.</strong> Jesús preguntó entonces a los Doce: <strong class="s-hi">«¿También ustedes quieren irse?».</strong>»</blockquote>
                </div>
                <p>No cede. No suaviza. No negocia el significado. Jesús es el buen pastor que no dejaría que ninguna oveja se perdiera por un malentendido —pero en esto es inflexible.</p>
                <h2>No hay interpretación posible<br>Juan 6:68</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 6:68</span>
                    <blockquote>Simón Pedro le respondió: <strong class="s-hi">«Señor, ¿a quién iremos? Tú tienes palabras de Vida eterna.»</strong></blockquote>
                </div>
                <p>Pedro no dice que entiende todo. Dice que confía. Eso es la fe: no tener todas las respuestas, sino saber en Quién se cree.</p>
                <ul>
                    <li>«Yo soy» — no representa, es.</li>
                    <li>«La verdadera comida, la verdadera bebida» — no simbólica.</li>
                    <li>Jesús no corrige a quienes lo entendieron literalmente: los deja ir.</li>
                    <li>Pedro no lo entiende del todo, pero confía. Eso es la fe.</li>
                </ul>
                <h2>Pablo lo confirma — testigo independiente<br>1 Corintios 10:16 y 11:27-29</h2>
                <p>Pablo escribe su primera carta a los Corintios antes de que se redacte el Evangelio de Juan. Son dos testigos completamente independientes. Pablo dice:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 1 Corintios 10:16</span>
                    <blockquote>«<strong class="s-hi">La copa de bendición que bendecimos, ¿no es acaso comunión con la Sangre de Cristo? Y el pan que partimos, ¿no es comunión con el Cuerpo de Cristo?</strong>»</blockquote>
                </div>
                <p>No dice «recuerdo». Dice <em>comunión</em> —participación real, contacto efectivo. Y luego:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 1 Corintios 11:27-29</span>
                    <blockquote>«<strong class="s-hi">Por eso, el que coma el pan o beba la copa del Señor indignamente tendrá que dar cuenta del Cuerpo y de la Sangre del Señor.</strong> Que cada uno se examine a sí mismo antes de comer este pan y beber esta copa; porque <strong class="s-hi">si come y bebe sin discernir el Cuerpo del Señor</strong>, come y bebe su propia condenación.»</blockquote>
                </div>
                <p>Hay que fijarse ante quién se responde. No se da cuenta del pan ni de la copa: se da cuenta <em>del Cuerpo y de la Sangre del Señor</em>. El griego que hay detrás es ἔνοχος, el término del que queda sujeto a juicio, el que tiene que responder ante un tribunal; nadie responde ante un tribunal por haber tratado mal un símbolo. Pablo dice además: «sin discernir el Cuerpo del Señor». Si fuera solo pan, ¿qué Cuerpo habría que discernir?</p>
                <h2>Los primeros cristianos — testigos formados por los apóstoles</h2>
                <p>Ignacio de Antioquía fue discípulo directo del apóstol Juan. Murió mártir alrededor del año 107 d.C. Escribió en su Carta a los Esmirniotas:</p>
                <blockquote>«<strong class="s-hi">Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo</strong>, la que padeció por nuestros pecados, la que el Padre resucitó por su bondad.» — Ignacio de Antioquía, Carta a los Esmirniotas 6-7 (~107 d.C.)</blockquote>
                <p>Justino Mártir escribió alrededor del año 150 d.C., a setenta años de la muerte de los apóstoles:</p>
                <blockquote>«<strong class="s-hi">No recibimos esto como pan común ni como bebida común</strong>... así también se nos ha enseñado que ese alimento eucaristizado es <strong class="s-hi">la carne y la sangre del Jesús encarnado.</strong>» — Justino Mártir, Primera Apología 66 (~150 d.C.)</blockquote>
                <p>Si los primeros cristianos —formados por los apóstoles mismos— creyeron en la Presencia Real, la pregunta que merece respuesta honesta es: ¿quién cambió eso? ¿Cuándo? ¿Con qué autoridad?</p>
                <h2>Conclusión</h2>
                <p>Jesús afirma la presencia real con la frase más directa posible: «mi carne es la verdadera comida». Ante la objeción de los que se escandalizan, no aclara ninguna metáfora: los deja irse. Pablo lo confirma desde afuera del relato joánico. Y los primeros discípulos de los apóstoles lo creyeron sin sombra de duda. Tres líneas de evidencia independientes. Ninguna tiene respuesta en la interpretación simbólica.</p>
                <p>Cómo esta realidad se hace presente en la Misa está en el tema <a href="tema-transubstanciacion.html">Transubstanciación</a>, desde 1 Corintios 10:16. Y por qué estas palabras se aceptan como verdad de Dios, en el tema <a href="tema-por-que-creemos.html">¿Por qué creemos?</a></p>`,
      nav: {
        prevTitle: "Por qué creemos en la fe católica",
        nextTitle: "Transubstanciación: el misterio eucarístico"
      }
    },
    "la-nueva-ley": {
      pageTitle: "La nueva ley | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>La nueva ley en Cristo</h1>
            <p>Entiende cómo la ley de Cristo supera y completa la Antigua Ley, invitándonos a vivir en el amor y la libertad de los hijos de Dios.</p>
            <div class="article-meta">
                <span>8 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español deben provenir de la
"Biblia de Jerusalén Latinoamericana" (sin "vosotros"). Si no está
disponible para un versículo, usar la versión oficial en vatican.va.
NUNCA Reina-Valera ni traducciones protestantes.
-->
<!-- TODO: agregar [Crítica común] — identificar qué grupos atacan la ley nueva (p. ej., quienes dicen que el Antiguo Testamento fue abolido, o los que niegan la moral cristiana) -->
<!-- TODO: agregar [Cita bíblica] — la cita "Amarás al Señor..." necesita referencia completa (Mt 22:37-39) y formato scripture-block con texto verificado en BJL -->
<!-- TODO: agregar [Conclusión] -->
<p>La nueva ley es la ley del Evangelio, centrada en el mandamiento del amor. Cristo no elimina la Ley antigua, sino que la lleva a su plenitud y la hace accesible al corazón humano.</p>
                <h2>Amor como criterio</h2>
                <p>Jesús resume la Ley en amar a Dios y al prójimo. Esta nueva norma no es una carga, sino una libertad profunda que transforma nuestras acciones desde el interior.</p>
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Mateo 22:37-38</span>
                    <blockquote>«<strong class="s-hi">Amarás al Señor tu Dios con todo tu corazón y a tu prójimo como a ti mismo</strong>»</blockquote>
                </div>
                <h2>Completar la ley antigua</h2>
                <p>Los profetas anunciaron una ley nueva que viviría en el corazón. La enseñanza de Cristo revela que el cumplimiento auténtico de la Ley no se reduce a acciones externas, sino a una disposición interior verdadera.</p>
                <ul>
                    <li>La nueva ley nos llama a ser sal de la tierra y luz del mundo.</li>
                    <li>El perdón y la misericordia son su expresión más genuina.</li>
                    <li>Vivimos la ley de Cristo al entregarnos por amor.</li>
                </ul>
                <h2>Práctica cristiana</h2>
                <p>La nueva ley se convierte en vida concreta cuando cultivamos la humildad, la justicia y la compasión. La Eucaristía y la oración nos ayudan a vivirla día a día.</p>`,
      nav: {
        prevTitle: "El purgatorio y la misericordia de Dios",
        nextTitle: "La primacía de Pedro"
      }
    },
    "la-primacia-de-pedro": {
      pageTitle: "La primacía de Pedro | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>La primacía de Pedro</h1>
            <p>Un análisis claro sobre por qué la Iglesia católica reconoce al Papa como sucesor de San Pedro y guía visible de la unidad eclesial.</p>
            <div class="article-meta">
                <span>11 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español deben provenir de la
"Biblia de Jerusalén Latinoamericana" (sin "vosotros"). Si no está
disponible para un versículo, usar la versión oficial en vatican.va.
NUNCA Reina-Valera ni traducciones protestantes.
-->
<!-- TODO: agregar [Crítica común] — nombrar qué grupos niegan la primacía de Pedro (Testigos de Jehová, adventistas, pentecostales) y qué argumento usan -->
<!-- TODO: agregar [Cita bíblica] — "Tú eres Pedro..." necesita referencia Mt 16:18 completa y texto BJL en scripture-block -->
<!-- TODO: agregar [Conclusión] -->
<p>La primacía de Pedro es una enseñanza esencial para entender la estructura de la Iglesia. Jesús le confió a Pedro un papel único como pastor y garante de la unidad apostólica.</p>
                <h2>Fundamento bíblico</h2>
                <p>En el evangelio, Cristo declara a Pedro como roca y le encarga apacentar sus ovejas. Este mandato refleja una autoridad especial en el liderazgo de la comunidad cristiana.</p>
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Mateo 16:18</span>
                    <blockquote>«<strong class="s-hi">Tú eres Pedro, y sobre esta roca edificaré mi Iglesia</strong>»</blockquote>
                </div>
                <h2>Sucesión apostólica</h2>
                <p>El Papa es el sucesor de San Pedro en la misión de confirmar a los hermanos. Esta continuidad asegura la fidelidad al depósito de la fe y protege la unidad de la Iglesia.</p>
                <ul>
                    <li>El primer Papa recibió un encargo de autoridad pastoral.</li>
                    <li>La sucesión apostólica protege la doctrina y la comunión.</li>
                    <li>El Papa actúa como signo visible de unidad para todos los creyentes.</li>
                </ul>
                <h2>Unidad de la Iglesia</h2>
                <p>Reconocer la primacía de Pedro no es una jerarquía arbitraria, sino una manera de mantener a la Iglesia unida en la fe, la esperanza y el amor.</p>`,
      nav: {
        prevTitle: "La nueva ley en Cristo",
        nextTitle: "El Sacerdocio en la Iglesia Católica"
      }
    },
    "la-santisima-trinidad": {
      pageTitle: "La Santísima Trinidad | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>La Santísima Trinidad</h1>
            <p>Entender la Trinidad como misterio de unidad y amor: Padre, Hijo y Espíritu Santo trabajando juntos en la historia de la salvación.</p>
            <div class="article-meta">
                <span>10 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español deben provenir de la
"Biblia de Jerusalén Latinoamericana" (sin "vosotros"). Si no está
disponible para un versículo, usar la versión oficial en vatican.va.
NUNCA Reina-Valera ni traducciones protestantes.
-->
<!-- TODO: agregar [Crítica común] — Testigos de Jehová niegan la Trinidad; especificar su argumento y los textos que usan -->
<!-- TODO: agregar [Cita bíblica] — "En el nombre del Padre..." necesita referencia Mt 28:19 completa y texto BJL en scripture-block -->
<!-- TODO: agregar [Conclusión] -->
<p>La Trinidad es el misterio central de la fe cristiana. Dios es un solo ser en tres Personas: Padre, Hijo y Espíritu Santo, en perfecta unidad y comunión.</p>
                <h2>Unidad y distinción</h2>
                <p>Cada Persona divina es plenamente Dios, pero no son tres dioses distintos. El cristianismo confiesa un único Dios en una relación eterna de amor.</p>
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Mateo 28:19</span>
                    <blockquote>«<strong class="s-hi">En el nombre del Padre, del Hijo y del Espíritu Santo</strong>»</blockquote>
                </div>
                <h2>Acción común</h2>
                <p>El Padre envía al Hijo, el Hijo redime, y el Espíritu Santifica. Esta acción conjunta muestra que la salvación es obra de la Trinidad entera.</p>
                <ul>
                    <li>Dios es amor comunional.</li>
                    <li>La Trinidad es fundamento de la vida cristiana en la Iglesia.</li>
                    <li>La presencia de Dios se revela en la historia como relación.</li>
                </ul>
                <h2>Implicaciones para la vida</h2>
                <p>La doctrina trinitaria nos invita a vivir en comunión, transparencia y servicio. Somos hechos a imagen de un Dios que es comunidad.</p>`,
      nav: {
        prevTitle: "Los santos y su intercesión",
        nextTitle: "El purgatorio y la misericordia de Dios"
      }
    },
    "los-santos": {
      pageTitle: "Los santos | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>Los santos y su intercesión</h1>
            <p>La Escritura misma los nombra: Abel, Henoc, Noé, Abraham, Moisés, los profetas. Siete pasajes, uno por uno, sobre por qué los santos escuchan e interceden.</p>
            <div class="article-meta">
                <span>12 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Cotejadas el 27-ago-2026: 6 del Vaticano, 1 de Jerusalén (Ap 5:8).
-->
<p>Testigos de Jehová y adventistas repiten la misma objeción sin cansarse: <em>«Los muertos no pueden escucharte»</em>, porque el alma —dicen— duerme hasta el juicio final. A primera vista suena razonable. Pero la Escritura dice otra cosa. No en una cita aislada: en siete pasajes distintos, desde Pablo hasta el Apocalipsis. Uno por uno.</p>

            <h2>El conocimiento se perfecciona tras la muerte<br>1 Corintios 13:9-13</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝ 1 Corintios 13:9-13</span>
                <blockquote>«porque <strong class="s-hi">nuestra ciencia es imperfecta</strong> y nuestras profecías, limitadas. Cuando llegue lo que es perfecto, cesará lo que es imperfecto. Mientras yo era niño, hablaba como un niño, sentía como un niño, razonaba como un niño, pero cuando me hice hombre, dejé a un lado las cosas de niño. Ahora vemos como en un espejo, confusamente; después veremos cara a cara. Ahora conozco todo imperfectamente; después <strong class="s-hi">conoceré como Dios me conoce a mí.</strong> En una palabra, ahora existen tres cosas: la fe, la esperanza y el amor, pero la más grande todas es el amor.»</blockquote>
            </div>

            <p>Pablo enseña que en esta vida el conocimiento es imperfecto. Cuando llegue lo perfecto —y eso ocurre al morir y ver a Dios cara a cara— se conocerá como Dios conoce: sin velo y sin límite. Si los santos conocen así, nada les es oculto. Pueden escuchar. Pueden entender las súplicas que se les dirigen.</p>

            <h2>Tras la muerte, veremos a Dios tal cual es<br>1 Juan 3:2</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝ 1 Juan 3:2</span>
                <blockquote>«Queridos míos, desde ahora somos hijos de Dios, y lo que seremos no se ha manifestado todavía. Sabemos que cuando se manifieste, <strong class="s-hi">seremos semejantes a él, porque lo veremos tal cual es.</strong>»</blockquote>
            </div>

            <p>San Juan confirma lo que dice Pablo. Ahora, en esta vida, no se ve: se cree. Tras la muerte, se ve a Dios tal cual es. Los santos ya cruzaron ese umbral. Ya ven. Ahí se cae el llamado «sueño del alma»: no están en ninguna oscuridad, están en la luz plena.</p>

            <h2>Tras la muerte viene el cielo<br>Juan 14:1-4</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝ Juan 14:1-4</span>
                <blockquote>«No se inquieten. Crean en Dios y crean también en mí. <strong class="s-hi">En la Casa de mi Padre hay muchas habitaciones</strong>; si no fuera así, se lo habría dicho a ustedes. Yo voy a prepararles un lugar. Y cuando haya ido y les haya preparado un lugar, <strong class="s-hi">volveré otra vez para llevarlos conmigo, a fin de que donde yo esté, estén también ustedes.</strong> Ya conocen el camino del lugar adonde voy.»</blockquote>
            </div>

            <p>Jesús no deja lugar a dudas: hay un destino tras la muerte, y ese destino es estar con él. El cielo no es una metáfora: es el lugar donde Jesús fue a preparar sitio. Y los santos que vivieron en la fe ya están allí, con él, donde él prometió llevarlos.</p>

            <h2>Los santos: la gran nube de testigos<br>Hebreos 11:1 — 12:3</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝ Hebreos 11:1 — 12:3</span>
                <blockquote>«Ahora bien, <strong class="s-hi">la fe es la garantía de los bienes que se esperan, la plena certeza de las realidades que no se ven. Por ella nuestros antepasados fueron considerados dignos de aprobación</strong>. Por la fe, comprendemos que la Palabra de Dios formó el mundo, de manera que lo visible proviene de lo invisible. <br><br>
Por la fe, <strong class="s-name">Abel</strong> ofreció a Dios un sacrificio superior al de Caín, y por eso fue reconocido como justo, como lo atestiguó el mismo Dios al aceptar sus dones. Y por esa misma fe, él continúa hablando, aún después de su muerte. Por la fe, <strong class="s-name">Henoc</strong> fue llevado al cielo sin pasar por la muerte. Nadie pudo encontrarlo porque Dios se lo llevó, y de él atestigua la Escritura que antes de ser llevado fue agradable a Dios. Ahora bien, sin la fe es imposible agradar a Dios, porque aquel que se acerca a Dios de creer que él existe y es el justo remunerador de los que lo buscan. Por la fe, <strong class="s-name">Noé</strong>, al ser advertido por Dios acerca de lo que aún no se veía, animado de santo temor, construyó un arca para salvar a su familia. Así, por esa misma fe, condenó al mundo y heredó la justicia que viene de la fe. <br><br>
Por la fe, <strong class="s-name">Abraham</strong>, obedeciendo al llamado de Dios, partió hacia el lugar que iba a recibir en herencia, sin saber a dónde iba. Por la fe, vivió como extranjero en la Tierra prometida, habitando en carpas, lo mismo que <strong class="s-name">Isaac y Jacob</strong>, herederos con él de la misma promesa. Porque Abraham esperaba aquella ciudad de sólidos cimientos, cuyo arquitecto y constructor es Dios. También por la fe, <strong class="s-name">Sara</strong> recibió el poder de concebir, a pesar de su edad avanzada, porque juzgó digno de fe al que se lo prometía. Y por eso, de un solo hombre, y de un hombre ya cercano a la muerte, nació una descendencia numerosa como las estrellas del cielo e incontable como la arena que está a la orilla del mar. <br><br>
Todos ellos murieron en la fe, sin alcanzar el cumplimiento de las promesas: las vieron y las saludaron de lejos, reconociendo que eran extranjeros y peregrinos en la tierra. Los que hablan así demuestran claramente que buscan una patria; y si hubieran pensado en aquella de la que habían salido, habrían tenido oportunidad de regresar. Pero <strong class="s-hi">aspiraban a una patria mejor, nada menos que la celestial</strong>. Por eso, Dios no se avergüenza de llamarse su Dios y, de hecho, les ha preparado una Ciudad. <br><br>
Por la fe, Abraham, cuando fue puesto a prueba, presentó a Isaac como ofrenda: él ofrecía a su hijo único, al heredero de las promesas, a aquel de quien se había anunciado: De Isaac nacerá la descendencia que llevará tu nombre. Y lo ofreció, porque pensaba que Dios tenía poder, aun para resucitar a los muertos. Por eso recuperó a su hijo, y esto fue como un símbolo. También por la fe, Isaac, en vista de lo que iba a suceder, bendijo a Jacob y a Esaú. Por la fe, Jacob, antes de morir, bendijo a cada uno de los hijos de José, mientras se inclinaba, apoyado en su bastón. Por la fe, José, al fin de su vida, hizo alusión al éxodo de los israelitas y dejó instrucciones acerca de sus restos. <br><br>
Por la fe, <strong class="s-name">Moisés</strong>, apenas nacido, fue ocultado por sus padres durante tres meses, porque vieron que el niño era hermoso, y no temieron el edicto del rey. Y por la fe, Moisés, siendo ya grande, renunció a ser llamado hijo de la hija del Faraón. El prefirió compartir los sufrimientos del Pueblo de Dios, antes que gozar los placeres efímeros del pecado: consideraba que compartir el oprobio del Mesías era una riqueza superior a los tesoros de Egipto, porque tenía puestos los ojos en la verdadera recompensa. Por la fe, Moisés huyó de Egipto, sin temer la furia del rey, y se mantuvo firme como si estuviera viendo al Invisible. Por la fe, celebró la primera Pascua e hizo la primera aspersión de sangre, a fin de que el Exterminador no dañara a los primogénitos de Israel. Por la fe, los israelitas cruzaron el Mar Rojo como si anduvieran por tierra firme, mientras los egipcios, que intentaron hacer lo mismo, fueron tragados por las olas. Por la fe, cayeron los muros de Jericó, después que el pueblo, durante siete días, dio vueltas alrededor de ellos. Por la fe, Rahab, la prostituta, no pereció con los incrédulos, ya que había recibido amistosamente a los que fueron a explorar la Tierra. <br><br>
¿Y qué más puedo decir? Me faltaría tiempo para hablar de <strong class="s-name">Gedeón</strong>, de <strong class="s-name">Barac</strong>, de <strong class="s-name">Sansón</strong>, de <strong class="s-name">Jefté</strong>, de <strong class="s-name">David</strong>, de <strong class="s-name">Samuel</strong> y de los Profetas. Ellos, gracias a la fe, conquistaron reinos, administraron justicia, alcanzaron el cumplimiento de las promesas, cerraron las fauces de los leones, extinguieron la violencia del fuego, escaparon del filo de la espada. Su debilidad se convirtió en vigor: fueron fuertes en la lucha y rechazaron los ataques de los extranjeros. Hubo mujeres que recobraron con vida a sus muertos. Unos se dejaron torturar, renunciando a ser liberados, para obtener una mejor resurrección. Otros sufrieron injurias y golpes, cadenas y cárceles. Fueron apedreados, destrozados, muertos por la espada. Anduvieron errantes, cubiertos con pieles de ovejas y de cabras, desprovistos de todo, oprimidos y maltratados. Ya que el mundo no era digno de ellos, tuvieron que vagar por desiertos y montañas, refugiándose en cuevas y cavernas. Pero, aunque su fe los hizo merecedores de un testimonio tan valioso, ninguno de ellos entró en posesión de la promesa. Porque Dios nos tenía reservado algo mejor, y no quiso que ellos llegaran a la perfección sin nosotros. <br><br>
Por lo tanto, <strong class="s-hi">ya que estamos rodeados de una verdadera nube de testigos</strong>, despojémonos de todo lo que nos estorba, en especial del pecado, que siempre nos asedia, y <strong class="s-hi">corramos resueltamente al combate que se nos presenta</strong>. Fijemos la mirada en el iniciador y consumador de nuestra fe, en Jesús, el cual, en lugar del gozo que se les ofrecía, soportó la cruz sin tener en cuenta la infamia, y ahora está sentado a la derecha del trono de Dios. Piensen en aquel que sufrió semejante hostilidad por parte de los pecadores, y así no se dejarán abatir por el desaliento.»</blockquote>
            </div>

            <p>Esta es la respuesta a «¿quiénes son los santos?». La Escritura los nombra uno por uno. No es invención de la Iglesia. Son los que vivieron, sufrieron y murieron buscando una patria que no es de este mundo, y el autor de Hebreos no los pone de adorno: dice que esa nube de testigos rodea a los que todavía corren. Nadie está rodeado por quienes no están.</p>

            <h2>El alma no duerme — Cristo predicó a los espíritus<br>1 Pedro 3:18-22</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝ 1 Pedro 3:18-22</span>
                <blockquote>«<strong class="s-hi">Cristo murió una vez por nuestros pecados</strong> –siendo justo, padeció por la injusticia– para llevarnos a Dios. Entregado a la muerte en su carne, fue vivificado en el Espíritu. <strong class="s-hi">Y entonces fue a hacer su anuncio a los espíritus que estaban prisioneros</strong>, a los que se resistieron a creer cuando Dios esperaba pacientemente, en los días en que Noé construía el arca. En ella, unos pocos –ocho en total– se salvaron a través del agua. Todo esto es figura del bautismo, por el que <strong class="s-hi">ahora ustedes son salvados</strong>, el cual no consiste en la supresión de una mancha corporal, sino que es el compromiso con Dios de una conciencia pura, por la resurrección de Jesucristo, que está a la derecha de Dios, después de subir al cielo y de habérsele sometido los Angeles, las Dominaciones y las Potestades.»</blockquote>
            </div>

            <p>Aquí cae el argumento del «sueño del alma», y cae por donde más duele. Cristo, tras morir, no quedó inconsciente esperando el juicio final: fue a hacer su anuncio a los espíritus que estaban prisioneros. Un anuncio supone alguien que habla y alguien que oye, y los dos estaban muertos. El alma sigue activa después de la muerte del cuerpo. Si la de Cristo lo estuvo, la de los santos también.</p>

            <h2>Los santos están en la Jerusalén celestial<br>Hebreos 12:22-24</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝ Hebreos 12:22-24</span>
                <blockquote>«Ustedes, en cambio, se han acercado a la montaña de Sión, <strong class="s-hi">a la Ciudad del Dios viviente, a la Jerusalén celestial</strong>, a una multitud de ángeles, a una fiesta solemne, a la asamblea de los primogénitos cuyos nombres están escritos en el cielo. Se han acercado a Dios, que es el Juez del universo, y <strong class="s-hi">a los espíritus de los justos que ya han llegado a la perfección</strong>, a Jesús, el mediador de la Nueva Alianza, y a la sangre purificadora que habla más elocuentemente que la de Abel.»</blockquote>
            </div>

            <p>Los santos fallecidos no flotan en ningún limbo esperando el juicio. Están en «la Ciudad del Dios viviente». Y hay que leer el verbo: los vivos <em>se han acercado</em> a ellos, en presente y en perfecto, no en una promesa futura. Son espíritus de justos que ya llegaron a la perfección. Perfectos. Cerca de Dios. Sin barrera y sin distancia.</p>

            <h2>Los santos llevan las oraciones ante el trono<br>Apocalipsis 5:8</h2>

            <!-- fuente: bj -->
            <div class="scripture-block">
                <span class="scripture-ref">✝ Apocalipsis 5:8</span>
                <blockquote>«Cuando lo tomó, los cuatro seres vivientes y los veinticuatro ancianos se postraron ante el Cordero; cada uno tenía un arpa y <strong class="s-hi">copas de oro llenas de incienso aromático, que son las oraciones de los santos.</strong>»</blockquote>
            </div>

            <p>San Juan lo ve en visión: en el cielo, delante del Cordero, los seres celestiales llevan ante el trono copas de incienso que <em>son</em> las oraciones de los santos. Las oraciones de los fieles de la tierra llegan al altar del cielo a través de los que allí están. Los santos no solo escuchan: presentan.</p>

            <h2>Conclusión</h2>

            <p>Los santos son los que vivieron en la fe —Abel, Henoc, Noé, Abraham, Moisés, los profetas—, los que tras la muerte están en la Ciudad del Dios viviente, la Jerusalén celestial. Allí conocen como Dios los conoce. Allí ven a Dios tal cual es. Allí no hay limitación ni distancia.</p>

            <p>Y lo que hace la Iglesia al invocarlos es exactamente lo que muestra el Apocalipsis: llevan al altar del cielo las oraciones de los fieles y las presentan ante el trono del Cordero. A los santos no se los adora. Se les pide que intercedan ante Dios, igual que se le pide a un hermano vivo que rece por uno. La única diferencia está a favor de ellos: están en el cielo y conocen como Dios conoce. Por eso ven, escuchan e interceden. Quien dice que los muertos no pueden escuchar tiene que explicar antes por qué el cielo guarda las oraciones en copas de oro.</p>`,
      nav: {
        prevTitle: "Transubstanciación: el misterio eucarístico",
        nextTitle: "La Santísima Trinidad"
      }
    },
    "por-que-creemos": {
      pageTitle: "Por qué creemos | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>Por qué creemos en la fe católica</h1>
            <p>¿Por qué creemos? No por costumbre. Porque lo atestiguaron, lo investigamos, y la Biblia misma señala hacia la Iglesia que Jesús fundó.</p>
            <div class="article-meta">
                <span>15 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Cotejadas el 27-ago-2026: 8 del Vaticano, 2 de Jerusalén (Mt 16:18 y 1 Tim 3:15).
-->
<p>¿Por qué creemos? No por tradición ciega ni por costumbre familiar. Creemos porque la Palabra de Dios fue atestiguada, transmitida fielmente y continúa siendo verdad. San Lucas lo dice desde el principio: se informó cuidadosamente de todo desde los orígenes para que conozcamos la verdad (Lc 1:1-4). Eso es lo que haremos aquí.</p>
                <h2>La Palabra fue atestiguada<br>Lucas 1:1-4 y Juan 11:25-27</h2>
                <p>Lucas nos dice que muchos trataron de relatar ordenadamente los acontecimientos cumplidos entre nosotros, <em>«tal como nos fueron transmitidos por aquellos que han sido desde el comienzo testigos oculares y servidores de la Palabra»</em> (Lc 1:2). No son leyendas: son testimonios. Lo que Jesús dijo, vivió y enseñó fue visto y transmitido por testigos reales.</p>
                <p>Marta, ante la tumba de su hermano, lo reconoce sin dudarlo: <em>«Sí, Señor, creo que tú eres el Mesías, el Hijo de Dios, el que debía venir al mundo»</em> (Jn 11:27). La fe no es irracional: es la respuesta a una revelación verificada por quienes la vivieron.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Lucas 1:4</span>
                    <blockquote>«a fin de que <strong class="s-hi">conozcas bien la solidez</strong> de las enseñanzas que has recibido.»</blockquote>
                </div>
                <h2>El enemigo pelea contra su lectura<br>Lucas 8:5-8, 8:11-12 y Salmo 119</h2>
                <p>La parábola del sembrador lo deja claro: <em>«La semilla es la Palabra de Dios»</em> (Lc 8:11). El demonio sabe que la Palabra de Dios hace brotar la salvación, y por eso <em>«arrebata la Palabra de sus corazones, para que no crean y se salven»</em> (Lc 8:12). No es casualidad que el enemigo luche contra su lectura.</p>
                <p>El Salmo 119:72 afirma que la ley de los labios de Dios vale más que todo el oro y la plata. Y si alguien pregunta qué gana leyendo la Biblia, San Pablo responde: <em>«desde la niñez conoces las Sagradas Escrituras: ellas pueden darte la sabiduría que conduce a la salvación, mediante la fe en Cristo Jesús»</em> (2 Tim 3:15).</p>
                <p>El Salmo 119:103-105 da la imagen más hermosa: <em>«¡Qué dulce es tu palabra para mi boca, es más dulce que la miel!... Tu palabra es una lámpara para mis pasos, y una luz en mi camino.»</em> Quien no lee la Palabra de Dios camina en la oscuridad.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Salmo 119:105</span>
                    <blockquote>«<strong class="s-hi">Tu palabra es una lámpara para mis pasos, y una luz en mi camino.</strong>»</blockquote>
                </div>
                <h2>La Palabra es de Dios<br>2 Pedro 1:19 y Juan 17:17</h2>
                <p>Esto no es opinión humana. San Pedro llama a la palabra de los profetas <em>«una lámpara que brilla en un lugar oscuro»</em>, y manda prestarle atención (2 Pe 1:19). Y el mismo Jesús, en su oración al Padre, lo confirma: <em>«tu palabra es verdad»</em> (Jn 17:17). Y Jesús mismo lo dijo: <em>«Felices más bien los que escuchan la Palabra de Dios y la practican»</em> (Lc 11:28). No dijo los que la conocen ni los que la citan; dijo los que la <strong class="s-hi">practican</strong>.</p>
                <h2>La fe es hacer lo que Él dice<br>Lucas 5:5 y Juan 2:5</h2>
                <p>Pedro había pescado toda la noche y no había sacado nada. Por su experiencia humana, echar las redes de día no tenía ningún sentido. Pero dijo algo que resume toda la fe: <em>«Maestro, hemos trabajado la noche entera y no hemos sacado nada, pero si tú lo dices, echaré las redes»</em> (Lc 5:5). Y por eso, precisamente, Jesús lo hizo pescador de hombres, a él y no a los demás (Lc 5:10).</p>
                <p>En Caná, la Virgen María da la instrucción definitiva a los sirvientes: <em>«Hagan todo lo que él les diga»</em> (Jn 2:5). Las tinajas se llenaron de agua, y el agua se convirtió en vino cuando los sirvientes cumplieron sus órdenes hasta el final: <em>«Así lo hicieron»</em> (Jn 2:8). La fe no es solo creer: es cumplir. El desarrollo de esto está en los temas de <a href="tema-la-eucaristia.html">La Eucaristía</a> y de <a href="tema-transubstanciacion.html">Transubstanciación</a>.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Lucas 5:5</span>
                    <blockquote>«Simón le respondió: Maestro, hemos trabajado la noche entera y no hemos sacado nada, <strong class="s-hi">pero si tú lo dices, echaré las redes.</strong>»</blockquote>
                </div>
                <h2>¿De dónde viene tu Biblia?<br>El sola scriptura y sus problemas</h2>
                <p>Protestantes en general —evangélicos, bautistas, pentecostales—, y a su manera también Testigos de Jehová y adventistas, sostienen lo mismo: <em>«Solo la Biblia es la regla de fe. La Biblia es suficiente.»</em> Bien. Vamos a la Biblia.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 2 Timoteo 3:16-17</span>
                    <blockquote>«<strong class="s-hi">Toda la Escritura está inspirada por Dios, y es útil para enseñar y para argüir, para corregir y para educar en la justicia</strong>, a fin de que el hombre de Dios sea perfecto y esté preparado para hacer siempre el bien.»</blockquote>
                </div>
                <p>La palabra que usa Pablo es «útil» —en griego ὠφέλιμος— no «exclusiva» ni «única regla de fe». El versículo nunca dice que la Escritura sola es suficiente para todo. Y hay algo más importante: si el único criterio de verdad fuera «lo que dice la Biblia», entonces el sola scriptura tendría que estar en la Biblia para ser válido. Y no está. El argumento se destruye a sí mismo con su propio criterio.</p>
                <h2>¿Quién fijó el canon?<br>El problema que el sola scriptura no puede responder</h2>
                <p>El Nuevo Testamento no llegó con un índice. Durante los primeros siglos, distintas comunidades usaban distintos textos. ¿Cómo se decidió qué es Palabra de Dios y qué no lo es? La Iglesia Católica, en los concilios de Hipona (393 d.C.) y Cartago (397 d.C.), determinó el canon bíblico que el mundo cristiano usa hasta hoy. El que rechaza la autoridad de la Iglesia Católica para enseñar doctrina está confiando en esa misma Iglesia para saber qué libros leer. No es posible tener coherencia de otra manera.</p>
                <h2>La Tradición oral es bíblica<br>2 Tesalonicenses 2:15 y 2 Timoteo 2:2</h2>
                <p>Pablo no enseñó solo por carta. Ordenó guardar también la tradición oral:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 2 Tesalonicenses 2:15</span>
                    <blockquote>«Por lo tanto, hermanos, <strong class="s-hi">manténganse firmes y conserven fielmente las tradiciones que aprendieron de nosotros, sea oralmente o por carta.</strong>»</blockquote>
                </div>
                <p>Y encargó que esa tradición se transmitiera de generación en generación:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 2 Timoteo 2:2</span>
                    <blockquote>«<strong class="s-hi">Lo que oíste de mí y está corroborado por numerosos testigos, confíalo a hombres responsables que sean capaces de enseñar a otros.</strong>»</blockquote>
                </div>
                <p>Cuatro generaciones de transmisión en un solo versículo: Pablo → Timoteo → hombres responsables → otros. Y el mismo Juan lo reconoce al final de su Evangelio:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 21:25</span>
                    <blockquote>«<strong class="s-hi">Jesús hizo también muchas otras cosas. Si se las relata detalladamente, pienso que no bastaría todo el mundo para contener los libros que se escribirían.</strong>»</blockquote>
                </div>
                <p>Jesús mismo no escribió una sola línea. Envió apóstoles a predicar, no a escribir.</p>
                <h2>La interpretación privada está prohibida por la Biblia<br>2 Pedro 1:20-21</h2>
                <p>Pedro lo dice con claridad:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 2 Pedro 1:20-21</span>
                    <blockquote>«Pero tengan presente, ante todo, que <strong class="s-hi">nadie puede interpretar por cuenta propia una profecía de la Escritura</strong>. Porque ninguna profecía ha sido anunciada por voluntad humana, sino que los hombres han hablado de parte de Dios, impulsados por el Espíritu Santo.»</blockquote>
                </div>
                <p>Desde 1517, hay más de 45.000 denominaciones distintas que leen la misma Biblia y llegan a conclusiones opuestas sobre el bautismo, la Eucaristía, la salvación y la moral. Jesús oró por algo diferente: <em>«<strong class="s-hi">Que todos sean uno</strong>»</em> (Jn 17:21). La pregunta que se impone: ¿puede el Espíritu Santo guiar simultáneamente a todas esas posiciones contradictorias?</p>
                <h2>La Iglesia es la columna de la verdad<br>1 Timoteo 3:15 y Mateo 16:18</h2>
                <p>La Biblia no se llama a sí misma columna de la verdad. Llama a la Iglesia:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 1 Timoteo 3:15</span>
                    <blockquote>«La Iglesia del Dios vivo, <strong class="s-hi">columna y fundamento de la verdad.</strong>»</blockquote>
                </div>
                <p>Y Jesús hizo una promesa institucional sobre ella:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Mateo 16:18</span>
                    <blockquote>«Y yo a mi vez te digo que tú eres Pedro, y sobre esta roca edificaré mi Iglesia, <strong class="s-hi">y las puertas del infierno no prevalecerán contra ella.</strong>»</blockquote>
                </div>
                <p>Esa promesa protege el Magisterio —la enseñanza oficial de la Iglesia— de enseñar error definitivamente. No significa que cada miembro sea impecable. Significa que la verdad que Cristo confió a su Iglesia no puede ser destruida: en el griego, las πύλαι ᾅδου, el poder de la muerte y del sepulcro, no se la llevan por delante.</p>
                <h2>Conclusión: creer y cumplir</h2>
                <p>La Palabra de los profetas es de Dios. Los apóstoles la atestiguaron. Hay que leerla toda —incluyendo lo que dice sobre la Tradición oral, sobre quién interpreta y sobre la Iglesia que Cristo fundó. Y la fe consiste en hacer lo que Dios dice. No entran en el Reino los que dicen «Señor, Señor», sino los que cumplen la voluntad del Padre (Mt 7:21). La Biblia, leída entera y con honestidad, señala hacia la misma Iglesia que Jesús fundó. Creer es confiar en Jesucristo aunque la experiencia humana diga lo contrario, como hizo Pedro en el lago. Y ese acto de confianza lo cambia todo.</p>`,
      nav: {
        prevTitle: "El Sacerdocio en la Iglesia Católica",
        nextTitle: "La Eucaristía: el sacramento central"
      }
    },
    "sacerdocio": {
      pageTitle: "El Sacerdocio | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>El Sacerdocio en la Iglesia Católica</h1>
            <p>¿Existe un sacerdocio ordenado en el Nuevo Testamento? La Biblia responde — y la respuesta no da lugar a dudas.</p>
            <div class="article-meta">
                <span>11 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Cotejadas el 27-ago-2026: 6 del Vaticano, 2 de Jerusalén (Heb 5:1-2 y 5:4).
-->
<p>Hay una pregunta que no puede quedar sin respuesta: Jesús dijo <em>«Los pecados serán perdonados a los que ustedes se los perdonen, y serán retenidos a los que ustedes se los retengan»</em> (Jn 20:23). ¿A quién le habló? ¿Y cómo se retienen los pecados de alguien sin saber cuáles son? Eso exige confesión. Eso exige un sacerdote con autoridad para perdonar. Pero primero hay que responder la objeción.</p>
                <p>Testigos de Jehová, adventistas y pentecostales la formulan casi con las mismas palabras: <em>«Todos los creyentes somos sacerdotes; no hace falta ningún intermediario.»</em> Y citan para eso 1 Pedro 2:9. La respuesta no consiste en negar ese versículo —es verdadero y está en la Biblia— sino en leer los otros, que están en la misma Biblia y hablan de un segundo sacerdocio que nadie se toma por su cuenta.</p>
                <h2>Un hombre tomado de entre los hombres<br>Hebreos 5:1-2</h2>
                <p>La carta a los Hebreos es clara desde el principio:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Hebreos 5:1-2</span>
                    <blockquote>«<strong class="s-hi">Todo sumo sacerdote es tomado de entre los hombres</strong> y puesto al servicio de Dios en favor de ellos, para ofrecer dones y sacrificios por los pecados. Puede compadecerse de los ignorantes y extraviados, ya que él mismo está rodeado de debilidad.»</blockquote>
                </div>
                <p>El sacerdote no está por encima de la condición humana. Comparte las mismas luchas, tentaciones y debilidades de cualquier creyente. Esta es la base de la compasión pastoral: nadie puede acompañar genuinamente al otro en lo que no conoce. El sacerdote puede compadecerse porque también él lucha.</p>
                <h2>Santo por Dios, no por mérito propio<br>Levítico 21:6-8</h2>
                <p>En el Levítico, Dios establece que los sacerdotes deben ser considerados santos. Pero la santidad que se les pide no es perfección moral absoluta, sino consagración: están apartados para Dios y su servicio:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Levítico 21:6-8</span>
                    <blockquote>«<strong class="s-hi">Estarán consagrados a su Dios y no profanarán el nombre de su Dios</strong>... <strong class="s-hi">Deberás considerarlo santo</strong>, porque él ofrece el alimento de tu Dios. <strong class="s-hi">Será santo para ti, porque yo, el Señor que te santifico, soy santo.</strong>»</blockquote>
                </div>
                <p>Conviene ver en quién se funda esa santidad. No dice «será santo porque se lo ha ganado»: dice <em>porque yo, el Señor que te santifico, soy santo</em>. Al pueblo se le manda considerarlo santo por Dios, no por los méritos del hombre. Esto libera de una expectativa equivocada: la fe no reposa en la virtud del ministro, sino en la fidelidad de Dios.</p>
                <h2>«Todos somos sacerdotes» — la objeción y su límite<br>1 Pedro 2:9 y Hebreos 5:4</h2>
                <p>San Pedro lo dice con claridad:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 1 Pedro 2:9</span>
                    <blockquote>«Ustedes, en cambio, son <strong class="s-hi">una raza elegida, un sacerdocio real, una nación santa</strong>, un pueblo adquirido para anunciar las maravillas de aquel que los llamó de las tinieblas a su admirable luz:»</blockquote>
                </div>
                <p>El sacerdocio bautismal es real. Nadie lo niega. Pero hay dos sacerdocios en el Nuevo Testamento, no uno. La misma carta a los Hebreos lo distingue con precisión:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Hebreos 5:4</span>
                    <blockquote>«<strong class="s-hi">Nadie se apropia este honor, sino que es llamado por Dios, como lo fue Aarón.</strong>»</blockquote>
                </div>
                <p>Hay un sacerdocio que se recibe en el bautismo, y hay otro que requiere llamado y consagración específica. Esto no es una invención tardía. Cuando Coré y su gente argumentaron que <em>«Toda la comunidad es sagrada, y el Señor está en medio de ella»</em> (Núm 16:3) —reclamando acceso al sacerdocio ministerial sin vocación— Dios respondió abriéndose la tierra bajo sus pies. Y está en el Nuevo Testamento:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Hechos 14:23</span>
                    <blockquote>«<strong class="s-hi">En cada comunidad establecieron presbíteros</strong>, y con oración y ayuno, los encomendaron al Señor en el que habían creído.»</blockquote>
                </div>
                <p>Pablo le ordena a Tito: <em>«Te he dejado en Creta, para que terminaras de organizarlo todo y <strong class="s-hi">establecieras presbíteros en cada ciudad</strong> de acuerdo con mis instrucciones»</em> (Tit 1:5). A Timoteo le recuerda: <em>«No malogres el don espiritual que hay en ti y que te fue conferido mediante una intervención profética, por la <strong class="s-hi">imposición de las manos del presbiterio</strong>»</em> (1 Tim 4:14). Presbiterio: un cuerpo constituido, con manos que se imponen y un don que se transmite. Esto es estructura, no metáfora.</p>
                <h2>«No llames a nadie padre» — respuesta bíblica<br>Mateo 23:9</h2>
                <p>Jesús dice en Mateo 23:9: <em>«<strong class="s-hi">Nadie en el mundo llamen "padre"</strong>, porque no tienen sino uno, el Padre celestial.»</em> El que usa este versículo contra el sacerdocio católico tiene un problema: la misma Biblia lo contradice en varios pasajes.</p>
                <p>San Pablo se llama a sí mismo padre: <em>«aunque tengan diez mil preceptores en Cristo, no tienen muchos padres: <strong class="s-hi">soy yo el que los ha engendrado en Cristo Jesús</strong>, mediante la predicación de la Buena Noticia»</em> (1 Cor 4:15). Esteban, ante quienes lo apedrearían, los llama: <em>«<strong class="s-hi">Hermanos y padres</strong>, escuchen»</em> (Hch 7:2). De Abraham se dice que es <em>«padre de los que se circuncidan»</em> y <em>«nuestro padre Abraham»</em> (Rom 4:12). El propio Jesús habla del padre de cada uno (Mt 7:11, Lc 15:11-32).</p>
                <p>Mateo 23:9 no prohíbe el uso gramatical de la palabra: prohíbe la idolatría de la autoridad humana, colocar a un hombre en el lugar de Dios. El contexto lo dice: Jesús habla contra los fariseos que buscan honores y títulos para sí mismos.</p>
                <h2>El perdón de los pecados — Juan 20:22-23</h2>
                <p>Volvamos al punto de partida. Jesús resucitado se aparece a los apóstoles y sopla sobre ellos —el mismo gesto del Génesis, cuando <em>«sopló en su nariz un aliento de vida»</em> y el hombre de arcilla se convirtió en un ser viviente (Gn 2:7)—:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 20:22-23</span>
                    <blockquote>«Al decirles esto, sopló sobre ellos y añadió: <strong class="s-hi">«Reciban al Espíritu Santo. Los pecados serán perdonados a los que ustedes se los perdonen, y serán retenidos a los que ustedes se los retengan.»</strong>»</blockquote>
                </div>
                <p>Hay que detenerse en el verbo que nadie cita: <em>retener</em>. ¿Cómo se retienen los pecados de alguien sin saber cuáles son? No se puede. Este versículo exige que el penitente declare sus pecados, porque sin oírlos no hay nada que perdonar ni que retener. Eso es la confesión sacramental, instituida por Cristo mismo.</p>
                <h2>El altar y el sacrificio en el Nuevo Testamento<br>Hebreos 13:10 y Malaquías 1:11</h2>
                <p>Si no hay sacerdocio ni sacrificio en el Nuevo Testamento, ¿por qué la carta a los Hebreos dice esto?</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Hebreos 13:10</span>
                    <blockquote>«<strong class="s-hi">Nosotros tenemos un altar</strong> del que no tienen derecho a comer los ministros de la Antigua Alianza.»</blockquote>
                </div>
                <p>Y el profeta Malaquías, siglos antes de Cristo, anunció:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Malaquías 1:11</span>
                    <blockquote>«Pero desde la salida del sol hasta su ocaso, mi Nombre es grande entre las naciones y <strong class="s-hi">en todo lugar se presenta a mi Nombre un sacrificio de incienso y una ofrenda pura</strong>; porque mi Nombre es grande entre las naciones, dice el Señor de los ejércitos.»</blockquote>
                </div>
                <p>Un sacrificio y una ofrenda pura, en todo lugar de la tierra, y anunciados por un profeta cuando el único altar legítimo estaba en Jerusalén. Los Padres de los primeros siglos reconocieron en esto la Eucaristía —el único sacrificio que cumple esa profecía—. Y si hay sacrificio, hay quien lo ofrece.</p>
                <h2>Lo que la Escritura nos enseña</h2>
                <ul>
                    <li>El sacerdote es un hombre como todos, que puede luchar y fallar.</li>
                    <li>Su autoridad y santidad provienen de Dios, no de sus méritos personales.</li>
                    <li>La validez de los sacramentos no depende de la santidad personal del ministro.</li>
                    <li>El sacerdocio ministerial ordenado está en el Nuevo Testamento: Hch 14:23, Tit 1:5, 1 Tim 4:14.</li>
                    <li>El perdón sacramental fue instituido por Cristo en Juan 20:22-23.</li>
                </ul>
                <p>Si se toma la Biblia entera —no pasajes aislados— se encuentra sacerdocio ordenado, confesión, sacrificio y altar. La pregunta no es si está en la Biblia. Está. La pregunta es si se está dispuesto a leer todo.</p>`,
      nav: {
        prevTitle: "La primacía de Pedro",
        nextTitle: "Por qué creemos en la fe católica"
      }
    },
    "transubstanciacion": {
      pageTitle: "Transubstanciación | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>Transubstanciación: el misterio eucarístico</h1>
            <p>Si su palabra hizo el mundo y convirtió el agua en vino, ¿qué ocurre cuando dice «esto es mi cuerpo»? Cinco pasajes, en orden.</p>
            <div class="article-meta">
                <span>14 min lectura</span>
                <span>Publicado en agosto de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español provienen de "El Libro del Pueblo
de Dios" (traducción argentina, 1990), que es la Biblia en español publicada
libremente por la Santa Sede en vatican.va/archive/ESL0506/. Usa "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Las cinco citas de este artículo fueron cotejadas contra esa fuente el 27-ago-2026.
-->
<p>Ante la Eucaristía la objeción cambia de forma, pero no de fondo. Testigos de Jehová, adventistas, pentecostales, mormones y protestantes en general repiten una de estas dos: <em>«El pan sigue siendo pan: se ve pan y sabe a pan.»</em> y <em>«Transubstanciación es una palabra inventada, filosofía griega; no está en la Biblia.»</em></p>
                <p>La segunda se responde en una línea: tampoco están las palabras «Trinidad» ni «Biblia», y nadie discute lo que nombran. Una palabra no crea el hecho: lo nombra. La primera es la que importa, y no se responde con filosofía sino con la Escritura, porque la Escritura ya contó lo que ocurre cuando Cristo dice que una cosa es otra. Cinco pasajes, en orden.</p>
                <h2>La Palabra no describe: hace<br>Juan 1:1-3</h2>
                <p>Antes de discutir qué puede pasarle al pan hay que saber qué es una palabra de Dios.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 1:1-3</span>
                    <blockquote>«Al principio existía <strong class="s-hi">la Palabra</strong>, y la Palabra estaba junto a Dios, y <strong class="s-hi">la Palabra era Dios</strong>. Al principio estaba junto a Dios. <strong class="s-hi">Todas las cosas fueron hechas por medio de la Palabra</strong> y sin ella no se hizo nada de todo lo que existe.»</blockquote>
                </div>
                <p>La Palabra de Dios no describe la realidad: la causa. Nada de lo que existe existía antes de que ella lo dijera, y todo lo que existe existe porque ella lo dijo. Ese es el punto de partida, y no es menor: preguntar cómo el pan puede dejar de ser pan es preguntar, con otras palabras, cómo la nada pudo dejar de ser nada. Ya ocurrió una vez. Ocurrió por lo mismo.</p>
                <h2>Caná: el agua cambió cuando le obedecieron<br>Juan 2:6-9</h2>
                <p>Hay un caso donde esa Palabra actúa delante de testigos y sobre una sustancia concreta.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 2:6-9</span>
                    <blockquote>«Había allí seis tinajas de piedra destinadas a los ritos de purificación de los judíos, que contenían unos cien litros cada una. Jesús dijo a los sirvientes: <strong class="s-hi">«Llenen de agua estas tinajas».</strong> Y las llenaron hasta el borde. «Saquen ahora, agregó Jesús, y lleven al encargado del banquete». <strong class="s-hi">Así lo hicieron.</strong> El encargado probó <strong class="s-hi">el agua cambiada en vino</strong> y como ignoraba su origen, <strong class="s-hi">aunque lo sabían los sirvientes que habían sacado el agua</strong>, llamó al esposo.»</blockquote>
                </div>
                <p>Conviene mirar dónde está el milagro. Jesús no toca el agua. No hace un gesto sobre las tinajas ni pronuncia una fórmula sobre ellas. Da una orden —«llenen», «saquen»— y el evangelista la despacha en tres palabras: «Así lo hicieron». Entre esa obediencia y la copa del encargado, el agua dejó de ser agua. Lo que cambió la sustancia fue una palabra cumplida.</p>
                <p>Y el evangelista se detiene a anotar un detalle que suele pasarse por alto: el encargado del banquete ignoraba el origen de aquel vino, y los sirvientes lo sabían. Los que habían hecho lo que Cristo mandó eran los únicos que sabían qué acababa de ocurrir. Los demás bebieron el milagro sin enterarse de que lo estaban bebiendo. En la Misa sucede exactamente lo mismo, y por la misma razón.</p>
                <h2>La misma boca, la misma fórmula<br>Juan 6:47-51</h2>
                <p>El que mandó llenar las tinajas dice después esto:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ Juan 6:47-51</span>
                    <blockquote>«<strong class="s-hi">Les aseguro</strong> que el que cree, tiene Vida eterna. <strong class="s-hi">Yo soy el pan de Vida.</strong> Sus padres, en el desierto, comieron el maná y murieron. Pero este es el pan que desciende del cielo, para que aquel que lo coma no muera. Yo soy el pan vivo bajado del cielo. El que coma de este pan vivirá eternamente, y <strong class="s-hi">el pan que yo daré es mi carne</strong> para la Vida del mundo.»</blockquote>
                </div>
                <p>«Les aseguro» es la fórmula con la que Cristo encabeza lo que no admite discusión, y detrás no viene una comparación sino una identificación: «yo soy», no «yo represento». Si aquella palabra convirtió el agua en vino sin que nadie viese el momento, esta no necesita menos. Es la misma boca y es la misma clase de palabra.</p>
                <p>El desarrollo completo de Juan 6 —la objeción de la metáfora, los discípulos que se marchan y Jesús que no los retiene con una aclaración— está en el tema <a href="tema-la-eucaristia.html">La Eucaristía</a>.</p>
                <h2>Pablo no dice símbolo: dice comunión<br>1 Corintios 10:16</h2>
                <p>Pablo escribe antes de que se redacte el Evangelio de Juan, y llega al mismo lugar por su cuenta.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 1 Corintios 10:16</span>
                    <blockquote>«La copa de bendición que bendecimos, ¿no es acaso <strong class="s-hi">comunión con la Sangre de Cristo</strong>? Y el pan que partimos, ¿no es <strong class="s-hi">comunión con el Cuerpo de Cristo</strong>?»</blockquote>
                </div>
                <p>Hay tres palabras que Pablo no usa: símbolo, representación, recuerdo. La que sí usa es <em>comunión</em> —en griego κοινωνία: participación real, contacto efectivo, tener parte en algo—. No se tiene parte en una metáfora. Y hay que mirar lo que nombra al final de cada pregunta: no dice que la copa sea comunión con el vino ni que el pan lo sea con el pan. Dice Sangre de Cristo y Cuerpo de Cristo.</p>
                <h2>Lo que recibí del Señor — y por eso hay muertos<br>1 Corintios 11:23-30</h2>
                <p>El pasaje decisivo es el que sigue, y conviene leerlo entero antes de comentarlo.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝ 1 Corintios 11:23-30</span>
                    <blockquote>«<strong class="s-hi">Lo que yo recibí del Señor, y a mi vez les he transmitido</strong>, es lo siguiente: El Señor Jesús, la noche en que fue entregado, tomó el pan, dio gracias, lo partió y dijo: <strong class="s-hi">«Esto es mi Cuerpo</strong>, que se entrega por ustedes. Hagan esto en memoria mía». De la misma manera, después de cenar, tomó la copa, diciendo: «Esta copa es la Nueva Alianza que se sella con mi Sangre. Siempre que la beban, háganlo en memoria mía». Y así, siempre que coman este pan y beban esta copa, proclamarán la muerte del Señor <strong class="s-hi">hasta que él vuelva</strong>. Por eso, el que coma el pan o beba la copa del Señor indignamente <strong class="s-hi">tendrá que dar cuenta del Cuerpo y de la Sangre del Señor</strong>. Que cada uno se examine a sí mismo antes de comer este pan y beber esta copa; porque si come y bebe <strong class="s-hi">sin discernir el Cuerpo del Señor, come y bebe su propia condenación</strong>. Por eso, entre ustedes hay muchos enfermos y débiles, y <strong class="s-hi">son muchos los que han muerto</strong>.»</blockquote>
                </div>
                <p>Empieza por donde los críticos preferirían no empezar: «Lo que yo recibí del Señor, y a mi vez les he transmitido». Ese es el vocabulario de la tradición, lo entregado y recibido de mano en mano. El mismo Pablo al que se cita contra la Tradición apoya en ella el rito de la Eucaristía, y lo hace en la carta más antigua que tenemos sobre el tema.</p>
                <p>Sigue «hasta que él vuelva». No una vez, ni dos, ni solamente aquella noche: cada vez, siempre, hasta el fin. Si se tratara de una conmemoración ocasional, Pablo tenía todas las palabras para decirlo. Dice justamente la contraria.</p>
                <p>Y termina donde la lectura simbólica se queda sin salida. Quien come indignamente no tiene que dar cuenta del pan ni del vino: tiene que dar cuenta <em>del Cuerpo y de la Sangre del Señor</em>, como quien responde ante una persona. Comer sin discernir el Cuerpo no le acarrea un reproche: come y bebe su propia condenación. Y Pablo dice de qué habla, con nombres de cosas que se ven: enfermos, débiles, muertos. Nadie enferma por faltarle el respeto a una metáfora. Nadie muere por tratar mal un recuerdo. Si en Corinto hubo enfermos y muertos por comer aquel pan sin discernir lo que era, aquel pan no era pan.</p>
                <ul>
                    <li>La Palabra de Dios no describe: hace. Todas las cosas fueron hechas por medio de ella.</li>
                    <li>En Caná esa palabra cambió una sustancia en otra, sin gesto visible, en cuanto fue cumplida: «Así lo hicieron».</li>
                    <li>Los que obedecieron supieron lo que había pasado; los que solamente miraban, no.</li>
                    <li>Pablo no dice símbolo ni recuerdo: dice comunión con la Sangre y con el Cuerpo de Cristo.</li>
                    <li>Comer indignamente obliga a dar cuenta del Cuerpo y de la Sangre —no del pan—, y en Corinto costó enfermedades y muertes.</li>
                </ul>
                <h2>Conclusión</h2>
                <p>Transubstanciación es el nombre de esto: la sustancia del pan y la del vino dejan de ser lo que eran y pasan a ser el Cuerpo y la Sangre de Cristo, mientras permanece todo aquello que los sentidos alcanzan —el aspecto, el sabor, el peso—. No es una teoría añadida a la Escritura para tapar un misterio incómodo: es la descripción exacta de lo que la Escritura narra en Caná y de lo que Pablo da por supuesto en Corinto. El milagro no consiste en que cambien las apariencias. Consiste en que cambie lo que la cosa es, porque Cristo lo dijo.</p>
                <p>Queda una sola pregunta, y no es sobre el pan: es sobre quién habla. Si el que dice «esto es mi cuerpo» es aquel por medio del cual fueron hechas todas las cosas, no hay nada que discutir; hay algo que creer. Por eso este tema no se decide con argumentos de química ni de filosofía griega, sino en el terreno del tema <a href="tema-por-que-creemos.html">¿Por qué creemos?</a> Si su palabra es palabra de Dios, hace lo que dice. Siempre lo hizo.</p>`,
      nav: {
        prevTitle: "La Eucaristía: el sacramento central",
        nextTitle: "Los santos y su intercesión"
      }
    },
    "recursos-recomendados": {
      sec4: {
        epigraph: "«De lo existente, unas cosas dependen de nosotros; otras no.»",
        epigraphAuthor: "Epicteto",
        eyebrow: "Del autor de este sitio",
        title: "La puerta falsa<span class='rec-book-subtitle'>La razón contra el ocultismo moderno</span>",
        edition: "Segunda edición, corregida y ampliada",
        desc: "Hay una tienda que abre a las siete de la tarde para el que no pudo dormir: vende antigüedad, secreto y poder, y cobra en algo que no figura en la etiqueta. Este libro entra ahí con un método simple y poco frecuente: abrir los libros que vende y leerlos enteros, con las fechas al lado. Grimorios, biblias negras, manuales herméticos, el tarot, la astrología, el «manifestar». De cada uno se sigue el rastro —qué edición, qué año, qué dice la página doscientos— y se lo confronta con lo que promete la portada. Los cargos no se afirman: se prueban con citas textuales del propio género. No es un libro religioso ni argumenta desde ninguna autoridad: es una demolición hecha con documentos, y detrás de ella la razón ejercida hasta el fondo, en la tradición de Epicteto, Séneca y Marco Aurelio.",
        close: "No promete misterios. Ofrece algo más arduo y más digno: entender.",
        factFormatsLabel: "Formatos",
        factFormats: "Tapa blanda y tapa dura",
        factLangsLabel: "Idiomas",
        // Los dos idiomas de la 2da edición, con bandera en la ficha.
        langs: {
          es: "Español",
          en: "Inglés"
        },
        otherLangs: "Para ediciones en otros idiomas, escribir al autor por el <a href='index.html#contacto'>formulario de contacto</a>.",
        // Portada de la 2da edición en este idioma. Solo hay dos, porque la
        // edición sale solo en español e inglés; los demás idiomas muestran
        // la inglesa, que es el título con el que la anuncian arriba.
        coverAlt: "Portada de la segunda edición de La puerta falsa, de M. Gabriel Castiglia",
        coverSrc: "Recursos/Im%C3%A1genes/libro-puerta-falsa-2ed-es.jpg",
        // Ficha de Amazon (USA) de la 2da edición en este idioma: la
        // española para el sitio en español, la inglesa para los demás,
        // igual que la portada. La usan el botón y la portada enlazada.
        buyUrl: "https://www.amazon.com/dp/B0HF1JGL9C",
        buyLabel: "Comprar en Amazon →",
        buyAria: "Comprar «La puerta falsa» en Amazon"
      },
      sec5: {
        eyebrow: "Aviso legal",
        title: "Derechos de autor",
        p1: "<strong>&copy; 2026 M. Gabriel Castiglia. Todos los derechos reservados.</strong> Los textos, artículos y traducciones de este sitio son obra original del autor y están protegidos por la legislación de derecho de autor y por los tratados internacionales en la materia.",
        p2: "Queda <strong>prohibida</strong> la reproducción, copia, distribución, publicación, traducción o adaptación, total o parcial, por cualquier medio o procedimiento, sin autorización previa y por escrito del autor. Se permite citar pasajes breves con fines de estudio o comentario, siempre que se indique el autor y se enlace a esta página.",
        p3: "<strong>La puerta falsa</strong> y todas sus ediciones son obra registrada del autor: su texto, su título y su portada no pueden reproducirse ni utilizarse sin autorización.",
        p4: "Los canales, libros, imágenes y sitios recomendados en esta página pertenecen a sus respectivos autores y titulares. Se enlazan únicamente a título de recomendación, sin vínculo comercial ni contraprestación de ninguna clase."
      },
      pageTitle: "Recursos recomendados | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Recursos</span>
            </div>
            <h1>Recursos recomendados</h1>
            <p>Fuentes de confianza para profundizar, formarse y compartir la fe católica.</p>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      labels: {
        bible: "Sagrada Escritura →",
        catechism: "Catecismo →",
        website: "Sitio web →",
        youtube: "YouTube →",
        greatAdventure: "Great Adventure →",
        inSpanish: "En español →",
        toroCountry: "Venezuela",
        oliveraCountry: "Argentina · QNTLC",
        heraldosTag: "Ecuador"
      },
      sec1: { eyebrow: "Santa Sede", title: "Fuentes vaticanas", desc: "Documentos oficiales de la Iglesia, disponibles en el sitio de la Santa Sede." },
      sec2: {
        eyebrow: "Apologética · Formación", title: "Sacerdotes y formadores", desc: "Voces fieles al Magisterio que enseñan, defienden y proclaman la fe con profundidad y rigor.",
        toro:    { desc: "Teólogo y apologeta. Responde con profundidad las objeciones más difíciles a la fe católica." },
        olivera: { desc: "Historiador y apologeta agustino. Aborda el racionalismo, las sectas y los errores modernos con rigor." }
      },
      sec3: {
        eyebrow: "Apostolados · Medios", title: "Apostolados y medios católicos",
        vaticannews: { desc: "El portal informativo oficial de la Santa Sede. Noticias del Papa y de la Iglesia universal, con transmisiones en directo de las celebraciones pontificias.", tag: "Santa Sede · Noticias", ytEs: "YouTube en español →", ytEn: "YouTube en inglés →" },
        heraldos: { desc: "Apostolado misionero. Formación, catequesis y evangelización fiel a la Tradición." },
        rugged:   { desc: "Hermosos rosarios hechos a mano y artículos de fe varios de gran calidad con envío internacional.", tag: "Estados Unidos" },
        grat:     { desc: "Biblia de Jerusalén en inglés o español latino (para otros idiomas verifique en la página oficial). Con plan de estudio único conteniendo explicaciones paso a paso y gráficas, ideal para neófitos.", tag: "Biblia · Formación" },
        ewtn:     { desc: "La red de televisión católica más grande del mundo. Misa diaria, Santo Rosario, documentales y formación las 24 horas.", tag: "Televisión · Radio" }
      },
      nav: {
        prevTitle: "La primacía de Pedro",
        nextTitle: "El Sacerdocio en la Iglesia Católica"
      }
    },
    "privacidad": {
      pageTitle: "Privacidad | Fé y Razón",
      linkLabel: "Privacidad",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Aviso legal</span>
            </div>
            <h1>Privacidad</h1>
            <p>Qué datos recoge este sitio, para qué se usan y por dónde pasan.</p>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<p>Este sitio no usa cookies, no tiene analítica, no muestra publicidad y no incluye botones ni rastreadores de redes sociales. Las tipografías, las imágenes y los videos se sirven desde este mismo dominio: al abrir una página, el navegador no le pide nada a ningún tercero.</p>
                <h2>Qué datos se recogen</h2>
                <p>Únicamente los que se escriben a mano en el formulario de contacto: <strong>nombre, correo electrónico, asunto y mensaje</strong>. No se recoge ningún otro dato, y en el resto del sitio no hay ningún otro formulario.</p>
                <h2>Para qué se usan</h2>
                <p>Sólo para leer el mensaje y responderlo. No se venden, no se ceden con fines comerciales y no se usan para enviar boletines ni publicidad.</p>
                <h2>Por dónde pasan</h2>
                <p>El formulario se envía a <strong>Formspree</strong> (formspree.io), el servicio que recibe el mensaje y lo hace llegar al autor. Al usar el formulario, esos datos quedan también sujetos a las condiciones de ese servicio, que pueden consultarse en <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener">su política de privacidad</a>.</p>
                <h2>Dónde está alojado el sitio</h2>
                <p>Las páginas se publican mediante <strong>GitHub Pages</strong>. Como cualquier servidor web, registra las solicitudes que recibe para poder entregar las páginas y protegerlas de abusos. Ese registro no está bajo el control de este sitio.</p>
                <h2>Lo único que se guarda en tu navegador</h2>
                <p>El idioma que elegís, bajo la clave <strong>language</strong>, en el almacenamiento local del navegador. No es una cookie, no se envía a ningún servidor y no identifica a nadie: sirve para que el sitio se abra en tu idioma la próxima vez. Se borra vaciando los datos del sitio desde el propio navegador.</p>
                <h2>Enlaces a otros sitios</h2>
                <p>Estas páginas enlazan a sitios de terceros —Vatican.va, YouTube, Amazon y los apostolados recomendados—. Lo que ocurra una vez que salís de acá se rige por las políticas de esos sitios, no por esta.</p>
                <h2>Responsable y contacto</h2>
                <p>El responsable de este sitio es <strong>M. Gabriel Castiglia</strong>. Para cualquier consulta sobre tus datos —incluido pedir que se borre un mensaje que hayas enviado— escribí por el <a href="index.html#contacto">formulario de contacto</a>.</p>`
    },
    "sobre-este-sitio": {
      pageTitle: "Sobre este sitio | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">El sitio</span>
            </div>
            <h1>Sobre este sitio</h1>
            <p>Un recorrido desde las filosofías que no aguantaron hasta la Iglesia que sí aguanta.</p>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<p>Llegué al catolicismo después de un recorrido largo. Leí de todo: ocultismo y esoterismo, las llamadas tablas esmeralda, las filosofías orientales, Nietzsche, los epicúreos. Probé respuestas en todas partes y no encontraba ninguna que se sostuviera. El estoicismo fue lo último que me ofreció algo serio antes de Cristo — Séneca, Marco Aurelio, Epicteto me enseñaron a mirar la verdad sin pestañear. Y mirando la verdad sin pestañear terminé donde no esperaba: ante la Iglesia Católica.</p>

            <p>Este sitio es para vos si estás en alguno de estos lugares: dudás de la fe que recibiste y no sabés a quién preguntarle; estás buscando entre tradiciones y nadie te da una respuesta que te aguante el peso; te acabás de convertir y te sentís solo, sin guía, asediado por todos lados. Conozco ese lugar. Estuve ahí. Y sé lo que hay alrededor: católicos tradicionales que a veces dan por supuesto lo que tendrían que demostrar y no saben explicarlo; y peor todavía, católicos tibios — los que van a misa por costumbre, no saben qué creen, no defienden nada, y son los primeros en encogerse de hombros cuando alguien ataca la fe delante de ellos.</p>

            <div class="scripture-block">
                <span class="scripture-ref">✝ Apocalipsis 3,15-16</span>
                <blockquote>«Conozco tus obras: no eres ni frío ni caliente. ¡Ojalá fueras frío o caliente! Ahora bien, puesto que eres tibio, y no frío ni caliente, te vomitaré de mi boca.»</blockquote>
            </div>

            <p>Un tibio no defiende nada, no explica nada, no convence a nadie. Al menos el que cree algo equivocado tiene algo que ofrecer.</p>

            <p>Y los protestantes aparecen. Aparecen siempre. Testigos de Jehová, pentecostales, adventistas, mormones, cada secta con su versión recortada de la Escritura y su certeza prestada. Acá vas a encontrar respuesta a esas sectas, en su propio terreno, con su propia arma: la Biblia entera — incluyendo los libros deuterocanónicos que ellos arrancaron de sus traducciones sin autoridad para hacerlo. Con la Biblia bien leída, los Padres de la Iglesia, el Magisterio, el Catecismo, y la razón que Dios nos dio como regalo.</p>

            <p>Mi inspiración principal en este trabajo es el Padre Luis Toro. Lo que él hace hablando, yo intento hacerlo escribiendo, en los idiomas y para los lectores que él no alcanza.</p>

            <p>No escribo para ganar discusiones. Escribo para que el que está dudando solo en la noche tenga algo serio a mano cuando le toque defender su fe — o cuando le toque encontrarla por primera vez.</p>

            <p class="about-signature">— M.G.</p>`
    }
  },
  share: {
    button: "Compartir este tema",
    copied: "¡Enlace copiado!",
    ariaLabel: "Compartir este tema"
  },
  provisional: {
    notice: "⚠ Este artículo está siendo redactado. El contenido actual es provisorio y será reemplazado próximamente por texto definitivo.",
    preliminaryWarning: "Este artículo es preliminar, el contenido apologético será publicado en breve"
  },
  meditacion: {
    quotes: [
      { ref: "Jn 14, 6",    text: "Yo soy el Camino, la Verdad y la Vida." },
      { ref: "Mt 16, 18",   text: "Tú eres Pedro, y sobre esta piedra edificaré mi Iglesia." },
      { ref: "Is 1, 18",    text: "Aunque sus pecados sean como la escarlata, se volverán blancos como la nieve." },
      { ref: "Lc 22, 32",   text: "pero yo he rogado por ti, para que no te falte la fe. Y tú, después que hayas vuelto, confirma a tus hermanos." },
      { ref: "2 Pe 1, 20",  text: "nadie puede interpretar por cuenta propia una profecía de la Escritura." }
    ]
  },
  lang: {
    soon: "Próximamente"
  },
  // Textos de la página 404 (404.html).
  notFound: {
    pageTitle: "Página no encontrada | Fé y Razón",
    eyebrow: "Error 404",
    title: "Esta página<br>no <em>existe</em>",
    desc: "El enlace que seguiste no lleva a ninguna parte de este sitio. Puede que esté mal escrito, o que la página haya cambiado de nombre. Lo que buscabas, si existe, está a un clic.",
    verse: "«Buscad y hallaréis; llamad y se os abrirá.»",
    verseRef: "Mateo 7, 7",
    btnHome: "Volver al inicio",
    btnTopics: "Ver todos los temas"
  },
  footer: {
    rights: "<strong>&copy; 2026 M. Gabriel Castiglia. Todos los derechos reservados.</strong> Prohibida la reproducción total o parcial sin autorización escrita del autor.",
    text: "&copy; 2026 Fé y Razón. Ad maiorem Dei gloriam."
  }
};
// Se expone en window para que el cargador por idioma pueda tomarlo por nombre.
// El `const` de arriba queda igual: es lo que leen los verificadores de _TRABAJO.
if (typeof window !== 'undefined') window.translationsES = translationsES;
