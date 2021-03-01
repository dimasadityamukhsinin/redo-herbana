import Head from "next/head";
import Header from '@/components/parts/Header';
import Navigation from '@/components/parts/Navigation';
import Footer from '@/components/parts/Footer';

const MainLayout = ({ children, pageTitle }) => {
  const PageTitle = pageTitle ? `${pageTitle} - Herbana` : "Herbana";
  return (
    <>
      <main>
        <Head>
          <title>{PageTitle}</title>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/image/logo/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/image/logo/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/image/logo/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/image/logo/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/image/logo/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/image/logo/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/image/logo/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/image/logo/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/image/logo/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/image/logo/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/image/logo/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/image/logo/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/image/logo/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/image/logo/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
