import RequestForm from "../../components/RequestForm/RequestForm";
import { Layout } from "antd";
import HeaderNavbar from "./../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../components/MyFooter/MyFooter";
import styles from "./ContactPage.module.css";

const { Header, Content, Footer } = Layout;

export default function ContactPage() {
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
        <RequestForm />
      </Content>

      <Footer style={{ padding: 0 }}>
        <div className={styles.myContainer}>
          <Myfooter />
        </div>
      </Footer>
    </Layout>
  );
}
