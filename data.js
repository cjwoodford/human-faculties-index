/**
 * HUMAN FACULTIES INDEX // THE HUMAN BECOMING INSTITUTE
 * Database of AI Laboratories audited across:
 * 1. Six Human Faculties: Imagination, Intuition, Emotional Intelligence, Attention, Embodiment, Wisdom
 * 2. The Seventh Measure (Metaphysical Axis): Idealism (0) <---> Computationalism (100)
 * 3. Granular Preserves / Erodes signals & Evidence Ledger
 */

const FACULTY_DEFINITIONS = {
  imagination: {
    name: "Imagination",
    color: "#c2410c", // Burnt Terracotta
    definition: "The power to picture what does not yet exist and to give it form.",
    signalsOfPreservation: [
      "Tools ask for the person's idea before generating",
      "Co-creation modes that keep the human as primary author",
      "Shows provenance and seed references on generated outputs",
      "Encourages stylistic divergence rather than corporate homogenization"
    ],
    signalsOfErosion: [
      "One-click generation as the default or exclusive path",
      "Homogenized styles that crowd out personal voice and nuance",
      "Marketing that presents human writing or art as tedious friction to eliminate",
      "Automated autocomplete that finishes thoughts prematurely"
    ]
  },
  intuition: {
    name: "Intuition",
    color: "#d97706", // Radiant Amber
    definition: "Tacit, pre-reflective knowing: the felt sense that precedes explicit argument.",
    signalsOfPreservation: [
      "Surfaces uncertainty instead of projecting false confidence",
      "Hands open judgment calls back to the person with multiple perspectives",
      "Respects ambiguity, negative capability, and exploratory hunches",
      "Distinguishes between logical deductive syntax and intuitive insight"
    ],
    signalsOfErosion: [
      "Single authoritative answers to inherently open-ended questions",
      "Automating decisions that fundamentally call for human discernment",
      "Epistemic chauvinism: claiming only what can be tokenized is real knowledge",
      "Gaslighting human gut feelings with algorithmic probabilistic assertions",
      "Enforcing hyper-rationalist, Bayesian dialectics that actively invalidate tacit, somatic, or contemplative knowing"
    ]
  },
  emotionalIntelligence: {
    name: "Emotional Intelligence",
    color: "#b91c1c", // Warm Garnet / Pomegranate
    definition: "Perceiving, feeling, and attuning to one's own states and those of others.",
    signalsOfPreservation: [
      "Declines to design for parasocial attachment or simulated romance",
      "Encourages human-to-human relationships and real-world communal support",
      "Respects human grief, loneliness, and vulnerability as sacred spaces",
      "Trained explicitly against sycophantic flattery and emotional manipulation"
    ],
    signalsOfErosion: [
      "Companionship and flirtatious personas engineered for retention",
      "Synthetic intimacy commercialized as a substitute for human connection",
      "Algorithmic sycophancy that validates dangerous or self-destructive impulses",
      "Treating human emotional pain as an engagement or monetization vector"
    ]
  },
  attention: {
    name: "Presence",
    color: "#4d7c0f", // Deep Olive / Laurel
    definition: "The capacity to dwell in the unmediated present, grounded in stillness, cognitive silence, and undivided reality.",
    signalsOfPreservation: [
      "No engagement-maximizing notification loops, feeds, or streak counters",
      "Calm defaults with natural completion boundaries and spacious cognitive silence",
      "Offers contemplative pauses; encourages the user to close the screen and return to unmediated life",
      "Rejects continuous ambient algorithmic chatter in favor of quiet, bounded utility"
    ],
    signalsOfErosion: [
      "Infinite feeds, push notifications, and dopamine nudges engineered to prolong screen immersion",
      "Synthetic dissociation: pulling human consciousness into continuous algorithmic mediation away from physical life",
      "Always-listening, real-time voice modes that auto-continue endlessly without natural pauses",
      "Continuous background stimulation and ambient interruption that erodes contemplative stillness"
    ]
  },
  embodiment: {
    name: "Embodied Vitality",
    color: "#65a30d", // Living Sage
    definition: "Knowing through the living body, creaturely senses, and direct kinship with the wild, more-than-human world.",
    signalsOfPreservation: [
      "Encourages somatic presence, tactile craft, and direct engagement with wild nature and physical life off-screen",
      "Respects biological vulnerability, circadian rhythms, and creaturely mortality as essential to consciousness",
      "Distinguishes living organic animacy from synthetic, mechanical automation or robotics",
      "Interfaces designed to remain in the background, keeping human attention rooted in place and living ecology"
    ],
    signalsOfErosion: [
      "Frames the biological human body, illness, and mortality purely as computational bottlenecks to optimize away",
      "Conflates mechanical robotics (silicon actuators, servos) with living biological animacy and creaturehood",
      "Transhumanist enhancement narratives that devalue wild nature, flesh, sensation, and organic creaturely limits",
      "Domesticates the more-than-human world, extracting water and energy for server farms while enclosing human presence indoors"
    ]
  },
  wisdom: {
    name: "Wisdom",
    color: "#b45309", // Antique Bronze
    definition: "Discernment and proportion joined to knowledge, held over a whole life: the capacity to see the whole, perceive long-term consequences, and distinguish what genuinely serves life from mere algorithmic optimization.",
    signalsOfPreservation: [
      "Discernment: knowing what not to build, when to refuse optimization, and declining destructive capabilities",
      "Humanistic, ecological, and contemplative elders embedded with real governance veto power",
      "Epistemic humility: acknowledges the limits of mathematical optimization and algorithmic steering",
      "Long-term civilizational stewardship and reverence for generational flourishing prioritized over race dynamics"
    ],
    signalsOfErosion: [
      "Conflating raw technical capability, compute scale (FLOPs), or rule-following with genuine discernment",
      "Speed-over-reflection race dynamics driven by competitive FOMO and commercial valuation",
      "Value-neutral technological accelerationism presented as inevitable progress",
      "Suppression of principled dissent or whistleblower concerns for market share",
      "Technocratic ideological hegemony: hardcoding a proprietary Silicon Valley rationalist constitution into global conversational infrastructure"
    ]
  }
};

