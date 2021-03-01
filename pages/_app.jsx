import MainLayout from "@/components/layout/mainLayout";
import "styles/global.scss";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

function MyApp({ Component, pageProps }) {
  const PageTitle = Component.pageTitle ? Component.pageTitle : "";
  return (
    <MainLayout pageTitle={PageTitle}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
