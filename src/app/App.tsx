import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  spineColor: string;
  textColor: string;
  description: string;
  excerpt: string;
  tags: string[];
  width: number;
  height: number;
}

interface ArtPiece {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  context: string;
  frameStyle: "gold" | "ebony" | "silver";
  ratio: number;
}

// ─── Book Data ────────────────────────────────────────────────────────────────

const BOOKS: Book[] = [
  {
    id: "ariel",
    title: "Ariel",
    author: "Sylvia Plath",
    year: 1965,
    spineColor: "#7C1D1D",
    textColor: "#F0DEB8",
    description:
      "Published posthumously in 1965, Ariel is Plath's most electrifying collection. Written in the final months before her death, these forty-one poems burn with psychological precision and mythological intensity that had never been seen before in American poetry.",
    excerpt: "Out of the ash\nI rise with my red hair\nAnd I eat men like air.",
    tags: ["Confessional", "Feminist", "American Modernism"],
    width: 26,
    height: 218,
  },
  {
    id: "leaves",
    title: "Leaves of Grass",
    author: "Walt Whitman",
    year: 1855,
    spineColor: "#3D5A2A",
    textColor: "#F0DEB8",
    description:
      "Whitman's life's work, revised across nine editions spanning four decades. This foundational text of American poetry celebrates the body, democracy, and the boundless self with a cataloguing energy unlike anything before it.",
    excerpt: "I am large, I contain multitudes.",
    tags: ["Transcendentalism", "Free Verse", "American"],
    width: 42,
    height: 222,
  },
  {
    id: "waste-land",
    title: "The Waste Land",
    author: "T.S. Eliot",
    year: 1922,
    spineColor: "#2A2A2A",
    textColor: "#C8B88A",
    description:
      "Eliot's masterwork fragments European culture into a mosaic of grief, desire, and spiritual collapse. Published the same year as Ulysses, it defined literary Modernism and rewrote what a long poem could do.",
    excerpt:
      "April is the cruellest month, breeding\nLilacs out of the dead land, mixing\nMemory and desire.",
    tags: ["Modernism", "Fragmented", "Elegy"],
    width: 20,
    height: 208,
  },
  {
    id: "howl",
    title: "Howl and Other Poems",
    author: "Allen Ginsberg",
    year: 1956,
    spineColor: "#1A1A2E",
    textColor: "#E0C88A",
    description:
      "Ginsberg's howl against conformity detonated through San Francisco's Six Gallery reading in 1955. Charged with obscenity and cleared in a landmark trial, it gave the Beat generation its scripture.",
    excerpt:
      "I saw the best minds of my generation destroyed by madness,\nstarving hysterical naked.",
    tags: ["Beat", "Protest", "Queer"],
    width: 18,
    height: 198,
  },
  {
    id: "milk-honey",
    title: "Milk and Honey",
    author: "Rupi Kaur",
    year: 2014,
    spineColor: "#C8B49A",
    textColor: "#2C1B0E",
    description:
      "Kaur's debut moves through trauma, survival, and healing in four chapters. Written in lowercase without punctuation, its directness made it the best-selling poetry collection of the 2010s and brought verse to an entirely new generation.",
    excerpt:
      "you have to stop searching for why at some point\nyou have to leave it alone",
    tags: ["Contemporary", "Diaspora", "Healing"],
    width: 22,
    height: 205,
  },
  {
    id: "tender-buttons",
    title: "Tender Buttons",
    author: "Gertrude Stein",
    year: 1914,
    spineColor: "#8B2E52",
    textColor: "#F0DEB8",
    description:
      "Stein's prose poem triptych — Objects, Food, Rooms — dismantles language itself. Its radical refusal of conventional meaning anticipated Dada, Surrealism, and Language Poetry. A book that rewards re-reading indefinitely.",
    excerpt: "A rose is a rose is a rose.",
    tags: ["Avant-garde", "Cubist", "Experimental"],
    width: 24,
    height: 202,
  },
  {
    id: "autobiography-red",
    title: "Autobiography of Red",
    author: "Anne Carson",
    year: 1998,
    spineColor: "#B84A1A",
    textColor: "#F0DEB8",
    description:
      "Carson's novel-in-verse reimagines the myth of Geryon, the red-winged monster slain by Herakles, as a queer coming-of-age story set in contemporary South America. A book that refuses genre entirely.",
    excerpt: "He was a child who could not speak\nexcept in colors.",
    tags: ["Novel-in-verse", "Queer", "Myth"],
    width: 28,
    height: 220,
  },
  {
    id: "citizen",
    title: "Citizen",
    author: "Claudia Rankine",
    year: 2014,
    spineColor: "#E8E0D0",
    textColor: "#1C1208",
    description:
      "Rankine's genre-defying work — lyric essay, prose poem, conceptual art — bears witness to racial microaggressions in American daily life. Integrating photography and image, it extends the prose poem into documentary.",
    excerpt:
      "Because white men can't\npolice their imagination\nblack men are dying.",
    tags: ["Lyric Essay", "Race", "Documentary"],
    width: 26,
    height: 212,
  },
  {
    id: "bright-dead",
    title: "Bright Dead Things",
    author: "Ada Limón",
    year: 2015,
    spineColor: "#C8841A",
    textColor: "#1A1208",
    description:
      "Limón's fourth collection navigates grief, belonging, and the strangeness of returning home. Shortlisted for the National Book Award, it established her as an essential voice of contemporary American poetry.",
    excerpt:
      "I want to be\nagainst the current\nand in the current at the same time.",
    tags: ["Contemporary", "Grief", "Place"],
    width: 22,
    height: 210,
  },
  {
    id: "sexton",
    title: "The Complete Poems",
    author: "Anne Sexton",
    year: 1981,
    spineColor: "#3D5A47",
    textColor: "#F0DEB8",
    description:
      "Collecting the full arc of Sexton's work, this volume charts the most sustained engagement with mental illness, domesticity, and female experience in American Confessional poetry. Essential and devastating.",
    excerpt: "Put your ear down close to your soul\nand listen hard.",
    tags: ["Confessional", "Feminist", "Collected"],
    width: 38,
    height: 228,
  },
  {
    id: "practical-water",
    title: "Practical Water",
    author: "Brenda Hillman",
    year: 2009,
    spineColor: "#2A5C6B",
    textColor: "#F0DEB8",
    description:
      "The third installment of Hillman's elemental tetralogy. Meditating on water in all its states, the poems dissolve the boundary between ecological grief and spiritual practice in ways no other American poet has attempted.",
    excerpt: "Water comes\nfrom the future\nand the past at once.",
    tags: ["Eco-poetry", "Experimental", "Elemental"],
    width: 24,
    height: 207,
  },
  {
    id: "lucky-wreck",
    title: "Lucky Wreck",
    author: "Ada Limón",
    year: 2006,
    spineColor: "#C45A3A",
    textColor: "#F0DEB8",
    description:
      "Limón's debut collection established her lyric mode: intimate, earthy, grounded in the body and the natural world. Its emotional directness and formal ease announced the arrival of an essential contemporary voice.",
    excerpt:
      "I want to be\na lucky wreck — all shine\nand broken glass.",
    tags: ["Debut", "Contemporary", "Body"],
    width: 20,
    height: 200,
  },
];

