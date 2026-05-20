/**
 * Diccionario de traducciones: ESPAÑOL
 * Contiene textos de la UI principal y el contenido HTML de los artículos.
 */

const translationsES = {
  logo: "Fé y Razón",
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
    subtitle: "Argumentos sólidos para profundizar, comprender y defender la fe&nbsp;católica",

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
    date: "Próximamente",
    title: "Transubstanciación",
    excerpt: "El cambio sustancial del pan y vino en el Cuerpo y Sangre de Cristo durante la Misa.",
    time: "9 min lectura",
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
    cookieNotice: "Al enviar este formulario, aceptas que tus datos sean procesados por servicios de terceros para el funcionamiento del sistema.",
    success: {
      title: "Mensaje recibido",
      desc: "Gracias por escribirnos. Te responderemos a la brevedad. Ad maiorem Dei gloriam."
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
      article: `<p>El purgatorio es la etapa en la que las almas se purifican antes de entrar en la presencia plena de Dios. No es castigo final, sino un proceso de amor sanador.</p>
                <h2>¿Qué significa purificación?</h2>
                <p>La purificación quita las consecuencias del pecado venial y sana las heridas de la libertad. Es la preparación necesaria para la contemplación divina.</p>
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
      article: `<p>¿Es la Eucaristía un símbolo o es real? La respuesta está en San Juan 6. No hay texto más claro, más directo ni más desafiante en todo el Evangelio sobre este tema. Y Jesús no cede. Pero Juan 6 no es el único testigo: Pablo lo confirma de manera independiente, y los primeros discípulos de los apóstoles lo entendieron sin ambigüedad. Hay tres líneas de evidencia. Ninguna tiene respuesta en la interpretación simbólica.</p>
                <h2>Yo soy el pan de vida<br>Juan 6:47-51</h2>
                <p>Jesús no dice «represento el pan de vida» ni «soy como el pan de vida». Dice:</p>
                <blockquote>«Les aseguro que el que cree tiene vida eterna. <strong>Yo soy el pan de vida.</strong> Sus padres comieron el maná en el desierto, y murieron. Este es el pan que baja del cielo, para que quien lo coma no muera. Yo soy el pan vivo bajado del cielo; y el pan que yo daré es <strong>mi carne</strong>, para la vida del mundo.» — Juan 6:47-51</blockquote>
                <p>El verbo «soy» no indica representación: indica identidad. Y lo que viene después no deja lugar a interpretaciones simbólicas:</p>
                <blockquote>«Les aseguro que <strong>si no comen la carne del Hijo del Hombre y no beben su sangre, no tienen vida en ustedes</strong>. El que come mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitaré en el último día. Porque <strong>mi carne es verdadera comida y mi sangre es verdadera bebida.</strong>» — Juan 6:53-55</blockquote>
                <p>No dice «si no recuerdan» ni «si no contemplan». Dice <em>comer</em> y <em>beber</em>. Y lo repite con distintas palabras para que no haya confusión: <em>verdadera comida</em> y <em>verdadera bebida</em>. El adjetivo «verdadera» excluye expresamente lo simbólico.</p>
                <h2>La objeción de la metáfora<br>Juan 15:1</h2>
                <p>La respuesta habitual es: «Es una metáfora, como cuando dice "Yo soy la vid" o "Yo soy la puerta".» Hay que ir a la Biblia. Cuando Jesús dijo <em>«Yo soy la vid verdadera»</em> (Jn 15:1), nadie se fue. Cuando dijo «coman mi carne», muchos se fueron. La diferencia es decisiva:</p>
                <blockquote>«Al oír esto, muchos de sus discípulos dijeron: <strong>«Este mensaje es muy difícil. ¿Quién puede aceptarlo?»</strong>» — Juan 6:60</blockquote>
                <p>Jesús no los corrige diciendo «malentendieron, era una metáfora». Los deja partir. Esa es la prueba más contundente: si fuera simbólico, el buen pastor los hubiera retenido con una aclaración. No lo hace.</p>
                <h2>Esto genera división<br>Juan 6:66-67</h2>
                <blockquote>«Desde ese momento, muchos de sus discípulos se echaron atrás y dejaron de acompañarlo. Entonces Jesús dijo a los Doce: <strong>«¿También ustedes quieren irse?»</strong>» — Juan 6:66-67</blockquote>
                <p>No cede. No suaviza. No negocia el significado. Jesús es el buen pastor que no dejaría que ninguna oveja se perdiera por un malentendido —pero en esto es inflexible.</p>
                <h2>No hay interpretación posible<br>Juan 6:68</h2>
                <blockquote>Simón Pedro le respondió: <strong>«Señor, ¿a quién vamos a ir? Tú tienes palabras de vida eterna.»</strong> — Juan 6:68</blockquote>
                <p>Pedro no dice que entiende todo. Dice que confía. Eso es la fe: no tener todas las respuestas, sino saber en Quién se cree.</p>
                <ul>
                    <li>«Yo soy» — no representa, es.</li>
                    <li>«Verdadera comida, verdadera bebida» — no simbólica.</li>
                    <li>Jesús no corrige a quienes lo entendieron literalmente: los deja ir.</li>
                    <li>Pedro no lo entiende del todo, pero confía. Eso es la fe.</li>
                </ul>
                <h2>Pablo lo confirma — testigo independiente<br>1 Corintios 10:16 y 11:27-29</h2>
                <p>Pablo escribe su primera carta a los Corintios antes de que se redacte el Evangelio de Juan. Son dos testigos completamente independientes. Pablo dice:</p>
                <blockquote>«<strong>El cáliz de bendición que bendecimos, ¿no es la comunión de la sangre de Cristo? El pan que partimos, ¿no es la comunión del cuerpo de Cristo?</strong>» — 1 Corintios 10:16</blockquote>
                <p>No dice «recuerdo». Dice <em>comunión</em> —participación real, contacto efectivo. Y luego:</p>
                <blockquote>«<strong>Así pues, quien coma el pan o beba el cáliz del Señor indignamente, será reo del cuerpo y de la sangre del Señor.</strong> Que cada cual se examine, pues, a sí mismo, y coma así el pan y beba el cáliz. Porque <strong>quien come y bebe sin discernir el Cuerpo</strong>, come y bebe su propia condenación.» — 1 Corintios 11:27-29</blockquote>
                <p>La palabra griega ἔνοχος —reo— implica culpabilidad por un crimen real. No se puede ser reo de atentar contra un símbolo. Pablo dice además: «sin discernir el Cuerpo». Si fuera solo pan, ¿qué Cuerpo habría que discernir?</p>
                <h2>Los primeros cristianos — testigos formados por los apóstoles</h2>
                <p>Ignacio de Antioquía fue discípulo directo del apóstol Juan. Murió mártir alrededor del año 107 d.C. Escribió en su Carta a los Esmirniotas:</p>
                <blockquote>«<strong>Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo</strong>, la que padeció por nuestros pecados, la que el Padre resucitó por su bondad.» — Ignacio de Antioquía, Carta a los Esmirniotas 6-7 (~107 d.C.)</blockquote>
                <p>Justino Mártir escribió alrededor del año 150 d.C., a setenta años de la muerte de los apóstoles:</p>
                <blockquote>«<strong>No recibimos esto como pan común ni como bebida común</strong>... así también se nos ha enseñado que ese alimento eucaristizado es <strong>la carne y la sangre del Jesús encarnado.</strong>» — Justino Mártir, Primera Apología 66 (~150 d.C.)</blockquote>
                <p>Si los primeros cristianos —formados por los apóstoles mismos— creyeron en la Presencia Real, la pregunta que merece respuesta honesta es: ¿quién cambió eso? ¿Cuándo? ¿Con qué autoridad?</p>
                <p>Para entender cómo esta realidad se hace presente en la Misa, continúa en el tema <a href="tema-transubstanciacion.html">Transubstanciación</a>, desde 1 Corintios 10:16. Y para entender por qué aceptamos estas palabras como verdad de Dios, ve al tema <a href="tema-por-que-creemos.html">¿Por qué creemos?</a></p>`,
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
      article: `<p>La nueva ley es la ley del Evangelio, centrada en el mandamiento del amor. Cristo no elimina la Ley antigua, sino que la lleva a su plenitud y la hace accesible al corazón humano.</p>
                <h2>Amor como criterio</h2>
                <p>Jesús resume la Ley en amar a Dios y al prójimo. Esta nueva norma no es una carga, sino una libertad profunda que transforma nuestras acciones desde el interior.</p>
                <blockquote>"Amarás al Señor tu Dios con todo tu corazón y a tu prójimo como a ti mismo."</blockquote>
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
      article: `<p>La primacía de Pedro es una enseñanza esencial para entender la estructura de la Iglesia. Jesús le confió a Pedro un papel único como pastor y garante de la unidad apostólica.</p>
                <h2>Fundamento bíblico</h2>
                <p>En el evangelio, Cristo declara a Pedro como roca y le encarga apacentar sus ovejas. Este mandato refleja una autoridad especial en el liderazgo de la comunidad cristiana.</p>
                <blockquote>"Tú eres Pedro, y sobre esta roca edificaré mi Iglesia."</blockquote>
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
      article: `<p>La Trinidad es el misterio central de la fe cristiana. Dios es un solo ser en tres Personas: Padre, Hijo y Espíritu Santo, en perfecta unidad y comunión.</p>
                <h2>Unidad y distinción</h2>
                <p>Cada Persona divina es plenamente Dios, pero no son tres dioses distintos. El cristianismo confiesa un único Dios en una relación eterna de amor.</p>
                <blockquote>"En el nombre del Padre, del Hijo y del Espíritu Santo."</blockquote>
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
            <p>La Escritura misma los nombra: Abel, Enoc, Noé, Abrahán, Moisés, los profetas. Hoy demostraremos, pasaje a pasaje, por qué los santos nos pueden escuchar e interceder.</p>
            <div class="article-meta">
                <span>12 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<p>Hay una objeción que repiten sin cansarse: <em>«Los muertos no pueden escucharte.»</em> A primera vista suena razonable. Pero la Escritura dice otra cosa. No en una cita aislada. En siete pasajes distintos, desde Pablo hasta el Apocalipsis. Vamos uno por uno.</p>

            <h2>El conocimiento se perfecciona tras la muerte</h2>

            <div class="scripture-block">
                <span class="scripture-ref">✝ 1 Corintios 13:9-13</span>
                <blockquote>«Porque <strong class="s-hi">ahora conocemos de modo imperfecto</strong> y profetizamos de modo imperfecto; pero cuando llegue lo que es perfecto, lo imperfecto desaparecerá. Cuando yo era niño, hablaba como niño, pensaba como niño, razonaba como niño; al hacerme hombre, dejé atrás las cosas de niño. Ahora vemos de manera confusa, como en un espejo; entonces veremos cara a cara. Ahora conozco de modo imperfecto; pero entonces <strong class="s-hi">conoceré como Dios mismo me conoce.</strong> En conclusión, ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de todos es el amor.»</blockquote>
            </div>

            <p>Pablo enseña que en esta vida conocemos de manera imperfecta. Cuando llegue lo perfecto —y eso ocurre al morir y ver a Dios cara a cara— conoceremos tal como Dios nos conoció a nosotros: perfectamente, sin velo, sin límite. Si los santos conocen así, nada les es oculto. Pueden escuchar. Pueden entender nuestras súplicas.</p>

            <h2>Tras la muerte, veremos a Dios tal cual es</h2>

            <div class="scripture-block">
                <span class="scripture-ref">✝ 1 Juan 3:2</span>
                <blockquote>«Queridos, ahora somos hijos de Dios, aunque todavía no se ha manifestado lo que seremos. Pero sabemos que, cuando se manifieste, <strong class="s-hi">seremos semejantes a él, porque lo veremos tal cual es.</strong>»</blockquote>
            </div>

            <p>San Juan confirma lo que dice Pablo. Ahora, en esta vida, no vemos: creemos. Tras la muerte, veremos a Dios tal cual es. Los santos ya han cruzado ese umbral. Ya ven. Por eso no están en la oscuridad del llamado «sueño del alma» que enseñan algunos: están en la luz plena.</p>

            <h2>Tras la muerte viene el cielo</h2>

            <div class="scripture-block">
                <span class="scripture-ref">✝ Juan 14:1-4</span>
                <blockquote>«No se angustie el corazón. Crean en Dios y crean también en mí. En la casa de mi Padre hay muchos lugares. Si no fuera así, ¿les habría dicho que voy a prepararles un lugar? Cuando me haya ido y les haya preparado un lugar, volveré y los llevaré conmigo, para que donde yo estoy estén también ustedes. Ya conocen el camino hacia el lugar adonde voy.»</blockquote>
            </div>

            <p>Jesús no deja lugar a dudas: hay un destino tras la muerte, y ese destino es estar con él. El cielo no es una metáfora: es el lugar donde Jesús fue a prepararnos sitio. Y los santos que vivieron en la fe ya están allí, con él, donde él prometió llevarlos.</p>

            <h2>Los santos: la gran nube de testigos</h2>

            <div class="scripture-block">
                <span class="scripture-ref">✝ Hebreos 11:1 — 12:3</span>
                <blockquote>«<strong class="s-hi">La fe es el fundamento de lo que se espera y la prueba de lo que no se ve. Por ella obtuvieron nuestros antepasados la aprobación de Dios.</strong><br><br>
Por la fe comprendemos que el universo fue formado por la Palabra de Dios, de modo que lo que se ve ha surgido de lo que no se veía.<br><br>
Por la fe, <strong class="s-name">Abel</strong> ofreció a Dios un sacrificio mejor que el de Caín; por ella obtuvo el testimonio de ser justo, y Dios dio testimonio de sus ofrendas. Y por ella, aunque muerto, sigue hablando todavía. Por la fe, <strong class="s-name">Enoc</strong> fue trasladado sin pasar por la muerte, y no fue hallado, porque Dios lo había trasladado; pues antes del traslado obtuvo el testimonio de haber agradado a Dios. Sin fe es imposible agradarle; porque el que se acerca a Dios ha de creer que existe y que recompensa a los que le buscan. Por la fe, <strong class="s-name">Noé</strong>, advertido de lo que iba a suceder y que todavía no se veía, obedeció y construyó un arca para salvar a su familia; por esta fe condenó al mundo y se hizo heredero de la justicia que viene de la fe.<br><br>
Por la fe, <strong class="s-name">Abrahán</strong>, al ser llamado, obedeció y salió para el lugar que había de recibir en herencia, y salió sin saber adónde iba. Por la fe habitó como extranjero en la tierra prometida, morando en tiendas de campaña, lo mismo que <strong class="s-name">Isaac y Jacob</strong>, coherederos de la misma promesa. Porque esperaba la ciudad de sólidos cimientos cuyo arquitecto y constructor es Dios. Por la fe, también <strong class="s-name">Sara</strong> recibió la capacidad de concebir, incluso fuera del tiempo para ello, porque consideró fiel al que hacía la promesa. Por eso de uno solo, ya con el cuerpo como muerto, nació una descendencia tan numerosa como las estrellas del cielo, e incontable como la arena a la orilla del mar.<br><br>
Todos estos murieron en la fe sin haber recibido lo prometido; pero lo contemplaron y lo saludaron de lejos, confesando que eran extranjeros y peregrinos sobre la tierra. Quienes hablan así muestran claramente que están en busca de una patria. Y si pensaran en la patria de la que habían salido, habrían tenido oportunidad de volver a ella. Pero <strong class="s-hi">aspiraban a una patria mejor, la del cielo.</strong> Por eso Dios no se avergüenza de llamarse su Dios, porque les ha preparado una ciudad.<br><br>
Por la fe, Abrahán ofreció a Isaac cuando fue puesto a prueba, y ofrecía a su unigénito quien había recibido las promesas. A él le había dicho: «Por Isaac serás nombrado tu descendencia». Pensaba que Dios tenía poder hasta para resucitar a los muertos. Por eso le fue devuelto, y esto era ya una figura. Por la fe, también Isaac bendijo a Jacob y Esaú en orden al futuro. Por la fe, Jacob, al morir, bendijo a cada uno de los hijos de José, y adoró apoyándose en la extremidad de su bastón. Por la fe, José, al morir, recordó la partida de los hijos de Israel, y dio instrucciones sobre sus huesos.<br><br>
Por la fe, <strong class="s-name">Moisés</strong>, al nacer, fue escondido tres meses por sus padres, porque veían que el niño era hermoso, y no temieron el edicto del faraón. Por la fe, <strong class="s-name">Moisés</strong>, ya adulto, rechazó ser llamado hijo de la hija del faraón, prefiriendo ser maltratado junto con el pueblo de Dios antes que gozar de los placeres pasajeros del pecado. Consideró que el oprobio de Cristo era una riqueza mayor que los tesoros de Egipto, porque tenía puesta la mirada en la recompensa. Por la fe, abandonó Egipto sin temer la ira del rey; se mantuvo firme como si viese al Invisible. Por la fe, celebró la Pascua y la aspersión de sangre para que el Ángel Exterminador no tocase a los primogénitos. Por la fe, cruzaron el mar Rojo como si fuera tierra firme; los egipcios, al intentarlo, fueron engullidos. Por la fe, cayeron las murallas de Jericó, después de haber sido rodeadas siete días. Por la fe, Rahab la prostituta no pereció con los desobedientes, porque acogió en paz a los espías.<br><br>
¿Y qué más voy a decir? Me faltaría tiempo para hablar de <strong class="s-name">Gedeón, Barac, Sansón, Jefté, David, Samuel y los profetas,</strong> que por la fe conquistaron reinos, practicaron la justicia, alcanzaron promesas, cerraron las fauces de leones, apagaron la fuerza del fuego, escaparon del filo de la espada, se fortalecieron en la debilidad, se mostraron valientes en la guerra, pusieron en fuga a ejércitos extranjeros. Unas mujeres recobraron a sus muertos por resurrección. Otros, en cambio, fueron torturados y no aceptaron la liberación para alcanzar una resurrección mejor. Otros experimentaron burlas y azotes, e incluso cadenas y cárceles. Fueron lapidados, aserrados, muertos a espada; anduvieron errantes cubiertos con pieles de oveja o de cabra, necesitados, oprimidos, maltratados —de los que el mundo no era digno—, errando por desiertos, montañas, cuevas y grietas de la tierra. Y todos estos, aunque obtuvieron buen testimonio por su fe, no alcanzaron lo prometido, porque Dios había dispuesto algo mejor para nosotros, de modo que no llegasen a la perfección sin nosotros.<br><br>
Por tanto, <strong class="s-hi">también nosotros,</strong> rodeados de una nube tan ingente de testigos, sacudamos todo lastre y el pecado que nos asedia, y corramos con constancia la carrera que tenemos por delante, con la mirada puesta en Jesús, el que inicia y consuma la fe; el cual, en vez de la alegría que se le proponía, soportó la cruz sin miedo a la ignominia, y está sentado a la diestra del trono de Dios. Pensad en aquel que soportó tal contradicción de parte de los pecadores, para que <strong class="s-hi">no os canséis ni os dejéis vencer por el desánimo.</strong>»</blockquote>
            </div>

            <p>Esta es la respuesta a «¿quiénes son los santos?» La Escritura los nombra uno por uno. No es invención de la Iglesia. Son los héroes de la fe que vivieron, sufrieron y murieron buscando una patria que no es de este mundo: la del cielo. Y a su ejemplo, el autor de Hebreos nos invita: «también nosotros». Esa inmensa nube de testigos nos rodea.</p>

            <h2>El alma no duerme — Cristo predicó a los espíritus</h2>

            <div class="scripture-block">
                <span class="scripture-ref">✝ 1 Pedro 3:18-22</span>
                <blockquote>«Porque también <strong class="s-hi">Cristo murió</strong> una sola vez por los pecados, el justo por los injustos, para llevarnos a Dios; sufrió la muerte en la carne, <strong class="s-hi">pero fue devuelto a la vida por el Espíritu, el cual le impulsó a proclamar el mensaje a los espíritus encarcelados,</strong> que en otro tiempo se habían negado a creer, cuando Dios esperaba con paciencia en los días de Noé, mientras se construía el arca. En ella se salvaron pocos —ocho personas— a través del agua. Aquella agua prefiguraba el bautismo que <strong class="s-hi">ahora los salva</strong> también a ustedes; no consiste en limpiar la suciedad del cuerpo, sino en la petición a Dios de una conciencia limpia, por la resurrección de Jesucristo. Este subió al cielo y está a la derecha de Dios, a quien se sometieron los ángeles, los poderes y las potestades.»</blockquote>
            </div>

            <p>Aquí cae el argumento del «sueño del alma». Cristo, tras morir, no quedó inconsciente esperando el juicio final: fue a proclamar el mensaje a los espíritus encarcelados. El alma sigue activa después de la muerte del cuerpo. Si la de Cristo lo estuvo, la de los santos también. La muerte es solo del cuerpo.</p>

            <h2>Los santos están en la Jerusalén celestial</h2>

            <div class="scripture-block">
                <span class="scripture-ref">✝ Hebreos 12:22-24</span>
                <blockquote>«Sino que os habéis acercado al monte Sión, <strong class="s-hi">a la ciudad del Dios vivo, que es la Jerusalén celestial,</strong> a la asamblea festiva de innumerables ángeles, a la reunión de los primogénitos inscritos en el cielo, a Dios juez de todos, <strong class="s-hi">a los espíritus de los que viviendo rectamente han logrado la perfección,</strong> y a Jesús, mediador de una nueva alianza, y a la sangre rociada que habla con más elocuencia que la de Abel.»</blockquote>
            </div>

            <p>Los santos fallecidos no flotan en ningún limbo esperando el juicio. Están en «la ciudad del Dios vivo». Y su condición no es la de los vivos: son espíritus que «viviendo rectamente han logrado la perfección». Perfectos. Cerca de Dios. Sin barrera. Sin distancia.</p>

            <h2>Los santos llevan nuestras oraciones ante el trono</h2>

            <div class="scripture-block">
                <span class="scripture-ref">✝ Apocalipsis 5:8</span>
                <blockquote>«Cuando lo tomó, los cuatro seres vivientes y los veinticuatro ancianos se postraron ante el Cordero; cada uno tenía un arpa y <strong class="s-hi">copas de oro llenas de incienso aromático, que son las oraciones de los santos.</strong>»</blockquote>
            </div>

            <p>San Juan lo ve en visión: en el cielo, delante del Cordero, los seres celestiales llevan ante el trono copas de incienso que <em>son</em> las oraciones de los santos. Las oraciones de los fieles de la tierra llegan al altar del cielo a través de los intercesores que allí se encuentran. Los santos no solo escuchan: presentan.</p>

            <h2>Conclusión</h2>

            <p>Los santos son los que vivieron en la fe —como Abel, Enoc, Noé, Abrahán, Moisés, los profetas—, los que tras la muerte están en la ciudad del Dios vivo, la Jerusalén celestial. Allí conocen perfectamente, como Dios los conoció en vida. Allí ven a Dios tal cual es. Allí no hay limitación ni distancia.</p>

            <p>Y lo que hace la Iglesia al invocarlos es exactamente lo que muestra el Apocalipsis: llevan al altar del cielo nuestras oraciones, presentándolas ante el trono del Cordero. No adoramos a los santos. Les pedimos que intercedan por nosotros ante Dios, como pedimos a cualquier hermano que rece por nosotros. La diferencia es que ellos están en el cielo y conocen como Dios nos conoce: perfectamente. Por eso nos ven, nos escuchan, e interceden.</p>`,
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
      article: `<p>¿Por qué creemos? No por tradición ciega ni por costumbre familiar. Creemos porque la Palabra de Dios fue atestiguada, transmitida fielmente y continúa siendo verdad. San Lucas lo dice desde el principio: investigó todo desde el comienzo para que conozcamos la verdad (Lc 1:1-4). Eso es lo que haremos aquí.</p>
                <h2>La Palabra fue atestiguada<br>Lucas 1:1-4 y Juan 11:25-27</h2>
                <p>Lucas nos dice que muchos se propusieron relatar los hechos cumplidos entre nosotros, <em>«tal como nos los transmitieron quienes desde el principio fueron testigos oculares y servidores de la Palabra»</em> (Lc 1:2). No son leyendas: son testimonios. Lo que Jesús dijo, vivió y enseñó fue visto y transmitido por testigos reales.</p>
                <p>Marta, ante la tumba de su hermano, lo reconoce sin dudarlo: <em>«Sí, Señor, yo creo que tú eres el Mesías, el Hijo de Dios, el que tenía que venir al mundo»</em> (Jn 11:27). La fe no es irracional: es la respuesta a una revelación verificada por quienes la vivieron.</p>
                <blockquote>«Para que conozcas la solidez de las enseñanzas que has recibido.» — Lucas 1:4</blockquote>
                <h2>Hay que leer la Palabra de Dios<br>Lucas 8:5-8, 8:11-12 y Salmo 119</h2>
                <p>La parábola del sembrador lo deja claro: <em>«La semilla es la Palabra de Dios»</em> (Lc 8:11). El diablo sabe que la Palabra de Dios hace brotar la salvación, por eso la arrebata, la ahoga y la aplasta (Lc 8:12). No es casualidad que el enemigo luche contra su lectura.</p>
                <p>El Salmo 119:72 afirma que la ley de Dios vale más que miles de monedas de oro y plata. Y si alguien pregunta qué gana leyendo la Biblia, San Pablo responde: <em>«Desde tu niñez conoces las Sagradas Escrituras, que pueden darte la sabiduría que lleva a la salvación mediante la fe en Cristo Jesús»</em> (2 Tim 3:15).</p>
                <p>El Salmo 119:103-105 da la imagen más hermosa: <em>«¡Qué dulces son a mi paladar tus palabras! Más que la miel en mi boca... Tu palabra es una lámpara para mis pies, una luz en mi camino.»</em> Quien no lee la Palabra de Dios camina en la oscuridad.</p>
                <blockquote>«Tu palabra es una lámpara para mis pies, una luz en mi camino.» — Salmo 119:105</blockquote>
                <h2>La Palabra es de Dios<br>2 Pedro 1:19 y Juan 17:17</h2>
                <p>Esto no es opinión humana. San Pedro lo afirma: la palabra de los profetas es la palabra de Dios (2 Pe 1:19). Y el mismo Jesús, en su oración al Padre, lo confirma: <em>«Tu palabra es verdad»</em> (Jn 17:17). Y Jesús mismo lo dijo: <em>«Dichosos los que escuchan la Palabra de Dios y la cumplen»</em> (Lc 11:28). No dijo los que la conocen o los que la citan; dijo los que la <strong>cumplen</strong>.</p>
                <h2>La fe es hacer lo que Él dice<br>Lucas 5:5 y Juan 2:5</h2>
                <p>Pedro había pescado toda la noche y no había sacado nada. Por su experiencia humana, echar las redes de día no tenía ningún sentido. Pero dijo algo que resume toda la fe: <em>«Maestro, hemos trabajado toda la noche y no hemos pescado nada; pero, porque tú lo dices, echaré las redes»</em> (Lc 5:5). Y por eso, precisamente, Jesús lo hizo pescador de hombres, a él y no a los demás (Lc 5:10).</p>
                <p>En Caná, la Virgen María da la instrucción definitiva a los sirvientes: <em>«Hagan lo que él les diga»</em> (Jn 2:5). Los cántaros se llenaron de agua, pero se convirtieron en vino cuando los sirvientes cumplieron sus órdenes hasta el final (Jn 2:8). La fe no es solo creer: es cumplir. Véase el tema de la Eucaristía desde Mateo 8:5 y el de la Transubstanciación desde 1 Corintios 10:16.</p>
                <blockquote>«Porque tú lo dices, echaré las redes.» — Lucas 5:5</blockquote>
                <h2>¿De dónde viene tu Biblia?<br>El sola scriptura y sus problemas</h2>
                <p>Hay quienes dicen: «Solo la Biblia es la regla de fe. La Biblia es suficiente.» Bien. Vamos a la Biblia.</p>
                <blockquote>«<strong>Toda Escritura es inspirada por Dios y útil para enseñar, para reprender, para corregir, para instruir en la justicia</strong>, a fin de que el hombre de Dios esté perfectamente equipado para toda obra buena.» — 2 Timoteo 3:16-17</blockquote>
                <p>La palabra que usa Pablo es «útil» —en griego ὠφέλιμος— no «exclusiva» ni «única regla de fe». El versículo nunca dice que la Escritura sola es suficiente para todo. Y hay algo más importante: si el único criterio de verdad fuera «lo que dice la Biblia», entonces el sola scriptura tendría que estar en la Biblia para ser válido. Y no está. El argumento se destruye a sí mismo con su propio criterio.</p>
                <h2>¿Quién fijó el canon?<br>El problema que el sola scriptura no puede responder</h2>
                <p>El Nuevo Testamento no llegó con un índice. Durante los primeros siglos, distintas comunidades usaban distintos textos. ¿Cómo se decidió qué es Palabra de Dios y qué no lo es? La Iglesia Católica, en los concilios de Hipona (393 d.C.) y Cartago (397 d.C.), determinó el canon bíblico que el mundo cristiano usa hasta hoy. El que rechaza la autoridad de la Iglesia Católica para enseñar doctrina está confiando en esa misma Iglesia para saber qué libros leer. No es posible tener coherencia de otra manera.</p>
                <h2>La Tradición oral es bíblica<br>2 Tesalonicenses 2:15 y 2 Timoteo 2:2</h2>
                <p>Pablo no enseñó solo por carta. Ordenó guardar también la tradición oral:</p>
                <blockquote>«Así pues, hermanos, <strong>manténganse firmes y conserven las tradiciones que aprendieron de nosotros, ya sea de viva voz o por carta.</strong>» — 2 Tesalonicenses 2:15</blockquote>
                <p>Y encargó que esa tradición se transmitiera de generación en generación:</p>
                <blockquote>«<strong>Lo que me has oído decir en presencia de muchos testigos, confíalo a hombres fidedignos que sean capaces de enseñar a otros.</strong>» — 2 Timoteo 2:2</blockquote>
                <p>Cuatro generaciones de transmisión en un solo versículo: Pablo → Timoteo → hombres fidedignos → otros. Y el mismo Juan lo reconoce al final de su Evangelio:</p>
                <blockquote>«<strong>Hay también otras muchas cosas que hizo Jesús; si se escribieran una por una, pienso que ni el mundo entero bastaría para contener los libros que se escribirían.</strong>» — Juan 21:25</blockquote>
                <p>Jesús mismo no escribió una sola línea. Envió apóstoles a predicar, no a escribir.</p>
                <h2>La interpretación privada está prohibida por la Biblia<br>2 Pedro 1:20-21</h2>
                <p>Pedro lo dice con claridad:</p>
                <blockquote>«<strong>Tengan esto en cuenta ante todo: ninguna profecía de la Escritura es de interpretación personal</strong>, pues la profecía nunca ha venido por la voluntad humana, sino que hombres movidos por el Espíritu Santo hablaron de parte de Dios.» — 2 Pedro 1:20-21</blockquote>
                <p>Desde 1517, hay más de 45.000 denominaciones distintas que leen la misma Biblia y llegan a conclusiones opuestas sobre el bautismo, la Eucaristía, la salvación y la moral. Jesús oró por algo diferente: <em>«<strong>para que todos sean uno</strong>»</em> (Jn 17:21). La pregunta que se impone: ¿puede el Espíritu Santo guiar simultáneamente a todas esas posiciones contradictorias?</p>
                <h2>La Iglesia es la columna de la verdad<br>1 Timoteo 3:15 y Mateo 16:18</h2>
                <p>La Biblia no se llama a sí misma columna de la verdad. Llama a la Iglesia:</p>
                <blockquote>«La Iglesia del Dios vivo, <strong>columna y fundamento de la verdad.</strong>» — 1 Timoteo 3:15</blockquote>
                <p>Y Jesús hizo una promesa institucional sobre ella:</p>
                <blockquote>«Y yo a mi vez te digo que tú eres Pedro, y sobre esta roca edificaré mi Iglesia, <strong>y las puertas del infierno no prevalecerán contra ella.</strong>» — Mateo 16:18</blockquote>
                <p>Esa promesa protege el Magisterio —la enseñanza oficial de la Iglesia— de enseñar error definitivamente. No significa que cada miembro sea impecable. Significa que la verdad que Cristo confió a su Iglesia no puede ser destruida.</p>
                <h2>Conclusión: creer y cumplir</h2>
                <p>La Palabra de los profetas es de Dios. Los apóstoles la atestiguaron. Hay que leerla toda —incluyendo lo que dice sobre la Tradición oral, sobre quién interpreta y sobre la Iglesia que Cristo fundó. Y hay que hacer lo que Dios dice: eso es la fe. No el que dice «Señor, Señor» se salvará, sino el que cumple la voluntad del Padre (Mt 7:21). La Biblia, leída entera y con honestidad, señala hacia la misma Iglesia que Jesús fundó. Creer es confiar en Jesucristo aunque la experiencia humana diga lo contrario, como hizo Pedro en el lago. Y ese acto de confianza lo cambia todo.</p>`,
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
      article: `<p>Hay una pregunta que no puede quedar sin respuesta: Jesús dijo <em>«A quienes les perdonen los pecados, les serán perdonados; a quienes se los retengan, les serán retenidos»</em> (Jn 20:22-23). ¿A quién le habló? ¿Y cómo se retienen los pecados de alguien sin saber cuáles son? Eso exige confesión. Eso exige un sacerdote con autoridad para perdonar. Vamos por partes.</p>
                <h2>Un hombre tomado de entre los hombres<br>Heb 5:1-2</h2>
                <p>La carta a los Hebreos es clara desde el principio:</p>
                <blockquote>«<strong>Todo sumo sacerdote es tomado de entre los hombres</strong> y puesto al servicio de Dios en favor de ellos, para ofrecer dones y sacrificios por los pecados. Puede compadecerse de los ignorantes y extraviados, ya que él mismo está rodeado de debilidad.» — Hebreos 5:1-2</blockquote>
                <p>El sacerdote no está por encima de la condición humana. Comparte las mismas luchas, tentaciones y debilidades de cualquier creyente. Esta es la base de la compasión pastoral: nadie puede acompañar genuinamente al otro en lo que no conoce. El sacerdote puede compadecerse porque también él lucha.</p>
                <h2>Santo por Dios, no por mérito propio<br>Lev 21:6-8</h2>
                <p>En el Levítico, Dios establece que los sacerdotes deben ser considerados santos. Pero la santidad que se les pide no es perfección moral absoluta, sino consagración: están apartados para Dios y su servicio:</p>
                <blockquote>«Serán santos para su Dios y no profanarán el nombre de su Dios... <strong>Lo considerarán como santo, porque yo, el Señor que los santifico, soy santo.</strong>» — Levítico 21:6-8</blockquote>
                <p>El pueblo debe considerar santo al sacerdote no por méritos propios, sino por Dios. La santidad del ministerio viene de Quien lo instituyó. Esto nos libera de una expectativa equivocada: nuestra fe no reposa en la virtud del ministro, sino en la fidelidad de Dios.</p>
                <h2>«Todos somos sacerdotes» — la objeción y su límite<br>1 Pedro 2:9 y Hebreos 5:4</h2>
                <p>San Pedro lo dice con claridad:</p>
                <blockquote>«<strong>Ustedes son una raza elegida, un sacerdocio real, una nación santa</strong>, un pueblo adquirido para anunciar las alabanzas de Aquel que los llamó de las tinieblas a su admirable luz.» — 1 Pedro 2:9</blockquote>
                <p>El sacerdocio bautismal es real. Nadie lo niega. Pero hay dos sacerdocios en el Nuevo Testamento, no uno. La misma carta a los Hebreos lo distingue con precisión:</p>
                <blockquote>«<strong>Nadie se apropia este honor, sino que es llamado por Dios, como lo fue Aarón.</strong>» — Hebreos 5:4</blockquote>
                <p>Hay un sacerdocio que se recibe en el bautismo, y hay otro que requiere llamado y consagración específica. Esto no es una invención tardía. Cuando Coré y su gente argumentaron que <em>«toda la comunidad es santa, todos y cada uno, y el Señor está en medio de ellos»</em> (Núm 16:3) —reclamando acceso al sacerdocio ministerial sin vocación— Dios respondió abriéndose la tierra bajo sus pies. Y está en el Nuevo Testamento:</p>
                <blockquote>«<strong>En cada iglesia nombraron presbíteros</strong>, y después de orar y ayunar, los encomendaron al Señor en quien habían puesto su fe.» — Hechos 14:23</blockquote>
                <p>Pablo le ordena a Tito: <em>«Te dejé en Creta para que terminaras de organizar lo que faltaba, y para que <strong>establecieras presbíteros en cada ciudad</strong>»</em> (Tit 1:5). A Timoteo le recuerda: <em>«No descuides el don que tienes, que te fue concedido mediante una profecía, con la <strong>imposición de manos de los presbíteros</strong>»</em> (1 Tim 4:14). Esto es estructura, no metáfora.</p>
                <h2>«No llames a nadie padre» — respuesta bíblica<br>Mateo 23:9</h2>
                <p>Jesús dice en Mateo 23:9: <em>«<strong>No llamen a nadie padre vuestro en la tierra</strong>, porque uno solo es vuestro Padre, el que está en los cielos.»</em> El que usa este versículo contra el sacerdocio católico tiene un problema: la misma Biblia lo contradice en varios pasajes.</p>
                <p>San Pablo se llama a sí mismo padre: <em>«Pues aunque tuviesen diez mil pedagogos en Cristo, no tienen muchos padres: <strong>fui yo quien los engendré en Cristo Jesús por medio del Evangelio</strong>»</em> (1 Cor 4:15). Esteban, ante quienes lo apedrearían, los llama: <em>«<strong>Hermanos y padres</strong>, escúchenme»</em> (Hch 7:2). Abraham es llamado repetidamente <em>«padre de la circuncisión»</em> (Rom 4:12). El propio Jesús habla del padre de cada uno (Mt 7:11, Lc 15:11-32).</p>
                <p>Mateo 23:9 no prohíbe el uso gramatical de la palabra: prohíbe la idolatría de la autoridad humana, colocar a un hombre en el lugar de Dios. El contexto lo dice: Jesús habla contra los fariseos que buscan honores y títulos para sí mismos.</p>
                <h2>El perdón de los pecados — Juan 20:22-23</h2>
                <p>Volvamos al punto de partida. Jesús resucitado se aparece a los apóstoles, sopla sobre ellos —el mismo gesto que en el Génesis 2:7 cuando dio vida al hombre de barro— y les dice:</p>
                <blockquote>«Reciban el Espíritu Santo. <strong>A quienes les perdonen los pecados, les serán perdonados; a quienes se los retengan, les serán retenidos.</strong>» — Juan 20:22-23</blockquote>
                <p>¿Cómo se retienen los pecados de alguien sin saber cuáles son? No se puede. Este versículo exige que el penitente declare sus pecados. Eso es la confesión sacramental, instituida por Cristo mismo.</p>
                <h2>El altar y el sacrificio en el Nuevo Testamento<br>Heb 13:10 y Mal 1:11</h2>
                <p>Si no hay sacerdocio ni sacrificio en el Nuevo Testamento, ¿por qué la carta a los Hebreos dice esto?</p>
                <blockquote>«<strong>Tenemos un altar</strong> del que no tienen derecho a comer los que sirven al tabernáculo.» — Hebreos 13:10</blockquote>
                <p>Y el profeta Malaquías, siglos antes de Cristo, anunció:</p>
                <blockquote>«Desde el oriente hasta el poniente mi nombre es grande entre las naciones, y <strong>en todo lugar se ofrece a mi nombre incienso y una ofrenda pura</strong>, porque mi nombre es grande entre las naciones —dice el Señor de los ejércitos—.» — Malaquías 1:11</blockquote>
                <p>Una ofrenda pura en todo lugar de la tierra. Los Padres de los primeros siglos reconocieron en esto la Eucaristía —el único sacrificio que cumple esa profecía.</p>
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
            <p>Explora cómo la Iglesia católica entiende el milagro de la Eucaristía y la transformación real del pan y el vino en el Cuerpo y la Sangre de Cristo.</p>
            <div class="article-meta">
                <span>9 min lectura</span>
                <span>Publicado en mayo de 2026</span>
            </div>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      article: `<p>La transubstanciación es la enseñanza que afirma que, tras la consagración en la Misa, las sustancias del pan y el vino se convierten en el Cuerpo y la Sangre de Cristo, aunque las apariencias físicas permanecen.</p>
                <h2>Significado teológico</h2>
                <p>Este dogma subraya que la Eucaristía no es sólo un símbolo. Cristo se hace real alimento para nuestra alma, manteniendo su presencia viva y verdadera entre los fieles.</p>
                <blockquote>"Mirad el Cuerpo de Cristo, recibido por salvación y vida eterna."</blockquote>
                <h2>Tradición apostólica</h2>
                <p>La Iglesia enseña esta verdad siguiendo la interpretación de las palabras de Jesús: "Esto es mi cuerpo" y "Esta es mi sangre". La tradición apostólica respalda una lectura literal y sagrada.</p>
                <ul>
                    <li>Presencia real y viva de Cristo en la Eucaristía.</li>
                    <li>Un acto sacramental que supera el plano simbólico.</li>
                    <li>Una fuente de unidad y gracia para la Iglesia.</li>
                </ul>
                <h2>Vida de fe</h2>
                <p>Aceptar este misterio fortalece la devoción eucarística y anima a los cristianos a recibir la comunión con reverencia y preparación interior.</p>`,
      nav: {
        prevTitle: "La Eucaristía: el sacramento central",
        nextTitle: "Los santos y su intercesión"
      }
    },
    "recursos-recomendados": {
      pageTitle: "Recursos recomendados | Fé y Razón",
      hero: `<div class="hero-eyebrow">
                <span class="eyebrow-line"></span>
                <span class="eyebrow-text">Recursos</span>
            </div>
            <h1>Recursos recomendados</h1>
            <p>Fuentes de confianza para profundizar, formarse y compartir la fe católica.</p>
            <a href="index.html#temas" class="btn-outline-white">Volver a Temas</a>`,
      sec1: { eyebrow: "Santa Sede", title: "Fuentes vaticanas", desc: "Documentos oficiales de la Iglesia, disponibles en el sitio de la Santa Sede." },
      sec2: {
        eyebrow: "Apologética · Formación", title: "Sacerdotes y formadores", desc: "Voces fieles al Magisterio que enseñan, defienden y proclaman la fe con profundidad y rigor.",
        toro:    { desc: "Teólogo y apologeta. Responde con profundidad las objeciones más difíciles a la fe católica." },
        aguilar: { desc: "Formación sólida, directa y fiel al magisterio. Vlogs de viajes por Tierra Santa y clases de biblia." },
        olivera: { desc: "Historiador y apologeta agustino. Aborda el racionalismo, las sectas y los errores modernos con rigor." }
      },
      sec3: {
        eyebrow: "Apostolados · Medios", title: "Apostolados y medios católicos",
        heraldos: { desc: "Apostolado misionero. Formación, catequesis y evangelización fiel a la Tradición." },
        rugged:   { desc: "Hermosos rosarios hechos a mano y artículos de fe varios de gran calidad con envío internacional.", tag: "Estados Unidos" },
        grat:     { desc: "Biblia de Jerusalén en inglés o español latino (para otros idiomas verifique en la página oficial). Con plan de estudio único conteniendo explicaciones paso a paso y gráficas, ideal para neófitos.", tag: "Biblia · Formación" },
        ewtn:     { desc: "La red de televisión católica más grande del mundo. Misa diaria, Santo Rosario, documentales y formación las 24 horas.", tag: "Televisión · Radio" }
      },
      article: `<h2>Vaticano</h2>
                <p>El sitio oficial de la Santa Sede, donde puedes encontrar la Biblia, el Catecismo de la Iglesia Católica, documentos papales y mucho más.</p>
                <ul>
                    <li><a href="https://www.vatican.va/content/vatican/es.html" target="_blank">Sitio Oficial del Vaticano</a></li>
                    <li><a href="https://www.vatican.va/archive/catechism_sp/index_sp.htm" target="_blank">Catecismo de la Iglesia Católica (Español)</a></li>
                </ul>

                <h2>Apologética y Formación</h2>
                <h3>Padre Luis Toro</h3>
                <p>Conocido por sus conferencias y debates apologéticos, el Padre Luis Toro ofrece una defensa sólida de la fe católica.</p>
                <ul>
                    <li><a href="https://www.youtube.com/@PadreLuisToroOficial" target="_blank">Canal de YouTube Padre Luis Toro Oficial</a></li>
                </ul>

                <h3>Padre José de Jesús Aguilar</h3>
                <p>Sacerdote y comunicador, el Padre José de Jesús Aguilar comparte reflexiones y enseñanzas católicas.</p>
                <ul>
                    <li><a href="https://www.youtube.com/@PadreJosedeJesusAguilar" target="_blank">Canal de YouTube Padre José de Jesús Aguilar</a></li>
                </ul>

                <h3>Heraldos del Evangelio Ecuador</h3>
                <p>Una asociación de fieles de derecho pontificio que busca la santificación de sus miembros y la evangelización.</p>
                <ul>
                    <li><a href="https://heraldosdelevangelio.ec/" target="_blank">Sitio Oficial Heraldos del Evangelio Ecuador</a></li>
                </ul>

                <h3>Que No Te La Cuenten</h3>
                <p>Plataforma dedicada a la apologética católica, desmintiendo mitos y ofreciendo formación.</p>
                <ul>
                    <li><a href="https://quenotelacuenten.org/" target="_blank">Sitio Oficial Que No Te La Cuenten</a></li>
                    <li><a href="https://www.youtube.com/@quenotelacuenten" target="_blank">Canal de YouTube Que No Te La Cuenten</a></li>
                </ul>

                <h2>Recursos para la Oración y Estudio Bíblico</h2>
                <h3>Rough Rosaries</h3>
                <p>Artesanía de rosarios robustos y duraderos, inspirados en la tradición militar y la fe.</p>
                <ul>
                    <li><a href="https://roughrosaries.com/" target="_blank">Sitio Oficial Rough Rosaries</a></li>
                </ul>

                <h3>Ascension Presents</h3>
                <p>Una editorial católica que ofrece recursos de formación, incluyendo la popular serie "Bible in a Year" con el Padre Mike Schmitz y "The Great Adventure Catholic Bible".</p>
                <ul>
                    <li><a href="https://ascensionpress.com/collections/the-great-adventure-catholic-bible" target="_blank">The Great Adventure Catholic Bible</a></li>
                    <li><a href="https://ascensionpress.com/pages/biy-registration" target="_blank">The Bible in a Year (Podcast)</a></li>
                </ul>`,
      nav: {
        prevTitle: "La primacía de Pedro",
        nextTitle: "El Sacerdocio en la Iglesia Católica"
      }
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
      article: `<p>Llegué al catolicismo después de un recorrido largo. Leí de todo: ocultismo y esoterismo, las llamadas tablas esmeralda, la biblia satánica, las filosofías orientales, Nietzsche, los epicúreos. Probé respuestas en todas partes y no encontraba ninguna que se sostuviera. El estoicismo fue lo último que me ofreció algo serio antes de Cristo — Séneca, Marco Aurelio, Epicteto me enseñaron a mirar la verdad sin pestañear. Y mirando la verdad sin pestañear terminé donde no esperaba: ante la Iglesia Católica.</p>

            <p>Este sitio es para vos si estás en alguno de estos lugares: dudás de la fe que recibiste y no sabés a quién preguntarle; estás buscando entre tradiciones y nadie te da una respuesta que te aguante el peso; te acabás de convertir y te sentís solo, sin guía, asediado por todos lados. Conozco ese lugar. Estuve ahí. Y sé lo que hay alrededor: católicos tradicionales que a veces dan por supuesto lo que tendrían que demostrar y no saben explicarlo; y peor todavía, católicos tibios — los que van a misa por costumbre, no saben qué creen, no defienden nada, y son los primeros en encogerse de hombros cuando alguien ataca la fe delante de ellos.</p>

            <div class="scripture-block">
                <span class="scripture-ref">✝ Apocalipsis 3,15-16</span>
                <blockquote>«Conozco tus obras: no eres ni frío ni caliente. ¡Ojalá fueras frío o caliente! Ahora bien, puesto que eres tibio, y no frío ni caliente, te vomitaré de mi boca.»</blockquote>
            </div>

            <p>Son peores que los protestantes, porque al menos el protestante cree algo, aunque sea equivocado.</p>

            <p>Y los protestantes aparecen. Aparecen siempre. Testigos de Jehová, pentecostales, adventistas, mormones, cada secta con su versión recortada de la Escritura y su certeza prestada. Acá vas a encontrar respuesta a esas sectas, en su propio terreno, con su propia arma: la Biblia entera — incluyendo los libros deuterocanónicos que ellos arrancaron de sus traducciones sin autoridad para hacerlo. Con la Biblia bien leída, los Padres de la Iglesia, el Magisterio, el Catecismo, y la razón que Dios nos dio como regalo.</p>

            <p>Mi inspiración principal en este trabajo es el Padre Luis Toro. Es profeta de Dios en nuestro tiempo y no puedo quitarle el crédito que le corresponde. Lo que él hace hablando, yo intento hacerlo escribiendo, en los idiomas y para los lectores que él no alcanza.</p>

            <p>No escribo para ganar discusiones. Escribo para que el que está dudando solo en la noche tenga algo serio a mano cuando le toque defender su fe — o cuando le toque encontrarla por primera vez.</p>

            <p class="about-signature">— M.G.</p>`
    }
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
  footer: {
    text: "&copy; 2026 Fé y Razón. Ad maiorem Dei gloriam."
  }
};