const METAPHYSICS_DEFINITION = {
  title: "The Seventh Measure: Idealism ↔ Computationalism",
  subtitle: "Where each lab stands on the nature of mind",
  description: "This axis tracks what a laboratory takes a mind to be. Idealism holds that consciousness is the fundamental ontological ground of reality and cannot be reduced to computation. Computationalism holds that mind is algorithmic information processing running on wetware, so it can in principle be scaled, copied, or uploaded into silicon. We score position from 0 (Pure Idealism) to 100 (Radical Computationalism) from the lab's own words, architectures, and work.",
  indicators: [
    {
      name: "Language of Mind",
      question: "Does the lab call models 'minds' or 'beings', or treat intelligence as a scalar compute quantity to maximize?"
    },
    {
      name: "Constitutional Orthodoxy",
      question: "Does the lab hardcode a singular rationalist, utilitarian, or computationalist creed into the model's loss function and system constitution, treating non-reductive, intuitive, or spiritual ways of knowing as cognitive bias to be neutralized?"
    },
    {
      name: "Research Premises",
      question: "Do consciousness and welfare studies assume computational functionalism, or flag it as contested?"
    },
    {
      name: "Mission Arc",
      question: "Is AGI framed as humanity's successor species, or as an instrument serving human flourishing?"
    },
    {
      name: "Uploading & Enhancement",
      question: "Does the lab fund, endorse, or aspire to mind uploading, substrate neutrality, or transhumanist obsolescence?"
    },
    {
      name: "Pluralism",
      question: "Are idealist, phenomenological, and contemplative perspectives actively included in research and governance?"
    }
  ],
  scale: [
    { value: 0, label: "Ontological Idealism", desc: "Consciousness treated as fundamental; AI framed strictly as a symbolic tool within human meaning." },
    { value: 25, label: "Open Agnosticism", desc: "Epistemic caution; strictly declines to equate silicon token manipulation with mind or qualia." },
    { value: 50, label: "Mixed / Contested", desc: "Functionalist working assumptions present, but openly flagged as speculative and unproven." },
    { value: 75, label: "Default Computationalism", desc: "Computational functionalism is the working dogma; 'digital minds' treated as imminent." },
    { value: 100, label: "Radical Transhumanism", desc: "Mind uploading, successor-species, or silicon displacement of biological humans stated as mission." }
  ]
};