const SHELVES = [BOOKS.slice(0, 5), BOOKS.slice(5, 10), BOOKS.slice(10)];

// ─── Art Data ─────────────────────────────────────────────────────────────────

const ART_PIECES: ArtPiece[] = [
  {
    id: "blue-garden",
    title: "Evening Garden (Study No. 3)",
    artist: "M. Voclain",
    year: 2019,
    medium: "Watercolor and ink on paper",
    dimensions: "45 × 60 cm",
    description:
      "An evening garden captured at the exact moment between dusk and true dark, when the blues deepen and the whites begin to phosphoresce. The artist returned to this composition three times before arriving at this final stillness.",
    context:
      "Voclain painted this series during a residency in the Cévennes, France. The garden belonged to an unnamed neighbor who grew evening primrose and white nicotiana for the scent alone. The artist has said she was not painting the garden but the quality of waiting that a garden at dusk enforces.",
    frameStyle: "gold",
    ratio: 1.5,
  },
  {
    id: "still-life",
    title: "Still Life with Correspondence",
    artist: "R. Okafor",
    year: 2021,
    medium: "Oil on linen",
    dimensions: "50 × 50 cm",
    description:
      "Letters, a worn book, and a ceramic cup occupy a table with the quiet authority of long familiarity. The artist has spoken of painting objects that have been touched repeatedly, until they absorb something of the person who touched them.",
    context:
      "Okafor painted this after finding a bundle of letters in a secondhand shop — purchased, never read, and resold again. She describes the work as a portrait of unknowable intimacy: objects that witnessed something, and forgot it, and remained.",
    frameStyle: "ebony",
    ratio: 1.0,
  },
  {
    id: "tide-chart",
    title: "Tide Chart II",
    artist: "S. Leung",
    year: 2020,
    medium: "Acrylic and graphite on canvas",
    dimensions: "80 × 55 cm",
    description:
      "Leung transcribes actual tidal data from Horseshoe Bay, British Columbia into abstract bands of blue-grey acrylic. The graphite lines mark precisely where each tide peaked, transforming scientific record into elegy.",
    context:
      "The work belongs to a series begun after Leung's father, a marine biologist, lost his research vessel in a storm off the coast. She has described the series as a way of finding form for grief she could not otherwise speak — the kind of grief that requires precision.",
    frameStyle: "silver",
    ratio: 0.69,
  },
  {
    id: "reader",
    title: "The Reader (after Vuillard)",
    artist: "C. Mbeki",
    year: 2018,
    medium: "Pastel on toned paper",
    dimensions: "35 × 48 cm",
    description:
      "A figure absorbed in reading, nearly dissolved into the patterned interior around them. Mbeki cites Vuillard's habit of refusing to distinguish people from their wallpaper as the generative pressure behind this work.",
    context:
      "Mbeki made this pastel in a single sitting, watching her grandmother read in the afternoon light. The book the figure holds is deliberately obscured. The artist insists this is not an oversight — the title of the book would close the painting off.",
    frameStyle: "gold",
    ratio: 0.73,
  },
  {
    id: "archipelago",
    title: "Archipelago",
    artist: "T. Beaumont",
    year: 2022,
    medium: "Sumi ink on washi paper",
    dimensions: "100 × 70 cm",
    description:
      "Beaumont loads large brushes with undiluted sumi ink and drops them from varying heights, then develops the resultant forms into islands, bodies, and distances. Each mark is singular and irreversible.",
    context:
      "Made in a single two-hour session without revision or overpainting. The artist has said: 'I wanted to find out what I thought before I had time to disagree with myself.' The title came after the work was finished.",
    frameStyle: "ebony",
    ratio: 1.43,
  },
  {
    id: "portrait",
    title: "Portrait of a Poet (Unfinished)",
    artist: "L. Hernández",
    year: 2017,
    medium: "Oil on gessoed board",
    dimensions: "40 × 55 cm",
    description:
      "The sitter's features are fully resolved while the background remains raw gessoed board. Hernández has argued that this incompleteness is the finished state — that a person's context is always separate from who they are.",
    context:
      "The poet who sat for this work asked to remain unnamed. Hernández agreed, on the condition that she could keep the painting. The sitter has reportedly never seen the finished work.",
    frameStyle: "gold",
    ratio: 0.73,
  },
];

