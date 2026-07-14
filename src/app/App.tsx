import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgDuncanson from "@/imports/Robert_Duncanson_-_Land_of_the_Lotos_Eaters.jpg";
import imgBannister from "@/imports/under-the-oak_480x480.jpg";
import imgDouglas from "@/imports/aspects_of_negro_life.jpg";
import imgRinggold from "@/imports/Ringgold-American-People-Series-20-Die-800x399.jpg";
import imgBasquiat from "@/imports/untitled_jmb.jpg";
import imgKaphar from "@/imports/kaphar-analogous-colors-2023-03-e1727816005210.jpg";

// ─── Type colours & labels (exact from source) ───────────────────────────────
const TC: Record<string, string> = {
  legislation: "#2f6b3c", amendment: "#1f4e8c", court: "#5a2e8c",
  protest: "#c47a1e", riot: "#a8231e", organization: "#8c6d1f", milestone: "#2f7c7c",
};
const TL: Record<string, string> = {
  legislation: "Legislation", amendment: "Amendment", court: "Court Case",
  protest: "Protest/March", riot: "Riot/Uprising", organization: "Organization Founded",
  milestone: "Milestone",
};

interface TEvent { year: string; type: string; title: string; desc: string; }
interface BookPages { form: string; aboutPoem: string[]; historyTitle: string; historyParas: string[]; sourceUrl: string; sourceDomain: string; excerpt: string; }
interface BookData { title: string; author: string; year: string; bio: string; context: string; pages?: BookPages; }
interface ArtPages { aboutWork: string[]; aboutArtist: string[]; contextParas: string[]; }
interface ArtData { title: string; artist: string; year: string; style: string; bio: string; context: string; medium: string; dimensions: string; institution: string; link: string; img: string; artPages: ArtPages; }
interface Era {
  name: string; years: string; wall: string; color1: string; color2: string;
  blurb: string; books: BookData[]; art: ArtData;
  timeline: TEvent[]; panelEvents: TEvent[];
}