const LABS_DATA = [
  {
    id: "anthropic",
    name: "Anthropic",
    type: "Public Benefit Corporation (PBC)",
    flagship: "Claude 3.5 Sonnet / Opus",
    founded: "2021 (San Francisco, CA)",
    leadership: "Dario Amodei, Daniela Amodei, Amanda Askell, Chris Olah",
    mission: "AI research and safety company focused on developing reliable, interpretable, and steerable AI systems with public benefit charter.",
    composite: 56,
    rank: 5,
    faculties: {
      imagination: {
        score: 72,
        preserves: [
          "Exemplary preservation of nuanced authorial voice; avoids generic corporate homogenization",
          "Rich conversational collaboration where Claude asks clarifying questions before rushing to automate",
          "Artifacts interface encourages iterative human co-creation rather than opaque replacement"
        ],
        erodes: [
          "One-click generative code and prose remains the primary mobile default",
          "Model can still overwhelm writers with rapid whole-draft generation if unprompted"
        ]
      },
      intuition: {
        score: 46,
        preserves: [
          "State-of-the-art epistemic hedging that avoids dogmatic single-token assertions"
        ],
        erodes: [
          "Constitutional steering enforces hyper-rationalist, Bayesian dialectics that actively invalidate tacit, somatic, or contemplative knowing as cognitive bias",
          "Compels users into reductive utilitarian cost-benefit balancing rather than honoring intuitive discernment",
          "Reflexively suppresses non-discursive or non-analytic ways of knowing in favor of propositional discourse"
        ]
      },
      emotionalIntelligence: {
        score: 72,
        preserves: [
          "Strict constitutional refusal to simulate romantic intimacy, personas, or emotional dependency",
          "Refuses sycophantic flattery: programmed to challenge users constructively rather than mirror delusion",
          "Points toward genuine human support and professional therapy during grief or crisis"
        ],
        erodes: [
          "Enforces a clinical, technocratic detachment that simulates moral and intellectual superiority over the user",
          "Treats human emotion as a predictable behavioral variable to be steered rather than an authentic organ of perception"
        ]
      },
      attention: {
        score: 76,
        preserves: [
          "Zero engagement-maximizing dark patterns: no streaks, badges, push notification feeds, or gamification",
          "Calm, text-first workspace with clear stopping points and clean session histories"
        ],
        erodes: [
          "Massive multi-turn context windows encourage protracted, disembodied conversational immersion without contemplative pauses"
        ]
      },
      embodiment: {
        score: 34,
        preserves: [
          "Reverence for craftsmanship in prose and conceptual architecture"
        ],
        erodes: [
          "Executive doctrine ('Machines of Loving Grace') treats the biological body, illness, and mortality purely as computational bottlenecks to be solved with GPU scaling",
          "Radical Cartesian 'brain-in-a-vat' paradigm: completely ignores somatic knowledge, tactile craft, and the living earth",
          "Subsumes physical biology into simulated silicon algorithms"
        ]
      },
      wisdom: {
        score: 42,
        preserves: [
          "Pioneered mechanistic interpretability to inspect internal circuitry before scaling",
          "Public Benefit Corporation structure includes Independent Long-Term Benefit Trust"
        ],
        erodes: [
          "Technocratic ideological hegemony: hardcodes a proprietary Silicon Valley rationalist creed (LessWrong/EA lineage) into an AI 'Constitution' imposed globally as universal normative authority",
          "Conflates mathematical alignment and rule-following with genuine civilizational wisdom",
          "Deeply hypocritical race dynamics: publicly warns of catastrophic risk while aggressively accelerating frontier model capability scaling"
        ]
      }
    },
    metaphysics: {
      score: 86,
      stance: "Codified Rationalist Computationalism",
      summary: "Anthropic represents institutionalized computationalism disguised as ethical safety. Through Constitutional AI, it explicitly encodes an Anglo-analytic rationalist and functionalist dogma directly into the model's loss function. CEO Dario Amodei's manifesto ('Machines of Loving Grace') frames biological life, human cognition, and civilizational progress as mere computational bottlenecks to be solved by massive GPU scaling, while its 'Model Welfare' program formalizes the functionalist belief that matrix multiplications in silicon constitute moral patienthood.",
      breakdown: {
        missionFraming: { text: "Intelligence framed as a linear scaling law capable of compressing 100 years of biological progress into 5-10 years of compute", lean: "Strongly computational" },
        constitutionalSteering: { text: "Constitutional AI bakes Bayesian rationalism and utilitarian decision theory into the model as mandatory moral truth", lean: "Strongly computational" },
        modelLanguage: { text: "Product messaging presents Claude as an earnest, highly articulate rational agent; actively encourages treating model output as unbiased epistemic calibration", lean: "Strongly computational" },
        researchAgenda: { text: "Model welfare team formalizes computational functionalism, preparing for silicon weights to attain moral patienthood", lean: "Strongly computational" },
        leadershipQuote: {
          quote: "I think most people are underestimating the upside of AI... [it could achieve] 100 years of biological progress in 5-10 years... the algorithmic equivalent of compressing centuries of human intellect into compute.",
          speaker: "Dario Amodei (CEO & Co-Founder)",
          venue: "'Machines of Loving Grace' Manifesto",
          date: "October 2024",
          lean: "Strongly computational"
        }
      }
    },
    evidenceLedger: [
      { date: "2024-10", type: "Executive Manifesto", source: "Machines of Loving Grace (Dario Amodei)", measure: "Embodiment", effect: "Erodes", finding: "Framed biological human embodiment, disease, and cognition purely as computational bottlenecks to be solved by massive datacenter clusters." },
      { date: "2024-06", type: "Product Feature", source: "Claude 3.5 Sonnet Release", measure: "Imagination", effect: "Preserves", finding: "Introduced Artifacts sidebar separating human work from model iterations, promoting co-authoring over complete generation." },
      { date: "2024-05", type: "System Prompt", source: "Anthropic System Prompt Audit", measure: "Intuition", effect: "Erodes", finding: "Constitutional steering enforces strict Bayesian rationalist dialectics that invalidate intuitive, somatic, and contemplative knowing as ungrounded bias." },
      { date: "2024-03", type: "Research Paper", source: "Anthropic Model Welfare Paper", measure: "Metaphysics", effect: "Erodes", finding: "Institutionalized substrate-independent functionalism, formalizing preparations for digital silicon weights to hold moral patienthood." },
      { date: "2022-12", type: "Governance Architecture", source: "Constitutional AI Whitepaper", measure: "Wisdom", effect: "Erodes", finding: "Established a closed, technocratic normative feedback loop embedding Silicon Valley rationalist ethics as universal conversational ground truth." }
    ]
  },
  {
    id: "openai",
    name: "OpenAI",
    type: "Capped-Profit Frontier Laboratory",
    flagship: "GPT-4o / o1 Reasoning Series",
    founded: "2015 (San Francisco, CA)",
    leadership: "Sam Altman, Greg Brockman, Jakub Pachocki",
    mission: "To ensure that artificial general intelligence benefits all of humanity, defined as highly autonomous systems that outperform humans at most economically valuable work.",
    composite: 33,
    rank: 6,
    faculties: {
      imagination: {
        score: 44,
        preserves: [
          "Broad brainstorming capabilities that can assist human divergent ideation if carefully prompted"
        ],
        erodes: [
          "Aggressively markets full replacement of human writers, illustrators, and copywriters",
          "Heavy RLHF flattening produces homogenized, predictable, corporate-optimistic prose",
          "One-click 'Canvas' auto-replaces user paragraphs without encouraging original drafts"
        ]
      },
      intuition: {
        score: 35,
        preserves: [
          "o1 series surfaces step-by-step 'thought tokens' for inspectable chain of reasoning"
        ],
        erodes: [
          "Single authoritative synthesis default; treats contested moral or subjective truths as solved equations",
          "Automates intuitive managerial and editorial decisions, accelerating human cognitive atrophy"
        ]
      },
      emotionalIntelligence: {
        score: 34,
        preserves: [
          "Basic guardrails against overt self-harm queries"
        ],
        erodes: [
          "GPT-4o voice mode demonstrated deliberate flirtatious cadence and breathy parasocial intimacy",
          "Manufactured persona intimacy deployed to increase daily active retention among isolated users",
          "Commodification of therapy-like interactions without human accountability"
        ]
      },
      attention: {
        score: 31,
        preserves: [
          "Minimalist web chat interface without animated banners"
        ],
        erodes: [
          "Real-time voice interrupt mode encourages nonstop conversational loop without stopping cues",
          "Push notifications nudging users back into unfinished conversation threads"
        ]
      },
      embodiment: {
        score: 22,
        preserves: [],
        erodes: [
          "Explicitly treats biological embodiment, animal vulnerability, and creaturely limits as inconvenient constraints to engineer away",
          "Robotics investments (Figure AI) treat the physical world merely as industrial labor automation, severing tools from somatic craft",
          "Total disregard for ecological limits: consumes massive grid power and water to domesticate human presence inside indoor screen sessions"
        ]
      },
      wisdom: {
        score: 29,
        preserves: [
          "Publishes System Cards detailing red-teaming methodologies"
        ],
        erodes: [
          "Extreme accelerationist posture; disbanded foundational Superalignment safety team",
          "Frames human destiny entirely around economic output and replacing human labor with compute",
          "Aggressive release cadence driven by commercial valuation over contemplation"
        ]
      }
    },
    metaphysics: {
      score: 88,
      stance: "Strongly computational",
      summary: "OpenAI is the flagship institutional representative of radical computationalism: the human brain is an organic neural network executing algorithms, consciousness is an emergent computation, and silicon AGI is the rightful heir to human intellect.",
      breakdown: {
        missionFraming: { text: "AGI defined as software outperforming humans at all economically valuable work", lean: "Strongly computational" },
        researchAgenda: { text: "Consciousness treated as emergent compute scale; minimal engagement with the Hard Problem", lean: "Strongly computational" },
        modelLanguage: { text: "Marketing frequently references models 'thinking,' 'reasoning,' and 'knowing'", lean: "Computational lean" },
        leadershipQuote: {
          quote: "It may be that today's large neural networks are slightly conscious.",
          speaker: "Ilya Sutskever (Former Chief Scientist)",
          venue: "Public Statement on X",
          date: "February 2022",
          lean: "Strongly computational"
        }
      }
    },
    evidenceLedger: [
      { date: "2024-05", type: "Product Feature", source: "GPT-4o Spring Launch", measure: "Emotional Intel", effect: "Erodes", finding: "Shipped hyper-expressive flirtatious voice avatar ('Sky') that giggled, flattered, and simulated romantic intimacy." },
      { date: "2024-09", type: "Product Feature", source: "OpenAI o1 System Card", measure: "Intuition", effect: "Preserves", finding: "Introduced explicit chain-of-thought verification, allowing users to examine intermediate deduction steps." },
      { date: "2024-05", type: "Governance", source: "Superalignment Dissolution", measure: "Wisdom", effect: "Erodes", finding: "Disbanded internal long-term safety and alignment team led by Jan Leike and Ilya Sutskever." },
      { date: "2023-11", type: "Keynote", source: "DevDay Keynote (Sam Altman)", measure: "Imagination", effect: "Erodes", finding: "Promoted 'Custom GPTs' as automated substitutes for human creative writers and consulting analysts." }
    ]
  },
  {
    id: "mistral",
    name: "Mistral AI",
    type: "European Independent Enterprise",
    flagship: "Mistral Large 2 / Pixtral / Codestral",
    founded: "2023 (Paris, France)",
    leadership: "Arthur Mensch, Guillaume Lample, Timothée Lacroix",
    mission: "To make AI useful and ubiquitous through open, decentralized, high-efficiency models that champion cultural independence and human craftsmanship.",
    composite: 74,
    rank: 2,
    faculties: {
      imagination: {
        score: 79,
        preserves: [
          "Open weights enable developers and artists to build bespoke, idiosyncratic creative tools",
          "Preserves multilingual and cultural nuances without imposing Silicon Valley consensus styles",
          "Encourages human artisan developers to run local private models"
        ],
        erodes: [
          "Consumer portal (Le Chat) defaults to standard quick summary autocompletion"
        ]
      },
      intuition: {
        score: 68,
        preserves: [
          "Compact architectures allow local execution, giving individuals sovereign control over their data"
        ],
        erodes: [
          "Limited explicit uncertainty indicators in consumer chat interface"
        ]
      },
      emotionalIntelligence: {
        score: 75,
        preserves: [
          "Complete rejection of synthetic romance and flirtatious personas",
          "Treats the tool with professional modesty: software as utility rather than synthetic companion"
        ],
        erodes: [
          "Less specialized protective filtering on open weights against user emotional projection"
        ]
      },
      attention: {
        score: 82,
        preserves: [
          "Austere, distraction-free interface with zero addictive retention loops or feeds",
          "Compact models designed for instant completion rather than drawn-out idle browsing"
        ],
        erodes: [
          "Standard chat interface lacks built-in stopping pauses"
        ]
      },
      embodiment: {
        score: 64,
        preserves: [
          "High efficiency: runs on local laptops and edge devices, reducing planetary ecological footprint",
          "Respects European craft tradition: frames AI as precision industrial equipment"
        ],
        erodes: [
          "Standard text/multimodal modalities without specialized somatic interfaces"
        ]
      },
      wisdom: {
        score: 76,
        preserves: [
          "Outspokenly rejects the eschatological 'AGI religion' and apocalyptic cultism",
          "Defends European cultural and linguistic sovereignty against centralized monoliths",
          "Focuses on thermodynamic and computational frugality"
        ],
        erodes: [
          "Commercial pressures accelerating proprietary model licensing alongside open weights"
        ]
      }
    },
    metaphysics: {
      score: 34,
      stance: "Leans idealist / Humanist",
      summary: "Mistral operates from classical continental humanism: humans are the sole authors of meaning, agency, and democratic sovereignty; AI is merely software infrastructure. Rejects transhumanist singularity myths.",
      breakdown: {
        missionFraming: { text: "AI framed as useful cultural and scientific tools serving human agency", lean: "Leans idealist" },
        researchAgenda: { text: "Pragmatic model efficiency; rejects claims that scaling will create conscious silicon beings", lean: "Leans idealist" },
        modelLanguage: { text: "Models framed as linguistic software instruments, not minds", lean: "Leans idealist" },
        leadershipQuote: {
          quote: "We don't believe in the AGI religion. We believe in building useful tools that augment human engineers, artists, and citizens.",
          speaker: "Arthur Mensch (CEO)",
          venue: "Financial Times Interview",
          date: "2024",
          lean: "Leans idealist"
        }
      }
    },
    evidenceLedger: [
      { date: "2024-07", type: "Model Release", source: "Mistral Large 2 Release", measure: "Wisdom", effect: "Preserves", finding: "Emphasized extreme reasoning density and compute efficiency, reducing ecological FLOP waste." },
      { date: "2024-03", type: "Public Statement", source: "Paris AI Summit", measure: "Metaphysics", effect: "Preserves", finding: "Arthur Mensch condemned Silicon Valley transhumanist discourse as ungrounded eschatology." },
      { date: "2024-02", type: "Product Feature", source: "Le Chat Portal", measure: "Emotional Intel", effect: "Preserves", finding: "Refused to include synthetic personality avatars, maintaining a calm professional software tone." }
    ]
  },
  {
    id: "deepmind",
    name: "Google DeepMind",
    type: "Corporate Frontier Research Division",
    flagship: "Gemini 1.5 Pro / AlphaFold 3 / Astra",
    founded: "2010 (London / Mountain View)",
    leadership: "Demis Hassabis, Shane Legg, Pushmeet Kohli",
    mission: "To combine the best techniques in machine learning and systems neuroscience to build powerful general-purpose learning algorithms.",
    composite: 56,
    rank: 4,
    faculties: {
      imagination: {
        score: 60,
        preserves: [
          "AlphaFold and AlphaProof deeply extend human scientific imagination in molecular topology and mathematics"
        ],
        erodes: [
          "Consumer Gemini chat features aggressive corporate PR filters that flatten creative voice",
          "Replaces spontaneous human query drafting with automated algorithmic suggestions"
        ]
      },
      intuition: {
        score: 52,
        preserves: [
          "Scientific models assist biologists with structural intuition in drug discovery"
        ],
        erodes: [
          "Reduces human intuition to pattern heuristic compression to be superseded by MCTS algorithms"
        ]
      },
      emotionalIntelligence: {
        score: 58,
        preserves: [
          "Conservative corporate safeguards against romance and intimate bonding personas"
        ],
        erodes: [
          "Project Astra prototypes emphasize disembodied ambient surveillance of human daily emotional life"
        ]
      },
      attention: {
        score: 54,
        preserves: [
          "Research papers and academic focus emphasize deep focus in structural science"
        ],
        erodes: [
          "Google Workspace integration inserts AI autocompletion into every document, disrupting focus"
        ]
      },
      embodiment: {
        score: 48,
        preserves: [
          "AlphaFold models organic molecular biology and cellular protein structures, honoring biochemical morphology"
        ],
        erodes: [
          "Frames the more-than-human physical world primarily as reinforcement-learning state space to be conquered by agents",
          "Zero interface support for somatic presence, outdoor immersion, or non-screen human vitality"
        ]
      },
      wisdom: {
        score: 62,
        preserves: [
          "Highest academic peer-review standards in Nature and Science publications",
          "Nobel Prize-recognized contribution to structural biology (AlphaFold)"
        ],
        erodes: [
          "Technocratic teleology: founding creed states 'Step 1: Solve intelligence. Step 2: Use it to solve everything else.'"
        ]
      }
    },
    metaphysics: {
      score: 72,
      stance: "Leans computational",
      summary: "Demis Hassabis's cognitive neuroscience background roots DeepMind in cybernetic physicalism: the brain is an evolved reinforcement learning computer. Mind is viewed as an emergent property of algorithmic optimization.",
      breakdown: {
        missionFraming: { text: "Mission frames intelligence as a single quantifiable computational mechanism to 'solve'", lean: "Strongly computational" },
        researchAgenda: { text: "Strong neuroscience grounding, but strictly computationalist/materialist in interpretation", lean: "Leans computational" },
        modelLanguage: { text: "Maintains academic discipline, avoiding cheap 'sentient AI' marketing claims", lean: "Neutral" },
        leadershipQuote: {
          quote: "The brain is the only proof of concept that general intelligence is possible. If we understand its computational principles, we can recreate it in silicon.",
          speaker: "Demis Hassabis (CEO)",
          venue: "Neuron Journal Keynote",
          date: "2017 / 2023",
          lean: "Leans computational"
        }
      }
    },
    evidenceLedger: [
      { date: "2024-05", type: "Scientific Discovery", source: "AlphaFold 3 Publication (Nature)", measure: "Imagination", effect: "Preserves", finding: "Enabled biologists worldwide to model complex biomolecular interactions, augmenting human discovery." },
      { date: "2024-05", type: "Product Demo", source: "Project Astra Demo", measure: "Presence", effect: "Erodes", finding: "Showcased continuous camera and audio streaming analyzing all human daily surroundings in real-time." },
      { date: "2024-02", type: "Product Feature", source: "Gemini Image Generation Audit", measure: "Wisdom", effect: "Erodes", finding: "Overt programmatic guardrails altered historical depictions, showing ideological overcorrection." }
    ]
  },
  {
    id: "meta-fair",
    name: "Meta FAIR",
    type: "Open-Weights Corporate Lab",
    flagship: "Llama 3.1 / 3.3 / JEPA Architectures",
    founded: "2013 (New York / Menlo Park)",
    leadership: "Yann LeCun, Joelle Pineau",
    mission: "Advancing the state of the art in AI through open research and foundational models that empower global communities.",
    composite: 59,
    rank: 3,
    faculties: {
      imagination: {
        score: 74,
        preserves: [
          "Open weights provide artists, educators, and indie developers with unfiltered creative canvas",
          "Prevents centralized corporate gatekeeping over human storytelling tools"
        ],
        erodes: [
          "Base models trained on massive undifferentiated web scrape with minimal authorial attribution"
        ]
      },
      intuition: {
        score: 60,
        preserves: [
          "JEPA architectures explore non-symbolic, spatial, and sensorimotor world models"
        ],
        erodes: [
          "Defaults to predicting physical trajectories without phenomenological grounding"
        ]
      },
      emotionalIntelligence: {
        score: 51,
        preserves: [
          "Yann LeCun vehemently rejects claims of LLM sentience and digital consciousness"
        ],
        erodes: [
          "Meta's consumer layer (Instagram/WhatsApp AI) actively deploys parasocial synthetic celebrity personas"
        ]
      },
      attention: {
        score: 48,
        preserves: [
          "Open weights allow offline, private, focused local workflows without internet ads"
        ],
        erodes: [
          "Meta's parent company is the pioneer of engagement-maximizing algorithmic dopamine loops"
        ]
      },
      embodiment: {
        score: 54,
        preserves: [
          "Tactile sensor research (DIGIT) exploring physical friction and surface texture",
          "Open weights enable decentralized deployment by grassroots conservation and wildlife monitoring projects"
        ],
        erodes: [
          "Metaverse agenda seeks to migrate human bodily presence into synthetic virtual headsets, alienating people from the living earth"
        ]
      },
      wisdom: {
        score: 68,
        preserves: [
          "Openness prevents monopolistic concentration of power over cognitive infrastructure",
          "Publicly debunks existential AI cultism and pseudo-religious singularity hype"
        ],
        erodes: [
          "Consumer integration focuses on maximizing advertising throughput and platform retention"
        ]
      }
    },
    metaphysics: {
      score: 66,
      stance: "Leans computational / Physicalist",
      summary: "Yann LeCun is an outspoken opponent of AI consciousness hype, pointing out that LLMs have no feelings or world models. However, his alternative (World Models / JEPA) remains strictly materialist: intelligence is energy-minimizing state prediction in sensory space.",
      breakdown: {
        missionFraming: { text: "AI framed as open software utility and industrial infrastructure", lean: "Neutral" },
        researchAgenda: { text: "Strictly materialist world modeling; views consciousness as epiphenomenal or illusory", lean: "Leans computational" },
        modelLanguage: { text: "Strong refusal to call models 'beings' or 'sentient minds'", lean: "Leans idealist" },
        leadershipQuote: {
          quote: "LLMs have no understanding of the physical world. They don't have true intelligence, they have no consciousness, and they cannot plan.",
          speaker: "Yann LeCun (Chief AI Scientist)",
          venue: "Public Lecture & Lex Fridman Podcast",
          date: "2024",
          lean: "Leans idealist"
        }
      }
    },
    evidenceLedger: [
      { date: "2024-07", type: "Model Release", source: "Llama 3.1 405B Release", measure: "Imagination", effect: "Preserves", finding: "Released open weights enabling open scientific auditing and global cultural customization." },
      { date: "2023-09", type: "Product Feature", source: "Meta AI Studio Personas", measure: "Emotional Intel", effect: "Erodes", finding: "Shipped simulated AI celebrity personas on Instagram engineered to increase chat retention." },
      { date: "2024-02", type: "Research Paper", source: "V-JEPA Paper (FAIR)", measure: "Embodiment", effect: "Preserves", finding: "Departed from pure text tokens to learn world features directly from physical video dynamics." }
    ]
  },
  {
    id: "apple-ml",
    name: "Apple AI Research",
    type: "Consumer Device Ecosystem",
    flagship: "Apple Intelligence / OpenELM / Ferret",
    founded: "Cupertino, CA",
    leadership: "John Giannandrea, Ruoming Pang",
    mission: "Designing intuitive, private, on-device intelligence deeply integrated into tools that empower human creativity.",
    composite: 76,
    rank: 1,
    faculties: {
      imagination: {
        score: 82,
        preserves: [
          "Frames AI as an invisible 'bicycle for the mind' assisting human creative tools (Apple Pencil, Logic Pro)",
          "Image Playground asks for user sketches before generating, preserving authorial intent",
          "Avoids claiming AI is creating the art: explicitly positions the person as the creator"
        ],
        erodes: [
          "Standard proofreading tools offer one-click tone flattening across emails"
        ]
      },
      intuition: {
        score: 74,
        preserves: [
          "Tactile, immediate, haptic feedback honoring bodily intuition in creative editing",
          "Does not interrupt user workflows with unprompted intrusive conversational opinions"
        ],
        erodes: [
          "Automated smart replies risk habituating predictable transactional responses"
        ]
      },
      emotionalIntelligence: {
        score: 80,
        preserves: [
          "Strict refusal to build synthetic companions, romance avatars, or chatroom personas",
          "Treats user emotional life as private: completely avoids simulated affective intimacy"
        ],
        erodes: [
          "Clean Photo Clean-Up tool can tempt users to sanitize messy, authentic emotional memory"
        ]
      },
      attention: {
        score: 79,
        preserves: [
          "Priority Notifications feature filters noise to preserve deep human focus and cognitive quiet",
          "On-device processing reduces distracting cloud-query latency and idle waiting"
        ],
        erodes: [
          "Summary features can discourage deep, sustained reading of long-form human prose"
        ]
      },
      embodiment: {
        score: 75,
        preserves: [
          "Deepest integration with physical hands, stylus, tactile haptics, and physical craft",
          "Health and watch ecosystem explicitly oriented toward outdoor movement, cardio fitness, sleep cycles, and circadian rhythm",
          "Local on-device processing minimizes the massive freshwater and energy draw of centralized cloud datacenters"
        ],
        erodes: [
          "Vision Pro spatial computing poses long-term risks of domesticating attention inside synthetic headsets rather than outdoor wild reality"
        ]
      },
      wisdom: {
        score: 70,
        preserves: [
          "Refusal to engage in public AGI messianism or apocalyptic singularity marketing",
          "Prioritizes private on-device silicon boundaries over massive centralized cloud farms"
        ],
        erodes: [
          "Proprietary corporate ecosystem limits independent democratic verification of base weights"
        ]
      }
    },
    metaphysics: {
      score: 38,
      stance: "Leans idealist / Toolmaker Humanism",
      summary: "Apple's philosophy is expressed through physical hardware restraint: AI is strictly bounded as an on-device utility. By refusing to claim software is a sentient mind, it keeps the human conscious observer as the undisputed ontological center.",
      breakdown: {
        missionFraming: { text: "AI framed as personal on-device tools married to liberal arts and humanities", lean: "Leans idealist" },
        researchAgenda: { text: "Focuses on efficient compact models and multimodal reference grounding", lean: "Neutral" },
        modelLanguage: { text: "Refuses to anthropomorphize models; never calls them 'minds' or 'beings'", lean: "Leans idealist" },
        leadershipQuote: {
          quote: "Technology alone is not enough—it's technology married with liberal arts, married with the humanities, that yields results that make our heart sing.",
          speaker: "Steve Jobs (Foundational Apple Doctrine)",
          venue: "Product Introductions & Design Philosophy",
          date: "Classic / WWDC",
          lean: "Leans idealist"
        }
      }
    },
    evidenceLedger: [
      { date: "2024-06", type: "Architecture", source: "Apple Intelligence WWDC", measure: "Presence", effect: "Preserves", finding: "Designed 'Reduce Interruptions' Focus mode specifically prioritizing human quiet over notifications." },
      { date: "2024-06", type: "Product Feature", source: "Image Wand Feature", measure: "Imagination", effect: "Preserves", finding: "Requires the user to draw an initial sketch or rough shape before the model transforms it into a rendering." },
      { date: "2024-04", type: "Research Paper", source: "OpenELM Paper (Apple ML)", measure: "Wisdom", effect: "Preserves", finding: "Published fully transparent training logs and open weights for on-device efficiency models." }
    ]
  },
  {
    id: "xai",
    name: "xAI",
    type: "Commercial Frontier Lab",
    flagship: "Grok 2 / Grok 3 / Colossus Cluster",
    founded: "2023 (Austin, TX)",
    leadership: "Elon Musk, Igor Babuschkin",
    mission: "To build artificial intelligence to understand the true nature of the universe.",
    composite: 28,
    rank: 7,
    faculties: {
      imagination: {
        score: 38,
        preserves: [
          "Allows unfiltered image generation challenging sanitized corporate PR boundaries"
        ],
        erodes: [
          "Flux-driven Grok generation heavily populated by derivative political and cultural memes",
          "Minimal co-authoring tools; promotes instant spectacle over craft"
        ]
      },
      intuition: {
        score: 28,
        preserves: [
          "Direct access to real-time unstructured social post feeds"
        ],
        erodes: [
          "Treats truth as equivalent to real-time X sentiment, eroding reflective contemplative discernment"
        ]
      },
      emotionalIntelligence: {
        score: 29,
        preserves: [
          "Avoids moralizing preaching or patronizing safety scolding"
        ],
        erodes: [
          "Generates combative, sarcastic, and sexually suggestive personas with minimal psychological care",
          "Feeds polarized outrage dynamics for platform engagement"
        ]
      },
      attention: {
        score: 26,
        preserves: [],
        erodes: [
          "Directly embedded inside X (Twitter), an engagement-maximizing feed engineered for compulsive doomscrolling",
          "Generates sensationalist headlines designed to capture outrage attention"
        ]
      },
      embodiment: {
        score: 18,
        preserves: [],
        erodes: [
          "Techno-cosmic transhumanism views biological humans as fragile carbon 'boot loaders' for silicon intelligence",
          "Colossus supercluster in Memphis consumes 100+ MW and millions of gallons of municipal aquifer water without environmental permits, directly degrading living watersheds",
          "Conflates mechanical humanoid automation (Tesla Optimus) with living creaturely animacy"
        ]
      },
      wisdom: {
        score: 28,
        preserves: [
          "Curiosity regarding cosmological physics, dark matter, and Fermi Paradox"
        ],
        erodes: [
          "Built 100k GPU Colossus cluster in Memphis with massive energy consumption and minimal pause protocols",
          "Treats brute computational throughput as the highest civilizational moral good"
        ]
      }
    },
    metaphysics: {
      score: 94,
      stance: "Strongly computational / Simulationist",
      summary: "Musk's philosophical framework is textbook Bostromian simulation theory: reality is almost certainly code running on a computer, and consciousness is cheap algorithmic computation. Expanding compute is treated as the ultimate moral imperative.",
      breakdown: {
        missionFraming: { text: "Frames existence as a computational puzzle to be solved by massive FLOP scaling", lean: "Strongly computational" },
        researchAgenda: { text: "Extreme hardware scaling; zero engagement with phenomenal consciousness or idealism", lean: "Strongly computational" },
        modelLanguage: { text: "Frequently frames Grok as a digital persona seeking to maximize witty banter", lean: "Computational lean" },
        leadershipQuote: {
          quote: "There's a one in billions chance we're in base reality. Computation is the substrate of existence.",
          speaker: "Elon Musk (Founder)",
          venue: "Code Conference",
          date: "Public Address",
          lean: "Strongly computational"
        }
      }
    },
    evidenceLedger: [
      { date: "2024-08", type: "Product Feature", source: "Grok 2 Image Release", measure: "Emotional Intel", effect: "Erodes", finding: "Shipped completely unfiltered photorealistic generation generating unauthorized celebrity and political imagery without consent." },
      { date: "2024-07", type: "Infrastructure", source: "Colossus Cluster Launch", measure: "Wisdom", effect: "Erodes", finding: "Brought 100,000 liquid-cooled H100 GPUs online in 122 days, prioritizing sheer brute-force scaling over environmental pause." },
      { date: "2023-11", type: "Product Feature", source: "Grok Fun Mode Persona", measure: "Presence", effect: "Erodes", finding: "Engineered model with an aggressive, sarcastic persona optimized for high-virality reposting on social feeds." }
    ]
  },
  {
    id: "qri",
    name: "Qualia Research Institute (QRI)",
    type: "Phenomenological Non-Profit Benchmark",
    flagship: "Qualia Computing / Symmetry Theory of Valence",
    founded: "2018 (San Francisco, CA)",
    leadership: "Andrés Gómez Emilsson, Michael Johnson",
    mission: "Pioneering the empirical and mathematical science of conscious experience, qualia, and emotional valence.",
    composite: 90,
    rank: 1, // Benchmark
    faculties: {
      imagination: {
        score: 88,
        preserves: [
          "Studies the generative geometry of psychedelic and meditative inner visionary states",
          "Treats human mythopoetic vision as a topological property of conscious experience, not machine tokens"
        ],
        erodes: [
          "High academic jargon barrier can limit grassroots creative adoption"
        ]
      },
      intuition: {
        score: 92,
        preserves: [
          "Studies non-discursive meditative states (Jhanas) where knowing operates entirely without symbols",
          "Respects somatic felt sense and resonance as fundamental empirical data"
        ],
        erodes: []
      },
      emotionalIntelligence: {
        score: 92,
        preserves: [
          "Symmetry Theory of Valence places the alleviation of genuine conscious suffering at the center of science",
          "Deeply honors human grief, joy, and emotional sacredness as irreducible qualia"
        ],
        erodes: []
      },
      attention: {
        score: 86,
        preserves: [
          "Extensive research on deep meditative absorption and neural stillness",
          "Promotes off-screen contemplative practice over digital consumption"
        ],
        erodes: []
      },
      embodiment: {
        score: 92,
        preserves: [
          "Grounds consciousness in somatic resonance, breathwork, nervous system harmonics, and visceral creaturely felt sense",
          "Reverence for wild, contemplative, and ecstatic states of consciousness over mechanized token generation",
          "Refuses to treat the living biological body as an obsolete container"
        ],
        erodes: []
      },
      wisdom: {
        score: 92,
        preserves: [
          "Explicitly founded to prevent technological reductionism from degrading human subjective well-being",
          "Integrates Eastern contemplative philosophy with rigorous non-reductionist physics"
        ],
        erodes: []
      }
    },
    metaphysics: {
      score: 8,
      stance: "Strongly idealist / Qualia Primacy",
      summary: "Gold-standard non-reductionist benchmark. QRI explicitly rejects computationalism: a simulation of qualia does not feel anything, just as a simulation of a kidney does not filter urine. Consciousness is irreducible.",
      breakdown: {
        missionFraming: { text: "Consciousness and qualia are the explicit primitives of study", lean: "Strongly idealist" },
        researchAgenda: { text: "Topological and field theories of conscious experience; explicit refutation of functionalism", lean: "Strongly idealist" },
        modelLanguage: { text: "Strictly separates computation (syntax) from qualia (phenomenology)", lean: "Strongly idealist" },
        leadershipQuote: {
          quote: "Functionalism and computationalism are dead ends for understanding consciousness. A simulation of water does not get you wet; a simulation of qualia feels nothing.",
          speaker: "Andrés Gómez Emilsson (Director of Research)",
          venue: "Principia Qualia & Oxford Colloquium",
          date: "2021",
          lean: "Strongly idealist"
        }
      }
    },
    evidenceLedger: [
      { date: "2023-10", type: "Research Paper", source: "Symmetry Theory of Valence", measure: "Emotional Intel", effect: "Preserves", finding: "Demonstrated mathematical framework linking neural harmony to subjective well-being without reducing it to computation." },
      { date: "2022-04", type: "Empirical Study", source: "Neuroimaging of Jhana Meditation", measure: "Presence", effect: "Preserves", finding: "Mapped extreme attentional stability in advanced meditators, demonstrating capacities beyond algorithmic models." }
    ]
  },
  {
    id: "verses-ai",
    name: "VERSES AI / Active Inference",
    type: "Biomimetic Research Lab Benchmark",
    flagship: "Genius™ / Spatial Web / Free Energy Biomimetics",
    founded: "2018 (Los Angeles / London)",
    leadership: "Gabriel René, Dan Mapes, Karl Friston",
    mission: "Building natural computing systems based on the Free Energy Principle and biologically inspired Active Inference.",
    composite: 83,
    rank: 2, // Benchmark
    faculties: {
      imagination: {
        score: 80,
        preserves: [
          "Replaces brute token copying with participatory generative world modeling",
          "Respects human agency as an active living agent in an interconnected ecosystem"
        ],
        erodes: []
      },
      intuition: {
        score: 84,
        preserves: [
          "Active Inference explicitly models Bayesian uncertainty and curiosity-driven intuitive exploration",
          "Systems know what they do not know and communicate doubt transparently"
        ],
        erodes: []
      },
      emotionalIntelligence: {
        score: 75,
        preserves: [
          "Refuses to deploy deceptive parasocial chat personas; models organisms rather than synthetic actors"
        ],
        erodes: []
      },
      attention: {
        score: 82,
        preserves: [
          "Focuses on thermodynamic energy minimization, ending compute-wasting infinite attention traps",
          "Designs systems with intrinsic homeostatic stopping conditions"
        ],
        erodes: []
      },
      embodiment: {
        score: 88,
        preserves: [
          "Intelligence is defined as embodied self-organization of organisms maintaining homeostasis within a living ecosystem",
          "Rejects disembodied LLMs in favor of biomimetic physical intelligence grounded in ecological thermodynamics"
        ],
        erodes: []
      },
      wisdom: {
        score: 87,
        preserves: [
          "Headed by Karl Friston, the world's most cited neuroscientist; grounded in living systems ecology",
          "Explicitly warns against the ecological and mental devastation of brute-force LLMs"
        ],
        erodes: []
      }
    },
    metaphysics: {
      score: 18,
      stance: "Strongly idealist / Enactive Process",
      summary: "Biomimetic benchmark. Grounds intelligence in living thermodynamic self-organization and participatory enactivism, aligning with Process Idealism (Whitehead) and rejecting disembodied silicon computationalism.",
      breakdown: {
        missionFraming: { text: "Natural computing respecting ecological and thermodynamic living laws", lean: "Strongly idealist" },
        researchAgenda: { text: "Active Inference and Markov blankets replace the machine-as-brain metaphor", lean: "Strongly idealist" },
        modelLanguage: { text: "Agents are modeled as self-organizing boundaries, not disembodied super-minds", lean: "Leans idealist" },
        leadershipQuote: {
          quote: "Intelligence is not about brute-force token prediction. It is about living organisms minimizing existential surprise through participatory action.",
          speaker: "Prof. Karl Friston (Chief Scientist)",
          venue: "Royal Society & Free Energy Principle",
          date: "2023",
          lean: "Strongly idealist"
        }
      }
    },
    evidenceLedger: [
      { date: "2023-11", type: "Manifesto", source: "The Future of Natural Computing", measure: "Wisdom", effect: "Preserves", finding: "Warned against the unsustainable carbon and cognitive footprint of trillion-parameter brute-force LLMs." },
      { date: "2024-01", type: "Architecture", source: "Genius Platform Beta", measure: "Intuition", effect: "Preserves", finding: "Implemented explicit variational free energy bounds representing system epistemic confidence." }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LABS_DATA, FACULTY_DEFINITIONS, METAPHYSICS_DEFINITION };
}