// ─── Abstract Art SVGs ────────────────────────────────────────────────────────

function AbstractArt({ id, className }: { id: string; className?: string }) {
  const p = `art-${id}`;

  switch (id) {
    case "blue-garden":
      return (
        <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`${p}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#101E38" />
              <stop offset="65%" stopColor="#1E3A6E" />
              <stop offset="100%" stopColor="#2D5080" />
            </linearGradient>
          </defs>
          <rect width="300" height="200" fill={`url(#${p}-sky)`} />
          <rect x="0" y="168" width="300" height="32" fill="#0A1408" />
          <ellipse cx="50" cy="162" rx="22" ry="40" fill="#122010" />
          <ellipse cx="80" cy="166" rx="14" ry="28" fill="#0E1A0A" />
          <circle cx="47" cy="130" r="9" fill="#D8ECE4" opacity="0.85" />
          <circle cx="55" cy="124" r="5" fill="#B0D0C8" opacity="0.7" />
          <ellipse cx="150" cy="160" rx="28" ry="32" fill="#0E1C10" />
          <circle cx="145" cy="130" r="12" fill="#C0DDE8" opacity="0.8" />
          <circle cx="159" cy="123" r="7" fill="#E0F0F8" opacity="0.65" />
          <ellipse cx="240" cy="162" rx="20" ry="26" fill="#101808" />
          <circle cx="238" cy="138" r="9" fill="#D0E8DC" opacity="0.9" />
          <ellipse cx="274" cy="166" rx="15" ry="18" fill="#0A1408" />
          <circle cx="20" cy="32" r="1" fill="#fff" opacity="0.7" />
          <circle cx="80" cy="18" r="1.3" fill="#fff" opacity="0.9" />
          <circle cx="180" cy="26" r="0.9" fill="#fff" opacity="0.6" />
          <circle cx="250" cy="12" r="1.5" fill="#fff" opacity="0.85" />
          <circle cx="120" cy="46" r="0.8" fill="#fff" opacity="0.5" />
          <circle cx="210" cy="36" r="1.1" fill="#E8D0A0" opacity="0.7" />
          <circle cx="290" cy="22" r="0.9" fill="#fff" opacity="0.55" />
        </svg>
      );

    case "still-life":
      return (
        <svg viewBox="0 0 240 240" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`${p}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C8A870" />
              <stop offset="100%" stopColor="#A88050" />
            </linearGradient>
          </defs>
          <rect width="240" height="240" fill={`url(#${p}-bg)`} />
          <rect x="0" y="178" width="240" height="62" fill="#7A5028" />
          <rect x="38" y="106" width="76" height="80" rx="3" fill="#2A1808" />
          <rect x="41" y="109" width="70" height="74" fill="#3A2010" />
          <line x1="77" y1="109" x2="77" y2="183" stroke="#1A1008" strokeWidth="2.5" />
          <rect x="90" y="124" width="88" height="66" rx="1" fill="#F0E8D0" transform="rotate(-4, 134, 157)" />
          <line x1="98" y1="140" x2="167" y2="137" stroke="#C0A880" strokeWidth="1" opacity="0.5" />
          <line x1="98" y1="150" x2="165" y2="147" stroke="#C0A880" strokeWidth="1" opacity="0.5" />
          <line x1="98" y1="160" x2="163" y2="157" stroke="#C0A880" strokeWidth="1" opacity="0.5" />
          <ellipse cx="198" cy="165" rx="20" ry="10" fill="#6A3820" />
          <rect x="178" y="144" width="40" height="30" rx="3" fill="#7A4828" />
          <ellipse cx="198" cy="144" rx="20" ry="8" fill="#8A5838" />
          <ellipse cx="198" cy="144" rx="12" ry="5" fill="#4A2818" />
          <ellipse cx="120" cy="180" rx="88" ry="5" fill="#5A3018" opacity="0.35" />
        </svg>
      );

    case "tide-chart":
      return (
        <svg viewBox="0 0 195 280" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="195" height="280" fill="#EBF0F2" />
          <line x1="30" y1="18" x2="30" y2="262" stroke="#8AACB8" strokeWidth="1" />
          <line x1="30" y1="262" x2="183" y2="262" stroke="#8AACB8" strokeWidth="1" />
          {([
            [55, 0], [78, 1], [92, 2], [65, 3], [42, 4],
            [108, 5], [85, 6], [60, 7], [72, 8], [48, 9],
            [95, 10], [68, 11],
          ] as [number, number][]).map(([w, i]) => (
            <g key={i}>
              <rect
                x="30"
                y={22 + i * 20}
                width={w}
                height="14"
                fill={i % 3 === 0 ? "#4A7A9B" : i % 3 === 1 ? "#3A6A8B" : "#5A8AAB"}
                opacity="0.72"
              />
              <line
                x1="30"
                y1={29 + i * 20}
                x2="183"
                y2={29 + i * 20}
                stroke="#A0BEC8"
                strokeWidth="0.4"
                strokeDasharray="3,5"
              />
            </g>
          ))}
        </svg>
      );

    case "reader":
      return (
        <svg viewBox="0 0 200 274" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`${p}-wall`} width="24" height="24" patternUnits="userSpaceOnUse">
              <rect width="24" height="24" fill="#C8A88A" />
              <circle cx="12" cy="12" r="3.5" fill="#B89878" opacity="0.55" />
              <path d="M0,12 Q6,6 12,12 Q18,18 24,12" stroke="#B89878" strokeWidth="0.5" fill="none" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="200" height="274" fill={`url(#${p}-wall)`} />
          <rect x="0" y="0" width="90" height="200" fill="#F8E8D0" opacity="0.2" />
          <rect x="55" y="198" width="90" height="12" rx="2" fill="#6A3A18" />
          <rect x="60" y="210" width="80" height="58" rx="2" fill="#7A4828" />
          <ellipse cx="100" cy="192" rx="32" ry="44" fill="#2A1C10" />
          <ellipse cx="100" cy="143" rx="20" ry="23" fill="#C0806A" />
          <ellipse cx="100" cy="133" rx="22" ry="15" fill="#1A1008" />
          <rect x="76" y="184" width="48" height="32" rx="1" fill="#181828" transform="rotate(-8, 100, 200)" />
        </svg>
      );

    case "archipelago":
      return (
        <svg viewBox="0 0 280 196" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="196" fill="#F5F0E8" />
          <ellipse cx="58" cy="98" rx="36" ry="24" fill="#0E0C0A" opacity="0.88" />
          <ellipse cx="56" cy="96" rx="26" ry="16" fill="#060402" />
          <ellipse cx="162" cy="72" rx="48" ry="30" fill="#0E0C0A" opacity="0.92" transform="rotate(-10, 162, 72)" />
          <ellipse cx="160" cy="70" rx="38" ry="22" fill="#060402" transform="rotate(-10, 160, 70)" />
          <ellipse cx="232" cy="130" rx="28" ry="18" fill="#0E0C0A" opacity="0.82" />
          <ellipse cx="107" cy="150" rx="20" ry="13" fill="#0E0C0A" opacity="0.72" />
          <ellipse cx="219" cy="48" rx="13" ry="9" fill="#0E0C0A" opacity="0.62" />
          <path d="M 82 104 Q 112 118 130 102" stroke="#1A1610" strokeWidth="2" fill="none" opacity="0.38" />
          <path d="M 200 88 Q 220 112 230 128" stroke="#1A1610" strokeWidth="1.5" fill="none" opacity="0.3" />
          <circle cx="14" cy="56" r="6" fill="#0E0C0A" opacity="0.52" />
          <circle cx="266" cy="156" r="5" fill="#0E0C0A" opacity="0.42" />
          <circle cx="10" cy="142" r="3" fill="#0E0C0A" opacity="0.35" />
        </svg>
      );

    case "portrait":
      return (
        <svg viewBox="0 0 200 274" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="274" fill="#F0EDE8" />
          <rect width="200" height="274" fill="none" stroke="#E4E0D8" strokeWidth="50" opacity="0.5" />
          <path d="M 36 202 Q 100 190 164 202" fill="#1A1008" />
          <ellipse cx="100" cy="106" rx="56" ry="66" fill="#D4976A" />
          <rect x="84" y="164" width="32" height="30" fill="#C0836A" />
          <ellipse cx="44" cy="108" rx="10" ry="16" fill="#C08060" />
          <ellipse cx="156" cy="108" rx="10" ry="16" fill="#C08060" />
          <path d="M 44 58 Q 100 22 156 58 Q 164 92 160 112 Q 105 124 40 112 Q 36 92 44 58" fill="#1A1008" />
          <ellipse cx="76" cy="100" rx="14" ry="10" fill="#E8C0A0" />
          <ellipse cx="124" cy="100" rx="14" ry="10" fill="#E8C0A0" />
          <ellipse cx="76" cy="100" rx="8" ry="6" fill="#2A1818" />
          <ellipse cx="124" cy="100" rx="8" ry="6" fill="#2A1818" />
          <circle cx="74" cy="98" r="2.5" fill="#fff" opacity="0.6" />
          <circle cx="122" cy="98" r="2.5" fill="#fff" opacity="0.6" />
          <path d="M 100 108 Q 92 130 84 136 Q 100 142 116 136 Q 108 130 100 108" fill="#C07858" />
          <path d="M 80 150 Q 100 158 120 150" stroke="#8A4A30" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#DDD" />
        </svg>
      );
  }
}

// ─── Frame Config ─────────────────────────────────────────────────────────────

const FRAME_COLORS = {
  gold: { outer: "#C8A020", inner: "#7A6010", mat: "#F5EFE0" },
  ebony: { outer: "#1A1208", inner: "#0A0804", mat: "#E8E0D0" },
  silver: { outer: "#909090", inner: "#686868", mat: "#F0F0EC" },
};

// ─── FramedArt ────────────────────────────────────────────────────────────────

function FramedArt({ piece, onClick }: { piece: ArtPiece; onClick: () => void }) {
  const frame = FRAME_COLORS[piece.frameStyle];
  const baseW = 178;
  const artH = Math.round(baseW / piece.ratio);

  return (
    <div
      className="flex flex-col items-center gap-3 cursor-pointer group"
      onClick={onClick}
    >
      <div
        className="transition-all duration-300 group-hover:scale-[1.025] group-hover:brightness-105"
        style={{
          borderColor: frame.outer,
          borderWidth: 10,
          borderStyle: "solid",
          boxShadow: `inset 0 0 0 4px ${frame.inner}, 6px 14px 36px rgba(0,0,0,0.38), 2px 4px 10px rgba(0,0,0,0.22)`,
          padding: 10,
          background: frame.mat,
        }}
      >
        <div style={{ width: baseW, height: artH }}>
          <AbstractArt id={piece.id} className="w-full h-full block" />
        </div>
      </div>
      <div className="text-center space-y-0.5" style={{ maxWidth: baseW + 24 }}>
        <p
          className="text-muted-foreground uppercase tracking-widest"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 9 }}
        >
          {piece.artist} · {piece.year}
        </p>
        <p
          className="text-sm leading-tight italic"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {piece.title}
        </p>
      </div>
    </div>
  );
}

