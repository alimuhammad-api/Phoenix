/* Story-group data for the Decodable Stories browser */

export const groups = [
  { n: 1,  name: "Short-Syllable Stories",            focus: "Closed syllables · short a e i o u",        level: "Beginner", color: "red",   tiles: ["c","a","t"], count: 16,
    sample: "The <b>cat</b> sat on a <b>mat</b>. A <b>big</b> <b>dog</b> ran up the <b>hill</b>." },
  { n: 2,  name: "Silent-E Stories",                  focus: "Magic-e · a_e i_e o_e u_e",                 level: "Beginner", color: "green", tiles: ["c","a","k","e"], count: 14,
    sample: "Jake will <b>bake</b> a <b>cake</b>. We <b>ride</b> a <b>bike</b> home in time." },
  { n: 3,  name: "Open-and-Closed-Syllable Stories",  focus: "Two-syllable words · open vs. closed",      level: "Beginner", color: "blue",  tiles: ["m","u","s","i","c"], count: 13,
    sample: "I like <b>music</b>. The <b>robot</b> is a <b>napkin</b> on the <b>table</b>." },
  { n: 4,  name: "First Vowel Teams Stories",         focus: "ai · ay · ee · ea · oa · ow",               level: "Building", color: "gold",  tiles: ["r","a","i","n"], count: 18,
    sample: "The <b>rain</b> fell on the <b>boat</b>. We will <b>play</b> in the <b>street</b> today." },
  { n: 5,  name: "R-Controlled Vowel Stories",        focus: "ar · or · er · ir · ur",                    level: "Building", color: "red",   tiles: ["c","a","r"], count: 15,
    sample: "The <b>bird</b> sat on the <b>car</b>. A <b>farmer</b> had <b>corn</b> in a <b>barn</b>." },
  { n: 6,  name: "Snow, Cow, and Cloud Stories",      focus: "Diphthongs · ow · ou · oi · oy",            level: "Building", color: "green", tiles: ["c","l","o","u","d"], count: 12,
    sample: "A <b>cloud</b> sat low. The <b>cow</b> said <b>ow</b> in the <b>snow</b> at the house." },
  { n: 7,  name: "Consonant-le Stories",              focus: "Stable final syllable · -ble -tle -ple",    level: "Advanced", color: "blue",  tiles: ["a","p","p","l","e"], count: 11,
    sample: "An <b>apple</b> sat on the <b>table</b>. The <b>little</b> turtle could <b>wobble</b>." },
  { n: 8,  name: "“Y” as a Vowel Stories",  focus: "y = /ē/ and /ī/ · happy · fly",   level: "Advanced", color: "gold",  tiles: ["h","a","p","p","y"], count: 10,
    sample: "The <b>puppy</b> is <b>happy</b>. A <b>fly</b> went <b>by</b> in the <b>sunny</b> sky." },
  { n: 9,  name: "Soft “c” and “g” Stories", focus: "Soft c /s/ · soft g /j/ · city · gem", level: "Advanced", color: "red", tiles: ["c","i","t","y"], count: 10,
    sample: "The <b>city</b> had a <b>gem</b>. A <b>giant</b> made <b>space</b> on the <b>stage</b>." },
  { n: 10, name: "Advanced Phonics Stories",          focus: "ph · tion · silent letters · schwa",        level: "Advanced", color: "green", tiles: ["p","h","o","n","e"], count: 14,
    sample: "The <b>elephant</b> made a <b>motion</b>. A <b>knight</b> took a <b>photo</b> at the station." },
];

export const colorVar = { red: "var(--red)", green: "var(--green)", gold: "var(--gold)", blue: "var(--blue)" };

export const img = {
  hero:    "https://www.opensourcephonics.org/wp-content/uploads/2021/08/AdobeStock_431482486-1024x540.jpeg",
  patterns:"https://www.opensourcephonics.org/wp-content/uploads/2021/08/AdobeStock_409579006-1024x682.jpeg",
  dictation:"https://www.opensourcephonics.org/wp-content/uploads/2021/08/AdobeStock_414390709-1-scaled-e1630096373651-1024x830.jpeg",
  reading: "https://www.opensourcephonics.org/wp-content/uploads/2021/07/AdobeStock_374844890.jpeg",
};

export const endorsements = [
  { quote: "What a service to the world of reading instruction! It's comprehensive, clear, systematic, cumulative, and explicit. The scope and sequence is as good as any phonics program out there, and the quality and amount of decodable text practice is exceptional.",
    name: "Dr. Louisa Moats", role: "Literacy expert & author of LETRS", color: "var(--green)", photo: "/avatars/moats.jpg" },
  { quote: "I whole-heartedly support initiatives like this one that work to provide high-quality literacy materials to all teachers and readers. I confirm their alignment with evidence-based structured literacy instruction.",
    name: "Emily Cantrell", role: "Clinical Associate Professor, Texas A&M University", color: "var(--red)", photo: "/avatars/cantrell.jpg" },
  { quote: "Every child deserves the best opportunity to learn to read, and decodable texts let students apply the phonics patterns they've been taught instead of guessing. This is a real step in that direction.",
    name: "Structured Literacy Review", role: "Evidence-based reading practice", color: "var(--blue)", photo: "/avatars/review.jpg" },
];

/* "Reviewed against" chips for the endorsements footer */
export const reviewedAgainst = [
  { label: "LETRS principles",      color: "var(--gold)",  text: "var(--ink)" },
  { label: "Structured Literacy",   color: "var(--green)", text: "#fff" },
  { label: "The Science of Reading", color: "var(--red)",  text: "#fff" },
  { label: "Orton-Gillingham",      color: "var(--blue)",  text: "#fff" },
];
