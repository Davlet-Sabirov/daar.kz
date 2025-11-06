import { useState } from "react";
import { Row, Col, Typography, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./RequestForm.module.css";

const { Title, Paragraph } = Typography;

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
    files: [],
  });

  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // 👈 Для подсветки ошибок

  const BOT_TOKEN = "8423362854:AAGo5kV2zkw-zMcvh2MkmUzSJ0QXMZ9pKHA";
  const CHAT_IDS = ["2049973205", "1292417998"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Убираем ошибку при вводе
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
    setFormData({
      ...formData,
      files: fileList.map((f) => f.originFileObj),
    });
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim()) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      message.warning("Пожалуйста, заполните имя и номер телефона!");
      return;
    }

    setLoading(true);

    try {
      const text = `
📩 Новая заявка с сайта
👤 Имя / Компания: ${formData.name}
📞 Телефон: ${formData.phone}
💬 Комментарий: ${formData.comment || "-"}
      `;

      for (const chatId of CHAT_IDS) {
        // 1️⃣ Отправляем текст
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
        });

        // 2️⃣ Отправляем файлы (если есть)
        if (formData.files.length > 0) {
          for (const file of formData.files) {
            const fileData = new FormData();
            fileData.append("chat_id", chatId);
            fileData.append("document", file);

            const response = await fetch(
              `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
              { method: "POST", body: fileData }
            );

            const result = await response.json();
            if (!result.ok) {
              console.error("Ошибка при загрузке файла:", result);
            }
          }
        }
      }

      message.success("Заявка успешно отправлена!");

      // ✅ Сбрасываем форму и upload
      setFormData({ name: "", phone: "", comment: "", files: [] });
      setFileList([]);
      setErrors({});
    } catch (err) {
      console.error(err);
      message.error("Ошибка при отправке. Попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.myContainer}>
      <Row gutter={[40, 40]} align="top">
        {/* Левая часть */}
        <Col xs={24} md={12}>
          <Title level={2}>Заполните форму и мы изучим ваше предложение</Title>
          <Paragraph>
            Напишите нам! Наш менеджер изучит вашу заявку и свяжется с вами в
            течение 20 минут.
          </Paragraph>

          <Paragraph>
            <strong>Телефон:</strong>
            <br />
            <Typography.Link href="tel:+77750772000">
              +7 (775) 077-20-00
            </Typography.Link>
            <br />
            <Typography.Link href="tel:+77477733777">
              +7 (747) 773-37-77
            </Typography.Link>
            <br />
            <Typography.Link href="tel:+77760942440">
              +7 (776) 094-24-40
            </Typography.Link>
          </Paragraph>

          <Paragraph>
            <strong>E-mail:</strong>
            <br />
            daar.kazakhstan@gmail.com
          </Paragraph>
        </Col>

        {/* Правая часть */}
        <Col xs={24} md={12}>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя / Название компании"
            style={{
              marginBottom: "1rem",
              padding: "1.5rem",
              borderColor: errors.name ? "red" : undefined,
            }}
          />
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Номер телефона"
            style={{
              marginBottom: "1rem",
              padding: "1.5rem",
              borderColor: errors.phone ? "red" : undefined,
            }}
          />
          <div style={{ marginBottom: "1.5rem" }}>
            <Upload
              multiple
              beforeUpload={() => false}
              onChange={handleFileChange}
              fileList={fileList}
            >
              <Button icon={<UploadOutlined />}>Добавить файл</Button>
            </Upload>
          </div>
          <Input.TextArea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Ваш комментарий"
            rows={4}
            style={{ marginBottom: "1rem", padding: "1.5rem" }}
          />
          <Row gutter={[25, 15]} align="middle">
            <Col xs={24} md={12}>
              <Paragraph className={styles.spanBtn}>
                Нажимая кнопку <strong>«Отправить заявку»</strong>, вы даёте
                согласие на обработку персональных данных
              </Paragraph>
            </Col>
            <Col xs={24} md={12} align="middle">
              <Button
                color="default"
                size="large"
                loading={loading}
                onClick={handleSubmit}
                className={styles.formBtn}
              >
                Отправить заявку
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