// ─── Era data (exact from source) ────────────────────────────────────────────
const eras: Era[] = [
  {
    name: "Antebellum Era", years: "1619 – 1865",
    wall: "linear-gradient(160deg, #4a3524, #2e2013)",
    color1: "#5a3a29", color2: "#2f1e12",
    blurb: "Verse written under chattel slavery, some composed by enslaved poets themselves, circulating as evidence of Black intellect and as tools for the abolitionist cause.",
    books: [
      { title: "On Liberty and Slavery", author: "George Moses Horton", year: "1829",
        bio: "George Moses Horton was enslaved in North Carolina and taught himself to read; he sold poems to University of North Carolina students to earn money, becoming one of the first Black Southern poets to be published.",
        context: "Written as the American Colonization Society and abolitionist societies clashed over slavery's future, and shortly before Nat Turner's 1831 rebellion hardened Southern slave codes and restricted Black literacy and assembly.",
        pages: { form: "A Poem · from The Hope of Liberty, 1829", aboutPoem: ["Horton addresses \"Liberty\" almost as a person — a figure he pleads with, describing the weight of his own bondage and begging for her arrival. Written from inside slavery itself, the poem borrows the vocabulary of the American Revolution, words like tyrant, oppression, and vassal, that would have been fifty years old and instantly recognizable to its readers.", "That borrowed language does quiet, pointed work: it holds the nation's founding promises of liberty up against its treatment of enslaved people, and lets the contradiction speak for itself."], historyTitle: "George Moses Horton, Enslaved Poet", historyParas: ["George Moses Horton was born into slavery around 1798 on a tobacco plantation in North Carolina. He taught himself to read using scraps of paper and a hymnal, and by his teenage years was composing poems entirely in his head, reciting them aloud rather than writing them down, since he had not yet learned to write.", "He was permitted by his enslaver to travel to the nearby University of North Carolina at Chapel Hill, where he sold his poems, mostly love verses, to students at the weekly market. His talent caught the attention of Caroline Lee Hentz, a novelist and professor's wife, who taught him more advanced writing and helped transcribe and publish his work.", "With her help, Horton published The Hope of Liberty in 1829, believed to be the first book published by an African American author in the American South. He hoped its sales would earn enough to buy his freedom; despite public appeals, including from North Carolina's governor, that hope was never realized through the book.", "Horton remained enslaved for nearly four more decades, continuing to write and publish two further collections, until he was freed at the end of the Civil War in 1865."], sourceUrl: "https://www.poetryfoundation.org/poems/52307/on-liberty-and-slavery", sourceDomain: "poetryfoundation.org", excerpt: "Alas! and am I born for this,\nTo wear this slavish chain?\nDeprived of all created bliss,\nThrough hardship, toil and pain!\n\nHow long have I in bondage lain,\nAnd languished to be free!\nAlas! and must I still complain—\nDeprived of liberty.\n\nOh, Heaven! and is there no relief\nThis side the silent grave—\nTo soothe the pain—to quell the grief\nAnd anguish of a slave?" } },
      { title: "The Slave Mother", author: "Frances E. W. Harper", year: "1854",
        bio: "Frances E. W. Harper was a free-born Black poet, abolitionist, and suffragist from Baltimore who became one of the most widely read Black poets of the 19th century.",
        context: "Published a year after the Fugitive Slave Act of 1850 intensified the separation of enslaved families through recapture, and amid rising tensions that would culminate in the Dred Scott decision of 1857 and the Civil War.",
        pages: { form: "A Poem · from Poems on Miscellaneous Subjects, 1854", aboutPoem: ["This short lyric depicts a mother's anguish at the moment of forced separation from her child, an all-too-common event under slavery, where families could be broken apart at auction with no warning and no recourse.", "Harper builds the poem through repeated images of physical and emotional pain, then closes by naming the woman simply as a mother, without any qualifying word for her race or legal status — a deliberate choice that asks the reader to recognize her grief as universal, not distant or abstract."], historyTitle: "Frances Ellen Watkins Harper", historyParas: ["Frances Ellen Watkins Harper was born free in Baltimore, Maryland in 1825, orphaned as a young child, and raised by an uncle who ran a school for free Black children. She became one of the first African American women to be widely published in the United States.", "This poem appeared in her 1854 collection Poems on Miscellaneous Subjects, prefaced by the prominent white abolitionist William Lloyd Garrison, and it sold well enough that Harper released an expanded edition a few years later.", "Alongside her writing, Harper worked as a public speaker on the abolitionist circuit and supported the Underground Railroad. After the Civil War she remained a lifelong activist, campaigning for civil rights, women's suffrage, and temperance, and she later wrote several novels, including Iola Leroy, one of the first novels published by a Black woman in the United States."], sourceUrl: "https://www.poetryfoundation.org/poems/51977/the-slave-mother-56d23017ceaad", sourceDomain: "poetryfoundation.org", excerpt: "Heard you that shriek? It rose\nSo wildly on the air,\nIt seemed as if a burden'd heart\nWas breaking in despair.\n\nSaw you those hands so sadly clasped—\nThe bowed and feeble head—\nThe shuddering of that fragile form—\nThat look of grief and dread?\n\nShe is a mother pale with fear,\nHer boy clings to her side,\nAnd in her kirtle vainly tries\nHis trembling form to hide." } },
    ],
    art: { title: "Land of the Lotus Eaters", artist: "Robert S. Duncanson", year: "1861",
      style: "linear-gradient(160deg, #3d5a3a 0%, #6b8c4a 35%, #d9c67a 60%, #7a9bb5 100%)",
      bio: "Robert S. Duncanson was one of the first Black American artists to achieve international recognition, working in the Hudson River School landscape tradition.",
      context: "Painted in 1861 as the Civil War began; Duncanson, based in Cincinnati near the Ohio River border with slave states, used sweeping landscape painting partly to sidestep the racial barriers that blocked Black portraitists from White patrons.",
      medium: "Oil on canvas", dimensions: "52⅜ × 87½ in. (133 × 222.3 cm)", institution: "Smithsonian Magazine", link: "https://www.smithsonianmag.com/arts-culture/americas-forgotten-landscape-painter-robert-s-duncanson-112952174/", img: imgDuncanson,
      artPages: {
        aboutWork: ["The painting depicts the mythological island from Homer's Odyssey where lotus-eaters offer travelers a fruit that erases all desire to return home. Duncanson renders it as a sweeping Hudson River School landscape — soft golden light, mist-draped water, tiny figures dwarfed by lush vegetation — with no sign of the world's violence anywhere on the canvas.", "The choice of subject is historically charged. Painted at the outset of the Civil War by a man who had been born legally free but had navigated a society that denied full humanity to people of his race, the dreamscape reads as both an escapist vision and a pointed commentary: liberty as an unreachable mythological country, perpetually just out of reach."],
        aboutArtist: ["Robert S. Duncanson (c. 1821–1872) was born in Fayette, New York to a free Black mother and a Scottish-Canadian father. He settled in Cincinnati, then one of the largest cities in the Midwest and a hub of abolitionist activity, where he received early patronage from the anti-slavery philanthropist Nicholas Longworth.", "He became one of the first Black American artists to achieve international recognition, exhibiting in the United States, Canada, Scotland, and Ireland. Working in the Hudson River School tradition, he painted landscapes, literary scenes, and mythology rather than portraits — a practical strategy in a market where white patrons were reluctant to commission Black artists for figurative work.", "He traveled to Europe during the Civil War years for safety and opportunity. His final years were marked by deteriorating mental health; he died in Detroit in 1872 after a breakdown during a public exhibition of his work."],
        contextParas: ["Duncanson completed the canvas in 1861 as Southern states seceded and the Civil War began. Cincinnati sat on the Ohio River border between free and slave territory, making it a key stop on the Underground Railroad and a city permanently charged with the proximity of slavery.", "During the 1850s, the city had been shaken by highly publicized escapes and recaptures of enslaved people crossing from Kentucky, including the case of Margaret Garner — whose story Toni Morrison would later adapt in Beloved. Duncanson painted his otherworldly retreats in this environment, where the question of who was and was not free was a daily, urgent reality."]
      } },
    timeline: [
      { year: "1619", type: "milestone", title: "First Enslaved Africans Arrive in Virginia", desc: "A ship carrying enslaved Africans arrived at Point Comfort, Virginia, beginning over two centuries of chattel slavery in what became the United States." },
      { year: "1793", type: "legislation", title: "Fugitive Slave Act of 1793", desc: "Allowed enslavers to reclaim escaped enslaved people across state lines, including from free states." },
      { year: "1831", type: "riot", title: "Nat Turner's Rebellion", desc: "An armed uprising of enslaved people in Virginia killed dozens of white residents, prompting sweeping crackdowns on Black literacy and assembly across the South." },
      { year: "1850", type: "legislation", title: "Fugitive Slave Act of 1850", desc: "Strengthened federal enforcement of returning escaped enslaved people, compelling Northern citizens to assist in their capture." },
      { year: "1857", type: "court", title: "Dred Scott v. Sandford", desc: "The Supreme Court ruled that Black Americans, enslaved or free, could not be U.S. citizens and had no standing to sue in federal court." },
      { year: "1863", type: "legislation", title: "Emancipation Proclamation", desc: "President Lincoln declared enslaved people in Confederate states to be free, reframing the war as a fight against slavery." },
    ],
    panelEvents: [
      { year: "1820", type: "legislation", title: "Missouri Compromise", desc: "Admitted Missouri as a slave state and Maine as a free state, banning slavery north of latitude 36°30′ in the remaining Louisiana Territory." },
      { year: "1839", type: "court", title: "The Amistad Case", desc: "Africans who seized control of the slave ship La Amistad won their freedom before the U.S. Supreme Court, a rare early legal victory against the slave trade." },
      { year: "1852", type: "milestone", title: "Publication of Uncle Tom's Cabin", desc: "Harriet Beecher Stowe's novel intensified national debate over slavery, selling widely across the North and provoking backlash in the South." },
      { year: "1859", type: "protest", title: "John Brown's Raid on Harpers Ferry", desc: "Abolitionist John Brown led an armed raid on a federal armory, hoping to spark a wider slave rebellion; his execution deepened the North-South divide." },
    ],
  },
  {
    name: "Reconstruction Era", years: "1865 – 1896",
    wall: "linear-gradient(160deg, #55401f, #332512)",
    color1: "#6b4a23", color2: "#3a2810",
    blurb: "Verse from the brief window of Black citizenship and political power after emancipation, through its violent reversal and the rise of Jim Crow.",
    books: [
      { title: "Learning to Read", author: "Frances E. W. Harper", year: "1872",
        bio: "Harper continued writing after emancipation, becoming a leading voice on Black literacy, education, and civic participation during Reconstruction.",
        context: "Published as the Freedmen's Bureau ran thousands of schools for formerly enslaved people and the 15th Amendment (1870) granted Black men the vote — gains that would be rolled back after the Compromise of 1877 ended Reconstruction.",
        pages: { form: "A Poem · from Sketches of Southern Life, 1872", aboutPoem: ["Written in first-person dialect as \"Aunt Chloe,\" a recurring character Harper created for a formerly enslaved narrator, the poem recounts the resourceful, often hidden ways Black people found to teach themselves and each other to read despite laws and customs designed to keep them illiterate.", "It then follows Chloe into freedom after the Civil War, where, even in old age, she sets out to finally learn to read for herself — treating literacy not just as a skill but as a form of independence and dignity that had long been deliberately withheld."], historyTitle: "Aunt Chloe & Reconstruction", historyParas: ["Frances Ellen Watkins Harper wrote \"Learning to Read\" as part of Sketches of Southern Life, a collection built around the voice of Aunt Chloe, a formerly enslaved woman reflecting on slavery, emancipation, and the early years of Reconstruction.", "Throughout the antebellum South, teaching enslaved people to read was illegal in most states, a policy enforced precisely because literacy was understood, by enslavers and the enslaved alike, as a path toward independent thought and resistance.", "Harper herself was a committed advocate for freedmen's education after the Civil War, traveling extensively through the South to speak and organize on behalf of newly emancipated communities, work that directly informed the character and voice of Aunt Chloe."], sourceUrl: "https://www.poetryfoundation.org/poems/52448/learning-to-read-56d230ed0fdc0", sourceDomain: "poetryfoundation.org", excerpt: "Very soon the Yankee teachers\nCame down and set up school;\nBut, oh! how the Rebs did hate it,—\nIt was agin' their rule.\n\nOur masters always tried to hide\nBook learning from our eyes;\nKnowledge didn't agree with slavery—\n'Twould make us all too wise.\n\nBut some of us would try to steal\nA little from the book,\nAnd put the words together,\nAnd learn by hook or crook." } },
      { title: "We Wear the Mask", author: "Paul Laurence Dunbar", year: "1895",
        bio: "Paul Laurence Dunbar was the first Black American poet to gain national literary fame, writing in both standard English and dialect verse.",
        context: "Published as Jim Crow laws hardened across the South following Reconstruction's collapse, one year before Plessy v. Ferguson (1896) constitutionalized 'separate but equal' segregation.",
        pages: { form: "A Rondeau · from Lyrics of Lowly Life, 1896", aboutPoem: ["The poem is a rondeau, a tightly patterned French form built on a repeating refrain, and Dunbar uses that repetition to circle back, again and again, to a single extended metaphor: the smiling mask that hides pain from a world uninterested in seeing past it.", "Written in the collective \"we,\" it describes the exhausting labor of performing cheerfulness while carrying private suffering, briefly letting the mask slip with a cry near the poem's center before it is deliberately put back in place by its final line."], historyTitle: "Paul Laurence Dunbar", historyParas: ["Paul Laurence Dunbar was born in Dayton, Ohio in 1872 to parents who had both been enslaved before the Civil War. He became the first African American poet to achieve wide national literary fame, championed early on by the influential critic William Dean Howells.", "Much of Dunbar's fame during his lifetime rested on poems written in Black dialect, which white audiences of the era often preferred, while Dunbar himself felt constrained by that expectation and also wrote extensively in standard English, as he does here.", "This poem appeared in his 1896 collection Lyrics of Lowly Life, and it's frequently cited by scholars as his finest and most enduring work — a poem that can be read as a private meditation on grief, and just as easily as a wider statement about the performance of composure demanded of Black Americans in the post-Reconstruction era.", "Dunbar died in 1906 at only thirty-three, after years of declining health, but his body of work made him one of the most widely read American poets of his generation."], sourceUrl: "https://www.poetryfoundation.org/poems/44203/we-wear-the-mask", sourceDomain: "poetryfoundation.org", excerpt: "We wear the mask that grins and lies,\nIt hides our cheeks and shades our eyes,—\nThis debt we pay to human guile;\nWith torn and bleeding hearts we smile,\nAnd mouth with myriad subtleties.\n\nWhy should the world be over-wise,\nIn counting all our tears and sighs?\nNay, let them only see us, while\n       We wear the mask.\n\nWe smile, but, O great Christ, our cries\nTo thee from tortured souls arise.\nWe sing, but oh the clay is vile\nBeneath our feet, and long the mile;\nBut let the world dream otherwise,\n       We wear the mask!" } },
    ],
    art: { title: "Under the Oaks", artist: "Edward Mitchell Bannister", year: "1876",
      style: "linear-gradient(160deg, #4a5c33 0%, #7a8f4a 40%, #b5a15f 70%, #5c4a2e 100%)",
      bio: "Edward Mitchell Bannister was a self-taught Rhode Island landscape painter and a founder of the Providence Art Club.",
      context: "This painting won a first-place medal at the 1876 Centennial Exposition in Philadelphia; when Bannister arrived to claim it, judges initially tried to withdraw the prize on learning he was Black, before fellow artists forced them to honor it.",
      medium: "Oil on canvas", dimensions: "40 × 54 in. (101.6 × 137.2 cm)", institution: "Black Art in America", link: "https://www.blackartinamerica.com/blogs/news/baia-bits-edward-mitchell-bannister", img: imgBannister,
      artPages: {
        aboutWork: ["A quiet pastoral landscape: an open meadow beneath spreading oaks, painted in warm afternoon light with the loose, tonal handling Bannister developed from the French Barbizon school. The mood is contemplative, unhurried — nothing in the picture announces the confrontation its creation caused.", "The painting won first prize at the 1876 Philadelphia Centennial Exposition, America's first World's Fair, competing against hundreds of entries by white artists. When Bannister arrived to claim his medal, Centennial officials initially refused to believe a Black man had made the winning painting and attempted to deny him the award. He was only admitted to the exhibition hall and the prize honored after fellow exhibiting artists publicly vouched for him."],
        aboutArtist: ["Edward Mitchell Bannister (1828–1901) was born in St. Andrews, New Brunswick, Canada, and moved to Boston as a young man, later settling permanently in Providence, Rhode Island.", "He was largely self-taught and became one of the leading landscape painters of New England, a founding member of the Providence Art Club, and a respected figure in Rhode Island's art community — a community that was otherwise almost entirely white.", "He later said that a derisive 1867 New York Herald article claiming that Black people could appreciate art but were incapable of producing it had been a direct motivator for his career. His Centennial prize was, for him and for Black Americans following the story, a documented public refutation of that claim."],
        contextParas: ["The 1876 Centennial Exposition celebrated the hundredth anniversary of American independence — an occasion freighted with racial irony. Legal slavery had ended only eleven years earlier, Black men had held federal office during Reconstruction, and yet the ceremony of national self-congratulation proceeded largely as a white event, in a country still enforcing segregation and political disenfranchisement across the South.", "The Compromise of 1877, reached the following year, withdrew federal troops from the South and effectively ended Reconstruction. The systematic rollback of Black voting rights, officeholding, and legal protections that followed — through violence, fraud, and law — made Bannister's recognized artistry and his moment of public dignity at the Centennial all the more exceptional."]
      } },
    timeline: [
      { year: "1865", type: "amendment", title: "13th Amendment Ratified", desc: "Abolished slavery and involuntary servitude throughout the United States, except as punishment for a crime." },
      { year: "1865-66", type: "legislation", title: "Black Codes Enacted", desc: "Southern states passed restrictive laws limiting the rights and freedoms of Black Americans, re-imposing many controls of slavery." },
      { year: "1868", type: "amendment", title: "14th Amendment Ratified", desc: "Granted citizenship to all persons born or naturalized in the U.S. and guaranteed equal protection under the law." },
      { year: "1870", type: "amendment", title: "15th Amendment Ratified", desc: "Prohibited denying the right to vote based on race, color, or previous condition of servitude." },
      { year: "1877", type: "milestone", title: "Compromise of 1877", desc: "Federal troops withdrawn from the South, ending Reconstruction and enabling the rise of Jim Crow segregation." },
      { year: "1896", type: "court", title: "Plessy v. Ferguson", desc: "Supreme Court upheld racial segregation under the \"separate but equal\" doctrine, legitimizing Jim Crow laws nationwide." },
    ],
    panelEvents: [
      { year: "1866", type: "riot", title: "Memphis Massacre", desc: "White mobs, including police, attacked Black residents of Memphis over three days, killing dozens and burning homes, schools, and churches." },
      { year: "1870", type: "milestone", title: "Hiram Revels Seated in the Senate", desc: "Revels became the first Black American to serve in the U.S. Senate, representing Mississippi." },
      { year: "1873", type: "riot", title: "Colfax Massacre", desc: "A white militia killed scores of Black men in Louisiana following a disputed election, one of the deadliest instances of Reconstruction-era violence." },
    ],
  },
  {
    name: "Harlem Renaissance", years: "1918 – 1937",
    wall: "linear-gradient(160deg, #6b2f2f, #3a1717)",
    color1: "#7a2f2f", color2: "#3f1414",
    blurb: "A flowering of Black poetry, music, and visual art centered in Harlem, driven by the Great Migration and a bold new assertion of Black cultural identity.",
    books: [
      { title: "If We Must Die", author: "Claude McKay", year: "1919",
        bio: "Claude McKay was a Jamaican-born poet and novelist whose work helped launch the Harlem Renaissance and gave voice to militant self-defense against racial violence.",
        context: "Written during the Red Summer of 1919, a wave of white supremacist mob violence against Black communities in over three dozen U.S. cities, following Black veterans' return from World War I demanding full citizenship.",
        pages: { form: "A Sonnet · from The Liberator, July 1919", aboutPoem: ["This is a fourteen-line sonnet, written in the traditional English form McKay favored throughout his career, even as its subject was anything but traditional. It takes the shape of a rallying address to \"kinsmen,\" urging collective courage in the face of mob violence rather than passive submission to it.", "The poem never names a specific city, victim, or riot. That refusal of detail is part of its power: stripped of a single setting, the sonnet's imagery of the hunted turning to face the hunter has been read and re-read for over a century as a general call to dignity under attack, far outliving the summer that produced it."], historyTitle: "Claude McKay & the Red Summer", historyParas: ["Claude McKay was born in Jamaica in 1889 and moved to the United States in 1912, eventually settling in New York City and working a string of jobs, including as a railway dining-car waiter, while he wrote.", "He composed this sonnet during the summer of 1919, a period later named \"Red Summer\" by the writer James Weldon Johnson, in which white mobs carried out coordinated attacks on Black communities in more than two dozen American cities, in the aftermath of the First World War.", "The poem first appeared in the July 1919 issue of The Liberator, a socialist magazine edited by Max Eastman, and was reprinted within months in other Black-owned publications because of how widely it resonated. It was later collected in McKay's 1922 volume Harlem Shadows, a book many historians consider one of the opening works of the Harlem Renaissance.", "The poem's reach did not stop there: it has since been read into the U.S. Congressional Record and quoted by public figures far removed from its original context, a testament to how a poem written for one terrible season became a language for many others."], sourceUrl: "https://www.poetryfoundation.org/poems/44694/if-we-must-die", sourceDomain: "poetryfoundation.org", excerpt: "If we must die, let it not be like hogs\nHunted and penned in an inglorious spot,\nWhile round us bark the mad and hungry dogs,\nMaking their mock at our accursèd lot.\nIf we must die, O let us nobly die,\nSo that our precious blood may not be shed\nIn vain; then even the monsters we defy\nShall be constrained to honor us though dead!\n\nO kinsmen! we must meet the common foe!\nThough far outnumbered let us show us brave,\nAnd for their thousand blows deal one deathblow!\nWhat though before us lies the open grave?\nLike men we'll face the murderous, cowardly pack,\nPressed to the wall, dying, but fighting back!" } },
      { title: "The Weary Blues", author: "Langston Hughes", year: "1926",
        bio: "Langston Hughes was a central figure of the Harlem Renaissance whose poetry fused jazz and blues rhythms with everyday Black life and speech.",
        context: "Published as the Great Migration reshaped Northern cities and Harlem became a hub of Black artistic and intellectual life, with the NAACP and Urban League backing new Black literary magazines and prizes.",
        pages: { form: "A Poem · from Opportunity magazine, 1925", aboutPoem: ["The poem is set in a Harlem bar on Lenox Avenue, where a first-person speaker listens through the night to a piano player working through a slow, sorrowful tune. Hughes lets the reader hear the musician's own sung lines rise up inside the poem, so that the blues form itself becomes part of the poem's structure rather than just its subject.", "It's often credited as one of the first poems to translate the repeating, call-and-response pattern of twelve-bar blues directly into English verse — a technique that helped establish blues poetry as its own literary tradition, and one Hughes returned to throughout his career."], historyTitle: "Langston Hughes & the Harlem Renaissance", historyParas: ["Langston Hughes wrote this poem in 1925, during the years he lived in Washington, D.C. and then Harlem, immersing himself in the city's jazz clubs and nightlife.", "It was first published in Opportunity, the magazine of the National Urban League, where it won first prize in the magazine's inaugural poetry contest that May — a contest dinner that also introduced Hughes to the writer and patron Carl Van Vechten, who helped arrange a publishing deal with Alfred A. Knopf.", "The poem gave its title to Hughes's first book, published the following year, which alongside Alain Locke's anthology The New Negro is considered one of the defining literary debuts of the Harlem Renaissance — the flowering of Black art, music, and literature centered in 1920s Harlem.", "Hughes would go on to become one of the most influential American poets of the twentieth century, prized for grounding his work in the everyday rhythms, voices, and music of Black life rather than imitating European poetic tradition."], sourceUrl: "https://www.poetryfoundation.org/poems/47347/the-weary-blues", sourceDomain: "poetryfoundation.org", excerpt: "Droning a drowsy syncopated tune,\nRocking back and forth to a mellow croon,\n     I heard a Negro play.\nDown on Lenox Avenue the other night\nBy the pale dull pallor of an old gas light\n     He did a lazy sway . . .\n     He did a lazy sway . . .\nTo the tune o' those Weary Blues.\nWith his ebony hands on each ivory key\nHe made that poor piano moan with melody.\n     O Blues!\nSwaying to and fro on his rickety stool\nHe played that sad raggy tune like a musical fool.\n     Sweet Blues!\nComing from a black man's soul.\n     O Blues!" } },
    ],
    art: { title: "Aspects of Negro Life", artist: "Aaron Douglas", year: "1934",
      style: "linear-gradient(160deg, #2e2a4a 0%, #5a4a8c 30%, #b56a3a 60%, #2e1c14 100%)",
      bio: "Aaron Douglas was known as the 'father of Black American art,' developing a signature style of silhouetted figures and geometric color that defined the visual language of the Harlem Renaissance.",
      context: "Painted as a WPA-funded mural for the New York Public Library's Harlem branch during the Great Depression, tracing Black history from Africa through slavery to the urban North.",
      medium: "Oil on canvas (mural cycle, 4 panels)", dimensions: "Each panel approx. 60 × 139 in. (152.4 × 353 cm)", institution: "NYPL Digital Collections", link: "https://digitalcollections.nypl.org/items/242f84e0-c6f4-012f-6fee-58d385a7bc34?canvasIndex=0", img: imgDouglas,
      artPages: {
        aboutWork: ["\"Aspects of Negro Life\" is a cycle of four large murals commissioned for the 135th Street branch of the New York Public Library in Harlem. The panels trace a sweeping arc of Black American history: Africa before the slave trade, the Middle Passage and emancipation, the Great Migration north, and the ongoing struggle for rights and dignity in an urban America that had not made good on its promises.", "Douglas's signature style defines the work: silhouetted Black figures layered over concentric rings of color — violet, gold, green — with shafts of light cutting through crowd scenes that feel simultaneously ancient and urgently modern. The influence of African visual traditions and Art Deco geometry gives the Renaissance a graphic language that was immediately recognizable and widely imitated across the following decade."],
        aboutArtist: ["Aaron Douglas (1899–1979) was born in Topeka, Kansas, trained at the University of Nebraska, and moved to Harlem in 1925 at the direct invitation of the philosopher Alain Locke, who was then assembling contributors for The New Negro — the anthology that defined the Harlem Renaissance in print.", "Douglas became the visual voice of the movement, illustrating covers for The Crisis and Opportunity magazines and working with writers including Langston Hughes and Countee Cullen. His work was the first to synthesize African visual forms with American modernism in a way that felt neither derivative nor exoticized.", "After the Harlem years he taught at Fisk University in Nashville for over thirty years, shaping generations of Black artists who passed through its art department. He is widely credited as the founding figure of a distinctly African American visual modernism."],
        contextParas: ["The murals were completed in 1934, during the Great Depression, funded through the Public Works of Art Project — a New Deal predecessor to the Works Progress Administration that paid artists to create public work during mass unemployment.", "The 135th Street library branch had become the intellectual center of Black Harlem. Its collection of African and African American history and culture, assembled by the Puerto Rican–born scholar Arturo Schomburg, drew researchers from across the diaspora and made it a place where Black history was treated as a serious scholarly subject at a time when white academic institutions largely ignored it.", "The New Deal programs that funded this work were simultaneously a form of relief and a vehicle of racial discrimination: the federal agencies administering them frequently excluded Black workers or paid them at lower rates, and segregated housing programs built specifically for white families. Douglas's murals were installed in a building serving a community that the government was, at the same moment, both funding and excluding."]
      } },
    timeline: [
      { year: "1909", type: "organization", title: "NAACP Founded", desc: "The National Association for the Advancement of Colored People formed to fight for civil rights through legal action and advocacy." },
      { year: "1910s-30s", type: "milestone", title: "The Great Migration", desc: "Millions of Black Americans moved from the rural South to cities in the North, Midwest, and West seeking work and escape from segregation." },
      { year: "1919", type: "riot", title: "Red Summer", desc: "A wave of white-led racial violence and massacres swept dozens of American cities during the summer and fall." },
      { year: "1921", type: "riot", title: "Tulsa Race Massacre", desc: "A white mob destroyed the prosperous Greenwood District (\"Black Wall Street\") in Tulsa, Oklahoma, killing an estimated hundreds of residents." },
      { year: "1931", type: "court", title: "Scottsboro Boys Case", desc: "Nine Black teenagers were falsely accused of assault in Alabama; the case became a landmark fight against racial injustice in the courts." },
    ],
    panelEvents: [
      { year: "1917", type: "riot", title: "East St. Louis Riots", desc: "White mobs attacked Black residents amid labor tensions and wartime migration, killing dozens and displacing thousands from their homes." },
      { year: "1923", type: "riot", title: "Rosewood Massacre", desc: "A white mob destroyed the predominantly Black town of Rosewood, Florida, killing residents and erasing the community entirely." },
      { year: "1926", type: "organization", title: "Negro History Week Founded", desc: "Historian Carter G. Woodson established an annual observance to promote the study of Black history, later expanded into Black History Month." },
    ],
  },
  {
    name: "Civil Rights & Black Power", years: "1954 – 1975",
    wall: "linear-gradient(160deg, #1f4a3a, #10251c)",
    color1: "#1f4a3a", color2: "#0f2318",
    blurb: "Verse written amid mass mobilization for legal equality, and later, a more militant call for Black self-determination and cultural pride.",
    books: [
      { title: "Ballad of Birmingham", author: "Dudley Randall", year: "1965",
        bio: "Dudley Randall was a poet and founder of Broadside Press, which published many major Black poets of the civil rights era.",
        context: "Written in response to the 1963 bombing of the 16th Street Baptist Church in Birmingham, which killed four Black girls, an event that galvanized support for the Civil Rights Act of 1964.",
        pages: { form: "A Ballad · Broadside Press, 1965", aboutPoem: ["Randall builds the poem as a ballad — simple rhymed quatrains, the same form long used to carry folk stories aloud from one generation to the next — shaped as a dialogue between a mother and her young daughter, who asks to leave her play and join a civil rights march downtown.", "He wrote it in direct response to the September 1963 bombing of the Sixteenth Street Baptist Church in Birmingham, Alabama, which killed four young Black girls. Without naming the church or the bombing directly until the poem's final turn, Randall lets the plain, steady rhythm of the ballad form carry a devastating irony: a decision made to protect a child instead leads her into danger."], historyTitle: "Dudley Randall & the Birmingham Bombing", historyParas: ["On September 15, 1963, a bomb planted by white supremacists exploded at the Sixteenth Street Baptist Church in Birmingham, Alabama, killing four girls — Addie Mae Collins, Denise McNair, Carole Robertson, and Cynthia Wesley — as they prepared for Sunday service. The bombing came amid dozens of unsolved racially motivated bombings in the city, which had earned the grim nickname \"Bombingham.\"", "Dudley Randall, a poet and librarian in Detroit, published this poem as a broadside — a single large printed sheet, historically used to circulate news, ballads, and protest verse quickly and cheaply — in 1965. It was the very first title released by Broadside Press, the publishing house Randall founded that same year.", "Broadside Press went on to become one of the most influential publishers of Black poetry in the country, giving early platforms to many poets associated with the Black Arts Movement. Randall later collected this poem in his own anthology, The Black Poets, and it remains one of the most widely taught poems about the civil rights era."], sourceUrl: "https://www.poetryfoundation.org/poems/46562/ballad-of-birmingham", sourceDomain: "poetryfoundation.org", excerpt: "\"Mother dear, may I go downtown\nInstead of out to play,\nAnd march the streets of Birmingham\nIn a Freedom March today?\"\n\n\"No, baby, no, you may not go,\nFor the dogs are fierce and wild,\nAnd clubs and hoses, guns and jails\nAren't good for a little child.\"\n\n\"But, mother, I won't be alone.\nOther children will go with me,\nAnd march the streets of Birmingham\nTo make our country free.\"\n\n\"No, baby, no, you may not go,\nFor I fear those guns will fire.\nBut you may go to church instead\nAnd sing in the children's choir.\"" } },
      { title: "Black Art", author: "Amiri Baraka", year: "1966",
        bio: "Amiri Baraka (formerly LeRoi Jones) was a poet and playwright who founded the Black Arts Movement, calling for art that directly served Black political liberation.",
        context: "Published the year after the Watts uprising of 1965 and amid the rise of the Black Power movement and the founding of the Black Panther Party in 1966.",
        pages: { form: "A Manifesto in Verse · Liberator magazine, January 1966", aboutPoem: ["Written in urgent free verse with no fixed meter or rhyme, the poem argues that art should act as a direct instrument of Black political power rather than something polite or decorative. Baraka repeatedly imagines poems as physical weapons, capable of confronting oppression the way a fist or a gun might, and closes by calling for a poetry, and a world, entirely made and spoken by Black people.", "Its confrontational language and imagery made it controversial from the start, and it has been debated by critics and scholars ever since — but its influence on a generation of writers who followed is not in dispute."], historyTitle: "Amiri Baraka & the Black Arts Movement", historyParas: ["Amiri Baraka, writing at the time under his birth name LeRoi Jones, composed this poem in 1965, in the weeks after the assassination of Malcolm X, a loss that pushed Baraka toward a more radical political and artistic path. He soon moved to Harlem and founded the Black Arts Repertory Theatre/School.", "The poem was first performed publicly on the jazz drummer Sonny Murray's 1965 album Sonny's Time Now, before appearing in print in the January 1966 issue of Liberator magazine. It quickly became the de facto manifesto of the Black Arts Movement, the artistic wing of the broader Black Power movement, inspiring a generation of poets including Nikki Giovanni and Sonia Sanchez.", "Baraka remained a prominent, often polarizing figure in American letters for decades afterward, serving briefly as New Jersey's poet laureate before the position was eliminated by the state legislature in 2003 amid controversy over a later poem. He died in 2014, widely recognized as the central architect of the Black Arts Movement."], sourceUrl: "https://poemanalysis.com/amiri-baraka/black-art/", sourceDomain: "poemanalysis.com", excerpt: "Poems are bullshit unless they are\nteeth or trees or lemons piled\non a step. Or black fists.\n\nWe want poems\nthat kill.\nAssassin poems, Poems that shoot\nguns. Poems that wrestle cops into alleys\nand take their weapons leaving them dead\n\nWe want a black poem. And a\nBlack World.\nLet the world be a Black Poem\nAnd Let All Black People Speak This Poem\nSilently\nor LOUD" } },
    ],
    art: { title: "American People Series #20: Die", artist: "Faith Ringgold", year: "1967",
      style: "linear-gradient(160deg, #8c1c1c 0%, #4a1414 40%, #d9c67a 65%, #1a1a1a 100%)",
      bio: "Faith Ringgold is a painter and quilt artist whose work confronts race and gender in American life; she later became known for her narrative story quilts.",
      context: "Painted during the 1967 uprisings in Newark and Detroit, sparked by police violence and economic inequality; Ringgold depicted graphic interracial violence to force viewers to confront the era's racial unrest directly.",
      medium: "Oil on canvas", dimensions: "72 × 144 in. (182.9 × 365.8 cm)", institution: "Museum of Modern Art (MoMA), New York", link: "https://www.moma.org/collection/works/199915", img: imgRinggold,
      artPages: {
        aboutWork: ["\"Die\" is the twentieth and final painting in Ringgold's American People Series (1963–1967), and its most confrontational. The canvas shows a violent street scene: Black and white figures — men, women, children — caught in a melee, bleeding, fleeing, falling. A small child crawls through the legs of fighting adults who don't see her.", "Ringgold modeled the composition deliberately on Picasso's Guernica — borrowing its panoramic scale, its monumental horror, and its insistence that this violence deserves to be seen as a historical catastrophe rather than a local incident. The implicit argument: American racial violence warranted the same gravity that European modernism had extended to the Spanish Civil War. MoMA, which owns Guernica's study materials, did not acquire \"Die\" until 2005, nearly forty years after it was painted."],
        aboutArtist: ["Faith Ringgold (1930–2024) grew up in Harlem and studied at the City College of New York, where she was initially directed away from the fine arts program. She became a painter, sculptor, performance artist, and writer whose work across six decades consistently refused to separate aesthetic ambition from political necessity.", "She was also a prominent activist in the art world itself: she organized campaigns against the exclusion of Black and women artists from major New York museum exhibitions in the late 1960s and early 1970s, targeting the Whitney Museum and the Museum of Modern Art directly.", "She is perhaps best known today for her narrative story quilts — particularly Tar Beach (1988) — which combined painting, quilted fabric borders, and written narrative to tell stories that moved between autobiography, myth, and history. She published more than twenty children's books, many based on the quilts."],
        contextParas: ["\"Die\" was completed in 1967, the year of the Newark and Detroit uprisings — the largest urban rebellions in American history since the Civil War — triggered by decades of police brutality, residential segregation, and the systematic economic exclusion of Black city residents.", "The Kerner Commission, appointed by President Lyndon Johnson to investigate the uprisings, delivered its report the following year. Its central conclusion — that \"white racism\" was the primary cause, not Black militancy — was largely ignored by the administration that commissioned it. Johnson declined to present the report publicly.", "Ringgold's decision to depict the violence as shared — white and Black bodies equally caught, equally brutal — was a provocation aimed at viewers who preferred to understand racial conflict as something done to Black people, not a structure that damaged everyone inside it."]
      } },
    timeline: [
      { year: "1954", type: "court", title: "Brown v. Board of Education", desc: "Supreme Court unanimously ruled that racial segregation in public schools was unconstitutional, overturning Plessy v. Ferguson." },
      { year: "1955-56", type: "protest", title: "Montgomery Bus Boycott", desc: "A 381-day boycott sparked by Rosa Parks' arrest led to the desegregation of Montgomery's public buses." },
      { year: "1963", type: "protest", title: "March on Washington", desc: "Over 250,000 people gathered in Washington, D.C., where Dr. Martin Luther King Jr. delivered his \"I Have a Dream\" speech." },
      { year: "1964", type: "legislation", title: "Civil Rights Act of 1964", desc: "Outlawed discrimination based on race, color, religion, sex, or national origin in employment and public accommodations." },
      { year: "1965", type: "legislation", title: "Voting Rights Act of 1965", desc: "Prohibited racial discrimination in voting, banning literacy tests and providing federal oversight of elections in discriminatory jurisdictions." },
      { year: "1966", type: "organization", title: "Black Panther Party Founded", desc: "Formed in Oakland to address police brutality and promote Black self-determination through community programs and activism." },
      { year: "1968", type: "milestone", title: "Assassination of Dr. King", desc: "Martin Luther King Jr. was assassinated in Memphis, Tennessee, sparking uprisings in over 100 cities." },
    ],
    panelEvents: [
      { year: "1961", type: "protest", title: "Freedom Rides", desc: "Activists rode interstate buses into the segregated South to test enforcement of desegregation rulings, facing mob violence and arrests." },
      { year: "1963", type: "riot", title: "16th Street Baptist Church Bombing", desc: "A Ku Klux Klan bombing in Birmingham killed four Black girls, becoming a galvanizing tragedy for the movement." },
      { year: "1967", type: "court", title: "Loving v. Virginia", desc: "The Supreme Court struck down state laws banning interracial marriage as unconstitutional." },
      { year: "1968", type: "milestone", title: "Kerner Commission Report", desc: "A federal commission concluded that white racism, not Black militancy, was the primary cause of the era's urban uprisings." },
    ],
  },
  {
    name: "Post–Civil Rights Era", years: "1976 – 2012",
    wall: "linear-gradient(160deg, #3a2f5c, #1e1830)",
    color1: "#3a2f5c", color2: "#1c1730",
    blurb: "Verse reckoning with slavery's long memory and Black life after legal segregation ended, even as structural inequality persisted.",
    books: [
      { title: "Won't You Celebrate with Me", author: "Lucille Clifton", year: "1993",
        bio: "Lucille Clifton was a poet and educator whose spare, powerful verse centered Black womanhood, survival, and self-invention.",
        context: "Published during a period of rising mass incarceration under early-1990s crime policy, as Black feminist and womanist thought shaped a new generation of poets.",
        pages: {
          form: "A single-stanza lyric of fourteen lines in free verse, stripped of most punctuation and using compressed, fragmented syntax. The poem unfolds as a direct question and then an answer — a self-addressed invitation that doubles as a declaration of survival.",
          aboutPoem: [
            "The poem opens mid-thought — \"won't you celebrate with me\" — as if the speaker has been talking to herself for years and is only now letting the reader in. What she is asking to celebrate is not a conventional triumph but the fact of her continued existence: she was born into a world that, as she puts it, had \"no model\" for what she would become. Neither the world of Black women nor the world of white women offered her a template; she had to make herself \"from scratch.\" The poem's central claim is that this self-making, repeated every day against violence and erasure, is an act worth marking.",
            "Clifton deploys an almost entirely unpunctuated sentence structure that mirrors the breathlessness of survival: no pauses, no decorative stops, just the bare fact of being alive. The final lines — \"come celebrate / with me that everyday / something has tried to kill me / and has failed\" — are among the most quietly devastating in American poetry, transforming ordinary endurance into a political and spiritual act. The poem does not ask for sympathy; it asks for witnesses.",
          ],
          historyTitle: "Black Feminist Verse and the Culture Wars of the 1990s",
          historyParas: [
            "The poem was published in Clifton's 1993 collection The Book of Light, during a decade defined by simultaneous cultural backlash and cultural flowering. The 1980s and early 1990s had seen the systematic expansion of mass incarceration under federal drug policy, with mandatory minimum sentencing falling disproportionately on Black communities. The 1994 Crime Bill, signed the year after the poem's publication, would accelerate this by another order of magnitude.",
            "At the same time, Black feminist and womanist literary theory — built by scholars like bell hooks, Patricia Hill Collins, and Audre Lorde — was reshaping how Black women's literature was read and taught. The Combahee River Collective's statement from 1977 had made explicit the argument that Black women's liberation required confronting race, gender, and class simultaneously; by the 1990s this framework had moved into the academy and into the poetry world.",
            "Clifton wrote from and for a tradition that had been doubly marginalized — by race within mainstream feminist circles, and by gender within mainstream Black literary circles. Her insistence on celebrating survival rather than performing it as tragedy was itself a political stance: a refusal of the literary world's appetite for Black suffering presented in ways legible and comfortable to white audiences.",
          ],
          sourceUrl: "https://www.poetryfoundation.org/poems/50974/wont-you-celebrate-with-me",
          sourceDomain: "poetryfoundation.org",
          excerpt: "won't you celebrate with me\nwhat i have shaped into\na kind of life? i had no model.\nborn in babylon\nboth nonwhite and woman\nwhat did i see to be except myself?\ni made it up\nhere on this bridge between\nstarshine and clay,\nmy one hand holding tight\nmy other hand; come celebrate\nwith me that everyday\nsomething has tried to kill me\nand has failed.",
        },
      },
      { title: "Still I Rise", author: "Maya Angelou", year: "1978",
        bio: "Maya Angelou was a poet, memoirist, and civil rights activist who worked with both Martin Luther King Jr. and Malcolm X before becoming one of America's most celebrated writers.",
        context: "Published as affirmative action policies faced early legal challenges, foreshadowing the 1978 Supreme Court case Regents of the University of California v. Bakke.",
        pages: {
          form: "Nine stanzas of varying length using an ABCB rhyme scheme, anaphora, and escalating repetition. The refrain \"I rise\" / \"I'll rise\" — repeated eleven times — functions as both lyric chorus and political chant, building toward collective rather than individual triumph.",
          aboutPoem: [
            "The poem is addressed directly to an unnamed \"you\" — a figure who represents historical and ongoing oppression — and its entire structure is organized around refusal. The speaker catalogs the tactics of her oppressors (bitterness, shooting, cutting, lies, cruelty) and then meets each one with the same reply: she rises anyway. The poem draws on the full weight of slavery's history — \"I am the dream and the hope of the slave\" — making the speaker's survival not personal but ancestral, a continuation of every act of resistance that preceded it.",
            "Angelou builds the poem through accumulation and rhythm, piling simile on simile — \"Just like moons and like suns, / With the certainty of tides\" — until the rising feels not like defiance but like natural law. The shift from first-person singular to implied first-person plural in the final stanzas transforms what began as one woman's declaration into a statement on behalf of a people. By the time the poem reaches its final repetitions, \"I rise\" has become \"we rise\" without ever changing the pronoun.",
          ],
          historyTitle: "Black Womanhood in the Post–Civil Rights Decade",
          historyParas: [
            "\"Still I Rise\" was published in Angelou's 1978 collection And Still I Rise, three years after the formal end of the Vietnam War and in the same year as the Supreme Court's Regents of the University of California v. Bakke decision, which began a decades-long legal contest over affirmative action. The poem appeared at a moment when the civil rights movement's legislative victories — the Civil Rights Act of 1964, the Voting Rights Act of 1965 — had been secured but the structural conditions those laws addressed had proved far more durable than the laws themselves.",
            "Angelou had been a central figure in the civil rights movement: she worked directly with both Martin Luther King Jr. and Malcolm X in the 1960s, and her 1969 memoir I Know Why the Caged Bird Sings had established her as a major literary voice. By the late 1970s she was navigating a cultural moment in which Black women's writing was simultaneously gaining unprecedented mainstream recognition and being enrolled in debates — about respectability, about feminism, about whose story counted as American — that she had not chosen to enter.",
            "The poem's imagery of rising from the degradation of the historical slave trade — \"out of the huts of history's shame / I rise\" — situates the speaker's personal triumph inside a multigenerational story of endurance and refusal. This was not incidental for Angelou; she has spoken about the poem as a deliberate act of ancestral honoring, a way of insisting that the persistence of Black women across American history was not merely a fact of survival but a form of ongoing defiance.",
          ],
          sourceUrl: "https://www.poetryfoundation.org/poems/46446/still-i-rise",
          sourceDomain: "poetryfoundation.org",
          excerpt: "You may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I'll rise.\n\nDoes my sassiness upset you?\nWhy are you beset with gloom?\n'Cause I walk like I've got oil wells\nPumping in my living room.\n\nJust like moons and like suns,\nWith the certainty of tides,\nJust like hopes springing high,\nStill I'll rise.\n\nDid you want to see me broken?\nBowed head and lowered eyes?\nShoulders falling down like teardrops,\nWeakened by my soulful cries?",
        },
      },
    ],
    art: { title: "Untitled", artist: "Jean-Michel Basquiat", year: "1982",
      style: "linear-gradient(160deg, #d9c67a 0%, #2a2a2a 35%, #8c1c1c 65%, #1a1a1a 100%)",
      bio: "Jean-Michel Basquiat rose from New York's downtown street art scene to become one of the era's most celebrated painters, fusing text, symbols, and raw figuration.",
      context: "Painted at the height of Basquiat's career, as Black artists gained new visibility in a gallery system that had long excluded them, while cities like New York faced disinvestment and rising inequality in Black neighborhoods.",
      medium: "Acrylic and oil paintstick on canvas", dimensions: "68⅛ × 60¼ in. (173 × 153 cm)", institution: "Sotheby's New York, 2017", link: "https://www.sothebys.com/en/auctions/ecatalogue/2017/contemporary-art-evening-auction-n09761/lot.24.html?locale=en", img: imgBasquiat,
      artPages: {
        aboutWork: ["The 1982 skull paintings are among Basquiat's most recognized works: a monumental skull rendered in fierce, rapid strokes — exposed teeth, scrawled text, crude cross-hatching — against a luminous yellow or orange ground. The skull is simultaneously a self-portrait, a medical diagram, an African mask, and a tag-based glyph, collapsing the boundaries between fine art, street writing, and anthropological specimen.", "The works meditate on Black mortality with a directness that made the art market uncomfortable even as it paid extraordinary prices for them. Basquiat was keenly aware of the contradiction: the same institutions that had always treated Black bodies as objects to be catalogued and consumed were now cataloguing and consuming his paintings about exactly that history. This particular untitled skull sold at Sotheby's in May 2017 for $110.5 million — then the highest auction price ever achieved for an American artist."],
        aboutArtist: ["Jean-Michel Basquiat (1960–1988) was born in Brooklyn to a Haitian father and a Puerto Rican mother. He dropped out of school at seventeen and began his career tagging walls across lower Manhattan under the name SAMO© — a commentary on the art world's absorption of anything it deemed \"authentic\" from Black and brown communities.", "He broke into the gallery circuit in the early 1980s and became the first Black artist to achieve superstardom in the contemporary art world, exhibiting internationally and collaborating with Andy Warhol. He spoke openly about the racism embedded in the attention paid to him, describing the experience of being simultaneously celebrated and treated as an exotic spectacle.", "He died of a heroin overdose in 1988 at twenty-seven — an art world prince whose career lasted roughly six years and produced a body of work that has only grown in cultural and financial value in the decades since."],
        contextParas: ["1982 was the peak year of Basquiat's output and the moment of his commercial breakthrough. New York City at the time was being defined by the crack epidemic, the AIDS crisis, and the Reagan administration's systematic withdrawal of federal investment from cities and public health — all of which fell hardest on Black and Latino communities in neighborhoods like the South Bronx and Harlem.", "The art world that was making Basquiat famous existed in explicit tension with this: the same decade that produced record auction prices and the international expansion of the contemporary art market was gutting the social infrastructure of the communities that had produced the street art culture from which he emerged.", "Basquiat worked with a speed and intensity that may partly reflect his awareness of how brief the art world's tolerance for Black artists at the center of its attention tended to be. His diaries and interviews from this period suggest a man who understood his position clearly and was painting as fast as he could."]
      } },
    timeline: [
      { year: "1978", type: "court", title: "Regents of UC v. Bakke", desc: "Supreme Court upheld affirmative action in principle but ruled rigid racial quotas in admissions unconstitutional." },
      { year: "1980s", type: "legislation", title: "War on Drugs Escalates", desc: "Federal and state policy expanded mandatory minimum sentencing, contributing to a sharp rise in Black incarceration rates." },
      { year: "1992", type: "riot", title: "Los Angeles Uprising", desc: "Widespread unrest followed the acquittal of officers filmed beating Rodney King, exposing tensions over police violence." },
      { year: "1995", type: "protest", title: "Million Man March", desc: "Hundreds of thousands of Black men gathered in Washington, D.C. to promote unity, family values, and civic responsibility." },
      { year: "2008", type: "milestone", title: "Election of Barack Obama", desc: "Barack Obama was elected the first Black President of the United States." },
    ],
    panelEvents: [
      { year: "1986", type: "legislation", title: "Anti-Drug Abuse Act", desc: "Established a 100-to-1 sentencing disparity between crack and powder cocaine offenses, driving disproportionate incarceration of Black defendants." },
      { year: "1991", type: "milestone", title: "Rodney King Beating", desc: "The videotaped beating of Rodney King by Los Angeles police officers became a national symbol of police brutality against Black Americans." },
      { year: "1994", type: "legislation", title: "1994 Crime Bill", desc: "The Violent Crime Control and Law Enforcement Act expanded policing and prison funding, accelerating mass incarceration trends." },
    ],
  },
  {
    name: "Black Lives Matter Era", years: "2013 – Present",
    wall: "linear-gradient(160deg, #8c1c1c, #451111)",
    color1: "#8c1c1c", color2: "#420f0f",
    blurb: "Verse and art responding to a new wave of activism against police violence and mass incarceration, amplified by social media and youth organizing.",
    books: [
      { title: "Citizen: An American Lyric", author: "Claudia Rankine", year: "2014",
        bio: "Claudia Rankine is a poet whose genre-blending work combines lyric poetry, essay, and image to examine everyday and systemic racism.",
        context: "Published the same year as the police killing of Michael Brown in Ferguson, Missouri, and the resulting protests; the Black Lives Matter movement, founded in 2013 after George Zimmerman's acquittal in the killing of Trayvon Martin, was gaining national force.",
        pages: {
          form: "A genre-blending hybrid of prose poetry, lyric essay, image-text, and script, organized into seven chapters. The book's signature move is second-person address: \"you\" are placed into the body of a Black person experiencing microaggressions, making the reader inhabit the experience rather than observe it from a safe analytical distance.",
          aboutPoem: [
            "Citizen does not proceed like a conventional poetry collection. Its chapters alternate between prose-poem accounts of specific incidents — a white woman casually using a racial slur to a colleague, a therapist who mistakes her Black patient for someone else — and lyric meditations on the language used to describe Black athletes under pressure. Rankine draws on a wide documentary archive: Serena Williams's treatment by tennis officials and the press, Zinedine Zidane's headbutt at the 2006 World Cup, the deaths of Mark Duggan and Trayvon Martin. The book refuses to separate the intimate microaggression from the publicly visible act of state violence.",
            "The second-person address is Rankine's central formal innovation. By writing \"you\" instead of \"I,\" she strips away the buffer of literary distance that allows a reader to receive an account of racial harm as something that happened to someone else in some other time. The \"you\" is both the author and the reader — and the reader's discomfort at occupying that position is itself part of the poem's argument. Citizen asks what it costs to move through the world in a Black body, and it refuses to let the answer stay abstract.",
          ],
          historyTitle: "Ferguson, Black Lives Matter, and the Poetics of Racial Grief",
          historyParas: [
            "Citizen was published in October 2014, two months after the killing of Michael Brown by Ferguson police officer Darren Wilson and the weeks of protest that followed. The book had been written over several years before its publication, but it arrived in a moment that made its documentation of racial harm feel simultaneously retrospective and urgently contemporary. It became one of the rare poetry collections to appear on the New York Times bestseller list.",
            "The Black Lives Matter movement had been founded the previous year by Alicia Garza, Patrisse Cullors, and Opal Tometi, following the acquittal of George Zimmerman in the shooting death of Trayvon Martin. By late 2014 it had grown from a hashtag into a decentralized national organizing network. Rankine's book gave that movement a literary companion: a sustained, formally rigorous account of the cumulative weight of everyday racial violence alongside the spectacular violence covered by cameras.",
            "Rankine has described the book as a document of a specific historical moment in which the gap between what could be said publicly about race and what was actually experienced privately by Black Americans had become unbearable. The choice to use images — photographs, video stills, artworks — alongside the text was deliberate: she wanted to make the book resist easy consumption, to require that the reader slow down in the presence of evidence rather than reading past it.",
          ],
          sourceUrl: "https://jm919846758.wordpress.com/wp-content/uploads/2023/01/caal.pdf",
          sourceDomain: "wordpress.com",
          excerpt: "Because white men can't\npolice their imagination\nblack men are dying\n\n     *\n\nHere, am I, as I am, I,\nI, the man who can't—\nwho can't be\nhere—\n\n     *\n\nSome years there exists a wanting to escape—\nyou yield to it or you don't.",
        },
      },
      { title: "The Tradition", author: "Jericho Brown", year: "2019",
        bio: "Jericho Brown is a poet whose work explores Black identity, masculinity, and violence, and who invented the 'duplex' poetic form.",
        context: "Published amid continued national reckoning over police killings and the expansion of Black Lives Matter chapters nationwide, ahead of the 2020 protests following George Floyd's murder.",
        pages: {
          form: "A duplex — a form Brown invented that splices the ghazal, the sonnet, and the blues. The poem runs fourteen lines in seven couplets; the second line of each couplet is repeated, with variation, as the first line of the next, creating a chain of return and transformation. The form enacts the poem's subject: a tradition of loss that keeps coming back.",
          aboutPoem: [
            "\"The Tradition\" opens with flowers —\"Aster. Nasturtium. Delphinium.\" — and the beauty is immediately placed in the same breath as violence. Brown lists blooms and then lists names: Emmett Till, Eric Garner, Sandra Bland. The poem's subject is the tradition of Black death in America, which it refuses to distinguish from other traditions — of gardening, of naming, of making beautiful things. The formal repetition of the duplex forces the reader to encounter each line twice, in slightly altered form, so that every death the poem names is encountered again in a new context, accumulating rather than resolving.",
            "The poem never raises its voice. Brown's tone throughout is close to elegy but not quite — there is too much anger compressed into the formal constraint for it to be purely mournful, and too much love for the people named for it to be only rage. The duplex's circular structure makes escape impossible; the poem keeps returning to where it started, which is also where America keeps returning: to the same names, the same stories, the same failures to reckon with them. The final couplet closes without resolution, which is the point.",
          ],
          historyTitle: "Black Death as Tradition: Policing and Protest in the 2010s",
          historyParas: [
            "The Tradition won the Pulitzer Prize for Poetry in 2020, the same year George Floyd was killed by Minneapolis police officer Derek Chauvin and the largest protest movement in American history erupted across the country. But Brown wrote the collection across the preceding years, as the public record of killings of unarmed Black Americans — Walter Scott, Philando Castile, Alton Sterling, Tamir Rice — accumulated into something that felt not like a series of incidents but like a systemic pattern made newly visible by cell phone video.",
            "Brown has described the duplex as a form designed to hold contradiction: it repeats but never exactly, transforming what it carries even as it refuses to let go of it. This mirrored the experience he was trying to write about — the way the tradition of anti-Black violence in America keeps returning, with just enough variation to seem like a new event rather than a continuation of an old one. The formal innovation was inseparable from the political argument.",
            "The collection was published under the Trump administration, during a period when federal civil rights enforcement had contracted sharply and explicit expressions of white nationalism had gained new public visibility. Brown, who is gay and Black and from the South, was writing at the intersection of multiple traditions of silence and erasure. The title poem's refusal to separate horticultural beauty from racial death was a deliberate act: it insisted that these things had always coexisted in American life, and that the literary tradition of treating them as separate was itself a form of evasion.",
          ],
          sourceUrl: "https://www.poetryfoundation.org/poems/1586489/the-tradition",
          sourceDomain: "poetryfoundation.org",
          excerpt: "Aster. Nasturtium. Delphinium. We thought\nFingers in the tray of ice, in the grass, in our hair.\nWe thought nothing of what flowers do when petals\n\nFall, not the ache of soil—only the small heat\nOf a body that's been touched. We thought\nWhat if we were wrong about flowers?\n\nMy grandmother cut them. She put them\nIn a vase. She watered the vase. She said\nThey'd last a week. She was right.\n\nWhat are you going to do when someone\nMeans to do you harm?\nAster. Nasturtium. Delphinium.",
        },
      },
    ],
    art: { title: "Analogous Colors", artist: "Titus Kaphar", year: "2020",
      style: "linear-gradient(160deg, #1a1a1a 0%, #8c1c1c 30%, #d9c67a 55%, #1a1a1a 100%)",
      bio: "Titus Kaphar is a painter and sculptor known for reworking historical portraiture to surface erased or overlooked Black figures.",
      context: "Created for a June 2020 TIME magazine cover depicting a Black mother holding the outline of an absent child, painted in direct response to George Floyd's murder and the nationwide Black Lives Matter protests that followed.",
      medium: "Oil on canvas", dimensions: "Commissioned work (TIME cover format)", institution: "Oakland Museum of Art", link: "https://omart.org/artwork/analogous-colors/", img: imgKaphar,
      artPages: {
        aboutWork: ["\"Analogous Colors\" depicts a Black mother whose arms cradle a child-shaped void — the silhouette of a child cut away from the canvas entirely, replaced by bright, almost painful yellow light shining through the absence. The mother's expression is not grief exactly; it is something more sustained and more exhausting than grief.", "Kaphar has described the absent child as a reference to every Black child lost to racial violence, and to his own experience of dread as a Black father raising sons in America. The painting was commissioned for the cover of TIME magazine's June 22, 2020 issue, published in the weeks of global protest following George Floyd's murder, when that compound fear — specific loss, structural precariousness — had become impossible to ignore."],
        aboutArtist: ["Titus Kaphar (born 1976) grew up in Kalamazoo, Michigan, and studied at the California College of the Arts and the Yale School of Art. He is known for works that intervene directly into the Western art-historical canon: paintings that expose the Black figures cropped from or rendered invisible in canonical portraits, canvases covered in tar to obscure white subjects, sections physically cut from completed works to make the overlooked visible.", "His practice is rooted in the idea that the history of art is also a history of who was deemed worth depicting, and that making that erasure legible is itself a political act. He received a MacArthur Foundation Fellowship in 2018.", "He co-founded NXTHVN, a studio incubator and arts education program in New Haven, Connecticut, designed to provide studio space, mentorship, and education to artists and high school students of color who would not otherwise have access to those resources."],
        contextParas: ["The painting was made in the immediate aftermath of George Floyd's murder on May 25, 2020, and the global protests that followed — demonstrations in all fifty U.S. states and over sixty countries, widely described as the largest protest movement in American history.", "The summer of 2020 had already seen the killings of Ahmaud Arbery and Breonna Taylor; the combination of these deaths during a global pandemic that was itself killing Black Americans at disproportionate rates produced a sustained national reckoning with anti-Black violence unlike anything since the civil rights era in its scope and visibility.", "Kaphar painted the work in days and delivered it to TIME under the compressed timeline of a news commission — which makes the sustained emotional precision of the image all the more striking. The cover became one of the most widely circulated images of that moment, an artistic response to grief that arrived in the same news cycle as the events that caused it."]
      } },
    timeline: [
      { year: "2013", type: "organization", title: "Black Lives Matter Founded", desc: "Movement founded after the acquittal of George Zimmerman in the shooting death of Trayvon Martin, growing into a national organizing force." },
      { year: "2014", type: "protest", title: "Ferguson Protests", desc: "The killing of Michael Brown by police sparked sustained protests and a national reckoning over policing and race." },
      { year: "2020", type: "protest", title: "George Floyd Protests", desc: "The killing of George Floyd by Minneapolis police sparked what are considered among the largest protest movements in U.S. history." },
      { year: "2021", type: "legislation", title: "Juneteenth National Holiday", desc: "Juneteenth, marking the end of slavery in the U.S., was established as a federal holiday." },
      { year: "2022", type: "milestone", title: "Ketanji Brown Jackson Confirmed", desc: "Became the first Black woman to serve as a U.S. Supreme Court Justice." },
    ],
    panelEvents: [
      { year: "2012", type: "milestone", title: "Killing of Trayvon Martin", desc: "An unarmed Black teenager was fatally shot in Florida by a neighborhood watch volunteer, an event that helped catalyze the Black Lives Matter movement." },
      { year: "2016", type: "protest", title: "Colin Kaepernick's Kneeling Protest", desc: "NFL quarterback Colin Kaepernick began kneeling during the national anthem to protest police brutality and racial injustice." },
      { year: "2021", type: "court", title: "Conviction of Derek Chauvin", desc: "The former Minneapolis police officer was convicted of murder in the killing of George Floyd, a rare instance of accountability for police violence." },
    ],
  },
];

