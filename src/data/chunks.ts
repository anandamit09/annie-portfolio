/**
 * The portfolios themselves, cut into chunks.
 *
 * Generated from the four source PDFs. Each chunk is a slice of the real page
 * rendered at 1800px wide and never modified, so the layout, decoration, type
 * and the size relationships between images are the designer's. Cuts only
 * land on a scan line that is one flat colour edge to edge, so no photo or
 * heading is ever sliced through.
 *
 * `left` / `right` are the colours at that slice's edges - the band paints
 * them behind the image so the design bleeds to the window edge on wide
 * screens, exactly as it bleeds to the paper edge in the PDF.
 *
 * `els` are the pieces that could be cut cleanly out of the slice - numbered
 * circles, logo cards, pinned photos. Each is a transparent PNG placed at its
 * own position (in % of the chunk) directly over the pixels it came from, so
 * at rest it is invisible. The page animates these, never the plate.
 *
 * `text` is the real text under that slice, kept for screen readers and search
 * engines since the chunk itself is an image.
 */

export type ChunkEl = {
  src: string;
  /** position and size as a percentage of the chunk */
  x: number;
  y: number;
  w: number;
  h: number;
  /** what the piece is, which decides how it moves */
  kind: 'wave' | 'star' | 'chip' | 'dot' | 'card';
  /**
   * True when the piece was erased from the plate because its background is
   * provably one flat colour. Only these may drift off their own footprint;
   * the rest would expose the copy still painted underneath, so they are
   * limited to scaling up.
   */
  move: boolean;
};

export type Chunk = {
  src: string;
  w: number;
  h: number;
  left: string;
  right: string;
  heading: string;
  text: string;
  els: ChunkEl[];
};

