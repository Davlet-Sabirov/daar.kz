import { Row, Col, Typography, Layout } from "antd";
import styles from "./NutsPage.module.css";
import HeaderNavbar from "./../../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../../components/MyFooter/MyFooter";
import nutsImg from "../../../assets/img/nutsImg.webp";
import { useTranslation, Trans } from "react-i18next";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

export default function NutsPage() {
  const {t} = useTranslation();

  return (
    <Layout>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <Header
          className={styles.myContainer}
          style={{ backgroundColor: "inherit" }}
        >
          <HeaderNavbar />
        </Header>
      </div>

      <Content className={styles.myContainer}>
        <Title style={{ marginTop: "5rem", marginBottom: "4rem" }}>
          <Trans i18nKey={"nutsTitle"} />
        </Title>
        <Row gutter={40}>
          <Col xs={24} md={12}>
            <img
              src={nutsImg}
              alt="Орешки"
              style={{ width: "100%", borderRadius: 10, marginBottom: 20 }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Paragraph>
              <Trans i18nKey={"nutsText_1"} />
            </Paragraph>

            <Paragraph>
              <Trans i18nKey={"nutsText_2"} />
            </Paragraph>

            <Paragraph>
              <Trans i18nKey={"nutsText_3"} />
            </Paragraph>
            <Paragraph>
              <strong style={{ fontSize: "1.2rem" }}>
                <Trans i18nKey={"nutsText_4"} />
              </strong>
              <br />
              <br />
              <Trans i18nKey={"nutsText_5"} />
            </Paragraph>
          </Col>
        </Row>
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"nutsText_6"} />
          </strong>
          <br />
          <br />
          <ul>
            <li>
              <Trans i18nKey={"nutsText_7"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_8"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_9"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_10"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_11"} />
            </li>
          </ul>
        </Paragraph>
        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"nutsText_12"} />
          </strong>
          <br />
          <br />
          <Trans i18nKey={"nutsText_13"} />
        </Paragraph>
        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"nutsText_14"} />
          </strong>
          <br />
          <br />
          <Trans i18nKey={"nutsText_15"} />
        </Paragraph>
        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"nutsText_16"} />
          </strong>
          <br />
          <br />
          <Trans i18nKey={"nutsText_17"} />
        </Paragraph>
        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"nutsText_18"} />
          </strong>
          <br />
          <br />
          <ul>
            <li>
              <Trans i18nKey={"nutsText_19"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_20"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_21"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_22"} />
            </li>
            <li>
              <Trans i18nKey={"nutsText_23"} />
            </li>
          </ul>
        </Paragraph>
        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"nutsText_24"} />
          </strong>
          <br />
          <br />
          <Trans i18nKey={"nutsText_25"} />
        </Paragraph>
        <br />
        <br />

        <iframe
          width="100%"
          height="450"
          style={{ borderRadius: 10, marginTop: 20, marginBottom: "5rem" }}
          src="https://www.youtube.com/embed/5vy2qCoaaDI?si=6Ef5tuMDqXgW7zff"
          title={t("nutsText_26")}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Content>
      <Footer style={{ padding: 0 }}>
        <div className={styles.myContainer}>
          <Myfooter />
        </div>
      </Footer>
    </Layout>
  );
}
