import { Row, Col, Typography, Layout } from "antd";
import styles from "./SeedsPage.module.css";
import HeaderNavbar from "./../../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../../components/MyFooter/MyFooter";
import seedsImg from "../../../assets/img/seedsImg.webp";
import { useTranslation, Trans } from "react-i18next";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

export default function SeedsPage() {
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
          <Trans i18nKey={"seedsTitle"} />
        </Title>

        <Row gutter={40}>
          <Col xs={24} md={10}>
            <img
              src={seedsImg}
              alt="Семечки"
              style={{ width: "100%", borderRadius: 10, marginBottom: 20 }}
            />
          </Col>

          <Col xs={24} md={14}>
            <Paragraph>
              <Trans i18nKey={"seedsText_1"} />
            </Paragraph>

            <Paragraph>
              <Trans i18nKey={"seedsText_2"} />
            </Paragraph>

            <Paragraph>
              <strong style={{ fontSize: "1.2rem" }}>
                <Trans i18nKey={"seedsText_3"} />
              </strong>
              <br />
              <br />
              <Trans i18nKey={"seedsText_4"} />
            </Paragraph>
          </Col>
        </Row>

        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"seedsText_5"} />
          </strong>
          <br />
          <br />
          <ul>
            <li>
              <Trans i18nKey={"seedsText_6"} />
            </li>
            <li>
              <Trans i18nKey={"seedsText_7"} />
            </li>
            <li>
              <Trans i18nKey={"seedsText_8"} />
            </li>
            <li>
              <Trans i18nKey={"seedsText_9"} />
            </li>
            <li>
              <Trans i18nKey={"seedsText_10"} />
            </li>
          </ul>
        </Paragraph>

        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"seedsText_11"} />
          </strong>
          <br />
          <br />
          <Trans i18nKey={"seedsText_12"} />
          <ul>
            <li>
              <Trans i18nKey={"seedsText_13"} />
            </li>
            <li>
              <Trans i18nKey={"seedsText_14"} />
            </li>
            <li>
              <Trans i18nKey={"seedsText_15"} />
            </li>
            <li>
              <Trans i18nKey={"seedsText_16"} />
            </li>
          </ul>
        </Paragraph>

        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"seedsText_17"} />
          </strong>
          <br />
          <br />
          <Trans i18nKey={"seedsText_18"} />
        </Paragraph>

        <br />
        <Paragraph>
          <strong style={{ fontSize: "1.2rem" }}>
            <Trans i18nKey={"seedsText_19"} />
          </strong>
          <br />
          <br />
          <Trans i18nKey={"seedsText_20"} />
        </Paragraph>

        <br />
        <iframe
          width="100%"
          height="450"
          style={{ borderRadius: 10, marginTop: 20, marginBottom: "5rem" }}
          src="https://www.youtube.com/embed/l3zIh-LKPDE?si=CF4bNR6kBGXkBnl1"
          title={t("seedsText_21")}
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
