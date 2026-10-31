/**
 * Project content. All text, names, palettes and specifications are taken
 * from the four portfolio PDFs (Surface Techniques, Weave Design Collection,
 * Basic Prints & Weaves, Print Design Collection). Images were extracted or
 * cropped from those PDFs without recolouring.
 */

export type Img = { src: string; alt: string; caption?: string };

/**
 * Per-project colour + type, sampled directly out of the source PDF
 * (vector fills, text colours and embedded font names). These are the
 * designer's own choices — do not substitute "nicer" values.
 */
export type Theme = {
  /** page background */
  bg: string;
  ink: string;
  muted: string;
  rule: string;
  /** kickers, rules, emphasis */
  accent: string;
  /** font stacks */
  body: string;
  display: string;
  /** display treatment taken from the PDF's own headline style */
  displayCase: 'upper' | 'none';
  displayWeight: number;
  displayItalic: boolean;
  displayTracking: string;
  /** corner language: Gramin is soft, the others are square */
  radius: string;
  /** browser chrome colour for the detail page */
  themeColor: string;
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
  theme: Theme;
  card: [Img, Img, Img];
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
    accent: '#BC2E1F',
    /* Surface Techniques: cream paper, terracotta + saffron headline with a
       navy drop shadow, teal and rani pink as the cool counterweights. */
    theme: {
      bg: '#F3E8DC',
      ink: '#232422',
      muted: '#6E6256',
      rule: 'rgba(35,36,34,0.18)',
      accent: '#BC2E1F',
      body: "'Poppins', sans-serif",
      display: "'Bitter', serif",
      displayCase: 'none',
      displayWeight: 800,
      displayItalic: true,
      displayTracking: '-0.01em',
      radius: '22px',
      themeColor: '#F3E8DC',
    },
    card: [
      { src: i('gramin/moodboard'), alt: 'Gramin moodboard: painted walls, a red door, marigolds, chilli strings, stepwells and the colour story' },
      { src: i('gramin/repeat-scallop'), alt: 'Gramin scallop motif in a repeat test, indigo rings on ivory' },
      { src: i('gramin/drive-scallop-trees'), alt: 'Final Gramin look: tunic in indigo scallop print on blush, photographed outdoors' },
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
    accent: '#952B26',
    /* Weave Design: quiet oat paper, maroon serif, dusty rose. Caladea is the
       PDF's own typeface. Square corners, hairline rules, lots of air. */
    theme: {
      bg: '#EFE6DA',
      ink: '#2A1918',
      muted: '#7A6A66',
      rule: 'rgba(42,25,24,0.22)',
      accent: '#952B26',
      body: "'Caladea', Georgia, serif",
      display: "'Caladea', Georgia, serif",
      displayCase: 'none',
      displayWeight: 700,
      displayTracking: '-0.015em',
      displayItalic: false,
      radius: '0px',
      themeColor: '#EFE6DA',
    },
    card: [
      { src: i('post/inspiration'), alt: 'Postscript inspiration and mood: five atmospheric images of silhouettes against sunset tones' },
      { src: i('post/fabric-tangle'), alt: 'Fabric detail of The Tangle Before Dawn: black and maroon woven checks' },
      { src: i('post/drive-first-light-worn'), alt: 'First Light muffler in pink and white stripes, worn outdoors' },
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
    accent: '#A11E59',
    /* Basic Prints & Weaves: the one project that really is black — but black
       cut against full-white panels, with magenta and plum. Raleway Light. */
    theme: {
      bg: '#010101',
      ink: '#FFFFFF',
      muted: 'rgba(255,255,255,0.68)',
      rule: 'rgba(255,255,255,0.22)',
      accent: '#A11E59',
      body: "'Raleway', sans-serif",
      display: "'Raleway', sans-serif",
      displayCase: 'upper',
      displayWeight: 300,
      displayItalic: false,
      displayTracking: '0.06em',
      radius: '0px',
      themeColor: '#010101',
    },
    card: [
      { src: i('nyx/moth-concept'), alt: 'NYX concept artwork: a monochrome moth with crescent moons and florals' },
      { src: i('nyx/swatch-plain-weave'), alt: 'NYX woven swatch: plain weave check in black, white, pink and purple' },
      { src: i('nyx/look-lunar-whimsy'), alt: 'Lunar Whimsy: purple moths and white crescent moons on black, shown as a print and on a dress' },
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
    /* Print Design: off-white paper flipping to full black for the loud
       sections, hot pink throughout, heavy uppercase Poppins. */
    theme: {
      bg: '#FBF8F3',
      ink: '#111111',
      muted: '#6A6560',
      rule: 'rgba(17,17,17,0.16)',
      accent: '#F00078',
      body: "'Poppins', sans-serif",
      display: "'Poppins', sans-serif",
      displayCase: 'upper',
      displayWeight: 800,
      displayItalic: false,
      displayTracking: '-0.005em',
      radius: '0px',
      themeColor: '#FBF8F3',
    },
    card: [
      { src: i('suits/doodle-sheet'), alt: 'Suits & Scribbles motif exploration: hand-drawn shopping doodles on grid paper' },
      { src: i('suits/print-pink-on-white'), alt: 'Suits & Scribbles print: pink doodle repeat on white' },
      { src: i('suits/drive-blazer-dress'), alt: 'Look 01, the blazer dress, in the pink and black doodle print' },
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
