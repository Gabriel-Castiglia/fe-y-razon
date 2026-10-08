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
    pageTitle: "Temas de Fe | Fé y Razón",
    filter: { label: "Filtrar por grupo", all: "Todos", god: "Dios y la fe", church: "Iglesia", sacraments: "Sacramentos", saints: "La Santísima Virgen y los santos", salvation: "Salvación", search: "Buscar un tema", empty: "Ningún tema coincide con la búsqueda." },
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
    date: "Septiembre 2026",
    title: "La Santísima Trinidad",
    excerpt: "Tres Personas y un solo Dios: lo que la Escritura responde a los pentecostales unidos, pasaje por pasaje.",
    time: "11 min lectura",
    link: "Leer →"
  },
  article7: {
    category: "Doctrina",
    date: "Septiembre 2026",
    title: "El purgatorio",
    excerpt: "Una cárcel de la que se sale y pecados que se perdonan en el mundo futuro: lo que Cristo enseña sobre la purificación.",
    time: "8 min lectura",
    link: "Leer →"
  },
  article8: {
    category: "Doctrina",
    date: "Septiembre 2026",
    title: "La nueva ley",
    excerpt: "La Alianza del Sinaí terminó en la cruz y los apóstoles se reunían el domingo: lo que dice la Escritura sobre la Ley antigua y la nueva.",
    time: "25 min lectura",
    link: "Leer →"
  },
  article9: {
    category: "Apologética",
    date: "Septiembre 2026",
    title: "La primacía de Pedro",
    excerpt: "Las llaves del Reino, la piedra y el encargo de confirmar a los hermanos: lo que la Escritura le da a Pedro.",
    time: "14 min lectura",
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
    intro: "Este sitio se actualiza constantemente con nuevos temas apologéticos. Si quieres que se trate uno en particular, escríbenos por el formulario de contacto y lo incluiremos en la medida de lo posible.",
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
            <p>Una cárcel de la que se sale y pecados que se perdonan en el mundo futuro: lo que enseña Cristo sobre la purificación después de la muerte, pasaje por pasaje.</p>
            <div class="article-meta">
                <span>8 min lectura</span>
                <span>Publicado en septiembre de 2026</span>
            </div>
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Texto base de Gabriel: purgatorio.docx (28-sep-2026). Las frases en rojo
son las que él marcó como «Resaltado».
-->
<p>Varias sectas protestantes sostienen la herejía de que el purgatorio no existe, y la defienden de dos maneras. La primera la repiten casi todas: <em>«La palabra purgatorio no está en la Biblia. Es un invento de Roma: la sangre de Cristo nos limpia de todo pecado, y el que muere va directo al cielo o al infierno.»</em> La segunda es propia de los adventistas y los Testigos de Jehová, que niegan que el alma siga viva después de la muerte: <em>«Los muertos no saben nada (Ecl 9:5). No hay nadie a quien purificar ni por quien rezar.»</em></p>
                <p>La primera se responde en una línea. La palabra purgatorio no está en la Biblia, y tampoco está la palabra Trinidad, y la Trinidad está en cada página. Lo que importa es si la Escritura enseña que hay un lugar que no es el infierno, porque del infierno no se sale, donde se paga la deuda del pecado hasta el final y del que después se sale. Eso lo enseña, y lo enseña Cristo.</p>
                <p>El purgatorio es obra de la misericordia. Es como pasar alcohol por una herida infectada: arde y duele, pero un padre que ama a su hijo se la limpia, porque no va a dejar que por un raspón se le gangrene el brazo. Eso hace el purgatorio: limpia lo que el pecado dejó, para que el alma pueda entrar en la presencia de Dios.</p>
                <h2>«Hasta que pagara todo lo que debía»<br>Mateo 18:23-35</h2>
                <p>Jesús explica el Reino de los Cielos con la parábola del servidor que no perdonó.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 18:23-35</span>
                    <blockquote>«Por eso, <strong class="s-hi">el Reino de los Cielos se parece a un rey que quiso arreglar las cuentas con sus servidores</strong>. … E indignado, el rey <strong class="s-hi">lo entregó en manos de los verdugos hasta que pagara todo lo que debía. Lo mismo hará también mi Padre celestial con ustedes</strong>, si no perdonan de corazón a sus hermanos.»</blockquote>
                </div>
                <p>El castigo tiene un límite: dura hasta que el servidor pague todo lo que debía. Primero paga, después sale. Del infierno no se sale, así que esa cárcel no es el infierno. Y Jesús no deja la parábola como una historia sobre un rey cualquiera: <em>«Lo mismo hará también mi Padre celestial con ustedes.»</em> No es una interpretación de la Iglesia ni una suposición. Lo dijo Cristo.</p>
                <h2>La cárcel de la que se sale<br>Mateo 5:25-26</h2>
                <p>En el Sermón de la Montaña, Jesús usa la misma imagen.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 5:25-26</span>
                    <blockquote>«Trata de llegar en seguida a un acuerdo con tu adversario, mientras vas caminando con él, <strong class="s-hi">no sea que el adversario te entregue al juez, y el juez al guardia, y te pongan preso</strong>. Te aseguro que <strong class="s-hi">no saldrás de allí hasta que hayas pagado el último centavo</strong>.»</blockquote>
                </div>
                <p>El juez es Dios, el guardia son sus ángeles y la cárcel es el purgatorio. «Hasta que hayas pagado» quiere decir que hay un momento en que la deuda se termina y la puerta se abre. La cárcel no es eterna. El infierno sí lo es.</p>
                <h2>Perdón en el mundo futuro<br>Mateo 12:32</h2>
                <p>Hablando del pecado contra el Espíritu Santo, Jesús distingue dos tiempos.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 12:32</span>
                    <blockquote>«Al que diga una palabra contra el Hijo del hombre, se le perdonará; pero al que hable contra el Espíritu Santo, <strong class="s-hi">no se le perdonará ni en este mundo ni en el futuro</strong>.»</blockquote>
                </div>
                <p>Si ningún pecado se perdonara después de la muerte, decir que este no se perdonará «en el futuro» no tendría sentido. Jesús da por supuesto que algunos pecados se perdonan en este mundo y otros en el que viene. Este no; otros sí. En el cielo no hay nada que perdonar, y en el infierno no hay perdón. Ese perdón del mundo futuro ocurre en otro lugar.</p>
                <h2>No todo pecado lleva a la muerte<br>1 Juan 5:16-17</h2>
                <p>Juan distingue dos clases de pecado.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Juan 5:16-17</span>
                    <blockquote>«El que ve a su hermano cometer un <strong class="s-hi">pecado que no lleva a la muerte</strong>, <strong class="s-hi">que ore y le dará la Vida</strong>. Me refiero a los que cometen pecados que no conducen a la muerte, porque hay un pecado que lleva a la muerte; <strong class="s-hi">por este no les pido que oren</strong>. Aunque toda maldad es pecado, <strong class="s-hi">no todo pecado lleva a la muerte</strong>.»</blockquote>
                </div>
                <p>Hay pecados que llevan a la muerte y pecados que no. La Iglesia los llama mortales y veniales. Por el hermano que peca sin llegar a la muerte se ora, y Dios le da la Vida. El que muere con pecados que no llevan a la muerte no está condenado, pero tampoco está limpio. Entre la condena y la presencia de Dios queda justamente eso: la purificación.</p>
                <h2>Los muertos viven<br>Juan 11:21-27</h2>
                <p>A los adventistas y a los Testigos de Jehová les responde Jesús junto a la tumba de Lázaro.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 11:21-27</span>
                    <blockquote>«Marta dijo a Jesús: «Señor, si hubieras estado aquí, mi hermano no habría muerto. Pero yo sé que aun ahora, Dios te concederá todo lo que le pidas». Jesús le dijo: «Tu hermano resucitará». Marta le respondió: «Sé que resucitará en la resurrección del último día». Jesús le dijo: «Yo soy la Resurrección y la Vida. El que cree en mí, <strong class="s-hi">aunque muera, vivirá</strong>: y todo el que vive y cree en mí, <strong class="s-hi">no morirá jamás</strong>. ¿Crees esto?». Ella le respondió: «Sí, Señor, creo que tú eres el Mesías, el Hijo de Dios, el que debía venir al mundo».»</blockquote>
                </div>
                <p>Marta habla de la resurrección del último día, y Jesús va más allá: el que cree en él, aunque muera, vive, y no muere jamás. La muerte del cuerpo no apaga la vida del que cree. Los muertos en Cristo no están dormidos en la nada esperando el fin del mundo. Están vivos.</p>
                <h2>El espíritu vuelve a Dios<br>Eclesiastés 12:7</h2>
                <p>El mismo libro del que sale la objeción dice qué pasa cuando alguien muere.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Eclesiastés 12:7</span>
                    <blockquote>«antes que el polvo vuelva a la tierra, como lo que es, y <strong class="s-hi">el aliento vuelva a Dios</strong>, porque es él quien lo dio.»</blockquote>
                </div>
                <p>El cuerpo vuelve a la tierra y el aliento vuelve a Dios. La palabra hebrea es <em>rúaj</em>, la misma que se traduce por espíritu, y por eso otras versiones dicen «el espíritu vuelve a Dios». La frase de Eclesiastés 9:5 que citan los adventistas se completa en el versículo siguiente:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Eclesiastés 9:6</span>
                    <blockquote>«Se han esfumado sus amores, sus odios y sus rivalidades, y <strong class="s-hi">nunca más podrán compartir todo lo que se hace bajo el sol</strong>.»</blockquote>
                </div>
                <p>No saben nada de lo que pasa en este mundo. Eso no dice que hayan dejado de existir.</p>
                <p>Y al volver a Dios, el espíritu tiene que estar limpio, porque algo manchado de pecado no puede presentarse ante él. Para eso es el purgatorio.</p>
                <ul>
                    <li>Jesús habla de una deuda que se paga hasta el final y de una cárcel de la que se sale.</li>
                    <li>Hay pecados que se perdonan en el mundo futuro.</li>
                    <li>No todo pecado lleva a la muerte, y por el que peca sin llegar a la muerte se ora.</li>
                    <li>Los que mueren en Cristo viven, y su espíritu vuelve a Dios.</li>
                </ul>
                <h2>Conclusión</h2>
                <p>El purgatorio no es un invento de Roma ni una puerta trasera para evitar el infierno. Es lo que Cristo describe cuando habla de la cárcel de la que se sale después de pagar el último centavo, y de los pecados que se perdonan en el mundo futuro. La sangre de Cristo es la que limpia, también ahí: el purgatorio es la aplicación de esa sangre a quien murió en gracia pero todavía manchado.</p>
                <p>Los adventistas y los Testigos de Jehová tienen razón en que los muertos no participan de lo que pasa bajo el sol. Se equivocan en lo que deducen. El que cree en Cristo, aunque muera, vivirá, y su espíritu vuelve a Dios, que es quien lo dio.</p>`,
      nav: {
        prevTitle: "Los santos y su intercesión",
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
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español provienen de "El Libro del Pueblo
de Dios" (traducción argentina, 1990), que es la Biblia en español publicada
libremente por la Santa Sede en vatican.va/archive/ESL0506/. Usa "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Las siete citas de este artículo fueron cotejadas contra esa fuente el 27-ago-2026;
el 4-oct-2026 Jn 15:1 pasó a recuadro (8 citas).
Atribución verificada el 4-oct-2026, «símbolo» por escrito: bautistas (Baptist
Faith & Message, art. 7), Asambleas de Dios (verdad fundamental 6), adventistas
(creencia 16, «emblemas»), Testigos (glosario de su Biblia, «simbolizan»).
Los luteranos NO: creen en la presencia real.
-->
<p>Varias sectas protestantes sostienen la herejía de que la Eucaristía es un símbolo. Los bautistas, los pentecostales de las Asambleas de Dios, los adventistas y los Testigos de Jehová lo tienen escrito en sus credos, y responden lo mismo cuando alguien la menciona: <em>«Es solo un símbolo.»</em> ¿Es la Eucaristía un símbolo o es real? La respuesta está en San Juan 6. No hay texto más claro, más directo ni más desafiante en todo el Evangelio sobre este tema. Y Jesús no cede. Pero Juan 6 no es el único testigo: Pablo lo confirma de manera independiente, y los primeros discípulos de los apóstoles lo entendieron sin ambigüedad. Hay tres líneas de evidencia. Ninguna tiene respuesta en la interpretación simbólica.</p>
                <h2>Yo soy el pan de Vida<br>Juan 6:47-51</h2>
                <p>Jesús no dice «represento el pan de Vida» ni «soy como el pan de Vida». Dice:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 6:47-51</span>
                    <blockquote>«<strong class="s-hi">Les aseguro que el que cree, tiene Vida eterna. Yo soy el pan de Vida.</strong> Sus padres, en el desierto, comieron el maná y murieron. Pero este es el pan que desciende del cielo, para que aquel que lo coma no muera. <strong class="s-hi">Yo soy el pan vivo bajado del cielo.</strong> El que coma de este pan vivirá eternamente, y el pan que yo daré es <strong class="s-hi">mi carne</strong> para la Vida del mundo.»</blockquote>
                </div>
                <p>El verbo «soy» no indica representación: indica identidad. Y lo que viene después no deja lugar a interpretaciones simbólicas:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 6:53-55</span>
                    <blockquote>«Jesús les respondió: «Les aseguro que <strong class="s-hi">si no comen la carne del Hijo del hombre y no beben su sangre, no tendrán Vida en ustedes</strong>. El que come mi carne y bebe mi sangre tiene Vida eterna, y yo lo resucitaré en el último día. Porque <strong class="s-hi">mi carne es la verdadera comida y mi sangre, la verdadera bebida.</strong>»</blockquote>
                </div>
                <p>No dice «si no recuerdan» ni «si no contemplan». Dice <em>comer</em> y <em>beber</em>. Y lo repite con distintas palabras para que no haya confusión: <em>la verdadera comida</em> y <em>la verdadera bebida</em>. El adjetivo «verdadera» excluye expresamente lo simbólico.</p>
                <h2>La objeción de la metáfora<br>Juan 15:1</h2>
                <p>La respuesta habitual es: «Es una metáfora, como cuando dice "Yo soy la vid" o "Yo soy la puerta".» Cuando Jesús dijo esto, nadie se fue:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 15:1</span>
                    <blockquote>«<strong class="s-hi">Yo soy la verdadera vid</strong> y mi Padre es el viñador.»</blockquote>
                </div>
                <p>Cuando dijo «coman mi carne», muchos se fueron. La diferencia es decisiva:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 6:60</span>
                    <blockquote>«Después de oírlo, muchos de sus discípulos decían: <strong class="s-hi">«¡Es duro este lenguaje! ¿Quién puede escucharlo?».</strong>»</blockquote>
                </div>
                <p>Jesús no los corrige diciendo «malentendieron, era una metáfora». Los deja partir. Esa es la prueba más contundente: si fuera simbólico, el buen pastor los hubiera retenido con una aclaración. No lo hace. Y se quejan de algo preciso: no dicen que sea difícil de entender, dicen que es duro de escuchar. Habían entendido perfectamente.</p>
                <h2>Esto genera división<br>Juan 6:66-67</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 6:66-67</span>
                    <blockquote>«<strong class="s-hi">Desde ese momento, muchos de sus discípulos se alejaron de él y dejaron de acompañarlo.</strong> Jesús preguntó entonces a los Doce: <strong class="s-hi">«¿También ustedes quieren irse?».</strong>»</blockquote>
                </div>
                <p>No cede. No suaviza. No negocia el significado. Jesús es el buen pastor que no dejaría que ninguna oveja se perdiera por un malentendido, pero en esto es inflexible.</p>
                <h2>No hay interpretación posible<br>Juan 6:68</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 6:68</span>
                    <blockquote>Simón Pedro le respondió: <strong class="s-hi">«Señor, ¿a quién iremos? Tú tienes palabras de Vida eterna.»</strong></blockquote>
                </div>
                <p>Pedro no dice que entiende todo. Dice que confía. Eso es la fe: no tener todas las respuestas, sino saber en Quién se cree.</p>
                <h2>Pablo lo confirma: un testigo independiente<br>1 Corintios 10:16 y 11:27-29</h2>
                <p>Pablo escribe su primera carta a los Corintios antes de que se redacte el Evangelio de Juan. Son dos testigos completamente independientes. Pablo dice:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Corintios 10:16</span>
                    <blockquote>«<strong class="s-hi">La copa de bendición que bendecimos, ¿no es acaso comunión con la Sangre de Cristo? Y el pan que partimos, ¿no es comunión con el Cuerpo de Cristo?</strong>»</blockquote>
                </div>
                <p>No dice «recuerdo». Dice <em>comunión</em>: participación real, contacto efectivo. Y luego:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Corintios 11:27-29</span>
                    <blockquote>«<strong class="s-hi">Por eso, el que coma el pan o beba la copa del Señor indignamente tendrá que dar cuenta del Cuerpo y de la Sangre del Señor.</strong> Que cada uno se examine a sí mismo antes de comer este pan y beber esta copa; porque <strong class="s-hi">si come y bebe sin discernir el Cuerpo del Señor</strong>, come y bebe su propia condenación.»</blockquote>
                </div>
                <p>Lo decisivo es ante quién se responde. No se da cuenta del pan ni de la copa: se da cuenta <em>del Cuerpo y de la Sangre del Señor</em>. El griego que hay detrás es ἔνοχος, el término del que queda sujeto a juicio, el que tiene que responder ante un tribunal; nadie responde ante un tribunal por haber tratado mal un símbolo. Pablo dice además: «sin discernir el Cuerpo del Señor». Si fuera solo pan, ¿qué Cuerpo habría que discernir?</p>
                <h2>Los primeros cristianos: testigos formados por los apóstoles</h2>
                <p>Ignacio de Antioquía fue discípulo directo del apóstol Juan. Murió mártir alrededor del año 107 d.C. Escribió en su Carta a los Esmirniotas:</p>
                <blockquote>«<strong class="s-hi">Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo</strong>, la que padeció por nuestros pecados, la que el Padre resucitó por su bondad.» — Ignacio de Antioquía, Carta a los Esmirniotas 6-7 (~107 d.C.)</blockquote>
                <p>Justino Mártir escribió alrededor del año 150 d.C., a setenta años de la muerte de los apóstoles:</p>
                <blockquote>«<strong class="s-hi">No recibimos esto como pan común ni como bebida común</strong>... así también se nos ha enseñado que ese alimento eucaristizado es <strong class="s-hi">la carne y la sangre del Jesús encarnado.</strong>» — Justino Mártir, Primera Apología 66 (~150 d.C.)</blockquote>
                <p>Los primeros cristianos, formados por los apóstoles mismos, creyeron en la Presencia Real. La Eucaristía como puro símbolo llegó quince siglos después, con Zuinglio.</p>
                <h2>Conclusión</h2>
                <p>Jesús afirma la presencia real con la frase más directa posible: «mi carne es la verdadera comida». Ante la objeción de los que se escandalizan, no aclara ninguna metáfora: los deja irse. Pablo lo confirma desde afuera del relato joánico. Y los primeros discípulos de los apóstoles lo creyeron sin sombra de duda. Tres líneas de evidencia independientes. Ninguna tiene respuesta en la interpretación simbólica.</p>
                <p>Cómo esta realidad se hace presente en la Misa está en el tema <a href="tema-transubstanciacion.html">Transubstanciación</a>, desde 1 Corintios 10:16. Y por qué estas palabras se aceptan como verdad de Dios, en el tema <a href="tema-por-que-creemos.html">¿Por qué creemos?</a></p>`,
      nav: {
        prevTitle: "La primacía de Pedro",
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
            <p>La Alianza del Sinaí terminó en la cruz, y los apóstoles se reunían el domingo desde el día de la resurrección. Lo que dice la Escritura sobre la Ley antigua y la nueva, pasaje por pasaje.</p>
            <div class="article-meta">
                <span>25 min lectura</span>
                <span>Publicado en septiembre de 2026</span>
            </div>
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Texto base de Gabriel: la nueva alianza.docx (29-sep-2026). Las frases en rojo
son las que él marcó como «Resaltado». Los números de versículo van en
<sup class="vn">, que cotejo.py quita antes de comparar.
-->
<p>Varias sectas protestantes sostienen la herejía de que el cristiano sigue atado a la Ley de Moisés, o por lo menos a la parte de ella que cada una elige. La que lleva el error más lejos es la de los adventistas del séptimo día: guardan el sábado, se abstienen de los alimentos que la Ley declaraba impuros y acusan a la Iglesia de haber cambiado el día de Dios. Lo dicen así: <em>«El sábado es el día que Dios santificó para siempre. El domingo lo impuso Roma, y quien lo guarda obedece al papa y no a Dios.»</em> Los Testigos de Jehová toman de la misma Ley otra pieza: la prohibición de comer sangre, que convierten en la prohibición de las transfusiones.</p>
                <p>La respuesta está en la Escritura. Pablo la escribió para cristianos que estaban por hacer lo mismo que hacen hoy los adventistas: volver a la Ley después de haber recibido a Cristo. Es la carta a los Gálatas, y el pasaje se lee primero entero, con sus versículos, antes de recorrerlo por partes.</p>
                <h2>Dos mujeres, dos Alianzas<br>Gálatas 4:21 — 5:12</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Gálatas 4:21 — 5:12</span>
                    <blockquote>«<sup class="vn">21</sup>Ustedes que quieren someterse a la Ley, díganme: ¿No entienden lo que dice la Ley? <sup class="vn">22</sup>Porque está escrito que Abraham tuvo dos hijos: uno de su esclava y otro de su mujer, que era libre. <sup class="vn">23</sup>El hijo de la esclava nació según la carne; en cambio, el hijo de la mujer libre, nació en virtud de la promesa. <sup class="vn">24</sup><strong class="s-hi">Hay en todo esto un simbolismo: estas dos mujeres representan las dos Alianzas</strong>. <strong class="s-hi">La primera Alianza, la del monte Sinaí, que engendró un pueblo para la esclavitud</strong>, está representada por Agar, <sup class="vn">25</sup>porque el monte Sinaí está en Arabia, y corresponde a la Jerusalén actual, ya que ella con sus hijos viven en la esclavitud. <sup class="vn">26</sup><strong class="s-hi">Pero hay otra Jerusalén, la celestial, que es libre, y ella es nuestra madre</strong>. <sup class="vn">27</sup>Porque dice la Escritura: ¡Alégrate, tú que eres estéril y no das a luz; prorrumpe en gritos de alegría, tú que no conoces los dolores del parto! Porque serán más numerosos los hijos de la mujer abandonada que los hijos de la que tiene marido. <sup class="vn">28</sup>Nosotros, hermanos, <strong class="s-hi">somos como Isaac, hijos de la promesa</strong>. <sup class="vn">29</sup>Y así como entonces el hijo nacido según la carne perseguía al hijo nacido por obra del Espíritu, así también sucede ahora. <sup class="vn">30</sup>Pero dice la Escritura: Echa a la esclava y a su hijo, porque el hijo de la esclava no va a compartir la herencia con el hijo de la mujer libre. <sup class="vn">31</sup>Por lo tanto, hermanos, <strong class="s-hi">no somos hijos de una esclava, sino de la mujer libre</strong>. <sup class="vn">5:1</sup><strong class="s-hi">Esta es la libertad que nos ha dado Cristo. Manténganse firmes para no caer de nuevo bajo el yugo de la esclavitud</strong>. <sup class="vn">5:2</sup>Yo mismo, Pablo, les digo: si ustedes se hacen circuncidar, Cristo no les servirá de nada. <sup class="vn">5:3</sup><strong class="s-hi">Les vuelvo a insistir: todos los que se circuncidan, están obligados a observar íntegramente la Ley</strong>. <sup class="vn">5:4</sup>Si ustedes buscan la justicia por medio de la Ley, <strong class="s-hi">han roto con Cristo y quedan fuera del dominio de la gracia</strong>. <sup class="vn">5:5</sup>Porque a nosotros, el Espíritu, nos hace esperar por la fe los bienes de la justicia. <sup class="vn">5:6</sup>En efecto, en Cristo Jesús, ya no cuenta la circuncisión ni la incircuncisión, sino la fe que obra por medio del amor. <sup class="vn">5:7</sup>¡Ustedes andaban tan bien...! ¿Quién les impidió mantenerse fieles a la verdad? <sup class="vn">5:8</sup>¡No habrá sido a instancias de aquel que los llama! <sup class="vn">5:9</sup>Un poco de levadura hace fermentar toda la masa. <sup class="vn">5:10</sup>Yo espero en el Señor que ustedes no cambiarán de parecer. En cuanto a aquel que los está perturbando, <strong class="s-hi">será castigado, sea quien sea</strong>. <sup class="vn">5:11</sup>Hermanos, si yo predicara todavía la circuncisión, no me perseguirían. ¡Pero entonces, habría terminado el escándalo de la cruz! <sup class="vn">5:12</sup>En cuanto a los agitadores, <strong class="s-hi">ojalá que llegaran hasta la mutilación total</strong>.»</blockquote>
                </div>
                <h2>La esclava y la libre<br>Gálatas 4:24-26</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Gálatas 4:24-26</span>
                    <blockquote>«<sup class="vn">24</sup><strong class="s-hi">Hay en todo esto un simbolismo: estas dos mujeres representan las dos Alianzas</strong>. La primera Alianza, la del monte Sinaí, que <strong class="s-hi">engendró un pueblo para la esclavitud</strong>, está representada por Agar, <sup class="vn">25</sup>porque el monte Sinaí está en Arabia, y corresponde a la Jerusalén actual, ya que ella con sus hijos viven en la esclavitud. <sup class="vn">26</sup><strong class="s-hi">Pero hay otra Jerusalén, la celestial, que es libre, y ella es nuestra madre</strong>.»</blockquote>
                </div>
                <p>Pablo lo dice sin rodeos: la historia de Abraham es un símbolo, y las dos mujeres son las dos Alianzas. Agar, la esclava, es la Alianza del monte Sinaí. La otra es la Jerusalén de arriba, la celestial, que es libre, y esa es la madre de los cristianos.</p>
                <p>Antes eran esclavos de la Alianza vieja, la de las leyes rituales, que servía para enseñarle costumbres a un pueblo. Pero eso no alcanzaba por sí solo. Por eso aquel pacto se cerró cuando el hombre maduró en su relación con Dios, y surgió la Nueva Alianza, la de la ley moral, la de la Jerusalén de arriba, la del cielo, que hace libres.</p>
                <h2>Hijos de la libre<br>Gálatas 4:28-31</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Gálatas 4:28-31</span>
                    <blockquote>«<sup class="vn">28</sup><strong class="s-hi">Nosotros, hermanos, somos como Isaac, hijos de la promesa</strong>. <sup class="vn">29</sup>Y así como entonces el hijo nacido según la carne perseguía al hijo nacido por obra del Espíritu, así también sucede ahora. <sup class="vn">30</sup>Pero dice la Escritura: Echa a la esclava y a su hijo, porque el hijo de la esclava no va a compartir la herencia con el hijo de la mujer libre. <sup class="vn">31</sup>Por lo tanto, hermanos, <strong class="s-hi">no somos hijos de una esclava, sino de la mujer libre</strong>.»</blockquote>
                </div>
                <p>Ahí está: los cristianos no son hijos de la esclava sino de la libre. No están bajo la Alianza antigua sino bajo la nueva, que tiene otras leyes.</p>
                <h2>No volver al yugo<br>Gálatas 5:1-4</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Gálatas 5:1-4</span>
                    <blockquote>«<sup class="vn">1</sup><strong class="s-hi">Esta es la libertad que nos ha dado Cristo</strong>. <strong class="s-hi">Manténganse firmes para no caer de nuevo bajo el yugo de la esclavitud</strong>. <sup class="vn">2</sup>Yo mismo, Pablo, les digo: si ustedes se hacen circuncidar, Cristo no les servirá de nada. <sup class="vn">3</sup><strong class="s-hi">Les vuelvo a insistir: todos los que se circuncidan, están obligados a observar íntegramente la Ley</strong>. <sup class="vn">4</sup>Si ustedes buscan la justicia por medio de la Ley, <strong class="s-hi">han roto con Cristo y quedan fuera del dominio de la gracia</strong>.»</blockquote>
                </div>
                <p>¿Por qué no se vuelve atrás? Porque Cristo liberó, y por eso Pablo pide mantenerse firmes y no caer de nuevo bajo el yugo de la esclavitud. Es decir, no dejar que los adventistas y otras sectas vengan a mentir y a arrastrar a los cristianos otra vez hacia leyes del pacto viejo, que ya no rigen. Y ni siquiera son todas, porque no se circuncidan: toman solamente las que les convienen.</p>
                <p>¿Por qué no rigen? La Biblia también lo explica, y sigue: todos los que se circuncidan quedan obligados a observar íntegramente la Ley, la vieja, entera. Y los que buscan la justicia por medio de la Ley han roto con Cristo y quedan fuera de la gracia. Para eso vino Cristo: para sacar al hombre del pacto viejo y darle el nuevo.</p>
                <h2>Sea quien sea<br>Gálatas 5:10-12</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Gálatas 5:10-12</span>
                    <blockquote>«<sup class="vn">10</sup>Yo espero en el Señor que ustedes no cambiarán de parecer. En cuanto a aquel que los está perturbando, <strong class="s-hi">será castigado, sea quien sea</strong>. <sup class="vn">11</sup>Hermanos, si yo predicara todavía la circuncisión, no me perseguirían. ¡Pero entonces, habría terminado el escándalo de la cruz! <sup class="vn">12</sup>En cuanto a los agitadores, <strong class="s-hi">ojalá que llegaran hasta la mutilación total</strong>.»</blockquote>
                </div>
                <p>El que perturba a los que Cristo liberó será castigado, sea quien sea, y eso incluye a los adventistas y a las demás sectas heréticas y apóstatas. Sobre los agitadores, Pablo desea que llegaran hasta la mutilación total. Lo dice la Biblia, no este sitio. Más les convendría circuncidarse, apartarse del todo de la gracia de Cristo y atarse por completo a la Ley vieja, en vez de andar de revoltosos mintiéndole a la gente.</p>
                <h2>Otro día<br>Hebreos 4:8</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hebreos 4:8</span>
                    <blockquote>«Porque si Josué hubiera introducido a los israelitas en ese Reposo, <strong class="s-hi">Dios no habría hablado después acerca de otro día</strong>.»</blockquote>
                </div>
                <p>Otro día, posterior, no el mismo. No hay interpretación posible para la palabra otro: otro quiere decir que no es el mismo.</p>
                <p>Los adventistas responden con el versículo siguiente, que en la traducción del Vaticano dice así:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hebreos 4:9-11</span>
                    <blockquote>«<sup class="vn">9</sup>Queda, por lo tanto, reservado un Reposo, el del séptimo día, para el Pueblo de Dios. <sup class="vn">10</sup>Y <strong class="s-hi">aquel que entra en el Reposo de Dios descansa de sus trabajos</strong>, como Dios descansó de los suyos. <sup class="vn">11</sup><strong class="s-hi">Esforcémonos, entonces, por entrar en ese Reposo</strong>, a fin de que nadie caiga imitando aquel ejemplo de desobediencia.»</blockquote>
                </div>
                <p>Los versículos 10 y 11 dicen de qué reposo se trata. Es el Reposo de Dios, con mayúscula, en el que se entra para descansar de los propios trabajos como Dios descansó de los suyos, y el autor exhorta a esforzarse por entrar en él. Nadie se esfuerza por entrar en un sábado: llega solo, cada siete días. El reposo del que habla Hebreos es la vida eterna, que el sábado anunciaba como figura.</p>
                <h2>El primer día de la semana<br>Juan 20:1</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 20:1</span>
                    <blockquote>«<strong class="s-hi">El primer día de la semana</strong>, de madrugada, cuando todavía estaba oscuro, María Magdalena fue al sepulcro y vio que la piedra había sido sacada.»</blockquote>
                </div>
                <p>El primer día de la semana, el que sigue al sábado, es el domingo: el Domingo de Resurrección.</p>
                <h2>Aquel mismo domingo<br>Juan 20:19</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 20:19</span>
                    <blockquote>«<strong class="s-hi">Al atardecer de ese mismo día, el primero de la semana</strong>, estando cerradas las puertas del lugar donde se encontraban los discípulos, por temor a los judíos, llegó Jesús y poniéndose en medio de ellos, les dijo: <strong class="s-hi">¡La paz esté con ustedes!</strong>.»</blockquote>
                </div>
                <p>Aquel mismo domingo, y no en sábado, los discípulos estaban reunidos a puertas cerradas por miedo a los judíos. Jesús se presenta en medio de ellos y les dice «¡La paz esté con ustedes!». No los reta: los aprueba. Si estuvieran haciendo algo mal, se lo diría.</p>
                <h2>Ocho días después, otra vez domingo<br>Juan 20:26</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 20:26</span>
                    <blockquote>«<strong class="s-hi">Ocho días más tarde, estaban de nuevo los discípulos reunidos</strong> en la casa, y estaba con ellos Tomás. Entonces apareció Jesús, estando cerradas las puertas, se puso en medio de ellos y les dijo: <strong class="s-hi">¡La paz esté con ustedes!</strong>.»</blockquote>
                </div>
                <p>Ocho días más tarde, contando desde aquel día, es el domingo siguiente. Los discípulos están otra vez reunidos, y Jesús vuelve a aprobarlos con el mismo saludo: «¡La paz esté con ustedes!».</p>
                <h2>El domingo, para partir el pan<br>Hechos 20:7</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hechos 20:7</span>
                    <blockquote>«<strong class="s-hi">El primer día de la semana, cuando nos reunimos para partir el pan</strong>, Pablo, que debía salir al día siguiente, dirigió la palabra a la asamblea y su discurso se prolongó hasta la medianoche.»</blockquote>
                </div>
                <p>Es una reunión para el culto, la fracción del pan (véase el tema <a href="tema-la-eucaristia.html">La Eucaristía</a>), el primer día de la semana, ya desde los primeros cristianos. Ocurrió hacia el año 57, más de dos siglos y medio antes de la ley de Constantino sobre el domingo, que es del año 321. No hay argumento para decir que todos estaban equivocados. Si lo estaban, Pablo se equivocaba con ellos.</p>
                <h2>Un día fijo para la colecta<br>1 Corintios 16:2</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Corintios 16:2</span>
                    <blockquote>«<strong class="s-hi">El primer día de la semana</strong>, cada uno de ustedes guarde en su casa lo que haya podido ahorrar, para que las donaciones no se recojan solamente a mi llegada.»</blockquote>
                </div>
                <p>El primer día de la semana: el domingo, otra vez.</p>
                <h2>El Día del Señor<br>Apocalipsis 1:10</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Apocalipsis 1:10</span>
                    <blockquote>«<strong class="s-hi">El Día del Señor</strong> fui arrebatado por el Espíritu y oí detrás de mí una voz fuerte como una trompeta, que decía:.»</blockquote>
                </div>
                <p>El Día del Señor. Con ese término lo traducen la Biblia de Jerusalén y hasta la Reina-Valera de los protestantes, y la Biblia Latinoamericana, católica, pone directamente «un domingo». De ahí viene la palabra: en latín, <em>dies dominica</em>, el día del Señor.</p>
                <h2>Dueño del sábado<br>Marcos 2:23-28</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Marcos 2:23-28</span>
                    <blockquote>«<sup class="vn">23</sup>Un sábado en que Jesús atravesaba unos sembrados, sus discípulos comenzaron a arrancar espigas al pasar. <sup class="vn">24</sup>Entonces los fariseos le dijeron: ¡Mira! ¿Por qué hacen en sábado lo que no está permitido? <sup class="vn">25</sup>Él les respondió: ¿Ustedes no han leído nunca lo que hizo David, cuando él y sus compañeros se vieron obligados por el hambre, <sup class="vn">26</sup>cómo entró en la Casa de Dios, en el tiempo del Sumo Sacerdote Abiatar, y comió y dio a sus compañeros los panes de la ofrenda, que sólo pueden comer los sacerdotes? <sup class="vn">27</sup>Y agregó: <strong class="s-hi">El sábado ha sido hecho para el hombre, y no el hombre para el sábado</strong>. <sup class="vn">28</sup>De manera que <strong class="s-hi">el Hijo del hombre es dueño también del sábado</strong>.»</blockquote>
                </div>
                <p>El sábado fue hecho para el hombre, y no el hombre para el sábado, y el Hijo del hombre es dueño también del sábado. Jesús hace con el sábado lo que quiere, incluso cambiarlo.</p>
                <h2>Lo querían matar por el sábado<br>Juan 5:18</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 5:18</span>
                    <blockquote>«Pero para los judíos esta era una razón más para matarlo, porque no sólo <strong class="s-hi">violaba el sábado</strong>, sino que se hacía igual a Dios, llamándolo su propio Padre.»</blockquote>
                </div>
                <p>Juan lo dice con todas las letras: Cristo violaba el sábado, y por eso lo querían matar.</p>
                <h2>Todo se ha cumplido<br>Juan 19:30</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 19:30</span>
                    <blockquote>«Después de beber el vinagre, dijo Jesús: <strong class="s-hi">Todo se ha cumplido</strong>. E inclinando la cabeza, entregó su espíritu.»</blockquote>
                </div>
                <p>Es el fin de la antigua Alianza. Cristo la cumplió, descansó el sábado en el sepulcro y resucitó el domingo.</p>
                <p>Contra esto, los adventistas citan el Sermón de la Montaña:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 5:17-18</span>
                    <blockquote>«<sup class="vn">17</sup>No piensen que vine para abolir la Ley o los Profetas: <strong class="s-hi">yo no he venido a abolir, sino a dar cumplimiento</strong>. <sup class="vn">18</sup>Les aseguro que no desaparecerá ni una i ni una coma de la Ley, antes que desaparezcan el cielo y la tierra, <strong class="s-hi">hasta que todo se realice</strong>.»</blockquote>
                </div>
                <p>El texto pone un plazo. Cristo no vino a abolir la Ley sino a darle cumplimiento, y la Ley rige hasta que todo se realice. En la cruz dijo que todo se había cumplido. Lo que se cumple no se deroga: llega a su fin porque alcanzó aquello para lo que existía.</p>
                <h2>Muertos a la Ley<br>Romanos 7:1-6</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Romanos 7:1-6</span>
                    <blockquote>«<sup class="vn">1</sup>¿Acaso ustedes ignoran, hermanos –<strong class="s-hi">hablo a gente que entiende de leyes</strong>– que el hombre está sujeto a la ley únicamente mientras vive? <sup class="vn">2</sup>Así, una mujer casada permanece ligada por la ley a su esposo mientras él viva; pero al morir el esposo, queda desligada de la ley que la unía a él. <sup class="vn">3</sup>Por lo tanto, será tenida por adúltera si en vida de su marido se une a otro hombre. En cambio, si su esposo muere, quedará desligada de la ley, y no será considerada adúltera si se casa con otro hombre. <sup class="vn">4</sup>De igual manera, hermanos, <strong class="s-hi">por la unión con el cuerpo de Cristo, ustedes han muerto a la Ley, para pertenecer a otro</strong>, a aquel que resucitó a fin de que podamos dar frutos para Dios. <sup class="vn">5</sup>Porque mientras vivíamos según la naturaleza carnal, <strong class="s-hi">las malas pasiones, estimuladas por la Ley, obraban en nuestros miembros para hacernos producir frutos de muerte</strong>. <sup class="vn">6</sup>Pero ahora, <strong class="s-hi">muertos a todo aquello que nos tenía esclavizados, hemos sido liberados de la Ley</strong>, de manera que podamos servir a Dios <strong class="s-hi">con un espíritu nuevo y no según una letra envejecida</strong>.»</blockquote>
                </div>
                <p>Pablo habla a gente que entiende de leyes y usa la analogía del matrimonio. La mujer queda ligada a su marido mientras él vive; cuando él muere, queda libre y puede casarse con otro sin ser adúltera. Con la Ley pasa lo mismo: por la muerte de Cristo, los cristianos murieron a la Ley y pasaron a pertenecer a otro, al que resucitó. La Ley que los tenía esclavizados ya no los ata, y sirven a Dios con un espíritu nuevo, no según una letra envejecida.</p>
                <p>Muerta la Ley, ahora rige la Nueva Alianza.</p>
                <h2>No en tablas de piedra<br>2 Corintios 3:3-16</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Corintios 3:3-16</span>
                    <blockquote>«<sup class="vn">3</sup>Evidentemente ustedes son una carta que Cristo escribió por intermedio nuestro, no con tinta, sino con el Espíritu del Dios viviente, <strong class="s-hi">no en tablas de piedra, sino de carne, es decir, en los corazones</strong>. <sup class="vn">4</sup>Es Cristo el que nos da esta seguridad delante de Dios, <sup class="vn">5</sup>no porque podamos atribuirnos algo que venga de nosotros mismos, ya que toda nuestra capacidad viene de Dios. <sup class="vn">6</sup>Él nos ha capacitado para que seamos los ministros de una Nueva Alianza, que no reside en la letra, sino en el Espíritu; porque <strong class="s-hi">la letra mata, pero el Espíritu da vida</strong>. <sup class="vn">7</sup>Ahora bien, si el ministerio que lleva a la muerte –grabado sobre piedras– fue inaugurado con tanta gloria que los israelitas no podían fijar sus ojos en el rostro de Moisés, por <strong class="s-hi">el resplandor –aunque pasajero–</strong> de ese rostro, <sup class="vn">8</sup>¡cuánto más glorioso será el ministerio del Espíritu! <sup class="vn">9</sup>Y si el ministerio que llevaba a la condenación fue tan glorioso, ¡cuál no será la gloria del ministerio que conduce a la justicia! <sup class="vn">10</sup>En realidad, <strong class="s-hi">aquello que fue glorioso bajo cierto aspecto ya no lo es más</strong> en comparación con esta gloria extraordinaria. <sup class="vn">11</sup>Porque si lo que era transitorio se ha manifestado con tanta gloria, ¡cuánto más glorioso será lo que es permanente! <sup class="vn">12</sup>Animados con esta esperanza, nos comportamos con absoluta franqueza, <sup class="vn">13</sup>y no como Moisés, que <strong class="s-hi">se cubría el rostro con un velo para impedir que los israelitas vieran el fin de un esplendor pasajero</strong>. <sup class="vn">14</sup>Pero <strong class="s-hi">se les oscureció el entendimiento, y ese mismo velo permanece hasta el día de hoy</strong> en la lectura del Antiguo Testamento, porque es Cristo el que lo hace desaparecer. <sup class="vn">15</sup>Sí, <strong class="s-hi">hasta el día de hoy aquel velo les cubre la inteligencia siempre que leen a Moisés</strong>. <sup class="vn">16</sup>Pero <strong class="s-hi">al que se convierte al Señor, se le cae el velo</strong>.»</blockquote>
                </div>
                <p>No en tablas de piedra sino en el corazón. La letra mata y el Espíritu da vida. El resplandor era pasajero, y lo que fue glorioso ya no lo es. Esto es palabra de Dios. No lo dijo un papa ni un obispo, no lo inventó nadie, ni salió de ningún pastor que un día se levantó e interpretó algo.</p>
                <p>Moisés se cubría el rostro con un velo para que los israelitas no vieran el fin de lo que era pasajero, y se les oscureció el entendimiento hasta el día de hoy, como a los adventistas y a otras sectas. Hasta el día de hoy, siempre que leen a Moisés, el velo les cubre la inteligencia, y solo se les cae cuando se convierten al Señor, es decir, cuando se hacen católicos.</p>
                <p>Lo importante, entonces, no son las tablas de piedra sino el corazón: la ley moral, no la ceremonial. Los mandamientos morales no desaparecen, porque Cristo los retoma, como se ve en Mateo 5. Lo que pasó fue la ley ceremonial, y con ella el precepto del sábado, que para los cristianos quedó reemplazado por el domingo (Catecismo de la Iglesia Católica, 2175).</p>
                <h2>Que nadie los critique<br>Colosenses 2:16-17</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Colosenses 2:16-17</span>
                    <blockquote>«<sup class="vn">16</sup>Por eso, <strong class="s-hi">que nadie los critique por cuestiones de alimento y de bebida, o de días festivos, de novilunios y de sábados</strong>. <sup class="vn">17</sup>Todas esas cosas no son más que la sombra de una realidad futura, que es el Cuerpo de Cristo.»</blockquote>
                </div>
                <p>Que nadie critique a los católicos que santifican el domingo. Es lo que hacen los protestantes, en este caso los adventistas: criticar sin conocer la Escritura.</p>
                <h2>La sangre del altar<br>Levítico 17:10-11</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Levítico 17:10-11</span>
                    <blockquote>«<sup class="vn">10</sup>Si un hombre de la casa de Israel o alguno de los extranjeros que residen en medio de ustedes, <strong class="s-hi">come cualquier clase de sangre</strong>, yo volveré mi rostro contra esa persona y la excluiré de su pueblo. <sup class="vn">11</sup>Porque la vida de la carne está en la sangre, y <strong class="s-hi">yo mismo les he puesto la sangre sobre el altar, para que les sirva de expiación</strong>, ya que la sangre es la que realiza la expiación, en virtud de la vida que hay en ella.»</blockquote>
                </div>
                <p>Los Testigos de Jehová no aceptan transfusiones de sangre porque dicen que la Biblia prohíbe consumir sangre. Lo sacan de los sacrificios del Levítico y lo interpretan para donde quieren, hasta el punto de dejar morir a sus propios hijos en un quirófano.</p>
                <p>El versículo 11 dice por qué estaba prohibida: la sangre se reservaba para el altar, para la expiación. Ese altar y esa expiación terminaron en la cruz, donde la sangre de Cristo expió de una vez. Y una transfusión no se come ni se ofrece en ningún altar: se da para salvar una vida, que es lo que la sangre significaba en el mismo versículo.</p>
                <h2>«Hay que imitar a Cristo»<br>Lucas 2:21</h2>
                <p>Contra todo esto, estas sectas tienen algunos argumentos. El primero: <em>«Jesús guardaba el sábado, y el cristiano tiene que imitar a Cristo.»</em></p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Lucas 2:21</span>
                    <blockquote>«Ocho días después, <strong class="s-hi">llegó el tiempo de circuncidar al niño</strong> y se le puso el nombre de Jesús, nombre que le había sido dado por el Ángel antes de su concepción.»</blockquote>
                </div>
                <p>Si hay que imitarlo, Lucas cuenta que a los ocho días lo circuncidaron. ¿Por qué no se circuncidan? Porque imitan lo que les conviene. La circuncisión, igual que el sábado, es del antiguo pacto.</p>
                <h2>«Si me aman, guarden mis mandamientos»<br>Juan 14:15-26</h2>
                <p>El segundo lo toman de Juan 14: <em>«Si me aman, guarden mis mandamientos. Y los mandamientos son los diez, con el sábado incluido.»</em> El pasaje dice otra cosa:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 14:15-26</span>
                    <blockquote>«<sup class="vn">15</sup><strong class="s-hi">Si ustedes me aman, cumplirán mis mandamientos</strong>. <sup class="vn">16</sup>Y yo rogaré al Padre, y él les dará otro Paráclito para que esté siempre con ustedes: <sup class="vn">17</sup>el Espíritu de la Verdad, a quien el mundo no puede recibir, porque no lo ve ni lo conoce. Ustedes, en cambio, lo conocen, porque él permanece con ustedes y estará en ustedes. <sup class="vn">18</sup>No los dejaré huérfanos, volveré a ustedes. <sup class="vn">19</sup>Dentro de poco el mundo ya no me verá, pero ustedes sí me verán, porque yo vivo y también ustedes vivirán. <sup class="vn">20</sup>Aquel día comprenderán que yo estoy en mi Padre, y que ustedes están en mí y yo en ustedes. <sup class="vn">21</sup><strong class="s-hi">El que recibe mis mandamientos y los cumple, ese es el que me ama</strong>; y el que me ama será amado por mi Padre, y yo lo amaré y me manifestaré a él. <sup class="vn">22</sup>Judas –no el Iscariote– le dijo: Señor, ¿por qué te vas a manifestar a nosotros y no al mundo? <sup class="vn">23</sup>Jesús le respondió: <strong class="s-hi">El que me ama será fiel a mi palabra</strong>, y mi Padre lo amará; iremos a él y habitaremos en él. <sup class="vn">24</sup>El que no me ama no es fiel a mis palabras. La palabra que ustedes oyeron no es mía, sino del Padre que me envió. <sup class="vn">25</sup>Yo les digo estas cosas mientras permanezco con ustedes. <sup class="vn">26</sup>Pero el Paráclito, el Espíritu Santo, que el Padre enviará en mi Nombre, <strong class="s-hi">les enseñará todo y les recordará lo que les he dicho</strong>.»</blockquote>
                </div>
                <p>Cristo no dice «los mandamientos de Moisés»: dice mis mandamientos. No los viejos, los suyos propios. Vuelve sobre ellos en los versículos 21 y 23, y en el 26 promete el Espíritu Santo, que les enseñará todo y les recordará lo que él les dijo.</p>
                <h2>El mandamiento nuevo<br>Juan 13:34-35</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 13:34-35</span>
                    <blockquote>«<sup class="vn">34</sup><strong class="s-hi">Les doy un mandamiento nuevo</strong>: ámense los unos a los otros. Así como yo los he amado, ámense también ustedes los unos a los otros. <sup class="vn">35</sup><strong class="s-hi">En esto todos reconocerán que ustedes son mis discípulos</strong>: en el amor que se tengan los unos a los otros.»</blockquote>
                </div>
                <p>Los verdaderos cristianos, y no los herejes apóstatas, se reconocen por seguir los mandamientos de Cristo.</p>
                <h2>Hasta el fin del mundo<br>Mateo 28:19-20</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 28:19-20</span>
                    <blockquote>«<sup class="vn">19</sup>Vayan, y hagan que todos los pueblos sean mis discípulos, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo, <sup class="vn">20</sup>y <strong class="s-hi">enseñándoles a cumplir todo lo que yo les he mandado</strong>. Y yo estaré siempre con ustedes <strong class="s-hi">hasta el fin del mundo</strong>.»</blockquote>
                </div>
                <p>Lo manda Jesús hasta el fin del mundo. No una vez, ni dos, ni solamente al principio. Hasta el fin.</p>
                <p>Y aquí se cae otra doctrina protestante, la de que basta con creer y las obras no cuentan. Si se cree en la palabra de Cristo, y no solamente en él, y se hace lo que dice, la cosa cambia. Hay obras, y la fe se pone en práctica.</p>
                <h2>La señal de que lo conocemos<br>1 Juan 2:3</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Juan 2:3</span>
                    <blockquote>«La señal de que lo conocemos, <strong class="s-hi">es que cumplimos sus mandamientos</strong>.»</blockquote>
                </div>
                <p>Los mandamientos de Jesús. Lo que Cristo da se recibe al cumplir su palabra, como en Caná, donde solo los sirvientes que hicieron lo que él mandó supieron lo que había ocurrido (véase el tema <a href="tema-transubstanciacion.html">Transubstanciación</a>).</p>
                <h2>«Pero yo les digo»<br>Mateo 5:20-28</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 5:20-28</span>
                    <blockquote>«<sup class="vn">20</sup>Les aseguro que si la justicia de ustedes no es superior a la de los escribas y fariseos, no entrarán en el Reino de los Cielos. <sup class="vn">21</sup>Ustedes han oído que se dijo a los antepasados: <strong class="s-hi">No matarás</strong>, y el que mata, debe ser llevado ante el tribunal. <sup class="vn">22</sup><strong class="s-hi">Pero yo les digo</strong> que todo aquel que se irrita contra su hermano, merece ser condenado por un tribunal. Y todo aquel que lo insulta, merece ser castigado por el Sanedrín. Y el que lo maldice, merece la Gehena de fuego. <sup class="vn">23</sup>Por lo tanto, si al presentar tu ofrenda en el altar, te acuerdas de que tu hermano tiene alguna queja contra ti, <sup class="vn">24</sup>deja tu ofrenda ante el altar, ve a reconciliarte con tu hermano, y sólo entonces vuelve a presentar tu ofrenda. <sup class="vn">25</sup>Trata de llegar en seguida a un acuerdo con tu adversario, mientras vas caminando con él, no sea que el adversario te entregue al juez, y el juez al guardia, y te pongan preso. <sup class="vn">26</sup>Te aseguro que no saldrás de allí hasta que hayas pagado el último centavo. <sup class="vn">27</sup>Ustedes han oído que se dijo: <strong class="s-hi">No cometerás adulterio</strong>. <sup class="vn">28</sup><strong class="s-hi">Pero yo les digo</strong>: El que mira a una mujer deseándola, ya cometió adulterio con ella en su corazón.»</blockquote>
                </div>
                <p>En resumen, Jesús retoma los mandamientos antiguos, y por eso se enseñan en el catecismo. A algunos los deja como estaban y a otros los modifica, como el del adulterio, que lo amplía al pensamiento. Del sábado no dice nada.</p>
                <h2>«¿Por qué no hacen lo que les digo?»<br>Lucas 6:46</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Lucas 6:46</span>
                    <blockquote>«¿Por qué ustedes me llaman: Señor, Señor, <strong class="s-hi">y no hacen lo que les digo</strong>?»</blockquote>
                </div>
                <p>Si tanto quieren hacer lo que está mandado, ¿por qué no cumplen lo que Cristo manda? Porque no lo creen. Si lo creyeran, no lo discutirían.</p>
                <h2>Lo que Dios no soporta<br>Isaías 1:13</h2>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Isaías 1:13</span>
                    <blockquote>«No me sigan trayendo vanas ofrendas; el incienso es para mí una abominación. <strong class="s-hi">Luna nueva, sábado, convocación a la asamblea</strong>... <strong class="s-hi">¡no puedo aguantar la falsedad y la fiesta!</strong>.»</blockquote>
                </div>
                <p>Lo dice el Señor por boca de Isaías: la luna nueva, el sábado y la convocación a la asamblea le resultan insoportables.</p>
                <ul>
                    <li>Las dos mujeres de Abraham son las dos Alianzas: la del Sinaí engendra esclavos, y la Jerusalén celestial es libre y es la madre de los cristianos.</li>
                    <li>El que se circuncida queda obligado a la Ley entera, y el que busca la justicia por la Ley rompe con Cristo.</li>
                    <li>Cristo resucitó el domingo, se presentó dos domingos seguidos ante los discípulos reunidos y los aprobó.</li>
                    <li>Los apóstoles partían el pan el primer día de la semana, siglos antes de Constantino, y el Apocalipsis lo llama el Día del Señor.</li>
                    <li>Cristo es dueño del sábado, y en la cruz dijo que todo se había cumplido.</li>
                    <li>La Ley grabada en piedra era pasajera; la Nueva Alianza está escrita en el corazón.</li>
                    <li>La sangre del Levítico estaba reservada al altar de la expiación, y ese altar terminó en la cruz.</li>
                    <li>Los mandamientos del cristiano son los de Cristo, que retoma los antiguos y no dice nada del sábado.</li>
                </ul>
                <h2>Conclusión</h2>
                <p>La Alianza del Sinaí terminó cuando Cristo la cumplió en la cruz. Los cristianos no son hijos de la esclava sino de la libre, y el que se pone otra vez bajo la Ley rompe con Cristo. Los apóstoles se reunieron el domingo desde el día de la resurrección, partieron el pan el primer día de la semana y lo llamaron el Día del Señor. La Iglesia no cambió el día. Lo recibió de ellos.</p>
                <p>Por eso la palabra de Pablo a los colosenses sigue valiendo para cada católico que santifica el domingo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Colosenses 2:16</span>
                    <blockquote>«Por eso, <strong class="s-hi">que nadie los critique</strong> por cuestiones de alimento y de bebida, o de días festivos, de novilunios y de sábados.»</blockquote>
                </div>`,
      nav: {
        prevTitle: "El purgatorio y la misericordia de Dios",
        nextTitle: "La Santísima Trinidad"
      }
    },
    "la-primacia-de-pedro": {
      pageTitle: "La primacía de Pedro | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>La primacía de Pedro</h1>
            <p>Cristo edificó su Iglesia sobre Pedro, le dio las llaves del Reino y le encargó confirmar a sus hermanos. Lo que dice la Escritura, pasaje por pasaje.</p>
            <div class="article-meta">
                <span>14 min lectura</span>
                <span>Publicado en septiembre de 2026</span>
            </div>
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Cotejadas el 28-sep-2026: las once, del Vaticano.
-->
<p>Contra el papado la objeción tiene dos formas. La primera la repiten los protestantes de casi todas las denominaciones, adventistas y Testigos de Jehová incluidos: <em>«La roca es Cristo, no Pedro. Pedro es apenas una piedrita; la roca es la fe que confesó.»</em> La segunda es propia del mundo evangélico: <em>«La verdadera Iglesia es invisible: no tiene jerarquía, ni obispos, ni papa. Eso lo inventó Roma.»</em></p>
                <p>Las dos se responden con la Escritura. Primero, sobre qué está edificada la Iglesia y quién tiene las llaves. Después, si esa Iglesia tiene gobierno y si existía antes de que alguien la organizara. Y por último, a quién le encargó Cristo sostener a los demás.</p>
                <h2>Cristo es la piedra angular, y hay cimientos<br>Efesios 2:20-22</h2>
                <p>Antes de discutir si Pedro es piedra hay que ver cómo usa Pablo esa imagen.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Efesios 2:20-22</span>
                    <blockquote>«Ustedes están edificados sobre los apóstoles y los profetas, que son los cimientos, mientras que <strong>la piedra angular es el mismo Jesucristo</strong>. En él, <strong>todo el edificio</strong>, bien trabado, <strong>va creciendo</strong> para constituir un templo santo en el Señor. En él, también ustedes son incorporados al edificio, para llegar a ser una morada de Dios en el Espíritu.»</blockquote>
                </div>
                <p>Pablo no pone a Cristo y a los apóstoles en competencia: los pone en el mismo edificio. Cristo es la piedra angular, la que sostiene y alinea todo lo demás; los apóstoles y los profetas son los cimientos, y lo son en él. Que los apóstoles sean fundamento no le quita nada a Cristo. Y el edificio no está terminado: va creciendo, con piedras que se agregan sobre las primeras. La objeción obliga a elegir entre Cristo y los apóstoles. Pablo no elige.</p>
                <h2>«Tú eres Pedro»: las llaves del Reino<br>Mateo 16:16-19</h2>
                <p>El pasaje central es la respuesta de Jesús a la confesión de Pedro.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 16:16-19</span>
                    <blockquote>«Tomando la palabra, Simón Pedro respondió: «Tú eres el Mesías, el Hijo de Dios vivo». Y Jesús le dijo: «Feliz de ti, Simón, hijo de Jonás, porque esto no te lo ha revelado ni la carne ni la sangre, sino mi Padre que está en el cielo. Y yo te digo: <strong class="s-hi">Tú eres Pedro, y sobre esta piedra edificaré mi iglesia</strong><strong>, y el poder de la Muerte no prevalecerá contra ella</strong>. <strong class="s-hi">Yo te daré</strong> <strong>las llaves del Reino de los Cielos. Todo lo que ates en la tierra, quedará atado en el cielo, y todo lo que desates en la tierra, quedará desatado en el cielo</strong>».»</blockquote>
                </div>
                <p>Jesús hablaba arameo, y en arameo la palabra es una sola: <em>kefa</em>, piedra. El Evangelio de Juan conserva el nombre original en el primer encuentro:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 1:42</span>
                    <blockquote>«Entonces lo llevó a donde estaba Jesús. Jesús lo miró y le dijo: «Tú eres Simón, el hijo de Juan: <strong class="s-hi">tú te llamarás Cefas</strong>», que traducido significa Pedro.»</blockquote>
                </div>
                <p>Pablo lo sigue llamando Cefas en sus cartas. Al pasar al griego, <em>petra</em> es una palabra femenina y no sirve como nombre de varón, así que se le dio la terminación masculina: <em>Petros</em>. La diferencia entre piedrita y roca no está en lo que Jesús dijo. Está en la gramática del traductor.</p>
                <p>Después, las llaves. Mateo escribe para judíos, y un judío sabía qué significaba recibir las llaves de un rey. Isaías lo cuenta: Dios anuncia que va a quitar de su cargo a Sebná, el mayordomo de palacio, y que pondrá en su lugar a Eliaquím:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Isaías 22:22</span>
                    <blockquote>«<strong class="s-hi">pondré sobre sus hombros la llave de la casa de David</strong>: lo que él abra, nadie lo cerrará; lo que él cierre, nadie lo abrirá.»</blockquote>
                </div>
                <p>La llave era la autoridad del rey puesta en manos de un administrador, que abría y cerraba en su nombre. Jesús toma esa imagen y se la entrega a Pedro, con el mismo par de verbos (atar y desatar, abrir y cerrar) y con una garantía que Eliaquím no tenía: lo que Pedro ate en la tierra queda atado en el cielo.</p>
                <p>Y todo está dicho en singular. Atar y desatar lo recibirán más adelante todos los apóstoles (Mt 18:18). Las llaves, solamente Pedro.</p>
                <h2>Piedras vivas: nadie le quita el lugar a Cristo<br>1 Pedro 2:3-8</h2>
                <p>El que mejor responde a la objeción de la roca es el propio Pedro.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Pedro 2:3-8</span>
                    <blockquote>«…ya que han gustado qué bueno es <strong>el Señor</strong>. Al acercarse <strong>a él, la piedra viva</strong>, rechazada por los hombres pero elegida y preciosa a los ojos de Dios, <strong>también ustedes</strong>, a manera de <strong>piedras vivas</strong>, son edificados como una casa espiritual, para ejercer un sacerdocio santo y ofrecer sacrificios espirituales, agradables a Dios por Jesucristo. Porque dice la Escritura: «Yo pongo en Sión una piedra angular, elegida y preciosa: el que deposita su confianza en ella, no será confundido». Por lo tanto, a ustedes, los que creen, les corresponde el honor. En cambio, para los incrédulos, la piedra que los constructores rechazaron ha llegado a ser la piedra angular: piedra de tropiezo y roca de escándalo. <strong class="s-hi">Ellos tropiezan porque no creen en la Palabra: esa es la suerte que les está reservada</strong>.»</blockquote>
                </div>
                <p>El hombre al que Cristo llamó piedra no se atribuye el lugar de Cristo. Llama a Cristo «la piedra viva», la piedra angular elegida por Dios, y a todos los creyentes «piedras vivas» edificadas sobre ella. La Escritura usa la imagen de la piedra para Cristo, para los apóstoles y para los fieles, cada uno en su sitio, y en ninguna página del Nuevo Testamento eso aparece como una rivalidad. Pedro no le disputa a Cristo el puesto: lo señala.</p>
                <p>Y cierra con una advertencia que no suaviza. El tropiezo no está en la piedra sino en no creer en la Palabra, y esa es la suerte reservada a quien no cree. La Palabra, en Mateo 16, dice lo que dice.</p>
                <h2>La casa de Dios es la Iglesia<br>1 Timoteo 3:15</h2>
                <p>Pablo le escribe a Timoteo cómo hay que comportarse, y dice dónde:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Timoteo 3:15</span>
                    <blockquote>«…Así sabrás cómo comportarte en <strong>la casa de Dios</strong>, es decir, en <strong>la Iglesia</strong> del Dios viviente, <strong>columna y fundamento de la verdad</strong>.»</blockquote>
                </div>
                <p>Pablo no dice que la Escritura sea la columna y el fundamento de la verdad. Dice que lo es la Iglesia, y la llama casa del Dios viviente. No hay más que agregar, salvo una cosa: una casa tiene dueño, tiene puertas y tiene a alguien que guarda las llaves.</p>
                <h2>Una casa con quien la gobierne<br>1 Timoteo 3:1-5 y 3:8</h2>
                <p>Unas líneas antes, Pablo describe quién gobierna esa casa.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Timoteo 3:1-5</span>
                    <blockquote>«Es muy cierta esta afirmación: El que aspira a <strong>presidir la comunidad</strong>, desea ejercer una noble función. Por eso, <strong>el que preside</strong> debe ser un hombre irreprochable, que se haya casado una sola vez, sobrio, equilibrado, ordenado, hospitalario y apto para la enseñanza. Que no sea afecto a la bebida ni pendenciero, sino indulgente, enemigo de las querellas y desinteresado. <strong>Que sepa gobernar</strong> su propia casa y mantener a sus hijos en la obediencia con toda dignidad. Porque si no sabe gobernar su propia casa, ¿cómo podrá cuidar la Iglesia de Dios?»</blockquote>
                </div>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Timoteo 3:8</span>
                    <blockquote>«De la misma manera, <strong>los diáconos</strong> deben ser hombres respetables, de una sola palabra, moderados en el uso del vino y enemigos de ganancias deshonestas.»</blockquote>
                </div>
                <p>Lo que la traducción vierte como «presidir» y «el que preside» es, en griego, <em>episkopé</em> y <em>epískopos</em>: de ahí viene, letra por letra, la palabra obispo. Y <em>diákonos</em> es diácono. La Iglesia de Cristo tiene obispos y diáconos, es decir, jerarquía y autoridad, y Pablo fija los requisitos de cada cargo. Una comunidad donde nadie preside ni gobierna podrá tener la Biblia en la mano y buena voluntad, pero no tiene la forma de la Iglesia que Pablo describe. Es una obra de hombres.</p>
                <p>El «casado una sola vez» pone un límite, no una obligación: excluye al que se volvió a casar, no al que no se casó, y el mismo Pablo no estaba casado (1 Co 7:7-8). Por eso el celibato de los sacerdotes es una disciplina de la Iglesia y no un dogma. En la Iglesia latina los sacerdotes no se casan y entregan su vida entera a Dios; en las Iglesias católicas orientales hay sacerdotes casados, y en todas partes un hombre casado puede ser ordenado diácono.<sup>*</sup></p>
                <h2>Los lobos salen de adentro<br>Hechos 20:29-30</h2>
                <p>Pablo se despide de los presbíteros de Éfeso con una advertencia.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hechos 20:29-30</span>
                    <blockquote>«Yo sé que después de mi partida se introducirán entre ustedes <strong>lobos rapaces</strong> que no perdonarán al rebaño. Y aun <strong>de entre ustedes mismos</strong>, surgirán hombres que tratarán de arrastrar a los discípulos con <strong>doctrinas perniciosas</strong>.»</blockquote>
                </div>
                <p>Pablo anuncia dos amenazas: los lobos que entrarán desde afuera y los hombres que surgirán de adentro, de entre los mismos pastores, arrastrando discípulos detrás de sí. La segunda es la que la historia repitió. La ruptura del siglo XVI no la empezaron extraños: Lutero era fraile agustino y sacerdote, y Zuinglio era sacerdote en Zúrich. Los dos se habían formado en la Iglesia que después dejaron. Y la advertencia supone lo que la objeción niega: un rebaño con límites, del que se puede salir y fuera del cual se puede arrastrar a otros.</p>
                <h2>La Iglesia ya existía, y Saulo la perseguía<br>Hechos 8:1-3</h2>
                <p>Antes de convertirse, Pablo sabía muy bien dónde estaba la Iglesia.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hechos 8:1-3</span>
                    <blockquote>«<strong><strong class="s-hi">Saulo</strong> aprobó la muerte de Esteban. Ese mismo día, se desencadenó una <strong class="s-hi">violenta persecución contra la Iglesia</strong> de Jerusalén. Todos, excepto los Apóstoles, se dispersaron por las regiones de Judea y Samaría. Unos hombres piadosos enterraron a Esteban y lo lloraron con gran pesar. <strong class="s-hi">Saulo</strong>, por su parte, <strong class="s-hi">perseguía a la Iglesia</strong>; iba de casa en casa y arrastraba a hombres y mujeres, llevándolos a la cárcel.</strong>»</blockquote>
                </div>
                <p>Años antes de que se escribiera la primera carta del Nuevo Testamento, la Iglesia ya tenía nombre, ciudad y perseguidores. Saulo no perseguía una idea ni una comunión invisible de almas: iba de casa en casa y se llevaba presos a hombres y mujeres. Se persigue lo que se puede encontrar. La Iglesia de Cristo existía, era visible y sus miembros tenían nombre y domicilio. Roma no la inventó: Saulo ya sabía dónde buscarla.</p>
                <h2>Perseguir a la Iglesia es perseguir a Cristo<br>Hechos 9:3-5</h2>
                <p>En el camino de Damasco, Cristo le dice a Saulo a quién estaba persiguiendo.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hechos 9:3-5</span>
                    <blockquote>«Y mientras iba caminando, al acercarse a Damasco, una luz que venía del cielo lo envolvió de improviso con su resplandor. Y cayendo en tierra, oyó una voz que le decía: «Saulo, Saulo, <strong class="s-hi">¿por qué me persigues?</strong>». Él preguntó: «¿Quién eres tú, Señor?». «<strong class="s-hi">Yo soy Jesús, a quien tú persigues</strong>», le respondió la voz.»</blockquote>
                </div>
                <p>Saulo nunca había visto a Jesús ni le había puesto la mano encima. Había encarcelado a cristianos. Y Jesús no le pregunta por qué persigue a sus seguidores: le pregunta por qué lo persigue a él. Cristo y su Iglesia son una sola cosa, al punto de que el golpe que recibe una lo recibe el otro. Separar a Cristo de su Iglesia es una operación que Cristo mismo no aceptó en el camino de Damasco.</p>
                <h2>«Confirma a tus hermanos»<br>Lucas 22:31-32</h2>
                <p>La noche de la Última Cena, Jesús se dirige a Pedro por su nombre.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Lucas 22:31-32</span>
                    <blockquote>«Simón, Simón, mira que Satanás ha pedido poder para zarandearlos como el trigo, pero <strong class="s-hi">yo he rogado por ti</strong>, para que no te falte la fe. Y tú, después que hayas vuelto, <strong class="s-hi">confirma a tus hermanos</strong>.»</blockquote>
                </div>
                <p>Satanás pidió zarandearlos a todos: el pronombre está en plural. Jesús dice que rogó por uno solo, «por ti», en singular, y a ese uno le encarga confirmar a los demás. El encargo no se lo da al más fuerte. Dos versículos después le anuncia que esa misma noche lo va a negar tres veces. Pedro es un hombre débil y pecador, y aun así la tarea de confirmar a sus hermanos en la fe se le encomienda a él solo. La firmeza no sale de Pedro: sale de la oración de Cristo por Pedro.</p>
                <h2>Tres veces: «Apacienta»<br>Juan 21:15-17</h2>
                <p>Después de la resurrección, a orillas del lago, Jesús vuelve sobre aquel encargo.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 21:15-17</span>
                    <blockquote>«Después de comer, Jesús dijo a Simón Pedro: «Simón, hijo de Juan, <strong class="s-hi">¿me amas más que estos?</strong>». Él le respondió: «Sí, Señor, tú sabes que te quiero». Jesús le dijo: «<strong class="s-hi">Apacienta mis corderos</strong>». Le volvió a decir por segunda vez: «Simón, hijo de Juan, ¿me amas?». Él le respondió: «Sí, Señor, sabes que te quiero». Jesús le dijo: «<strong class="s-hi">Apacienta mis ovejas</strong>». Le preguntó por tercera vez: «Simón, hijo de Juan, ¿me quieres?». Pedro se entristeció de que por tercera vez le preguntara si lo quería, y le dijo: «Señor, tú lo sabes todo; sabes que te quiero». Jesús le dijo: «<strong class="s-hi">Apacienta mis ovejas</strong>».»</blockquote>
                </div>
                <p>Pedro lo negó tres veces y Jesús le pregunta tres veces. No le reprocha la traición: le pide amor y, después de cada respuesta, le entrega el rebaño. «Más que estos» lo compara con los otros discípulos que estaban en la orilla, y el encargo es para él solo. Pero el rebaño no es de Pedro. Cristo dice «mis corderos», «mis ovejas»: Pedro apacienta lo ajeno, por encargo, como el mayordomo que guarda las llaves de una casa que no es suya. Cristo elige a un pecador para pastorear a sus ovejas, y la fuerza del encargo está en quien lo da.</p>
                <ul>
                    <li>Cristo es la piedra angular, y los apóstoles son cimientos en él: la Escritura no obliga a elegir.</li>
                    <li>En arameo, Pedro y la piedra son la misma palabra, <em>kefa</em>.</li>
                    <li>Las llaves son la autoridad del rey puesta en manos de su mayordomo, y se las da solamente a Pedro.</li>
                    <li>La Iglesia es columna y fundamento de la verdad, y tiene obispos y diáconos que la gobiernan.</li>
                    <li>Existía y se la perseguía antes de que se escribiera el Nuevo Testamento, y perseguirla es perseguir a Cristo.</li>
                    <li>A Pedro, débil y pecador, Cristo le encarga confirmar a sus hermanos y apacentar sus ovejas.</li>
                </ul>
                <h2>Conclusión</h2>
                <p>La Escritura no plantea la elección entre Cristo y Pedro. Cristo es la piedra angular y Pedro la piedra sobre la que Cristo edifica; Cristo es el dueño de la casa y Pedro el que guarda sus llaves; Cristo es el pastor y Pedro apacienta sus ovejas por encargo. La Iglesia que describen estos pasajes tiene cimientos, gobierno y límites, y existía antes de que se escribiera una sola carta del Nuevo Testamento. Eso no lo inventó Roma. Lo escribieron Mateo, Lucas, Pablo y el mismo Pedro.</p>
                <p>En Isaías la llave pasa de Sebná a Eliaquím: cambia el mayordomo y el cargo sigue, porque la casa de David sigue en pie. Pedro murió mártir en Roma, y la promesa de que el poder de la Muerte no prevalecería contra la Iglesia no murió con él.</p>
                <div class="article-footnote">
                    <p><sup>*</sup> Si un sacerdote católico decide que quiere casarse, puede pedirlo, pero no puede resolverlo por su cuenta. Tiene que solicitar formalmente la dispensa del celibato, que concede solamente el Papa (Código de Derecho Canónico, c. 291), junto con la pérdida del estado clerical, conocida como reducción al estado laical o secularización. Al recibirla deja de ejercer el ministerio: no celebra la Misa, no predica ni administra los sacramentos, y se dedica por completo a su vida conyugal y familiar. La única excepción es el peligro de muerte, en el que puede absolver a quien lo necesite (c. 976).</p>
                    <p>Lo que no pierde es el sacerdocio. La ordenación imprime un carácter indeleble (c. 1008): es sacerdote para siempre.</p>
                    <!-- fuente: vaticano -->
                    <div class="scripture-block">
                        <span class="scripture-ref">✝︎ Hebreos 5:6</span>
                        <blockquote>«Como también dice en otro lugar: <strong class="s-hi">Tú eres sacerdote para siempre, según el orden de Melquisedec</strong>.»</blockquote>
                    </div>
                    <p>La Iglesia reconoce que sacerdote fue y sacerdote sigue siendo. Lo que pierde es el estado clerical, con sus derechos y obligaciones: deja de pertenecer jurídicamente al clero, pasa a ser un laico ante la ley de la Iglesia y queda libre del celibato para casarse válidamente por la Iglesia.</p>
                </div>`,
      nav: {
        prevTitle: "Por qué creemos en la fe católica",
        nextTitle: "La Eucaristía: el sacramento central"
      }
    },
    "la-santisima-trinidad": {
      pageTitle: "La Santísima Trinidad | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>La Santísima Trinidad</h1>
            <p>Un solo Dios en tres Personas. Contra la idea de que Padre, Hijo y Espíritu Santo son tres títulos de una sola persona, lo que dice la Escritura, pasaje por pasaje.</p>
            <div class="article-meta">
                <span>11 min lectura</span>
                <span>Publicado en septiembre de 2026</span>
            </div>
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Texto base de Gabriel: la santisima trinidad.docx (28-sep-2026).
-->
<p>La objeción contra la Trinidad que se oye dentro del mundo pentecostal no es de todos los pentecostales: las Asambleas de Dios y la mayoría de las iglesias pentecostales confiesan la Trinidad. Es la de los pentecostales unidos, los que se llaman unicitarios o de «solo Jesús»: <em>«Dios es uno solo, no tres personas. Padre, Hijo y Espíritu Santo son títulos, maneras en que el mismo Dios se manifestó. El Padre es Jesús, y el Espíritu Santo es el Espíritu de Jesús. Por eso se bautiza solamente en el nombre de Jesús.»</em></p>
                <p>La Trinidad es un misterio: un solo Dios en tres Personas. Nadie la entiende a fondo, y la Iglesia nunca pidió entenderla para creerla. Lo que pide es creerle a Dios lo que dice de sí mismo, porque creer que hay un solo Dios no alcanza. Santiago lo dice así:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Santiago 2:19</span>
                    <blockquote>«<strong class="s-hi">¿Tú crees que hay un solo Dios? Haces bien. Los demonios también creen, y sin embargo, tiemblan.</strong>»</blockquote>
                </div>
                <p>Y lo que Dios dice de sí mismo está escrito con tanta insistencia que se entiende leyéndolo. Por eso este tema tiene más citas que explicaciones.</p>
                <h2>«Hagamos»: el plural del principio<br>Génesis 1:26</h2>
                <p>La primera señal está en la primera página de la Biblia.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Génesis 1:26</span>
                    <blockquote>«Dios dijo: «<strong class="s-hi">Hagamos al hombre a nuestra imagen, según nuestra semejanza</strong>; y que le estén sometidos los peces del mar y las aves del cielo, el ganado, las fieras de la tierra, y todos los animales que se arrastran por el suelo».»</blockquote>
                </div>
                <p>Dios habla en plural, y en la escena no hay nadie más. No son los ángeles: los ángeles no crean, y el hombre sale a imagen de Dios, no de ellos. El versículo siguiente vuelve al singular:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Génesis 1:27</span>
                    <blockquote>«<strong class="s-hi">Y Dios creó al hombre a su imagen</strong>; lo creó a imagen de Dios, los creó varón y mujer.»</blockquote>
                </div>
                <p>Uno solo que dice «nosotros». Este versículo, solo, no prueba la Trinidad, y la Iglesia no lo usa así. Es un anuncio que el resto de la Escritura va a aclarar.</p>
                <h2>El Primero y el Último, enviado<br>Isaías 48:16</h2>
                <p>En Isaías 48 habla Dios, y se presenta con un título que nadie más puede llevar:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Isaías 48:12</span>
                    <blockquote>«Escúchame, Jacob, tú, Israel, a quien yo llamé: <strong class="s-hi">Yo soy, yo soy el Primero y también soy el Último.</strong>»</blockquote>
                </div>
                <p>Es el que fundó la tierra y desplegó los cielos. Cuatro versículos después, el que habla dice esto:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Isaías 48:16</span>
                    <blockquote>«¡Acérquense a mí, escuchen esto: Desde el comienzo, nunca hablé en lo secreto, desde que esto sucede, yo estoy allí! –<strong class="s-hi">Ahora me han enviado el Señor y su espíritu</strong> –»</blockquote>
                </div>
                <p>El que estaba allí desde el comienzo es enviado, y lo envían el Señor y su espíritu. En un pasaje del Antiguo Testamento aparecen juntos el que envía, el enviado y el Espíritu. Siglos después, el Apocalipsis pone ese mismo título en boca de Jesús:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Apocalipsis 1:17-18</span>
                    <blockquote>«Al ver esto, caí a sus pies, como muerto, pero él, tocándome con su mano derecha, me dijo: «No temas: <strong class="s-hi">yo soy el Primero y el Último, el Viviente.</strong> Estuve muerto, pero ahora vivo para siempre y tengo la llave de la Muerte y del Abismo.»</blockquote>
                </div>
                <h2>Los tres en el Jordán<br>Marcos 1:10-11</h2>
                <p>En el bautismo de Jesús la objeción de los títulos se queda sin lugar.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Marcos 1:10-11</span>
                    <blockquote>«Y al salir del agua, vio que los cielos se abrían y que <strong class="s-hi">el Espíritu Santo descendía sobre él</strong> como una paloma; y <strong>una voz desde el cielo</strong> dijo: «<strong class="s-hi">Tú eres mi Hijo muy querido</strong>, en ti tengo puesta toda mi predilección».»</blockquote>
                </div>
                <p>El Hijo sale del agua, el Espíritu baja sobre él y el Padre habla desde el cielo, en el mismo momento. Si fueran tres maneras de manifestarse una sola persona, esa persona estaría a la vez en el agua, bajando sobre sí misma y hablándose desde arriba. Mateo cuenta la misma escena (Mt 3:16-17). Nadie se dice «tú» a sí mismo desde el cielo.</p>
                <h2>El Padre le habla al Hijo<br>Hebreos 1:5</h2>
                <p>La carta a los Hebreos vuelve sobre esa voz para mostrar que el Hijo está por encima de los ángeles.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hebreos 1:5</span>
                    <blockquote>«¿Acaso dijo Dios alguna vez a un ángel: «<strong class="s-hi">Tú eres mi Hijo, yo te he engendrado hoy</strong>»? ¿Y de qué ángel dijo: «<strong>Yo seré un padre para él y él será para mí un hijo</strong>»?»</blockquote>
                </div>
                <p>Uno habla y el otro es interpelado. Y tres versículos más abajo, el Padre llama Dios al Hijo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hebreos 1:8</span>
                    <blockquote>«En cambio, a su Hijo le dice: <strong class="s-hi">Tu trono, Dios, permanece para siempre</strong>. El cetro de tu realeza es un cetro justiciero.»</blockquote>
                </div>
                <p>El Hijo es Dios, y el Padre, que le habla, no es él.</p>
                <h2>Junto al Padre, antes del mundo<br>Juan 17:5</h2>
                <p>Para los pentecostales unidos, el Hijo empieza en Belén: «Hijo» sería el nombre de la humanidad de Jesús, y «Padre» el del Dios que habita en ella. Juan lo contesta en su primera carta.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Juan 1:2-3</span>
                    <blockquote>«Porque la Vida se hizo visible, y nosotros la vimos y somos testigos, y les anunciamos <strong class="s-hi">la Vida eterna, que existía junto al Padre</strong> y que se nos ha manifestado. Lo que hemos visto y oído, se lo anunciamos también a ustedes, para que vivan en comunión con nosotros. Y nuestra comunión es <strong>con el Padre y con su Hijo Jesucristo</strong>.»</blockquote>
                </div>
                <p>Lo que los apóstoles vieron y tocaron existía junto al Padre antes de manifestarse. Nadie está junto a sí mismo. Es lo que Juan había escrito al abrir su Evangelio:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 1:1</span>
                    <blockquote>«Al principio existía la Palabra, y <strong class="s-hi">la Palabra estaba junto a Dios, y la Palabra era Dios</strong>.»</blockquote>
                </div>
                <p>Y Jesús lo dice con sus propias palabras la noche antes de morir:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 17:5</span>
                    <blockquote>«Ahora, Padre, glorifícame junto a ti, <strong class="s-hi">con la gloria que yo tenía contigo antes que el mundo existiera</strong>.»</blockquote>
                </div>
                <p>Jesús le pide al Padre la gloria que tenía con él antes de la creación. Si el Hijo hubiera empezado en Belén, no tendría una gloria anterior que reclamar ni alguien con quien la hubiera tenido. En la misma oración insiste:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 17:24</span>
                    <blockquote>«Padre, quiero que los que tú me diste estén conmigo donde yo esté, para que contemplen la gloria que me has dado, porque <strong class="s-hi">ya me amabas antes de la creación del mundo</strong>.»</blockquote>
                </div>
                <p>Antes del mundo había uno que amaba y otro que era amado.</p>
                <h2>Dos testigos<br>Juan 8:16-18</h2>
                <p>Discutiendo con los fariseos, Jesús invoca la Ley de Moisés, que no aceptaba un solo testigo (Dt 19:15).</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 8:16-18</span>
                    <blockquote>«y si lo hago, mi juicio vale porque <strong class="s-hi">no soy yo solo el que juzga, sino yo y el Padre que me envió</strong>. En la Ley de ustedes está escrito que <strong>el testimonio de dos personas es válido</strong>. Yo doy testimonio de mí mismo, y también el Padre que me envió da testimonio de mí».»</blockquote>
                </div>
                <p>Jesús presenta dos testigos: él y el Padre. Si fueran una sola persona con dos nombres, estaría haciendo pasar un testigo por dos, y el argumento ante los fariseos sería una trampa. Jesús cuenta dos. Los pentecostales unidos cuentan uno.</p>
                <p>Los versículos que ellos citan dicen lo mismo cuando se leen enteros:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 10:30</span>
                    <blockquote>«El Padre y yo <strong class="s-hi">somos</strong> una sola cosa.»</blockquote>
                </div>
                <p>«Somos» es plural, y lo que es uno es la cosa, no la persona. Lo mismo en la respuesta a Felipe:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 14:9-11</span>
                    <blockquote>«El que me ha visto, ha visto al Padre... <strong class="s-hi">yo estoy en el Padre y el Padre está en mí</strong>.»</blockquote>
                </div>
                <p>Para estar uno en el otro hacen falta dos.</p>
                <h2>Otro Paráclito<br>Juan 14:16-17</h2>
                <p>Sobre el Espíritu Santo, la palabra decisiva la dice Jesús en la última cena.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 14:16-17</span>
                    <blockquote>«Y yo rogaré al Padre, y él les dará <strong class="s-hi">otro Paráclito</strong> para que esté siempre con ustedes: <strong>el Espíritu de la Verdad</strong>, a quien el mundo no puede recibir, porque no lo ve ni lo conoce. Ustedes, en cambio, lo conocen, porque él permanece con ustedes y estará en ustedes.»</blockquote>
                </div>
                <p>El Hijo ruega, el Padre da, y lo que da es otro Paráclito. Paráclito es el que acompaña y defiende; Jesús lo había sido para sus discípulos durante tres años, y ahora anuncia a otro. Si el Espíritu Santo fuera Jesús con otro nombre, no sería otro. En los capítulos siguientes cada uno aparece con lo suyo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 14:26</span>
                    <blockquote>«Pero el Paráclito, el Espíritu Santo, <strong class="s-hi">que el Padre enviará en mi Nombre</strong>, les enseñará todo y les recordará lo que les he dicho.»</blockquote>
                </div>

                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 16:13</span>
                    <blockquote>«Cuando venga el Espíritu de la Verdad, él los introducirá en toda la verdad, porque <strong class="s-hi">no hablará por sí mismo, sino que dirá lo que ha oído</strong> y les anunciará lo que irá sucediendo.»</blockquote>
                </div>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 15:26</span>
                    <blockquote>«Cuando venga <strong class="s-hi">el Paráclito que yo les enviaré desde el Padre</strong>, el Espíritu de la Verdad que proviene del Padre, <strong>él dará testimonio de mí</strong>.»</blockquote>
                </div>
                <p>En un solo versículo el Hijo envía, el Espíritu procede del Padre y el Espíritu da testimonio del Hijo. Son tres sujetos en una frase, y ninguno es un título de otro. El que oye, habla, es enviado y da testimonio no es una fuerza ni un modo. Es alguien.</p>
                <h2>En el nombre del Padre, del Hijo y del Espíritu Santo<br>Mateo 28:19</h2>
                <p>Queda el bautismo. Los pentecostales unidos rechazan la fórmula trinitaria y bautizan «en el nombre de Jesús», apoyados en pasajes como este:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hechos 19:2-5</span>
                    <blockquote>«y les preguntó: «<strong class="s-hi">Cuando ustedes abrazaron la fe, ¿recibieron el Espíritu Santo?</strong>». Ellos le dijeron: «<strong>Ni siquiera hemos oído decir que hay un Espíritu Santo</strong>». «Entonces, ¿qué bautismo recibieron?», les preguntó Pablo. «El de Juan», respondieron. Pablo les dijo: «Juan bautizaba con el bautismo de penitencia, diciendo al pueblo que creyera en el que vendría después de él, es decir, en Jesús». Al oír estas palabras, ellos se hicieron bautizar en el nombre del Señor Jesús.»</blockquote>
                </div>
                <p>El pasaje sirve para lo contrario. Lo primero que Pablo pregunta es si recibieron el Espíritu Santo. Cuando le responden que ni siquiera saben que exista, entiende que el bautismo que tienen no es el cristiano, y pregunta cuál recibieron: el de Juan. «En el nombre del Señor Jesús» es lo que separa un bautismo del otro. Lucas no está transcribiendo las palabras que se pronunciaban sobre el agua. Esas palabras las dio Jesús:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 28:19</span>
                    <blockquote>«Vayan, y hagan que todos los pueblos sean mis discípulos, bautizándolos <strong class="s-hi">en el nombre del Padre y del Hijo y del Espíritu Santo</strong>…»</blockquote>
                </div>
                <p>«En el nombre», en singular, y a continuación tres. Un solo nombre, porque Dios es uno. Tres nombrados, porque son tres. Es la fórmula que la Iglesia recibió de Jesús y con la que bautiza hasta hoy.</p>
                <h2>Los tres en el saludo de los apóstoles<br>2 Corintios 13:13</h2>
                <p>Pablo cierra su segunda carta a los corintios con esta bendición.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Corintios 13:13</span>
                    <blockquote>«<strong class="s-hi">La gracia del Señor Jesucristo, el amor de Dios y la comunión del Espíritu Santo</strong> permanezcan con todos ustedes.»</blockquote>
                </div>
                <p>Los tres, uno al lado del otro, cada uno con lo que da. No es una frase aislada. En la primera carta a los corintios:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Corintios 12:4-6</span>
                    <blockquote>«Ciertamente, hay diversidad de dones, pero todos proceden <strong class="s-hi">del mismo Espíritu</strong>. Hay diversidad de ministerios, pero <strong class="s-hi">un solo Señor</strong>. Hay diversidad de actividades, pero es <strong class="s-hi">el mismo Dios</strong> el que realiza todo en todos.»</blockquote>
                </div>
                <p>A los efesios les escribe:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Efesios 4:4-6</span>
                    <blockquote>«Hay un solo Cuerpo y <strong class="s-hi">un solo Espíritu</strong>... hay <strong class="s-hi">un solo Señor</strong>, una sola fe, un solo bautismo. Hay <strong class="s-hi">un solo Dios y Padre de todos</strong>, que está sobre todos, lo penetra todo y está en todos.»</blockquote>
                </div>
                <p>Y Pedro abre su primera carta del mismo modo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Pedro 1:2</span>
                    <blockquote>«según la previsión de <strong class="s-hi">Dios Padre</strong>, y han sido santificados por <strong class="s-hi">el Espíritu</strong> para obedecer a <strong class="s-hi">Jesucristo</strong> y recibir la aspersión de su sangre. A ustedes, gracia y paz en abundancia.»</blockquote>
                </div>
                <p>Los apóstoles nombraban a los tres ya en el saludo.</p>
                <ul>
                    <li>En el Jordán el Hijo, el Espíritu y el Padre aparecen a la vez, y el Padre le habla al Hijo.</li>
                    <li>El Hijo estaba junto al Padre y tenía gloria con él antes de que el mundo existiera.</li>
                    <li>Jesús presenta al Padre y a sí mismo como dos testigos.</li>
                    <li>El Espíritu Santo es otro Paráclito: oye, habla, es enviado y da testimonio.</li>
                    <li>Jesús mandó bautizar en un solo nombre, el del Padre y del Hijo y del Espíritu Santo.</li>
                </ul>
                <h2>Conclusión</h2>
                <p>Los pentecostales unidos tienen razón en lo que afirman: Dios es uno solo, y Jesús es Dios. Se equivocan en lo que niegan. Para sostener que Padre, Hijo y Espíritu Santo son una sola persona con tres títulos, el bautismo del Jordán tiene que leerse como una escena con un solo personaje, la oración de Juan 17 como un hombre que se habla a sí mismo y el testimonio de Juan 8 como un testigo que se cuenta dos veces. Ningún otro pasaje de la Escritura se lee así.</p>
                <p>La Trinidad sigue siendo un misterio, y la Escritura no lo explica. Lo cuenta, desde el primer capítulo del Génesis hasta el saludo de las cartas. En el Jordán el Hijo salía del agua, el Espíritu bajaba sobre él y el Padre hablaba desde el cielo.</p>`,
      nav: {
        prevTitle: "La nueva ley en Cristo",
        nextTitle: "Por qué creemos en la fe católica"
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
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Cotejadas el 27-ago-2026: 6 del Vaticano, 1 de Jerusalén (Ap 5:8).
Atribución verificada el 4-oct-2026: adventistas, creencia 26 («la muerte
constituye un estado de inconsciencia»); Testigos, La Atalaya («Los muertos no
están conscientes»).
-->
<p>Varias sectas protestantes sostienen la herejía del «sueño del alma». Los adventistas y los Testigos de Jehová la tienen escrita: para ellos la muerte es un estado de inconsciencia hasta el juicio final. De ahí sale la objeción que repiten sin cansarse: <em>«Los muertos no pueden escucharte.»</em> La Escritura dice otra cosa. No en una cita aislada: en siete pasajes distintos, desde Pablo hasta el Apocalipsis. Uno por uno.</p>

            <h2>El conocimiento se perfecciona tras la muerte<br>1 Corintios 13:9-13</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝︎ 1 Corintios 13:9-13</span>
                <blockquote>«porque <strong class="s-hi">nuestra ciencia es imperfecta</strong> y nuestras profecías, limitadas. Cuando llegue lo que es perfecto, cesará lo que es imperfecto. Mientras yo era niño, hablaba como un niño, sentía como un niño, razonaba como un niño, pero cuando me hice hombre, dejé a un lado las cosas de niño. Ahora vemos como en un espejo, confusamente; después veremos cara a cara. Ahora conozco todo imperfectamente; después <strong class="s-hi">conoceré como Dios me conoce a mí.</strong> En una palabra, ahora existen tres cosas: la fe, la esperanza y el amor, pero la más grande todas es el amor.»</blockquote>
            </div>

            <p>Pablo enseña que en esta vida el conocimiento es imperfecto. Cuando llegue lo perfecto, y eso ocurre al morir y ver a Dios cara a cara, se conocerá como Dios conoce: sin velo y sin límite. Si los santos conocen así, nada les es oculto. Pueden escuchar. Pueden entender las súplicas que se les dirigen.</p>

            <h2>Tras la muerte, Dios se ve tal cual es<br>1 Juan 3:2</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝︎ 1 Juan 3:2</span>
                <blockquote>«Queridos míos, desde ahora somos hijos de Dios, y lo que seremos no se ha manifestado todavía. Sabemos que cuando se manifieste, <strong class="s-hi">seremos semejantes a él, porque lo veremos tal cual es.</strong>»</blockquote>
            </div>

            <p>San Juan confirma lo que dice Pablo. Ahora, en esta vida, no se ve: se cree. Tras la muerte, se ve a Dios tal cual es. Los santos ya cruzaron ese umbral. Ya ven. Ahí se cae el llamado «sueño del alma»: no están en ninguna oscuridad, están en la luz plena.</p>

            <h2>Tras la muerte viene el cielo<br>Juan 14:1-4</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝︎ Juan 14:1-4</span>
                <blockquote>«No se inquieten. Crean en Dios y crean también en mí. <strong class="s-hi">En la Casa de mi Padre hay muchas habitaciones</strong>; si no fuera así, se lo habría dicho a ustedes. Yo voy a prepararles un lugar. Y cuando haya ido y les haya preparado un lugar, <strong class="s-hi">volveré otra vez para llevarlos conmigo, a fin de que donde yo esté, estén también ustedes.</strong> Ya conocen el camino del lugar adonde voy.»</blockquote>
            </div>

            <p>Jesús no deja lugar a dudas: hay un destino tras la muerte, y ese destino es estar con él. El cielo no es una metáfora: es el lugar donde Jesús fue a preparar sitio. Y los santos que vivieron en la fe ya están allí, con él, donde él prometió llevarlos.</p>

            <h2>Los santos: la gran nube de testigos<br>Hebreos 11:1 — 12:3</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝︎ Hebreos 11:1 — 12:3</span>
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

            <h2>El alma no duerme: Cristo predicó a los espíritus<br>1 Pedro 3:18-22</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝︎ 1 Pedro 3:18-22</span>
                <blockquote>«<strong class="s-hi">Cristo murió una vez por nuestros pecados</strong> –siendo justo, padeció por la injusticia– para llevarnos a Dios. Entregado a la muerte en su carne, fue vivificado en el Espíritu. <strong class="s-hi">Y entonces fue a hacer su anuncio a los espíritus que estaban prisioneros</strong>, a los que se resistieron a creer cuando Dios esperaba pacientemente, en los días en que Noé construía el arca. En ella, unos pocos –ocho en total– se salvaron a través del agua. Todo esto es figura del bautismo, por el que <strong class="s-hi">ahora ustedes son salvados</strong>, el cual no consiste en la supresión de una mancha corporal, sino que es el compromiso con Dios de una conciencia pura, por la resurrección de Jesucristo, que está a la derecha de Dios, después de subir al cielo y de habérsele sometido los Angeles, las Dominaciones y las Potestades.»</blockquote>
            </div>

            <p>Aquí cae el argumento del «sueño del alma», y cae por donde más duele. Cristo, tras morir, no quedó inconsciente esperando el juicio final: fue a hacer su anuncio a los espíritus que estaban prisioneros. Un anuncio supone alguien que habla y alguien que oye, y los dos estaban muertos. El alma sigue activa después de la muerte del cuerpo. Si la de Cristo lo estuvo, la de los santos también.</p>

            <h2>Los santos están en la Jerusalén celestial<br>Hebreos 12:22-24</h2>

            <!-- fuente: vaticano -->
            <div class="scripture-block">
                <span class="scripture-ref">✝︎ Hebreos 12:22-24</span>
                <blockquote>«Ustedes, en cambio, se han acercado a la montaña de Sión, <strong class="s-hi">a la Ciudad del Dios viviente, a la Jerusalén celestial</strong>, a una multitud de ángeles, a una fiesta solemne, a la asamblea de los primogénitos cuyos nombres están escritos en el cielo. Se han acercado a Dios, que es el Juez del universo, y <strong class="s-hi">a los espíritus de los justos que ya han llegado a la perfección</strong>, a Jesús, el mediador de la Nueva Alianza, y a la sangre purificadora que habla más elocuentemente que la de Abel.»</blockquote>
            </div>

            <p>Los santos fallecidos no flotan en ningún limbo esperando el juicio. Están en «la Ciudad del Dios viviente». Y el verbo es decisivo: los vivos <em>se han acercado</em> a ellos, en presente y en perfecto, no en una promesa futura. Son espíritus de justos que ya llegaron a la perfección. Perfectos. Cerca de Dios. Sin barrera y sin distancia.</p>

            <h2>Los santos llevan las oraciones ante el trono<br>Apocalipsis 5:8</h2>

            <!-- fuente: bj -->
            <div class="scripture-block">
                <span class="scripture-ref">✝︎ Apocalipsis 5:8</span>
                <blockquote>«Cuando lo tomó, los cuatro seres vivientes y los veinticuatro ancianos se postraron ante el Cordero; cada uno tenía un arpa y <strong class="s-hi">copas de oro llenas de incienso aromático, que son las oraciones de los santos.</strong>»</blockquote>
            </div>

            <p>San Juan lo ve en visión: en el cielo, delante del Cordero, los seres celestiales llevan ante el trono copas de incienso que <em>son</em> las oraciones de los santos. Las oraciones de los fieles de la tierra llegan al altar del cielo a través de los que allí están. Los santos no solo escuchan: presentan.</p>

            <h2>Conclusión</h2>

            <p>Los santos son los que vivieron en la fe (Abel, Henoc, Noé, Abraham, Moisés, los profetas), los que tras la muerte están en la Ciudad del Dios viviente, la Jerusalén celestial. Allí conocen como Dios los conoce. Allí ven a Dios tal cual es. Allí no hay limitación ni distancia.</p>

            <p>Y lo que hace la Iglesia al invocarlos es exactamente lo que muestra el Apocalipsis: llevan al altar del cielo las oraciones de los fieles y las presentan ante el trono del Cordero. A los santos no se los adora. Se les pide que intercedan ante Dios, igual que se le pide a un hermano vivo que rece por uno. La única diferencia está a favor de ellos: están en el cielo y conocen como Dios conoce. Por eso ven, escuchan e interceden.</p>`,
      nav: {
        prevTitle: "El Sacerdocio en la Iglesia Católica",
        nextTitle: "El purgatorio y la misericordia de Dios"
      }
    },
    "por-que-creemos": {
      pageTitle: "Por qué creemos | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>Por qué creemos en la fe católica</h1>
            <p>No por costumbre: porque hubo testigos, porque la Palabra se transmitió y porque la Biblia misma señala hacia la Iglesia que Jesús fundó.</p>
            <div class="article-meta">
                <span>15 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Cotejadas el 27-ago-2026; el 4-oct-2026 las citas en línea pasaron a recuadro
y el artículo se reorientó contra el sola scriptura (Jerusalén: Mt 16:18 y 1 Tim 3:15).
Atribución verificada el 4-oct-2026: adventistas, Creencia fundamental 18 en
su redacción vigente desde 2015 (institucional.adventistas.org: «hablan con
autoridad profética»); Testigos, La Atalaya 1-10-1994,
págs. 4-8 («solo puede conocerse mediante el conducto de comunicación de Jehová»).
-->
<p>El católico no cree por tradición ciega ni por costumbre familiar. Cree porque la Palabra de Dios fue atestiguada, transmitida fielmente y sigue siendo verdad. San Lucas lo dice desde el principio: se informó cuidadosamente de todo desde los orígenes (Lc 1:3).</p>
                <p>Las sectas protestantes, evangélicos, bautistas y pentecostales incluidos, sostienen la herejía que dio origen a la Reforma: <em>«Solo la Biblia es la regla de fe. La Biblia es suficiente.»</em> Es el <em>sola scriptura</em>. Que la Biblia es Palabra de Dios no está en discusión. Lo que está en discusión es si la Biblia dice de sí misma que es la única regla. No lo dice, y desde el primer capítulo de Lucas muestra que antes del texto hubo testigos.</p>
                <h2>La Palabra fue atestiguada<br>Lucas 1:1-4 y Juan 11:25-27</h2>
                <p>Lucas no escribió primero: primero recibió lo que otros transmitían.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Lucas 1:1-4</span>
                    <blockquote>«Muchos han tratado de relatar ordenadamente los acontecimientos que se cumplieron entre nosotros, <strong class="s-hi">tal como nos fueron transmitidos por aquellos que han sido desde el comienzo testigos oculares y servidores de la Palabra</strong>. Por eso, después de informarme cuidadosamente de todo desde los orígenes, yo también he decidido escribir para ti, excelentísimo Teófilo, un relato ordenado, a fin de que <strong class="s-hi">conozcas bien la solidez</strong> de las enseñanzas que has recibido.»</blockquote>
                </div>
                <p>No son leyendas: son testimonios. Lo que Jesús dijo, vivió y enseñó fue visto y transmitido por testigos reales, y Teófilo ya había recibido esas enseñanzas antes de leer una línea del Evangelio.</p>
                <p>Marta, ante la tumba de su hermano, lo reconoce sin dudarlo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 11:25-27</span>
                    <blockquote>«Jesús le dijo: «Yo soy la Resurrección y la Vida. El que cree en mí, aunque muera, vivirá: y todo el que vive y cree en mí, no morirá jamás. ¿Crees esto?». Ella le respondió: «<strong class="s-hi">Sí, Señor, creo que tú eres el Mesías, el Hijo de Dios, el que debía venir al mundo</strong>».»</blockquote>
                </div>
                <p>Marta creyó por la palabra que oyó de Cristo, cuando todavía no existía una sola página del Nuevo Testamento. La fe no es irracional: es la respuesta a una revelación verificada por quienes la vivieron.</p>
                <h2>El enemigo pelea contra la Palabra<br>Lucas 8:11-12 y Salmo 119</h2>
                <p>La Iglesia no le teme a la Biblia: la defiende, porque sabe quién la ataca. La parábola del sembrador lo deja claro:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Lucas 8:11-12</span>
                    <blockquote>«La parábola quiere decir esto: <strong class="s-hi">La semilla es la Palabra de Dios</strong>. Los que están al borde del camino son los que escuchan, pero luego viene el demonio y <strong class="s-hi">arrebata la Palabra de sus corazones, para que no crean y se salven</strong>.»</blockquote>
                </div>
                <p>El demonio sabe que la Palabra de Dios hace brotar la salvación. No es casualidad que el enemigo luche contra su lectura. El Salmo 119:72 afirma que la ley de los labios de Dios vale más que todo el oro y la plata, y San Pablo dice qué se gana leyéndola:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Timoteo 3:15</span>
                    <blockquote>«Recuerda que desde la niñez conoces las Sagradas Escrituras: <strong class="s-hi">ellas pueden darte la sabiduría que conduce a la salvación</strong>, mediante la fe en Cristo Jesús.»</blockquote>
                </div>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Salmo 119:103-105</span>
                    <blockquote>«¡Qué dulce es tu palabra para mi boca, es más dulce que la miel!... <strong class="s-hi">Tu palabra es una lámpara para mis pasos, y una luz en mi camino.</strong>»</blockquote>
                </div>
                <p>Quien no lee la Palabra de Dios camina en la oscuridad.</p>
                <h2>La Palabra es de Dios<br>2 Pedro 1:19, Juan 17:17 y Lucas 11:28</h2>
                <p>Esto no es opinión humana. San Pedro llama a la palabra de los profetas una lámpara y manda prestarle atención:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Pedro 1:19</span>
                    <blockquote>«Así hemos visto confirmada la palabra de los profetas, y ustedes hacen bien en prestar atención a ella, <strong class="s-hi">como a una lámpara que brilla en un lugar oscuro</strong> hasta que despunte el día y aparezca el lucero de la mañana en sus corazones.»</blockquote>
                </div>
                <p>El mismo Jesús, en su oración al Padre, lo confirma:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 17:17</span>
                    <blockquote>«Conságralos en la verdad: <strong class="s-hi">tu palabra es verdad</strong>.»</blockquote>
                </div>
                <p>Y dice qué hacer con ella:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Lucas 11:28</span>
                    <blockquote>«Jesús le respondió: «Felices más bien los que escuchan la Palabra de Dios y <strong class="s-hi">la practican</strong>».»</blockquote>
                </div>
                <p>No dijo los que la conocen ni los que la citan; dijo los que la <strong class="s-hi">practican</strong>.</p>
                <h2>La fe es hacer lo que Él dice<br>Lucas 5:5 y Juan 2:5</h2>
                <p>Pedro había pescado toda la noche y no había sacado nada. Por su experiencia humana, echar las redes de día no tenía ningún sentido. Pero dijo algo que resume toda la fe:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Lucas 5:5</span>
                    <blockquote>«Simón le respondió: Maestro, hemos trabajado la noche entera y no hemos sacado nada, <strong class="s-hi">pero si tú lo dices, echaré las redes.</strong>»</blockquote>
                </div>
                <p>Y por eso, precisamente, Jesús lo hizo pescador de hombres, a él y no a los demás (Lc 5:10).</p>
                <p>En Caná, la Virgen María da la instrucción definitiva a los sirvientes:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 2:5</span>
                    <blockquote>«Pero su madre dijo a los sirvientes: «<strong class="s-hi">Hagan todo lo que él les diga</strong>».»</blockquote>
                </div>
                <p>Las tinajas se llenaron de agua, y el agua se convirtió en vino cuando los sirvientes cumplieron sus órdenes hasta el final:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 2:8</span>
                    <blockquote>«Saquen ahora, agregó Jesús, y lleven al encargado del banquete». <strong class="s-hi">Así lo hicieron.</strong>»</blockquote>
                </div>
                <p>La fe no es solo creer: es cumplir. El desarrollo de esto está en los temas de <a href="tema-la-eucaristia.html">La Eucaristía</a> y de <a href="tema-transubstanciacion.html">Transubstanciación</a>.</p>
                <h2>¿De dónde viene la Biblia?<br>El sola scriptura y sus problemas</h2>
                <p>El versículo que más se usa para defender el <em>sola scriptura</em> es este:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Timoteo 3:16-17</span>
                    <blockquote>«<strong class="s-hi">Toda la Escritura está inspirada por Dios, y es útil para enseñar y para argüir, para corregir y para educar en la justicia</strong>, a fin de que el hombre de Dios sea perfecto y esté preparado para hacer siempre el bien.»</blockquote>
                </div>
                <p>La palabra que usa Pablo es «útil» (en griego ὠφέλιμος), no «exclusiva» ni «única regla de fe». El versículo nunca dice que la Escritura sola es suficiente para todo. Y hay algo más importante: si el único criterio de verdad fuera «lo que dice la Biblia», entonces el <em>sola scriptura</em> tendría que estar en la Biblia para ser válido. Y no está. El argumento se destruye a sí mismo con su propio criterio.</p>
                <h2>«Solo la Biblia», con otra autoridad al lado<br>Adventistas y Testigos de Jehová</h2>
                <p>Dos sectas protestantes dicen «solo la Biblia» y tienen escrito lo contrario. Los adventistas declaran en su creencia fundamental 18 que los escritos de Elena de White <em>«hablan con autoridad profética»</em>, aunque en la misma creencia digan que la Biblia es la norma. Los Testigos de Jehová lo dicen más claro todavía: <em>«Todos los que quieren entender la Biblia deben reconocer que la "grandemente diversificada sabiduría de Dios" solo puede conocerse mediante el conducto de comunicación de Jehová, el esclavo fiel y discreto»</em> (La Atalaya, 1 de octubre de 1994).</p>
                <p>Ninguno de los dos vive del <em>sola scriptura</em>. Le niegan a la Iglesia que Cristo fundó la autoridad que le dan a Elena de White y al «esclavo fiel y discreto».</p>
                <h2>¿Quién fijó el canon?<br>El problema que el sola scriptura no puede responder</h2>
                <p>El Nuevo Testamento no llegó con un índice. Durante los primeros siglos, distintas comunidades usaban distintos textos. ¿Cómo se decidió qué es Palabra de Dios y qué no lo es? La Iglesia Católica, en los concilios de Hipona (393 d.C.) y Cartago (397 d.C.), fijó el canon bíblico. Los protestantes lo recibieron de esa Iglesia y le sacaron siete libros del Antiguo Testamento: Tobías, Judit, Sabiduría, Eclesiástico, Baruc y los dos de Macabeos. El que rechaza la autoridad de la Iglesia Católica para enseñar doctrina está confiando en esa misma Iglesia para saber qué libros leer. No es posible tener coherencia de otra manera.</p>
                <h2>La Tradición oral es bíblica<br>2 Tesalonicenses 2:15 y 2 Timoteo 2:2</h2>
                <p>Pablo no enseñó solo por carta. Ordenó guardar también la tradición oral:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Tesalonicenses 2:15</span>
                    <blockquote>«Por lo tanto, hermanos, <strong class="s-hi">manténganse firmes y conserven fielmente las tradiciones que aprendieron de nosotros, sea oralmente o por carta.</strong>»</blockquote>
                </div>
                <p>Y encargó que esa tradición se transmitiera de generación en generación:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Timoteo 2:2</span>
                    <blockquote>«<strong class="s-hi">Lo que oíste de mí y está corroborado por numerosos testigos, confíalo a hombres responsables que sean capaces de enseñar a otros.</strong>»</blockquote>
                </div>
                <p>Cuatro generaciones de transmisión en un solo versículo: Pablo → Timoteo → hombres responsables → otros. Y el mismo Juan lo reconoce al final de su Evangelio:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 21:25</span>
                    <blockquote>«<strong class="s-hi">Jesús hizo también muchas otras cosas. Si se las relata detalladamente, pienso que no bastaría todo el mundo para contener los libros que se escribirían.</strong>»</blockquote>
                </div>
                <p>Jesús mismo no escribió una sola línea. Envió apóstoles a predicar, no a escribir.</p>
                <h2>La interpretación privada está prohibida por la Biblia<br>2 Pedro 1:20-21</h2>
                <p>Pedro lo dice con claridad:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 2 Pedro 1:20-21</span>
                    <blockquote>«Pero tengan presente, ante todo, que <strong class="s-hi">nadie puede interpretar por cuenta propia una profecía de la Escritura</strong>. Porque ninguna profecía ha sido anunciada por voluntad humana, sino que los hombres han hablado de parte de Dios, impulsados por el Espíritu Santo.»</blockquote>
                </div>
                <p>Desde 1517, miles de denominaciones leen la misma Biblia y llegan a conclusiones opuestas sobre el bautismo, la Eucaristía, la salvación y la moral. Jesús oró por lo contrario:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 17:21</span>
                    <blockquote>«<strong class="s-hi">Que todos sean uno</strong>: como tú, Padre, estás en mí y yo en ti, que también ellos sean uno en nosotros, para que el mundo crea que tú me enviaste.»</blockquote>
                </div>
                <p>El Espíritu Santo no se contradice. Doctrinas opuestas, todas sacadas «solo de la Biblia», no vienen de Él.</p>
                <h2>La Iglesia es la columna de la verdad<br>1 Timoteo 3:15 y Mateo 16:18</h2>
                <p>La Biblia no se llama a sí misma columna de la verdad. Llama así a la Iglesia:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Timoteo 3:15</span>
                    <blockquote>«La Iglesia del Dios vivo, <strong class="s-hi">columna y fundamento de la verdad.</strong>»</blockquote>
                </div>
                <p>Y Jesús hizo una promesa institucional sobre ella:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 16:18</span>
                    <blockquote>«Y yo a mi vez te digo que tú eres Pedro, y sobre esta roca edificaré mi Iglesia, <strong class="s-hi">y las puertas del infierno no prevalecerán contra ella.</strong>»</blockquote>
                </div>
                <p>Esa promesa protege el Magisterio, la enseñanza oficial de la Iglesia, de enseñar error definitivamente. No significa que cada miembro sea impecable. Significa que la verdad que Cristo confió a su Iglesia no puede ser destruida: en el griego, las πύλαι ᾅδου, el poder de la muerte y del sepulcro, no se la llevan por delante.</p>
                <h2>Conclusión: creer y cumplir<br>Mateo 7:21</h2>
                <p>La Palabra de los profetas es de Dios. Los apóstoles la atestiguaron. Leída entera, habla también de la Tradición oral, de quién interpreta y de la Iglesia que Cristo fundó. Y la fe consiste en hacer lo que Dios dice:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 7:21</span>
                    <blockquote>«No son los que me dicen: «Señor, Señor», los que entrarán en el Reino de los Cielos, sino <strong class="s-hi">los que cumplen la voluntad de mi Padre</strong> que está en el cielo.»</blockquote>
                </div>
                <p>Creer es confiar en Jesucristo aunque la experiencia humana diga lo contrario, como hizo Pedro en el lago. La Biblia, leída entera, señala hacia la Iglesia que Jesús fundó.</p>`,
      nav: {
        prevTitle: "La Santísima Trinidad",
        nextTitle: "La primacía de Pedro"
      }
    },
    "sacerdocio": {
      pageTitle: "El Sacerdocio | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Tema Especial</span>
            </div>
            <h1>El Sacerdocio en la Iglesia Católica</h1>
            <p>¿Existe un sacerdocio ordenado en el Nuevo Testamento? La Biblia responde que sí: presbíteros ordenados, confesión, altar y sacrificio.</p>
            <div class="article-meta">
                <span>11 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
la marca "fuente:" que la precede. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Cotejadas el 27-ago-2026; el 4-oct-2026 las citas en línea pasaron a recuadro
(14 del Vaticano, 2 de Jerusalén: Heb 5:1-2 y 5:4).
Atribución verificada el 4-oct-2026: sacerdocio universal = adventistas y
bautistas (no Testigos: para ellos 1 Pe 2:9 es solo de los 144.000, La Atalaya
15-1-2012); Mt 23:9 contra el título de padre = Testigos (Perspicacia, vol. 2,
«Padre»); ancianos que no absuelven = Testigos (La Atalaya 1-9-2010).
Mt 23:9: vatican.va transcribe «a Nadie»; la errata está en ERRATAS de cotejo.py.
-->
<p>Jesús les dio a los apóstoles el poder de perdonar los pecados y también el de retenerlos (Jn 20:23). ¿Cómo se retienen los pecados de alguien sin saber cuáles son? Eso exige confesión. Eso exige un sacerdote con autoridad para perdonar.</p>
                <p>Varias sectas protestantes sostienen la herejía de que no existe un sacerdocio ordenado. Los adventistas y los bautistas la formulan casi con las mismas palabras: <em>«Todos los creyentes somos sacerdotes; no hace falta ningún intermediario.»</em> Y citan para eso 1 Pedro 2:9. Ese versículo es verdadero y está en la Biblia. Los otros también están, y hablan de un segundo sacerdocio que nadie se toma por su cuenta.</p>
                <h2>Un hombre tomado de entre los hombres<br>Hebreos 5:1-2</h2>
                <p>La carta a los Hebreos es clara desde el principio:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hebreos 5:1-2</span>
                    <blockquote>«<strong class="s-hi">Todo sumo sacerdote es tomado de entre los hombres</strong> y puesto al servicio de Dios en favor de ellos, para ofrecer dones y sacrificios por los pecados. Puede compadecerse de los ignorantes y extraviados, ya que él mismo está rodeado de debilidad.»</blockquote>
                </div>
                <p>El sacerdote no está por encima de la condición humana. Comparte las mismas luchas, tentaciones y debilidades de cualquier creyente. Esta es la base de la compasión pastoral: nadie puede acompañar al otro en lo que no conoce. El sacerdote puede compadecerse porque también él lucha.</p>
                <h2>Santo por Dios, no por mérito propio<br>Levítico 21:6-8</h2>
                <p>En el Levítico, Dios establece que los sacerdotes deben ser considerados santos. La santidad que se les pide no es perfección moral absoluta, sino consagración: están apartados para Dios y su servicio:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Levítico 21:6-8</span>
                    <blockquote>«<strong class="s-hi">Estarán consagrados a su Dios y no profanarán el nombre de su Dios</strong>... <strong class="s-hi">Deberás considerarlo santo</strong>, porque él ofrece el alimento de tu Dios. <strong class="s-hi">Será santo para ti, porque yo, el Señor que te santifico, soy santo.</strong>»</blockquote>
                </div>
                <p>No dice «será santo porque se lo ha ganado»: dice <em>porque yo, el Señor que te santifico, soy santo</em>. Al pueblo se le manda considerarlo santo por Dios, no por los méritos del hombre. La fe no reposa en la virtud del ministro, sino en la fidelidad de Dios.</p>
                <h2>«Todos somos sacerdotes»: la objeción y su límite<br>1 Pedro 2:9 y Hebreos 5:4</h2>
                <p>San Pedro lo dice con claridad:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Pedro 2:9</span>
                    <blockquote>«Ustedes, en cambio, son <strong class="s-hi">una raza elegida, un sacerdocio real, una nación santa</strong>, un pueblo adquirido para anunciar las maravillas de aquel que los llamó de las tinieblas a su admirable luz:»</blockquote>
                </div>
                <p>El sacerdocio bautismal es real. Nadie lo niega. Pero en el Nuevo Testamento hay dos sacerdocios, no uno, y la misma carta a los Hebreos los distingue con precisión:</p>
                <!-- fuente: bj -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hebreos 5:4</span>
                    <blockquote>«<strong class="s-hi">Nadie se apropia este honor, sino que es llamado por Dios, como lo fue Aarón.</strong>»</blockquote>
                </div>
                <p>Hay un sacerdocio que se recibe en el bautismo, y hay otro que requiere llamado y consagración específica. Esto no es una invención tardía. Coré y su gente ya usaron contra Moisés y Aarón el mismo argumento:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Números 16:3</span>
                    <blockquote>«Se amotinaron contra Moisés y Aarón, y les dijeron: «¡Ustedes se han excedido en sus atribuciones! <strong class="s-hi">Toda la comunidad es sagrada, y el Señor está en medio de ella.</strong> ¿Por qué entonces ustedes se ponen por encima de la asamblea del Señor?».»</blockquote>
                </div>
                <p>Reclamaban el sacerdocio ministerial sin haber sido llamados, y Dios respondió abriendo la tierra bajo sus pies. En el Nuevo Testamento, los apóstoles ordenan presbíteros:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hechos 14:23</span>
                    <blockquote>«<strong class="s-hi">En cada comunidad establecieron presbíteros</strong>, y con oración y ayuno, los encomendaron al Señor en el que habían creído.»</blockquote>
                </div>
                <p>Pablo le ordena a Tito lo mismo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Tito 1:5</span>
                    <blockquote>«Te he dejado en Creta, para que terminaras de organizarlo todo y <strong class="s-hi">establecieras presbíteros en cada ciudad</strong> de acuerdo con mis instrucciones.»</blockquote>
                </div>
                <p>Y a Timoteo le recuerda cómo recibió el don:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Timoteo 4:14</span>
                    <blockquote>«No malogres el don espiritual que hay en ti y que te fue conferido mediante una intervención profética, por la <strong class="s-hi">imposición de las manos del presbiterio</strong>.»</blockquote>
                </div>
                <p>Presbiterio: un cuerpo constituido, con manos que se imponen y un don que se transmite. Esto es estructura, no metáfora.</p>
                <h2>Los Testigos de Jehová: un sacerdocio real para casi nadie<br>1 Pedro 2:9</h2>
                <p>Los Testigos de Jehová no usan esta objeción, y la razón los deja peor parados. Para ellos, 1 Pedro 2:9 no habla de todos los creyentes. La Atalaya lo explica así: <em>«Dirigiéndose a los cristianos ungidos, Pedro escribió»</em>, y esos ungidos son los 144.000 que, <em>«junto con Cristo, componen el sacerdocio real»</em> (La Atalaya, 15 de enero de 2012). Casi todos sus fieles quedan fuera de todo sacerdocio, el bautismal y el ordenado. Pedro le escribió a la Iglesia entera.</p>
                <h2>«No llames a nadie padre»: respuesta bíblica<br>Mateo 23:9</h2>
                <p>Los Testigos de Jehová lo enseñan por escrito: <em>«Jesús prohibió que se aplicara el término "padre" a los hombres como un título formal o religioso»</em> (Perspicacia para comprender las Escrituras, vol. 2, «Padre»). Se apoyan en este versículo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Mateo 23:9</span>
                    <blockquote>«<strong class="s-hi">A nadie en el mundo llamen "padre"</strong>, porque no tienen sino uno, el Padre celestial.»</blockquote>
                </div>
                <p>El que usa este versículo contra el sacerdocio católico tiene un problema: la misma Biblia lo contradice en varios pasajes. San Pablo se llama a sí mismo padre:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Corintios 4:15</span>
                    <blockquote>«Porque, aunque tengan diez mil preceptores en Cristo, no tienen muchos padres: <strong class="s-hi">soy yo el que los ha engendrado en Cristo Jesús</strong>, mediante la predicación de la Buena Noticia.»</blockquote>
                </div>
                <p>Esteban, ante quienes lo iban a apedrear, los llama así:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hechos 7:2</span>
                    <blockquote>«El respondió: «<strong class="s-hi">Hermanos y padres</strong>, escuchen: El Dios de la gloria se apareció a <strong class="s-hi">nuestro padre Abraham</strong>, cuando aún estaba en la Mesopotamia, antes de establecerse en Jarán,»</blockquote>
                </div>
                <p>Y Pablo llama padre a Abraham dos veces en un mismo versículo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Romanos 4:12</span>
                    <blockquote>«Y es también <strong class="s-hi">padre de los que se circuncidan</strong> pero no se contentan con esto, sino que siguen el mismo camino de la fe que tuvo <strong class="s-hi">nuestro padre Abraham</strong>, antes de ser circuncidado.»</blockquote>
                </div>
                <p>El propio Jesús habla del padre de cada uno (Mt 7:11, Lc 15:11-32).</p>
                <p>Mateo 23:9 no prohíbe el uso gramatical de la palabra: prohíbe la idolatría de la autoridad humana, colocar a un hombre en el lugar de Dios. El contexto lo dice: Jesús habla contra los fariseos que buscan honores y títulos para sí mismos.</p>
                <h2>El perdón de los pecados<br>Juan 20:22-23</h2>
                <p>Jesús resucitado se aparece a los apóstoles y sopla sobre ellos. Es el mismo gesto del Génesis:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Génesis 2:7</span>
                    <blockquote>«Entonces el Señor Dios modeló al hombre con arcilla del suelo y <strong class="s-hi">sopló en su nariz un aliento de vida</strong>. Así el hombre se convirtió en un ser viviente.»</blockquote>
                </div>
                <p>Ahora el que sopla es Cristo:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 20:22-23</span>
                    <blockquote>«Al decirles esto, sopló sobre ellos y añadió: <strong class="s-hi">«Reciban al Espíritu Santo. Los pecados serán perdonados a los que ustedes se los perdonen, y serán retenidos a los que ustedes se los retengan.»</strong>»</blockquote>
                </div>
                <p>El verbo que nadie cita es <em>retener</em>. ¿Cómo se retienen los pecados de alguien sin saber cuáles son? No se puede. Este versículo exige que el penitente declare sus pecados, porque sin oírlos no hay nada que perdonar ni que retener. Eso es la confesión sacramental, instituida por Cristo mismo.</p>
                <p>Los Testigos de Jehová se quedan con la mitad. A sus fieles les mandan confesar los pecados graves a los ancianos de la congregación, y admiten que esos ancianos <em>«no pueden absolver a nadie de los pecados que haya cometido contra Dios, pues ningún ser humano tiene dicha autoridad»</em> (La Atalaya, 1 de septiembre de 2010). Tienen la confesión y no tienen el perdón. Cristo dio las dos cosas juntas.</p>
                <h2>El altar y el sacrificio en el Nuevo Testamento<br>Hebreos 13:10 y Malaquías 1:11</h2>
                <p>Si no hay sacerdocio ni sacrificio en el Nuevo Testamento, ¿por qué la carta a los Hebreos dice esto?</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Hebreos 13:10</span>
                    <blockquote>«<strong class="s-hi">Nosotros tenemos un altar</strong> del que no tienen derecho a comer los ministros de la Antigua Alianza.»</blockquote>
                </div>
                <p>Y el profeta Malaquías, siglos antes de Cristo, anunció:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Malaquías 1:11</span>
                    <blockquote>«Pero desde la salida del sol hasta su ocaso, mi Nombre es grande entre las naciones y <strong class="s-hi">en todo lugar se presenta a mi Nombre un sacrificio de incienso y una ofrenda pura</strong>; porque mi Nombre es grande entre las naciones, dice el Señor de los ejércitos.»</blockquote>
                </div>
                <p>Un sacrificio y una ofrenda pura, en todo lugar de la tierra, anunciados por un profeta cuando el único altar legítimo estaba en Jerusalén. Los Padres de los primeros siglos reconocieron en esto la Eucaristía, el único sacrificio que cumple esa profecía. Y si hay sacrificio, hay quien lo ofrece.</p>
                <h2>Lo que dice la Escritura</h2>
                <ul>
                    <li>El sacerdote es un hombre como todos, que puede luchar y fallar.</li>
                    <li>Su autoridad y santidad provienen de Dios, no de sus méritos personales.</li>
                    <li>La validez de los sacramentos no depende de la santidad personal del ministro.</li>
                    <li>El sacerdocio ministerial ordenado está en el Nuevo Testamento: Hch 14:23, Tit 1:5, 1 Tim 4:14.</li>
                    <li>El perdón sacramental fue instituido por Cristo en Juan 20:22-23.</li>
                </ul>
                <p>Si se toma la Biblia entera, y no pasajes aislados, se encuentra sacerdocio ordenado, confesión, sacrificio y altar. Todo está en la Biblia.</p>`,
      nav: {
        prevTitle: "Transubstanciación: el misterio eucarístico",
        nextTitle: "Los santos y su intercesión"
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
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
      article: `<!--
REGLA: Todas las citas bíblicas en español provienen de "El Libro del Pueblo
de Dios" (traducción argentina, 1990), que es la Biblia en español publicada
libremente por la Santa Sede en vatican.va/archive/ESL0506/. Usa "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
Las cinco citas de este artículo fueron cotejadas contra esa fuente el 27-ago-2026.
-->
<p>Ante la Eucaristía la objeción cambia de forma, pero no de fondo. Los protestantes de todas las ramas, pentecostales, adventistas, Testigos de Jehová y mormones incluidos, repiten una de estas dos: <em>«El pan sigue siendo pan: se ve pan y sabe a pan.»</em> y <em>«Transubstanciación es una palabra inventada, filosofía griega; no está en la Biblia.»</em></p>
                <p>La segunda se responde en una línea: tampoco están las palabras «Trinidad» ni «Biblia», y nadie discute lo que nombran. Una palabra no crea el hecho: lo nombra. La primera es la que importa, y no se responde con filosofía sino con la Escritura, porque la Escritura ya contó lo que ocurre cuando Cristo dice que una cosa es otra. Cinco pasajes, en orden.</p>
                <h2>La Palabra no describe: hace<br>Juan 1:1-3</h2>
                <p>Antes de discutir qué puede pasarle al pan hay que saber qué es una palabra de Dios.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 1:1-3</span>
                    <blockquote>«Al principio existía <strong class="s-hi">la Palabra</strong>, y la Palabra estaba junto a Dios, y <strong class="s-hi">la Palabra era Dios</strong>. Al principio estaba junto a Dios. <strong class="s-hi">Todas las cosas fueron hechas por medio de la Palabra</strong> y sin ella no se hizo nada de todo lo que existe.»</blockquote>
                </div>
                <p>La Palabra de Dios no describe la realidad: la causa. Nada de lo que existe existía antes de que ella lo dijera, y todo lo que existe existe porque ella lo dijo. Ese es el punto de partida, y no es menor: preguntar cómo el pan puede dejar de ser pan es preguntar, con otras palabras, cómo la nada pudo dejar de ser nada. Ya ocurrió una vez. Ocurrió por lo mismo.</p>
                <h2>Caná: el agua cambió cuando le obedecieron<br>Juan 2:6-9</h2>
                <p>Hay un caso donde esa Palabra actúa delante de testigos y sobre una sustancia concreta.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 2:6-9</span>
                    <blockquote>«Había allí seis tinajas de piedra destinadas a los ritos de purificación de los judíos, que contenían unos cien litros cada una. Jesús dijo a los sirvientes: <strong class="s-hi">«Llenen de agua estas tinajas».</strong> Y las llenaron hasta el borde. «Saquen ahora, agregó Jesús, y lleven al encargado del banquete». <strong class="s-hi">Así lo hicieron.</strong> El encargado probó <strong class="s-hi">el agua cambiada en vino</strong> y como ignoraba su origen, <strong class="s-hi">aunque lo sabían los sirvientes que habían sacado el agua</strong>, llamó al esposo.»</blockquote>
                </div>
                <p>Conviene mirar dónde está el milagro. Jesús no toca el agua. No hace un gesto sobre las tinajas ni pronuncia una fórmula sobre ellas. Da una orden —«llenen», «saquen»— y el evangelista la despacha en tres palabras: «Así lo hicieron». Entre esa obediencia y la copa del encargado, el agua dejó de ser agua. Lo que cambió la sustancia fue una palabra cumplida.</p>
                <p>Y el evangelista se detiene a anotar un detalle que suele pasarse por alto: el encargado del banquete ignoraba el origen de aquel vino, y los sirvientes lo sabían. Los que habían hecho lo que Cristo mandó eran los únicos que sabían qué acababa de ocurrir. Los demás bebieron el milagro sin enterarse de que lo estaban bebiendo. En la Misa sucede exactamente lo mismo, y por la misma razón.</p>
                <h2>La misma boca, la misma fórmula<br>Juan 6:47-51</h2>
                <p>El que mandó llenar las tinajas dice después esto:</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ Juan 6:47-51</span>
                    <blockquote>«<strong class="s-hi">Les aseguro</strong> que el que cree, tiene Vida eterna. <strong class="s-hi">Yo soy el pan de Vida.</strong> Sus padres, en el desierto, comieron el maná y murieron. Pero este es el pan que desciende del cielo, para que aquel que lo coma no muera. Yo soy el pan vivo bajado del cielo. El que coma de este pan vivirá eternamente, y <strong class="s-hi">el pan que yo daré es mi carne</strong> para la Vida del mundo.»</blockquote>
                </div>
                <p>«Les aseguro» es la fórmula con la que Cristo encabeza lo que no admite discusión, y detrás no viene una comparación sino una identificación: «yo soy», no «yo represento». Si aquella palabra convirtió el agua en vino sin que nadie viese el momento, esta no necesita menos. Es la misma boca y es la misma clase de palabra.</p>
                <p>El desarrollo completo de Juan 6 —la objeción de la metáfora, los discípulos que se marchan y Jesús que no los retiene con una aclaración— está en el tema <a href="tema-la-eucaristia.html">La Eucaristía</a>.</p>
                <h2>Pablo no dice símbolo: dice comunión<br>1 Corintios 10:16</h2>
                <p>Pablo escribe antes de que se redacte el Evangelio de Juan, y llega al mismo lugar por su cuenta.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Corintios 10:16</span>
                    <blockquote>«La copa de bendición que bendecimos, ¿no es acaso <strong class="s-hi">comunión con la Sangre de Cristo</strong>? Y el pan que partimos, ¿no es <strong class="s-hi">comunión con el Cuerpo de Cristo</strong>?»</blockquote>
                </div>
                <p>Hay tres palabras que Pablo no usa: símbolo, representación, recuerdo. La que sí usa es <em>comunión</em> —en griego κοινωνία: participación real, contacto efectivo, tener parte en algo—. No se tiene parte en una metáfora. Y hay que mirar lo que nombra al final de cada pregunta: no dice que la copa sea comunión con el vino ni que el pan lo sea con el pan. Dice Sangre de Cristo y Cuerpo de Cristo.</p>
                <h2>Lo que recibí del Señor — y por eso hay muertos<br>1 Corintios 11:23-30</h2>
                <p>El pasaje decisivo es el que sigue, y conviene leerlo entero antes de comentarlo.</p>
                <!-- fuente: vaticano -->
                <div class="scripture-block">
                    <span class="scripture-ref">✝︎ 1 Corintios 11:23-30</span>
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
        nextTitle: "El Sacerdocio en la Iglesia Católica"
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
        otherLangs: "Para ediciones en otros idiomas, escribir al autor por el <a href='/#contacto'>formulario de contacto</a>.",
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
      // Fe y Razón, la ficha nueva (8-oct-2026). Cita de 1 Pedro 3:15: El Libro del Pueblo de Dios (vatican.va/archive/ESL0506), cotejada el 8-oct-2026.
      sec4b: {
        badge: "Nuevo libro",
        title: "Fe y Razón<span class='rec-book-subtitle'>Siempre aparejados para responder</span>",
        epigraph: "«Estén siempre dispuestos a defenderse delante de cualquiera que les pida razón de la esperanza que ustedes tienen.»",
        epigraphRef: "1 Pedro 3:15",
        desc: "Si Dios habló, ¿dónde quedó lo que dijo y quién lo custodia? Este libro responde con los documentos en la mano: la Biblia que traen a la puerta de casa, las confesiones de fe de cada grupo y sus propias páginas oficiales. Protestantes, adventistas, testigos de Jehová, mormones y cismáticos en general, uno por uno. Y como la Escritura no se explica sola, no la interpreta por su cuenta: la lee con los Padres de la Iglesia, que la recibieron de los apóstoles, y con el Magisterio, que la custodia desde entonces.",
        close: "Sigue el camino que La puerta falsa dejó en el umbral.",
        factFormats: "Tapa blanda a color y tapa dura en color premium",
        soonLabel: "Muy pronto en Amazon",
        sameAuthor: "Del mismo autor",
        coverAlt: "Portada de Fe y Razón, de M. Gabriel Castiglia"
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
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
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
        olivera: { desc: "Historiador y apologeta agustino. Aborda el racionalismo, las sectas y los errores modernos con rigor." },
        montfort: { tag: "Francia · hacia 1712", title: "Tratado de la Verdadera Devoción a la Santísima Virgen", author: "San Luis María Grignion de Montfort", desc: "La obra clásica sobre la consagración a Jesús por María. Dos ediciones completas en PDF.", ed1: "Edición monfortiana (PDF) →", url1: "https://www.montfort.org/content/uploads/pdf/PDF_ES_26_1.pdf", ed2: "Caballeros de la Virgen (PDF) →" }
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
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>`,
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
                <p>El responsable de este sitio es <strong>M. Gabriel Castiglia</strong>. Para cualquier consulta sobre tus datos —incluido pedir que se borre un mensaje que hayas enviado— escribí por el <a href="/#contacto">formulario de contacto</a>.</p>`
    },
    "sobre-este-sitio": {
      pageTitle: "Sobre este sitio | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">El sitio</span>
            </div>
            <h1>Sobre este sitio</h1>
            <p>Un recorrido desde las filosofías que no aguantaron hasta la Iglesia que sí aguanta.</p>
            <a href="temas.html" class="btn-outline-white">Volver a Temas</a>
            <a href="privacidad.html" class="btn-outline-white btn-hero-extra">Privacidad</a>`,
      article: `<p>Llegué al catolicismo después de un recorrido largo. Leí de todo: ocultismo y esoterismo, las llamadas tablas esmeralda, las filosofías orientales, Nietzsche, los epicúreos. Probé respuestas en todas partes y no encontraba ninguna que se sostuviera. El estoicismo fue lo último que me ofreció algo serio antes de Cristo — Séneca, Marco Aurelio, Epicteto me enseñaron a mirar la verdad sin pestañear. Y mirando la verdad sin pestañear terminé donde no esperaba: ante la Iglesia Católica.</p>

            <p>Este sitio es para vos si estás en alguno de estos lugares: dudás de la fe que recibiste y no sabés a quién preguntarle; estás buscando entre tradiciones y nadie te da una respuesta que te aguante el peso; te acabás de convertir y te sentís solo, sin guía, asediado por todos lados. Conozco ese lugar. Estuve ahí. Y sé lo que hay alrededor: católicos tradicionales que a veces dan por supuesto lo que tendrían que demostrar y no saben explicarlo; y peor todavía, católicos tibios — los que van a misa por costumbre, no saben qué creen, no defienden nada, y son los primeros en encogerse de hombros cuando alguien ataca la fe delante de ellos.</p>

            <div class="scripture-block">
                <span class="scripture-ref">✝︎ Apocalipsis 3,15-16</span>
                <blockquote>«Conozco tus obras: no eres ni frío ni caliente. ¡Ojalá fueras frío o caliente! Ahora bien, puesto que eres tibio, y no frío ni caliente, te vomitaré de mi boca.»</blockquote>
            </div>

            <p>Un tibio no defiende nada, no explica nada, no convence a nadie. Al menos el que cree algo equivocado tiene algo que ofrecer.</p>

            <p>Y los protestantes aparecen. Aparecen siempre. Testigos de Jehová, pentecostales, adventistas, mormones, cada secta con su versión recortada de la Escritura y su certeza prestada. Acá vas a encontrar respuesta a esas sectas, en su propio terreno, con su propia arma: la Biblia. Los libros deuterocanónicos, que ellos arrancaron de sus traducciones sin autoridad para hacerlo, son Palabra de Dios tanto como los demás. Pero cuando les respondo no los cito: uso solamente los libros que ellos mismos aceptan, para que nadie pueda salir con que «eso no está en la Biblia» o que «eso lo agregaron los católicos». Con la Biblia bien leída, los Padres de la Iglesia, el Magisterio, el Catecismo, y la razón que Dios nos dio como regalo.</p>

            <p>Mi inspiración principal en este trabajo es el Padre Luis Toro. Lo que él hace hablando, yo intento hacerlo escribiendo, en los idiomas y para los lectores que él no alcanza.</p>

            <p>No escribo para ganar discusiones. Escribo para que el que está dudando solo en la noche tenga algo serio a mano cuando le toque defender su fe — o cuando le toque encontrarla por primera vez.</p>

            <p class="about-signature">M. Gabriel Castiglia</p>`
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
      { ref: "2 Pe 1, 20",  text: "nadie puede interpretar por cuenta propia una profecía de la Escritura." },
      { ref: "Sant 2, 17", text: "Lo mismo pasa con la fe: si no va acompañada de las obras, está completamente muerta." },
      { ref: "Sant 2, 20", text: "¿Quieres convencerte, hombre insensato, de que la fe sin obras es estéril?" }
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
    text: "Fé y Razón. Ad maiorem Dei gloriam."
  }
};
// Se expone en window para que el cargador por idioma pueda tomarlo por nombre.
// El `const` de arriba queda igual: es lo que leen los verificadores de _TRABAJO.
if (typeof window !== 'undefined') window.translationsES = translationsES;
