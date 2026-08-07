import "./BackgroundAura-tech.css";

export function BackgroundAuraTech() {
    return (
        <div
            className="background-aura-tech"
            aria-hidden="true" 
        >
            <svg
                className="background-aura-tech__board"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="circuit-pattern"
                        width="360"
                        height="360"
                        patternUnits="userSpaceOnUse"
                    >
                        <g className="background-aura-tech__traces">
                        <path d="M0 42 H76 L94 60 H168" />
                        <path d="M168 60 H236 L254 42 H360" />

                        <path d="M24 126 H88 L108 106 H176" />
                        <path d="M176 106 H236 V154 H310 L328 136 H360" />

                        <path d="M0 208 H54 L76 186 H142" />
                        <path d="M142 186 H208 L226 204 H292" />
                        <path d="M292 204 V250 H360" />

                        <path d="M38 360 V304 L58 284 H126" />
                        <path d="M126 284 H188 V322 H252" />

                        <path d="M274 360 V302 H320 L338 284 H360" />

                        <path d="M112 0 V38 H146 L166 58" />
                        <path d="M288 0 V58 H258 L240 76" />

                        <path d="M18 166 H46 V142" />
                        <path d="M46 142 H92" />

                        <path d="M214 250 H246 V278 H308" />
                        </g>

                        <g className="background-aura-tech__traces background-aura-tech__traces--strong">
                        <path d="M0 88 H132 L152 108 H220" />
                        <path d="M220 108 V132 H282" />

                        <path d="M74 236 H154 L176 258 H258" />

                        <path d="M318 154 V218 H280" />
                        </g>

                        <g className="background-aura-tech__nodes">
                        <circle cx="94" cy="60" r="4.5" />
                        <circle cx="168" cy="60" r="4.5" />
                        <circle cx="254" cy="42" r="4.5" />

                        <circle cx="108" cy="106" r="4.5" />
                        <circle cx="236" cy="106" r="4.5" />
                        <circle cx="310" cy="154" r="4.5" />

                        <circle cx="76" cy="186" r="4.5" />
                        <circle cx="142" cy="186" r="4.5" />
                        <circle cx="226" cy="204" r="4.5" />
                        <circle cx="292" cy="204" r="4.5" />

                        <circle cx="58" cy="284" r="4.5" />
                        <circle cx="188" cy="322" r="4.5" />

                        <circle cx="146" cy="38" r="4.5" />
                        <circle cx="258" cy="58" r="4.5" />

                        <circle cx="152" cy="108" r="5.5" />
                        <circle cx="176" cy="258" r="5.5" />
                        </g>

                        <g className="background-aura-tech__pads">
                        <circle cx="46" cy="142" r="8" />
                        <circle cx="246" cy="278" r="8" />
                        <circle cx="318" cy="218" r="8" />
                        </g>

                        <g className="background-aura-tech__signals">
                            <path
                                className="background-aura-tech__signal background-aura-tech__signal--cobalt background-aura-tech__signal--one"
                                d="M0 42 H76 L94 60 H168"
                            />

                            <path
                                className="background-aura-tech__signal background-aura-tech__signal--orange background-aura-tech__signal--two"
                                d="M24 126 H88 L108 106 H176"
                            />

                            <path
                                className="background-aura-tech__signal background-aura-tech__signal--cobalt background-aura-tech__signal--three"
                                d="M0 208 H54 L76 186 H142"
                            />

                            <path
                                className="background-aura-tech__signal background-aura-tech__signal--orange background-aura-tech__signal--four"
                                d="M74 236 H154 L176 258 H258"
                            />

                            <path
                                className="background-aura-tech__signal background-aura-tech__signal--cobalt background-aura-tech__signal--five"
                                d="M274 360 V302 H320 L338 284 H360"
                            />
                        </g>
                    </pattern>
                    </defs>

                <rect
                width="100%"
                height="100%"
                fill="url(#circuit-pattern)"
                />
            </svg>
        </div>
    )
}