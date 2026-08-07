import { useEffect, useRef } from "react";

import { LavaMass } from "../../domain/LavaMass";
import "./BackgroundAura-lava.css";

export function BackgroundAuraLava() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const gl = canvas.getContext("webgl", {
            alpha: false,
            antialias: false,
            powerPreference: "high-performance",
        });

        if (!gl) {
            console.warn("WebGL is not supported by this browser.");
            return;
        }

        const targetCanvas = canvas;
        const context = gl;

        const masses = [
            new LavaMass({
                x: 0.12,
                y: 0.18,
                velocityX: 0.035,
                velocityY: 0.025,
                radius: 0.10,
                tone: "cobalt",
            }),
 
            new LavaMass({
                x: 0.28,
                y: 0.72,
                velocityX: -0.025,
                velocityY: 0.03,
                radius: 0.08,
                tone: "orange",
            }),

            new LavaMass({
                x: 0.45,
                y: 0.30,
                velocityX: 0.03,
                velocityY: -0.02,
                radius: 0.065,
                tone: "orange",
            }),

            new LavaMass({
                x: 0.62,
                y: 0.68,
                velocityX: -0.022,
                velocityY: -0.028,
                radius: 0.095,
                tone: "cobalt",
            }),

            new LavaMass({
                x: 0.82,
                y: 0.22,
                velocityX: -0.03,
                velocityY: 0.022,
                radius: 0.075,
                tone: "orange",
            }),

            new LavaMass({
                x: 0.88,
                y: 0.78,
                velocityX: -0.02,
                velocityY: -0.032,
                radius: 0.06,
                tone: "cobalt",
            }),

            new LavaMass({
                x: 0.20,
                y: 0.48,
                velocityX: 0.028,
                velocityY: 0.018,
                radius: 0.055,
                tone: "orange",
            }),

            new LavaMass({
                x: 0.38,
                y: 0.86,
                velocityX: 0.024,
                velocityY: -0.027,
                radius: 0.045,
                tone: "cobalt",
            }),

            new LavaMass({
                x: 0.55,
                y: 0.48,
                velocityX: -0.027,
                velocityY: 0.021,
                radius: 0.065,
                tone: "cobalt",
            }),

            new LavaMass({
                x: 0.74,
                y: 0.42,
                velocityX: 0.021,
                velocityY: -0.025,
                radius: 0.05,
                tone: "orange",
            }),

            new LavaMass({
                x: 0.08,
                y: 0.88,
                velocityX: 0.018,
                velocityY: -0.022,
                radius: 0.04,
                tone: "cobalt",
            }),

            new LavaMass({
                x: 0.94,
                y: 0.52,
                velocityX: -0.025,
                velocityY: 0.017,
                radius: 0.04,
                tone: "cobalt",
            }),
        ]

        context.viewport(
            0,
            0,
            targetCanvas.width,
            targetCanvas.height,
        );

        context.clearColor(1, 0, 0, 1);
        context.clear(context.COLOR_BUFFER_BIT);
        
        function debugFramebuffer() {
            const pixel = new Uint8Array(4);

            context.readPixels(
            0,
            0,
            1,
            1,
            context.RGBA,
            context.UNSIGNED_BYTE,
            pixel,
            );

            console.log("WebGL pixel:", Array.from(pixel));
            console.log("WebGL error:", context.getError());
            console.log("Canvas size:", targetCanvas.width, targetCanvas.height);
        }

        const vertexShaderSource = `
            attribute vec2 a_position;

            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
        precision highp float;
        
        #define MASS_COUNT 12

        uniform vec2 u_resolution;
        uniform vec2 u_positions[MASS_COUNT];
        uniform float u_strengths[MASS_COUNT];
        uniform vec2 u_compressions[MASS_COUNT];
        uniform float u_tones[MASS_COUNT];

        float metaball(
            vec2 uv,
            vec2 position,
            float strength,
            vec2 compression
        ) {
            vec2 delta = uv - position;

            delta.x *= u_resolution.x / u_resolution.y;

            delta /= compression;

            return strength /
                max(dot(delta, delta), 0.0001);
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / u_resolution.xy;

            float cobaltField = 0.0;
            float orangeField = 0.0;

            for (int i = 0; i < MASS_COUNT; i++) {
                float influence = metaball(
                    uv,
                    u_positions[i],
                    u_strengths[i],
                    u_compressions[i]
                );

                if (u_tones[i] > 0.5) {
                    orangeField += influence;
                } else {
                    cobaltField += influence;
                }
            }

            float totalInfluence =
            cobaltField +
            orangeField;

            float surface = smoothstep(
                0.95,
                1.05,
                totalInfluence
            );

            vec3 background = vec3(
                8.0 / 255.0,
                9.0 / 255.0,
                11.0 / 255.0
            );

            vec3 cobalt = vec3(
                36.0 / 255.0,
                91.0 / 255.0,
                255.0 / 255.0
            );

            vec3 orange = vec3(
                198.0 / 255.0,
                90.0 / 255.0,
                46.0 / 255.0
            );

            float orangeWeight =
                orangeField /
                max(totalInfluence, 0.0001);

            vec3 lavaColour = mix(
                cobalt,
                orange,
                orangeWeight
            );

            vec3 colour = mix(
                background,
                lavaColour,
                surface * 0.45
            );

            gl_FragColor = vec4(colour, 1.0);
        }
        `;

        function createShader(
            type: number,
            source: string,
        ): WebGLShader {
            const shader = context.createShader(type);
            if (!shader) {
                throw new Error("Unable to create a WebGL shader.");
            }

            context.shaderSource(shader, source);
            context.compileShader(shader);

            if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
                const message = context.getShaderInfoLog(shader);

                context.deleteShader(shader);

                throw new Error(
                    `Unable to compile WebGL shader: ${message ?? "Unknown error"}`,
                );
            }

            return shader;
        }

        const vertexShader = createShader(
            context.VERTEX_SHADER,
            vertexShaderSource,
        );

        const fragmentShader = createShader(
            context.FRAGMENT_SHADER,
            fragmentShaderSource,
        );

        const program = context.createProgram();

        if (!program) {
            throw new Error("Unable to create WebGL program.");
        }

        context.attachShader(program, vertexShader);
        context.attachShader(program, fragmentShader);
        context.linkProgram(program);

        if (!context.getProgramParameter(program, context.LINK_STATUS)) {
            throw new Error(
                `Unable to link WebGL program: ${
                    context.getProgramInfoLog(program) ?? "Unknown error"
                }`,
            );
        }

        context.useProgram(program);

        const positionsLocation = context.getUniformLocation(
            program,
            "u_positions[0]",
        );

        const strengthsLocation = context.getUniformLocation(
            program,
            "u_strengths[0]",
        );
        
        const compressionsLocation = context.getUniformLocation(
            program,
            "u_compressions[0]",
        );

        const tonesLocation = context.getUniformLocation(
            program,
            "u_tones[0]",
        );

        if (
            positionsLocation === null ||
            strengthsLocation === null ||
            compressionsLocation === null ||
            tonesLocation === null
        ) {
            throw new Error("Unable to locate lava mass uniforms.");
        }

        const resolutionLocation = context.getUniformLocation(
            program,
            "u_resolution",
        );

        if (resolutionLocation === null) {
            throw new Error(
                "Unable to locate u_resolution uniform.",
            );
        }

        const positionBuffer = context.createBuffer();

        if (!positionBuffer) {
            throw new Error("Unable to create WebGL buffer.");
        }

        context.bindBuffer(
            context.ARRAY_BUFFER,
            positionBuffer,
        );

        context.bufferData(
            context.ARRAY_BUFFER,
            new Float32Array([
                -1, -1,
                1, -1,
                -1,  1,

                -1,  1,
                1, -1,
                1,  1,
            ]),
            context.STATIC_DRAW,
        );

        const positionLocation = context.getAttribLocation(
            program,
            "a_position",
        );

        context.enableVertexAttribArray(positionLocation);

        context.vertexAttribPointer(
            positionLocation,
            2,
            context.FLOAT,
            false,
            0,
            0,
        );

        function resizeCanvas() {
            const pixelRatio = Math.min(window.devicePixelRatio, 2);

            const width = Math.floor(window.innerWidth * pixelRatio);
            const height = Math.floor(window.innerHeight * pixelRatio);

            if (targetCanvas.width !== width || targetCanvas.height !== height) {
                targetCanvas.width = width;
                targetCanvas.height = height;

                context.viewport(0, 0, width, height);
            }
        }

        let animationFrameId = 0;
        let previousTime = 0;

        function render(time: number) {
            resizeCanvas();

            const currentTime = time / 1000;

            const deltaTime = 
                previousTime === 0
                    ? 0
                    : Math.min(currentTime - previousTime, 0.05);

            previousTime = currentTime;

            for (const mass of masses) {
                mass.update(deltaTime);
            }

            const positions = new Float32Array(masses.length * 2);
            const strengths = new Float32Array(masses.length);
            const compressions = new Float32Array(masses.length * 2);
            const tones = new Float32Array(masses.length);

            masses.forEach((mass, index) => {
            positions[index * 2] = mass.x;
            positions[index * 2 + 1] = mass.y;

            strengths[index] = mass.radius * mass.radius * 1.8;

            compressions[index * 2] = mass.compressionX;
            compressions[index * 2 + 1] = mass.compressionY;

            tones[index] =
                mass.tone === "orange"
                ? 1
                : 0;
            });

            context.useProgram(program);

            context.uniform2f(
                resolutionLocation,
                targetCanvas.width,
                targetCanvas.height,
            );

            context.uniform2fv(
            positionsLocation,
            positions,
            );

            context.uniform1fv(
            strengthsLocation,
            strengths,
            );

            context.uniform2fv(
            compressionsLocation,
            compressions,
            );

            context.uniform1fv(
            tonesLocation,
            tones,
            );

            context.drawArrays(
                context.TRIANGLES,
                0,
                6,
            );

            animationFrameId = requestAnimationFrame(render);
        }

        animationFrameId = requestAnimationFrame(render);

        debugFramebuffer();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div 
            className="background-aura-lava"
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="background-aura-lava__canvas"
            />
        </div>
    )
}