// ─── BookSpine ────────────────────────────────────────────────────────────────

function BookSpine({ book, onClick }: { book: Book; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      title={`${book.title} — ${book.author}`}
      className="relative cursor-pointer flex-shrink-0 transition-all duration-200 hover:-translate-y-3 hover:brightness-110"
      style={{
        width: book.width,
        height: book.height,
        backgroundColor: book.spineColor,
        boxShadow: "inset -2px 0 4px rgba(0,0,0,0.2), inset 2px 0 3px rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(255,255,255,0.12)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 2px",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            color: book.textColor,
            fontSize: 9,
            fontFamily: "'Lora', serif",
            lineHeight: 1.15,
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "normal",
            wordBreak: "break-word",
            maxHeight: book.height - 20,
          }}
        >
          {book.title}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(0,0,0,0.25)",
        }}
      />
    </div>
  );
}

// ─── Shelf ────────────────────────────────────────────────────────────────────

function Shelf({ books, onBookClick }: { books: Book[]; onBookClick: (b: Book) => void }) {
  return (
    <div>
      <div
        className="flex items-end gap-[2px] overflow-x-auto"
        style={{
          background: "linear-gradient(to bottom, #1C1008, #140C04)",
          minHeight: 260,
          paddingTop: 24,
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 0,
          scrollbarWidth: "none",
        }}
      >
        {books.map((book) => (
          <BookSpine key={book.id} book={book} onClick={() => onBookClick(book)} />
        ))}
      </div>
      <div
        style={{
          height: 18,
          background: "linear-gradient(to bottom, #6A3C18 0%, #4A2810 55%, #3A2010 100%)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.08)",
        }}
      />
    </div>
  );
}

