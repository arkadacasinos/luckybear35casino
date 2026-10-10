import { REF_URL } from '@/lib/site'

const hashtags = [
  { tag: '#luckybearcasino', href: '#h2-official' },
  { tag: '#luckybearcasinoзеркало', href: '#h2-zerkalo' },
  { tag: '#luckybearcasinoофициальныйсайт', href: '#h2-reviews' },
  { tag: '#luckybearказино', href: '#h2-pay' },
  { tag: '#лакибирказино', href: '#h2-bonus' },
  { tag: '#лакибирказинозеркало', href: '#h2-block' },
  { tag: '#лакибирказиноонлайн', href: '#h2-games' },
  { tag: '#лакибирказиноофициальный', href: '#h2-safe' },
  { tag: '#лаки-бир-казино-официальный-сайт', href: '#h2-mobile' },
  { tag: '#лакибирказиноофициальныйсайт', href: '#h2-support' },
  { tag: '#лакибирказиносайт', href: '#h2-reg' },
  { tag: '#лакибирказиовип', href: '#h2-vip' },
  { tag: '#лакибирказинодемо', href: '#h2-demo' },
  { tag: '#лакибирказиноотзывы', href: '#h2-reviews' },
]

export default function SiteFooter() {
  return (
    <footer className="r7x4-foot">
      <p className="r7x4-foottitle">Поиск по странице</p>
      <nav className="r7x4-tags" aria-label="Хэштеги разделов">
        {hashtags.map((item) => (
          <a key={item.tag} href={item.href} className="r7x4-tag">
            {item.tag}
          </a>
        ))}
      </nav>
      <p className="r7x4-footnote">
        © 2026 Lucky Bear Casino. Информационная страница о платформе LuckyBear Casino: обзор слотов, бонусов, зеркал и
        условий игры. 18+ Играйте ответственно. Страница не принимает ставки и не проводит азартные игры, все кнопки и
        переходы ведут на партнёрскую площадку:{' '}
        <a href={REF_URL} className="r7x4-footlink">
          официальный сайт LuckyBear Casino
        </a>
        .
      </p>
    </footer>
  )
}
