import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgDuncanson from "@/imports/Robert_Duncanson_-_Land_of_the_Lotos_Eaters.jpg";
import imgBannister from "@/imports/under-the-oak_480x480.jpg";
import imgDouglas from "@/imports/aspects_of_negro_life.jpg";
import imgRinggold from "@/imports/Ringgold-American-People-Series-20-Die-800x399.jpg";
import imgBasquiat from "@/imports/untitled_jmb.jpg";
import imgKaphar from "@/imports/kaphar-analogous-colors-2023-03-e1727816005210.jpg";
import imgPostRecon from "@/imports/Written_and_Visual_07.09.png";
import imgBanjoLesson from "@/imports/the-banjo-lesson-1893.jpg_Large.jpg";
// Gallery perspective paintings (all 7 eras)
import galDuncanson from "@/imports/Robert_Duncanson_-_Land_of_the_Lotos_Eaters-1.jpg";
import galBannister from "@/imports/under-the-oak_480x480-1.jpg";
import galDouglas from "@/imports/aspects_of_negro_life-1.jpg";
import galRinggold from "@/imports/Ringgold-American-People-Series-20-Die-800x399-1.jpg";
import galBasquiat from "@/imports/untitled_jmb-1.jpg";
import galKaphar from "@/imports/kaphar-analogous-colors-2023-03-e1727816005210-1.jpg";

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
      { title: "Bars Fight", author: "Lucy Terry Prince", year: "1746",
        bio: "Lucy Terry Prince, brought to Rhode Island in enslavement from Africa, composed this oral account of a raid in Deerfield, Massachusetts. Her husband Abijah Prince purchased his own freedom and later hers; she became a noted orator and landowner in Vermont.",
        context: "Composed in 1746 as colonial tensions with Native nations flared along the New England frontier, this poem circulated orally for over a century before being published in 1855 — making it the oldest known work of literature by an African American.",
        pages: { form: "An oral narrative poem of twenty-eight lines in rhyming couplets, preserved by memory and recitation for over a century before appearing in print in 1855.", aboutPoem: ["Terry Prince composed this poem as an eyewitness account of a 1746 raid by Abenaki warriors on the meadows of Deerfield, Massachusetts — named 'Bars Fight' after the local name for the riverside meadows. She names each settler killed or captured, giving the poem both documentary precision and the shape of an elegy.", "As the oldest known work of literature by an African American, 'Bars Fight' arrived not from the literary mainstream but from oral tradition — passed person to person for over a hundred years before it was written down. That survival is itself remarkable given how systematically the literacy and speech of enslaved people were suppressed."], historyTitle: "Lucy Terry Prince and Colonial New England", historyParas: ["Lucy Terry was abducted from Africa as an infant and enslaved in Rhode Island, then sold to Ebenezer Wells in Deerfield, Massachusetts, where she would live through the raid she describes. She was enslaved for most of her early life, composing the poem at around age sixteen.", "She married Abijah Prince, a free Black man, who purchased her freedom after their marriage in 1756. The couple moved to Vermont after emancipation, where they owned land and raised six children. She became known throughout Vermont for her eloquence and argued her own case before the state supreme court in a land dispute — winning the judges' admiration.", "Her poem was preserved orally until published by Josiah Holland in 1855 in his History of Western Massachusetts. The tradition of her poem had been passed down for over a hundred years through a community that valued her voice long before anyone thought to write it down."], sourceUrl: "https://www.poetry.com/poem/43236/bars-fight", sourceDomain: "poetry.com", excerpt: "August, 'twas the twenty-fifth,\nSeventeen hundred forty-six,\nThe Indians did in ambush lay,\nSome very valiant men to slay.\n'Twas nigh unto Sam Dickinson's mill,\nThe Indians there five men did kill.\n\nSamuel Allen like a hero foute,\nAnd though he was so brave and bold,\nHis face no more shall we behold.\nEleazer Hawks was killed outright,\nBefore he had time to fight." } },
      { title: "To the Right Honourable William, Earl of Dartmouth", author: "Phillis Wheatley", year: "1773",
        bio: "Phillis Wheatley was kidnapped from West Africa around age seven and enslaved in Boston. She became the first African American — and one of the first American women — to publish a book of poetry.",
        context: "Published in Wheatley's landmark 1773 collection, the first book of poetry by an African American, the poem addresses a new British colonial secretary and embeds a first-person account of her own abduction from Africa.",
        pages: { form: "An ode in heroic couplets addressed to William Legge, the Earl of Dartmouth, on his appointment as Secretary of State for the Colonies — borrowing the form of a conventional political ode to insert a devastating personal testimony.", aboutPoem: ["The poem opens as a conventional celebration of a new colonial secretary that many colonists hoped would protect American freedoms. But in its third stanza, Wheatley pivots: 'Should you, my lord, while you peruse my song, / Wonder from whence my love of Freedom sprung' — and answers with a first-person account of being abducted from Africa as a child.", "That pivot is one of the most quietly devastating maneuvers in eighteenth-century American literature. Wheatley borrows the colonists' own rhetoric of liberty and tyranny and turns it toward her own enslavement, asking the Earl, and the reader, to recognize that the same instinct for freedom animating the American Revolution was present in her heart too — and had been violated in her case far more completely."], historyTitle: "Phillis Wheatley and the Question of Black Intellect", historyParas: ["Phillis Wheatley was kidnapped from West Africa, likely from the Wolof or Fulani people, around 1753 and sold into slavery in Boston at approximately age seven. She was purchased by John and Susanna Wheatley and given access to education — unusual, even exceptional, for an enslaved person — through which she rapidly learned to read and write in English and Latin.", "By her teenage years she was composing sophisticated verse, and she was examined by a panel of eighteen prominent Boston men — including John Hancock — who certified that the poems attributed to her were genuinely hers. That examination was itself a testament to disbelief: the idea that an enslaved African woman could produce accomplished poetry required public proof.", "Her 1773 collection, published in London, was the first book of poetry by an African American and the second by an American woman. It attracted subscribers from both sides of the Atlantic, including George Washington. She was manumitted around the time of its publication, but her freedom came with little material security; she died in poverty in 1784."], sourceUrl: "https://www.poetryfoundation.org/poems/46638/to-the-right-honourable-william-earl-of-dartmouth", sourceDomain: "poetryfoundation.org", excerpt: "Hail, happy day, when, smiling like the morn,\nFair Freedom rose New-England to adorn:\nThe northern clime beneath her genial ray,\nDartmouth, congratulates thy blissful sway.\n\nShould you, my lord, while you peruse my song,\nWonder from whence my love of Freedom sprung,\nWhence flow these wishes for the common good,\nBy feeling hearts alone best understood,\nI, young in life, by seeming cruel fate\nWas snatch'd from Afric's fancy'd happy seat." } },
      { title: "Bury Me in a Free Land", author: "Frances E. W. Harper", year: "1858",
        bio: "Frances E. W. Harper was a free-born Black abolitionist and poet who became one of the most widely read Black poets of the 19th century, publishing widely in abolitionist newspapers.",
        context: "Written for The Anti-Slavery newspaper as the nation hurtled toward civil war, one year after the Dred Scott decision denied Black Americans any standing as citizens.",
        pages: { form: "A lyric of six quatrains in alternating rhyme, organized around one speaker's final wish — not a monument, but a grave in a land where no one can be enslaved.", aboutPoem: ["The poem is built on a negative space: not what the speaker wants but what she cannot endure. Each stanza imagines a different nightmare that would make even death restless — the sound of a slave coffle, a child torn from her mother, the bay of bloodhounds. These are not abstractions; they are documented, daily sounds of slavery that Harper and her readers would have known.", "Harper's choice of short, plain quatrains was deliberate. She published frequently in abolitionist papers and on the lecture circuit, and her poems were written to be carried by voice and memory. The simplicity is the argument: there is nothing complicated about wanting to rest in a world without slavery."], historyTitle: "Frances Harper and the Anti-Slavery Press", historyParas: ["Frances Ellen Watkins Harper was born free in Baltimore in 1825, orphaned young, and educated by an uncle who ran a school for free Black children. She became one of the most in-demand speakers on the anti-slavery circuit, able to draw large crowds and move audiences to tears with her combination of oratory and verse.", "This poem appeared in The Anti-Slavery newspaper in 1858, three years after the Fugitive Slave Act of 1850 had made the terror of recapture a reality even in the free North, and one year after the Supreme Court's Dred Scott decision declared that Black Americans held no rights that white Americans were bound to respect.", "Harper would continue writing through the Civil War, Reconstruction, and into the twentieth century. Her 1892 novel Iola Leroy was one of the first novels published by an African American woman in the United States. She worked alongside Frederick Douglass in the anti-slavery cause and later aligned with women's suffrage while insisting that the rights of Black women could not be separated from either racial or gender justice."], sourceUrl: "https://www.poetryfoundation.org/poems/154190/bury-me-in-a-free-land", sourceDomain: "poetryfoundation.org", excerpt: "Make me a grave where'er you will,\nIn a lowly plain, or a lofty hill;\nMake it among earth's humblest graves,\nBut not in a land where men are slaves.\n\nI could not rest if around my grave\nI heard the steps of a trembling slave;\nHis shadow above my silent tomb\nWould make it a place of fearful gloom.\n\nI could not rest if I heard the tread\nOf a coffle gang to the shambles led,\nAnd the mother's shriek of wild despair\nRise like a curse on the trembling air." } },
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
    name: "Reconstruction Era", years: "1865 – 1877",
    wall: "linear-gradient(160deg, #55401f, #332512)",
    color1: "#6b4a23", color2: "#3a2810",
    blurb: "Verse from the brief window of Black citizenship and political power after emancipation — before the Compromise of 1877 withdrew federal troops from the South and dismantled those gains.",
    books: [
      { title: "Learning to Read", author: "Frances E. W. Harper", year: "1872",
        bio: "Harper continued writing after emancipation, becoming a leading voice on Black literacy, education, and civic participation during Reconstruction.",
        context: "Published as the Freedmen's Bureau ran thousands of schools for formerly enslaved people and the 15th Amendment (1870) granted Black men the vote — gains that would be rolled back after the Compromise of 1877 ended Reconstruction.",
        pages: { form: "A Poem · from Sketches of Southern Life, 1872", aboutPoem: ["Written in first-person dialect as \"Aunt Chloe,\" a recurring character Harper created for a formerly enslaved narrator, the poem recounts the resourceful, often hidden ways Black people found to teach themselves and each other to read despite laws and customs designed to keep them illiterate.", "It then follows Chloe into freedom after the Civil War, where, even in old age, she sets out to finally learn to read for herself — treating literacy not just as a skill but as a form of independence and dignity that had long been deliberately withheld."], historyTitle: "Aunt Chloe & Reconstruction", historyParas: ["Frances Ellen Watkins Harper wrote \"Learning to Read\" as part of Sketches of Southern Life, a collection built around the voice of Aunt Chloe, a formerly enslaved woman reflecting on slavery, emancipation, and the early years of Reconstruction.", "Throughout the antebellum South, teaching enslaved people to read was illegal in most states, a policy enforced precisely because literacy was understood, by enslavers and the enslaved alike, as a path toward independent thought and resistance.", "Harper herself was a committed advocate for freedmen's education after the Civil War, traveling extensively through the South to speak and organize on behalf of newly emancipated communities, work that directly informed the character and voice of Aunt Chloe."], sourceUrl: "https://www.poetryfoundation.org/poems/52448/learning-to-read-56d230ed0fdc0", sourceDomain: "poetryfoundation.org", excerpt: "Very soon the Yankee teachers\nCame down and set up school;\nBut, oh! how the Rebs did hate it,—\nIt was agin' their rule.\n\nOur masters always tried to hide\nBook learning from our eyes;\nKnowledge didn't agree with slavery—\n'Twould make us all too wise.\n\nBut some of us would try to steal\nA little from the book,\nAnd put the words together,\nAnd learn by hook or crook." } },
      { title: "The Triumph of Liberty", author: "James Madison Bell", year: "1870",
        bio: "James Madison Bell was an abolitionist poet, close friend of John Brown, and commemorative orator who wrote long celebratory odes marking each milestone of Black freedom — emancipation, citizenship, and the right to vote.",
        context: "Written in 1870 to celebrate the ratification of the 15th Amendment, which granted Black men the right to vote — a milestone Bell frames as the culmination of a decade of war and legislation.",
        pages: { form: "A long commemorative ode in rhymed couplets and quatrains, tracing the decade from John Brown's 1859 raid through emancipation to the 15th Amendment, framing each step as a stage in Liberty's triumphant ascent.", aboutPoem: ["Bell writes as a witness to history — a poet who had known John Brown personally and lived through the preceding decade's reversals and hard-won victories. The poem moves through set pieces: slavery's hold on the nation, the reluctance to arm Black soldiers, Lincoln's leadership, and the amendment he sees as completing freedom's 'temple.'", "Unlike the short lyric forms favored by many contemporaries, Bell's long commemorative odes were written for public occasions and designed to be read aloud at celebrations. His verse is explicitly political: it honors specific people, names specific legislation, and treats law and war as the proper subjects of poetry."], historyTitle: "The 15th Amendment and Black Political Power", historyParas: ["The 15th Amendment, ratified on February 3, 1870, prohibited the federal and state governments from denying the right to vote based on 'race, color, or previous condition of servitude.' For Black Americans and their allies, it represented the culmination of a legal and political revolution — coming five years after emancipation and two years after the 14th Amendment's guarantee of citizenship.", "James Madison Bell was a close collaborator of John Brown, participating in planning sessions for the Harper's Ferry raid in 1859. After the Civil War he became known for long commemorative poems on emancipation and Reconstruction, performed at public celebrations in Black communities across the North.", "The optimism of Bell's poem would prove tragically premature. The Compromise of 1877 effectively ended Reconstruction, withdrawing federal troops from the South and enabling a systematic campaign of voter suppression and disenfranchisement to undo the political gains Black men had briefly enjoyed. The 15th Amendment remained law for nearly a century while the conditions it was meant to address continued unchallenged."], sourceUrl: "https://poets.org/poem/triumph-liberty", sourceDomain: "poets.org", excerpt: "One decade back and every eye\nThat scann'd us closely saw the lie,\nAnd turned from our spread banner's face\nTo men in chains, and cried disgrace.\n\nBut changes of the recent past\nHave swept our theories away,\nAnd crowned with wonders unsurpassed\nThe radiant glories of to-day.\n\nThe ballot's in the black man's hand;\nPromotion waits him at his door,\nAnd peace and plenty crown our land,\nAnd freedom reigns from shore to shore." } },
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
    name: "Post-Reconstruction Era", years: "1877 – 1917",
    wall: "linear-gradient(160deg, #5a3a18, #2e1c0a)",
    color1: "#7a5228", color2: "#3a2610",
    blurb: "Verse written under Jim Crow's tightening grip — as Reconstruction's gains were systematically undone and Black writers forged new voices of endurance, protest, and dignity.",
    books: [
      { title: "We Wear the Mask", author: "Paul Laurence Dunbar", year: "1895",
        bio: "Paul Laurence Dunbar was the first Black American poet to gain national literary fame, writing in both standard English and dialect verse.",
        context: "Published as Jim Crow laws hardened across the South following Reconstruction's collapse, one year before Plessy v. Ferguson (1896) constitutionalized 'separate but equal' segregation.",
        pages: { form: "A Rondeau · from Lyrics of Lowly Life, 1896", aboutPoem: ["The poem is a rondeau, a tightly patterned French form built on a repeating refrain, and Dunbar uses that repetition to circle back, again and again, to a single extended metaphor: the smiling mask that hides pain from a world uninterested in seeing past it.", "Written in the collective \"we,\" it describes the exhausting labor of performing cheerfulness while carrying private suffering, briefly letting the mask slip with a cry near the poem's center before it is deliberately put back in place by its final line."], historyTitle: "Paul Laurence Dunbar", historyParas: ["Paul Laurence Dunbar was born in Dayton, Ohio in 1872 to parents who had both been enslaved before the Civil War. He became the first African American poet to achieve wide national literary fame, championed early on by the influential critic William Dean Howells.", "Much of Dunbar's fame during his lifetime rested on poems written in Black dialect, which white audiences of the era often preferred, while Dunbar himself felt constrained by that expectation and also wrote extensively in standard English, as he does here.", "This poem appeared in his 1896 collection Lyrics of Lowly Life, and it's frequently cited by scholars as his finest and most enduring work — a poem that can be read as a private meditation on grief, and just as easily as a wider statement about the performance of composure demanded of Black Americans in the post-Reconstruction era.", "Dunbar died in 1906 at only thirty-three, after years of declining health, but his body of work made him one of the most widely read American poets of his generation."], sourceUrl: "https://www.poetryfoundation.org/poems/44203/we-wear-the-mask", sourceDomain: "poetryfoundation.org", excerpt: "We wear the mask that grins and lies,\nIt hides our cheeks and shades our eyes,—\nThis debt we pay to human guile;\nWith torn and bleeding hearts we smile,\nAnd mouth with myriad subtleties.\n\nWhy should the world be over-wise,\nIn counting all our tears and sighs?\nNay, let them only see us, while\n       We wear the mask.\n\nWe smile, but, O great Christ, our cries\nTo thee from tortured souls arise.\nWe sing, but oh the clay is vile\nBeneath our feet, and long the mile;\nBut let the world dream otherwise,\n       We wear the mask!" } },
      { title: "The Ethiopian's Song", author: "Fenton Johnson", year: "1913",
        bio: "Fenton Johnson was a Chicago poet and journalist who drew on African American folk traditions and urban experience, anticipating the Harlem Renaissance with his break from Victorian conventions.",
        context: "Written during the early Jim Crow era as the Great Migration began bringing millions of Black Southerners to Northern cities, and race riots and legal segregation defined everyday life.",
        pages: { form: "A brief lyric in two parallel sections, each opening 'Where I go' — an incantation of place and movement — before pivoting to a sovereign declaration of contentment and identity.", aboutPoem: ["In a period when much Black poetry was expected to address slavery's legacy or protest racial violence, 'The Ethiopian's Song' takes a deliberately different angle. Its speaker claims an interior sovereignty — 'I, the Lord of sweet content' — refusing the role of supplicant or victim. The magnolias, jonquils, and ivy are landscape details, but also a claimed territory, a world the speaker inhabits on his own terms.", "Fenton Johnson's short lyrics anticipate qualities central to the Harlem Renaissance: directness of voice, refusal of performance, and the insistence that Black interiority had its own worth independent of its relationship to white society. Johnson himself remained relatively unknown, but his work circulated in the journals that would later feed the Renaissance."], historyTitle: "Fenton Johnson and the Pre-Harlem Black Press", historyParas: ["Fenton Johnson was born in Chicago in 1888 into a prosperous Black family and educated at the University of Chicago. He published in influential journals including Poetry and Others alongside the early modernists, making him one of the few Black writers of his generation to appear in mainstream literary magazines alongside white contemporaries.", "His career took place during the years of the most intense Jim Crow violence — including the Springfield, Illinois race riot of 1908 and the beginnings of the Great Migration — and yet his poems often refused the documentation of racial terror that many readers and editors expected from Black writers.", "He is now regarded as a significant transitional figure between the nineteenth-century tradition of protest poetry and the Harlem Renaissance's more expansive artistic program, anticipating the Renaissance's range and its insistence that Black literature could be more than a record of grievance."], sourceUrl: "https://www.poetryfoundation.org/poets/fenton-johnson", sourceDomain: "poetryfoundation.org", excerpt: "Where I go the lily blooms,\nWhere I go the ivy climbs;\nAll the earth is slave to me,\nAll the orbs are merry chimes.\nWhite man longs to rule the world;\nI am happy where I am,—\nI, the Lord of sweet content.\n\nWhere I go magnolias dance,\nWhere I go the jonquils prance;\nStrength and might and power are mine,\nSong and cheer my freedom's lance.\nLet Ambition die her death;\nI am happy where I am,—\nI, the Lord of sweet content." } },
      { title: "The Colored Soldiers", author: "Paul Laurence Dunbar", year: "1896",
        bio: "Paul Laurence Dunbar was the first Black American poet to achieve national literary fame, writing verse in both standard English and dialect that captured the full range of Black life in the post-Reconstruction South.",
        context: "Written as Black veterans of the Civil War were being stripped of political rights under Jim Crow — the men who fought to save the Union now denied the citizenship that Union victory had promised.",
        pages: { form: "A commemorative ode in rhymed quatrains, honoring Black Union soldiers and charging the nation with honoring its debt to them — written in formal standard English, claiming the register appropriate to men who died for their country.", aboutPoem: ["Dunbar's poem is a form of public witness, naming what Black soldiers did and demanding the nation remember it. He traces their presence from Lexington and Bunker Hill through the Civil War's darkest battles, ending by calling on 'Columbia' to live up to the loyalty of the men she called on in her hour of need.", "The poem's power comes partly from its setting in 1896, the year Plessy v. Ferguson constitutionalized 'separate but equal' and confirmed that the nation had no intention of honoring that debt. Writing a formal ode to Black military service in this moment is itself an act of counter-history: insisting the record be seen."], historyTitle: "Black Soldiers and the Betrayal of Reconstruction", historyParas: ["Black men fought in the Civil War in segregated units known as the United States Colored Troops, comprising nearly 180,000 soldiers by the war's end. They fought under white officers, were paid less than white soldiers for most of the war, and faced execution rather than prisoner-of-war status if captured — and yet served with documented valor in dozens of major engagements.", "After the war, Black veterans returned to a country already rolling back the promises of emancipation. By the time Dunbar wrote this poem in 1896, the Supreme Court had just ruled in Plessy v. Ferguson that racial segregation was constitutional, and the systematic disenfranchisement of Black voters across the South was well underway.", "The figure of the Black soldier — who had proved his manhood and patriotism under fire only to be denied citizenship — became one of the central contested images of post-Reconstruction Black writing, deployed by poets, novelists, and orators as evidence of a nation's broken promise."], sourceUrl: "https://poets.org/poem/colored-soldiers", sourceDomain: "poets.org", excerpt: "If the muse were mine to tempt it\nAnd my feeble voice were strong,\nAll the world should ring with the praises\nOf the service of the song;\n\nFor the men who did the fighting\nWith a faith serene and strong,\nWho have shouldered gun and knapsack\nWhere the ways were hard and long,\n\nFor the men who bore their burden\nIn the heat and rain and cold,\nFor the men who marched to glory\nThrough the blood and mire and cold." } },
    ],
    art: { title: "The Banjo Lesson", artist: "Henry Ossawa Tanner", year: "1893",
      style: "linear-gradient(160deg, #5c4a2e 0%, #8c7a4a 35%, #c4a870 60%, #3a2810 100%)",
      bio: "Henry Ossawa Tanner was the most celebrated Black American visual artist of the post-Reconstruction era, achieving international recognition through meticulous figurative paintings of biblical scenes and everyday Black life.",
      context: "Painted in Philadelphia before Tanner relocated to Paris to escape American racism, 'The Banjo Lesson' depicts an elderly man teaching a young boy to play, representing Black mentorship and cultural transmission as a form of dignity that Jim Crow could not erase.",
      medium: "Oil on canvas", dimensions: "49 × 35½ in. (124.5 × 90.2 cm)", institution: "Hampton University Museum, Hampton, Virginia", link: "https://artincontext.org/the-banjo-lesson-painting-henry-ossawa-tanner/", img: imgBanjoLesson,
      artPages: {
        aboutWork: ["'The Banjo Lesson' shows an elderly man and a small boy, seated together, the man's hands guiding the boy's fingers on the strings of a banjo. The light is warm and interior, pooling around the two figures in a way that recalls the Dutch Golden Age masters Tanner had studied closely. There is nothing sentimental about the image; it is quiet, concentrated, serious — a record of knowledge passing between generations.", "The painting is frequently read as a counter-image to the minstrel tradition that used the banjo as a prop for racial caricature. Tanner refuses caricature entirely: his figures are individualized, absorbed, dignified. The banjo in his painting is a cultural inheritance, not a joke."],
        aboutArtist: ["Henry Ossawa Tanner (1859–1937) was born in Pittsburgh to a bishop of the African Methodist Episcopal Church and a formerly enslaved mother. He studied at the Pennsylvania Academy of Fine Arts under Thomas Eakins, one of America's leading realists, and later traveled to Paris, where he would spend most of his adult life.", "He is the only Black American artist to have been elected to the National Academy of Design in his lifetime. He won international prizes and exhibited widely in Europe and the United States, achieving a level of institutional recognition that no other Black American artist of his generation reached.", "He relocated to Paris in 1891 partly to escape the constant racial hostility he faced in the United States, where galleries that admired his work still declined to exhibit it alongside white artists. His Paris studio became a gathering place for Black American artists and intellectuals passing through Europe."],
        contextParas: ["'The Banjo Lesson' was completed in 1893, the same year as the World's Columbian Exposition in Chicago — an exhibition that celebrated American progress while hosting a parallel 'Colored People's Day' in a gesture of condescension. Frederick Douglass and Ida B. Wells responded by distributing a pamphlet titled 'The Reason Why the Colored American Is Not in the World's Columbian Exposition.'", "Tanner painted this work during the height of the 'nadir' — the term historian Rayford Logan used for the period from roughly 1877 to 1920 when anti-Black violence, legal disenfranchisement, and systematic economic exclusion reached their post-Reconstruction peak. The painting's insistence on interiority, warmth, and cultural transmission in that context is itself an argument."]
      } },
    timeline: [
      { year: "1877", type: "milestone", title: "Compromise of 1877", desc: "Federal troops withdrawn from the South, ending Reconstruction and enabling the systematic rollback of Black political and civil rights." },
      { year: "1896", type: "court", title: "Plessy v. Ferguson", desc: "Supreme Court upheld racial segregation under the 'separate but equal' doctrine, constitutionalizing Jim Crow for the next six decades." },
      { year: "1898", type: "riot", title: "Wilmington Massacre", desc: "White supremacists violently overthrew the elected Fusionist government of Wilmington, North Carolina, killing dozens of Black residents and destroying the city's Black-owned newspaper." },
      { year: "1909", type: "organization", title: "NAACP Founded", desc: "The National Association for the Advancement of Colored People formed to fight for civil rights through legal action and advocacy." },
      { year: "1910s", type: "milestone", title: "The Great Migration Begins", desc: "Millions of Black Americans began leaving the rural South for Northern and Midwestern cities, seeking work and escape from racial terror." },
    ],
    panelEvents: [
      { year: "1898", type: "legislation", title: "Louisiana Grandfather Clause", desc: "Louisiana adopted a 'grandfather clause' that effectively disenfranchised Black voters while exempting white voters from new literacy and property tests — a model soon copied across the South." },
      { year: "1906", type: "riot", title: "Atlanta Race Massacre", desc: "White mobs attacked Black residents of Atlanta over four days, killing dozens and destroying Black-owned businesses." },
      { year: "1915", type: "organization", title: "Second Ku Klux Klan Founded", desc: "The second Klan, inspired by the film 'Birth of a Nation,' was founded in Georgia and grew to millions of members nationwide by the 1920s." },
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
      { title: "Harlem", author: "Langston Hughes", year: "1951",
        bio: "Langston Hughes was the central voice of the Harlem Renaissance, whose poetry fused jazz, blues, and everyday Black speech into a new American literary language.",
        context: "Written as postwar prosperity bypassed Black veterans and communities, while the legal foundations of the civil rights movement were beginning to be laid — and Black patience with deferred promises was wearing thin.",
        pages: { form: "Eleven lines of free verse built around a single central question — what happens to a dream deferred — and five possible answers, escalating from quiet decay to the final explosive suggestion of violence.", aboutPoem: ["The poem is structured as a question and a series of similes, each one more corrosive than the last: a raisin drying in the sun, a festering sore, rotten meat, a sugary crust. Hughes arranges them in ascending order of damage — from simple decay to the threat of explosion — and leaves the explosion as the final possibility, not quite a prediction but not quite a metaphor either.", "Written as part of the longer sequence Montage of a Dream Deferred, it functions as that work's compressed center: the twelve words of the title question hold an entire history of broken promises, while the final line asks whether patience has any limit at all."], historyTitle: "The Dream Deferred: Black Urbanization After World War II", historyParas: ["'Harlem' appeared in 1951, in the sequence Montage of a Dream Deferred, written against the backdrop of Black World War II veterans returning home to find their service had not altered their second-class citizenship. The GI Bill, which funded education and homeownership for returning soldiers, was administered in ways that largely excluded Black veterans, concentrating postwar prosperity in white communities.", "The 'dream deferred' carried specific historical weight: the promise of equality enshrined in the Declaration of Independence and expanded by the post-Civil War Amendments — a promise consistently deferred by law, violence, and custom since Reconstruction ended in 1877.", "The poem's final question — 'Or does it explode?' — proved both prophetic and diagnostic. The urban uprisings of the 1960s in Watts, Newark, and Detroit would be read by many through exactly the framework Hughes had constructed fifteen years earlier: a question about how long deferred dreams could be postponed before they became something else entirely."], sourceUrl: "https://www.poetryfoundation.org/poems/46548/harlem", sourceDomain: "poetryfoundation.org", excerpt: "What happens to a dream deferred?\n\n      Does it dry up\n      like a raisin in the sun?\n      Or fester like a sore—\n      And then run?\n      Does it stink like rotten meat?\n      Or crust and sugar over—\n      like a syrupy sweet?\n\n      Maybe it just sags\n      like a heavy load.\n\n      Or does it explode?" } },
      { title: "Yet Do I Marvel", author: "Countee Cullen", year: "1925",
        bio: "Countee Cullen was a major Harlem Renaissance poet whose formally rigorous, traditionally structured verse engaged questions of race, identity, and faith while maintaining classical European poetic conventions.",
        context: "Published during the height of the Harlem Renaissance, as Black artists and intellectuals debated whether to work within or against European literary traditions to assert a distinctly Black cultural identity.",
        pages: { form: "A Shakespearean sonnet — fourteen lines in iambic pentameter with a concluding couplet — that borrows the most canonical European poem type to hold a question about why God would make a Black poet and command him to sing.", aboutPoem: ["Cullen opens by listing puzzles he accepts without requiring God to explain them: why the mole is blind, why flesh dies, why Tantalus is baited with fruit he cannot reach, why Sisyphus pushes his stone forever. These are classical theodicy problems, borrowed from mythology, and Cullen places them in a sonnet form that signals mastery of the European tradition.", "Then the final couplet lands: 'Yet do I marvel at this curious thing: / To make a poet black, and bid him sing!' The compression of that last line — a whole argument about race, art, and American society packed into ten syllables — is what has made the poem endure. If God makes inexplicable things that humans must accept, then being a Black poet in America is just one more inscrutable given: difficult, unjustified, and commanded nonetheless."], historyTitle: "Countee Cullen and the Harlem Renaissance Debate", historyParas: ["Countee Cullen was born in 1903 and raised in Harlem, where his adoptive father was a Methodist minister. He studied at New York University and Harvard, and by the mid-1920s was one of the most celebrated young poets in America, winning prizes from The Crisis and Opportunity magazines and from mainstream literary competitions.", "His preference for traditional poetic forms — the sonnet, the ode, the ballad — put him in ongoing creative tension with Langston Hughes, who championed free verse, blues rhythms, and everyday Black speech. The debate between them became a public discussion about what Black American poetry should sound like and who it was for.", "Cullen insisted that a Black poet was, first and foremost, a poet — that the formal traditions of English and American poetry were available to him and worth mastering. His critics argued that this approach reproduced European values as the default standard. That disagreement, never fully resolved, continues in discussions of Black literary aesthetics today."], sourceUrl: "https://www.poetryfoundation.org/poems/43434/yet-do-i-marvel", sourceDomain: "poetryfoundation.org", excerpt: "I doubt not God is good, well-meaning, kind,\nAnd did He stoop to quibble could tell why\nThe little buried mole continues blind,\nWhy flesh that mirrors Him must some day die,\nMake plain the reason tortured Tantalus\nIs baited by the fickle fruit, declare\nIf merely brute caprice dooms Sisyphus\nTo struggle up a never-ending stair.\nInscrutable His ways are, and immune\nTo catechism by a mind too strewn\nWith petty cares to slightly understand\nWhat awful brain compels His awful hand.\nYet do I marvel at this curious thing:\nTo make a poet black, and bid him sing!" } },
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
      { title: "For My People", author: "Margaret Walker", year: "1942",
        bio: "Margaret Walker was a poet and novelist who was among the first Black writers to win a major literary prize when her poetry collection won the Yale Younger Poets competition in 1942.",
        context: "Written during World War II as Black Americans confronted the contradiction of fighting for democracy abroad while living under Jim Crow at home — the 'Double V Campaign' named it explicitly: victory over fascism, and victory over racism.",
        pages: { form: "Ten stanzas of free verse, each beginning 'For my people' or 'For my playmates' or 'Let' — a liturgical anaphora that builds like a preacher's invocation, ending with a declaration and a blessing rather than a plea.", aboutPoem: ["Walker builds the poem as a series of witness statements, each beginning 'For my people' and cataloguing a different aspect of Black life: the labor, the praying, the playing, the confusion, the grief. The accumulation is the argument: this is an entire people's history, too large and too various to reduce to a single story.", "The final stanza breaks the pattern, shifting from description to demand: 'Let a new earth rise.' The liturgical tone that has built through the poem's repetitions now delivers a blessing and a command simultaneously — this is not a poem of grievance but of consecration, anointing its subjects as worthy of the world they have not yet been allowed to inhabit."], historyTitle: "Margaret Walker and the Southern Black Literary Tradition", historyParas: ["Margaret Walker was born in Birmingham, Alabama in 1915 and educated at Northwestern University and the University of Iowa, where she earned a Ph.D. Her first poetry collection, For My People, was selected for the Yale Younger Poets series in 1942, making her the first African American to win the prize.", "The poem was originally written in 1937 during the WPA's Federal Writers' Project, the New Deal program that employed writers and intellectuals during the Great Depression. The Federal Writers' Project also commissioned oral history interviews with formerly enslaved people, creating an extraordinary documentary archive.", "Walker spent most of her academic career at Jackson State University in Mississippi, where she founded the Institute for the Study of the History, Life and Culture of Black People. She later wrote the novel Jubilee (1966), based on her great-grandmother's life under slavery, which became one of the most widely read novels of the Black experience in the Civil War era."], sourceUrl: "https://www.poetryfoundation.org/poems/52622/for-my-people", sourceDomain: "poetryfoundation.org", excerpt: "For my people everywhere singing their slave songs\n     repeatedly: their dirges and their ditties and their blues\n     and jubilees, praying their prayers nightly to an\n     unknown god, bending their knees humbly to an\n     unseen power;\n\nFor my people lending their strength to the years, to the\n     gone years and the now years and the maybe years,\n     washing ironing cooking scrubbing sewing mending\n     hoeing plowing digging planting pruning patching\n     dragging along never gaining never reaping never\n     knowing and never understanding." } },
      { title: "A Litany for Survival", author: "Audre Lorde", year: "1978",
        bio: "Audre Lorde was a Black feminist poet and activist who described herself as 'Black, lesbian, mother, warrior, poet.' Her work named the intersecting oppressions of race, gender, and sexuality as inseparable.",
        context: "Published as second-wave feminism fractured along racial lines and Black feminist organizations like the Combahee River Collective were articulating a politics that confronted race, gender, and sexuality simultaneously.",
        pages: { form: "A litany — a prayer form built on repetition and accumulation, traditionally used in liturgical call-and-response — addressed to 'those of us who live at the shoreline,' Lorde's recurring image for people at the margins of multiple communities.", aboutPoem: ["Lorde opens by naming her audience precisely: people who were not meant to survive — by birth, by circumstance, by desire. The litany accumulates, stacking the hazards of Black women's daily lives before pivoting to a declaration that speaking is the only answer to fear, even though speaking 'is never without fear.' The choice, she says, is to speak from fear or to be 'silent and die of it.'", "The poem operates through its liturgical form: the repetition of phrases creates the same effect as call-and-response, building communal recognition through accumulation. It does not argue for survival; it enacts it — performing the act of speaking as the poem's own evidence."], historyTitle: "Black Feminism and the Combahee River Collective", historyParas: ["The Combahee River Collective, a Boston-based Black feminist organization, published its landmark statement in 1977, the year before this poem's publication. The statement argued that the liberation of Black women required simultaneously addressing race, gender, class, and sexuality as 'interlocking' systems of oppression rather than separate issues to be addressed in turn.", "Lorde was part of a generation of Black feminist thinkers — alongside bell hooks, Barbara Smith, and June Jordan — who insisted that mainstream (white) feminism had excluded Black women's experience, and that mainstream (male) Black liberation had excluded Black women's voices. Her 1984 essay collection Sister Outsider became foundational to what would later be called intersectionality.", "The poem's image of the shoreline — a liminal space between two territories, belonging fully to neither — is characteristic of Lorde's recurring figure for the position of those who live at the intersection of multiple marginalities. It is not a comfortable metaphor; it is an accurate one."], sourceUrl: "https://www.poetryfoundation.org/poems/147275/a-litany-for-survival", sourceDomain: "poetryfoundation.org", excerpt: "For those of us who live at the shoreline\nstanding upon the constant edges of decision\ncritical and alone,\nfor those of us who cannot indulge\nthe passing dreams of choice\nwho love in doorways coming and going\nin the hours between dawns\nlooking inward and outward\nat once before and after\nseeking a now that can breed\nfutures\nlike bread in our children's mouths\nso their dreams will not reflect\nthe death of ours." } },
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
  // Top row: 4 eras (Antebellum → Post-Reconstruction → Harlem)
  { left: "0%",   top: "10%", width: "17%", height: "28%", bars: 3, slim: false },
  { left: "19%",  top: "10%", width: "17%", height: "28%", bars: 3, slim: false },
  { left: "38%",  top: "10%", width: "17%", height: "28%", bars: 3, slim: false },
  { left: "57%",  top: "10%", width: "17%", height: "28%", bars: 3, slim: false },
  // Bottom row: 3 eras (Civil Rights → Post-Civil Rights → BLM)
  { left: "0%",   top: "68%", width: "20%", height: "28%", bars: 3, slim: false },
  { left: "25%",  top: "68%", width: "20%", height: "28%", bars: 3, slim: false },
  { left: "50%",  top: "68%", width: "20%", height: "28%", bars: 3, slim: false },
];

// ─── Injected CSS (exact from source) ────────────────────────────────────────
const CSS = `
  .exhibit-root { font-family: Georgia,'Times New Roman',serif; background: #0A0705; color: #e8dfc9; min-height: 100vh; }
  /* ── Perspective navigation ── */
  .persp-wrap { position: fixed; inset: 0; overflow: hidden; background: #0A0705; }
  .persp-topnav { position: absolute; top: 0; left: 0; right: 0; height: 84px; background: rgba(8,4,1,0.99); border-bottom: 1px solid #2A1508; z-index: 20; display: flex; flex-direction: column; }
  .persp-topnav-row1 { display: flex; align-items: center; height: 46px; padding: 0 18px; gap: 12px; border-bottom: 1px solid #1C0C04; flex-shrink: 0; }
  .persp-nav-title { font-size: 0.86rem; letter-spacing: 2.5px; color: #D4AF6A; text-transform: uppercase; white-space: nowrap; font-weight: bold; flex-shrink: 0; font-family: Georgia,serif; }
  .persp-nav-sep { width: 1px; height: 20px; background: #2A1508; flex-shrink: 0; }
  .persp-nav-links { display: flex; gap: 5px; margin-left: auto; flex-shrink: 0; }
  .persp-nav-link { font-size: 0.62rem; letter-spacing: 0.8px; color: #A08040; text-transform: uppercase; cursor: pointer; padding: 6px 12px; border: 1px solid #3A1E08; border-radius: 2px; transition: all 0.15s; font-family: Arial,sans-serif; background: transparent; }
  .persp-nav-link:hover { background: rgba(212,175,106,0.12); color: #D4AF6A; border-color: #6A4820; }
  .persp-nav-eras { display: flex; gap: 2px; overflow-x: auto; scrollbar-width: none; align-items: center; padding: 0 14px; flex: 1; }
  .persp-nav-eras::-webkit-scrollbar { display: none; }
  .persp-nav-era { font-size: 0.6rem; letter-spacing: 0.5px; color: #9A7840; text-transform: uppercase; cursor: pointer; padding: 5px 9px; border-radius: 2px; white-space: nowrap; transition: background 0.15s,color 0.15s; font-family: Arial,sans-serif; background: transparent; border: none; flex-shrink: 0; }
  .persp-nav-era:hover { background: rgba(212,175,106,0.14); color: #D4AF6A; }
  .persp-scene { position: absolute; top: 84px; left: 0; right: 0; bottom: 68px; overflow: hidden; }
  .persp-scene svg { width: 100%; height: 100%; display: block; }
  .persp-bottomnav { position: absolute; bottom: 0; left: 0; right: 0; height: 68px; background: rgba(6,3,0,0.99); border-top: 1px solid #1E1008; z-index: 20; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .persp-arrow-btn { display: flex; align-items: center; gap: 8px; cursor: pointer; color: #9A7840; font-size: 0.68rem; letter-spacing: 1px; text-transform: uppercase; padding: 9px 16px; border: 1px solid #3A1E08; border-radius: 2px; transition: all 0.15s; font-family: Arial,sans-serif; background: transparent; }
  .persp-arrow-btn:hover { color: #D4AF6A; border-color: #6A4820; background: rgba(212,175,106,0.09); }
  .persp-arrow-ghost { opacity: 0; pointer-events: none; }
  .persp-loc-center { text-align: center; }
  .persp-loc-label { color: #7A5A28; font-size: 0.6rem; letter-spacing: 2px; text-transform: uppercase; font-family: Arial,sans-serif; }
  .persp-loc-dots { display: flex; gap: 10px; justify-content: center; margin-top: 7px; }
  .persp-loc-dot { width: 6px; height: 6px; border-radius: 50%; background: #3A2010; transition: background 0.2s; cursor: pointer; border: none; padding: 0; outline: none; }
  .persp-loc-dot-active { background: #D4AF6A; }
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
  // Antebellum: deep reds and burnt siennas
  ["#8B3A2A","#C4832D","#6E4E2A","#A85728","#5C2A18","#8B5728","#D4A04A","#6E3A1C","#9A472A","#B56A2A","#7A3A2A","#C47A35"],
  // Reconstruction: forest greens and blues
  ["#2A5C3A","#7A6914","#5C2A2A","#3A4E2A","#6E4E14","#2A3C5C","#8B7A2A","#4A2A4E","#5C3A2A","#2A5C5C","#8B3A3A","#4A5C2A"],
  // Post-Reconstruction: warm sepia, ochre, and tobacco browns
  ["#8B6B2A","#5C4A20","#A08030","#7A6038","#C4A040","#6E5530","#5C6B20","#A06B2A","#8B7A30","#9A5C20","#C46B30","#7A8B28"],
  // Harlem Renaissance: deep purples and gold
  ["#4A2A6B","#8B6914","#2A1A5C","#6B3A2A","#3A2A6B","#8B4A2A","#4A3A8B","#6B6914","#2A4A6B","#8B2A4A","#4A6B2A","#6B2A6B"],
  // Civil Rights & Black Power: dark navy and crimson
  ["#1A2A4A","#8B1A1A","#2A2A2A","#4A3A1A","#1A4A3A","#8B4A1A","#1A3A4A","#8B8B1A","#4A1A1A","#2A4A2A","#8B2A1A","#1A4A4A"],
  // Post–Civil Rights: indigo and teal
  ["#3A2A5C","#5C3A1A","#1A3A2A","#4A2A3A","#2A2A5C","#5C5C1A","#3A1A4A","#1A4A2A","#5C2A3A","#2A5C3A","#4A4A1A","#3A3A5C"],
  // Black Lives Matter: stark black, red, and gold
  ["#8B1A1A","#1A1A1A","#4A2A1A","#8B5A1A","#1A2A4A","#5A1A1A","#8B8B2A","#2A1A4A","#8B3A1A","#1A4A1A","#5A1A4A","#8B1A4A"],
];

// Gallery paintings — left [0-2], right [3-5], back wall [6]
const GALLERY_ARTS: Array<{ img: string; eraIdx: number }> = [
  { img: galDuncanson,   eraIdx: 0 }, // left near  — Duncanson
  { img: galBannister,   eraIdx: 1 }, // left mid   — Bannister
  { img: galDouglas,     eraIdx: 3 }, // left far   — Douglas
  { img: galRinggold,    eraIdx: 4 }, // right near — Ringgold
  { img: galBasquiat,    eraIdx: 5 }, // right mid  — Basquiat
  { img: galKaphar,      eraIdx: 6 }, // right far  — Kaphar
  { img: imgBanjoLesson, eraIdx: 2 }, // back wall  — Tanner / Banjo Lesson
];

// ─── Perspective Walk-through ─────────────────────────────────────────────────

type PerspScene = "library" | "gallery" | "reading";

function toSVGPts(arr: number[]): string {
  const out: string[] = [];
  for (let i = 0; i < arr.length; i += 2) out.push(`${arr[i]},${arr[i + 1]}`);
  return out.join(" ");
}

// VP = (600, 310). Face coords: [TLx,TLy, BLx,BLy, BRx,BRy, TRx,TRy]
// Left wall: near edge x=0, recedes rightward toward VP
const L_FACES = [
  { era: 0, p: [0,80,   0,640,  240,508, 240,172] },
  { era: 1, p: [240,172, 240,508, 370,437, 370,222] },
  { era: 2, p: [370,222, 370,437, 450,393, 450,253] },
  { era: 3, p: [450,253, 450,393, 490,368, 490,268] },
];
// Right wall: near edge x=1200, recedes leftward toward VP
const R_FACES = [
  { era: 4, p: [960,172, 960,508, 1200,640, 1200,80]  },
  { era: 5, p: [830,222, 830,437, 960,508,  960,172]  },
  { era: 6, p: [750,253, 750,393, 830,437,  830,222]  },
];

function ShelfFace({ fd, onEnterEra }: { fd: { era: number; p: number[] }; onEnterEra: (i: number) => void }) {
  const [hov, setHov] = useState(false);
  const [tlx, tly, blx, bly, brx, bry, trx, trY] = fd.p;
  const era = eras[fd.era];
  const colors = ERA_BOOK_COLORS[fd.era];
  const xMin = Math.min(tlx, trx), xMax = Math.max(tlx, trx);
  const fw = xMax - xMin;
  // Limit visible books to what fits without looking crushed
  const N = Math.max(3, Math.min(colors.length, Math.floor(fw / 7)));
  const cid = `pbc${fd.era}`;
  const cx = (xMin + xMax) / 2;
  const topAvgY = (tly + trY) / 2 + 14;
  const shelfFracs = [0, 0.3, 0.62, 1];
  const boardW = Math.max(4, Math.min(16, fw * 0.055));
  const midW = Math.max(2, Math.min(10, fw * 0.038));

  return (
    <g style={{ cursor: "pointer" }} onClick={() => onEnterEra(fd.era)}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <defs>
        <clipPath id={cid}>
          <polygon points={toSVGPts(fd.p)} />
        </clipPath>
      </defs>
      {/* Dark wood back */}
      <polygon points={toSVGPts(fd.p)} fill="#1A0D05" />
      {/* Colored book spines, clipped to face shape */}
      <g clipPath={`url(#${cid})`}>
        {colors.slice(0, N).map((col, i) => (
          <rect key={i} x={xMin + fw * (i / N)} y={0} width={Math.max(1.5, fw / N - 1)} height={700} fill={col} />
        ))}
        {/* Shelf boards — scaled to face width */}
        {shelfFracs.map((f, si) => (
          <line key={si}
            x1={tlx} y1={tly + (bly - tly) * f}
            x2={trx} y2={trY + (bry - trY) * f}
            stroke="#0A0502" strokeWidth={si === 0 || si === 3 ? boardW : midW} />
        ))}
        {/* Header strip */}
        <polygon
          points={toSVGPts([tlx, tly, trx, trY, trx, trY + (bry - trY) * 0.13, tlx, tly + (bly - tly) * 0.13])}
          fill="rgba(5,2,0,0.88)" />
      </g>
      {/* Hover highlight */}
      {hov && <polygon points={toSVGPts(fd.p)} fill="rgba(212,175,106,0.11)" />}
      {/* Era label */}
      {fw >= 40 && (
        <text x={cx} y={topAvgY} textAnchor="middle" fill="#D4AF6A"
          fontSize={Math.min(13, Math.max(5.5, fw * 0.052))}
          fontFamily="Georgia,'Times New Roman',serif" fontWeight="bold"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {fw >= 80 ? era.name.toUpperCase() : era.years}
        </text>
      )}
      {fw >= 90 && (
        <text x={cx} y={topAvgY + 14} textAnchor="middle" fill="#8A6A30"
          fontSize={Math.min(9, Math.max(5, fw * 0.028))}
          fontFamily="Georgia,'Times New Roman',serif"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {era.years}
        </text>
      )}
    </g>
  );
}

