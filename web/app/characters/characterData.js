const characters = [
    {
        name: "Bastien Moreau",
        characterID: 1,
        employeeID: "M5984-02345",
        jobTitle: "Head Museum Curator",
        department: "Curatorial",
        reportsTo: "Director General",
        education: `Ph.D. in Art History
        Master of Arts (M.A.) Curatorial Practice
        BSc. Art History`,
        image: "/assets/characterImages/bastien.jpeg",
        characterNotes: `Extreme Type A personality. Hyper-organized, fastidious, and punctual.
        No patience for slackers, cutting corners, or missed deadlines.
        While his logistics work is flawless, his cold, blunt demeanor means he lacks interpersonal skills and alienates colleagues.
        Regularly clashes with the restoration department over tools and methods.
        Highly combative during private gallery acquisitions.
        Keeps an explicit, running log of staff infractions.`,
        borderColor: "#ff1900a2",
    },
    {
        name: "Julian Croft",
        characterID: 2,
        employeeID: "C1084-06521",
        jobTitle: "Head Museum Registrar",
        department: "Management",
        reportsTo: "Bastien Moreau",
        education: `M.A. Arts Administration
        B.A. History`,
        image: "/assets/characterImages/julian.jpeg",
        characterNotes: `Legacy at the museum. His great-grandfather founded it in 1854.
        Exhibits high levels of stress regarding recent external financial audits and asset evaluations.
        Recent internal flags raised regarding unverified acquisition paperwork.
        Has repeatedly clashed with Bastien over administrative authority boundaries.`,
        borderColor: "#86a0c491",

    },
    {
        name: "James Donavan",
        characterID: 3,
        employeeID: "D8203-05719",
        jobTitle: "Night-Shift Security Supervisor",
        department: "Operations",
        reportsTo: "Arthur Boucher",
        education: "BSc. Exercise Science",
        image: "/assets/characterImages/james.jpeg",
        characterNotes: `Built like a brick wall and slow to anger, but immovably stubborn regarding building safety.
        Highly protective of the artwork but completely dismissive of pretentious curatorial staff.
        Keeps his head down and strictly avoids office politics and administrative conflicts.
        Formally reprimanded and asked to work on his interpersonal skills and friendly demeanor.`,
        borderColor: "#89c981b1",

    },
    {
        name: "Arthur Boucher",
        characterID: 4,
        employeeID: "B5149-02381",
        jobTitle: "Director of Facilities & Operations",
        department: "Operations",
        reportsTo: "Julian Croft",
        education: `B.ASc. Chemical Engineering
        Associate of Science (A.S.)
        Mechanical Engineering Technology`,
        image: "/assets/characterImages/arthur.jpeg",
        characterNotes: `Functions as the backbone of the museum's infrastructure.
        Views the building as a complex machine of environmental controls and safety regulations.
        Highly protective of his operations budget and physical staff.
        Deeply frustrated by the creative chaos of the curatorial team.
        Worries that Julian's administrative and paperwork lapses will lead to a catastrophic operational failure.`,
        borderColor: "#dcd3989e",

    },
    {
        name: "Chloe Sterling",
        characterID: 5,
        employeeID: "S9372-04618",
        jobTitle: "Lead Exhibition Designer",
        department: "Curatorial",
        reportsTo: "Dr. Elena Rostova",
        education: `M.F.A. Exhibition Design
        B.F.A. Studio Art`,
        image: "/assets/characterImages/chloe.jpeg",
        characterNotes: `Obsessive, eccentric visionary who lives for theatrical aesthetics.
        Prone to volatile mood swings and dramatic bursts of energy.
        Cannot stand anyone questioning her artistic taste or lighting.
        Fast-talking, gestures with paint-smudged hands.
        Paces constantly when stressed or waiting around.
        Takes any critique of the gallery layout as a personal attack.
        Coworkers believe she deliberately transfers oil paint onto gallery walls to sabotage other exhibits.`,
        borderColor: "#cb9edb8e",


    },
    {
        name: "Dr. Elena Rostova",
        characterID: 6,
        employeeID: "R7109-36278",
        jobTitle: "Chief Paintings Conservator",
        department: "Restoration",
        reportsTo: "Bastien Moreau",
        education: `Ph.D. Organic Chemistry
        Ph.D. Art History
        M.Sc. Art Conservation Science
        B.Sc. Chemistry`,
        image: "/assets/characterImages/elena.jpeg",
        characterNotes: `Highly territorial over her restoration wing and access to experimental solvent formulas.
        Formally reprimanded by Curatorial staff last month for unauthorized testing on active exhibits.
        Believes modern art administrators fail to respect the deep science of cultural preservation.`,
        borderColor: "#ebc0919c",

    },
    {
        name: "Marcus Brennan",
        characterID: 7,
        employeeID: "B5791-93729",
        jobTitle: "Digital Collection Manager",
        department: "Restoration",
        reportsTo: "Bastien Moreau",
        education: `B.Sc. Data Science With Minor in Fine Arts
        Associate of Science (A.S.) in Art Handling & Collections Care`,
        image: "/assets/characterImages/marcus.jpeg",
        characterNotes: `Highly analytical and detail-oriented, with an almost obsessive approach to digital preservation and collection records.
        Responsible for maintaining the museum's digital archives, provenance records, and collection databases.
        Frequently discovers discrepancies in historical acquisition records but is reluctant to raise concerns with senior management.
        Prefers working behind a computer rather than interacting with curatorial staff.
        Has an unusually extensive knowledge of the museum's security systems and restricted collection records.
        Recently involved in several tense disagreements with Bastien over missing digital documentation and unauthorized changes to collection files.
        Keeps personal backups of sensitive museum records, claiming it is simply good data management practice.`,
        borderColor: "#ff909b85",

    }
];

export default characters;