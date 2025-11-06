import { Row, Col, Card, Typography, Button } from "antd";
import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

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
    name: "Семечки жареные, солёные",
    description: "Сорт: Крупные, Страна: Казахстан",
    image: product_1,
  },
  {
    id: 2,
    name: "Семечки жареные, без соли",
    description: "Сорт: Крупные, Страна: Казахстан",
    image: product_2,
  },
  {
    id: 3,
    name: "Курт Классический",
    description: "Вес: 150гр - 30шт. Страна: Казахстан",
    image: product_3,
  },
  {
    id: 4,
    name: "Курт Классический",
    description: "Вес: 30 / 47 / 60 гр. Страна: Казахстан",
    image: product_4,
  },
  {
    id: 5,
    name: "Косточки абрикосовые, солёные",
    description: "Вес: 50гр. Страна: Казахстан",
    image: product_5,
  },
  {
    id: 6,
    name: "Кешью с солью",
    description: "Вес: 50гр. Страна: Казахстан",
    image: product_6,
  },
  {
    id: 7,
    name: "Арахис с солью",
    description: "Вес: 50гр. Страна: Казахстан",
    image: product_7,
  },
  {
    id: 8,
    name: "Фисташки с солью",
    description: "Вес: 50гр. Страна: Казахстан",
    image: product_8,
  },
  {
    id: 9,
    name: "Миндаль с солью",
    description: "Вес: 50гр. Страна: Казахстан",
    image: product_9,
  },
];

export default function Catalog({ full = false }) {
  const visibleProducts = full ? products : products.slice(0, 6);
  return (
    <div className={styles.myContainer}>
      <Title level={2} className={styles.catalogTitle}>
        Наша продукция
      </Title>

      <Row gutter={[24, 24]}>
        {visibleProducts.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <Card
              hoverable
              className={styles.productCard}
              cover={<img alt={item.name} src={item.image} />}
            >
              <Title level={4}>{item.name}</Title>
              <Text type="secondary">{item.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      {!full && (
        <Link to="/catalog">
          <Button color="default" size="large" className={styles.catalogBtn}>
            Вся продукция
          </Button>
        </Link>
      )}
    </div>
  );
}
