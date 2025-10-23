import React, { useEffect, useRef } from "react";

// Sample code block for display (can be replaced with any code)

const sampleCode = [
  "function greet(name) {",
  "  console.log('Hello, ' + name + '!');",
  "}",
  "",
  "const add = (a, b) => a + b;",
  "",
  "class Person {",
  "  constructor(name) {",
  "    this.name = name;",
  "  }",
  "  sayHi() {",
  "    greet(this.name);",
  "  }",
  "}",
  "",
  "const raees = new Person('Raees');",
  "raees.sayHi();"
].join('\n').repeat(10); // Repeat for a large block

export const CodeSpotlightBackground: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (rootRef.current) {
        rootRef.current.style.setProperty("--cursor-x", `${x}px`);
        rootRef.current.style.setProperty("--cursor-y", `${y}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    // Initialize at center
    if (rootRef.current) {
      rootRef.current.style.setProperty("--cursor-x", `${window.innerWidth / 2}px`);
      rootRef.current.style.setProperty("--cursor-y", `${window.innerHeight / 2}px`);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={rootRef}
      className="code-spotlight-bg"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <pre
        className="code-content"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: "4vw",
          fontSize: "1.1rem",
          fontFamily: "Fira Mono, Menlo, Monaco, Consolas, monospace",
          color: "#e2e8f0",
          background: "none",
          opacity: 1,
          whiteSpace: "pre-wrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {sampleCode}
      </pre>
      <div
        className="spotlight-mask"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.95)",
          pointerEvents: "none",
          // Masking for spotlight effect
          maskImage:
            "radial-gradient(circle 150px at var(--cursor-x, 50vw) var(--cursor-y, 50vh), transparent 0px, transparent 150px, black 300px)",
          WebkitMaskImage:
            "radial-gradient(circle 150px at var(--cursor-x, 50vw) var(--cursor-y, 50vh), transparent 0px, transparent 150px, black 300px)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100vw 100vh",
          WebkitMaskSize: "100vw 100vh",
          transition: "mask-image 0.1s, -webkit-mask-image 0.1s",
        }}
      />
    </div>
  );
};
