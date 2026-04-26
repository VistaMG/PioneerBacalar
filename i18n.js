/* ==========================================================================
   Melipona Bacalar / Pioneer Bacalar — i18n
   Shared language switcher for index.html and experience.html
   Languages: English (en), Spanish — Mexico (es), French — France (fr)

   Translations are written for a luxury hospitality register.
   Spanish uses formal "usted" form; French uses formal "vous" form.
   ========================================================================== */

(function(){
  'use strict';

  // -------------------------------------------------------------
  // 1. TRANSLATION DICTIONARY
  // Each key may map to {en, es, fr}. innerHTML is used so embedded
  // <em>, <br>, &mdash;, etc. survive language swaps.
  // -------------------------------------------------------------
  const T = {
    // Document title (set on <title> via data-i18n-title on <html> or via JS)
    'doc.title.home': {
      en: 'Melipona Bacalar — A Boutique Luxury Retreat on the Lagoon of Seven Colors',
      es: 'Melipona Bacalar — Un Refugio Boutique de Lujo en la Laguna de los Siete Colores',
      fr: 'Melipona Bacalar — Une Retraite Boutique de Luxe sur le Lagon aux Sept Couleurs'
    },
    'doc.title.experience': {
      en: 'Plan Your Stay — Melipona Bacalar',
      es: 'Planifique Su Estancia — Melipona Bacalar',
      fr: 'Préparez Votre Séjour — Melipona Bacalar'
    },

    // -------- NAV (shared between both pages) --------
    'nav.project': { en: 'The Project', es: 'El Proyecto', fr: 'Le Projet' },
    'nav.experience': { en: 'Experience', es: 'Experiencia', fr: 'L\u2019Expérience' },
    'nav.location': { en: 'Location', es: 'Ubicación', fr: 'Emplacement' },
    'nav.plan': { en: 'Plan Your Stay', es: 'Planifique Su Estancia', fr: 'Préparez Votre Séjour' },
    'nav.contact': { en: 'Contact', es: 'Contacto', fr: 'Contact' },
    'nav.inquire': { en: 'Inquire', es: 'Consultar', fr: 'Demander' },
    'nav.return_home': { en: 'Return Home', es: 'Volver al Inicio', fr: 'Retour à l\u2019Accueil' },

    // -------- HOME: HERO --------
    'home.hero.eyebrow': {
      en: 'Bacalar &nbsp;\u00b7&nbsp; Quintana Roo &nbsp;\u00b7&nbsp; México',
      es: 'Bacalar &nbsp;\u00b7&nbsp; Quintana Roo &nbsp;\u00b7&nbsp; México',
      fr: 'Bacalar &nbsp;\u00b7&nbsp; Quintana Roo &nbsp;\u00b7&nbsp; Mexique'
    },
    'home.hero.title': {
      en: 'A <em>quiet luxury</em><br>on the Lagoon of<br>Seven Colors<span class="accent">Melipona &nbsp;\u00b7&nbsp; Bacalar</span>',
      es: 'Un <em>lujo discreto</em><br>en la Laguna de los<br>Siete Colores<span class="accent">Melipona &nbsp;\u00b7&nbsp; Bacalar</span>',
      fr: 'Un <em>luxe discret</em><br>sur le Lagon aux<br>Sept Couleurs<span class="accent">Melipona &nbsp;\u00b7&nbsp; Bacalar</span>'
    },
    'home.hero.sub': {
      en: 'A boutique residential and hospitality retreat thoughtfully sited on the shores of Laguna Bacalar — designed to disappear into the landscape it celebrates.',
      es: 'Un refugio boutique residencial y de hospitalidad cuidadosamente emplazado en las orillas de la Laguna Bacalar — diseñado para fundirse con el paisaje que celebra.',
      fr: 'Une retraite résidentielle et hôtelière de charme, soigneusement implantée au bord de la Laguna Bacalar — conçue pour se fondre dans le paysage qu\u2019elle célèbre.'
    },
    'home.hero.cta_primary': { en: 'Request Information', es: 'Solicitar Información', fr: 'Demander des Informations' },
    'home.hero.cta_outline': { en: 'Discover the Project', es: 'Descubrir el Proyecto', fr: 'Découvrir le Projet' },
    'home.hero.cta_aux': {
      en: 'Begin a private consultation',
      es: 'Iniciar una consulta privada',
      fr: 'Commencer une consultation privée'
    },
    'home.hero.scroll': { en: 'Scroll', es: 'Descubrir', fr: 'Faire défiler' },

    // -------- HOME: INTRO / STORY --------
    'home.intro.eyebrow': { en: 'The Vision', es: 'La Visión', fr: 'La Vision' },
    'home.intro.title': {
      en: 'A retreat <em>shaped by place</em>, not imposed upon it.',
      es: 'Un refugio <em>moldeado por el lugar</em>, no impuesto sobre él.',
      fr: 'Une retraite <em>façonnée par le lieu</em>, et non imposée à celui-ci.'
    },
    'home.intro.p1': {
      en: 'Melipona Bacalar is a design-forward boutique retreat on Laguna Bacalar — Mexico\u2019s storied Lagoon of Seven Colors. Conceived as a sanctuary rather than a resort, it gathers a small collection of private villas around shaded courtyards, elevated walkways, and unobstructed water views.',
      es: 'Melipona Bacalar es un refugio boutique de diseño en la Laguna Bacalar — la legendaria Laguna de los Siete Colores de México. Concebido como un santuario en lugar de un resort, reúne una pequeña colección de villas privadas alrededor de patios sombreados, pasarelas elevadas y vistas despejadas al agua.',
      fr: 'Melipona Bacalar est une retraite boutique au design soigné sur la Laguna Bacalar — le célèbre Lagon aux Sept Couleurs du Mexique. Conçue comme un sanctuaire plutôt qu\u2019un complexe, elle rassemble une petite collection de villas privées autour de patios ombragés, de passerelles surélevées et de vues dégagées sur l\u2019eau.'
    },
    'home.intro.p2': {
      en: 'Every element is chosen with restraint: locally sourced stone, hand-finished plaster, native hardwoods, and architecture that yields to the canopy rather than competing with it.',
      es: 'Cada elemento se elige con mesura: piedra de cantera local, enlucidos hechos a mano, maderas nobles nativas y una arquitectura que cede ante el dosel selvático en lugar de competir con él.',
      fr: 'Chaque élément est choisi avec retenue : pierre d\u2019origine locale, enduits façonnés à la main, bois nobles indigènes, et une architecture qui s\u2019efface devant la canopée plutôt que de rivaliser avec elle.'
    },

    // -------- HOME: EXPERIENCE GRID --------
    'home.exp.eyebrow': { en: 'The Experience', es: 'La Experiencia', fr: 'L\u2019Expérience' },
    'home.exp.title': {
      en: 'An architecture of <em>quiet attention.</em>',
      es: 'Una arquitectura de <em>atención silenciosa.</em>',
      fr: 'Une architecture d\u2019<em>attention silencieuse.</em>'
    },
    'home.exp.lead': {
      en: 'Each villa is composed as a study in light, shade, water, and craftsmanship. Open-air pavilions dissolve the boundary between interior and jungle. Plunge pools mirror the lagoon. Materials age gracefully into the climate.',
      es: 'Cada villa se compone como un estudio de luz, sombra, agua y artesanía. Pabellones al aire libre disuelven la frontera entre el interior y la selva. Las piscinas privadas reflejan la laguna. Los materiales envejecen con gracia bajo el clima.',
      fr: 'Chaque villa est composée comme une étude de lumière, d\u2019ombre, d\u2019eau et d\u2019artisanat. Des pavillons à ciel ouvert dissolvent la frontière entre l\u2019intérieur et la jungle. Les bassins privés reflètent le lagon. Les matériaux vieillissent avec grâce sous ce climat.'
    },
    'home.exp.tag.lakefront': { en: 'Lakefront Villa', es: 'Villa Frente a la Laguna', fr: 'Villa au Bord du Lagon' },
    'home.exp.title.lakefront': {
      en: 'Suspended above the lagoon',
      es: 'Suspendida sobre la laguna',
      fr: 'Suspendue au-dessus du lagon'
    },
    'home.exp.tag.living': { en: 'Living Space', es: 'Espacio Habitable', fr: 'Espace de Vie' },
    'home.exp.title.living': {
      en: 'Double-height pavilions, framed by the canopy',
      es: 'Pabellones de doble altura, enmarcados por el dosel',
      fr: 'Pavillons à double hauteur, encadrés par la canopée'
    },
    'home.exp.tag.interior': { en: 'Interior', es: 'Interior', fr: 'Intérieur' },
    'home.exp.title.interior': {
      en: 'Earth, wood, light',
      es: 'Tierra, madera, luz',
      fr: 'Terre, bois, lumière'
    },
    'home.exp.tag.courtyard': { en: 'Private Courtyard', es: 'Patio Privado', fr: 'Patio Privé' },
    'home.exp.title.courtyard': {
      en: 'A pool carved into the jungle',
      es: 'Una piscina tallada en la selva',
      fr: 'Une piscine sculptée dans la jungle'
    },
    'home.exp.tag.arrival': { en: 'Arrival', es: 'Llegada', fr: 'Arrivée' },
    'home.exp.title.arrival': {
      en: 'A measured approach',
      es: 'Una aproximación mesurada',
      fr: 'Une approche mesurée'
    },
    'home.exp.tag.architecture': { en: 'Architecture', es: 'Arquitectura', fr: 'Architecture' },
    'home.exp.title.architecture': {
      en: 'Rooftop terraces &amp; planted parapets',
      es: 'Terrazas en azotea y parapetos ajardinados',
      fr: 'Terrasses sur le toit et parapets végétalisés'
    },
    'home.exp.tag.lagoonview': { en: 'Lagoon View', es: 'Vista a la Laguna', fr: 'Vue sur le Lagon' },
    'home.exp.title.lagoonview': {
      en: 'Water at the doorstep',
      es: 'El agua a la puerta',
      fr: 'L\u2019eau à votre porte'
    },

    // -------- HOME: STATS --------
    'home.stats.colors': { en: 'Colors of the Lagoon', es: 'Colores de la Laguna', fr: 'Couleurs du Lagon' },
    'home.stats.boutique_num': { en: '<em>Boutique</em>', es: '<em>Boutique</em>', fr: '<em>Boutique</em>' },
    'home.stats.boutique_label': { en: 'Residential Hospitality', es: 'Hospitalidad Residencial', fr: 'Hôtellerie Résidentielle' },
    'home.stats.site_label': { en: 'Site-Sensitive Design', es: 'Diseño Respetuoso con el Entorno', fr: 'Design Respectueux du Site' },
    'home.stats.time_num': { en: '<em>Time</em>', es: '<em>Tiempo</em>', fr: '<em>Temps</em>' },
    'home.stats.time_label': { en: 'Well Spent', es: 'Bien Empleado', fr: 'Bien Employé' },

    // -------- HOME: PLAN YOUR STAY CTA --------
    'home.plancta.eyebrow': { en: 'A Private Consultation', es: 'Una Consulta Privada', fr: 'Une Consultation Privée' },
    'home.plancta.title': {
      en: 'Begin your <em>stay.</em>',
      es: 'Comience su <em>estancia.</em>',
      fr: 'Commencez votre <em>séjour.</em>'
    },
    'home.plancta.sub': {
      en: 'No two stays at Melipona Bacalar are alike. Tell us about your trip &mdash; the occasion, the tastes, the experiences you wish to live &mdash; and our concierge will design it around you.',
      es: 'No hay dos estancias iguales en Melipona Bacalar. Cuéntenos sobre su viaje &mdash; la ocasión, los gustos, las experiencias que desea vivir &mdash; y nuestro concierge la diseñará a la medida.',
      fr: 'Aucun séjour à Melipona Bacalar ne ressemble à un autre. Parlez-nous de votre voyage &mdash; l\u2019occasion, les goûts, les expériences que vous souhaitez vivre &mdash; et notre concierge le composera autour de vous.'
    },
    'home.plancta.button': { en: 'Begin the Conversation', es: 'Iniciar la Conversación', fr: 'Commencer la Conversation' },
    'home.plancta.meta': { en: 'A reply within 24 hours', es: 'Respuesta en 24 horas', fr: 'Une réponse sous 24 heures' },

    // -------- HOME: DETAILS / FEATURES --------
    'home.details.eyebrow': { en: 'Design Principles', es: 'Principios de Diseño', fr: 'Principes de Design' },
    'home.details.title': {
      en: 'A measured approach to <em>luxury hospitality.</em>',
      es: 'Una aproximación mesurada a la <em>hospitalidad de lujo.</em>',
      fr: 'Une approche mesurée de l\u2019<em>hôtellerie de luxe.</em>'
    },
    'home.details.lead': {
      en: 'Melipona Bacalar is built on a small set of disciplined choices — guiding everything from site planning to the joinery of a window frame.',
      es: 'Melipona Bacalar se construye sobre un pequeño conjunto de decisiones disciplinadas — que guían todo, desde la planificación del sitio hasta la carpintería de un marco de ventana.',
      fr: 'Melipona Bacalar repose sur un petit ensemble de choix disciplinés — qui guident tout, de l\u2019aménagement du site à la menuiserie d\u2019un cadre de fenêtre.'
    },
    'home.feature1.title': { en: 'Private Villa Accommodations', es: 'Alojamientos en Villa Privada', fr: 'Hébergement en Villa Privée' },
    'home.feature1.body': {
      en: 'A small collection of full-service residences, each with dedicated concierge, plunge pool, and direct connection to the lagoon or jungle.',
      es: 'Una pequeña colección de residencias con servicio completo, cada una con concierge dedicado, piscina privada y conexión directa con la laguna o la selva.',
      fr: 'Une petite collection de résidences au service complet, chacune avec un concierge dédié, un bassin privé et un lien direct avec le lagon ou la jungle.'
    },
    'home.feature2.title': { en: 'Farm-to-Table Dining', es: 'Cocina del Campo a la Mesa', fr: 'Cuisine de la Ferme à la Table' },
    'home.feature2.body': {
      en: 'An on-site culinary program rooted in Yucatecan traditions — sourced from local growers, served beneath open-air palapas.',
      es: 'Un programa culinario in situ enraizado en las tradiciones yucatecas — abastecido por productores locales y servido bajo palapas al aire libre.',
      fr: 'Un programme culinaire sur place, enraciné dans les traditions yucatèques — issu de producteurs locaux et servi sous des palapas à ciel ouvert.'
    },
    'home.feature3.title': { en: 'Spa &amp; Wellness', es: 'Spa y Bienestar', fr: 'Spa &amp; Bien-être' },
    'home.feature3.body': {
      en: 'Treatments drawing on Mayan herbal traditions and modern wellness practice, designed around stillness and the rhythms of the lagoon.',
      es: 'Tratamientos inspirados en las tradiciones herbolarias mayas y la práctica moderna del bienestar, diseñados en torno a la quietud y los ritmos de la laguna.',
      fr: 'Des soins inspirés des traditions herboristes mayas et de la pratique moderne du bien-être, conçus autour de la quiétude et des rythmes du lagon.'
    },
    'home.feature4.title': { en: 'Curated Excursions', es: 'Excursiones Curadas', fr: 'Excursions Curatées' },
    'home.feature4.body': {
      en: 'Private access to cenotes, biosphere reserves, and the freshwater archipelago — guided by people who know the region as home.',
      es: 'Acceso privado a cenotes, reservas de la biosfera y el archipiélago de agua dulce — guiados por quienes conocen la región como su hogar.',
      fr: 'Accès privé aux cénotes, aux réserves de biosphère et à l\u2019archipel d\u2019eau douce — guidés par ceux qui connaissent la région comme leur foyer.'
    },
    'home.feature5.title': { en: 'Sustainable Construction', es: 'Construcción Sostenible', fr: 'Construction Durable' },
    'home.feature5.body': {
      en: 'Locally quarried stone, certified hardwoods, low-impact site planning, and water systems engineered for the karst landscape.',
      es: 'Piedra extraída localmente, maderas nobles certificadas, planificación de sitio de bajo impacto y sistemas hídricos diseñados para el paisaje kárstico.',
      fr: 'Pierre extraite localement, bois nobles certifiés, aménagement du site à faible impact et systèmes hydrauliques conçus pour le paysage karstique.'
    },
    'home.feature6.title': { en: 'Artisan Craftsmanship', es: 'Artesanía Artesanal', fr: 'Savoir-faire Artisanal' },
    'home.feature6.body': {
      en: 'Hand-finished plaster, woven textiles, and millwork produced by Yucatán workshops — each villa a record of regional craft.',
      es: 'Enlucidos hechos a mano, textiles tejidos y carpintería producidos por talleres de Yucatán — cada villa es un testimonio del oficio regional.',
      fr: 'Enduits façonnés à la main, textiles tissés et menuiserie produits par les ateliers du Yucatán — chaque villa est un témoignage de l\u2019artisanat régional.'
    },

    // -------- HOME: LOCATION --------
    'home.location.eyebrow': { en: 'The Setting', es: 'El Entorno', fr: 'Le Cadre' },
    'home.location.title': {
      en: 'On the shores of <em>Laguna Bacalar.</em>',
      es: 'En las orillas de la <em>Laguna Bacalar.</em>',
      fr: 'Sur les rives de la <em>Laguna Bacalar.</em>'
    },
    'home.location.p1': {
      en: 'Bacalar is a designated <em>Pueblo Mágico</em> — a freshwater lagoon stretching nearly 60 kilometers through the southern Yucatán Peninsula. Its layered blues, fed by underground cenotes and ancient stromatolite reefs, are unlike anywhere else in Mexico.',
      es: 'Bacalar es un <em>Pueblo Mágico</em> reconocido — una laguna de agua dulce que se extiende casi 60 kilómetros por el sur de la Península de Yucatán. Sus tonos de azul superpuestos, alimentados por cenotes subterráneos y antiguos arrecifes de estromatolitos, no se asemejan a ningún otro lugar de México.',
      fr: 'Bacalar est un <em>Pueblo Mágico</em> reconnu — un lagon d\u2019eau douce qui s\u2019étend sur près de 60 kilomètres dans le sud de la péninsule du Yucatán. Ses bleus superposés, alimentés par des cénotes souterrains et d\u2019anciens récifs de stromatolites, ne ressemblent à nul autre lieu au Mexique.'
    },
    'home.location.p2': {
      en: 'The town remains intimate by design. Reachable from Cancún, Tulum, and Chetumal, yet a world removed in pace and atmosphere — a place that has long resisted the scale of the Riviera Maya and intends to keep it that way.',
      es: 'El pueblo permanece íntimo por diseño. Accesible desde Cancún, Tulum y Chetumal, y sin embargo un mundo aparte en ritmo y atmósfera — un lugar que durante mucho tiempo ha resistido la escala de la Riviera Maya y pretende mantenerse así.',
      fr: 'Le village demeure intime par dessein. Accessible depuis Cancún, Tulum et Chetumal, et pourtant un monde à part par son rythme et son atmosphère — un lieu qui a longtemps résisté à l\u2019échelle de la Riviera Maya et entend le rester.'
    },
    'home.location.quote': {
      en: '\u201cLuxury, here, is measured in hours unhurried — in time well spent, in stillness shared.\u201d',
      es: '\u00abEl lujo, aquí, se mide en horas sin prisa — en tiempo bien empleado, en quietud compartida.\u00bb',
      fr: '\u00abLe luxe, ici, se mesure en heures sans hâte — en temps bien employé, en quiétude partagée.\u00bb'
    },

    // -------- HOME: DEVELOPER --------
    'home.dev.eyebrow': { en: 'A Project By', es: 'Un Proyecto De', fr: 'Un Projet de' },
    'home.dev.title': {
      en: 'Melipona Bacalar is developed by <em>Vista Frontier Development</em> — an international real estate firm focused on institutional-quality projects in Mexico\u2019s Yucatán Peninsula.',
      es: 'Melipona Bacalar es desarrollado por <em>Vista Frontier Development</em> — una firma internacional de bienes raíces enfocada en proyectos de calidad institucional en la Península de Yucatán de México.',
      fr: 'Melipona Bacalar est développé par <em>Vista Frontier Development</em> — une société immobilière internationale axée sur des projets de qualité institutionnelle dans la péninsule du Yucatán au Mexique.'
    },
    'home.dev.body': {
      en: 'Vista Frontier brings disciplined development, on-the-ground market expertise, and a commitment to sustainable luxury to every project it sponsors.',
      es: 'Vista Frontier aporta desarrollo disciplinado, experiencia local del mercado y un compromiso con el lujo sostenible a cada proyecto que patrocina.',
      fr: 'Vista Frontier apporte un développement discipliné, une expertise locale du marché et un engagement envers le luxe durable à chaque projet qu\u2019elle parraine.'
    },
    'home.dev.link': { en: 'Visit Vista Frontier Development', es: 'Visitar Vista Frontier Development', fr: 'Visiter Vista Frontier Development' },

    // -------- HOME: CONTACT --------
    'home.contact.eyebrow': { en: 'Get in Touch', es: 'Contáctenos', fr: 'Nous Contacter' },
    'home.contact.title': {
      en: 'Inquire about <em>Melipona Bacalar.</em>',
      es: 'Consultar sobre <em>Melipona Bacalar.</em>',
      fr: 'Renseignez-vous sur <em>Melipona Bacalar.</em>'
    },
    'home.contact.body': {
      en: 'For investor inquiries, residence reservations, or general information about the project, please reach out below. A member of our team will respond personally.',
      es: 'Para consultas de inversores, reservaciones de residencia o información general sobre el proyecto, por favor escríbanos a continuación. Un miembro de nuestro equipo responderá personalmente.',
      fr: 'Pour les demandes d\u2019investisseurs, les réservations de résidence ou les renseignements généraux sur le projet, veuillez nous écrire ci-dessous. Un membre de notre équipe vous répondra personnellement.'
    },
    'home.contact.email': { en: 'Email', es: 'Correo Electrónico', fr: 'Courriel' },
    'home.contact.location': { en: 'Location', es: 'Ubicación', fr: 'Emplacement' },
    'home.contact.location_value': {
      en: 'Bacalar, Quintana Roo, México',
      es: 'Bacalar, Quintana Roo, México',
      fr: 'Bacalar, Quintana Roo, Mexique'
    },

    // -------- HOME: CONTACT FORM --------
    'home.form.name': { en: 'Name', es: 'Nombre', fr: 'Nom' },
    'home.form.name_ph': { en: 'Your full name', es: 'Su nombre completo', fr: 'Votre nom complet' },
    'home.form.email': { en: 'Email', es: 'Correo Electrónico', fr: 'Courriel' },
    'home.form.email_ph': { en: 'you@example.com', es: 'usted@ejemplo.com', fr: 'vous@exemple.com' },
    'home.form.interest': { en: 'Interest', es: 'Interés', fr: 'Intérêt' },
    'home.form.interest_select': { en: 'Select inquiry type', es: 'Seleccione tipo de consulta', fr: 'Sélectionnez le type de demande' },
    'home.form.interest_investor': { en: 'Investor Inquiry', es: 'Consulta de Inversor', fr: 'Demande d\u2019Investisseur' },
    'home.form.interest_residence': { en: 'Residence Information', es: 'Información de Residencia', fr: 'Informations sur la Résidence' },
    'home.form.interest_hospitality': { en: 'Hospitality / Stay', es: 'Hospitalidad / Estancia', fr: 'Hôtellerie / Séjour' },
    'home.form.interest_press': { en: 'Press &amp; Media', es: 'Prensa y Medios', fr: 'Presse &amp; Médias' },
    'home.form.interest_other': { en: 'Other', es: 'Otro', fr: 'Autre' },
    'home.form.message': { en: 'Message', es: 'Mensaje', fr: 'Message' },
    'home.form.message_ph': { en: 'Tell us how we can help', es: 'Cuéntenos cómo podemos ayudar', fr: 'Dites-nous comment nous pouvons vous aider' },
    'home.form.submit': { en: 'Submit Inquiry', es: 'Enviar Consulta', fr: 'Envoyer la Demande' },
    'home.form.sending': { en: 'Sending...', es: 'Enviando...', fr: 'Envoi en cours...' },
    'home.form.success': {
      en: 'Thank you for your inquiry. We will be in touch shortly.',
      es: 'Gracias por su consulta. Nos pondremos en contacto en breve.',
      fr: 'Merci pour votre demande. Nous vous contacterons sous peu.'
    },
    'home.form.error_generic': {
      en: 'Something went wrong. Please try again or reach out directly.',
      es: 'Algo salió mal. Por favor, inténtelo de nuevo o contáctenos directamente.',
      fr: 'Une erreur s\u2019est produite. Veuillez réessayer ou nous contacter directement.'
    },
    'home.form.error_network': {
      en: 'Connection error. Please check your internet and try again.',
      es: 'Error de conexión. Por favor, verifique su internet e inténtelo de nuevo.',
      fr: 'Erreur de connexion. Veuillez vérifier votre internet et réessayer.'
    },

    // -------- HOME: FOOTER --------
    'home.footer.tagline': {
      en: 'A boutique luxury retreat on the shores of Laguna Bacalar. A development by Vista Frontier Development.',
      es: 'Un refugio boutique de lujo en las orillas de la Laguna Bacalar. Un desarrollo de Vista Frontier Development.',
      fr: 'Une retraite boutique de luxe sur les rives de la Laguna Bacalar. Un projet développé par Vista Frontier Development.'
    },
    'home.footer.explore': { en: 'Explore', es: 'Explorar', fr: 'Explorer' },
    'home.footer.connect': { en: 'Connect', es: 'Conectar', fr: 'Nous Suivre' },
    'home.footer.copy': {
      en: '© 2026 Melipona Bacalar. All rights reserved.',
      es: '© 2026 Melipona Bacalar. Todos los derechos reservados.',
      fr: '© 2026 Melipona Bacalar. Tous droits réservés.'
    },

    // ===========================================================
    // EXPERIENCE PAGE
    // ===========================================================
    'exp.hero.eyebrow': { en: 'Concierge Consultation', es: 'Consulta con el Concierge', fr: 'Consultation du Concierge' },
    'exp.hero.title': {
      en: 'Let us shape something <em>unforgettable.</em>',
      es: 'Permítanos crear algo <em>inolvidable.</em>',
      fr: 'Composons ensemble quelque chose d\u2019<em>inoubliable.</em>'
    },
    'exp.hero.sub': {
      en: 'Every stay at Melipona Bacalar is composed by hand &mdash; never templated. Share what brings you to the lagoon, and our concierge team will design an experience drawn entirely around you. There are no booking buttons here. There is only conversation.',
      es: 'Cada estancia en Melipona Bacalar se compone a mano &mdash; nunca con plantilla. Comparta lo que le trae a la laguna, y nuestro equipo de concierge diseñará una experiencia trazada enteramente en torno a usted. Aquí no hay botones de reserva. Solo hay conversación.',
      fr: 'Chaque séjour à Melipona Bacalar est composé à la main &mdash; jamais préformaté. Confiez-nous ce qui vous amène au lagon, et notre équipe de concierge concevra une expérience entièrement façonnée autour de vous. Ici, il n\u2019y a pas de boutons de réservation. Il n\u2019y a que la conversation.'
    },
    'exp.hero.meta': {
      en: 'A private inquiry &middot; Reply within 24 hours',
      es: 'Una consulta privada &middot; Respuesta en 24 horas',
      fr: 'Une demande privée &middot; Réponse sous 24 heures'
    },

    // Progress steps
    'exp.prog.1': { en: 'Your Stay', es: 'Su Estancia', fr: 'Votre Séjour' },
    'exp.prog.2': { en: 'The Occasion', es: 'La Ocasión', fr: 'L\u2019Occasion' },
    'exp.prog.3': { en: 'Culinary', es: 'Gastronomía', fr: 'Gastronomie' },
    'exp.prog.4': { en: 'Experiences', es: 'Experiencias', fr: 'Expériences' },
    'exp.prog.5': { en: 'Final Touches', es: 'Últimos Detalles', fr: 'Touches Finales' },
    'exp.prog.6': { en: 'Contact', es: 'Contacto', fr: 'Contact' },

    // Step labels
    'exp.step.of': { en: 'Step {n} of 6', es: 'Paso {n} de 6', fr: 'Étape {n} sur 6' },

    // STEP 1
    'exp.s1.title': { en: 'Your <em>stay</em>', es: 'Su <em>estancia</em>', fr: 'Votre <em>séjour</em>' },
    'exp.s1.intro': {
      en: 'A few essentials so we can hold the right space for you. We\u2019ll match you with the accommodation that best suits your party once we know more.',
      es: 'Algunos datos esenciales para reservarle el espacio adecuado. Le asignaremos el alojamiento que mejor se adapte a su grupo una vez que sepamos más.',
      fr: 'Quelques renseignements essentiels pour vous réserver l\u2019espace adéquat. Nous vous proposerons l\u2019hébergement le mieux adapté à votre groupe une fois que nous en saurons davantage.'
    },
    'exp.s1.arrival': { en: 'Arrival Date', es: 'Fecha de Llegada', fr: 'Date d\u2019Arrivée' },
    'exp.s1.departure': { en: 'Departure Date', es: 'Fecha de Salida', fr: 'Date de Départ' },
    'exp.s1.adults': { en: 'Adults', es: 'Adultos', fr: 'Adultes' },
    'exp.s1.children': { en: 'Children', es: 'Niños', fr: 'Enfants' },
    'exp.s1.party': { en: 'Travel Party', es: 'Tipo de Grupo', fr: 'Type de Groupe' },
    'exp.s1.choose': { en: 'Choose one', es: 'Elija una opción', fr: 'Choisir une option' },
    'exp.s1.party.couple': { en: 'Couple', es: 'Pareja', fr: 'Couple' },
    'exp.s1.party.solo': { en: 'Solo retreat', es: 'Retiro individual', fr: 'Retraite en solo' },
    'exp.s1.party.family': { en: 'Family', es: 'Familia', fr: 'Famille' },
    'exp.s1.party.friends': { en: 'Friends', es: 'Amigos', fr: 'Amis' },
    'exp.s1.party.multigen': { en: 'Multi-generational', es: 'Multi-generacional', fr: 'Multi-générationnel' },
    'exp.s1.party.wedding': { en: 'Wedding party', es: 'Grupo de boda', fr: 'Groupe de mariage' },
    'exp.s1.party.other': { en: 'Other', es: 'Otro', fr: 'Autre' },
    'exp.s1.arrtime': { en: 'Approximate Arrival Time', es: 'Hora Aproximada de Llegada', fr: 'Heure d\u2019Arrivée Approximative' },
    'exp.s1.arrtime.morning': { en: 'Morning', es: 'Mañana', fr: 'Matin' },
    'exp.s1.arrtime.midday': { en: 'Midday', es: 'Mediodía', fr: 'Midi' },
    'exp.s1.arrtime.afternoon': { en: 'Afternoon', es: 'Tarde', fr: 'Après-midi' },
    'exp.s1.arrtime.evening': { en: 'Evening', es: 'Noche', fr: 'Soir' },
    'exp.s1.arrtime.late': { en: 'Late evening', es: 'Noche cerrada', fr: 'Tard en soirée' },
    'exp.s1.arrtime.unsure': { en: 'Not yet certain', es: 'Aún no es seguro', fr: 'Pas encore certain' },

    'exp.s1.transfer.label': { en: 'How would you like to arrive?', es: '¿Cómo desea llegar?', fr: 'Comment souhaitez-vous arriver ?' },
    'exp.s1.transfer.help': {
      en: 'Most guests fly into Tulum or Cancún. Please select one &mdash; we\u2019ll handle the rest in conversation.',
      es: 'La mayoría de nuestros huéspedes vuela a Tulum o Cancún. Por favor seleccione una opción &mdash; el resto lo coordinaremos en conversación.',
      fr: 'La plupart de nos clients atterrissent à Tulum ou Cancún. Veuillez en sélectionner une &mdash; nous nous occuperons du reste en conversation.'
    },
    'exp.s1.transfer.tulum': { en: 'Private transfer from Tulum Airport', es: 'Transporte privado desde el Aeropuerto de Tulum', fr: 'Transfert privé depuis l\u2019aéroport de Tulum' },
    'exp.s1.transfer.tulum_sub': { en: '~2 hours, the closest major hub', es: '~2 horas, el aeropuerto principal más cercano', fr: '~2 heures, le hub majeur le plus proche' },
    'exp.s1.transfer.cun': { en: 'Private transfer from Cancún Airport', es: 'Transporte privado desde el Aeropuerto de Cancún', fr: 'Transfert privé depuis l\u2019aéroport de Cancún' },
    'exp.s1.transfer.cun_sub': { en: '~4 hours, fully appointed vehicle', es: '~4 horas, vehículo totalmente equipado', fr: '~4 heures, véhicule entièrement équipé' },
    'exp.s1.transfer.ctm': { en: 'Private transfer from Chetumal Airport', es: 'Transporte privado desde el Aeropuerto de Chetumal', fr: 'Transfert privé depuis l\u2019aéroport de Chetumal' },
    'exp.s1.transfer.ctm_sub': { en: '~45 minutes', es: '~45 minutos', fr: '~45 minutes' },
    'exp.s1.transfer.own': { en: 'Arriving by private aircraft', es: 'Llegada en aeronave privada', fr: 'Arrivée par aéronef privé' },
    'exp.s1.transfer.own_sub': { en: 'We\u2019ll coordinate ground transfer', es: 'Coordinaremos el transporte terrestre', fr: 'Nous coordonnerons le transfert terrestre' },
    'exp.s1.transfer.procure': { en: 'Please arrange private aviation for us', es: 'Por favor, organice aviación privada para nosotros', fr: 'Veuillez organiser l\u2019aviation privée pour nous' },
    'exp.s1.transfer.procure_sub': { en: 'Charter flight or helicopter, sourced by our team', es: 'Vuelo chárter o helicóptero, gestionado por nuestro equipo', fr: 'Vol charter ou hélicoptère, organisé par notre équipe' },
    'exp.s1.transfer.drive': { en: 'Self-driving', es: 'Conducción propia', fr: 'Conduite autonome' },
    'exp.s1.transfer.drive_sub': { en: 'We\u2019ll advise the route', es: 'Le aconsejaremos la ruta', fr: 'Nous vous conseillerons l\u2019itinéraire' },
    'exp.s1.transfer.undecided': { en: 'Not yet decided', es: 'Aún no decidido', fr: 'Pas encore décidé' },
    'exp.s1.transfer.undecided_sub': { en: 'Let\u2019s discuss the options together', es: 'Conversemos las opciones juntos', fr: 'Discutons des options ensemble' },

    // STEP 2
    'exp.s2.title': { en: 'The <em>occasion</em>', es: 'La <em>ocasión</em>', fr: 'L\u2019<em>occasion</em>' },
    'exp.s2.intro': {
      en: 'Tell us why you\u2019re coming. The mood you\u2019re hoping to find &mdash; the moment you want to mark &mdash; shapes nearly everything that follows.',
      es: 'Cuéntenos por qué viene. El estado de ánimo que espera encontrar &mdash; el momento que desea celebrar &mdash; moldea casi todo lo que sigue.',
      fr: 'Dites-nous pourquoi vous venez. L\u2019atmosphère que vous espérez trouver &mdash; le moment que vous souhaitez marquer &mdash; façonne presque tout ce qui suit.'
    },
    'exp.s2.label': { en: 'What brings you to Bacalar?', es: '¿Qué le trae a Bacalar?', fr: 'Qu\u2019est-ce qui vous amène à Bacalar ?' },
    'exp.s2.help': {
      en: 'Choose any that resonate. There\u2019s no wrong answer, and you can always say "we just need to get away."',
      es: 'Elija las que le resuenen. No hay respuesta incorrecta, y siempre puede decir «simplemente necesitamos escaparnos».',
      fr: 'Choisissez celles qui vous correspondent. Il n\u2019y a pas de mauvaise réponse, et vous pouvez toujours dire « nous avons juste besoin de partir ».'
    },
    'exp.s2.serenity': { en: 'Quiet &amp; serenity', es: 'Quietud y serenidad', fr: 'Calme &amp; sérénité' },
    'exp.s2.serenity_sub': { en: 'Disconnect, read, reset', es: 'Desconectar, leer, reiniciar', fr: 'Se déconnecter, lire, se ressourcer' },
    'exp.s2.anniversary': { en: 'Anniversary', es: 'Aniversario', fr: 'Anniversaire de couple' },
    'exp.s2.anniversary_sub': { en: 'A meaningful one to mark', es: 'Uno significativo que celebrar', fr: 'Un moment important à marquer' },
    'exp.s2.birthday': { en: 'Milestone birthday', es: 'Cumpleaños importante', fr: 'Anniversaire marquant' },
    'exp.s2.birthday_sub': { en: '40th, 50th, or otherwise', es: '40, 50 o cualquier otro', fr: '40e, 50e, ou autre' },
    'exp.s2.honeymoon': { en: 'Honeymoon', es: 'Luna de miel', fr: 'Lune de miel' },
    'exp.s2.honeymoon_sub': { en: 'Newly married or belated', es: 'Recién casados o pospuesta', fr: 'Récemment mariés ou tardive' },
    'exp.s2.proposal': { en: 'A proposal', es: 'Una pedida de mano', fr: 'Une demande en mariage' },
    'exp.s2.proposal_sub': { en: 'We\u2019ll keep the secret', es: 'Guardaremos el secreto', fr: 'Nous garderons le secret' },
    'exp.s2.family': { en: 'Family time', es: 'Tiempo en familia', fr: 'Temps en famille' },
    'exp.s2.family_sub': { en: 'Multi-generational gathering', es: 'Encuentro multigeneracional', fr: 'Rassemblement multi-générationnel' },
    'exp.s2.wellness': { en: 'Wellness &amp; reset', es: 'Bienestar y renovación', fr: 'Bien-être &amp; ressourcement' },
    'exp.s2.wellness_sub': { en: 'Rituals, movement, healing', es: 'Rituales, movimiento, sanación', fr: 'Rituels, mouvement, guérison' },
    'exp.s2.adventure': { en: 'Adventure', es: 'Aventura', fr: 'Aventure' },
    'exp.s2.adventure_sub': { en: 'The lagoon, jungle, ruins', es: 'La laguna, la selva, las ruinas', fr: 'Le lagon, la jungle, les ruines' },
    'exp.s2.creative': { en: 'Creative retreat', es: 'Retiro creativo', fr: 'Retraite créative' },
    'exp.s2.creative_sub': { en: 'Writing, painting, thinking', es: 'Escribir, pintar, pensar', fr: 'Écrire, peindre, réfléchir' },
    'exp.s2.business': { en: 'Work with quietude', es: 'Trabajo con quietud', fr: 'Travail dans le calme' },
    'exp.s2.business_sub': { en: 'Offsite or solo', es: 'Retiro de equipo o individual', fr: 'Hors site ou en solo' },
    'exp.s2.anniversary.followup': {
      en: 'Tell us about the anniversary',
      es: 'Cuéntenos sobre el aniversario',
      fr: 'Parlez-nous de l\u2019anniversaire'
    },
    'exp.s2.anniversary.followup_help': {
      en: '(year, partner\u2019s name, anything you\u2019d like us to know)',
      es: '(año, nombre de su pareja, cualquier cosa que quiera contarnos)',
      fr: '(année, prénom du conjoint, tout ce que vous souhaitez nous confier)'
    },
    'exp.s2.anniversary.followup_ph': {
      en: 'e.g., 10th wedding anniversary &mdash; would love to surprise my wife Elena',
      es: 'por ejemplo, 10 aniversario de bodas &mdash; me encantaría sorprender a mi esposa Elena',
      fr: 'par ex., 10e anniversaire de mariage &mdash; j\u2019aimerais surprendre mon épouse Elena'
    },
    'exp.s2.birthday.followup': {
      en: 'Whose birthday and which year?',
      es: '¿Cumpleaños de quién y qué año?',
      fr: 'Anniversaire de qui et quelle année ?'
    },
    'exp.s2.birthday.followup_help': {
      en: '(any details that would help us mark it well)',
      es: '(cualquier detalle que nos ayude a celebrarlo bien)',
      fr: '(tout détail qui nous aiderait à bien le marquer)'
    },
    'exp.s2.birthday.followup_ph': {
      en: 'e.g., my husband\u2019s 50th &mdash; he loves single-malt whiskey',
      es: 'por ejemplo, los 50 de mi esposo &mdash; le encanta el whisky single malt',
      fr: 'par ex., les 50 ans de mon mari &mdash; il adore le whisky single malt'
    },
    'exp.s2.perfectday': { en: 'What does the perfect day look like to you?', es: '¿Cómo es el día perfecto para usted?', fr: 'À quoi ressemble la journée parfaite pour vous ?' },
    'exp.s2.perfectday_opt': { en: '(in your own words)', es: '(en sus propias palabras)', fr: '(en vos propres mots)' },
    'exp.s2.perfectday_ph': {
      en: 'A long breakfast on the terrace, a swim in the lagoon, an afternoon read in a hammock, dinner under the stars...',
      es: 'Un desayuno largo en la terraza, un baño en la laguna, una lectura por la tarde en una hamaca, una cena bajo las estrellas...',
      fr: 'Un long petit-déjeuner sur la terrasse, une baignade dans le lagon, une lecture d\u2019après-midi dans un hamac, un dîner sous les étoiles...'
    },
    'exp.s2.pace': { en: 'Pace of the trip', es: 'Ritmo del viaje', fr: 'Rythme du séjour' },
    'exp.s2.pace.slow': { en: 'Slow &amp; spacious', es: 'Lento y espacioso', fr: 'Lent &amp; aéré' },
    'exp.s2.pace.slow_sub': { en: 'Few plans, lots of room to breathe', es: 'Pocos planes, mucho espacio para respirar', fr: 'Peu de plans, beaucoup d\u2019espace pour respirer' },
    'exp.s2.pace.balanced': { en: 'Balanced', es: 'Equilibrado', fr: 'Équilibré' },
    'exp.s2.pace.balanced_sub': { en: 'A mix of stillness and activity', es: 'Una mezcla de quietud y actividad', fr: 'Un mélange de calme et d\u2019activité' },
    'exp.s2.pace.active': { en: 'Full of life', es: 'Lleno de vida', fr: 'Plein de vie' },
    'exp.s2.pace.active_sub': { en: 'We want to do, see, taste', es: 'Queremos hacer, ver, saborear', fr: 'Nous voulons faire, voir, goûter' },

    // STEP 3
    'exp.s3.title': { en: 'At the <em>table</em>', es: 'En la <em>mesa</em>', fr: 'À <em>table</em>' },
    'exp.s3.intro': {
      en: 'Our cuisine is rooted in the Yucatán &mdash; honey from our Melipona bees, fish from the lagoon, herbs from the garden. Tell us how to cook for you.',
      es: 'Nuestra cocina está enraizada en el Yucatán &mdash; miel de nuestras abejas Melipona, pescado de la laguna, hierbas del huerto. Cuéntenos cómo cocinar para usted.',
      fr: 'Notre cuisine est enracinée dans le Yucatán &mdash; miel de nos abeilles Melipona, poissons du lagon, herbes du jardin. Dites-nous comment cuisiner pour vous.'
    },
    'exp.s3.diet': { en: 'Dietary preferences', es: 'Preferencias alimentarias', fr: 'Préférences alimentaires' },
    'exp.s3.diet_opt': { en: '(check any that apply)', es: '(marque las que apliquen)', fr: '(cochez celles qui s\u2019appliquent)' },
    'exp.s3.diet.none': { en: 'No restrictions', es: 'Sin restricciones', fr: 'Aucune restriction' },
    'exp.s3.diet.veg': { en: 'Vegetarian', es: 'Vegetariano', fr: 'Végétarien' },
    'exp.s3.diet.vegan': { en: 'Vegan', es: 'Vegano', fr: 'Végétalien' },
    'exp.s3.diet.pesc': { en: 'Pescatarian', es: 'Pescetariano', fr: 'Pesco-végétarien' },
    'exp.s3.diet.gf': { en: 'Gluten-free', es: 'Sin gluten', fr: 'Sans gluten' },
    'exp.s3.diet.df': { en: 'Dairy-free', es: 'Sin lácteos', fr: 'Sans produits laitiers' },
    'exp.s3.diet.kosher': { en: 'Kosher', es: 'Kosher', fr: 'Casher' },
    'exp.s3.diet.halal': { en: 'Halal', es: 'Halal', fr: 'Halal' },
    'exp.s3.diet.keto': { en: 'Low-carb / Keto', es: 'Baja en carbohidratos / Keto', fr: 'Faible en glucides / Céto' },
    'exp.s3.diet.other': { en: 'Other (we\u2019ll ask below)', es: 'Otro (le preguntaremos abajo)', fr: 'Autre (nous demanderons ci-dessous)' },
    'exp.s3.allergies': { en: 'Allergies or sensitivities', es: 'Alergias o sensibilidades', fr: 'Allergies ou sensibilités' },
    'exp.s3.allergies_help': {
      en: 'Anything our kitchen must absolutely know &mdash; nuts, shellfish, sesame, etc. Please be specific.',
      es: 'Cualquier cosa que nuestra cocina deba saber con certeza &mdash; frutos secos, mariscos, sésamo, etc. Por favor, sea específico.',
      fr: 'Tout ce que notre cuisine doit absolument savoir &mdash; fruits à coque, fruits de mer, sésame, etc. Soyez précis, s\u2019il vous plaît.'
    },
    'exp.s3.allergies_ph': {
      en: 'e.g., severe tree-nut allergy in our 8-year-old; my partner can\u2019t have shellfish',
      es: 'por ejemplo, alergia severa a frutos secos de árbol en nuestro hijo de 8 años; mi pareja no puede comer mariscos',
      fr: 'par ex., allergie sévère aux fruits à coque chez notre enfant de 8 ans ; mon conjoint ne peut pas manger de fruits de mer'
    },
    'exp.s3.bev': { en: 'Beverage preferences', es: 'Preferencias de bebidas', fr: 'Préférences de boissons' },
    'exp.s3.bev.wine': { en: 'Wine enthusiasts', es: 'Aficionados al vino', fr: 'Amateurs de vin' },
    'exp.s3.bev.wine_sub': { en: 'Pairings, special bottles welcome', es: 'Maridajes, botellas especiales bienvenidas', fr: 'Accords mets-vins, bouteilles spéciales bienvenues' },
    'exp.s3.bev.mezcal': { en: 'Mezcal &amp; agave spirits', es: 'Mezcal y destilados de agave', fr: 'Mezcal &amp; spiritueux d\u2019agave' },
    'exp.s3.bev.cocktail': { en: 'Crafted cocktails', es: 'Cócteles de autor', fr: 'Cocktails d\u2019auteur' },
    'exp.s3.bev.na': { en: 'Non-alcoholic only', es: 'Solo sin alcohol', fr: 'Sans alcool uniquement' },
    'exp.s3.bev.na_sub': { en: 'Botanical drinks, fresh juices', es: 'Bebidas botánicas, jugos frescos', fr: 'Boissons botaniques, jus frais' },
    'exp.s3.bev.champ': { en: 'Champagne moments', es: 'Momentos de champán', fr: 'Moments champagne' },
    'exp.s3.bev.coffee': { en: 'Serious coffee &amp; tea', es: 'Café y té de alta calidad', fr: 'Café &amp; thé d\u2019exception' },
    'exp.s3.bev.coffee_sub': { en: 'Specialty brewing', es: 'Métodos de especialidad', fr: 'Préparation de spécialité' },
    'exp.s3.dining': { en: 'Dining experiences you\u2019d love', es: 'Experiencias gastronómicas que le encantarían', fr: 'Expériences culinaires qui vous enchanteraient' },
    'exp.s3.dining.private': { en: 'Private chef in your villa', es: 'Chef privado en su villa', fr: 'Chef privé dans votre villa' },
    'exp.s3.dining.private_sub': { en: 'Tasting menu, just for your party', es: 'Menú de degustación, solo para su grupo', fr: 'Menu dégustation, uniquement pour votre groupe' },
    'exp.s3.dining.beach': { en: 'Lagoon-side candlelit dinner', es: 'Cena a la luz de las velas junto a la laguna', fr: 'Dîner aux chandelles au bord du lagon' },
    'exp.s3.dining.class': { en: 'Yucatecan cooking class', es: 'Clase de cocina yucateca', fr: 'Cours de cuisine yucatèque' },
    'exp.s3.dining.class_sub': { en: 'With our chef &amp; local cooks', es: 'Con nuestro chef y cocineras locales', fr: 'Avec notre chef &amp; des cuisinières locales' },
    'exp.s3.dining.market': { en: 'Market tour in Bacalar', es: 'Recorrido por el mercado de Bacalar', fr: 'Visite du marché de Bacalar' },
    'exp.s3.dining.tasting': { en: 'Curated mezcal tasting', es: 'Cata de mezcal curada', fr: 'Dégustation de mezcal curatée' },
    'exp.s3.dining.surprise': { en: 'Surprise us', es: 'Sorpréndannos', fr: 'Surprenez-nous' },
    'exp.s3.dining.surprise_sub': { en: 'Trust your kitchen entirely', es: 'Confiamos completamente en su cocina', fr: 'Nous faisons entièrement confiance à votre cuisine' },
    'exp.s3.notes': { en: 'Anything else about food &amp; drink we should know?', es: '¿Algo más sobre comida y bebida que debamos saber?', fr: 'Autre chose à savoir sur la nourriture &amp; les boissons ?' },
    'exp.s3.notes_opt': { en: '(favorites, dislikes, rituals)', es: '(favoritos, aversiones, rituales)', fr: '(favoris, aversions, rituels)' },
    'exp.s3.notes_ph': {
      en: 'e.g., my husband loves a strong espresso first thing &mdash; before anything else. We\u2019ve been told we eat slowly.',
      es: 'por ejemplo, a mi esposo le encanta un espresso fuerte a primera hora &mdash; antes que nada. Nos han dicho que comemos despacio.',
      fr: 'par ex., mon mari adore un espresso bien serré dès le matin &mdash; avant toute chose. On nous a dit que nous mangeons lentement.'
    },

    // STEP 4
    'exp.s4.title': { en: 'The <em>experiences</em>', es: 'Las <em>experiencias</em>', fr: 'Les <em>expériences</em>' },
    'exp.s4.intro': {
      en: 'Bacalar\u2019s seven-coloured lagoon, the Maya jungle, ancient cenotes, the rhythms of village life &mdash; these are the things we curate around. Indicate what calls to you, and we\u2019ll build your days from there.',
      es: 'La laguna de los siete colores de Bacalar, la selva maya, los cenotes antiguos, los ritmos de la vida del pueblo &mdash; estas son las cosas alrededor de las cuales curamos. Indique lo que le atrae, y construiremos sus días a partir de ahí.',
      fr: 'Le lagon aux sept couleurs de Bacalar, la jungle maya, les cénotes anciens, les rythmes de la vie villageoise &mdash; ce sont ces éléments autour desquels nous composons. Indiquez ce qui vous attire, et nous bâtirons vos journées à partir de là.'
    },
    'exp.s4.wellness': { en: 'Wellness &amp; ritual', es: 'Bienestar y ritual', fr: 'Bien-être &amp; rituel' },
    'exp.s4.well.temazcal': { en: 'Temazcal with a local shaman', es: 'Temazcal con un chamán local', fr: 'Temazcal avec un chaman local' },
    'exp.s4.well.temazcal_sub': { en: 'An intimate, authentic ceremony', es: 'Una ceremonia íntima y auténtica', fr: 'Une cérémonie intime et authentique' },
    'exp.s4.well.couples': { en: 'Couples massage', es: 'Masaje en pareja', fr: 'Massage en couple' },
    'exp.s4.well.couples_sub': { en: 'In your villa, lagoon-side', es: 'En su villa, junto a la laguna', fr: 'Dans votre villa, au bord du lagon' },
    'exp.s4.well.solo': { en: 'Solo treatments', es: 'Tratamientos individuales', fr: 'Soins individuels' },
    'exp.s4.well.solo_sub': { en: 'Massage, facial, body ritual', es: 'Masaje, facial, ritual corporal', fr: 'Massage, soin du visage, rituel corporel' },
    'exp.s4.well.sound': { en: 'Sound bath / breathwork', es: 'Baño sonoro / trabajo respiratorio', fr: 'Bain sonore / travail respiratoire' },
    'exp.s4.well.yoga': { en: 'Private yoga sessions', es: 'Sesiones privadas de yoga', fr: 'Séances de yoga privées' },
    'exp.s4.well.cacao': { en: 'Cacao ceremony', es: 'Ceremonia de cacao', fr: 'Cérémonie du cacao' },
    'exp.s4.water': { en: 'On the lagoon &amp; in the water', es: 'En la laguna y en el agua', fr: 'Sur le lagon &amp; dans l\u2019eau' },
    'exp.s4.water.sail': { en: 'Private sailboat day', es: 'Día en velero privado', fr: 'Journée en voilier privé' },
    'exp.s4.water.sail_sub': { en: 'Captain, lunch, the seven blues', es: 'Capitán, almuerzo, los siete azules', fr: 'Capitaine, déjeuner, les sept bleus' },
    'exp.s4.water.kayak': { en: 'Kayak or paddleboard', es: 'Kayak o paddleboard', fr: 'Kayak ou paddleboard' },
    'exp.s4.water.cenote': { en: 'Cenote excursion', es: 'Excursión a cenote', fr: 'Excursion au cénote' },
    'exp.s4.water.cenote_sub': { en: 'Sacred Maya freshwater pools', es: 'Pozas sagradas mayas de agua dulce', fr: 'Bassins d\u2019eau douce sacrés mayas' },
    'exp.s4.water.strom': { en: 'Stromatolite tour', es: 'Recorrido por estromatolitos', fr: 'Visite des stromatolites' },
    'exp.s4.water.strom_sub': { en: 'Ancient living formations', es: 'Antiguas formaciones vivas', fr: 'Anciennes formations vivantes' },
    'exp.s4.water.fish': { en: 'Fly fishing in the flats', es: 'Pesca con mosca en los bajíos', fr: 'Pêche à la mouche dans les hauts-fonds' },
    'exp.s4.water.sunset': { en: 'Sunset cruise with mezcal', es: 'Crucero al atardecer con mezcal', fr: 'Croisière au coucher du soleil avec mezcal' },
    'exp.s4.culture': { en: 'Culture, history &amp; the land', es: 'Cultura, historia y la tierra', fr: 'Culture, histoire &amp; territoire' },
    'exp.s4.cul.kohun': { en: 'Kohunlich ruins', es: 'Ruinas de Kohunlich', fr: 'Ruines de Kohunlich' },
    'exp.s4.cul.kohun_sub': { en: 'Maya archaeological site', es: 'Sitio arqueológico maya', fr: 'Site archéologique maya' },
    'exp.s4.cul.chac': { en: 'Chacchoben ruins', es: 'Ruinas de Chacchoben', fr: 'Ruines de Chacchoben' },
    'exp.s4.cul.chac_sub': { en: 'Pyramids in the jungle', es: 'Pirámides en la selva', fr: 'Pyramides dans la jungle' },
    'exp.s4.cul.village': { en: 'Bacalar village walk', es: 'Paseo por el pueblo de Bacalar', fr: 'Promenade dans le village de Bacalar' },
    'exp.s4.cul.village_sub': { en: 'With a local guide', es: 'Con un guía local', fr: 'Avec un guide local' },
    'exp.s4.cul.artisan': { en: 'Artisan studio visits', es: 'Visitas a talleres artesanales', fr: 'Visites d\u2019ateliers artisanaux' },
    'exp.s4.cul.artisan_sub': { en: 'Textiles, ceramics, woodwork', es: 'Textiles, cerámica, ebanistería', fr: 'Textiles, céramique, menuiserie' },
    'exp.s4.cul.bee': { en: 'Visit our Melipona bees', es: 'Visita a nuestras abejas Melipona', fr: 'Visite de nos abeilles Melipona' },
    'exp.s4.cul.bee_sub': { en: 'The sacred stingless bee', es: 'La abeja sagrada sin aguijón', fr: 'L\u2019abeille sacrée sans dard' },
    'exp.s4.cul.bird': { en: 'Birdwatching in the reserves', es: 'Avistamiento de aves en las reservas', fr: 'Observation des oiseaux dans les réserves' },
    'exp.s4.logistics': { en: 'Logistics &amp; refinements', es: 'Logística y refinamientos', fr: 'Logistique &amp; raffinements' },
    'exp.s4.log.driver': { en: 'Private vehicle &amp; driver', es: 'Vehículo y chofer privados', fr: 'Véhicule &amp; chauffeur privés' },
    'exp.s4.log.driver_sub': { en: 'For the duration of your stay', es: 'Durante toda su estancia', fr: 'Pour la durée de votre séjour' },
    'exp.s4.log.photog': { en: 'Personal photographer', es: 'Fotógrafo personal', fr: 'Photographe personnel' },
    'exp.s4.log.photog_sub': { en: 'An hour, a day, the whole stay', es: 'Una hora, un día, toda la estancia', fr: 'Une heure, une journée, tout le séjour' },
    'exp.s4.log.florist': { en: 'Florist for arrival', es: 'Florista para la llegada', fr: 'Fleuriste pour l\u2019arrivée' },
    'exp.s4.log.child': { en: 'Trusted childcare', es: 'Cuidado infantil de confianza', fr: 'Garde d\u2019enfants de confiance' },
    'exp.s4.log.butler': { en: 'Dedicated butler', es: 'Mayordomo dedicado', fr: 'Majordome dédié' },
    'exp.s4.log.security': { en: 'Discretion / privacy detail', es: 'Discreción / equipo de privacidad', fr: 'Discrétion / dispositif de confidentialité' },
    'exp.s4.other': { en: 'Anything else you\u2019ve dreamed of, that we haven\u2019t listed?', es: '¿Algo más que haya soñado, que no hayamos enumerado?', fr: 'Autre chose dont vous avez rêvé, que nous n\u2019avons pas mentionné ?' },
    'exp.s4.other_ph': {
      en: 'e.g., a calligraphy lesson; a private astronomer for a stargazing night; a chocolatier workshop with the kids...',
      es: 'por ejemplo, una clase de caligrafía; un astrónomo privado para una noche de estrellas; un taller de chocolatería con los niños...',
      fr: 'par ex., un cours de calligraphie ; un astronome privé pour une nuit d\u2019observation des étoiles ; un atelier de chocolatier avec les enfants...'
    },

    // STEP 5
    'exp.s5.title': { en: 'The smaller <em>graces</em>', es: 'Los pequeños <em>detalles</em>', fr: 'Les petites <em>attentions</em>' },
    'exp.s5.intro': {
      en: 'The little things often make the trip. Here is where we ask after them.',
      es: 'Los pequeños detalles a menudo definen el viaje. Aquí es donde preguntamos por ellos.',
      fr: 'Ce sont souvent les petites choses qui font le voyage. C\u2019est ici que nous nous en enquérons.'
    },
    'exp.s5.arrival_label': { en: 'Awaiting you on arrival', es: 'A su llegada', fr: 'Vous attendant à votre arrivée' },
    'exp.s5.arrival_help': {
      en: 'A welcome that feels personal. Tick anything that resonates &mdash; or specify your own below.',
      es: 'Una bienvenida que se sienta personal. Marque lo que le resuene &mdash; o especifique la suya más abajo.',
      fr: 'Un accueil qui vous ressemble. Cochez ce qui vous correspond &mdash; ou précisez votre choix ci-dessous.'
    },
    'exp.s5.champ': { en: 'A bottle of champagne, chilled', es: 'Una botella de champán, fría', fr: 'Une bouteille de champagne, fraîche' },
    'exp.s5.flowers': { en: 'Fresh flowers in the room', es: 'Flores frescas en la habitación', fr: 'Fleurs fraîches dans la chambre' },
    'exp.s5.fruit': { en: 'Local fruit &amp; honey board', es: 'Tabla de frutas locales y miel', fr: 'Plateau de fruits locaux &amp; miel' },
    'exp.s5.spirits': { en: 'A particular bottle of spirits', es: 'Una botella particular de licor', fr: 'Une bouteille de spiritueux particulière' },
    'exp.s5.spirits_sub': { en: 'Tell us which', es: 'Cuéntenos cuál', fr: 'Dites-nous laquelle' },
    'exp.s5.books': { en: 'Curated books &amp; reading', es: 'Libros y lecturas curadas', fr: 'Livres &amp; lectures curatés' },
    'exp.s5.note': { en: 'A handwritten welcome note', es: 'Una nota de bienvenida escrita a mano', fr: 'Un mot de bienvenue manuscrit' },
    'exp.s5.sourcing': { en: 'Specific bottles, books, or items to source', es: 'Botellas, libros o artículos específicos a conseguir', fr: 'Bouteilles, livres ou articles spécifiques à se procurer' },
    'exp.s5.sourcing_ph': {
      en: 'e.g., a bottle of Casa Dragones Joven; the latest Patti Smith memoir; a particular vinyl &mdash; we\u2019ll do our best to source it before you arrive',
      es: 'por ejemplo, una botella de Casa Dragones Joven; las últimas memorias de Patti Smith; un vinilo particular &mdash; haremos lo posible por conseguirlo antes de su llegada',
      fr: 'par ex., une bouteille de Casa Dragones Joven ; les derniers mémoires de Patti Smith ; un vinyle particulier &mdash; nous ferons de notre mieux pour le trouver avant votre arrivée'
    },
    'exp.s5.final': { en: 'Is there anything else we should know to make this perfect?', es: '¿Hay algo más que debamos saber para hacerla perfecta?', fr: 'Y a-t-il autre chose à savoir pour rendre ce séjour parfait ?' },
    'exp.s5.final_help': {
      en: 'A surprise you\u2019re planning. A health consideration. A meaningful date. A guest with a fear of water. Whatever it is &mdash; this is the place.',
      es: 'Una sorpresa que esté planeando. Una consideración de salud. Una fecha significativa. Un huésped con miedo al agua. Sea lo que sea &mdash; este es el lugar.',
      fr: 'Une surprise que vous préparez. Une considération de santé. Une date marquante. Un invité ayant peur de l\u2019eau. Quoi que ce soit &mdash; c\u2019est ici.'
    },
    'exp.s5.final_ph': {
      en: 'Speak freely. The more you share, the better we can prepare.',
      es: 'Hable con libertad. Cuanto más comparta, mejor podremos prepararnos.',
      fr: 'Parlez librement. Plus vous partagerez, mieux nous pourrons nous préparer.'
    },

    // STEP 6
    'exp.s6.title': { en: 'Where to <em>find you</em>', es: 'Dónde <em>encontrarle</em>', fr: 'Où vous <em>joindre</em>' },
    'exp.s6.intro': {
      en: 'A team member will be in touch within 24 hours, in your preferred way, to begin the conversation.',
      es: 'Un miembro de nuestro equipo se pondrá en contacto en 24 horas, por la vía de su preferencia, para iniciar la conversación.',
      fr: 'Un membre de notre équipe vous contactera sous 24 heures, par le moyen de votre choix, pour entamer la conversation.'
    },
    'exp.s6.name': { en: 'Full Name', es: 'Nombre Completo', fr: 'Nom Complet' },
    'exp.s6.name_ph': { en: 'Jane Doe', es: 'Juan Pérez', fr: 'Jean Dupont' },
    'exp.s6.country': { en: 'Country of Residence', es: 'País de Residencia', fr: 'Pays de Résidence' },
    'exp.s6.country_ph': { en: 'United States', es: 'Estados Unidos', fr: 'France' },
    'exp.s6.email': { en: 'Email', es: 'Correo Electrónico', fr: 'Courriel' },
    'exp.s6.email_ph': { en: 'you@example.com', es: 'usted@ejemplo.com', fr: 'vous@exemple.com' },
    'exp.s6.phone': { en: 'Phone', es: 'Teléfono', fr: 'Téléphone' },
    'exp.s6.phone_opt': { en: '(with country code)', es: '(con código de país)', fr: '(avec indicatif pays)' },
    'exp.s6.phone_ph': { en: '+1 305 555 0100', es: '+52 55 1234 5678', fr: '+33 1 23 45 67 89' },
    'exp.s6.contactpref': { en: 'Preferred way to be reached', es: 'Forma preferida de contacto', fr: 'Mode de contact préféré' },
    'exp.s6.contactpref.email': { en: 'Email', es: 'Correo Electrónico', fr: 'Courriel' },
    'exp.s6.contactpref.phone': { en: 'Phone', es: 'Teléfono', fr: 'Téléphone' },
    'exp.s6.contactpref.wa': { en: 'WhatsApp', es: 'WhatsApp', fr: 'WhatsApp' },
    'exp.s6.referral': { en: 'How did you hear of Melipona Bacalar?', es: '¿Cómo conoció Melipona Bacalar?', fr: 'Comment avez-vous entendu parler de Melipona Bacalar ?' },
    'exp.s6.ref.friend': { en: 'Friend or family referral', es: 'Recomendación de amigo o familiar', fr: 'Recommandation d\u2019un ami ou de la famille' },
    'exp.s6.ref.advisor': { en: 'Travel advisor', es: 'Asesor de viajes', fr: 'Conseiller en voyages' },
    'exp.s6.ref.press': { en: 'Press or magazine', es: 'Prensa o revista', fr: 'Presse ou magazine' },
    'exp.s6.ref.social': { en: 'Social media', es: 'Redes sociales', fr: 'Réseaux sociaux' },
    'exp.s6.ref.search': { en: 'Search', es: 'Buscador', fr: 'Recherche' },
    'exp.s6.ref.return': { en: 'Returning guest', es: 'Huésped que regresa', fr: 'Client de retour' },
    'exp.s6.ref.other': { en: 'Other', es: 'Otro', fr: 'Autre' },

    // Buttons / nav
    'exp.btn.continue': { en: 'Continue', es: 'Continuar', fr: 'Continuer' },
    'exp.btn.back': { en: 'Back', es: 'Atrás', fr: 'Retour' },
    'exp.btn.submit': { en: 'Send Inquiry', es: 'Enviar Consulta', fr: 'Envoyer la Demande' },

    // Field tag helpers
    'exp.optional': { en: '(optional)', es: '(opcional)', fr: '(optionnel)' },

    // Confirmation
    'exp.confirm.title': {
      en: 'Thank you. We\u2019ve <em>received</em> your note.',
      es: 'Gracias. Hemos <em>recibido</em> su mensaje.',
      fr: 'Merci. Nous avons <em>reçu</em> votre message.'
    },
    'exp.confirm.body1': {
      en: 'Your inquiry is already in the hands of our concierge team. Within 24 hours, someone will reach out personally &mdash; in the way you\u2019ve asked &mdash; to begin shaping your stay.',
      es: 'Su consulta ya está en manos de nuestro equipo de concierge. En 24 horas, alguien se pondrá en contacto personalmente &mdash; por la vía que ha solicitado &mdash; para comenzar a diseñar su estancia.',
      fr: 'Votre demande est déjà entre les mains de notre équipe de concierge. Sous 24 heures, quelqu\u2019un vous contactera personnellement &mdash; par le moyen que vous avez choisi &mdash; pour commencer à façonner votre séjour.'
    },
    'exp.confirm.body2': {
      en: 'In the meantime, please feel free to add anything that comes to mind. We read every word.',
      es: 'Mientras tanto, no dude en añadir cualquier cosa que se le ocurra. Leemos cada palabra.',
      fr: 'En attendant, n\u2019hésitez pas à ajouter tout ce qui vous vient à l\u2019esprit. Nous lisons chaque mot.'
    },
    'exp.confirm.signoff': {
      en: '— The Melipona Bacalar Team',
      es: '— El equipo de Melipona Bacalar',
      fr: '— L\u2019équipe Melipona Bacalar'
    },

    // Language switcher tooltips
    'lang.switch': { en: 'Language', es: 'Idioma', fr: 'Langue' },
    'lang.en': { en: 'English', es: 'Inglés', fr: 'Anglais' },
    'lang.es': { en: 'Spanish (Mexico)', es: 'Español (México)', fr: 'Espagnol (Mexique)' },
    'lang.fr': { en: 'French (France)', es: 'Francés (Francia)', fr: 'Français (France)' }
  };

  // -------------------------------------------------------------
  // 2. FLAG SVGs
  // Inline SVG so they render crisp at any size and don't depend
  // on emoji rendering across devices.
  // -------------------------------------------------------------
  const FLAGS = {
    // England — St. George's Cross (red cross on white)
    en: '<svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<rect width="60" height="36" fill="#fff"/>' +
        '<rect x="24" y="0" width="12" height="36" fill="#ce1124"/>' +
        '<rect x="0" y="12" width="60" height="12" fill="#ce1124"/>' +
        '</svg>',
    // Mexico — vertical green-white-red with simplified eagle
    es: '<svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<rect width="20" height="36" fill="#006847"/>' +
        '<rect x="20" width="20" height="36" fill="#fff"/>' +
        '<rect x="40" width="20" height="36" fill="#ce1126"/>' +
        '<circle cx="30" cy="18" r="4.5" fill="none" stroke="#8b5a2b" stroke-width="0.7"/>' +
        '<path d="M27 17 Q30 13 33 17 Q31 19 30 19 Q29 19 27 17 Z" fill="#8b5a2b"/>' +
        '</svg>',
    // France — vertical blue-white-red
    fr: '<svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<rect width="20" height="36" fill="#0055a4"/>' +
        '<rect x="20" width="20" height="36" fill="#fff"/>' +
        '<rect x="40" width="20" height="36" fill="#ef4135"/>' +
        '</svg>'
  };

  const LANG_ORDER = ['en', 'es', 'fr'];
  const LANG_NAMES = { en: 'English', es: 'Español', fr: 'Français' };
  const STORAGE_KEY = 'mb-lang';

  // -------------------------------------------------------------
  // 3. APPLY TRANSLATIONS
  // -------------------------------------------------------------
  function get(key, lang){
    const entry = T[key];
    if(!entry) return null;
    return entry[lang] || entry.en || null;
  }

  function applyLanguage(lang){
    if(!LANG_ORDER.includes(lang)) lang = 'en';

    document.documentElement.lang = (lang === 'es' ? 'es-MX' : (lang === 'fr' ? 'fr-FR' : 'en'));

    // Translate text content (innerHTML so embedded <em>, <br>, entities work)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = get(key, lang);
      if(val !== null) el.innerHTML = val;
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = get(key, lang);
      if(val !== null){
        // Strip HTML entities/tags for placeholder (plain text only)
        const tmp = document.createElement('div');
        tmp.innerHTML = val;
        el.placeholder = tmp.textContent;
      }
    });

    // Translate aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const val = get(key, lang);
      if(val !== null){
        const tmp = document.createElement('div');
        tmp.innerHTML = val;
        el.setAttribute('aria-label', tmp.textContent);
      }
    });

    // Translate document title
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if(titleKey){
      const val = get(titleKey, lang);
      if(val !== null){
        const tmp = document.createElement('div');
        tmp.innerHTML = val;
        document.title = tmp.textContent;
      }
    }

    // Translate dynamic step counters (e.g. "Step {n} of 6")
    document.querySelectorAll('[data-i18n-step]').forEach(el => {
      const n = el.getAttribute('data-i18n-step');
      const val = get('exp.step.of', lang);
      if(val !== null) el.textContent = val.replace('{n}', n);
    });

    // Update flag button to show current language flag
    const flagBtn = document.getElementById('lang-current-flag');
    if(flagBtn) flagBtn.innerHTML = FLAGS[lang];

    // Mark active option in dropdown
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  // -------------------------------------------------------------
  // 4. BUILD LANGUAGE SWITCHER UI
  // -------------------------------------------------------------
  function buildSwitcher(){
    if(document.getElementById('lang-switcher')) return; // already built

    const css = `
.lang-switcher{position:fixed;top:1.1rem;right:1.5rem;z-index:200;font-family:var(--font-body,'Outfit',system-ui,sans-serif)}
.lang-current{display:flex;align-items:center;gap:.5rem;background:transparent;border:1px solid rgba(245,240,230,0.32);padding:.55rem .75rem;cursor:pointer;color:#f5f0e6;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;font-weight:500;transition:all .3s;border-radius:0;line-height:1}
.lang-current:hover{border-color:rgba(61,191,160,0.85);color:#3dbfa0;background:rgba(45,159,134,0.06)}
.lang-current svg.flag{width:22px;height:13.2px;display:block;flex-shrink:0;border:1px solid rgba(0,0,0,0.12)}
.lang-current svg.chev{width:9px;height:9px;transition:transform .25s;opacity:.65;margin-left:.1rem}
.lang-switcher.open .lang-current svg.chev{transform:rotate(180deg)}
.lang-dropdown{position:absolute;top:calc(100% + .5rem);right:0;background:rgba(14,24,32,0.96);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(245,240,230,0.18);padding:.4rem 0;min-width:210px;opacity:0;pointer-events:none;transform:translateY(-6px);transition:all .25s}
.lang-switcher.open .lang-dropdown{opacity:1;pointer-events:auto;transform:translateY(0)}
.lang-option{display:flex;align-items:center;gap:.85rem;padding:.7rem 1rem;cursor:pointer;color:rgba(245,240,230,0.78);transition:all .2s;background:transparent;border:none;width:100%;text-align:left;font-family:inherit}
.lang-option:hover{background:rgba(45,159,134,0.14);color:#f5f0e6}
.lang-option.active{color:#3dbfa0}
.lang-option.active::after{content:'';width:5px;height:5px;background:#3dbfa0;border-radius:50%;margin-left:auto;flex-shrink:0}
.lang-option svg.flag{width:24px;height:14.4px;display:block;flex-shrink:0;border:1px solid rgba(0,0,0,0.12)}
.lang-option .lang-name{font-family:var(--font-display,'Cormorant Garamond',Georgia,serif);font-size:1.05rem;letter-spacing:.01em;text-transform:none;font-weight:400;line-height:1}
@media(max-width:768px){
.lang-switcher{top:.75rem;right:.75rem}
.lang-current{padding:.5rem .65rem;font-size:.62rem;gap:.4rem}
.lang-current svg.flag{width:20px;height:12px}
.lang-current .lang-label{display:none}
.lang-current svg.chev{display:none}
}
`;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    wrap.id = 'lang-switcher';

    const chev = '<svg class="chev" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 1.5l5 5 5-5"/></svg>';

    wrap.innerHTML =
      '<button type="button" class="lang-current" aria-label="Change language" aria-haspopup="true" aria-expanded="false">' +
        '<span class="flag" id="lang-current-flag"></span>' +
        '<span class="lang-label">EN</span>' +
        chev +
      '</button>' +
      '<div class="lang-dropdown" role="menu">' +
        LANG_ORDER.map(code =>
          '<button type="button" class="lang-option" data-lang="' + code + '" role="menuitem">' +
            '<span class="flag">' + FLAGS[code] + '</span>' +
            '<span class="lang-name">' + LANG_NAMES[code] + '</span>' +
          '</button>'
        ).join('') +
      '</div>';

    document.body.appendChild(wrap);

    const currentBtn = wrap.querySelector('.lang-current');
    const labelEl = wrap.querySelector('.lang-label');

    currentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle('open');
      currentBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    wrap.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = opt.getAttribute('data-lang');
        applyLanguage(code);
        labelEl.textContent = code.toUpperCase();
        wrap.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close dropdown on outside click or Escape
    document.addEventListener('click', () => {
      wrap.classList.remove('open');
      currentBtn.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        wrap.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Initialize from storage or browser preference
    let initial = 'en';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if(stored && LANG_ORDER.includes(stored)) initial = stored;
      else {
        const browserLang = (navigator.language || 'en').toLowerCase();
        if(browserLang.startsWith('es')) initial = 'es';
        else if(browserLang.startsWith('fr')) initial = 'fr';
      }
    } catch(e){}

    labelEl.textContent = initial.toUpperCase();
    applyLanguage(initial);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', buildSwitcher);
  } else {
    buildSwitcher();
  }

  // Expose for debugging / programmatic switching
  window.MB_i18n = { apply: applyLanguage, dictionary: T };
})();