export const chunks: Record<string, Chunk[]> = {
  "gramin": [
    {
      "src": "images/chunks/gramin/00.webp",
      "w": 1800,
      "h": 2276,
      "left": "#F2E7DB",
      "right": "#F2E7DB",
      "heading": "ग्राामीण",
      "text": "S U R F A C E D E S I G N · T E C H N I Q U E S P O R T F O L I O Gramin Gramin Gramin ग्राामीण Gramin is a surface design collection drawn from the colour, craft and everyday ritual of village India — marigold garlands, strings of chillies, painted walls, stepwells and terracotta pots. Motifs travel from the moodboard to pencil sketches, then onto garments. S U R F A C E T E C H N I Q U E S · G R A M I N · the journey 01 I N T R O D U C T I O N 02 M O O D B O A R D 03 M O T I F S K E T C H E S 04 T E C H N I Q U E S 05 F I N A L D E S I G N S 06 G A R M E N T S H O O T",
      "els": [
        {
          "src": "images/chunks/gramin/00e1.webp",
          "x": 34.0,
          "y": 90.8172,
          "w": 9.1111,
          "h": 7.2056,
          "kind": "dot",
          "move": false
        },
        {
          "src": "images/chunks/gramin/00e2.webp",
          "x": 6.5,
          "y": 90.8172,
          "w": 9.1111,
          "h": 7.2056,
          "kind": "dot",
          "move": false
        },
        {
          "src": "images/chunks/gramin/00e3.webp",
          "x": 47.7222,
          "y": 91.3445,
          "w": 9.1111,
          "h": 7.2056,
          "kind": "dot",
          "move": false
        },
        {
          "src": "images/chunks/gramin/00e4.webp",
          "x": 61.5,
          "y": 90.8172,
          "w": 9.1111,
          "h": 7.2056,
          "kind": "dot",
          "move": false
        },
        {
          "src": "images/chunks/gramin/00e5.webp",
          "x": 75.2778,
          "y": 91.3445,
          "w": 9.0556,
          "h": 7.2056,
          "kind": "dot",
          "move": false
        },
        {
          "src": "images/chunks/gramin/00e6.webp",
          "x": 20.2778,
          "y": 91.3445,
          "w": 9.0556,
          "h": 7.2056,
          "kind": "dot",
          "move": false
        }
      ]
    },
    {
      "src": "images/chunks/gramin/01.webp",
      "w": 1800,
      "h": 2200,
      "left": "#F7F1E6",
      "right": "#F7F1E6",
      "heading": "die",
      "text": "Q 0 1 · B R A N D C O N T E X T Jodi Jodi is an India-based design studio and marketplace founded in 2014 by longtime friends Gauri Verma and Karuna Laungani. Jodi creates joyful, fashion-forward apparel, accessories, and homeware using 100% natural Indian textiles and artisanal craft techniques primarily hand block printing, bandhini dyeing, and hand embroidery. F O U N D E R S Gauri Verma and Karuna Laungani F O U N D E D I N 2014 H E A D O F F I C E Pune M I S S I O N To revive India's fading handicraft culture through fashion-forward, joyful, accessible products. V I S I O N To build Jodi into an enduring heritage brand that puts the spotlight back on India's rich legacy of craft and design. P R O D U C T L I N E W O M EN B ES T S EL L ER S J AC K ET S DR ES S ES S I L K C O - O R D S ET S T O P S /S H I R T S T - S H I R T S B O T T O M S M EN B ES T S EL L ER S J AC K ET S S H I R T S T - S H I R T S B O T T O M S C O - O R D S ET S S I L K Target audience Target audience Primary — Young Urban Indian Women (18–35) Metro and tier-1 city residents who are fashion-conscious, culturally proud, and environmentally aware. They want clothes that are interesting, not generic — and are willing to pay a premium for craft and story. INR 2,000–8,000 spend comfort. Millennial & Gen Z women Urban India Diaspora & international shoppers Conscious consumers Secondary — Men & Home Enthusiasts Home décor lovers Gift buyers (festive/gifting occasions) Unique selling point Unique selling point",
      "els": [
        {
          "src": "images/chunks/gramin/01e1.webp",
          "x": 27.3333,
          "y": 7.5455,
          "w": 25.8333,
          "h": 6.2727,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/gramin/02.webp",
      "w": 1800,
      "h": 2496,
      "left": "#F3E9DD",
      "right": "#F3E9DD",
      "heading": "ropr",
      "text": "Every print is one-of-a-kind Hand block printing means no two pieces are identical. Subtle variations are celebrated as a feature, not a flaw — each garment carries its own \"je ne sais quoi.\" Proprietary #JodiPrints The brand designs all its own prints in-house in Pune — graphic, geometric, botanical, and animal motifs that form an instantly recognisable visual signature. Slow fashion at high-street prices Jodi occupies a rare gap: artisan-made, ethically produced, 100% natural fabric clothing at an accessible Indian high-street price point — not luxury, not fast fashion. Deep artisan partnership Works with Shankarlalji, a generational block printing artisan in Jaipur. Blocks hand-carved on teak wood, some taking 7–8 days. Supports fair wages and family businesses. India-rooted, globally relevant Stocked internationally in the US, UK, Dubai, Singapore, Kuwait, and Saudi Arabia. Presents Indian craft through a fashion-forward lens that resonates globally. C O M P E T I T O R S 02 Moodboard Moodboard The original board is the visual foundation of the collection — its colours, textures, motifs and forms feed every page that follows. white dots + rings on leaves painted wall + arched niche red door — grid of panels lotus + marigold — layered petals stepwell — zig-zag geometry terracotta pots + chilli strings the palette",
      "els": [
        {
          "src": "images/chunks/gramin/02e0.webp",
          "x": 41.3889,
          "y": 12.6603,
          "w": 34.3889,
          "h": 11.4984,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/gramin/02e1.webp",
          "x": 6.4444,
          "y": 12.7003,
          "w": 34.2778,
          "h": 11.4183,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/gramin/02e2.webp",
          "x": 36.8333,
          "y": 0.0801,
          "w": 28.5,
          "h": 11.4583,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/gramin/02e3.webp",
          "x": 67.2778,
          "y": 0.1202,
          "w": 28.5,
          "h": 11.3381,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/gramin/03.webp",
      "w": 1800,
      "h": 2420,
      "left": "#F2E7DB",
      "right": "#F2E7DB",
      "heading": "xplor",
      "text": "y Colour story R AN I P I N K P O P P Y R E D S AF F R O N T E AL JAD E G R E E N M U S T AR D WAL N U T I N D I G O F U C H S I A M I N T I VO R Y B L AC K Colour Saffron, marigold and poppy sit against teal, indigo and jade — warm village festival tones grounded by deep cool darks. Texture & motif Dots, rings, block-print marks, frilled petals, chillies and hand-painted wall art — the board is full of small, repeatable marks. Form & space Arched niches, panelled doors, stepwells and round mandalas give the collection its geometry — arcs, grids and zig-zags. 03 Motif exploration Motif exploration P E N C I L S K E T C H E S · I N S P I R A T I O N → E X P E R I M E N T → R E F I N E Recurring forms from the moodboard are collected, then drawn again and again — changing shape, scale and proportion — until the strongest motifs are chosen for refinement. Observe collect from the board Experiment vary shape + scale Refine select + clean up",
      "els": [
        {
          "src": "images/chunks/gramin/03e0.webp",
          "x": 58.2778,
          "y": 10.3306,
          "w": 7.4444,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e1.webp",
          "x": 27.6111,
          "y": 10.3306,
          "w": 7.4444,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e2.webp",
          "x": 4.6111,
          "y": 9.2149,
          "w": 7.4444,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e3.webp",
          "x": 35.2778,
          "y": 9.2149,
          "w": 7.4444,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e4.webp",
          "x": 65.9444,
          "y": 9.2149,
          "w": 7.4444,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e5.webp",
          "x": 20.0556,
          "y": 9.2149,
          "w": 7.2222,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e6.webp",
          "x": 12.3889,
          "y": 10.3306,
          "w": 7.2222,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e7.webp",
          "x": 43.0556,
          "y": 10.3306,
          "w": 7.2222,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e8.webp",
          "x": 50.7222,
          "y": 9.2149,
          "w": 7.2222,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/03e9.webp",
          "x": 73.7222,
          "y": 10.3306,
          "w": 7.2222,
          "h": 7.2314,
          "kind": "chip",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/gramin/04.webp",
      "w": 1800,
      "h": 1536,
      "left": "#1E6267",
      "right": "#1E6267",
      "heading": "sts",
      "text": "scale + repeat tests ↓",
      "els": []
    },
    {
      "src": "images/chunks/gramin/05.webp",
      "w": 1800,
      "h": 2124,
      "left": "#1B344D",
      "right": "#B5385E",
      "heading": "face",
      "text": "Selected + refined Selected + refined Five motifs are chosen from the sketch sheets and redrawn with clean outlines and flat colour, each tested in a simple repeat. The colours come straight from the moodboard. S E L E C T E D · R E F I N E D · Chilli from the hanging strings repeat test Rosette layered, frilled lobes repeat test Scallop overlapping rings repeat test Leaf dots, rings, dashes repeat test Marigold rings of petals repeat test → these motifs carry straight into the surface techniques and finished garments that follow. 04 Surface techniques Surface techniques T E C H N I Q U E R E F E R E N C E S · F R O M S K E T C H T O S U R F A C E The craft vocabulary behind the collection — block printing, hand dyeing, screen printing and embroidery — studied from the Jodi research, then followed through to the finished surfaces. hand-carved blocks",
      "els": [
        {
          "src": "images/chunks/gramin/05e3.webp",
          "x": 82.8333,
          "y": 6.968,
          "w": 9.6667,
          "h": 8.1921,
          "kind": "dot",
          "move": false
        }
      ]
    },
    {
      "src": "images/chunks/gramin/06.webp",
      "w": 1800,
      "h": 2584,
      "left": "#1B344D",
      "right": "#1B344D",
      "heading": "sur",
      "text": "Block printing Blocks hand-carved on teak wood, some taking 7–8 days. Hand block printing means no two pieces are identical. Hand dyeing Bandhini dyeing — one of the three core craft techniques named in the Jodi research. Screen printing Technique reference from the Jodi research. Embroidery Hand embroidery — the third core craft technique named in the Jodi research. h screen + pattern repeat Sketch → surface Sketch → surface Each motif is followed from its refined drawing, to a repeat test, to the real close-up on the finished garment. 0 1 · C H I L L I refined motif repeat test Chilli motifs in red on ivory. 0 2 · R O S E T T E refined motif repeat test White fabric flowers with red centres at the hip. 0 3 · S C A L L O P refined motif repeat test Indigo scallop print on blush, with green leaf detail at the neckline.",
      "els": [
        {
          "src": "images/chunks/gramin/06e0.webp",
          "x": 83.7778,
          "y": 50.4257,
          "w": 13.2778,
          "h": 12.5,
          "kind": "card",
          "move": false
        },
        {
          "src": "images/chunks/gramin/06e1.webp",
          "x": 6.8333,
          "y": 64.5898,
          "w": 10.3333,
          "h": 7.1981,
          "kind": "chip",
          "move": true
        },
        {
          "src": "images/chunks/gramin/06e2.webp",
          "x": 51.6111,
          "y": 64.5898,
          "w": 10.3333,
          "h": 7.1981,
          "kind": "chip",
          "move": false
        },
        {
          "src": "images/chunks/gramin/06e3.webp",
          "x": 69.3333,
          "y": 64.5898,
          "w": 10.3333,
          "h": 7.1981,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/06e4.webp",
          "x": 82.8333,
          "y": 64.5898,
          "w": 10.3333,
          "h": 7.1981,
          "kind": "chip",
          "move": false
        }
      ]
    },
    {
      "src": "images/chunks/gramin/07.webp",
      "w": 1800,
      "h": 2376,
      "left": "#F2E7DB",
      "right": "#F2E7DB",
      "heading": "Chi",
      "text": "05 Final designs Final designs T H R E E L O O K S · T H R E E S U R F A C E S The refined motifs arrive on three garments. Each look carries one surface story, built from the moodboard palette. 01 Chilli on ivory An oversized shirt in ivory, scattered with small red chillies. refined motif look palette 02 Rosettes in red A red dress with white fabric flowers, each with a red heart. refined motif look palette",
      "els": [
        {
          "src": "images/chunks/gramin/07e0.webp",
          "x": 71.0556,
          "y": 47.6852,
          "w": 4.3889,
          "h": 3.2828,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/07e1.webp",
          "x": 66.6111,
          "y": 47.6852,
          "w": 4.3333,
          "h": 3.2828,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/07e2.webp",
          "x": 75.6111,
          "y": 47.6852,
          "w": 4.3333,
          "h": 3.2828,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/07e3.webp",
          "x": 80.0556,
          "y": 47.6852,
          "w": 4.3333,
          "h": 3.2828,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/07e4.webp",
          "x": 22.3889,
          "y": 85.564,
          "w": 4.3333,
          "h": 3.2828,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/07e5.webp",
          "x": 31.3889,
          "y": 85.564,
          "w": 4.3333,
          "h": 3.2828,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/07e6.webp",
          "x": 35.9444,
          "y": 85.564,
          "w": 4.3333,
          "h": 3.2828,
          "kind": "dot",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/gramin/08.webp",
      "w": 1800,
      "h": 1864,
      "left": "#F2E7DB",
      "right": "#1C1A17",
      "heading": "oot",
      "text": "03 Scallop in blush A tunic in an indigo scallop print on blush, with green leaf detail at the neckline. refined motif look palette 06 Final garment shoot Final garment shoot T H E C O L L E C T I O N , W O R N Golden-hour light, forest shade and three surfaces in motion — the finished garments as they were meant to be seen. T H E F I N A L S H O O T · G R A M I N · I Chilli on ivory L O O K 0 1 · T H E S H I R T",
      "els": [
        {
          "src": "images/chunks/gramin/08e1.webp",
          "x": 66.0,
          "y": 75.1609,
          "w": 11.3333,
          "h": 10.9442,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/gramin/08e2.webp",
          "x": 75.6111,
          "y": 29.882,
          "w": 4.3333,
          "h": 4.1845,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/08e3.webp",
          "x": 80.0556,
          "y": 29.882,
          "w": 4.3333,
          "h": 4.1845,
          "kind": "dot",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/gramin/09.webp",
      "w": 1800,
      "h": 2248,
      "left": "#1C1A17",
      "right": "#1C1A17",
      "heading": "",
      "text": "II Rosettes in red L O O K 0 2 · T H E D R E S S",
      "els": [
        {
          "src": "images/chunks/gramin/09e0.webp",
          "x": 4.8333,
          "y": 73.8879,
          "w": 8.3333,
          "h": 6.6726,
          "kind": "dot",
          "move": false
        }
      ]
    },
    {
      "src": "images/chunks/gramin/10.webp",
      "w": 1800,
      "h": 2804,
      "left": "#1C1A17",
      "right": "#1C1A17",
      "heading": "Sca",
      "text": "III Scallop in blush L O O K 0 3 · T H E T U N I C",
      "els": [
        {
          "src": "images/chunks/gramin/10e0.webp",
          "x": 4.8333,
          "y": 35.7703,
          "w": 8.3333,
          "h": 5.3495,
          "kind": "dot",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/gramin/11.webp",
      "w": 1800,
      "h": 2552,
      "left": "#F2E7DB",
      "right": "#F2E7DB",
      "heading": "sur",
      "text": "Gramin Gramin Gramin surface design · from village to wardrobe",
      "els": [
        {
          "src": "images/chunks/gramin/11e0.webp",
          "x": 47.6667,
          "y": 89.6552,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/11e1.webp",
          "x": 26.0,
          "y": 89.6552,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/11e2.webp",
          "x": 31.3889,
          "y": 90.5956,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/11e3.webp",
          "x": 36.8333,
          "y": 89.6552,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/11e4.webp",
          "x": 42.2778,
          "y": 90.5956,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/11e5.webp",
          "x": 53.0556,
          "y": 90.5956,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/11e6.webp",
          "x": 58.5,
          "y": 89.6552,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/gramin/11e7.webp",
          "x": 69.3333,
          "y": 89.6552,
          "w": 4.6667,
          "h": 3.2915,
          "kind": "dot",
          "move": true
        }
      ]
    }
  ],
  "postscript": [
    {
      "src": "images/chunks/postscript/00.webp",
      "w": 1800,
      "h": 3321,
      "left": "#F5F1E8",
      "right": "#F5F1E8",
      "heading": "Postscript",
      "text": "I N S P I R A T I O N & M O O D · · W E A V E D E S I G N Postscript CONCEPT- Postscript explores the often-overlooked aftermath of a connection. While most stories focus on beginnings and endings, this collection reflects on the emotions that linger afterwards the memories, growth, and quiet warmth that remain. The narrative unfolds through a transition in woven surfaces, moving from complex and structured patterns that represent uncertainty and emotional entanglement, to lighter, more harmonious compositions that symbolise clarity, acceptance, and renewal. Through colour, texture, and weave development, the collection captures the transformation of emotions into lasting impressions, celebrating the beauty of what remains long after the moment has passed.",
      "els": []
    },
    {
      "src": "images/chunks/postscript/01.webp",
      "w": 1800,
      "h": 1677,
      "left": "#FFFFFF",
      "right": "#FFFFFF",
      "heading": "Print & Pattern: 10 Key",
      "text": "Trend Research Print & Pattern: 10 Key Trends for 2026",
      "els": []
    },
    {
      "src": "images/chunks/postscript/02.webp",
      "w": 1800,
      "h": 2250,
      "left": "#F5F1E8",
      "right": "#F5F1E8",
      "heading": "The Tangle BeforeDawn",
      "text": "F A B R I C D E T A I L S P E C I F I C A T I O N & W E A V E S T R U C T U R E M O O D S I Z E 12 × 70 inches Y A R N Wool-Acrylic Blend W E A V E Plain and twill C O L O U R Black and maroon W E A V E D E S I G N 01 M U F F L E R — 0 1 The Tangle BeforeDawn This muffler represents the emotional state of being caughtwithin one'sown thoughts. It is inspired by moments of uncertainty, overthinking, and internal conflict, where emotions overlap and directions become unclear. Like intersecting paths that continuously cross one another, the checked structure symbolises competing feelings, unanswered questions, and the complexity of navigating change. The use of black conveys emotional depth, introspection, and the weight of unresolved thoughts, while maroon represents passion, vulnerability, and emotions that remain intense beneath the surface. Together, these colours create a visual tension between restraint and feeling. Heavy, structured, enclosed. Checks Black Maroon Dense structure = overlapping emotions and thoughts. = uncertainty and emotional weight. = hidden warmth and lingering passion. = feeling trapped within a cycle of reflection.",
      "els": [
        {
          "src": "images/chunks/postscript/02e0.webp",
          "x": 7.6111,
          "y": 23.9556,
          "w": 26.7778,
          "h": 40.8889,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/postscript/03.webp",
      "w": 1800,
      "h": 2250,
      "left": "#F5F1E8",
      "right": "#F5F1E8",
      "heading": "First Light",
      "text": "F A B R I C D E T A I L S P E C I F I C A T I O N & W E A V E S T R U C T U R E M O O D 02 M U F F L E R — 0 2 First Light This muffler represents the gradual shift from emotionalconflicttowardsclarity and acceptance. After the tangled intersections of thefirstpiece,thechecked structure dissolves into stripes, creating a sense of movement,direction,and progress. The linear arrangement symbolises a journey forward. Unlike checks, which constantly intersect and return upon themselves, stripes guide the eye in a single direction, reflecting a growing sense of purpose and emotional balance. The colour palette of white and dusky pink captures the softness of healing. White represents openness, calmness, and a blank space for renewal, while dusky pink embodies tenderness, hope, and the quiet warmth that begins to re-emerge after a period of darkness. Gentle, optimistic, unfolding. Stripes White Dusky pink Simpler structure = forward movement and emotional progression. = clarity, acceptance, and space to breathe. = returning warmth and emotional softness. = thoughts becoming less tangled and more aligned.",
      "els": [
        {
          "src": "images/chunks/postscript/03e0.webp",
          "x": 7.6111,
          "y": 49.3333,
          "w": 26.7778,
          "h": 35.1111,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/postscript/04.webp",
      "w": 1800,
      "h": 2250,
      "left": "#EFE6D9",
      "right": "#EFE6D9",
      "heading": "Wool-Acrylic Blend",
      "text": "S I Z E 15 × 75 inches Y A R N Wool-Acrylic Blend W E A V E Plain and herringbone C O L O U R Pink and white Y A R N Wool-Acrylic Blend W E A V E Plain, honeycomb and dobby C O L O U R Multicolour",
      "els": [
        {
          "src": "images/chunks/postscript/04e0.webp",
          "x": 70.8333,
          "y": 0.8444,
          "w": 20.8889,
          "h": 41.9111,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/04e1.webp",
          "x": 7.6667,
          "y": 50.4444,
          "w": 21.0,
          "h": 37.4667,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/postscript/05.webp",
      "w": 1800,
      "h": 3100,
      "left": "#EFE6D9",
      "right": "#EFE6D9",
      "heading": "Worn",
      "text": "M U F F L E R — 0 3 M U F F L E R — 0 2 Worn M U F F L E R — 0 1 Afterglow First Light The Tangle Before Dawn",
      "els": [
        {
          "src": "images/chunks/postscript/05e0.webp",
          "x": 5.3889,
          "y": 42.2581,
          "w": 28.2222,
          "h": 24.4839,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e1.webp",
          "x": 35.8889,
          "y": 73.2903,
          "w": 28.2222,
          "h": 24.4516,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e2.webp",
          "x": 5.3889,
          "y": 73.2903,
          "w": 28.2222,
          "h": 24.4516,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e3.webp",
          "x": 66.3889,
          "y": 73.2903,
          "w": 28.2222,
          "h": 24.4516,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e4.webp",
          "x": 35.8889,
          "y": 11.2258,
          "w": 28.2222,
          "h": 24.4194,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e5.webp",
          "x": 35.8889,
          "y": 42.2581,
          "w": 28.2222,
          "h": 24.4194,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e6.webp",
          "x": 5.3889,
          "y": 11.2258,
          "w": 28.2222,
          "h": 24.4194,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e7.webp",
          "x": 66.3889,
          "y": 11.2258,
          "w": 28.2222,
          "h": 24.4194,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/postscript/05e8.webp",
          "x": 66.3889,
          "y": 42.2581,
          "w": 28.2222,
          "h": 24.4194,
          "kind": "card",
          "move": true
        }
      ]
    }
  ],
  "nyx": [
    {
      "src": "images/chunks/nyx/00.webp",
      "w": 1800,
      "h": 2249,
      "left": "#010101",
      "right": "#EFEFEF",
      "heading": "NYX",
      "text": "NYX print design CONCEPT NOTE In Greek mythology, Nyx (Νύξ) is the goddess of the night a primordial deity born from Chaos, revered for her power, mystery, and quiet strength. She rules over the darkness not with fear, but with grace and intensity. Nyx is not just a symbol of night, but a representation of the hidden depth and elegance that femininity holds. This collection is inspired by moths, creatures more active under the veil of night. Drawn to the moon, they ﬂutter silently in the dark — delicate yet determined, often overlooked but incredibly complex. Their existence mirrors that of many women: soft but powerful, hidden yet radiant",
      "els": []
    },
    {
      "src": "images/chunks/nyx/01.webp",
      "w": 1800,
      "h": 2430,
      "left": "#FDFDFD",
      "right": "#010101",
      "heading": "nyx",
      "text": "hidden yet radiant. nyx #22222 #64267f #dcdcdc #86025e MOODBOARD",
      "els": []
    },
    {
      "src": "images/chunks/nyx/02.webp",
      "w": 1800,
      "h": 1642,
      "left": "#010101",
      "right": "#010101",
      "heading": "CLIENT PROFILE",
      "text": "CLIENT PROFILE AGE GROUP: 20–35 years OCCUPATION: Creative professionals — designers, writers, artists, and individuals in expressive ﬁelds who appreciate meaning, art, and individuality. Personality & Psychology: She is introspective, emotional, and conﬁdent in her subtle power. She values depth over appearance and ﬁnds beauty in the overlooked. Her energy is mysterious, graceful, and self-assured, mirroring the quiet elegance of a moth. Lifestyle: Lives in an urban setting, appreciates art galleries, slow fashion, literature, and nature. She chooses quality, purpose, and emotion over fast trends.",
      "els": []
    },
    {
      "src": "images/chunks/nyx/03.webp",
      "w": 1800,
      "h": 2554,
      "left": "#FFFFFF",
      "right": "#040403",
      "heading": "FINAL MOTIFS",
      "text": "FINAL MOTIFS WINGED SYMPHONY Playful moth wings in soft tones form rhythmic patterns that symbolise unity between nature and soul. This print captures the dance of metamorphosis freedom, growth, and inner awakening.",
      "els": [
        {
          "src": "images/chunks/nyx/03e0.webp",
          "x": 8.7778,
          "y": 11.9029,
          "w": 23.3333,
          "h": 8.4182,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/03e1.webp",
          "x": 25.2222,
          "y": 38.4103,
          "w": 13.8333,
          "h": 7.6351,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/03e2.webp",
          "x": 65.5556,
          "y": 38.0579,
          "w": 11.5556,
          "h": 8.4182,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/03e3.webp",
          "x": 8.0,
          "y": 37.7447,
          "w": 13.6667,
          "h": 6.343,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/03e4.webp",
          "x": 78.1667,
          "y": 3.1715,
          "w": 13.6667,
          "h": 6.3038,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/03e5.webp",
          "x": 77.3889,
          "y": 22.3571,
          "w": 11.6111,
          "h": 6.7345,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/03e6.webp",
          "x": 54.7222,
          "y": 27.0948,
          "w": 4.7222,
          "h": 3.1323,
          "kind": "card",
          "move": false
        }
      ]
    },
    {
      "src": "images/chunks/nyx/04.webp",
      "w": 1800,
      "h": 2451,
      "left": "#010101",
      "right": "#010101",
      "heading": "BLUE NOCTURNE",
      "text": "BLUE NOCTURNE WHISPERING ROSES Vivid blue moths ﬂutter across deep shadows, symbolising transformation in darkness. The print celebrates how beauty often blooms unseen a tribute to the mystery and grace of the night. Delicate spirals of roses represent the hidden gentleness within strength. Like a moth drawn to soft moonlight, this print captures feminine vulnerability",
      "els": []
    },
    {
      "src": "images/chunks/nyx/05.webp",
      "w": 1800,
      "h": 2566,
      "left": "#010101",
      "right": "#010101",
      "heading": "FLUTTER BLOOM",
      "text": "FLUTTER BLOOM CELESTIAL VEIL g p p y entwined with quiet resilience. Dark violet moons layered with faint ﬂoral textures hint at seduction and mystery. It’s inspired by the moth’s nocturnal allure a balance of shadow Soft pastel butterﬂies dance with abstract ﬂoral motifs, expressing renewal and emotional freedom. It reﬂects the light, dreamy side of femininity fragile yet full of life and colour.",
      "els": []
    },
    {
      "src": "images/chunks/nyx/06.webp",
      "w": 1800,
      "h": 2711,
      "left": "#FFFFFF",
      "right": "#040403",
      "heading": "Final Garment",
      "text": "Final Garment PHOTOSHOOT LUNAR WHIMSY y y p y and shimmer under the goddess Nyx’s gaze. Tiny motifs of moons and night ﬂorals evoke a dreamlike stillness. This print speaks of introspection where each crescent moon mirrors the phases of womanhood and quiet strength.",
      "els": [
        {
          "src": "images/chunks/nyx/06e0.webp",
          "x": 29.1111,
          "y": 72.003,
          "w": 23.6111,
          "h": 23.3862,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/06e1.webp",
          "x": 54.5556,
          "y": 52.6005,
          "w": 22.7778,
          "h": 23.8657,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/06e2.webp",
          "x": 4.2222,
          "y": 60.9369,
          "w": 23.0556,
          "h": 21.2099,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/06e3.webp",
          "x": 54.5556,
          "y": 77.9786,
          "w": 22.7778,
          "h": 17.4105,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/nyx/07.webp",
      "w": 1800,
      "h": 2250,
      "left": "#010101",
      "right": "#010101",
      "heading": "Weave Design",
      "text": "To extend my theme beyond prints, I created woven swatches on a table-top loom using techniques such as plain weave, matt weave, herringbone, warp rib, and twill. Each piece captures the delicate yet strong essence of the moth, translating its visual poetry into tactile structures. These weaves add depth and texture to the collection, complementing the prints through their subtle play of structure, rhythm, and femininity.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Weave Design Lorem ipsum This swatch explores the simplicity and balance of the plain weave, representing the grounded and structured side of the moth’s character. The interplay of black, white, pink, and purple reﬂects the theme’s emotional palette black symbolising mystery and depth, purple evoking femininity and introspection, and pink adding a touch of softness and warmth. The checked pattern creates a rhythmic contrast, echoing the quiet harmony found in moth wings. Through this weave, I aimed to depict the coexistence of strength and delicacy a key essence of my theme. SPECIFICATION SHEET WEAVING SWATCHES",
      "els": [
        {
          "src": "images/chunks/nyx/07e1.webp",
          "x": 43.8333,
          "y": 45.4222,
          "w": 46.5,
          "h": 12.2667,
          "kind": "wave",
          "move": false
        }
      ]
    },
    {
      "src": "images/chunks/nyx/08.webp",
      "w": 1800,
      "h": 2250,
      "left": "#010101",
      "right": "#010101",
      "heading": "SPECIFICATION SHEET",
      "text": "Weave: Plain Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft × The irregular matt weave reﬂects the quiet strength of femininity balanced between softness and resilience. The blend of deep magenta, violet, and black mirrors the moth’s nocturnal elegance drawn to light yet thriving in darkness. The irregular rhythm symbolizes the unpredictability and layered emotions of womanhood, where every thread holds purpose even in its silence.vcoexistence of strength and delicacy a key essence of my theme. This swatch explores the visual and emotional qualities of femininity through structured rhythm and balanced contrasts. The use of violet and magenta represents intuition and inner strength colors often associated with Weave: Irregular Matt Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft SPECIFICATION SHEET ×",
      "els": [
        {
          "src": "images/chunks/nyx/08e1.webp",
          "x": 51.0,
          "y": 53.0667,
          "w": 23.3333,
          "h": 18.7111,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/nyx/09.webp",
      "w": 1800,
      "h": 2250,
      "left": "#010101",
      "right": "#010101",
      "heading": "SPECIFICATION SHEET",
      "text": "inner strength colors often associated with quiet conﬁdence and transformation, much like the moth drawn to light. The alternating white and dark stripes symbolize visibility and invisibility a reminder of how feminine power often operates subtly, beneath the surface. The regularity of the matt weave contrasts with the irregularity of emotion, portraying control, composure, and resilience within softness. This warp rib weave highlights linear rhythm and texture, symbolising the structured yet graceful ﬂow of the moth’s wings. The black, purple, magenta, and white tones represent mystery, transformation, and feminine strength core ideas of my theme. The raised rib eﬀect adds dimension, reﬂecting the layered beauty and subtle movement found in the creature’s form. Weave: Warp Rib Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft SPECIFICATION SHEET × Weave: Regular Matt Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft SPECIFICATION SHEET ×",
      "els": [
        {
          "src": "images/chunks/nyx/09e1.webp",
          "x": 13.5,
          "y": 16.6667,
          "w": 23.3889,
          "h": 20.4,
          "kind": "card",
          "move": false
        },
        {
          "src": "images/chunks/nyx/09e2.webp",
          "x": 52.7222,
          "y": 76.2222,
          "w": 23.3889,
          "h": 20.0,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/nyx/10.webp",
      "w": 1800,
      "h": 2250,
      "left": "#010101",
      "right": "#010101",
      "heading": "SPECIFICATION SHEET",
      "text": "This swatch explores the softness and depth of femininity through gentle color gradation. The blend of violet, white, and magenta transitions symbolizes transformation and emotional balance traits often mirrored in the moth’s quiet yet purposeful existence. The weft rib structure enhances the ﬂow of light and texture, reﬂecting the strength that lies in subtlety and calm presence. This swatch uses a gradient transition of purples and magentas to express the evolving strength of femininity. The gradual shift in tones mirrors transformation from quiet subtlety to conﬁdent presence, much like a moth emerging into light. The herringbone pattern adds depth and structure, representing balance between delicacy and determination. The interplay of texture and color embodies feminine resilience graceful, layered, and quietly powerful. Weave: Weft Rib Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft SPECIFICATION SHEET ×",
      "els": []
    },
    {
      "src": "images/chunks/nyx/11.webp",
      "w": 1800,
      "h": 2250,
      "left": "#010101",
      "right": "#010101",
      "heading": "SPECIFICATION SHEET",
      "text": "This swatch explores duality within femininity through alternating S and Z directions, creating a rhythm of movement and balance. The interplay of magenta, violet, and white reﬂects contrast — strength within softness, visibility within quiet. The structured zigzag pattern mirrors the moth’s ﬂight path, symbolizing persistence and purpose, while maintaining an elegant harmony between control and ﬂuidity. . Weave: Herringbone Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft SPECIFICATION SHEET × Weave: S-Z Twill Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft SPECIFICATION SHEET ×",
      "els": [
        {
          "src": "images/chunks/nyx/11e1.webp",
          "x": 12.5,
          "y": 73.3333,
          "w": 23.3333,
          "h": 20.0889,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/nyx/12.webp",
      "w": 1800,
      "h": 2250,
      "left": "#010101",
      "right": "#010101",
      "heading": "SPECIFICATION SHEET",
      "text": "This swatch uses a gradient transition of purples and magentas to express the evolving strength of femininity. The gradual shift in tones mirrors transformation from quiet subtlety to conﬁdent presence, much like a moth emerging into light. The herringbone pattern adds depth and structure, representing balance between delicacy and determination. The interplay of texture and color embodies feminine resilience graceful, layered, and quietly powerful. The inner top features a complex interplay of weaves including diamond twill, S–Z twill, and plain weave, symbolising the hidden strength within. The varied structures reﬂect the layers of emotion and resilience that lie beneath a calm exterior. The use of dark tones and warp knots enhances CONCEPT: Together, the two pieces express dual aspects of femininity inspired by the moth soft yet strong, calm yet powerful. The jacket reﬂects the visible stillness and simplicity, while the inner top reveals the intricate strength beneath the surface. Just as a moth is drawn to light, she carries an inner radiance that guides her through darkness moving with grace, resilience, and silent determination. Weave: Broken Twill Weave Dimension: 8” 8” Warp/Weft Yarn Used: Polytex Reed Count: 32 No. of Shafts: 16 Drafting Plan: Straight Draft SPECIFICATION SHEET × Plain Weave S-Z Twill Warp Knot Diamond Twill SHE MOVES LIKE A MOTH",
      "els": [
        {
          "src": "images/chunks/nyx/12e1.webp",
          "x": 52.0556,
          "y": 30.6222,
          "w": 23.3889,
          "h": 20.1333,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/nyx/13.webp",
      "w": 1800,
      "h": 2472,
      "left": "#010101",
      "right": "#010101",
      "heading": "dark tones and warp knots enhances",
      "text": "Lorem ipsum a01e59 dark tones and warp knots enhances this narrative, representing endurance and depth qualities that mirror the quiet yet unyielding nature of feminine strength. The woven patch on the outer jacket follows a simpler herringbone structure, developed in a gentle purple gradient. A delicate heart crochet is incorporated to soften the form, capturing a sense of calm and quiet beauty. This surface, though modest, speaks of grace, composure, and balance embodying the still, understated elegance that deﬁnes the moth’s serenity. Weaved Pearl Heart Shaped Crochet Herringbone Weave",
      "els": [
        {
          "src": "images/chunks/nyx/13e0.webp",
          "x": 7.2222,
          "y": 28.7217,
          "w": 30.4444,
          "h": 31.1489,
          "kind": "card",
          "move": false
        },
        {
          "src": "images/chunks/nyx/13e1.webp",
          "x": 39.6111,
          "y": 44.9838,
          "w": 26.2778,
          "h": 25.445,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/13e2.webp",
          "x": 13.6667,
          "y": 61.8123,
          "w": 23.5556,
          "h": 22.7751,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/nyx/13e3.webp",
          "x": 69.5556,
          "y": 48.5841,
          "w": 22.2778,
          "h": 19.7816,
          "kind": "card",
          "move": false
        },
        {
          "src": "images/chunks/nyx/13e4.webp",
          "x": 59.0,
          "y": 10.5987,
          "w": 23.7778,
          "h": 16.7071,
          "kind": "card",
          "move": false
        }
      ]
    }
  ],
  "suits-and-scribbles": [
    {
      "src": "images/chunks/suits-and-scribbles/00.webp",
      "w": 1800,
      "h": 2087,
      "left": "#FFFFFF",
      "right": "#FFFFFF",
      "heading": "SUITS",
      "text": "FORMALWEAR BUT MAKE IT FUN SCRIBBLES Y O U R N A M E SUITS Y O U R N A M E & P R I N T D E S I G N C O L L E C T I O N The Art of the Fashion Fix Scroll. Shop. Sip. Repeat. S U I T S & S C R I B B L E S · I N S P I R A T I O N A visual diary of fashion indulgences, spontaneous discoveries and the little rituals that make shopping an experience in itself. T H E L I T T L E R I T U A L S Scroll Save Shop Try on Sip From endless scrolling through online fashion pages and saving wishlist favourites to exploring boutiques, collecting shopping bags and unwinding over a glass of wine, The Art of the Fashion Fix celebrates the little indulgences of a fashion-loving girl's day. These everyday rituals became a playful visual diary, translated into spontaneous doodles and expressive textile prints. Through Suits & Scribbles, this carefree energy finds its way into formalwear, balancing the structure of tailored silhouettes with the spontaneity of hand-drawn graphics. A palette of black, white and hot pink brings together sophistication, confidence and a playful sense of self-expression. C O N C E P T",
      "els": [
        {
          "src": "images/chunks/suits-and-scribbles/00e0.webp",
          "x": 49.5,
          "y": 48.7782,
          "w": 42.8333,
          "h": 29.6119,
          "kind": "card",
          "move": false
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e1.webp",
          "x": 11.5,
          "y": 81.8879,
          "w": 23.4444,
          "h": 13.608,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e2.webp",
          "x": 16.7222,
          "y": 71.5381,
          "w": 6.5,
          "h": 5.5582,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e3.webp",
          "x": 32.1667,
          "y": 71.5381,
          "w": 6.5,
          "h": 5.5582,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e4.webp",
          "x": 39.8889,
          "y": 71.5381,
          "w": 6.5,
          "h": 5.5582,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e5.webp",
          "x": 24.4444,
          "y": 71.5381,
          "w": 6.5,
          "h": 5.5582,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e6.webp",
          "x": 9.0556,
          "y": 71.5381,
          "w": 6.4444,
          "h": 5.5582,
          "kind": "dot",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e7.webp",
          "x": 84.3333,
          "y": 25.7786,
          "w": 4.9444,
          "h": 4.3124,
          "kind": "star",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/00e8.webp",
          "x": 5.9444,
          "y": 43.1241,
          "w": 4.7778,
          "h": 4.2645,
          "kind": "star",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/suits-and-scribbles/01.webp",
      "w": 1800,
      "h": 2250,
      "left": "#000000",
      "right": "#000000",
      "heading": "Every Little Thing, Doodled.",
      "text": "PLAYFUL PARADOX Hot Pink #F00078 T R E N D F O R E C A S T · S / S 2 0 2 6 SOURCES: WGSN, Analytical Data: S/S 26 Catwalk Trends · WGSN, S/S 26 Catwalk Predictions: Womenswear · WGSN × Coloro, Key Colours for S/S 26 The serious meets the playful. Design Direction Inspired by WGSN’s Playful Paradox trend for Spring/Summer 2026, the collection explores the contrast between the structure of formalwear and the spontaneity of playful self-expression. The revival of expressive tailoring and decorative prints informed the design direction, encouraging an unconventional approach to classic suiting. A black, white and hot-pink palette creates a balance between sophistication and visual impact, while shopping-inspired doodles transform familiar fashion rituals into an original surface-design language. C O L O U R P A L L E T E Black #111111 White #FFFFF Every Little Thing, Doodled. M O T I F E X P L O R A T I O N From endless scrolling and saved fashion finds to mall strolls, shopping bags, heels and wine glasses, the inspiration lies in the small rituals that make fashion shopping an experience in itself. These familiar objects were reimagined through spontaneous doodles, loose lines and playful compositions.",
      "els": [
        {
          "src": "images/chunks/suits-and-scribbles/01e0.webp",
          "x": 36.8333,
          "y": 65.8222,
          "w": 27.5,
          "h": 9.2,
          "kind": "card",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/suits-and-scribbles/02.webp",
      "w": 1800,
      "h": 2249,
      "left": "#FFFFFF",
      "right": "#FFFFFF",
      "heading": "THE PRINT FAMILY....",
      "text": "simplify the shapes! keep it cheeky bigger loops, more wobble THE PRINT FAMILY....",
      "els": [
        {
          "src": "images/chunks/suits-and-scribbles/02e0.webp",
          "x": 73.5,
          "y": 6.803,
          "w": 6.3333,
          "h": 5.6914,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/02e1.webp",
          "x": 51.1667,
          "y": 13.2059,
          "w": 6.3333,
          "h": 4.6687,
          "kind": "card",
          "move": false
        },
        {
          "src": "images/chunks/suits-and-scribbles/02e2.webp",
          "x": 58.6111,
          "y": 13.2059,
          "w": 6.3333,
          "h": 4.6687,
          "kind": "card",
          "move": false
        },
        {
          "src": "images/chunks/suits-and-scribbles/02e3.webp",
          "x": 66.0556,
          "y": 5.7359,
          "w": 6.3333,
          "h": 4.6243,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/02e4.webp",
          "x": 49.6667,
          "y": 6.803,
          "w": 6.3889,
          "h": 3.5571,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/02e5.webp",
          "x": 80.7778,
          "y": 93.1525,
          "w": 4.1667,
          "h": 3.2904,
          "kind": "star",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/suits-and-scribbles/03.webp",
      "w": 1800,
      "h": 2267,
      "left": "#FAF7F2",
      "right": "#FAF7F2",
      "heading": "Three looks,",
      "text": "Three looks, one design language.",
      "els": [
        {
          "src": "images/chunks/suits-and-scribbles/03e0.webp",
          "x": 60.5556,
          "y": 53.5951,
          "w": 28.4444,
          "h": 23.9965,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/03e1.webp",
          "x": 60.5,
          "y": 27.3489,
          "w": 28.1111,
          "h": 23.6436,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/03e2.webp",
          "x": 10.0556,
          "y": 27.3489,
          "w": 27.2778,
          "h": 23.0701,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/03e3.webp",
          "x": 61.5556,
          "y": 1.8968,
          "w": 27.1111,
          "h": 22.8496,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/03e4.webp",
          "x": 10.1667,
          "y": 2.0291,
          "w": 26.8333,
          "h": 22.5849,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/03e5.webp",
          "x": 9.3889,
          "y": 79.7971,
          "w": 12.1111,
          "h": 10.0132,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/03e6.webp",
          "x": 82.4444,
          "y": 88.7958,
          "w": 6.0,
          "h": 3.8818,
          "kind": "star",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/suits-and-scribbles/04.webp",
      "w": 1800,
      "h": 1688,
      "left": "#FFFFFF",
      "right": "#FFFFFF",
      "heading": "The collection explores three interpretations of contemporary formalwear",
      "text": "The collection explores three interpretations of contemporary formalwear through a blazer dress, a crop blazer and a slim-fit blazer. Shopping-inspired doodle prints introduce spontaneity, creating a contrast between playful surface design and sophisticated tailoring. g g g",
      "els": [
        {
          "src": "images/chunks/suits-and-scribbles/04e0.webp",
          "x": 14.2778,
          "y": 18.4834,
          "w": 5.2778,
          "h": 7.109,
          "kind": "star",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/suits-and-scribbles/05.webp",
      "w": 1800,
      "h": 2249,
      "left": "#000000",
      "right": "#000000",
      "heading": "IN LENSE",
      "text": "L O O K 0 1 Blazer Dress The statement look A bold reinterpretation of formalwear that merges the authority of a blazer with the confidence of a dress. IN LENSE",
      "els": [
        {
          "src": "images/chunks/suits-and-scribbles/05e0.webp",
          "x": 21.7778,
          "y": 18.1414,
          "w": 21.9444,
          "h": 26.1894,
          "kind": "card",
          "move": true
        },
        {
          "src": "images/chunks/suits-and-scribbles/05e1.webp",
          "x": 33.5556,
          "y": 11.3384,
          "w": 4.7778,
          "h": 3.2904,
          "kind": "star",
          "move": true
        }
      ]
    },
    {
      "src": "images/chunks/suits-and-scribbles/06.webp",
      "w": 1800,
      "h": 2319,
      "left": "#000000",
      "right": "#000000",
      "heading": "Crop Blazer",
      "text": "L O O K 0 2 Crop Blazer The playful look A youthful, fashion-forward take on suiting that experiments with proportion while keeping tailored detailing. L O O K 0 3 Slim-Fit Blazer The classic look The most conventional silhouette, showing how expressive surface design can refresh a wardrobe staple.",
      "els": [
        {
          "src": "images/chunks/suits-and-scribbles/06e0.webp",
          "x": 16.8889,
          "y": 44.89,
          "w": 26.3333,
          "h": 30.5736,
          "kind": "card",
          "move": true
        }
      ]
    }
  ]
};
