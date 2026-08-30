import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Siva Prasath K \u2014 Backend & Systems Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#05070E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        {/* Grid lines overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.06,
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${i * 60}px`,
                top: 0,
                bottom: 0,
                width: "1px",
                background: "#5BE9D8",
              }}
            />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={`h-${i}`}
              style={{
                position: "absolute",
                top: `${i * 60}px`,
                left: 0,
                right: 0,
                height: "1px",
                background: "#5BE9D8",
              }}
            />
          ))}
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontSize: "14px",
            color: "#8A97AE",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: "24px",
          }}
        >
          CHENNAI, IN · B.TECH ECE &apos;28 · SRMIST
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#E8EDF7",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Siva Prasath K
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#8A97AE",
            marginBottom: "48px",
          }}
        >
          Backend & Systems Engineer
        </div>

        {/* Metrics strip */}
        <div
          style={{
            display: "flex",
            gap: "40px",
          }}
        >
          {[
            { label: "SUPABASE PR", value: "35k\u2605" },
            { label: "CGPA", value: "9.485" },
            { label: "DSA SOLVED", value: "300+" },
            { label: "CODEFORCES", value: "1300+" },
          ].map((metric) => (
            <div
              key={metric.label}
              style={{
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid #1C2739",
                paddingLeft: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#8A97AE",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  marginBottom: "4px",
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "#5BE9D8",
                }}
              >
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
