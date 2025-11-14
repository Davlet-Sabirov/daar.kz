import styles from "./About.module.css";
import { Row, Col, Typography, Button } from "antd";
import about from "../../assets/img/about.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

export default function About({ isMainPage }) {
  const { t } = useTranslation();

  return (
    <div className={styles.myContainer}>
      <Row gutter={[40, 40]} align="top">
        <Col xs={24} md={12}>
          <img src={about} alt="about" className={styles.imgAbout} />
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>{t("aboutTitle")}</Title>
          <Paragraph>
            <br />
            {t("aboutDesc1")} <b>DAAR</b>
            {t("aboutDesc2")}
            <br /> <br />
            {t("aboutDesc3")}
            <br /> <br />
            <b>DAAR</b>
            {t("aboutDesc4")}
            <br /> <br />
          </Paragraph>
          {!isMainPage && (
            <Link to="/about">
              <Button color="default" size="large" className={styles.aboutBtn}>
                {t("aboutBtn")}
              </Button>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
}
