## MySQL - SpringBoot - Vite [RestAPI]

1 [Backend(SpringBoot)](https://github.com/ai-no-yume/rest-api/tree/main/rest-api)

2.[Frontend(Vite)](https://github.com/ai-no-yume/rest-api/tree/main/frontend)

⭐️ RestAPI
SpringBoot+Vite+MySql

```sql
-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `Customer` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `phoneNumber` VARCHAR(10) NOT NULL,
  `personalEmail` VARCHAR(100) NOT NULL,
  `addressLine1` VARCHAR(120) NOT NULL,
  `addressLine2` VARCHAR(120) NOT NULL,
    `addressLine3` VARCHAR(120) NOT NULL
) CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `Customer` (name, phoneNumber, personalEmail, addressLine1, addressLine2, addressLine3) VALUES
    ('Juan Rodriguez', '3101234567', 'juan.rodriguez@example.com', 'Transversal 73 # 65 – 296 Sector El Volador, Medellín.', 'Barrio El Dorado, Edificio Torres del Sol, Piso 10 apto. B', 'Barrio El Dorado, Edificio Torres del Sol, Piso 10 apto. B'),
    ('Sofia Martinez', '3017654321', 'sofia.martinez@example.com', 'Carrera 53A Sur # 123E-78', 'Conjunto Residencial El Paraíso, Casa 15', 'Barrio El Dorado, Edificio Torres del Sol, Piso 10 apto. B'),
    ('Maria Lopez', '3009876543', 'maria.lopez@example.com', 'Transversal 73 # 65 – 296 Sector El Volador, Medellín.', 'Barrio El Dorado, Edificio Torres del Sol, Piso 10 apto. B', 'Cra. 73 # 65 - 296, El Progreso, Medellín, Castilla, Medellín, Antioquia');
```
