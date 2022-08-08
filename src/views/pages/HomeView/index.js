import { Box } from "@mui/material";
import SlideShow from "../../../components/SlideShow/SlideShow";
import TitleHome from "../../../components/TitleHome/TitleHome";
import ImageHome_2 from "../../../assets/images/maintenance_100px_1.png";
import ImageHome_3 from "../../../assets/images/about_us.png";
import Products from "../../../components/Products/Products";
import TitleMain from "../../../components/TitleMain/TitleMain";
import About from "../../../components/About/About";
import AboutContent from "../../../components/About/AboutContent";

const HomeView = () => {
  return (
    <>
      <Box width="90.4%" m="auto">
        <SlideShow />
        <TitleMain image={ImageHome_2} title="DỊCH VỤ HỆ THỐNG GARAGE" />

        <TitleHome title="SỬA CHỮA CHUNG" />
        <Products />
        <TitleHome title="BẢO DƯỠNG - CHĂM SÓC" />
        <Products />
        <TitleMain image={ImageHome_3} title="VỀ CHÚNG TÔI" />
      </Box>

      <About />
      <Box width="90.4%" m="auto">
        <TitleMain
          image={ImageHome_2}
          title="VÌ SAO NÊN CHỌN CHÚNG TÔI?"
          subTitle={"Trung thực - Tận tâm - Trách nhiệm - Chia sẻ"}
        />
        <AboutContent />
      </Box>
    </>
  );
};

export default HomeView;
