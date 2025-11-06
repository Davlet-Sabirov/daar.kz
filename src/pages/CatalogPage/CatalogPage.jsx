import { Layout } from "antd";
import HeaderNavbar from "./../../components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./../../components/MyFooter/MyFooter";
import Catalog from "./../../components/Catalog/Catalog";
import styles from "./CatalogPage.module.css";
import RequestForm from "../../components/RequestForm/RequestForm";

const { Header, Content, Footer } = Layout;

export default function CatalogPage() {
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
        <Catalog full={true} />
      </Content>
      <div style={{ backgroundColor: "#f3a852ff" }}>
        <RequestForm />
      </div>

      <Footer style={{ padding: 0 }}>
        <div className={styles.myContainer}>
          <Myfooter />
        </div>
      </Footer>
    </Layout>
  );
}
