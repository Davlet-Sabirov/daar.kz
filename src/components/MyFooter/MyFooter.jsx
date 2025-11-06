import styles from "./Myfooter.module.css";
import logo3 from "../../assets/logo3.svg";
import tg from "../../assets/icons/tg.svg";
import {
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Row, Col, Space, Divider, Typography } from "antd";

function TgIcon({ size = 24 }) {
  return (
    <a href="https://t.me/MohirFayz1991">
      <img
        src={tg}
        alt="Telegram"
        className={styles.iconTg}
        style={{ width: size, height: size }}
      />
    </a>
  );
}

export default function Myfooter() {
  return (
    <footer className={styles.myContainer}>
      <Row align="top">
        <Col xs={24} md={8}>
          <Space direction="vertical">
            <img
              src={logo3}
              alt="logo"
              style={{ height: 55, width: "auto", marginBottom: "1rem" }}
            />
            <Space direction="vertical" size="large">
              <Space direction="vertical" className={styles.phoneLinks}>
                <Typography.Link href="tel:+77750772000">
                  +7 (775) 077-20-00
                </Typography.Link>
                <Typography.Link href="tel:+77737733777">
                  +7 (747) 773-37-77
                </Typography.Link>
                <Typography.Link href="tel:+77760942440">
                  +7 (776) 094-24-40
                </Typography.Link>
              </Space>
              <Space className={styles.socialIcons} size="middle">
                <Typography.Link href="#">
                  <InstagramOutlined />
                </Typography.Link>
                <TgIcon />
                <Typography.Link href="#">
                  <FacebookOutlined />
                </Typography.Link>
                <Typography.Link href="tel:+77750772000">
                  <PhoneOutlined />
                </Typography.Link>
              </Space>
              <p style={{ marginBottom: "2rem", marginTop: 0 }}>
                <strong>E-mail:</strong> daar.kazakhstan@gmail.com
              </p>
            </Space>
          </Space>
        </Col>
        <Col xs={24} md={16}>
          <div style={{ width: "100%", height: "300px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1473.536060409096!2d69.77074788436666!3d42.383610080462496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1761897072616!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Divider />
        <Col xs={24} md={24}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              2025 <a href="https://t.me/Dave_Codess">® Davlet Sabirov.</a> All
              Rights Reserved.
            </p>
            <Space direction="horizontal" split="|">
              <a href="#">Terms of use</a>
              <a href="#">Privacy Policy</a>
            </Space>
          </Space>
        </Col>
      </Row>
    </footer>
  );
}
