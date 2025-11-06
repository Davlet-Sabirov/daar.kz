import { Layout } from "antd";
import "./App.css";
import { Header } from "antd/es/layout/layout";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Myfooter from "./components/MyFooter/MyFooter";
import Hero from "./components/Hero/Hero";
import heroBg from "./assets/img/heroBg.png";
import Catalog from "./components/Catalog/Catalog";
import RequestForm from "./components/RequestForm/RequestForm";
import About from "./components/About/About";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Header
          className={"myContainer"}
          style={{ backgroundColor: "inherit" }}
        >
          <HeaderNavbar />
        </Header>
      </div>
      <div
        style={{
          backgroundColor: "#eee7dd",
        }}
      >
        <Content>
          <div
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: "center",
            }}
          >
            <Hero />
          </div>
          <div style={{ backgroundColor: "#f3a852ff" }}>
            <Catalog full={false} />
          </div>
          <div style={{ backgroundColor: "#f5f5f5" }}>
            <About />
          </div>
          <div style={{ backgroundColor: "#f3a852ff" }}>
            <RequestForm />
          </div>
        </Content>
      </div>
      <Footer style={{ padding: 0 }}>
        <div className={"myContainer"}>
          <Myfooter />
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
