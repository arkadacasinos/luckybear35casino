import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="r7x4-html">
      <head>
        <title>LuckyBear Casino официальный сайт — Lucky Bear Casino зеркало | Лаки Бир Казино</title>
        <meta
          name="description"
          content="LuckyBear Casino официальный сайт и рабочее зеркало на сегодня. Лаки Бир Казино онлайн: слоты, быстрые игры, бонусы и промокоды, низкие комиссии на вывод. Вход на лаки бир казино сайт."
        />
        <link rel="canonical" href="https://luckybear35casino.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="LuckyBear Casino официальный сайт — Lucky Bear Casino зеркало | Лаки Бир Казино" />
        <meta
          property="og:description"
          content="LuckyBear Casino официальный сайт и рабочее зеркало на сегодня. Лаки Бир Казино онлайн: слоты, быстрые игры, бонусы и промокоды, низкие комиссии на вывод."
        />
        <meta property="og:url" content="https://luckybear35casino.vercel.app/" />
        <meta property="og:image" content="https://luckybear35casino.vercel.app/img/hero-vip.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LuckyBear Casino официальный сайт — Lucky Bear Casino зеркало | Лаки Бир Казино" />
        <meta
          name="twitter:description"
          content="LuckyBear Casino официальный сайт и рабочее зеркало на сегодня. Лаки Бир Казино онлайн: слоты, бонусы и промокоды, низкие комиссии на вывод."
        />
        <meta name="theme-color" content="#0b1220" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className="r7x4-body">{children}</body>
    </html>
  )
}
