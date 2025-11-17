import { Card, Row, Col, Typography, Layout } from "antd";
import { Link } from "react-router-dom";
import styles from "./NewsPage.module.css";
import HeaderNavbar from "./../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../components/MyFooter/MyFooter";
import seedsImg from "../../assets/img/seedsImg.webp";
import nutsImg from "../../assets/img/nutsImg.webp";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;




export default function NewsPage() {
  const {t} = useTranslation();

  const articles = [
    {
      id: 1,
      title: t("artclTitle_1"),
      description: t("artclDesc_1"),
      image: seedsImg,
      link: "/news/seeds",
    },
    {
      id: 2,
      title: t("artclTitle_2"),
      description: t("artclDesc_2"),
      image: nutsImg,
      link: "/news/nuts",
    },
  ];

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

      <Content style={{ backgroundColor: "#eee7dd" }}>
        <div className={styles.myContainer}>
          <Title
            align="middle"
            level={2}
            style={{ marginTop: "5rem", marginBottom: "4rem" }}
          >
            {t("newsTitle")}
          </Title>
          <Row gutter={[24, 24]} style={{ marginBottom: "5rem" }}>
            {articles.map((article) => (
              <Col xs={24} sm={12} md={12} key={article.id}>
                <Link to={article.link} className={styles.newsLink}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={article.title}
                        src={article.image}
                        className={styles.articleImage}
                      />
                    }
                    className={styles.newsCard}
                  >
                    <Title level={4}>{article.title}</Title>
                    <Paragraph type="secondary">
                      {article.description}
                    </Paragraph>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Content>

      <Footer style={{ padding: 0 }}>
        <div className={styles.myContainer}>
          <Myfooter />
        </div>
      </Footer>
    </Layout>
  );
}
