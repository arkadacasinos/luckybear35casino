import FirstScreen from '@/components/first-screen'
import SeoArticle from '@/components/seo-article'
import SiteFooter from '@/components/site-footer'

export default function Page() {
  return (
    <main className="r7x4-shell">
      <FirstScreen>
        <SeoArticle />
        <SiteFooter />
      </FirstScreen>
    </main>
  )
}
