const SYLLABUS_TOPICS = [
    {
        id: "current",
        title: "Electric Current",
        category: "Electricity",
        color: "#4CC9F0",
        description: "The rate of flow of electric charge through a cross-section.",
        content: {
            essentialNeeds: "Before studying this, you should know about: <br>1. Charge (Q) and its properties.<br>2. Basic atomic structure (free electrons).<br>3. Concept of Potential Difference.",
            diagram: `<svg viewBox="0 0 200 100" class="diagram-svg">
                <rect x="20" y="30" width="160" height="40" fill="none" stroke="#4CC9F0" stroke-width="2"/>
                <circle cx="40" cy="50" r="5" fill="#F72585"><animate attributeName="cx" from="40" to="160" dur="2s" repeatCount="indefinite"/></circle>
                <circle cx="80" cy="50" r="5" fill="#F72585"><animate attributeName="cx" from="80" to="200" dur="2s" repeatCount="indefinite"/></circle>
                <circle cx="120" cy="50" r="5" fill="#F72585"><animate attributeName="cx" from="120" to="240" dur="2s" repeatCount="indefinite"/></circle>
                <text x="70" y="90" fill="white" font-size="10">Electron Flow</text>
            </svg>`,
            theory: `
                <p><strong>Electric Current (I)</strong> is defined as the rate at which electric charge passes through a cross-section of a conductor.</p>
                <p class="formula">I = dQ/dt</p>
                <p><strong>Steady Current:</strong> If the rate of flow of charge is constant, then I = Q/t.</p>
                <p><strong>SI Unit:</strong> Ampere (A). 1 A = 1 C/s.</p>
                <p><strong>Drift Velocity (v_d):</strong> The small average velocity with which free electrons drift towards the positive end of the conductor under the influence of an external electric field.</p>
            `,
            derivation: `
                <div class="handwritten">
                <h4>Relation: Current & Drift Velocity</h4>
                <p>Let's consider a conductor:</p>
                <ul>
                    <li>Length = L, Area = A</li>
                    <li>Volume = A × L</li>
                    <li>n = electron density (electrons/vol)</li>
                    <li>Total electrons N = nAL</li>
                    <li>Total Charge Q = Ne = nALe</li>
                </ul>
                <p>Time taken t = Distance / Speed = L / v_d</p>
                <p>Current I = Q / t = (nALe) / (L/v_d)</p>
                <p class="highlight">I = nAv_d e</p>
                <p>This is the fundamental relation!</p>
                </div>
            `,
            numericals: [
                { q: "A current of 5 A flows through a wire for 2 minutes. How much charge flows?", a: "Given:\nI = 5 A\nt = 2 min = 120 s\n\nSolution:\nQ = I × t\nQ = 5 × 120\nQ = 600 C" },
                { q: "Copper wire has A = 10^-6 m^2. it carries 3A current. If n = 8.5 x 10^28 /m^3, find drift velocity.", a: "Given:\nI = 3A, A=10^-6, n=8.5x10^28\n\nFormula:\nI = nAv_d e\n\nRearranging:\nv_d = I / (nAe)\nv_d = 3 / (8.5x10^28 * 10^-6 * 1.6x10^-19)\nv_d ≈ 2.2 x 10^-4 m/s" }
            ],
            questions: [
                "Define Electric Current and Drift Velocity.",
                "Derive the relation I = nAv_d e.",
                "What is the direction of conventional current vs electron flow?"
            ],
            mcqs: [
                { q: "SI Unit of Current is:", options: ["Volt", "Ampere", "Coulomb", "Ohm"], correct: 1 },
                { q: "Drift velocity is of the order of:", options: ["10^4 m/s", "10^-4 m/s", "3x10^8 m/s", "1 m/s"], correct: 1 }
            ]
        }
    },
    {
        id: "resistance",
        title: "Resistance",
        category: "Electricity",
        color: "#4895EF",
        description: "Opposition to current flow.",
        content: {
            essentialNeeds: "Prerequisites: ohm's law basics, concept of collisions in lattice.",
            diagram: `<svg viewBox="0 0 200 60" class="diagram-svg">
                <path d="M10 30 L40 30 L50 10 L70 50 L90 10 L110 50 L130 10 L150 50 L160 30 L190 30" fill="none" stroke="white" stroke-width="2"/>
                <text x="80" y="55" fill="#ccc" font-size="10">Resistor Symbol</text>
            </svg>`,
            theory: `
                <p><strong>Resistance (R)</strong> opposes charge flow. Caused by collisions of electrons with atoms/ions.</p>
                <p class="formula">R = V/I</p>
                <p><strong>Laws of Resistance:</strong></p>
                <ul>
                    <li>R ∝ L (Length)</li>
                    <li>R ∝ 1/A (Area)</li>
                </ul>
                <p>Combined: R = ρ (L/A)</p>
            `,
            derivation: `
                <div class="handwritten">
                <h4>Derivation: R from Microscopic Quantities</h4>
                <p>We know: I = nAv_d e</p>
                <p>And drift velocity: v_d = (eE/m)τ</p>
                <p>Substitute v_d in equation 1:</p>
                <p>I = nAe [ (eE/m)τ ] = (nAe²τ/m) E</p>
                <p>Since Electric Field E = V/L:</p>
                <p>I = (nAe²τ/m) (V/L)</p>
                <p>V/I = (m/(ne²τ)) * (L/A)</p>
                <p>Comparing with R = ρ(L/A), we identify:</p>
                <p>Resistance R = (mL) / (nAe²τ)</p>
                </div>
            `,
            numericals: [
                { q: "A 10m long wire has resistance 20Ω. If it is stretched to 20m, new resistance?", a: "Recall: Volume is constant.\nLength L becomes 2L.\nArea A becomes A/2.\n\nR_new = ρ(2L)/(A/2) = 4 * ρ(L/A)\nR_new = 4 * R_old = 4 * 20 = 80Ω" }
            ],
            questions: [
                "Factors affecting Resistance?",
                "What is the effect of temp on Resistance of conductors?",
                "Derive R = m/(ne²τ) * (L/A)"
            ],
            mcqs: [
                { q: "Resistance is inversely proportional to:", options: ["Length", "Area of cross-section", "Temperature", "None"], correct: 1 },
                { q: "Unit of Resistance:", options: ["Mho", "Ohm", "Siemen", "Henry"], correct: 1 }
            ]
        }
    },
    {
        id: "ampere-law",
        title: "Ampere's Law",
        category: "Magnetism",
        color: "#7209B7",
        description: "B-field relation to Current.",
        content: {
            essentialNeeds: "Prerequisites: Vector calculus basics (Line integral), Right Hand Thumb Rule.",
            diagram: "", // TODO: Add later if needed
            theory: `
                <p>Line integral of magnetic field around a closed loop equals μ₀ times current enclosed.</p>
                <p class="formula">∮ B · dl = μ₀ I_in</p>
            `,
            derivation: `
                <div class="handwritten">
                <h4>Proof (Straight Wire)</h4>
                <p>1. Consider long wire carrying I.</p>
                <p>2. Amperian loop: Circle of radius r.</p>
                <p>3. B is tangent to loop everywhere.</p>
                <p>4. LHS: ∮ B · dl = ∫ B dl cos(0) = B ∫ dl = B(2πr)</p>
                <p>5. RHS: μ₀ I</p>
                <p>6. Equating: B(2πr) = μ₀ I</p>
                <p class="highlight">B = (μ₀ I) / (2πr)</p>
                </div>
            `,
            numericals: [
                { q: "Find B at distance 5cm from wire carrying 100A.", a: "Given:\nr = 5cm = 0.05m\nI = 100A\n\nB = (4πx10^-7 * 100) / (2π * 0.05)\nB = (2x10^-7 * 100) / 0.05\nB = 4 x 10^-4 T" }
            ],
            questions: ["State and prove Ampere's law."],
            mcqs: [
                { q: "Ampere's law is valid for:", options: ["Closed loops", "Open Surfaces", "Any path", "Straight lines"], correct: 0 }
            ]
        }
    },
    {
        id: "solenoid",
        title: "Solenoid",
        category: "Magnetism",
        color: "#B5179E",
        description: "Long coil magnetism.",
        content: {
            essentialNeeds: "Understand Ampere's Law first.",
            diagram: `<svg viewBox="0 0 200 80" class="diagram-svg">
                <defs><pattern id="coil" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M0 10 Q10 0 20 10 T40 10" fill="none" stroke="#B5179E" stroke-width="2"/></pattern></defs>
                <rect x="0" y="20" width="200" height="40" fill="url(#coil)" />
                <line x1="0" y1="40" x2="200" y2="40" stroke="#4CC9F0" stroke-width="1" stroke-dasharray="5,5" />
                <text x="80" y="70" fill="white" font-size="10">Solenoid</text>
            </svg>`,
            theory: "A solenoid acts like a bar magnet. Field is uniform inside.",
            derivation: `
                <div class="handwritten">
                <h4>Derivation B = μ₀nI</h4>
                <p>Consider Rectangular Loop PQRS:</p>
                <p>- Side PQ (length L) inside solenoid.</p>
                <p>- Sides QR, SP perpendicular to B (dot product 0).</p>
                <p>- Side RS outside (B approx 0).</p>
                <br>
                <p>Integral ∮ B·dl = B × L</p>
                <p>Current Enclosed = (Turns per unit length 'n' × L) × I</p>
                <p>I_enclosed = nLI</p>
                <br>
                <p>By Ampere's Law:</p>
                <p>BL = μ₀ (nLI)</p>
                <p class="highlight">B = μ₀nI</p>
                </div>
            `,
            numericals: [],
            questions: ["Derive expression for B inside solenoid."],
            mcqs: [
                { q: "Field inside ideal solenoid is:", options: ["Zero", "Non-uniform", "Uniform", "Infinite"], correct: 2 }
            ]
        }
    },
    {
        id: "toroid",
        title: "Toroid",
        category: "Magnetism",
        color: "#F72585",
        description: "Endless solenoid.",
        content: {
            essentialNeeds: "Understand Ampere's Law & Solenoid.",
            diagram: `<svg viewBox="0 0 100 100" class="diagram-svg">
                <circle cx="50" cy="50" r="30" fill="none" stroke="#F72585" stroke-width="5" />
                <text x="35" y="55" fill="white" font-size="8">Toroid</text>
            </svg>`,
            theory: "Hollow circular ring with winding.",
            derivation: `
                <div class="handwritten">
                <h4>Magnetic Field Regions</h4>
                <p><strong>1. Inside the Core (r):</strong></p>
                <p>B = (μ₀ N I) / (2πr) = μ₀nI</p>
                <br>
                <p><strong>2. Outside Toroid:</strong></p>
                <p>Current enclosed is zero.</p>
                <p class="highlight">B = 0</p>
                <br>
                <p><strong>3. Inside Empty Space (Center):</strong></p>
                <p>No current enclosed.</p>
                <p class="highlight">B = 0</p>
                </div>
            `,
            numericals: [],
            questions: ["Show that B is zero outside a toroid."],
            mcqs: [
                { q: "Magnetic field in the hollow space inside toroid ring is:", options: ["Maximum", "Zero", "Uniform", "Infinite"], correct: 1 }
            ]
        }
    },
    {
        id: "faraday-law",
        title: "Faraday's Law",
        category: "Electromagnetism",
        color: "#FF9E00",
        description: "Electromagnetic Induction.",
        content: {
            essentialNeeds: "Know Magnetic Flux (Φ = B·A).",
            diagram: "",
            theory: "Change in magnetic flux induces EMF.",
            derivation: `
                <div class="handwritten">
                <h4>Laws</h4>
                <p>1. First Law: Whenever flux changes, EMF is induced.</p>
                <p>2. Second Law: Magnitude is prop. to rate of change.</p>
                <p>|ε| ∝ dΦ/dt</p>
                <p>With Lenz Law (Direction):</p>
                <p class="highlight">ε = -N (dΦ/dt)</p>
                </div>
            `,
            numericals: [
                { q: "Flux changes from 100 Wb to 50 Wb in 5 seconds. Find EMF.", a: "dΦ = 50 - 100 = -50 Wb\ndt = 5 s\n\nε = - (dΦ/dt)\nε = - (-50 / 5)\nε = 10 Volts" }
            ],
            questions: ["State Faraday's laws of EMI."],
            mcqs: [
                { q: "Lenz law is a consequence of conservation of:", options: ["Charge", "Momentum", "Energy", "Mass"], correct: 2 }
            ]
        }
    },
    {
        id: "semiconductors",
        title: "Semiconductors",
        category: "Semiconductors",
        color: "#00B4D8",
        description: "Materials with conductivity between conductor & insulator.",
        content: {
            essentialNeeds: "Band theory of solids (Valence vs Conduction band).",
            diagram: `<svg viewBox="0 0 200 100" class="diagram-svg">
                <rect x="20" y="20" width="60" height="60" fill="#00B4D8" opacity="0.5"/>
                <text x="35" y="55" fill="white" font-size="10">P-Type</text>
                <rect x="80" y="20" width="60" height="60" fill="#0077B6" opacity="0.5"/>
                 <text x="95" y="55" fill="white" font-size="10">N-Type</text>
                 <line x1="80" y1="20" x2="80" y2="80" stroke="white" stroke-width="1"/>
            </svg>`,
            theory: "P-type (Holes majority). N-type (Electrons majority). PN Junction forms depletion layer.",
            derivation: `
                <div class="handwritten">
                <h4>PN Junction / Diode</h4>
                <p><strong>Forward Bias:</strong></p>
                <p>P connected to (+), N to (-).</p>
                <p>Depletion layer decreases. Current flows.</p>
                <br>
                <p><strong>Reverse Bias:</strong></p>
                <p>P connected to (-), N to (+).</p>
                <p>Depletion layer increases. No current (ideal).</p>
                </div>
            `,
            numericals: [],
            questions: ["Distinguish between intrinsic and extrinsic semiconductors.", "Explain Forward and Reverse Biasing."],
            mcqs: [
                { q: "Majority carriers in N-type:", options: ["Holes", "Protons", "Electrons", "Neutrons"], correct: 2 }
            ]
        }
    },
    {
        id: "resistivity_conductance",
        title: "Resistivity & Conductance",
        category: "Electricity",
        color: "#F15BB5",
        description: "Properties of materials opposing or aiding current.",
        content: {
            essentialNeeds: "Concept of Resistance R = ρL/A.",
            diagram: "",
            theory: `
                <p><strong>Resistivity (ρ):</strong> Specific resistance of a material. Independent of shape/size.</p>
                <p class="formula">ρ = RA / L</p>
                <p><strong>Conductance (G):</strong> Reciprocal of Resistance. Ease of flow.</p>
                <p class="formula">G = 1 / R</p>
                <p><strong>Conductivity (σ):</strong> Reciprocal of Resistivity.</p>
                <p class="formula">σ = 1 / ρ</p>
            `,
            derivation: `
                <div class="handwritten">
                <h4>Relations</h4>
                <p>R = ρ(L/A)</p>
                <p>G = 1/R = (A/ρL) = σ(A/L)</p>
                <p>Ohm's Law Vector Form:</p>
                <p>J = σE</p>
                </div>
            `,
            numericals: [
                { q: "Wire length 2m, area 1mm², R=4Ω. Find Resistivity.", a: "ρ = RA/L\nA = 10^-6 m²\nρ = (4 × 10^-6) / 2\nρ = 2 × 10^-6 Ωm" }
            ],
            questions: ["Define Resistivity and Conductivity.", "Derive J = σE."],
            mcqs: [
                { q: "Unit of Conductivity is:", options: ["Ohm-m", "Mho/m", "Volt/m", "Tesla"], correct: 1 }
            ]
        }
    },
    {
        id: "ohms_law_limit",
        title: "Ohm's Law & Limitations",
        category: "Electricity",
        color: "#9B5DE5",
        description: "V=IR and where it fails.",
        content: {
            essentialNeeds: "Graph of V vs I for conductors.",
            diagram: `<svg viewBox="0 0 200 100" class="diagram-svg">
                <line x1="20" y1="80" x2="180" y2="80" stroke="#888" stroke-width="1"/>
                <line x1="20" y1="80" x2="20" y2="20" stroke="#888" stroke-width="1"/>
                <path d="M20 80 Q100 20 180 80" fill="none" stroke="#F72585" stroke-dasharray="4"/>
                <line x1="20" y1="80" x2="100" y2="20" stroke="#4CC9F0" />
                <text x="120" y="30" fill="#4CC9F0" font-size="10">Ohmic</text>
                <text x="120" y="60" fill="#F72585" font-size="10">Non-Ohmic (Diode)</text>
            </svg>`,
            theory: `
                <p><strong>Ohm's Law:</strong> V ∝ I (at const temp).</p>
                <p><strong>Limitations:</strong></p>
                <ul>
                    <li>Non-linear elements (Diodes, Transistors).</li>
                    <li>Temperature dependence (R changes with T).</li>
                    <li>Superconductors.</li>
                </ul>
            `,
            derivation: "",
            numericals: [],
            questions: ["State Ohm's Law.", "Give two examples of non-ohmic conductors."],
            mcqs: [
                { q: "Ohm's law is applicable to:", options: ["Diodes", "Metals at const temp", "Transistors", "Arc lamps"], correct: 1 }
            ]
        }
    },
    {
        id: "hall_effect",
        title: "Hall Effect",
        category: "Magnetism",
        color: "#00F5D4",
        description: "Voltage generation in conductor in B-field.",
        content: {
            essentialNeeds: "Lorentz Force [F = q(v x B)].",
            diagram: `<svg viewBox="0 0 200 100" class="diagram-svg">
                <rect x="40" y="30" width="120" height="40" fill="rgba(0,245,212,0.1)" stroke="#00F5D4"/>
                <text x="90" y="55" fill="white" font-size="10">Conductor</text>
                <path d="M100 20 L100 80" stroke="white" marker-end="url(#arrow)" />
                <text x="110" y="30" fill="white" font-size="10">B Field</text>
            </svg>`,
            theory: "When a current carrying conductor is placed in a magnetic field, a potential difference (Hall Voltage) is generated transverse to both current and field.",
            derivation: `
                <div class="handwritten">
                <h4>Hall Voltage V_H</h4>
                <p>At equilibrium, Electric Force = Magnetic Force</p>
                <p>qE_H = qv_d B</p>
                <p>E_H = v_d B</p>
                <p>We know V_H = E_H * d (width)</p>
                <p>V_H = v_d B d</p>
                <p>Also I = nAev_d -> v_d = I/(nAe)</p>
                <p class="highlight">V_H = (IBd) / (nA e)</p>
                </div>
            `,
            numericals: [
                { q: "Find Hall Voltage if B=0.1T, I=10A, d=1cm, n=10^29.", a: "V_H = IBd / nAe..." }
            ],
            questions: ["Define Hall Effect.", "Derive expression for Hall Coefficient."],
            mcqs: [
                { q: "Hall effect is used to shear measure:", options: ["Charge type (n/p)", "Mass", "Time", "None"], correct: 0 }
            ]
        }
    },
    {
        id: "magnetic_force",
        title: "Magnetic Force on Current",
        category: "Magnetism",
        color: "#FEE440",
        description: "Force experienced by wire in B-field.",
        content: {
            essentialNeeds: "F = q(v x B).",
            diagram: "",
            theory: "A current carrying wire in a B-field experiences a force.",
            derivation: `
                <div class="handwritten">
                <h4>F = I (L x B)</h4>
                <p>Force on one e-: f = e(v_d x B)</p>
                <p>Total electrons N = nAL</p>
                <p>Total Force F = N × f</p>
                <p>F = nAL × e(v_d x B)</p>
                <p>F = (nAe v_d) (L x B) -> (Since I is vector/scalar tricky, L takes direction)</p>
                <p class="highlight">F = I L B sin(θ)</p>
                </div>
            `,
            numericals: [
                { q: "Wire of 2m carries 5A perpendicular to B=0.5T. Find Force.", a: "F = ILB sin90\nF = 5 * 2 * 0.5 * 1\nF = 5 N" }
            ],
            questions: ["Derive F = BIL sinθ."],
            mcqs: [
                { q: "Force is max when angle is:", options: ["0", "90", "180", "45"], correct: 1 }
            ]
        }
    },
    {
        id: "biot_savart",
        title: "Biot-Savart Law",
        category: "Magnetism",
        color: "#BB3E03",
        description: "B-field due to small current element.",
        content: {
            essentialNeeds: "Cross product rules.",
            diagram: "",
            theory: "Magnitude of dB is proportional to current I, element length dl, sine of angle, and inverse square of distance.",
            derivation: `
                <div class="handwritten">
                <h4>Formula</h4>
                <p>dB ∝ (I dl sinθ) / r²</p>
                <p class="highlight">dB = (μ₀/4π) * (I dl × r̂) / r²</p>
                <p>Vector Form:</p>
                <p>dB = (μ₀ I) / (4π) * (dl × r) / r³</p>
                </div>
            `,
            numericals: [],
            questions: ["State Biot-Savart Law in vector form."],
            mcqs: []
        }
    },
    {
        id: "motional_emf",
        title: "Motional EMF",
        category: "Electromagnetism",
        color: "#38B000",
        description: "EMF induced in moving conductor.",
        content: {
            essentialNeeds: "Faraday's Law.",
            diagram: "",
            theory: "EMF induced when a rod moves through a magnetic field.",
            derivation: `
                <div class="handwritten">
                <h4>ε = Bvl</h4>
                <p>Flux Φ = B × Area = B(Lx)</p>
                <p>dΦ/dt = B L (dx/dt)</p>
                <p>Since dx/dt = v</p>
                <p class="highlight">|ε| = B L v</p>
                </div>
            `,
            numericals: [
                { q: "Rod length 1m moves at 10m/s perp to B=0.5T.", a: "ε = Bvl = 0.5 * 10 * 1 = 5V" }
            ],
            questions: ["Derive Motional EMF expression."],
            mcqs: []
        }
    }
];
