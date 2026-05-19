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
          background: "#e8e6e0",
          color: "#111111",
          padding: 0,
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
            objectFit: "cover",
            objectPosition: "28% 50%"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(232,230,224,0.98) 0%, rgba(232,230,224,0.94) 34%, rgba(232,230,224,0.54) 52%, rgba(232,230,224,0.04) 78%)",
            display: "flex"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 720,
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(232,230,224,0.78) 0%, rgba(232,230,224,0.64) 64%, rgba(232,230,224,0) 100%)",
            display: "flex"
          }}
        />

        <div
          style={{
            position: "relative",
            marginTop: 50,
            marginLeft: 58,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 19,
            letterSpacing: 3.2,
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.72)"
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
            justifyContent: "center",
            gap: 20,
            width: 560,
            marginLeft: 58,
            marginBottom: 36,
            flex: 1
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 0.94,
              letterSpacing: -1.8,
              color: "#111111"
            }}
          >
            <span style={{ display: "flex" }}>Design</span>
            <span style={{ display: "flex", color: "#fd4900" }}>that ships.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.22,
              color: "rgba(17,17,17,0.82)",
              maxWidth: 500
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
            width: "100%",
            padding: "0 58px 46px",
            fontSize: 18,
            color: "rgba(17,17,17,0.6)",
            letterSpacing: 1.6
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
