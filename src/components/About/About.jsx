import styles from "./About.module.css";
import { Row, Col, Typography, Button } from "antd";
import about from "../../assets/img/about.webp";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div className={styles.myContainer}>
      <Row gutter={[40, 40]} align="top">
        <Col xs={24} md={12}>
          <img src={about} alt="about" className={styles.imgAbout} />
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>О компании</Title>
          <Paragraph>
            <br />
            Продукция <b>DAAR</b> производится в самом сердце Казахстана - под
            щедрым солнцем и с уважением к традициям. Мы верим, что вкус
            рождается из заботы: каждая семечка проходит тщательный отбор,
            обжаривается по проверенному временем рецепту и упаковывается с
            любовью.
            <br /> <br />
            Наша цель - сохранить настоящий вкус детства, тот самый аромат
            свежих, хрустящих семечек, знакомый каждому. Мы гордимся тем, что
            всё создаём здесь, на родной земле, с теплом и вниманием к каждой
            детали.
            <br /> <br />
            <b>DAAR</b> - это качество, которому доверяют семьи. Ведь всё самое
            лучшее - детям!
            <br /> <br />
          </Paragraph>
          <Link to="/about">
            <Button color="default" size="large" className={styles.aboutBtn}>
              Подробнее
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
