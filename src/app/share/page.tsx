import type { Metadata } from "next";

type Props = {
  searchParams: Promise<{
    data?: string;
    region?: string;
    turnout?: string;
    age?: string;
    type?: string;
  }>;
};

function decodeData(dataParam: string): {
  region: string;
  turnout: string;
  age: string;
  cityType: string;
} {
  try {
    const decoded = JSON.parse(
      Buffer.from(dataParam, "base64").toString("utf-8")
    );
    return {
      region: decoded.r || "",
      turnout: String(decoded.t || ""),
      age: String(decoded.a || ""),
      cityType: decoded.m || "",
    };
  } catch {
    return { region: "", turnout: "", age: "", cityType: "" };
  }
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;

  let region: string;
  let turnout: string;
  let cityType: string;
  let ogImageUrl: string;

  if (params.data) {
    const decoded = decodeData(params.data);
    region = decoded.region;
    turnout = decoded.turnout;
    cityType = decoded.cityType;
    ogImageUrl = `https://machi-poli-taiwan.vercel.app/api/og?data=${params.data}`;
  } else {
    region = params.region || "";
    turnout = params.turnout || "";
    cityType = params.type || "";
    ogImageUrl = `https://machi-poli-taiwan.vercel.app/api/og?data=${Buffer.from(
      JSON.stringify({
        r: region,
        t: turnout,
        a: params.age || "",
        m: cityType,
      })
    ).toString("base64")}`;
  }

  const title = `${region}是「${cityType}」| 城市政見`;
  const description = `投票率 ${turnout}% - 你的城市呢？`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function SharePage({ searchParams }: Props) {
  const params = await searchParams;

  let region: string;

  if (params.data) {
    const decoded = decodeData(params.data);
    region = decoded.region;
  } else {
    region = params.region || "";
  }

  const topUrl = `/?region=${encodeURIComponent(region)}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#008080",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "DotGothic16, monospace",
      }}
    >
      <div
        style={{
          backgroundColor: "#c0c0c0",
          borderTop: "3px solid #ffffff",
          borderLeft: "3px solid #ffffff",
          borderRight: "3px solid #404040",
          borderBottom: "3px solid #404040",
          padding: "24px 32px",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <p style={{ fontSize: "16px", marginBottom: "16px", color: "#000" }}>
          查看{region}的政治資訊
        </p>
        <a
          href={topUrl}
          style={{
            display: "inline-block",
            padding: "8px 24px",
            backgroundColor: "#c0c0c0",
            borderTop: "2px solid #ffffff",
            borderLeft: "2px solid #ffffff",
            borderRight: "2px solid #404040",
            borderBottom: "2px solid #404040",
            color: "#000",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          開啟城市政見
        </a>
      </div>
    </div>
  );
}
