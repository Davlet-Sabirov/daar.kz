import { Link } from "react-router-dom";
import styles from "./PrivacyPage.module.css";
import { Layout } from "antd";
import { RightOutlined } from "@ant-design/icons";
import HeaderNavbar from "./../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../components/MyFooter/MyFooter";
import { Trans } from "react-i18next";

const { Header, Content, Footer } = Layout;

export default function PrivacyPage() {
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
              <Link to={"/"}>
                <Trans i18nKey={"polLink"} />
              </Link>
            </li>
            <li>
              <RightOutlined />
            </li>
            <li>
              <span>Privacy Policy</span>
            </li>
          </ul>
        </div>

        <div className={styles.politics}>
          <div>
            <h2>
              <Trans i18nKey={"polTitle"} />
            </h2>
            <p>
              <Trans i18nKey={"polText_1"} />
            </p>
            <h4>
              <Trans i18nKey={"polText_2"} />
            </h4>
            <Trans i18nKey={"polText_3"} />
            <h4>
              <Trans i18nKey={"polText_4"} />
            </h4>
            <Trans i18nKey={"polText_5"} />
            <h4>
              <Trans i18nKey={"polText_6"} />
            </h4>
            <Trans i18nKey={"polText_7"} />
            <h4>
              <Trans i18nKey={"polText_8"} />
            </h4>
            <Trans i18nKey={"polText_9"} />
            <h4>
              <Trans i18nKey={"polText_10"} />
            </h4>
            <Trans i18nKey={"polText_11"} />
            <h4>
              <Trans i18nKey={"polText_12"} />
            </h4>
            <figure className={styles.wpBlockTable}>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <Trans i18nKey={"polText_13"} />
                    </th>
                    <td>
                      <Trans i18nKey={"polText_14"} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <Trans i18nKey={"polText_15"} />
                    </th>
                    <td>
                      <Trans i18nKey={"polText_16"} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <Trans i18nKey={"polText_17"} />
                    </th>
                    <td>
                      <Trans i18nKey={"polText_18"} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <Trans i18nKey={"polText_19"} />
                    </th>
                    <td>
                      <Trans i18nKey={"polText_20"} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </figure>
            <h4>
              <Trans i18nKey={"polText_21"} />
            </h4>
            <Trans i18nKey={"polText_22"} />
            <h4>
              <Trans i18nKey={"polText_23"} />
            </h4>
            <Trans i18nKey={"polText_24"} />
            <h4>
              <Trans i18nKey={"polText_25"} />
            </h4>
            <Trans i18nKey={"polText_26"} />
            <h4>
              <Trans i18nKey={"polText_27"} />
            </h4>
            <Trans i18nKey={"polText_28"} />
            <h4>
              <Trans i18nKey={"polText_29"} />
            </h4>
            <Trans i18nKey={"polText_30"} />
            <h4>
              <Trans i18nKey={"polText_31"} />
            </h4>
            <Trans i18nKey={"polText_32"} />
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