function LibraryScene({ onEnterEra, onNavRight, onNavReading }: { onEnterEra: (i: number) => void; onNavRight: () => void; onNavReading: () => void }) {
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="lib-vign" cx="50%" cy="50%" r="70%">
          <stop offset="15%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.82)" />
        </radialGradient>
        <radialGradient id="lib-ceil" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="rgba(210,165,70,0.22)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="lib-floor" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="rgba(155,108,38,0.3)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="lib-door" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(240,190,80,0.95)" />
          <stop offset="55%" stopColor="rgba(180,130,50,0.55)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="lib-door-read" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(180,220,255,0.75)" />
          <stop offset="55%" stopColor="rgba(100,160,220,0.38)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="1200" height="700" fill="#0C0703" />

      {/* Ceiling */}
      <polygon points="0,0 1200,0 710,252 490,252" fill="#130A03" />
      {[180,350,500,650,820,1020].map((x, i) => (
        <line key={i} x1={x} y1={0} x2={600} y2={310} stroke="#1C1008" strokeWidth="1.3" opacity="0.65" />
      ))}
      {/* Ceiling panels */}
      {[[80,200],[220,380],[350,520],[480,640]].map(([ya,yb],i) => {
        const fA = (ya/252), fB = (yb/252);
        const xl = 490 * fA, xr = 1200 - 490 * fA;
        const xlb = 490 * fB, xrb = 1200 - 490 * fB;
        return <polygon key={i} points={`${xl},${ya} ${xr},${ya} ${xrb},${yb} ${xlb},${yb}`} fill="none" stroke="#1A0E06" strokeWidth="1" opacity="0.5" />;
      })}
      <ellipse cx="600" cy="0" rx="420" ry="290" fill="url(#lib-ceil)" style={{ pointerEvents: "none" }} />

      {/* Floor — warm oak planks */}
      <polygon points="0,700 1200,700 710,390 490,390" fill="#6B4D1A" />
      {[652,604,560,520,484,454,430,410,396].map((y, i) => {
        const t = (700 - y) / 310;
        return <line key={i} x1={490 * t} y1={y} x2={1200 - 490 * t} y2={y} stroke="#5A3E12" strokeWidth="1.3" />;
      })}
      {[100,240,380,520,680,820,960,1100].map((xN, i) => (
        <line key={i} x1={xN} y1={700} x2={600} y2={392} stroke="#5A3E12" strokeWidth="0.9" opacity="0.5" />
      ))}
      <rect x="240" y="390" width="720" height="310" fill="url(#lib-floor)" style={{ pointerEvents: "none" }} />

      {/* Wall strips above/below shelves */}
      <polygon points="0,0 0,80 490,268 490,252" fill="#140C03" />
      <polygon points="0,640 0,700 490,390 490,372" fill="#140C03" />
      <polygon points="1200,0 1200,80 710,268 710,252" fill="#140C03" />
      <polygon points="1200,640 1200,700 710,390 710,372" fill="#140C03" />

      {/* Bookshelves */}
      {L_FACES.map((f, i) => <ShelfFace key={i} fd={f} onEnterEra={onEnterEra} />)}
      {R_FACES.map((f, i) => <ShelfFace key={i + 4} fd={f} onEnterEra={onEnterEra} />)}

      {/* Far wall */}
      <rect x="490" y="252" width="220" height="138" fill="#1E1207" />

      {/* Glowing doorway → Gallery (left door) */}
      <g style={{ cursor: "pointer" }} onClick={onNavRight}>
        <ellipse cx="554" cy="332" rx="62" ry="90" fill="url(#lib-door)" />
        <rect x="510" y="282" width="88" height="108" rx="5" fill="#2C1A08" />
        <rect x="516" y="288" width="76" height="98" rx="3" fill="rgba(230,180,70,0.20)" />
        <rect x="521" y="292" width="66" height="90" rx="2" fill="rgba(240,190,80,0.09)" />
        <path d="M510,308 Q554,264 598,308" fill="none" stroke="#5A3A14" strokeWidth="2.5" />
        <text x="554" y="408" textAnchor="middle" fill="#9A7A38"
          fontSize="7.5" fontFamily="Arial,sans-serif" letterSpacing="1.6">GALLERY ›</text>
      </g>

      {/* Glowing doorway → Reading Room (right door) */}
      <g style={{ cursor: "pointer" }} onClick={onNavReading}>
        <ellipse cx="648" cy="332" rx="62" ry="90" fill="url(#lib-door-read)" />
        <rect x="604" y="282" width="88" height="108" rx="5" fill="#111C2A" />
        <rect x="610" y="288" width="76" height="98" rx="3" fill="rgba(160,200,255,0.14)" />
        <rect x="615" y="292" width="66" height="90" rx="2" fill="rgba(180,210,255,0.07)" />
        <path d="M604,308 Q648,264 692,308" fill="none" stroke="#2A3C5A" strokeWidth="2.5" />
        <text x="648" y="400" textAnchor="middle" fill="#7090B8"
          fontSize="6.2" fontFamily="Arial,sans-serif" letterSpacing="1.1">READING</text>
        <text x="648" y="410" textAnchor="middle" fill="#7090B8"
          fontSize="6.2" fontFamily="Arial,sans-serif" letterSpacing="1.1">ROOM ›</text>
      </g>

      {/* Vignette */}
      <rect width="1200" height="700" fill="url(#lib-vign)" style={{ pointerEvents: "none" }} />
    </svg>
  );
}

