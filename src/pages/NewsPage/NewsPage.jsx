import { Card, Row, Col, Typography, Layout } from "antd";
import { Link } from "react-router-dom";
import styles from "./NewsPage.module.css";
import HeaderNavbar from "./../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../components/MyFooter/MyFooter";
import seedsImg from "../../assets/img/seedsImg.webp";
import nutsImg from "../../assets/img/nutsImg.webp";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const articles = [
  {
    id: 1,
    title: "Польза семечек: витамины и микроэлементы",
    description:
      "Семечки подсолнечника - это не только вкусная закуска, но и источник полезных веществ: витаминов E, B и минералов, укрепляющих сердце и кожу.",
    image: seedsImg,
    link: "/news/seeds",
  },
  {
    id: 2,
    title: "Орешки - польза для мозга и энергии",
    description:
      "Миндаль, кешью и грецкие орехи богаты омега-3, магнием и антиоксидантами, поддерживающими память и концентрацию.",
    image: nutsImg,
    link: "/news/nuts",
  },
];

export default function NewsPage() {
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
        <Title
          align="middle"
          level={2}
          style={{ marginTop: "5rem", marginBottom: "4rem" }}
        >
          Новости и статьи
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
                  <Paragraph type="secondary">{article.description}</Paragraph>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Content>

      <Footer style={{ padding: 0 }}>
        <div className={styles.myContainer}>
          <Myfooter />
        </div>
      </Footer>
    </Layout>
  );
}
