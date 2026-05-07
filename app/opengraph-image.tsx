import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Tanev Design - design that ships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const footerBackground = await readFile(join(process.cwd(), "public", "assets", "new footer background.png"), "base64");
  const footerBackgroundSrc = `data:image/png;base64,${footerBackground}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050607",
          color: "#f7f4ed",
          padding: 66,
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders local asset data URLs, not next/image components. */}
        <img
          src={footerBackgroundSrc}
          width={1200}
          height={630}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.36) 46%, rgba(0,0,0,0.08) 100%)",
            display: "flex"
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(247,244,237,0.76)"
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#fd4900",
              display: "flex"
            }}
          />
          tanev.design
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 980
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: -3,
              color: "#f7f4ed"
            }}
          >
            <span style={{ display: "flex" }}>Design&nbsp;</span>
            <span style={{ display: "flex", color: "#fd4900" }}>that ships.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.3,
              color: "rgba(247,244,237,0.82)",
              maxWidth: 760
            }}
          >
            Premium websites. One person. Every detail considered.
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "rgba(247,244,237,0.68)",
            letterSpacing: 1
          }}
        >
          <div style={{ display: "flex" }}>STOYAN TANEV</div>
          <div style={{ display: "flex" }}>WWW.TANEV.DESIGN</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
