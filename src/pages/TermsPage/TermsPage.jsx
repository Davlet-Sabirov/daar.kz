import { Link } from "react-router-dom";
import styles from "./TermsPage.module.css";
import { Layout } from "antd";
import { RightOutlined } from "@ant-design/icons";
import HeaderNavbar from "./../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../components/MyFooter/MyFooter";
import { Trans } from "react-i18next";

const { Header, Content, Footer } = Layout;

export default function TermsPage() {
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
        <div className={styles.breadcrumbs}>
          <ul>
            <li>
              <Link to={"/"}><Trans i18nKey={"termsLink"}/></Link>
            </li>
            <li>
              <RightOutlined />
            </li>
            <li>
              <span>Terms of Use</span>
            </li>
          </ul>
        </div>

        <div className={styles.terms}>
          <div>
            <h2>
              <Trans i18nKey={"termsTitle"} />
            </h2>
            <p>
              <Trans i18nKey={"termsText_1"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_2"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_3"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_4"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_5"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_6"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_7"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_8"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_9"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_10"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_11"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_12"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_13"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_14"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_15"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_16"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_17"} />
            </p>
            <h4>
              <Trans i18nKey={"termsText_18"} />
            </h4>
            <p>
              <Trans i18nKey={"termsText_19"} />
            </p>
          </div>
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
