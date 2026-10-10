import type { ReactNode } from 'react'
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  Flame,
  Gamepad2,
  Gift,
  History,
  Home,
  LayoutGrid,
  Radio,
  Search,
  ShoppingBag,
  Trophy,
  User,
  UserPlus,
  Wallet,
  Zap,
} from 'lucide-react'
import { REF_URL } from '@/lib/site'

const railNav = [
  { label: 'Главная', icon: Home, active: true },
  { label: 'Слоты', icon: Gamepad2, active: false },
  { label: 'Быстрые игры', icon: Zap, active: false },
  { label: 'Популярные', icon: Flame, active: false },
  { label: 'Покупка Бонуса', icon: ShoppingBag, active: false },
  { label: 'Новинки', icon: Boxes, active: false },
  { label: 'Live-игры', icon: Radio, active: false },
]

const railExtra = [
  { label: 'Пригласить', icon: UserPlus },
  { label: 'Бонусы', icon: Gift },
  { label: 'Пополнить', icon: Wallet },
  { label: 'Профиль', icon: User },
]

const topChips = [
  { label: 'Призовой пул', icon: Trophy },
  { label: 'История', icon: History },
  { label: 'Избранное', icon: Gift },
  { label: 'Промокод', icon: Gift },
]

const gameTabs = [
  { label: 'Все', icon: LayoutGrid, active: true },
  { label: 'Слоты', icon: Gamepad2, active: false },
  { label: 'Быстрые игры', icon: Zap, active: false },
  { label: 'Популярные', icon: Flame, active: false },
  { label: 'Покупка Бонуса', icon: ShoppingBag, active: false },
  { label: 'Новинки', icon: Boxes, active: false },
]

const slots = [
  { name: 'Gemstones Gold', img: '/img/slot-gemstones.jpg' },
  { name: 'Crown Coins', img: '/img/slot-crown.jpg' },
  { name: 'Speed Winner', img: '/img/slot-speed.jpg' },
  { name: 'Devil Fire Bonus Coin', img: '/img/slot-devil.jpg' },
  { name: 'Anubis Wrath', img: '/img/slot-anubis.jpg' },
  { name: 'Fortune Garuda 1000', img: '/img/slot-garuda.jpg' },
]

function Logo({ size }: { size: 'rail' | 'top' }) {
  return (
    <a href={REF_URL} className={size === 'rail' ? 'r7x4-raillogo' : 'r7x4-toplogo'} aria-label="LuckyBear Casino">
      <img src="/icon.png" alt="" width={30} height={30} />
      <span>
        LUCKY<span className="r7x4-logoblue">BEAR</span>
      </span>
    </a>
  )
}

