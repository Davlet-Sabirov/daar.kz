import { useState } from "react";
import {
  Layout,
  Menu,
  Dropdown,
  Space,
  Typography,
  Drawer,
  Button,
} from "antd";
import { PhoneOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/logo2.svg";
import styles from "./HeaderNavbar.module.css";

const { Header } = Layout;
const { Text } = Typography;

const HeaderNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const navLinks = [
    {
      key: "1",
      label: (
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          ГЛАВНАЯ
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          ПРОДУКЦИЯ
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          НОВОСТИ И АКЦИИ
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          КОНТАКТЫ
        </NavLink>
      ),
    },
    {
      key: "5",
      label: (
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          О КОМПАНИИ
        </NavLink>
      ),
    },
  ];

  const navPhones = [
    {
      key: "ph-1",
      label: <a href="tel:+77477733777">+7 (747) 773-37-77</a>,
    },
    {
      key: "ph-2",
      label: <a href="tel:+77760942440">+7 (776) 094-24-40</a>,
    },
  ];

  const navLangs = [
    {
      key: "lang-en",
      label: "ENGLISH",
      icon: (
        <img
          src="https://flagcdn.com/w20/gb.png"
          alt="English Flag"
          style={{ width: 16, marginRight: 8 }}
        />
      ),
    },
    {
      key: "lang-kz",
      label: "ҚАЗАҚ",
      icon: (
        <img
          src="https://flagcdn.com/w20/kz.png"
          alt="Kazakh Flag"
          style={{ width: 16, marginRight: 8 }}
        />
      ),
    },
  ];

  return (
    <Header className={styles.header}>
      <NavLink to="/" className={styles.logoContainer}>
        <img src={logo2} alt="Логотип" style={{ height: 40 }} />
      </NavLink>

      {/* ===== Desktop ===== */}
      <Menu
        mode="horizontal"
        className={styles.menuDesktop}
        items={navLinks}
        selectable={false} // чтобы не сбивало activeLink NavLink
      />

      <Space size="large" split="|" className={styles.dropdownDesktop}>
        <Dropdown menu={{ items: navPhones }} trigger={["click"]}>
          <a href="tel:+77750772000" className={styles.navDropdown}>
            <PhoneOutlined />
            <Text strong>+7 (775) 077-20-00</Text>
            <DownOutlined />
          </a>
        </Dropdown>

        <Dropdown menu={{ items: navLangs }} trigger={["click"]}>
          <a href="#" className={styles.navDropdown}>
            <img
              src="https://flagcdn.com/w20/ru.png"
              alt="Russian Flag"
              style={{ width: 16 }}
            />
            <Text strong>РУССКИЙ</Text>
            <DownOutlined />
          </a>
        </Dropdown>
      </Space>

      {/* ===== Mobile ===== */}
      <Button
        type="text"
        onClick={showDrawer}
        style={{ height: "40px" }}
        className={styles.navBurger}
      >
        <MenuOutlined style={{ fontSize: "22px" }} />
      </Button>

      <Drawer title="Меню" placement="right" onClose={onClose} open={visible}>
        <Menu
          mode="vertical"
          items={navLinks}
          selectable={false}
          onClick={onClose}
          className={styles.drawerMob}
        />

        <Space size="large" className={styles.dropdownMob} direction="vertical">
          <Dropdown menu={{ items: navPhones }} trigger={["click"]}>
            <a href="tel:+77750772000" className={styles.navDropdown}>
              <PhoneOutlined />
              <Text strong>+7 (775) 077-20-00</Text>
              <DownOutlined />
            </a>
          </Dropdown>

          <Dropdown menu={{ items: navLangs }} trigger={["click"]}>
            <a href="#" className={styles.navDropdown}>
              <img
                src="https://flagcdn.com/w20/ru.png"
                alt="Russian Flag"
                style={{ width: 16 }}
              />
              <Text strong>РУССКИЙ</Text>
              <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      </Drawer>
    </Header>
  );
};

export default HeaderNavbar;
