import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.min.css";
import "@/vendors/font-awesome.min.css";
import "@/vendors/flaticon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";

// extra css
import "@/styles/default.css";
import "@/styles/style.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