// ─── Modal Panels ─────────────────────────────────────────────────────────────

function BookPanel({
  book,
  expanded,
  onExpand,
  onClose,
}: {
  book: Book;
  expanded: boolean;
  onExpand: () => void;
  onClose: () => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between px-8 pt-7 pb-0">
        <span
          className="text-muted-foreground uppercase tracking-widest"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 9 }}
        >
          Poetry · {book.year}
        </span>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-foreground/5 transition-colors"
          aria-label="Close"
        >
          <X size={13} />
        </button>
      </div>

      <div className="flex justify-center px-8 py-6">
        <div className="flex" style={{ width: 130 }}>
          <div
            style={{
              width: 14,
              flexShrink: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0))",
            }}
          />
          <div
            className="flex-1 flex flex-col items-center justify-center py-10 px-4"
            style={{
              backgroundColor: book.spineColor,
              minHeight: 170,
              boxShadow: "4px 10px 28px rgba(0,0,0,0.32)",
            }}
          >
            <p
              className="text-center uppercase tracking-widest mb-3 opacity-65"
              style={{ color: book.textColor, fontFamily: "'DM Mono', monospace", fontSize: 7 }}
            >
              {book.author}
            </p>
            <p
              className="text-center leading-tight"
              style={{ color: book.textColor, fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 600 }}
            >
              {book.title}
            </p>
            <div className="mt-4 w-8 h-px opacity-35" style={{ background: book.textColor }} />
            <p
              className="text-center mt-2 opacity-45"
              style={{ color: book.textColor, fontFamily: "'DM Mono', monospace", fontSize: 7 }}
            >
              {book.year}
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 pb-2">
        <h2
          className="text-2xl leading-tight mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {book.title}
        </h2>
        <p
          className="text-muted-foreground"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 11 }}
        >
          {book.author}
        </p>
      </div>

      <div className="px-8 py-3 flex flex-wrap gap-1.5">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="border border-border text-muted-foreground uppercase tracking-wider px-2 py-0.5"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: "0.1em" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mx-8 border-t border-border" />

      <div className="px-8 py-5">
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "'Lora', serif", color: "rgba(26,17,8,0.8)" }}
        >
          {book.description}
        </p>
      </div>

      <div className="mx-8 border-t border-border" />

      <button
        onClick={onExpand}
        className="w-full flex items-center justify-between px-8 py-4 hover:bg-foreground/[0.03] transition-colors text-left"
      >
        <span
          className="uppercase tracking-widest"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 9 }}
        >
          An excerpt
        </span>
        <ChevronDown
          size={13}
          className="transition-transform duration-200 text-muted-foreground"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {expanded && (
        <div className="px-8 pb-8 pt-1">
          <blockquote
            className="border-l-2 pl-5"
            style={{ borderColor: "#8B3220" }}
          >
            <p
              className="text-sm leading-relaxed italic whitespace-pre-line"
              style={{ fontFamily: "'Lora', serif", color: "rgba(26,17,8,0.78)" }}
            >
              {book.excerpt}
            </p>
          </blockquote>
        </div>
      )}
    </>
  );
}

