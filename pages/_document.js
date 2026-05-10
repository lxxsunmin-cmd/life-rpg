import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="당신은 어떤 삶을 살게 될까요. 하나의 선택이 모든 것을 바꿉니다." />
        <meta property="og:title" content="하나의 생(生) — 인생 시뮬레이터" />
        <meta property="og:description" content="당신은 어떤 삶을 살게 될까요. 하나의 선택이 모든 것을 바꿉니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://life-rpg-ashen.vercel.app" />
        <meta property="og:image" content="https://life-rpg-ashen.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="하나의 생(生) — 인생 시뮬레이터" />
        <meta name="twitter:description" content="당신은 어떤 삶을 살게 될까요. 하나의 선택이 모든 것을 바꿉니다." />
        <meta name="twitter:image" content="https://life-rpg-ashen.vercel.app/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
