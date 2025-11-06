import styles from "./Hero.module.css";
import pack_1 from "../../assets/img/pack_1.png";
import pack_2 from "../../assets/img/pack_2.png";
import { Typography, Button, Row, Col } from "antd";
const { Title } = Typography;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import "swiper/css";

export default function Hero() {
  return (
    <main className={styles.myContainer}>
      <Row align="middle">
        <Col sm={24} md={12} className={styles.heroA}>
          <Title className={styles.claim}>
            Cвежие семечки, орешки и курт от производителя
          </Title>
          <Typography.Link href="https://t.me/MohirFayz1991">
            <Button
              color="orange"
              variant="solid"
              size="large"
              className={styles.heroBtn}
            >
              Связаться
            </Button>
          </Typography.Link>
        </Col>
        <Col sm={24} md={12} className={styles.heroImg}>
          <Swiper
            modules={[Autoplay, Pagination, EffectCards]}
            effect="Cards"
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <img src={pack_1} alt="pack" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pack_2} alt="pack" />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </main>
  );
}