// Gallery wall painting helper (left wall VP geometry)
function lWallPt(x: number, f: number): [number, number] {
  const top = 80 + 188 * (x / 600);
  const bot = 640 - 250 * (x / 600);
  return [x, top + (bot - top) * f];
}
function rWallPt(x: number, f: number): [number, number] {
  const top = 80 + 188 * ((1200 - x) / 600);
  const bot = 640 - 250 * ((1200 - x) / 600);
  return [x, top + (bot - top) * f];
}
function wallPoly(pts: [number, number][]): string {
  return pts.map(p => p.join(",")).join(" ");
}

const ART_SVG = [
  // 0 Antebellum — concentric rings/sunset
  <g key="a0"><rect width="60" height="44" fill="#2c1a0a"/><ellipse cx="30" cy="22" rx="26" ry="18" fill="none" stroke="#8B3A2A" strokeWidth="5" opacity="0.7"/><ellipse cx="30" cy="22" rx="17" ry="11" fill="none" stroke="#C4832D" strokeWidth="3.5" opacity="0.8"/><ellipse cx="30" cy="22" rx="9" ry="5" fill="#D4A04A" opacity="0.7"/><circle cx="30" cy="22" r="2.5" fill="#D4A04A"/></g>,
  // 1 Reconstruction — geometric fields
  <g key="a1"><rect width="60" height="44" fill="#0e1f14"/><rect x="6" y="6" width="20" height="32" fill="#2A5C3A" opacity="0.85"/><rect x="16" y="10" width="28" height="24" fill="#3A4E2A" opacity="0.7"/><rect x="32" y="8" width="20" height="28" fill="#2A3C5C" opacity="0.8"/><rect x="10" y="18" width="40" height="8" fill="#7A6914" opacity="0.55"/><circle cx="30" cy="22" r="3.5" fill="#8B7A2A" opacity="0.9"/></g>,
  // 2 Post-Reconstruction — triangle/ochre
  <g key="a2"><rect width="60" height="44" fill="#1a1208"/><polygon points="0,44 30,0 60,44" fill="#8B6B2A" opacity="0.7"/><polygon points="0,44 30,10 60,44" fill="#C4A040" opacity="0.5"/><polygon points="10,44 30,20 50,44" fill="#A08030" opacity="0.6"/><circle cx="30" cy="30" r="5" fill="#C4A040" opacity="0.8"/></g>,
  // 3 Harlem Renaissance — concentric arcs/purple gold
  <g key="a3"><rect width="60" height="44" fill="#120a1e"/>{[28,22,16,10,5].map((r,i) => <circle key={i} cx="30" cy="22" r={r} fill="none" stroke={["#8B6914","#4A2A6B","#6B2A6B","#4A3A8B","#8B6914"][i]} strokeWidth="2.5" opacity={0.62+i*0.07}/>)}<circle cx="30" cy="22" r="3" fill="#8B6914"/></g>,
  // 4 Civil Rights — flag stripes
  <g key="a4"><rect width="60" height="44" fill="#060e18"/><rect x="0" y="0" width="60" height="14.6" fill="#1A2A4A" opacity="0.9"/><rect x="0" y="14.7" width="60" height="14.6" fill="#8B1A1A" opacity="0.85"/><rect x="0" y="29.4" width="60" height="14.6" fill="#1A2A4A" opacity="0.9"/><rect x="22" y="0" width="16" height="44" fill="#8B8B1A" opacity="0.35"/><circle cx="30" cy="22" r="9" fill="none" stroke="#8B8B1A" strokeWidth="2" opacity="0.8"/><circle cx="30" cy="22" r="4" fill="#8B8B1A" opacity="0.9"/></g>,
  // 5 Post-Civil Rights — crosshatch indigo
  <g key="a5"><rect width="60" height="44" fill="#0a0a18"/><rect x="0" y="0" width="60" height="22" fill="#3A2A5C" opacity="0.85"/><rect x="0" y="22" width="60" height="22" fill="#1A3A2A" opacity="0.9"/><line x1="0" y1="0" x2="60" y2="44" stroke="#5C5C1A" strokeWidth="1.5" opacity="0.7"/><line x1="60" y1="0" x2="0" y2="44" stroke="#5C5C1A" strokeWidth="1.5" opacity="0.7"/><rect x="24" y="16" width="12" height="12" fill="#8B8B2A" opacity="0.8"/></g>,
];

