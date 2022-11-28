import { Box, Typography } from "@mui/material";
import AboutImage from "../../assets/images/garage3_1.png";

const About = () => {
  return (
    <Box sx={{ backgroundImage: `url(${AboutImage})`, mt: 7, mb: 20 }}>
      <Box
        color="#FFF"
        sx={{
          backgroundColor: "#0000008c",
          padding: 3,
          display: "flex",
          width: "50%",
          ml: "auto",
          flexDirection: "column",
          height: "510px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={2}>
          CÔNG TY TNHH MTV ENMASYS AUTO
        </Typography>
        <Typography
          variant="body1"
          style={{ textTransform: "uppercase", fontWeight: 600 }}
          mb={2}
        >
          TRUNG TÂM BẢO DƯỠNG SỬA CHỮA Ô TÔ
        </Typography>
        <Typography variant="body1" mb={2} color="#d1d1d1">
          Hiện nay kinh tế Việt Nam đang phát triển, kèm theo là khả năng sở hữu
          xe ô tô để đáp ứng nhu cầu đi lại ngày càng nhiều, trong khi đó kiến
          thức sử dụng bảo quản xe còn hạn chế, do vậy ai củng muốn tìm một nơi
          bảo dưỡng, sửa chữa ô tô uy tín, chất lượng. Hiểu được nhu cầu này
          Công ty TNHH MTV Enmasys auto đã được thành lập.
        </Typography>

        <Typography variant="body1" color="#d1d1d1">
          Enmasys Auto được thành lập tháng 10/2019, Enmasys Auto đã quy tụ đội
          ngũ kỹ sư, kỹ thuật viên xuất thân từ Đại học Bách Khoa, Đại học Sư
          Phạm Kỹ Thuật, Đại học Giao Thông Vận Tải, Cao đẳng Cao Thắng….đã
          nhiều năm tham gia vào các hoạt động sản xuất kinh doanh, hậu mãi của
          các liên doanh lắp ráp ô tô tại Việt Nam. Tập thể nhân viên và lãnh
          đạo Enmasys Auto luôn theo sát tình hình thị trường ô tô, phấn đấu học
          hỏi và hoàn thiện mình từng bước nâng cao các kỹ năng cần thiết nhằm
          phục vụ quý khách ngày một tốt hơn, hoàn thiện hơn.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
