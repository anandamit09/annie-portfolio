/**
 * Project content. All text, names, palettes and specifications are taken
 * from the four portfolio PDFs (Surface Techniques, Weave Design Collection,
 * Basic Prints & Weaves, Print Design Collection). Images were extracted or
 * cropped from those PDFs without recolouring.
 */

export type Img = { src: string; alt: string; caption?: string };

export type Spec = { label: string; value: string };

export type Block = {
  kicker?: string;
  title: string;
  text?: string[];
  images?: Img[];
  /** grid layout for images */
  layout?: 'wide' | 'two' | 'three' | 'four' | 'tall-three';
  specs?: { heading?: string; rows: Spec[] }[];
  swatches?: { name: string; hex?: string }[];
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  source: string;
  summary: string;
  /** palette chips shown on detail page header, taken from the PDF */
  accent: string;
  card: [Img, Img, Img];
  hero: Img;
  blocks: Block[];
};

const i = (p: string) => `images/${p}.webp`;

export const projects: Project[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'gramin',
    number: '01',
    name: 'Gramin',
    category: 'Surface Design Techniques',
    source: 'Surface Techniques portfolio',
    summary:
      'A surface design collection drawn from the colour, craft and everyday ritual of village India — marigold garlands, strings of chillies, painted walls, stepwells and terracotta pots. Motifs travel from the moodboard to pencil sketches, then onto garments.',
    accent: '#C8321E',
    card: [
      { src: i('gramin/moodboard'), alt: 'Gramin moodboard: painted walls, a red door, marigolds, chilli strings, stepwells and the colour story' },
      { src: i('gramin/repeat-scallop'), alt: 'Gramin scallop motif in a repeat test, indigo rings on ivory' },
      { src: i('gramin/drive-scallop-trees'), alt: 'Final Gramin look: tunic in indigo scallop print on blush, photographed outdoors' },
    ],
    hero: { src: i('gramin/moodboard'), alt: 'Gramin moodboard collage' },
    blocks: [
      {
        kicker: '01 · Brand context',
        title: 'Designed around Jodi',
        text: [
          'The collection was developed around the brand context of Jodi, an India-based design studio and marketplace creating fashion-forward apparel, accessories and homeware using natural Indian textiles and artisanal craft — primarily hand block printing, bandhini dyeing and hand embroidery.',
          'Primary audience: young urban Indian women (18–35) who are fashion-conscious, culturally proud and environmentally aware.',
        ],
      },
      {
        kicker: '02 · Moodboard',
        title: 'From village to wardrobe',
        text: [
          'The moodboard is the visual foundation of the collection — its colours, textures, motifs and forms feed every page that follows. Saffron, marigold and poppy sit against teal, indigo and jade: warm village festival tones grounded by deep cool darks.',
          'Arched niches, panelled doors, stepwells and round mandalas give the collection its geometry — arcs, grids and zig-zags.',
        ],
        swatches: [
          { name: 'Rani pink' }, { name: 'Poppy red' }, { name: 'Saffron' }, { name: 'Teal' },
          { name: 'Jade green' }, { name: 'Mustard' }, { name: 'Walnut' }, { name: 'Indigo' },
          { name: 'Fuchsia' }, { name: 'Mint' }, { name: 'Ivory' }, { name: 'Black' },
        ],
      },
      {
        kicker: '03 · Motif exploration',
        title: 'Observe, experiment, refine',
        text: [
          'Recurring forms from the moodboard are collected, then drawn again and again — changing shape, scale and proportion — until the strongest motifs are chosen for refinement.',
        ],
        images: [
          { src: i('gramin/sketch-chilli'), alt: 'Pencil study sheet: chilli shapes and scale', caption: 'Study — chilli, shape + scale' },
          { src: i('gramin/sketch-rosette'), alt: 'Pencil study sheet: flower rosettes', caption: 'Study — flower rosettes' },
          { src: i('gramin/sketch-scallop'), alt: 'Pencil study sheet: scallop and wave repeat', caption: 'Study — scallop / wave repeat' },
          { src: i('gramin/sketch-leaf'), alt: 'Pencil study sheet: leaf and toran string', caption: 'Study — leaf + toran string' },
        ],
        layout: 'two',
      },
      {
        kicker: 'Selected + refined',
        title: 'Five motifs, five repeats',
        text: [
          'Five motifs are chosen from the sketch sheets and redrawn with clean outlines and flat colour, each tested in a simple repeat. The colours come straight from the moodboard.',
        ],
        images: [
          { src: i('gramin/motif-chilli'), alt: 'Refined chilli motif', caption: 'Chilli — from the hanging strings' },
          { src: i('gramin/motif-rosette'), alt: 'Refined rosette motif', caption: 'Rosette — layered, frilled lobes' },
          { src: i('gramin/motif-scallop'), alt: 'Refined scallop motif', caption: 'Scallop — overlapping rings' },
          { src: i('gramin/motif-leaf'), alt: 'Refined leaf motif', caption: 'Leaf — dots, rings, dashes' },
          { src: i('gramin/repeat-chilli'), alt: 'Chilli motif repeat test', caption: 'Repeat test' },
          { src: i('gramin/repeat-rosette'), alt: 'Rosette motif repeat test on red', caption: 'Repeat test' },
          { src: i('gramin/repeat-scallop'), alt: 'Scallop motif repeat test', caption: 'Repeat test' },
          { src: i('gramin/repeat-marigold'), alt: 'Marigold motif repeat test on green', caption: 'Marigold — rings of petals' },
        ],
        layout: 'four',
      },
      {
        kicker: '04 · Surface techniques',
        title: 'Sketch → surface',
        text: [
          'The craft vocabulary behind the collection — block printing, hand dyeing, screen printing and embroidery — studied from the Jodi research, then followed through to the finished surfaces. Each motif is followed from its refined drawing, to a repeat test, to the real close-up on the finished garment.',
        ],
        images: [
          { src: i('gramin/drive-chilli-detail'), alt: 'Close-up of red chilli motifs on an ivory shirt', caption: '01 · Chilli motifs in red on ivory' },
          { src: i('gramin/drive-rosette-detail'), alt: 'Close-up of white fabric flowers with red centres at the hip of a red dress', caption: '02 · White fabric flowers with red centres' },
          { src: i('gramin/drive-scallop-tunic'), alt: 'Close-up of the indigo scallop print tunic', caption: '03 · Indigo scallop print on blush' },
        ],
        layout: 'three',
      },
      {
        kicker: '05 · Final designs',
        title: 'Three looks, three surfaces',
        text: ['The refined motifs arrive on three garments. Each look carries one surface story, built from the moodboard palette.'],
        specs: [
          {
            rows: [
              { label: 'Look 01 — Chilli on ivory', value: 'An oversized shirt in ivory, scattered with small red chillies.' },
              { label: 'Look 02 — Rosettes in red', value: 'A red dress with white fabric flowers, each with a red heart.' },
              { label: 'Look 03 — Scallop in blush', value: 'A tunic in an indigo scallop print on blush, with green leaf detail at the neckline.' },
            ],
          },
        ],
      },
      {
        kicker: '06 · Final garment shoot',
        title: 'The collection, worn',
        text: ['Golden-hour light, forest shade and three surfaces in motion — the finished garments as they were meant to be seen.'],
        images: [
          { src: i('gramin/drive-chilli-shirt'), alt: 'Look 01: oversized ivory shirt with red chilli motifs', caption: 'I · Chilli on ivory — the shirt' },
          { src: i('gramin/drive-rosette-seated'), alt: 'Look 02: red dress with white fabric rosettes, seated in a forest', caption: 'II · Rosettes in red — the dress' },
          { src: i('gramin/drive-scallop-trees'), alt: 'Look 03: tunic in indigo scallop print on blush', caption: 'III · Scallop in blush — the tunic' },
          { src: i('gramin/drive-chilli-book'), alt: 'Look 01 worn while leaning against a tree' },
          { src: i('gramin/drive-rosette-standing'), alt: 'Look 02 worn, standing beneath trees' },
          { src: i('gramin/drive-chilli-detail'), alt: 'Detail of the chilli shirt in sunlight' },
          { src: i('gramin/drive-rosette-reading'), alt: 'Look 02, the red rosette dress, lying in the grass reading' },
          { src: i('gramin/drive-scallop-tunic'), alt: 'Look 03 photographed from a low angle against the sky' },
          { src: i('gramin/drive-rosette-detail'), alt: 'Close-up of white fabric rosettes on the red dress' },
        ],
        layout: 'three',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'postscript',
    number: '02',
    name: 'Postscript',
    category: 'Weave Design Collection',
    source: 'Weave Design Collection portfolio',
    summary:
      'Postscript explores the often-overlooked aftermath of a connection. While most stories focus on beginnings and endings, this collection reflects on the emotions that linger afterwards — the memories, growth and quiet warmth that remain.',
    accent: '#7A0F1E',
    card: [
      { src: i('post/inspiration'), alt: 'Postscript inspiration and mood: five atmospheric images of silhouettes against sunset tones' },
      { src: i('post/fabric-tangle'), alt: 'Fabric detail of The Tangle Before Dawn: black and maroon woven checks' },
      { src: i('post/drive-first-light-worn'), alt: 'First Light muffler in pink and white stripes, worn outdoors' },
    ],
    hero: { src: i('post/inspiration'), alt: 'Postscript inspiration and mood strip' },
    blocks: [
      {
        kicker: 'Concept',
        title: 'What remains',
        text: [
          'The narrative unfolds through a transition in woven surfaces, moving from complex and structured patterns that represent uncertainty and emotional entanglement, to lighter, more harmonious compositions that symbolise clarity, acceptance and renewal.',
          'Through colour, texture and weave development, the collection captures the transformation of emotions into lasting impressions, celebrating the beauty of what remains long after the moment has passed.',
        ],
      },
      {
        kicker: 'Muffler — 01',
        title: 'The Tangle Before Dawn',
        text: [
          "This muffler represents the emotional state of being caught within one's own thoughts. Like intersecting paths that continuously cross one another, the checked structure symbolises competing feelings, unanswered questions and the complexity of navigating change.",
          'Black conveys emotional depth, introspection and the weight of unresolved thoughts, while maroon represents passion, vulnerability and emotions that remain intense beneath the surface. Mood: heavy, structured, enclosed.',
        ],
        images: [
          { src: i('post/fabric-tangle'), alt: 'Fabric detail: black and maroon checks', caption: 'Fabric detail' },
          { src: i('post/draft-plain'), alt: 'Weave draft and lifting plan for plain weave', caption: 'Plain weave — draft' },
          { src: i('post/drive-tangle-detail'), alt: 'Close-up of the black and maroon muffler draped on the shoulder', caption: 'Close-up, worn' },
        ],
        layout: 'three',
        specs: [
          {
            heading: 'Specification & weave structure',
            rows: [
              { label: 'Size', value: '12 × 70 inches' },
              { label: 'Yarn', value: 'Wool-acrylic blend' },
              { label: 'Weave', value: 'Plain and twill' },
              { label: 'Colour', value: 'Black and maroon' },
            ],
          },
        ],
      },
      {
        kicker: 'Muffler — 02',
        title: 'First Light',
        text: [
          'This muffler represents the gradual shift from emotional conflict towards clarity and acceptance. After the tangled intersections of the first piece, the checked structure dissolves into stripes, creating a sense of movement, direction and progress.',
          'White represents openness, calmness and a blank space for renewal, while dusky pink embodies tenderness, hope and the quiet warmth that begins to re-emerge. Mood: gentle, optimistic, unfolding.',
        ],
        images: [
          { src: i('post/fabric-first-light'), alt: 'Fabric detail: pink and white herringbone stripes', caption: 'Fabric detail' },
          { src: i('post/draft-herringbone'), alt: 'Weave draft and lifting plan for herringbone', caption: 'Herringbone — draft' },
          { src: i('post/worn-first-light-2'), alt: 'First Light muffler worn outdoors', caption: 'Worn' },
        ],
        layout: 'three',
        specs: [
          {
            heading: 'Specification & weave structure',
            rows: [
              { label: 'Size', value: '15 × 75 inches' },
              { label: 'Yarn', value: 'Wool-acrylic blend' },
              { label: 'Weave', value: 'Plain and herringbone' },
              { label: 'Colour', value: 'Pink and white' },
            ],
          },
        ],
      },
      {
        kicker: 'Muffler — 03',
        title: 'Afterglow',
        images: [
          { src: i('post/fabric-afterglow'), alt: 'Fabric detail: multicolour pastel honeycomb blocks', caption: 'Fabric detail' },
          { src: i('post/draft-honeycomb'), alt: 'Weave draft and lifting plan for honeycomb', caption: 'Honeycomb — draft' },
          { src: i('post/drive-afterglow-detail'), alt: 'Close-up of the Afterglow muffler texture', caption: 'Close-up, worn' },
        ],
        layout: 'three',
        specs: [
          {
            heading: 'Specification & weave structure',
            rows: [
              { label: 'Yarn', value: 'Wool-acrylic blend' },
              { label: 'Weave', value: 'Plain, honeycomb and dobby' },
              { label: 'Colour', value: 'Multicolour' },
            ],
          },
        ],
      },
      {
        kicker: 'Worn',
        title: 'Three mufflers, one story',
        images: [
          { src: i('post/drive-tangle-worn'), alt: 'The Tangle Before Dawn muffler worn', caption: 'The Tangle Before Dawn' },
          { src: i('post/drive-first-light-worn'), alt: 'First Light muffler worn', caption: 'First Light' },
          { src: i('post/worn-afterglow-2'), alt: 'Afterglow muffler worn', caption: 'Afterglow' },
          { src: i('post/drive-tangle-worn-2'), alt: 'The Tangle Before Dawn muffler, alternative pose' },
          { src: i('post/worn-first-light-2'), alt: 'First Light muffler, alternative pose' },
          { src: i('post/worn-afterglow'), alt: 'Afterglow muffler, alternative pose' },
          { src: i('post/drive-first-light-detail'), alt: 'Close-up of the First Light muffler stripes and fringe' },
          { src: i('post/drive-tangle-detail'), alt: 'Close-up of the black and maroon checks of The Tangle Before Dawn' },
          { src: i('post/drive-afterglow-detail'), alt: 'Close-up of the pastel honeycomb and dobby texture of Afterglow' },
        ],
        layout: 'three',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nyx',
    number: '03',
    name: 'NYX',
    category: 'Print & Weave Collection',
    source: 'Basic Prints & Weaves portfolio',
    summary:
      'In Greek mythology, Nyx is the goddess of the night. This collection is inspired by moths — drawn to the moon, fluttering silently in the dark, delicate yet determined. Their existence mirrors that of many women: soft but powerful, hidden yet radiant.',
    accent: '#86025E',
    card: [
      { src: i('nyx/moth-concept'), alt: 'NYX concept artwork: a monochrome moth with crescent moons and florals' },
      { src: i('nyx/swatch-plain-weave'), alt: 'NYX woven swatch: plain weave check in black, white, pink and purple' },
      { src: i('nyx/look-lunar-whimsy'), alt: 'Lunar Whimsy: purple moths and white crescent moons on black, shown as a print and on a dress' },
    ],
    hero: { src: i('nyx/moodboard'), alt: 'NYX moodboard' },
    blocks: [
      {
        kicker: 'Concept note',
        title: 'Goddess of the night',
        text: [
          'Nyx is a primordial deity born from Chaos, revered for her power, mystery and quiet strength. She rules over the darkness not with fear, but with grace and intensity — a representation of the hidden depth and elegance that femininity holds.',
          'Client profile: creative professionals aged 20–35 — designers, writers, artists — who are introspective and value depth over appearance, choosing quality, purpose and emotion over fast trends.',
        ],
        images: [
          { src: i('nyx/final-motifs'), alt: 'NYX final motifs: butterflies, moths, roses, crescent moons and leaves', caption: 'Final motifs' },
        ],
        layout: 'wide',
        swatches: [
          { name: 'Plum', hex: '#64267F' },
          { name: 'Magenta', hex: '#86025E' },
          { name: 'Moon grey', hex: '#DCDCDC' },
        ],
      },
      {
        kicker: 'Print design',
        title: 'Six prints after dark',
        text: [
          'Blue Nocturne — vivid blue moths flutter across deep shadows, symbolising transformation in darkness.',
          'Whispering Roses — delicate spirals of roses represent the hidden gentleness within strength.',
          'Lunar Whimsy, Celestial Veil, Winged Symphony and Flutter Bloom complete the family: crescent moons, night florals and moth wings moving between shadow and light.',
        ],
        images: [
          { src: i('nyx/print-blue-nocturne'), alt: 'Blue Nocturne print draped: blue moths on black', caption: 'Blue Nocturne' },
          { src: i('nyx/print-whispering-roses'), alt: 'Whispering Roses print draped: pink roses on white', caption: 'Whispering Roses' },
          { src: i('nyx/print-lunar-whimsy'), alt: 'Lunar Whimsy print draped: purple moths and crescent moons on black', caption: 'Lunar Whimsy' },
          { src: i('nyx/print-celestial-veil'), alt: 'Celestial Veil print draped: purple moons and small florals on white', caption: 'Celestial Veil' },
          { src: i('nyx/print-winged-symphony'), alt: 'Winged Symphony print draped: pink butterflies and florals', caption: 'Winged Symphony' },
          { src: i('nyx/print-flutter-bloom'), alt: 'Flutter Bloom print draped: colourful moths and folk florals on white', caption: 'Flutter Bloom' },
        ],
        layout: 'three',
      },
      {
        kicker: 'Garment applications',
        title: 'Prints, worn',
        images: [
          { src: i('nyx/look-blue-nocturne'), alt: 'Blue Nocturne print applied to a robe', caption: 'Blue Nocturne' },
          { src: i('nyx/look-whispering-roses'), alt: 'Whispering Roses print applied to a kimono-style wrap', caption: 'Whispering Roses' },
          { src: i('nyx/garment-celestial-veil'), alt: 'Celestial Veil print on a wide-leg jumpsuit', caption: 'Celestial Veil' },
          { src: i('nyx/garment-winged-symphony'), alt: 'Winged Symphony print on a jacket', caption: 'Winged Symphony' },
          { src: i('nyx/garment-flutter-bloom'), alt: 'Flutter Bloom print on a long robe', caption: 'Flutter Bloom' },
          { src: i('nyx/garment-lunar-whimsy'), alt: 'Lunar Whimsy print on a dress with flared sleeves', caption: 'Lunar Whimsy' },
        ],
        layout: 'three',
      },
      {
        kicker: 'Weave design',
        title: 'Weaving swatches',
        text: [
          'To extend the theme beyond prints, woven swatches were created on a table-top loom using techniques such as plain weave, matt weave, herringbone, warp rib and twill. Each piece translates the delicate yet strong essence of the moth into tactile structures.',
        ],
        images: [
          { src: i('nyx/swatch-plain-weave'), alt: 'Plain weave swatch', caption: 'Plain weave' },
          { src: i('nyx/swatch-irregular-matt'), alt: 'Irregular matt weave swatch', caption: 'Irregular matt weave' },
          { src: i('nyx/swatch-regular-matt'), alt: 'Regular matt weave swatch', caption: 'Regular matt weave' },
          { src: i('nyx/swatch-warp-rib'), alt: 'Warp rib weave swatch', caption: 'Warp rib weave' },
          { src: i('nyx/swatch-weft-rib'), alt: 'Weft rib weave swatch', caption: 'Weft rib weave' },
          { src: i('nyx/swatch-herringbone'), alt: 'Herringbone weave swatch', caption: 'Herringbone weave' },
          { src: i('nyx/swatch-sz-twill'), alt: 'S-Z twill weave swatch', caption: 'S-Z twill weave' },
          { src: i('nyx/swatch-broken-twill'), alt: 'Broken twill weave swatch', caption: 'Broken twill weave' },
        ],
        layout: 'four',
        specs: [
          {
            heading: 'Specification sheet — all swatches',
            rows: [
              { label: 'Dimension', value: '8" × 8"' },
              { label: 'Warp / weft yarn', value: 'Polytex' },
              { label: 'Reed count', value: '32' },
              { label: 'No. of shafts', value: '16' },
              { label: 'Drafting plan', value: 'Straight draft' },
            ],
          },
        ],
      },
      {
        kicker: 'Final garment',
        title: 'She moves like a moth',
        text: [
          'Together, the two pieces express dual aspects of femininity inspired by the moth — soft yet strong, calm yet powerful. The jacket reflects visible stillness and simplicity, while the inner top reveals the intricate strength beneath the surface.',
          'The inner top combines plain weave, S-Z twill, warp knot, diamond twill and weaved pearl. The outer jacket carries a herringbone woven patch in a gentle purple gradient with a heart-shaped crochet.',
        ],
        images: [
          { src: i('nyx/woven-inner-top'), alt: 'Woven inner top combining several weave structures', caption: 'Inner top — mixed weaves' },
          { src: i('nyx/woven-jacket-shoot'), alt: 'Outer jacket with herringbone woven patch, photographed from several angles', caption: 'Jacket with herringbone patch' },
        ],
        layout: 'two',
      },
      {
        kicker: 'Final garment photoshoot',
        title: 'Under Nyx’s gaze',
        images: [
          { src: i('nyx/shoot-1'), alt: 'NYX photoshoot: Lunar Whimsy dress, seated on red fabric' },
          { src: i('nyx/shoot-2'), alt: 'NYX photoshoot: Lunar Whimsy dress with a fan' },
          { src: i('nyx/shoot-3'), alt: 'NYX photoshoot: back view of the Lunar Whimsy dress' },
        ],
        layout: 'three',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'suits-and-scribbles',
    number: '04',
    name: 'Suits & Scribbles',
    category: 'Print Design Collection',
    source: 'Print Design Collection portfolio',
    summary:
      'Shopping-inspired doodles become playful textile prints for sophisticated formalwear. A palette of black, white and hot pink brings together sophistication, confidence and a playful sense of self-expression.',
    accent: '#F00078',
    card: [
      { src: i('suits/doodle-sheet'), alt: 'Suits & Scribbles motif exploration: hand-drawn shopping doodles on grid paper' },
      { src: i('suits/print-pink-on-white'), alt: 'Suits & Scribbles print: pink doodle repeat on white' },
      { src: i('suits/drive-blazer-dress'), alt: 'Look 01, the blazer dress, in the pink and black doodle print' },
    ],
    hero: { src: i('suits/illustrations'), alt: 'Garment illustrations for the three Suits & Scribbles looks' },
    blocks: [
      {
        kicker: 'Inspiration',
        title: 'The Art of the Fashion Fix',
        text: [
          'Scroll. Save. Shop. Try on. Sip. From endless scrolling through online fashion pages and saving wishlist favourites to exploring boutiques, collecting shopping bags and unwinding over a glass of wine, the inspiration celebrates the little indulgences of a fashion-loving day.',
          'These everyday rituals became a playful visual diary, translated into spontaneous doodles and expressive textile prints.',
        ],
        images: [{ src: i('suits/inspiration-collage'), alt: 'Suits & Scribbles inspiration collage' }],
        layout: 'two',
      },
      {
        kicker: 'Trend forecast · S/S 2026',
        title: 'Playful Paradox',
        text: [
          "Inspired by WGSN's Playful Paradox trend for Spring/Summer 2026 — the serious meets the playful. The revival of expressive tailoring and decorative prints informed the design direction, encouraging an unconventional approach to classic suiting.",
        ],
        swatches: [
          { name: 'Black', hex: '#111111' },
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Hot pink', hex: '#F00078' },
        ],
      },
      {
        kicker: 'Motif exploration',
        title: 'Every little thing, doodled',
        text: [
          'Shopping bags, heels, wine glasses, sale tags and mall strolls were reimagined through spontaneous doodles, loose lines and playful compositions — then simplified: bigger loops, more wobble, keep it cheeky.',
        ],
        images: [
          { src: i('suits/motif-sketches'), alt: 'Word map and refined doodle icons: shopping, bags, drinks, fashion', caption: 'Mind map + refined icons' },
          { src: i('suits/doodle-sheet'), alt: 'Dense doodle clusters on grid paper', caption: 'Doodle clusters' },
        ],
        layout: 'two',
      },
      {
        kicker: 'The print family',
        title: 'Six colourways',
        images: [
          { src: i('suits/print-black-on-white'), alt: 'Black doodle print on white' },
          { src: i('suits/print-white-on-black'), alt: 'White doodle print on black' },
          { src: i('suits/print-pink-on-black'), alt: 'Pink doodle print on black' },
          { src: i('suits/print-pink-on-white'), alt: 'White doodle print on hot pink' },
          { src: i('suits/print-pink-sale'), alt: 'Scattered pink and white sale-tag doodles on black' },
          { src: i('suits/print-sale-scatter'), alt: 'Scattered white sale-tag doodles on black' },
        ],
        layout: 'three',
      },
      {
        kicker: 'Three looks, one design language',
        title: 'Formalwear, but make it fun',
        text: [
          'The collection explores three interpretations of contemporary formalwear through a blazer dress, a crop blazer and a slim-fit blazer, creating a contrast between playful surface design and sophisticated tailoring.',
        ],
        specs: [
          {
            rows: [
              { label: 'Look 01 — Blazer dress', value: 'The statement look. A bold reinterpretation of formalwear that merges the authority of a blazer with the confidence of a dress.' },
              { label: 'Look 02 — Crop blazer', value: 'The playful look. A youthful, fashion-forward take on suiting that experiments with proportion while keeping tailored detailing.' },
              { label: 'Look 03 — Slim-fit blazer', value: 'The classic look. The most conventional silhouette, showing how expressive surface design can refresh a wardrobe staple.' },
            ],
          },
        ],
      },
      {
        kicker: 'In lense',
        title: 'The final shoot',
        images: [
          { src: i('suits/drive-blazer-dress'), alt: 'Look 01: blazer dress in pink and black doodle print', caption: 'Blazer dress' },
          { src: i('suits/drive-crop-seated'), alt: 'Look 02: crop blazer in black and white doodle print', caption: 'Crop blazer' },
          { src: i('suits/shoot-slim-blazer'), alt: 'Look 03: slim-fit blazer in black and white doodle print', caption: 'Slim-fit blazer' },
          { src: i('suits/drive-blazer-dress-detail'), alt: 'Detail of the blazer dress collar and print' },
          { src: i('suits/drive-crop-detail'), alt: 'Detail of the crop blazer' },
          { src: i('suits/drive-slim-detail'), alt: 'Detail of the slim-fit blazer print' },
          { src: i('suits/drive-crop-standing'), alt: 'Look 02: crop blazer worn with wide-leg trousers, standing' },
          { src: i('suits/drive-slim-seated'), alt: 'Look 03: slim-fit blazer with a black skirt, seated' },
          { src: i('suits/drive-crop-detail'), alt: 'Detail of the crop blazer doodle print' },
        ],
        layout: 'three',
      },
    ],
  },
];

/** Images for the scroll marquee — real portfolio work only, no stock trend images. */
export const marqueeRowOne: Img[] = [
  { src: i('suits/print-pink-on-white'), alt: 'Suits & Scribbles hot-pink doodle print' },
  { src: i('nyx/print-blue-nocturne'), alt: 'NYX Blue Nocturne print' },
  { src: i('post/fabric-tangle'), alt: 'Postscript black and maroon woven check' },
  { src: i('gramin/repeat-scallop'), alt: 'Gramin scallop repeat' },
  { src: i('nyx/swatch-plain-weave'), alt: 'NYX plain weave swatch' },
  { src: i('suits/drive-blazer-dress'), alt: 'Suits & Scribbles blazer dress' },
  { src: i('gramin/sketch-rosette'), alt: 'Gramin rosette pencil study' },
  { src: i('nyx/print-lunar-whimsy'), alt: 'NYX Lunar Whimsy print' },
  { src: i('post/worn-afterglow-2'), alt: 'Postscript Afterglow muffler worn' },
  { src: i('gramin/drive-rosette-seated'), alt: 'Gramin rosettes in red dress' },
  { src: i('suits/doodle-sheet'), alt: 'Suits & Scribbles doodle sheet' },
  { src: i('post/drive-tangle-detail'), alt: 'Postscript black and maroon checks, close-up' },
  { src: i('gramin/drive-rosette-reading'), alt: 'Gramin red rosette dress, reading in the grass' },
];

export const marqueeRowTwo: Img[] = [
  { src: i('nyx/swatch-broken-twill'), alt: 'NYX broken twill swatch' },
  { src: i('gramin/moodboard'), alt: 'Gramin moodboard' },
  { src: i('suits/print-white-on-black'), alt: 'Suits & Scribbles white-on-black doodle print' },
  { src: i('post/fabric-first-light'), alt: 'Postscript First Light pink stripes' },
  { src: i('nyx/print-whispering-roses'), alt: 'NYX Whispering Roses print' },
  { src: i('gramin/drive-chilli-shirt'), alt: 'Gramin chilli on ivory shirt' },
  { src: i('post/draft-herringbone'), alt: 'Postscript herringbone weave draft' },
  { src: i('suits/illustrations'), alt: 'Suits & Scribbles garment illustrations' },
  { src: i('nyx/print-celestial-veil'), alt: 'NYX Celestial Veil print' },
  { src: i('gramin/repeat-marigold'), alt: 'Gramin marigold repeat' },
  { src: i('post/drive-first-light-worn'), alt: 'Postscript First Light muffler worn' },
  { src: i('suits/drive-crop-detail'), alt: 'Suits & Scribbles crop blazer detail' },
  { src: i('post/drive-afterglow-detail'), alt: 'Postscript Afterglow texture close-up' },
];