export default function FirstScreen({ children }: { children: ReactNode }) {
  return (
    <>
      <aside id="r7x4-menu" className="r7x4-rail" aria-label="Меню казино">
        <Logo size="rail" />
        <nav className="r7x4-seg" aria-label="Разделы платформы">
          <a href={REF_URL} className="r7x4-segon">
            Казино
          </a>
          <a href={REF_URL}>Спорт</a>
        </nav>
        <nav className="r7x4-railnav" aria-label="Каталог игр">
          {railNav.map((item) => (
            <a key={item.label} href={REF_URL} className={item.active ? 'r7x4-railitem r7x4-railon' : 'r7x4-railitem'}>
              <item.icon size={17} aria-hidden="true" />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="r7x4-raildiv" role="presentation" />
        <nav className="r7x4-railnav" aria-label="Личный кабинет">
          {railExtra.map((item) => (
            <a key={item.label} href={REF_URL} className="r7x4-railitem">
              <item.icon size={17} aria-hidden="true" />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="r7x4-railfoot">
          <a href={REF_URL} className="r7x4-lang">
            RU <ChevronDown size={14} aria-hidden="true" />
          </a>
        </div>
      </aside>
      <a href="#!" className="r7x4-scrim" aria-hidden="true" tabIndex={-1} />
      <div className="r7x4-main">
        <header className="r7x4-topbar">
          <a href="#r7x4-menu" className="r7x4-burger" aria-label="Открыть меню">
            <b />
            <b />
            <b />
          </a>
          <Logo size="top" />
          <nav className="r7x4-chips" aria-label="Быстрые разделы">
            {topChips.map((chip) => (
              <a key={chip.label} href={REF_URL} className="r7x4-chip">
                <chip.icon size={16} aria-hidden="true" />
                {chip.label}
              </a>
            ))}
          </nav>
          <a href={REF_URL} className="r7x4-auth">
            Зарегистрироваться / Войти
          </a>
        </header>

        <section className="r7x4-herorow" aria-label="Акции казино">
          <div className="r7x4-hero">
            <img className="r7x4-heroimg" src="/img/hero-vip.jpg" alt="VIP-акция LuckyBear Casino: низкие комиссии на вывод" width={1280} height={640} />
            <div className="r7x4-heroveil" aria-hidden="true" />
            <div className="r7x4-herotxt">
              <p className="r7x4-herotitle">
                Повышайте VIP
                <br />
                <span className="r7x4-blueline">Низкие комиссии</span>
                <br />
                на вывод!
              </p>
              <a href={REF_URL} className="r7x4-herolink">
                Больше возможностей <ChevronRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="r7x4-promos">
            <a href={REF_URL} className="r7x4-promo">
              <img className="r7x4-promoimg" src="/img/promo-jackpot.jpg" alt="Ежедневный розыгрыш 5 000 000 рублей в LuckyBear Casino" width={640} height={400} />
              <div className="r7x4-promoveil" aria-hidden="true" />
              <div className="r7x4-promoinner">
                <span className="r7x4-promolabel">Ежедневно разыгрывается более</span>
                <span className="r7x4-promosum">5,000,000 ₽</span>
                <span className="r7x4-promotag">Акция Lucky Bonus</span>
              </div>
            </a>
            <a href={REF_URL} className="r7x4-promo">
              <img className="r7x4-promoimg" src="/img/promo-fs.jpg" alt="Бесплатные вращения за пополнение счёта" width={640} height={400} loading="lazy" />
              <div className="r7x4-promoveil" aria-hidden="true" />
              <div className="r7x4-promoinner">
                <span className="r7x4-promotitle">Твои FS уже ждут</span>
                <span className="r7x4-promotext">Просто пополните счёт — и получите бесплатные FS</span>
                <span className="r7x4-promobtn">Получить FS</span>
              </div>
            </a>
          </div>
        </section>

        <nav className="r7x4-tabs" aria-label="Категории игр">
          {gameTabs.map((tab) => (
            <a key={tab.label} href={REF_URL} className={tab.active ? 'r7x4-tab r7x4-tabon' : 'r7x4-tab'}>
              <tab.icon size={15} aria-hidden="true" />
              {tab.label}
            </a>
          ))}
          <a href={REF_URL} className="r7x4-tab" aria-label="Поиск игр">
            <Search size={15} aria-hidden="true" />
          </a>
          <a href={REF_URL} className="r7x4-tab">
            <LayoutGrid size={15} aria-hidden="true" />
            Провайдеры <ChevronDown size={14} aria-hidden="true" />
          </a>
        </nav>

        <section className="r7x4-games" aria-label="Слоты казино">
          <p className="r7x4-gameslabel">
            <Gamepad2 size={17} aria-hidden="true" /> Слоты
          </p>
          <div className="r7x4-grid">
            {slots.map((slot) => (
              <a key={slot.name} href={REF_URL} className="r7x4-tile">
                <img src={slot.img} alt={`Слот ${slot.name} в LuckyBear Casino`} width={420} height={560} loading="lazy" />
                <span className="r7x4-tilename">{slot.name}</span>
              </a>
            ))}
          </div>
        </section>

        {children}
      </div>
    </>
  )
}