// Bilinear interpolation within a quad [TL, BL, BR, TR]
function bilerp(pts: [number,number][], u: number, v: number): [number,number] {
  const top: [number,number] = [pts[0][0]+(pts[3][0]-pts[0][0])*u, pts[0][1]+(pts[3][1]-pts[0][1])*u];
  const bot: [number,number] = [pts[1][0]+(pts[2][0]-pts[1][0])*u, pts[1][1]+(pts[2][1]-pts[1][1])*u];
  return [top[0]+(bot[0]-top[0])*v, top[1]+(bot[1]-top[1])*v];
}

function GalleryPainting({ pts, img, paintId, onClick }: { pts: [number,number][]; img: string; paintId: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  const ptsStr = wallPoly(pts);
  // Frame inset using bilinear interp — gold border on all 4 sides
  const mf = 0.09;
  const matPts: [number,number][] = [
    bilerp(pts, mf, mf),
    bilerp(pts, mf, 1-mf),
    bilerp(pts, 1-mf, 1-mf),
    bilerp(pts, 1-mf, mf),
  ];
  const matStr = wallPoly(matPts);
  const xs = matPts.map(p => p[0]), ys = matPts.map(p => p[1]);
  const artX = Math.min(...xs), artW = Math.max(...xs) - artX;
  const artY = Math.min(...ys), artH = Math.max(...ys) - artY;

  return (
    <g style={{ cursor: "pointer" }} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <defs>
        <clipPath id={`${paintId}f`}><polygon points={ptsStr} /></clipPath>
        <clipPath id={`${paintId}i`}><polygon points={matStr} /></clipPath>
      </defs>
      {/* Drop shadow */}
      <polygon points={ptsStr} fill="rgba(0,0,0,0.35)" transform="translate(3,3)" clipPath={`url(#${paintId}f)`} />
      {/* Gold frame fills full trapezoid */}
      <polygon points={ptsStr} fill={hov ? "#C49030" : "#9A6C18"} />
      {/* Artwork image, clipped to bilinear-inset inner area */}
      <image href={img} x={artX} y={artY} width={artW} height={artH}
        preserveAspectRatio="xMidYMid slice" clipPath={`url(#${paintId}i)`} />
      {hov && <polygon points={ptsStr} fill="rgba(255,245,210,0.10)" />}
    </g>
  );
}

function GalleryScene({ onOpenGallery, onEnterEra, onNavLeft, onNavRight }: {
  onOpenGallery: () => void; onEnterEra: (i: number) => void; onNavLeft: () => void; onNavRight: () => void;
}) {
  // Left wall: 3 paintings (eras 0,1,3), right wall: 3 paintings (eras 4,5,6)
  const leftPaintings: [number,number][][] = [
    [lWallPt(18,0.13),  lWallPt(18,0.70),  lWallPt(215,0.70),  lWallPt(215,0.13)],
    [lWallPt(278,0.17), lWallPt(278,0.66), lWallPt(400,0.66), lWallPt(400,0.17)],
    [lWallPt(432,0.20), lWallPt(432,0.63), lWallPt(475,0.63), lWallPt(475,0.20)],
  ];
  const rightPaintings: [number,number][][] = [
    [rWallPt(985,0.13), rWallPt(985,0.70), rWallPt(1180,0.70), rWallPt(1180,0.13)],
    [rWallPt(800,0.17), rWallPt(800,0.66), rWallPt(922,0.66),  rWallPt(922,0.17)],
    [rWallPt(725,0.20), rWallPt(725,0.63), rWallPt(770,0.63),  rWallPt(770,0.20)],
  ];
  const backWallArt = GALLERY_ARTS[6];

  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="gal-vign" cx="50%" cy="50%" r="70%">
          <stop offset="15%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.72)" />
        </radialGradient>
        <radialGradient id="gal-floor" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="rgba(55,38,14,0.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="gal-far" cx="50%" cy="48%" r="52%">
          <stop offset="0%" stopColor="rgba(240,220,165,0.88)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      <rect width="1200" height="700" fill="#0B0906" />

      {/* Cream walls */}
      <polygon points="0,0 0,700 490,390 490,252" fill="#C5BCAA" />
      <polygon points="1200,0 1200,700 710,390 710,252" fill="#C5BCAA" />
      {/* Ceiling */}
      <polygon points="0,0 1200,0 710,252 490,252" fill="#B8B2A4" />
      {/* Rail line on walls */}
      <line x1="0" y1={80+(640-80)*0.18} x2="490" y2={268+(390-268)*0.18} stroke="#A8A295" strokeWidth="2.5"/>
      <line x1="1200" y1={80+(640-80)*0.18} x2="710" y2={268+(390-268)*0.18} stroke="#A8A295" strokeWidth="2.5"/>
      {/* Dark parquet floor */}
      <polygon points="0,700 1200,700 710,390 490,390" fill="#261A0A" />
      {[652,608,566,528,494,466,442,422,406,396].map((y, i) => {
        const t = (700-y)/310;
        return <line key={i} x1={490*t} y1={y} x2={1200-490*t} y2={y} stroke="#1E1408" strokeWidth="1.1"/>;
      })}
      {[160,360,560,640,840,1040].map((xN, i) => (
        <line key={i} x1={xN} y1={700} x2={600} y2={392} stroke="#1E1408" strokeWidth="0.9" opacity="0.6"/>
      ))}
      <rect x="300" y="390" width="600" height="310" fill="url(#gal-floor)" style={{ pointerEvents:"none" }} />
      {/* Far wall */}
      <rect x="490" y="252" width="220" height="138" fill="#D0C9B8" />

      {/* Back wall — Banjo Lesson (portrait, centered) */}
      <defs>
        <clipPath id="bwclip"><rect x="548" y="263" width="104" height="112" /></clipPath>
      </defs>
      <g style={{ cursor: "pointer" }} onClick={() => onEnterEra(backWallArt.eraIdx)}>
        {/* Shadow behind frame */}
        <rect x="549" y="265" width="104" height="112" fill="rgba(0,0,0,0.28)" rx="1" />
        {/* Gold frame */}
        <rect x="545" y="261" width="110" height="118" fill="#9A6C18" rx="1" />
        {/* Mat */}
        <rect x="549" y="265" width="102" height="110" fill="#C8BFA8" />
        {/* Artwork image */}
        <image href={backWallArt.img} x="552" y="268" width="96" height="104"
          preserveAspectRatio="xMidYMid slice" clipPath="url(#bwclip)" />
        {/* Hover shimmer */}
        <rect x="545" y="261" width="110" height="118" fill="transparent"
          style={{ transition: "fill 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.fill = "rgba(255,240,200,0.10)")}
          onMouseLeave={e => (e.currentTarget.style.fill = "transparent")} />
        {/* Label below */}
        <text x="600" y="392" textAnchor="middle" fill="#6A5A38"
          fontSize="6.5" fontFamily="Georgia,serif" letterSpacing="0.8">
          The Banjo Lesson · Tanner · 1893
        </text>
      </g>

      {/* Ceiling panels */}
      {[[30,140],[155,260],[272,366]].map(([ya,yb],i) => {
        const fA = ya/252, fB = yb/252;
        return <polygon key={i} points={`${490*fA},${ya} ${1200-490*fA},${ya} ${1200-490*fB},${yb} ${490*fB},${yb}`}
          fill="none" stroke="#A8A090" strokeWidth="1" opacity="0.5"/>;
      })}

      {/* Paintings — real artwork images. Left wall: eras 0-3, right wall: eras 4-6 */}
      {leftPaintings.map((pts, i) => {
        const art = GALLERY_ARTS[i];
        return <GalleryPainting key={i} pts={pts} img={art.img} paintId={`gl${i}`}
          onClick={() => onEnterEra(art.eraIdx)} />;
      })}
      {rightPaintings.map((pts, i) => {
        const art = GALLERY_ARTS[i + 3];
        return <GalleryPainting key={i+3} pts={pts} img={art.img} paintId={`gr${i}`}
          onClick={() => onEnterEra(art.eraIdx)} />;
      })}

      {/* Far-end subtle glow only — no overlapping CTA label */}
      <ellipse cx="600" cy="320" rx="50" ry="40" fill="url(#gal-far)" style={{ pointerEvents:"none" }} />

      <rect width="1200" height="700" fill="url(#gal-vign)" style={{ pointerEvents:"none" }} />
    </svg>
  );
}

function ReadingScene({ onOpenReadingRoom, onNavLeft }: { onOpenReadingRoom: () => void; onNavLeft: () => void }) {
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="rr-vign" cx="50%" cy="50%" r="70%">
          <stop offset="20%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.86)" />
        </radialGradient>
        <radialGradient id="rr-lamp" cx="50%" cy="30%" r="58%">
          <stop offset="0%" stopColor="rgba(235,190,85,0.45)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="rr-floor" cx="50%" cy="15%" r="68%">
          <stop offset="0%" stopColor="rgba(155,105,35,0.28)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      <rect width="1200" height="700" fill="#0E0A04" />

      {/* Warm plaster walls */}
      <polygon points="0,0 0,700 490,390 490,252" fill="#1E1710" />
      <polygon points="1200,0 1200,700 710,390 710,252" fill="#1E1710" />
      <polygon points="0,0 1200,0 710,252 490,252" fill="#180F07" />
      <polygon points="0,700 1200,700 710,390 490,390" fill="#5C3E14" />

      {/* Floor planks */}
      {[650,604,560,520,482,452,428,408,394].map((y, i) => {
        const t = (700-y)/310;
        return <line key={i} x1={490*t} y1={y} x2={1200-490*t} y2={y} stroke="#4A3010" strokeWidth="1.3"/>;
      })}
      {[200,400,600,800,1000].map((xN, i) => (
        <line key={i} x1={xN} y1={700} x2={600} y2={392} stroke="#4A3010" strokeWidth="0.9" opacity="0.5"/>
      ))}
      <rect x="250" y="390" width="700" height="310" fill="url(#rr-floor)" style={{ pointerEvents:"none" }} />

      {/* Far wall with small bookshelves */}
      <rect x="490" y="252" width="220" height="138" fill="#261606" />
      {ERA_BOOK_COLORS.slice(0,6).map((cols, ei) =>
        cols.slice(0,4).map((col, ci) => (
          <rect key={`${ei}-${ci}`} x={496 + ei*34 + ci*7} y={270} width={6} height={44} fill={col} opacity="0.72"/>
        ))
      )}
      <line x1="490" y1="270" x2="710" y2="270" stroke="#1A0E06" strokeWidth="7"/>
      <line x1="490" y1="314" x2="710" y2="314" stroke="#1A0E06" strokeWidth="5"/>

      {/* Lamp glow from ceiling */}
      <ellipse cx="600" cy="0" rx="340" ry="240" fill="url(#rr-lamp)" style={{ pointerEvents:"none" }} />

      {/* Reading table + chairs (perspective) */}
      <g style={{ cursor:"pointer" }} onClick={onOpenReadingRoom}>
        {/* Table shadow */}
        <ellipse cx="600" cy="512" rx="200" ry="36" fill="rgba(0,0,0,0.52)" />
        {/* Table body */}
        <ellipse cx="600" cy="470" rx="195" ry="52" fill="#6B4A1A" />
        <ellipse cx="600" cy="467" rx="188" ry="47" fill="#7A5820" />
        <ellipse cx="600" cy="465" rx="182" ry="43" fill="none" stroke="#9A7030" strokeWidth="2" opacity="0.55" />
        {/* Table lamp */}
        <ellipse cx="600" cy="446" rx="24" ry="9" fill="#D4AF6A" opacity="0.9" />
        <ellipse cx="600" cy="443" rx="18" ry="6" fill="#F0D880" opacity="0.95" />
        {/* Chairs (perspective) */}
        <rect x="408" y="440" width="54" height="32" rx="4" fill="#4A3210" />
        <rect x="412" y="424" width="46" height="18" rx="3" fill="#5A4018" />
        <rect x="738" y="440" width="54" height="32" rx="4" fill="#4A3210" />
        <rect x="742" y="424" width="46" height="18" rx="3" fill="#5A4018" />
        <rect x="555" y="418" width="90" height="28" rx="4" fill="#4A3210" />
        <rect x="560" y="402" width="80" height="18" rx="3" fill="#5A4018" />
        <rect x="370" y="492" width="64" height="36" rx="5" fill="#3A2810" />
        <rect x="766" y="492" width="64" height="36" rx="5" fill="#3A2810" />
        <rect x="524" y="515" width="88" height="38" rx="5" fill="#3A2810" />
        <rect x="588" y="517" width="88" height="38" rx="5" fill="#3A2810" />
        <text x="600" y="582" textAnchor="middle" fill="#8A6A30"
          fontSize="9.5" fontFamily="Georgia,serif" letterSpacing="1.6">ENTER READING ROOM ›</text>
      </g>

      <rect width="1200" height="700" fill="url(#rr-vign)" style={{ pointerEvents:"none" }} />
    </svg>
  );
}

function PerspectiveView({ perspScene, setPerspScene, onEnterEra, onOpenGallery, onOpenReadingRoom, onOpenAbout }: {
  perspScene: PerspScene;
  setPerspScene: (s: PerspScene) => void;
  onEnterEra: (i: number) => void;
  onOpenGallery: () => void;
  onOpenReadingRoom: () => void;
  onOpenAbout: () => void;
}) {
  const SCENES: PerspScene[] = ["library", "gallery", "reading"];
  const idx = SCENES.indexOf(perspScene);
  const navLeft = () => { if (idx > 0) setPerspScene(SCENES[idx - 1]); };
  const navRight = () => { if (idx < SCENES.length - 1) setPerspScene(SCENES[idx + 1]); };

  const LABELS: Record<PerspScene, string> = {
    library: "Main Library Hall",
    gallery: "Gallery Lounge",
    reading: "Reading Room",
  };

  return (
    <div className="persp-wrap">
      {/* Top nav — row 1: title + room links, row 2: era quick links */}
      <div className="persp-topnav">
        <div className="persp-topnav-row1">
          <span className="persp-nav-title">Black American Poetry &amp; Art</span>
          <span className="persp-nav-sep" />
          <div className="persp-nav-links">
            <button className="persp-nav-link" onClick={() => { setPerspScene("library"); }}>Library</button>
            <button className="persp-nav-link" onClick={() => { setPerspScene("gallery"); onOpenGallery(); }}>Gallery</button>
            <button className="persp-nav-link" onClick={() => { setPerspScene("reading"); onOpenReadingRoom(); }}>Reading Room</button>
            <button className="persp-nav-link" onClick={onOpenAbout}>About</button>
          </div>
        </div>
        <div className="persp-nav-eras">
          {eras.map((era, i) => (
            <button key={i} className="persp-nav-era"
              onClick={() => { setPerspScene("library"); onEnterEra(i); }}>
              {era.name}
            </button>
          ))}
        </div>
      </div>

      {/* Scene */}
      <div className="persp-scene">
        {perspScene === "library" && <LibraryScene onEnterEra={onEnterEra} onNavRight={navRight} onNavReading={() => setPerspScene("reading")} />}
        {perspScene === "gallery" && <GalleryScene onOpenGallery={onOpenGallery} onEnterEra={onEnterEra} onNavLeft={navLeft} onNavRight={navRight} />}
        {perspScene === "reading" && <ReadingScene onOpenReadingRoom={onOpenReadingRoom} onNavLeft={navLeft} />}
      </div>

      {/* Bottom nav */}
      <div className="persp-bottomnav">
        <button className={`persp-arrow-btn${idx === 0 ? " persp-arrow-ghost" : ""}`} onClick={navLeft}>
          ‹ {idx > 0 ? LABELS[SCENES[idx - 1]] : ""}
        </button>
        <div className="persp-loc-center">
          <div className="persp-loc-label">{LABELS[perspScene]}</div>
          <div className="persp-loc-dots">
            {SCENES.map((s, i) => (
              <button key={s} className={`persp-loc-dot${i === idx ? " persp-loc-dot-active" : ""}`}
                onClick={() => setPerspScene(s)} />
            ))}
          </div>
        </div>
        <button className={`persp-arrow-btn${idx === SCENES.length - 1 ? " persp-arrow-ghost" : ""}`} onClick={navRight}>
          {idx < SCENES.length - 1 ? LABELS[SCENES[idx + 1]] : ""} ›
        </button>
      </div>
    </div>
  );
}

// (FloorPlan removed — replaced by PerspectiveView above)
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

          {/* left wall — frame 1: Antebellum warm reds/burnt sienna */}
          <div className="gal-frame" style={{ left: "6%", top: "14%", width: "22%", height: "18%" }}>
            <svg width="100%" height="100%" viewBox="0 0 60 44" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
              <rect width="60" height="44" fill="#2c1a0a" />
              <ellipse cx="30" cy="22" rx="26" ry="18" fill="none" stroke="#8B3A2A" strokeWidth="5" opacity="0.7" />
              <ellipse cx="30" cy="22" rx="18" ry="11" fill="none" stroke="#C4832D" strokeWidth="3.5" opacity="0.8" />
              <ellipse cx="30" cy="22" rx="10" ry="5" fill="#D4A04A" opacity="0.6" />
              <line x1="4" y1="22" x2="56" y2="22" stroke="#A85728" strokeWidth="1.5" opacity="0.5" />
              <line x1="30" y1="4" x2="30" y2="40" stroke="#A85728" strokeWidth="1.5" opacity="0.5" />
              <circle cx="30" cy="22" r="2.5" fill="#D4A04A" />
            </svg>
          </div>

          {/* left wall — frame 2: Reconstruction greens/teal */}
          <div className="gal-frame" style={{ left: "6%", top: "38%", width: "22%", height: "18%" }}>
            <svg width="100%" height="100%" viewBox="0 0 60 44" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
              <rect width="60" height="44" fill="#0e1f14" />
              <rect x="6" y="6" width="20" height="32" fill="#2A5C3A" opacity="0.85" />
              <rect x="16" y="10" width="28" height="24" fill="#3A4E2A" opacity="0.75" />
              <rect x="32" y="8" width="20" height="28" fill="#2A3C5C" opacity="0.8" />
              <rect x="10" y="18" width="40" height="8" fill="#7A6914" opacity="0.55" />
              <rect x="22" y="14" width="16" height="16" fill="#6E4E14" opacity="0.4" />
              <circle cx="30" cy="22" r="3" fill="#8B7A2A" opacity="0.9" />
            </svg>
          </div>

          {/* left wall — frame 3: Post-Reconstruction ochre/tobacco */}
          <div className="gal-frame" style={{ left: "6%", top: "62%", width: "22%", height: "18%" }}>
            <svg width="100%" height="100%" viewBox="0 0 60 44" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
              <rect width="60" height="44" fill="#1a1208" />
              <polygon points="0,44 30,0 60,44" fill="#8B6B2A" opacity="0.7" />
              <polygon points="0,44 30,10 60,44" fill="#C4A040" opacity="0.5" />
              <polygon points="10,44 30,18 50,44" fill="#A08030" opacity="0.65" />
              <line x1="0" y1="0" x2="60" y2="44" stroke="#5C4A20" strokeWidth="1.5" opacity="0.6" />
              <line x1="60" y1="0" x2="0" y2="44" stroke="#5C4A20" strokeWidth="1.5" opacity="0.6" />
              <circle cx="30" cy="30" r="5" fill="#C4A040" opacity="0.8" />
              <circle cx="30" cy="30" r="2" fill="#2c1a08" />
            </svg>
          </div>

          {/* right wall — frame 4: Harlem Renaissance deep purples/gold */}
          <div className="gal-frame" style={{ right: "6%", top: "14%", width: "22%", height: "18%" }}>
            <svg width="100%" height="100%" viewBox="0 0 60 44" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
              <rect width="60" height="44" fill="#120a1e" />
              {[28,22,16,10,5].map((r, i) => (
                <circle key={i} cx="30" cy="22" r={r}
                  fill="none"
                  stroke={["#8B6914","#4A2A6B","#6B2A6B","#4A3A8B","#8B6914"][i]}
                  strokeWidth="2.5"
                  opacity={0.6 + i * 0.08}
                />
              ))}
              {[0,45,90,135,180,225,270,315].map((angle, i) => {
                const rad = angle * Math.PI / 180;
                return <line key={i} x1="30" y1="22"
                  x2={30 + Math.cos(rad) * 28} y2={22 + Math.sin(rad) * 28}
                  stroke="#8B6914" strokeWidth="0.8" opacity="0.45" />;
              })}
              <circle cx="30" cy="22" r="3" fill="#8B6914" />
            </svg>
          </div>

          {/* right wall — frame 5: Civil Rights & Black Power navy/crimson */}
          <div className="gal-frame" style={{ right: "6%", top: "38%", width: "22%", height: "18%" }}>
            <svg width="100%" height="100%" viewBox="0 0 60 44" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
              <rect width="60" height="44" fill="#060e18" />
              <rect x="0" y="0" width="60" height="14" fill="#1A2A4A" opacity="0.9" />
              <rect x="0" y="15" width="60" height="14" fill="#8B1A1A" opacity="0.85" />
              <rect x="0" y="30" width="60" height="14" fill="#1A2A4A" opacity="0.9" />
              <rect x="22" y="0" width="16" height="44" fill="#8B8B1A" opacity="0.35" />
              <circle cx="30" cy="22" r="9" fill="none" stroke="#8B8B1A" strokeWidth="2" opacity="0.8" />
              <circle cx="30" cy="22" r="4" fill="#8B8B1A" opacity="0.9" />
            </svg>
          </div>

          {/* right wall — frame 6: BLM era stark black/red/gold */}
          <div className="gal-frame" style={{ right: "6%", top: "62%", width: "22%", height: "18%" }}>
            <svg width="100%" height="100%" viewBox="0 0 60 44" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
              <rect width="60" height="44" fill="#0a0a0a" />
              <rect x="0" y="0" width="60" height="14.6" fill="#1A1A1A" />
              <rect x="0" y="14.7" width="60" height="14.6" fill="#8B1A1A" />
              <rect x="0" y="29.4" width="60" height="14.6" fill="#8B8B2A" opacity="0.9" />
              <line x1="0" y1="0" x2="60" y2="44" stroke="#4A2A1A" strokeWidth="1.2" opacity="0.7" />
              <line x1="60" y1="0" x2="0" y2="44" stroke="#4A2A1A" strokeWidth="1.2" opacity="0.7" />
              <rect x="24" y="16" width="12" height="12" fill="#8B8B2A" opacity="0.8" />
              <rect x="27" y="19" width="6" height="6" fill="#0a0a0a" />
            </svg>
          </div>

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

  const [perspScene, setPerspScene] = useState<PerspScene>("library");

  const enterEra = (i: number) => { setCurrentEra(i); setView("era"); setSelectedBook(null); setSelectedArt(null); setTimelineEra(null); };
  const backToFloor = () => { setView("floor"); setCurrentEra(null); setSelectedBook(null); setSelectedArt(null); setTimelineEra(null); };
  const openGallery = () => { setView("gallery"); setGalleryPickEra(null); setGalleryPickInfo(false); };
  const openReadingRoom = () => { setView("reading"); setSelectedBook(null); setShowBookInfo(false); };

  return (
    <div className="exhibit-root">
      <style>{CSS}</style>

      <PerspectiveView
        perspScene={perspScene}
        setPerspScene={setPerspScene}
        onEnterEra={enterEra}
        onOpenGallery={openGallery}
        onOpenReadingRoom={openReadingRoom}
        onOpenAbout={() => setShowAbout(true)}
      />

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
