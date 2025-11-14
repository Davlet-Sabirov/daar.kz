import { Row, Col, Card, Typography, Button } from "antd";
import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import product_1 from "../../assets/catalog/product_1.webp";
import product_2 from "../../assets/catalog/product_2.webp";
import product_3 from "../../assets/catalog/product_3.webp";
import product_4 from "../../assets/catalog/product_4.webp";
import product_5 from "../../assets/catalog/product_5.webp";
import product_6 from "../../assets/catalog/product_6.webp";
import product_7 from "../../assets/catalog/product_7.webp";
import product_8 from "../../assets/catalog/product_8.webp";
import product_9 from "../../assets/catalog/product_9.webp";

const { Title, Text } = Typography;

const products = [
  {
    id: 1,
    name: "cardTitle1",
    description: "cardDesc1",
    image: product_1,
  },
  {
    id: 2,
    name: "cardTitle2",
    description: "cardDesc2",
    image: product_2,
  },
  {
    id: 3,
    name: "cardTitle3",
    description: "cardDesc3",
    image: product_3,
  },
  {
    id: 4,
    name: "cardTitle4",
    description: "cardDesc4",
    image: product_4,
  },
  {
    id: 5,
    name: "cardTitle5",
    description: "cardDesc5",
    image: product_5,
  },
  {
    id: 6,
    name: "cardTitle6",
    description: "cardDesc6",
    image: product_6,
  },
  {
    id: 7,
    name: "cardTitle7",
    description: "cardDesc7",
    image: product_7,
  },
  {
    id: 8,
    name: "cardTitle8",
    description: "cardDesc8",
    image: product_8,
  },
  {
    id: 9,
    name: "cardTitle9",
    description: "cardDesc9",
    image: product_9,
  },
];

export default function Catalog({ full = false }) {
  const { t } = useTranslation();

  const visibleProducts = full ? products : products.slice(0, 6);
  return (
    <div className={styles.myContainer}>
      <Title level={2} className={styles.catalogTitle}>
        {t("prodTitle")}
      </Title>

      <Row gutter={[24, 24]}>
        {visibleProducts.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <Card
              hoverable
              className={styles.productCard}
              cover={<img alt={item.name} src={item.image} />}
            >
              <Title level={4}>{t(item.name)}</Title>
              <Text type="secondary">{t(item.description)}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      {!full && (
        <Link to="/catalog">
          <Button color="default" size="large" className={styles.catalogBtn}>
            {t("prodBtn")}
          </Button>
        </Link>
      )}
    </div>
  );
}