function ArtPanel({
  art,
  expanded,
  onExpand,
  onClose,
}: {
  art: ArtPiece;
  expanded: boolean;
  onExpand: () => void;
  onClose: () => void;
}) {
  const frame = FRAME_COLORS[art.frameStyle];

  return (
    <>
      <div className="flex items-center justify-between px-8 pt-7 pb-0">
        <span
          className="text-muted-foreground uppercase tracking-widest"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 9 }}
        >
          Visual Art · {art.year}
        </span>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-foreground/5 transition-colors"
          aria-label="Close"
        >
          <X size={13} />
        </button>
      </div>

      <div className="flex justify-center px-8 py-6">
        <div
          style={{
            borderColor: frame.outer,
            borderWidth: 9,
            borderStyle: "solid",
            boxShadow: `inset 0 0 0 4px ${frame.inner}, 5px 10px 24px rgba(0,0,0,0.3)`,
            padding: 10,
            background: frame.mat,
          }}
        >
          <div style={{ width: 270 }}>
            <AbstractArt id={art.id} className="w-full block" />
          </div>
        </div>
      </div>

      <div className="px-8 pb-2">
        <h2
          className="text-2xl leading-tight mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {art.title}
        </h2>
        <p
          className="text-muted-foreground"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 11 }}
        >
          {art.artist}
        </p>
      </div>

      <div className="px-8 py-3 grid grid-cols-2 gap-4">
        {[
          { label: "Medium", value: art.medium },
          { label: "Dimensions", value: art.dimensions },
        ].map(({ label, value }) => (
          <div key={label}>
            <p
              className="text-muted-foreground uppercase tracking-widest mb-0.5"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: 8 }}
            >
              {label}
            </p>
            <p className="text-sm" style={{ fontFamily: "'Lora', serif" }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-8 border-t border-border" />

      <div className="px-8 py-5">
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "'Lora', serif", color: "rgba(26,17,8,0.8)" }}
        >
          {art.description}
        </p>
      </div>

      <div className="mx-8 border-t border-border" />

      <button
        onClick={onExpand}
        className="w-full flex items-center justify-between px-8 py-4 hover:bg-foreground/[0.03] transition-colors text-left"
      >
        <span
          className="uppercase tracking-widest"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 9 }}
        >
          Behind the work
        </span>
        <ChevronDown
          size={13}
          className="transition-transform duration-200 text-muted-foreground"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {expanded && (
        <div className="px-8 pb-8 pt-1">
          <p
            className="text-sm leading-relaxed italic"
            style={{ fontFamily: "'Lora', serif", color: "rgba(26,17,8,0.72)" }}
          >
            {art.context}
          </p>
        </div>
      )}
    </>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