// ─── Zone layout (exact from source) ─────────────────────────────────────────
const ZONES = [
  { left: "0%",  top: "10%", width: "20%", height: "28%", bars: 3, slim: false },
  { left: "25%", top: "10%", width: "20%", height: "28%", bars: 3, slim: false },
  { left: "50%", top: "10%", width: "20%", height: "28%", bars: 3, slim: false },
  { left: "0%",  top: "68%", width: "20%", height: "28%", bars: 3, slim: false },
  { left: "25%", top: "68%", width: "20%", height: "28%", bars: 3, slim: false },
  { left: "50%", top: "68%", width: "20%", height: "28%", bars: 3, slim: false },
];

// ─── Injected CSS (exact from source) ────────────────────────────────────────
const CSS = `
  .exhibit-root { font-family: Georgia, 'Times New Roman', serif; background: #100d09; color: #e8dfc9; min-height: 100vh; padding: 30px 16px 60px; }
  .exhibit-title { text-align: center; font-size: 2rem; letter-spacing: 2px; color: #d4af6a; margin-bottom: 4px; text-transform: uppercase; }
  .exhibit-subtitle { text-align: center; color: #a89a7c; font-style: italic; font-size: 0.92rem; margin-bottom: 8px; }
  .exhibit-instructions { text-align: center; color: #756a52; font-size: 0.76rem; margin-bottom: 28px; }
  .floorplan-wrap { max-width: 1100px; margin: 0 auto; }
  .floorplan {
    position: relative; width: 100%; aspect-ratio: 1180 / 620;
    background: #d6c9b0;
    background-image:
      linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 28px 28px;
    border: 3px solid #7a6a50;
    border-radius: 4px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6), inset 0 0 60px rgba(0,0,0,0.08);
    overflow: hidden;
    font-family: 'Arial Narrow', Arial, sans-serif;
  }
  /* ── Compass rose ── */
  .fp-compass { position: absolute; right: 1.5%; bottom: 2%; width: 30px; height: 30px; opacity: 0.35; pointer-events: none; }
  /* ── Ceiling light fixture ── */
  .fp-light { position: absolute; pointer-events: none; transform: translate(-50%,-50%); opacity: 0.7; }
  /* ── Window symbols ── */
  .fp-win { position: absolute; pointer-events: none; background: #d4eaf5; border: 1.5px solid #5a4a35; }
  .fp-win-h::after { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background: #5a4a35; }
  .fp-win-v::after { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: #5a4a35; }
  /* ── Study table + chairs ── */
  .fp-tbl { position: absolute; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #9a7448, #6a4c28); box-shadow: 0 2px 5px rgba(0,0,0,0.35); pointer-events: none; }
  .fp-chr { position: absolute; background: #b08858; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); pointer-events: none; }
  /* ── Room walls (shared) ── */
  .fp-room {
    position: absolute;
    background: #e8dfc8;
    border: 2.5px solid #5a4a35;
    box-shadow: inset 0 0 0 6px #cfc0a3, 2px 2px 6px rgba(0,0,0,0.25);
  }
  /* ── Bookcase zone ── */
  .zone {
    position: absolute; cursor: pointer;
    background: #e8dfc8;
    border: 2.5px solid #5a4a35;
    box-shadow: inset 0 0 0 6px #cfc0a3, 2px 2px 6px rgba(0,0,0,0.25);
    overflow: hidden;
    transition: filter 0.15s ease;
  }
  .zone:hover { filter: brightness(1.06); z-index: 5; }
  .zone-header { position: absolute; top: 0; left: 0; right: 0; background: rgba(90,74,53,0.92); padding: 3px 6px; z-index: 3; }
  .zone-label { font-size: 0.58rem; letter-spacing: 0.8px; color: #f0e5c8; text-transform: uppercase; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .zone-years { font-size: 0.48rem; color: rgba(240,229,200,0.7); }
  /* bookcase unit inside a zone */
  .bc-unit { position: absolute; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; gap: 0; }
  .bc-shelf { display: flex; align-items: flex-end; padding: 0 4px; gap: 1.5px; background: #3a2510; height: 26px; border-top: 3px solid #6b4a28; }
  .bc-shelf-top { background: #5a3a1a; height: 4px; }
  .bc-book { flex: 1; border-radius: 1px 2px 2px 1px; min-width: 5px; max-width: 14px; position: relative; }
  .bc-book::after { content: ''; position: absolute; top: 0; left: 2px; width: 1px; bottom: 0; background: rgba(255,255,255,0.12); }
  .bc-wall-top { position: absolute; top: 22px; left: 4px; right: 4px; bottom: 0; background: #f0e8d0; border: 1.5px solid #cfc0a3; border-top: none; }
  /* slim zone variant */
  .zone.slim .bc-unit { left: 0; right: 0; }
  /* ── Gallery wing ── */
  .lounge {
    position: absolute; left: 77%; top: 5%; width: 21%; height: 90%;
    background: #ede4cf;
    border: 2.5px solid #5a4a35;
    box-shadow: inset 0 0 0 6px #d8cdb0, 2px 2px 6px rgba(0,0,0,0.25);
    cursor: pointer; overflow: hidden;
    transition: filter 0.15s ease;
    z-index: 1;
  }
  .lounge:hover { filter: brightness(1.06); }
  .lounge-label { position: absolute; top: 3%; left: 50%; transform: translateX(-50%); font-size: 0.6rem; letter-spacing: 0.8px; color: #3a2a14; font-weight: 700; text-transform: uppercase; white-space: nowrap; text-align: center; z-index: 5; }
  /* artwork frames hung on gallery walls */
  .gal-frame { position: absolute; background: #b8902a; border: 3px solid #7a5a1a; box-shadow: 0 3px 8px rgba(0,0,0,0.45), inset 0 0 0 2px rgba(0,0,0,0.3); }
  .gal-frame-inner { width: 100%; height: 100%; background: #c8b89a; box-shadow: inset 0 0 6px rgba(0,0,0,0.35); }
  /* bench */
  .gal-bench { position: absolute; background: #7a5a35; border-radius: 3px; box-shadow: 0 2px 4px rgba(0,0,0,0.4); }
  /* ── Reading room ── */
  .reading-room {
    position: absolute; left: 28%; top: 46%; width: 18%; height: 18%;
    background: #ede8d8;
    border: 2.5px solid #5a4a35;
    box-shadow: inset 0 0 0 6px #d8cdb0, 2px 2px 6px rgba(0,0,0,0.25);
    cursor: pointer; overflow: hidden;
    transition: filter 0.15s ease;
  }
  .reading-room:hover { filter: brightness(1.06); }
  .reading-room-label { position: absolute; left: 28%; top: 40%; width: 18%; text-align: center; font-size: 0.68rem; color: #3a2a14; letter-spacing: 1px; font-weight: 700; text-transform: uppercase; z-index: 3; }
  /* oval table from above */
  .rr-table { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 55%; height: 45%; background: radial-gradient(circle at 35% 30%, #8a6640, #5a3c20); border-radius: 50%; box-shadow: 0 3px 8px rgba(0,0,0,0.4), inset 0 0 4px rgba(255,255,255,0.08); }
  /* chair (overhead view) */
  .rr-chair { position: absolute; width: 18%; height: 16%; background: #a07848; border-radius: 2px; box-shadow: 0 1px 4px rgba(0,0,0,0.35); }
  /* ── Entrance mat ── */
  .entrance-mat { position: absolute; left: 35%; top: 1%; width: 8%; height: 7%; height: 6%; background: #9b6db5; border-radius: 0 0 8px 8px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: filter 0.15s; box-shadow: 0 4px 10px rgba(0,0,0,0.4); border: 2px solid #7a4a96; border-top: none; }
  .entrance-mat:hover { filter: brightness(1.15); }
  .entrance-mat-label { font-size: 0.52rem; letter-spacing: 0.8px; font-weight: 700; color: #f8f0ff; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
  /* ── Corridor between zones ── */
  .fp-corridor-h { position: absolute; background: #c8b89a; border-top: 1.5px solid #9a8a6a; border-bottom: 1.5px solid #9a8a6a; }
  .fp-corridor-v { position: absolute; background: #c8b89a; border-left: 1.5px solid #9a8a6a; border-right: 1.5px solid #9a8a6a; }
  /* room labels on floor */
  .fp-room-tag { position: absolute; font-size: 0.44rem; letter-spacing: 1.2px; color: #8a7a60; text-transform: uppercase; pointer-events: none; }
  .rr-spine { display: none; }
  .table-round { display: none; }
  .chair { display: none; }
  .shelf-bar { display: none; }
  .poem-excerpt { white-space: pre-line; font-family: Georgia, 'Times New Roman', serif; font-style: italic; font-size: 0.88rem; line-height: 1.9; color: #2c1e10; border-left: 3px solid #9a6b2f; padding: 14px 18px; margin-bottom: 20px; background: rgba(154,107,47,0.07); border-radius: 0 4px 4px 0; }
  .reading-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 20px; padding: 10px; }
  .book-tile { cursor: pointer; }
  .book-tile:hover .book-cover-face { filter: brightness(1.2); transform: translateY(-3px) rotate(-0.5deg); }
  .book-cover-face { aspect-ratio: 2/3; border-radius: 2px 8px 8px 2px; padding: 14px 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: -5px 5px 14px rgba(0,0,0,0.45), inset -3px 0 8px rgba(0,0,0,0.25); transition: filter 0.2s, transform 0.2s; color: rgba(255,255,255,0.92); position: relative; overflow: hidden; }
  .book-cover-face::before { content: ""; position: absolute; left: 0; top: 0; width: 6px; height: 100%; background: rgba(0,0,0,0.25); border-radius: 2px 0 0 2px; }
  .book-tile-era { font-size: 0.5rem; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.65; padding-left: 8px; }
  .book-tile-title { font-size: 0.78rem; font-weight: 700; line-height: 1.2; margin-top: 6px; padding-left: 8px; }
  .book-tile-author { font-size: 0.64rem; opacity: 0.75; margin-top: 4px; padding-left: 8px; }
  .book-tile-year { font-size: 0.55rem; opacity: 0.55; padding-left: 8px; }
  .book-tile-badge { font-size: 0.48rem; letter-spacing: 0.5px; text-transform: uppercase; background: rgba(255,255,255,0.18); border-radius: 2px; padding: 2px 5px; margin-left: 8px; align-self: flex-start; }
  .reading-grid-wrap { max-width: 900px; margin: 0 auto; }

  .full-overlay { position: fixed; inset: 0; background: rgba(6,5,3,0.94); z-index: 200; overflow-y: auto; padding: 30px 16px 60px; animation: fadeIn 0.2s ease; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes popIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .back-btn { display: inline-flex; align-items: center; gap: 6px; background: #d4af6a; color: #241c0f; border: none; padding: 8px 16px; border-radius: 20px; font-size: 0.8rem; cursor: pointer; margin: 0 auto 20px; display: flex; width: fit-content; font-family: Georgia, serif; letter-spacing: 0.4px; }
  .back-btn:hover { background: #e2c184; }
  .room { max-width: 960px; margin: 0 auto 50px auto; border-radius: 6px; overflow: hidden; box-shadow: 0 14px 40px rgba(0,0,0,0.55); }
  .wall { padding: 30px 34px 20px; position: relative; }
  .wall::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 14px; background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.35)); pointer-events: none; }
  .room-header { display: flex; align-items: baseline; gap: 12px; margin-bottom: 4px; }
  .era-name { font-size: 1.25rem; color: #f3e6c4; letter-spacing: 1px; }
  .era-years-label { font-size: 0.8rem; color: rgba(255,255,255,0.65); }
  .era-blurb { color: rgba(255,255,255,0.78); font-size: 0.85rem; line-height: 1.5; max-width: 640px; margin-bottom: 20px; }
  .wall-content { display: flex; gap: 26px; align-items: flex-start; margin-bottom: 22px; flex-wrap: wrap; }
  .frame-wrap { cursor: pointer; text-align: center; }
  .frame { width: 150px; height: 190px; padding: 10px; background: linear-gradient(135deg, #c9a24a, #7a5b23 40%, #c9a24a 60%, #6b4d1c); border-radius: 2px; box-shadow: 0 10px 22px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(0,0,0,0.3); transition: transform 0.2s ease; }
  .frame-wrap:hover .frame { transform: translateY(-6px) scale(1.02); }
  .frame-inner { width: 100%; height: 100%; box-shadow: inset 0 0 0 2px rgba(0,0,0,0.4), inset 0 2px 10px rgba(0,0,0,0.45); position: relative; overflow: hidden; }
  .art-caption { margin-top: 8px; font-size: 0.68rem; color: rgba(255,255,255,0.75); max-width: 150px; line-height: 1.3; }
  .art-caption b { display: block; color: #e8dfc9; font-size: 0.72rem; }
  .didactic-panel { flex: 1 1 260px; max-width: 360px; background: #f7f1e1; color: #2c2416; border-radius: 3px; padding: 16px 20px; box-shadow: 0 10px 22px rgba(0,0,0,0.4); border-left: 4px solid #9a6b2f; cursor: pointer; }
  .didactic-panel .dp-title { font-size: 0.95rem; font-weight: bold; color: #6b2e1f; margin-bottom: 2px; }
  .didactic-panel .dp-sub { font-style: italic; color: #6e6248; font-size: 0.8rem; margin-bottom: 4px; }
  .didactic-panel .dp-label { font-size: 0.6rem; letter-spacing: 1.2px; text-transform: uppercase; color: #9a6b2f; border-bottom: 1px solid #d8c9a3; padding-bottom: 4px; margin: 12px 0 10px; }
  .dp-evdesc { font-size: 0.74rem; line-height: 1.4; color: #3a2a1c; }
  .dp-event-btn { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 8px; padding: 8px 12px; background: #6b2e1f; color: #f4e9c9; border-radius: 3px; font-size: 0.72rem; font-family: Georgia, serif; letter-spacing: 0.4px; box-shadow: 0 2px 6px rgba(0,0,0,0.2); transition: background 0.15s, transform 0.12s; }
  .didactic-panel:hover .dp-event-btn { background: #8c3d28; transform: translateX(2px); }
  .dp-event-btn-arrow { font-size: 0.9rem; line-height: 1; }
  .bookcase { background: linear-gradient(180deg, #5a3d22, #3f2a17); padding: 16px 16px 0; border-radius: 4px 4px 0 0; box-shadow: inset 0 0 0 3px rgba(0,0,0,0.25), 0 6px 18px rgba(0,0,0,0.4); }
  .books-row { display: flex; gap: 12px; align-items: flex-end; padding: 14px 10px 0; flex-wrap: wrap; }
  .shelf-board { height: 22px; margin: 0 -16px; background: repeating-linear-gradient(90deg, #7a5230 0px, #6e492b 3px, #7a5230 6px), linear-gradient(180deg, #8a5f36, #4e3419); box-shadow: inset 0 3px 4px rgba(255,255,255,0.08), inset 0 -6px 10px rgba(0,0,0,0.5), 0 6px 8px rgba(0,0,0,0.45); border-bottom: 2px solid #2c1c0d; }
  .book-spine { width: 46px; height: 178px; border-radius: 2px 5px 5px 2px; cursor: pointer; display: flex; align-items: flex-start; justify-content: center; padding-top: 12px; position: relative; box-shadow: 2px 3px 6px rgba(0,0,0,0.5), inset -4px 0 8px rgba(0,0,0,0.35), inset 3px 0 3px rgba(255,255,255,0.15); transition: transform 0.18s ease; overflow: hidden; }
  .book-spine:hover { transform: translateY(-8px); }
  .book-spine::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(180deg, transparent 0px, transparent 24px, rgba(0,0,0,0.3) 24px, rgba(0,0,0,0.3) 27px, transparent 27px, transparent 30px); pointer-events: none; }
  .book-spine::after { content: ''; position: absolute; top: 0; bottom: 0; left: 4px; width: 3px; background: rgba(255,255,255,0.18); pointer-events: none; }
  .spine-text { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 0.62rem; font-weight: bold; letter-spacing: 0.4px; color: #f2e6c2; text-shadow: 0 1px 1px rgba(0,0,0,0.5); z-index: 2; }
  .bookend {
    flex: 0 0 auto; width: 14px; height: 178px; cursor: pointer;
    position: relative; overflow: visible;
    background: linear-gradient(90deg, #0d0904 0%, #2e2010 20%, #5a3f1a 50%, #2e2010 80%, #0d0904 100%);
    box-shadow: 1px 0 4px rgba(0,0,0,0.7), -1px 0 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,210,80,0.12);
    border-radius: 2px 2px 0 0;
    border: 1px solid #1a1208;
    transition: transform 0.18s ease, filter 0.18s ease;
    display: flex; align-items: center; justify-content: center;
  }
  /* horizontal foot — left bookend foot extends right, right bookend foot extends left */
  .bookend::after {
    content: ''; position: absolute; bottom: -1px; height: 12px; width: 30px;
    background: linear-gradient(180deg, #4a3214 0%, #26180a 60%, #1a1008 100%);
    border-radius: 1px 1px 2px 2px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,200,60,0.1);
    border: 1px solid #0e0a04;
  }
  .bookend-l::after { left: 0; }
  .bookend-r::after { right: 0; }
  /* decorative ridge on the panel */
  .bookend::before {
    content: ''; position: absolute; top: 14px; bottom: 18px; left: 4px; right: 4px;
    background: linear-gradient(180deg,
      rgba(255,200,60,0.14) 0%, rgba(255,200,60,0.06) 30%,
      rgba(0,0,0,0.1) 70%, rgba(255,200,60,0.08) 100%);
    border-radius: 1px;
    border: 1px solid rgba(255,200,60,0.1);
    pointer-events: none;
  }
  .bookend:hover { transform: translateY(-6px); filter: brightness(1.4); }
  .bookend-label { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 0.44rem; letter-spacing: 0.8px; text-transform: uppercase; color: #c9a050; white-space: nowrap; opacity: 0.75; z-index: 1; }
  .overlay { position: fixed; inset: 0; background: rgba(8,6,4,0.9); display: flex; align-items: center; justify-content: center; z-index: 300; padding: 20px; animation: fadeIn 0.2s ease; }
  .cover-card { width: 290px; position: relative; animation: popIn 0.22s ease; }
  .cover-face { height: 410px; border-radius: 3px; padding: 24px 22px; color: #fff; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 25px 55px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.25); }
  .cover-face::before { content: ''; position: absolute; inset: 12px; border: 1px solid rgba(255,255,255,0.4); pointer-events: none; }
  .cover-face::after { content: ''; position: absolute; top: 0; bottom: 0; right: 0; width: 14px; background: repeating-linear-gradient(180deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 4px); }
  .cover-era-tag { font-size: 0.62rem; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85; }
  .cover-title { font-size: 1.35rem; line-height: 1.3; font-weight: bold; margin: 12px 0 6px; text-shadow: 0 2px 6px rgba(0,0,0,0.35); }
  .cover-author { font-size: 0.95rem; font-style: italic; opacity: 0.95; }
  .cover-year { font-size: 0.78rem; opacity: 0.8; margin-top: 4px; }
  .cover-hint { font-size: 0.66rem; opacity: 0.75; }
  .bookmark-tab { position: absolute; top: 0; right: 60px; width: 32px; height: 58px; background: #b5301f; clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%); cursor: pointer; box-shadow: -2px 3px 6px rgba(0,0,0,0.35); display: flex; align-items: flex-start; justify-content: center; padding-top: 8px; transition: transform 0.15s ease, background 0.15s ease; z-index: 5; }
  .bookmark-tab:hover { transform: translateY(4px); background: #d1432e; }
  .close-x { position: absolute; top: 10px; right: 10px; width: 34px; height: 34px; border-radius: 50%; border: 2px solid rgba(0,0,0,0.25); font-size: 1.1rem; line-height: 1; cursor: pointer; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.45); background: #e8dfc9; color: #24201a; display: flex; align-items: center; justify-content: center; transition: background 0.15s, transform 0.12s; }
  .close-x:hover { background: #fff; transform: scale(1.1); }
  .info-close { position: absolute; top: 10px; right: 10px; width: 34px; height: 34px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); font-size: 1.1rem; line-height: 1; cursor: pointer; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.45); background: #6b2e1f; color: #f7f1e1; display: flex; align-items: center; justify-content: center; transition: background 0.15s, transform 0.12s; }
  .info-close:hover { background: #8c3d28; transform: scale(1.1); }
  .info-card { width: min(560px, 90vw); max-height: 80vh; overflow-y: auto; background: #f7f1e1; color: #2c2416; border-radius: 6px; padding: 30px 32px; position: relative; box-shadow: 0 25px 60px rgba(0,0,0,0.6); animation: popIn 0.22s ease; }
  .info-card h2 { font-size: 1.25rem; color: #6b2e1f; margin-bottom: 2px; }
  .info-author-line { font-style: italic; color: #6e6248; margin-bottom: 16px; font-size: 0.9rem; }
  .info-section { margin-bottom: 16px; }
  .info-section h3 { font-size: 0.72rem; letter-spacing: 1.5px; text-transform: uppercase; color: #9a6b2f; border-bottom: 1px solid #d8c9a3; padding-bottom: 4px; margin-bottom: 8px; }
  .info-section p { font-size: 0.88rem; line-height: 1.6; }
  .art-card { width: min(420px, 92vw); position: relative; animation: popIn 0.22s ease; }
  .art-frame-big { padding: 16px; background: linear-gradient(135deg, #c9a24a, #7a5b23 40%, #c9a24a 60%, #6b4d1c); border-radius: 3px; box-shadow: 0 25px 55px rgba(0,0,0,0.6); }
  .art-canvas-big { height: 320px; box-shadow: inset 0 0 0 2px rgba(0,0,0,0.4), inset 0 2px 14px rgba(0,0,0,0.45); position: relative; overflow: hidden; }
  .art-plaque { margin-top: 14px; background: #2c2416; color: #f0e6cc; padding: 12px 16px; border-radius: 3px; text-align: center; }
  .art-plaque .t { font-size: 0.95rem; font-weight: bold; }
  .art-plaque .s { font-size: 0.76rem; opacity: 0.8; margin-top: 2px; }
  .art-plaque button { margin-top: 10px; background: #9a6b2f; color: #fff; border: none; padding: 7px 14px; border-radius: 3px; font-size: 0.72rem; letter-spacing: 0.5px; cursor: pointer; text-transform: uppercase; font-family: Georgia, serif; }
  .art-plaque button:hover { background: #b5813d; }
  .gallery-grid-wrap { max-width: 900px; margin: 0 auto; }
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 22px; padding: 10px; }
  .gallery-tile { cursor: pointer; text-align: center; }
  .gallery-tile .frame { width: 100%; height: 170px; margin: 0 auto; }
  .gallery-tile .art-caption { max-width: none; }
  .timeline-card { width: min(640px, 92vw); max-height: 82vh; overflow-y: auto; background: #f7f1e1; color: #2c2416; border-radius: 6px; padding: 30px 32px; position: relative; box-shadow: 0 25px 60px rgba(0,0,0,0.6); animation: popIn 0.22s ease; }
  .timeline-card h2 { font-size: 1.25rem; color: #6b2e1f; margin-bottom: 2px; }
  .timeline-era-line { font-style: italic; color: #6e6248; margin-bottom: 18px; font-size: 0.9rem; }
  .tl-legend { display: flex; flex-wrap: wrap; gap: 8px 16px; margin-bottom: 22px; font-size: 0.66rem; color: #6e6248; }
  .tl-legend span { display: inline-flex; align-items: center; gap: 5px; }
  .tl-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
  .tl-track { position: relative; padding-left: 4px; }
  .tl-track::before { content: ''; position: absolute; left: 21px; top: 4px; bottom: 22px; width: 2px; background: #d8c9a3; }
  .tl-event { display: flex; gap: 14px; margin-bottom: 20px; position: relative; }
  .tl-event:last-child { margin-bottom: 0; }
  .tl-icon { flex: 0 0 auto; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 1; box-shadow: 0 3px 8px rgba(0,0,0,0.25); border: 2px solid #f7f1e1; }
  .tl-icon svg { width: 20px; height: 20px; }
  .tl-body { padding-top: 2px; }
  .tl-year { font-weight: bold; color: #a8461e; font-size: 0.82rem; letter-spacing: 0.5px; }
  .tl-type { display: inline-block; font-size: 0.58rem; text-transform: uppercase; letter-spacing: 0.5px; padding: 2px 8px; border-radius: 8px; margin-left: 6px; color: #fff; position: relative; top: -1px; }
  .tl-title { font-weight: bold; margin: 3px 0; font-size: 0.98rem; }
  .tl-desc { font-size: 0.85rem; line-height: 1.45; color: #3a2a1c; }
  .about-card { max-width: 480px; margin: 0 auto; text-align: center; }
`;

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function TypeIconSVG({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    legislation: <><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></>,
    amendment: <><path d="M12 3v18M6 8l6-5 6 5M4 21h16"/></>,
    court: <><path d="M12 2l2 5h-4z"/><circle cx="12" cy="12" r="1"/><path d="M4 8h16M6 8l-3 6h6zM18 8l-3 6h6z"/><path d="M12 8v12M8 20h8"/></>,
    protest: <><path d="M8 3v6M8 3h6l-2 3 2 3H8"/><path d="M8 21v-8"/><circle cx="16" cy="15" r="3"/><path d="M16 18v3M14 21h4"/></>,
    riot: <><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></>,
    organization: <><circle cx="12" cy="8" r="3"/><circle cx="5" cy="16" r="2.5"/><circle cx="19" cy="16" r="2.5"/><path d="M12 11v2M9 15l-2.5 1M15 15l2.5 1"/></>,
    milestone: <><path d="M5 21V4M5 4h11l-3 4 3 4H5"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      {paths[type] || paths.milestone}
    </svg>
  );
}

function BookendSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d4af6a" strokeWidth="1.8">
      <path d="M4 19V5a1 1 0 011-1h6a1 1 0 011 1v14M4 19h8M4 19H2M12 19h2M18 5a2 2 0 012 2v10a2 2 0 01-2 2h-2V5h2z"/>
    </svg>
  );
}

function TlLegend() {
  return (
    <div className="tl-legend">
      {Object.keys(TL).map(k => (
        <span key={k}>
          <span className="tl-dot" style={{ background: TC[k] }} />
          {TL[k]}
        </span>
      ))}
    </div>
  );
}

function TlTrack({ events }: { events: TEvent[] }) {
  return (
    <div className="tl-track">
      {events.map((ev, i) => (
        <div className="tl-event" key={i}>
          <div className="tl-icon" style={{ background: TC[ev.type] }}>
            <TypeIconSVG type={ev.type} />
          </div>
          <div className="tl-body">
            <div className="tl-year">
              {ev.year}
              <span className="tl-type" style={{ background: TC[ev.type] }}>{ev.type}</span>
            </div>
            <div className="tl-title">{ev.title}</div>
            <div className="tl-desc">{ev.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Floor Plan ───────────────────────────────────────────────────────────────

const ERA_BOOK_COLORS = [
  ["#8B3A2A","#C4832D","#6E4E2A","#A85728","#5C2A18","#8B5728","#D4A04A","#6E3A1C","#9A472A","#B56A2A","#7A3A2A","#C47A35"],
  ["#2A5C3A","#7A6914","#5C2A2A","#3A4E2A","#6E4E14","#2A3C5C","#8B7A2A","#4A2A4E","#5C3A2A","#2A5C5C","#8B3A3A","#4A5C2A"],
  ["#4A2A6B","#8B6914","#2A1A5C","#6B3A2A","#3A2A6B","#8B4A2A","#4A3A8B","#6B6914","#2A4A6B","#8B2A4A","#4A6B2A","#6B2A6B"],
  ["#1A2A4A","#8B1A1A","#2A2A2A","#4A3A1A","#1A4A3A","#8B4A1A","#1A3A4A","#8B8B1A","#4A1A1A","#2A4A2A","#8B2A1A","#1A4A4A"],
  ["#3A2A5C","#5C3A1A","#1A3A2A","#4A2A3A","#2A2A5C","#5C5C1A","#3A1A4A","#1A4A2A","#5C2A3A","#2A5C3A","#4A4A1A","#3A3A5C"],
  ["#8B1A1A","#1A1A1A","#4A2A1A","#8B5A1A","#1A2A4A","#5A1A1A","#8B8B2A","#2A1A4A","#8B3A1A","#1A4A1A","#5A1A4A","#8B1A4A"],
];

function FloorPlan({ onEnterEra, onOpenGallery, onOpenAbout, onOpenReadingRoom }: {
  onEnterEra: (i: number) => void;
  onOpenGallery: () => void;
  onOpenAbout: () => void;
  onOpenReadingRoom: () => void;
}) {
  // book heights for shelves — alternating to look natural
  const SHELF_H = [22, 18, 20, 16, 21, 17, 19, 15, 22, 18, 20, 16];

  return (
    <div className="floorplan-wrap">
      <div className="floorplan">

        {/* ── horizontal corridor between top and bottom rows ── */}
        <div className="fp-corridor-h" style={{ left: "0%", top: "38%", width: "75%", height: "30%" }} />

        {/* ── Bookcase Zones ── */}
        {ZONES.map((z, i) => {
          const eraColors = ERA_BOOK_COLORS[i] ?? ERA_BOOK_COLORS[0];
          const numShelves = 3;
          const booksPerShelf = 8;
          return (
            <div
              key={i}
              className="zone"
              style={{ left: z.left, top: z.top, width: z.width, height: z.height }}
              onClick={() => onEnterEra(i)}
            >
              {/* header strip */}
              <div className="zone-header">
                <div className="zone-label">{eras[i].name}</div>
                <div className="zone-years">{eras[i].years}</div>
              </div>
              {/* bookcase body */}
              <div className="bc-unit">
                {Array.from({ length: numShelves }).map((_, si) => (
                  <div key={si} style={{ background: "#3a2510", paddingTop: 2 }}>
                    <div className="bc-shelf">
                      {Array.from({ length: booksPerShelf }).map((_, bi) => {
                        const idx = (si * booksPerShelf + bi) % eraColors.length;
                        const h = SHELF_H[(si * booksPerShelf + bi) % SHELF_H.length];
                        return (
                          <div key={bi} className="bc-book"
                            style={{ background: eraColors[idx], height: h, alignSelf: "flex-end" }}
                          />
                        );
                      })}
                    </div>
                    <div className="bc-shelf-top" />
                  </div>
                ))}
              </div>
              {/* floor label */}
              <div className="fp-room-tag" style={{ bottom: 2, right: 4 }}>Bookcase</div>
            </div>
          );
        })}

        {/* ── Entrance mat ── */}
        <div className="entrance-mat" onClick={onOpenAbout}>
          <span className="entrance-mat-label">Welcome</span>
        </div>

        {/* ── Reading Room ── */}
        <div className="reading-room-label">Reading Room</div>
        <div className="reading-room" onClick={onOpenReadingRoom}>
          {/* oval table */}
          <div className="rr-table" />
          {/* 6 chairs around the table */}
          <div className="rr-chair" style={{ top: "8%",  left: "38%" }} />
          <div className="rr-chair" style={{ top: "8%",  left: "62%" }} />
          <div className="rr-chair" style={{ top: "42%", left: "8%" }} />
          <div className="rr-chair" style={{ top: "42%", right: "8%" }} />
          <div className="rr-chair" style={{ bottom: "6%", left: "38%" }} />
          <div className="rr-chair" style={{ bottom: "6%", left: "62%" }} />
          <div className="fp-room-tag" style={{ bottom: 2, right: 4 }}>Reading Room</div>
        </div>

        {/* ── Gallery Wing ── */}
        <div className="lounge" onClick={onOpenGallery}>
          <div className="lounge-label">Gallery Lounge</div>
          {/* artwork frames on left wall */}
          <div className="gal-frame" style={{ left: "6%", top: "14%", width: "22%", height: "18%" }}>
            <div className="gal-frame-inner" />
          </div>
          <div className="gal-frame" style={{ left: "6%", top: "38%", width: "22%", height: "18%" }}>
            <div className="gal-frame-inner" />
          </div>
          <div className="gal-frame" style={{ left: "6%", top: "62%", width: "22%", height: "18%" }}>
            <div className="gal-frame-inner" />
          </div>
          {/* artwork frames on right wall */}
          <div className="gal-frame" style={{ right: "6%", top: "14%", width: "22%", height: "18%" }}>
            <div className="gal-frame-inner" />
          </div>
          <div className="gal-frame" style={{ right: "6%", top: "38%", width: "22%", height: "18%" }}>
            <div className="gal-frame-inner" />
          </div>
          <div className="gal-frame" style={{ right: "6%", top: "62%", width: "22%", height: "18%" }}>
            <div className="gal-frame-inner" />
          </div>
          {/* bench in center */}
          <div className="gal-bench" style={{ left: "28%", top: "44%", width: "44%", height: "12%" }} />
          <div className="fp-room-tag" style={{ bottom: 4, left: "50%", transform: "translateX(-50%)" }}>click to browse</div>
        </div>

        {/* ── Compass rose (decorative SVG) ── */}
        <svg className="fp-compass" viewBox="0 0 30 30" fill="none">
          <polygon points="15,2 17,13 15,11 13,13" fill="#5a4a35" />
          <polygon points="15,28 17,17 15,19 13,17" fill="#5a4a35" />
          <polygon points="2,15 13,13 11,15 13,17" fill="#5a4a35" />
          <polygon points="28,15 17,13 19,15 17,17" fill="#5a4a35" />
          <circle cx="15" cy="15" r="2.5" fill="#5a4a35" />
          <text x="15" y="7" textAnchor="middle" fontSize="4" fill="#5a4a35" fontWeight="bold">N</text>
        </svg>
      </div>
    </div>
  );
}

// ─── Era Overlay ──────────────────────────────────────────────────────────────

function EraOverlay({ eraIdx, onBack, onOpenBook, onOpenArt, onOpenTimeline, onOpenDidacticTimeline }: {
  eraIdx: number;
  onBack: () => void;
  onOpenBook: (b: BookData, eraIdx: number) => void;
  onOpenArt: (a: ArtData) => void;
  onOpenTimeline: (i: number) => void;
  onOpenDidacticTimeline: (i: number) => void;
}) {
  const era = eras[eraIdx];
  return (
    <div className="full-overlay">
      <button className="back-btn" onClick={onBack}>← Back to Library</button>
      <div className="room">
        <div className="wall" style={{ background: era.wall }}>
          <div className="room-header">
            <div className="era-name">{era.name}</div>
            <div className="era-years-label">{era.years}</div>
          </div>
          <div className="era-blurb">{era.blurb}</div>
          <div className="wall-content">
            <div className="frame-wrap" onClick={() => onOpenArt(era.art)}>
              <div className="frame">
                <ImageWithFallback src={era.art.img} alt={era.art.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div className="art-caption">
                <b>{era.art.title}</b>
                {era.art.artist}, {era.art.year}
              </div>
            </div>
            <div className="didactic-panel" onClick={() => onOpenDidacticTimeline(eraIdx)}>
              <div className="dp-title">{era.art.title}</div>
              <div className="dp-sub">{era.art.artist} · {era.art.year}</div>
              <div className="dp-label">Medium</div>
              <div className="dp-evdesc">{era.art.medium}</div>
              <div className="dp-label" style={{ marginTop: 10 }}>Dimensions</div>
              <div className="dp-evdesc">{era.art.dimensions}</div>
              <div className="dp-label" style={{ marginTop: 10 }}>Collection</div>
              <div className="dp-evdesc" style={{ marginBottom: 8 }}>{era.art.institution}</div>
              <a
                href={era.art.link}
                target="_blank"
                rel="noopener"
                onClick={e => e.stopPropagation()}
                style={{ display: "inline-block", fontSize: "0.7rem", color: "#6b2e1f", borderBottom: "1px solid #c9a05c", paddingBottom: 1, textDecoration: "none", letterSpacing: "0.3px", marginBottom: 10 }}
              >View original artwork →</a>
              <div className="dp-event-btn">
                <span>View related events</span>
                <span className="dp-event-btn-arrow">→</span>
              </div>
            </div>
          </div>
          <div className="bookcase">
            <div className="books-row">
              <div className="bookend bookend-l" onClick={() => onOpenTimeline(eraIdx)} title="View era timeline">
                <div className="bookend-label">Timeline</div>
              </div>
              {era.books.map((b, bi) => (
                <div
                  key={bi}
                  className="book-spine"
                  style={{ background: `linear-gradient(90deg, rgba(0,0,0,0.35), transparent 18%, transparent 82%, rgba(0,0,0,0.35)), linear-gradient(160deg, ${era.color1}, ${era.color2})` }}
                  onClick={() => onOpenBook(b, eraIdx)}
                >
                  <div className="spine-text">{b.title}</div>
                </div>
              ))}
              <div className="bookend bookend-r" onClick={() => onOpenTimeline(eraIdx)} title="View era timeline">
                <div className="bookend-label">Timeline</div>
              </div>
            </div>
            <div className="shelf-board" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Gallery Overlay ──────────────────────────────────────────────────────────

function GalleryOverlay({ onBack, onPickArt }: {
  onBack: () => void;
  onPickArt: (eraIdx: number) => void;
}) {
  return (
    <div className="full-overlay">
      <button className="back-btn" onClick={onBack}>← Back to Library</button>
      <div className="gallery-grid-wrap">
        <div className="room-header" style={{ justifyContent: "center", marginBottom: 6 }}>
          <div className="era-name">Gallery Lounge</div>
        </div>
        <div className="era-blurb" style={{ textAlign: "center", margin: "0 auto 20px", maxWidth: 600 }}>
          Featured artworks from every era of the exhibit. Click any piece for its story.
        </div>
        <div className="gallery-grid">
          {eras.map((era, i) => (
            <div key={i} className="gallery-tile" onClick={() => onPickArt(i)}>
              <div className="frame">
                <ImageWithFallback src={era.art.img} alt={era.art.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div className="art-caption">
                <b>{era.art.title}</b>
                {era.art.artist}, {era.art.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Reading Room Overlay ─────────────────────────────────────────────────────

function ReadingRoomOverlay({ onBack, onPickBook }: {
  onBack: () => void;
  onPickBook: (book: BookData, eraIdx: number) => void;
}) {
  return (
    <div className="full-overlay">
      <button className="back-btn" onClick={onBack}>← Back to Library</button>
      <div className="reading-grid-wrap">
        <div className="room-header" style={{ justifyContent: "center", marginBottom: 6 }}>
          <div className="era-name">Reading Room</div>
        </div>
        <div className="era-blurb" style={{ textAlign: "center", margin: "0 auto 20px", maxWidth: 600 }}>
          All featured poems from every era of the exhibit. Click any cover to read.
        </div>
        <div className="reading-grid">
          {eras.map((era, eraIdx) =>
            era.books.map((book, bookIdx) => (
              <div key={`${eraIdx}-${bookIdx}`} className="book-tile" onClick={() => onPickBook(book, eraIdx)}>
                <div className="book-cover-face" style={{ background: `linear-gradient(160deg, ${era.color1}, ${era.color2})` }}>
                  <div>
                    <div className="book-tile-era">{era.name}</div>
                    <div className="book-tile-title">{book.title}</div>
                    <div className="book-tile-author">{book.author}</div>
                  </div>
                  <div>
                    <div className="book-tile-year">{book.year}</div>
                    {book.pages && <div className="book-tile-badge">Full text</div>}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Modals ───────────────────────────────────────────────────────────────────

function BookCoverModal({ book, eraIdx, onClose, onOpenInfo }: {
  book: BookData; eraIdx: number;
  onClose: () => void; onOpenInfo: () => void;
}) {
  const era = eras[eraIdx];
  return (
    <div className="overlay" onClick={onClose}>
      <div className="cover-card" onClick={e => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>×</button>
        <div className="cover-face" style={{ background: `linear-gradient(160deg, ${era.color1}, ${era.color2})` }}>
          <div className="bookmark-tab" onClick={e => { e.stopPropagation(); onOpenInfo(); }} title="Click for historical context">
            <svg viewBox="0 0 24 24" fill="#fff" width="13" height="13">
              <path d="M12 2L14.5 8.5L21.5 9L16 13.5L18 20.5L12 16.5L6 20.5L8 13.5L2.5 9L9.5 8.5Z"/>
            </svg>
          </div>
          <div className="cover-era-tag">{era.name}</div>
          <div>
            <div className="cover-title">{book.title}</div>
            <div className="cover-author">{book.author}</div>
            <div className="cover-year">{book.year}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookInfoModal({ book, eraIdx, onClose }: {
  book: BookData; eraIdx: number; onClose: () => void;
}) {
  const era = eras[eraIdx];
  const [pg, setPg] = useState(0);

  if (book.pages) {
    const { form, aboutPoem, historyTitle, historyParas, sourceUrl, sourceDomain, excerpt } = book.pages;
    const pages = [
      { label: form, heading: "About This Poem", paras: aboutPoem },
      { label: "Behind the Poem", heading: historyTitle, paras: historyParas },
    ];
    const isSource = pg === 2;
    return (
      <div className="overlay" onClick={onClose}>
        <div className="info-card" onClick={e => e.stopPropagation()} style={{ width: "min(580px, 92vw)" }}>
          <button className="info-close" onClick={onClose}>×</button>
          {!isSource ? (
            <>
              <h2>{book.title}</h2>
              <div className="info-author-line">{book.author} · {book.year} · {era.name}</div>
              <div style={{ fontSize: "0.63rem", letterSpacing: "1.3px", textTransform: "uppercase", color: "#9a6b2f", marginBottom: 10 }}>{pages[pg].label}</div>
              <div className="info-section">
                <h3>{pages[pg].heading}</h3>
                {pages[pg].paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </>
          ) : (
            <>
              <h2 style={{ marginBottom: 2 }}>{book.title}</h2>
              <div className="info-author-line" style={{ marginBottom: 14 }}>{book.author} · {book.year}</div>
              {excerpt && <div className="poem-excerpt">{excerpt}</div>}
              <div style={{ textAlign: "center", paddingBottom: 8 }}>
                <a href={sourceUrl} target="_blank" rel="noopener" style={{ display: "inline-block", padding: "10px 22px", background: "#6b2e1f", color: "#f4e9c9", borderRadius: 3, textDecoration: "none", fontFamily: "Georgia, serif", fontSize: "0.8rem", letterSpacing: "0.5px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>Read full poem on {sourceDomain} →</a>
              </div>
            </>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 22, paddingTop: 12, borderTop: "1px solid #d8c9a3" }}>
            <button disabled={pg === 0} onClick={() => setPg(p => p - 1)} style={{ background: pg === 0 ? "transparent" : "#9a6b2f", color: pg === 0 ? "#c8b898" : "#fff", border: pg === 0 ? "1px solid #d8c9a3" : "none", padding: "7px 14px", borderRadius: 3, cursor: pg === 0 ? "default" : "pointer", fontSize: "0.78rem", fontFamily: "Georgia, serif" }}>← Previous</button>
            <span style={{ fontSize: "0.68rem", color: "#9a6b2f", letterSpacing: "0.5px" }}>{pg + 1} / 3</span>
            <button disabled={pg === 2} onClick={() => setPg(p => p + 1)} style={{ background: pg === 2 ? "transparent" : "#9a6b2f", color: pg === 2 ? "#c8b898" : "#fff", border: pg === 2 ? "1px solid #d8c9a3" : "none", padding: "7px 14px", borderRadius: 3, cursor: pg === 2 ? "default" : "pointer", fontSize: "0.78rem", fontFamily: "Georgia, serif" }}>Next →</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="info-card" onClick={e => e.stopPropagation()}>
        <button className="info-close" onClick={onClose}>×</button>
        <h2>{book.title}</h2>
        <div className="info-author-line">{book.author} · {book.year} · {era.name}</div>
        <div className="info-section"><h3>About the Poet</h3><p>{book.bio}</p></div>
        <div className="info-section"><h3>Sociopolitical Context</h3><p>{book.context}</p></div>
      </div>
    </div>
  );
}

function ArtModal({ art, eraName, onClose, onOpenInfo }: {
  art: ArtData; eraName: string; onClose: () => void; onOpenInfo: () => void;
}) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="art-card" onClick={e => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>×</button>
        <div className="art-frame-big">
          <ImageWithFallback src={art.img} alt={art.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="art-plaque">
            <div className="t">{art.title}</div>
            <div className="s">{art.artist} · {art.year}</div>
            <button onClick={e => { e.stopPropagation(); onOpenInfo(); }}>View Historical Context</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtInfoModal({ art, eraName, onClose }: {
  art: ArtData; eraName: string; onClose: () => void;
}) {
  const [pg, setPg] = useState(0);
  const { aboutWork, aboutArtist, contextParas } = art.artPages;

  const pages = [
    { label: "About the Work", heading: art.title, paras: aboutWork },
    { label: "About the Artist", heading: art.artist, paras: aboutArtist },
    { label: "Sociopolitical Context", heading: eraName, paras: contextParas },
  ];

  const isLast = pg === pages.length;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="info-card" onClick={e => e.stopPropagation()} style={{ width: "min(600px, 92vw)" }}>
        <button className="info-close" onClick={onClose}>×</button>
        {!isLast ? (
          <>
            <div style={{ fontSize: "0.63rem", letterSpacing: "1.3px", textTransform: "uppercase", color: "#9a6b2f", marginBottom: 6 }}>{pages[pg].label}</div>
            <h2>{pages[pg].heading}</h2>
            <div className="info-author-line">{art.artist} · {art.medium} · {art.year}</div>
            <div className="info-section">
              {pages[pg].paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "24px 0 8px" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #c9a24a, #7a5b23 40%, #c9a24a 60%, #6b4d1c)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff8e8" strokeWidth="1.6" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
            <h2 style={{ marginBottom: 4 }}>{art.title}</h2>
            <div className="info-author-line">{art.artist} · {art.year}</div>
            <div style={{ fontSize: "0.78rem", color: "#6e6248", margin: "6px 0 4px" }}>{art.medium}</div>
            <div style={{ fontSize: "0.78rem", color: "#6e6248", marginBottom: 6 }}>{art.dimensions}</div>
            <div style={{ fontSize: "0.72rem", color: "#9a6b2f", marginBottom: 18 }}>{art.institution}</div>
            <a href={art.link} target="_blank" rel="noopener" style={{ display: "inline-block", padding: "10px 22px", background: "#6b2e1f", color: "#f4e9c9", borderRadius: 3, textDecoration: "none", fontFamily: "Georgia, serif", fontSize: "0.8rem", letterSpacing: "0.5px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>View at {art.institution.split(",")[0]} →</a>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 22, paddingTop: 12, borderTop: "1px solid #d8c9a3" }}>
          <button disabled={pg === 0} onClick={() => setPg(p => p - 1)} style={{ background: pg === 0 ? "transparent" : "#9a6b2f", color: pg === 0 ? "#c8b898" : "#fff", border: pg === 0 ? "1px solid #d8c9a3" : "none", padding: "7px 14px", borderRadius: 3, cursor: pg === 0 ? "default" : "pointer", fontSize: "0.78rem", fontFamily: "Georgia, serif" }}>← Previous</button>
          <span style={{ fontSize: "0.68rem", color: "#9a6b2f", letterSpacing: "0.5px" }}>{pg + 1} / {pages.length + 1}</span>
          <button disabled={pg === pages.length} onClick={() => setPg(p => p + 1)} style={{ background: pg === pages.length ? "transparent" : "#9a6b2f", color: pg === pages.length ? "#c8b898" : "#fff", border: pg === pages.length ? "1px solid #d8c9a3" : "none", padding: "7px 14px", borderRadius: 3, cursor: pg === pages.length ? "default" : "pointer", fontSize: "0.78rem", fontFamily: "Georgia, serif" }}>Next →</button>
        </div>
      </div>
    </div>
  );
}

function TimelineModal({ eraIdx, onClose }: { eraIdx: number; onClose: () => void; }) {
  const era = eras[eraIdx];
  return (
    <div className="overlay" onClick={onClose}>
      <div className="timeline-card" onClick={e => e.stopPropagation()}>
        <button className="info-close" onClick={onClose}>×</button>
        <h2>{era.name} — Timeline</h2>
        <div className="timeline-era-line">{era.years}</div>
        <TlLegend />
        <TlTrack events={era.timeline} />
      </div>
    </div>
  );
}

function PanelTimelineModal({ events, name, years, onClose }: {
  events: TEvent[]; name: string; years: string; onClose: () => void;
}) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="timeline-card" onClick={e => e.stopPropagation()}>
        <button className="info-close" onClick={onClose}>×</button>
        <h2>{name} — Related Events</h2>
        <div className="timeline-era-line">{years}</div>
        <TlLegend />
        <TlTrack events={events} />
      </div>
    </div>
  );
}

function AboutModal({ onClose }: { onClose: () => void; }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="info-card about-card" onClick={e => e.stopPropagation()}>
        <button className="info-close" onClick={onClose}>×</button>
        <h2>Welcome to the Exhibit</h2>
        <div className="info-section">
          <p>This museum traces six eras of Black American poetry and visual art — from enslaved poets writing under chattel slavery to contemporary painters responding to the Black Lives Matter movement. Each era is represented by a bookcase on the floor plan below.</p>
        </div>
        <div className="info-section">
          <h3>The Bookcases</h3>
          <p>Click any bookcase to step inside that era's room. There you'll find two featured poems and a major artwork from the period. Click a book spine to open its cover, then click the bookmark ribbon on the cover to enter a paginated reader with context about the poem and its historical moment. Click the bookend figures on either side of a shelf to open a timeline of major events from that era.</p>
        </div>
        <div className="info-section">
          <h3>The Artworks</h3>
          <p>Each era's room displays a featured painting or work. A didactic panel beside the artwork lists its medium, dimensions, and collection, and links to the original. Click the panel to see a curated timeline of landmark events connected to that era. Click the artwork frame itself to open an in-depth reader covering the work, the artist, and its sociopolitical context.</p>
        </div>
        <div className="info-section">
          <h3>The Reading Room</h3>
          <p>The rectangular Reading Room at the center of the floor plan collects all twelve featured poems in one place. Click any book cover to open its reader. Books marked "Full text" include the complete poem alongside historical background.</p>
        </div>
        <div className="info-section">
          <h3>The Gallery Lounge</h3>
          <p>The round lounge on the right side of the floor plan displays all six featured artworks as a browsable grid. Click any piece to open its story.</p>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

type View = "floor" | "era" | "gallery" | "reading";

export default function App() {
  const [view, setView] = useState<View>("floor");
  const [currentEra, setCurrentEra] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<{ book: BookData; eraIdx: number } | null>(null);
  const [showBookInfo, setShowBookInfo] = useState(false);
  const [selectedArt, setSelectedArt] = useState<{ art: ArtData; eraName: string } | null>(null);
  const [showArtInfo, setShowArtInfo] = useState(false);
  const [galleryPickEra, setGalleryPickEra] = useState<number | null>(null);
  const [galleryPickInfo, setGalleryPickInfo] = useState(false);
  const [timelineEra, setTimelineEra] = useState<number | null>(null);
  const [panelTimeline, setPanelTimeline] = useState<{ events: TEvent[]; name: string; years: string } | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const enterEra = (i: number) => { setCurrentEra(i); setView("era"); setSelectedBook(null); setSelectedArt(null); setTimelineEra(null); };
  const backToFloor = () => { setView("floor"); setCurrentEra(null); setSelectedBook(null); setSelectedArt(null); setTimelineEra(null); };
  const openGallery = () => { setView("gallery"); setGalleryPickEra(null); setGalleryPickInfo(false); };
  const openReadingRoom = () => { setView("reading"); setSelectedBook(null); setShowBookInfo(false); };

  return (
    <div className="exhibit-root">
      <style>{CSS}</style>

      <div className="exhibit-title">Black American Poetry &amp; Art</div>
      <div className="exhibit-subtitle">Six bookcases. Six eras of verse, image, and struggle — from Reconstruction to Black Lives Matter.</div>
      <div className="exhibit-instructions">Enter a bookcase to read poems &amp; view the era's artwork · open the Reading Room to browse all 12 poems · visit the Gallery Lounge to compare all 6 artworks · click Welcome to learn your way around</div>

      <FloorPlan onEnterEra={enterEra} onOpenGallery={openGallery} onOpenAbout={() => setShowAbout(true)} onOpenReadingRoom={openReadingRoom} />

      {/* Era overlay */}
      {view === "era" && currentEra !== null && (
        <EraOverlay
          eraIdx={currentEra}
          onBack={backToFloor}
          onOpenBook={(b, ei) => { setSelectedBook({ book: b, eraIdx: ei }); setShowBookInfo(false); }}
          onOpenArt={a => { setSelectedArt({ art: a, eraName: eras[currentEra].name }); setShowArtInfo(false); }}
          onOpenTimeline={i => { setTimelineEra(i); setPanelTimeline(null); }}
          onOpenDidacticTimeline={i => { setPanelTimeline({ events: eras[i].panelEvents, name: eras[i].name, years: eras[i].years }); setTimelineEra(null); }}
        />
      )}

      {/* Gallery overlay */}
      {view === "gallery" && (
        <GalleryOverlay
          onBack={backToFloor}
          onPickArt={i => { setGalleryPickEra(i); setGalleryPickInfo(false); }}
        />
      )}

      {/* Reading room overlay */}
      {view === "reading" && (
        <ReadingRoomOverlay
          onBack={backToFloor}
          onPickBook={(book, eraIdx) => { setSelectedBook({ book, eraIdx }); setShowBookInfo(false); }}
        />
      )}

      {/* Book modals */}
      {selectedBook && !showBookInfo && (
        <BookCoverModal book={selectedBook.book} eraIdx={selectedBook.eraIdx} onClose={() => setSelectedBook(null)} onOpenInfo={() => setShowBookInfo(true)} />
      )}
      {selectedBook && showBookInfo && (
        <BookInfoModal book={selectedBook.book} eraIdx={selectedBook.eraIdx} onClose={() => { setShowBookInfo(false); setSelectedBook(null); }} />
      )}

      {/* Art modals (era view) */}
      {selectedArt && !showArtInfo && (
        <ArtModal art={selectedArt.art} eraName={selectedArt.eraName} onClose={() => setSelectedArt(null)} onOpenInfo={() => setShowArtInfo(true)} />
      )}
      {selectedArt && showArtInfo && (
        <ArtInfoModal art={selectedArt.art} eraName={selectedArt.eraName} onClose={() => { setShowArtInfo(false); setSelectedArt(null); }} />
      )}

      {/* Gallery pick modals */}
      {galleryPickEra !== null && !galleryPickInfo && (
        <ArtModal
          art={eras[galleryPickEra].art}
          eraName={eras[galleryPickEra].name}
          onClose={() => setGalleryPickEra(null)}
          onOpenInfo={() => setGalleryPickInfo(true)}
        />
      )}
      {galleryPickEra !== null && galleryPickInfo && (
        <ArtInfoModal
          art={eras[galleryPickEra].art}
          eraName={eras[galleryPickEra].name}
          onClose={() => { setGalleryPickInfo(false); setGalleryPickEra(null); }}
        />
      )}

      {/* Timeline modals */}
      {panelTimeline && (
        <PanelTimelineModal events={panelTimeline.events} name={panelTimeline.name} years={panelTimeline.years} onClose={() => setPanelTimeline(null)} />
      )}
      {timelineEra !== null && !panelTimeline && (
        <TimelineModal eraIdx={timelineEra} onClose={() => setTimelineEra(null)} />
      )}

      {/* About modal */}
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
    </div>
  );
}