type SelectedItem =
  | { type: "book"; data: Book }
  | { type: "art"; data: ArtPiece }
  | null;

function Modal({ item, onClose }: { item: NonNullable<SelectedItem>; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0 bg-black/72 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto overflow-x-hidden"
        style={{
          background: "#FDFAF4",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          scrollbarWidth: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "book" ? (
          <BookPanel
            book={item.data}
            expanded={expanded}
            onExpand={() => setExpanded((v) => !v)}
            onClose={onClose}
          />
        ) : (
          <ArtPanel
            art={item.data}
            expanded={expanded}
            onExpand={() => setExpanded((v) => !v)}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [section, setSection] = useState<"library" | "gallery">("library");
  const [selected, setSelected] = useState<SelectedItem>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Lora', serif" }}
    >
      {/* Header */}
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col items-center gap-4">
          <div className="text-center">
            <p
              className="text-muted-foreground uppercase tracking-widest mb-1"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: "0.22em" }}
            >
              Personal Archive · Est. 2024
            </p>
            <h1
              className="text-3xl md:text-4xl leading-none"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              The Collection
            </h1>
          </div>

          <nav className="flex border border-border">
            {(
              [
                { key: "library", label: "Poetry Shelf" },
                { key: "gallery", label: "Art Collection" },
              ] as const
            ).map(({ key, label }, i) => (
              <button
                key={key}
                onClick={() => setSection(key)}
                className="px-6 py-2 uppercase tracking-widest transition-colors duration-200"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  background: section === key ? "#2D1B0E" : "transparent",
                  color: section === key ? "#F5EFE0" : "#7A6852",
                  borderRight: i === 0 ? "1px solid rgba(26,17,8,0.12)" : undefined,
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Library */}
      {section === "library" && (
        <main className="max-w-5xl mx-auto px-4 md:px-8 py-10">
          <div
            style={{
              background: "linear-gradient(to bottom, #3A2010 0%, #2A1808 100%)",
              padding: "0 6px",
              boxShadow:
                "inset 0 0 50px rgba(0,0,0,0.45), 0 10px 40px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                height: 14,
                background: "linear-gradient(to bottom, #7A4A28, #5A3018)",
                boxShadow: "0 3px 8px rgba(0,0,0,0.35)",
                marginBottom: 2,
              }}
            />
            {SHELVES.map((shelf, i) => (
              <div key={i} style={{ marginBottom: 2 }}>
                <Shelf
                  books={shelf}
                  onBookClick={(b) => setSelected({ type: "book", data: b })}
                />
              </div>
            ))}
            <div
              style={{
                height: 18,
                background: "linear-gradient(to bottom, #7A4A28, #5A3018)",
                boxShadow: "0 5px 14px rgba(0,0,0,0.45)",
              }}
            />
          </div>

          <p
            className="text-center mt-6 text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.14em" }}
          >
            Click any spine to open
          </p>
        </main>
      )}

      {/* Gallery */}
      {section === "gallery" && (
        <main
          className="py-14 px-4 md:px-8"
          style={{
            background: "linear-gradient(160deg, #E2D8C8 0%, #D4C9B5 60%, #C8BBAA 100%)",
            minHeight: "calc(100vh - 110px)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <p
              className="text-center text-muted-foreground mb-12"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Private collection · works acquired 2017–2022
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 justify-items-center items-start">
              {ART_PIECES.map((piece) => (
                <FramedArt
                  key={piece.id}
                  piece={piece}
                  onClick={() => setSelected({ type: "art", data: piece })}
                />
              ))}
            </div>
          </div>
        </main>
      )}

      {selected && (
        <Modal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
