# Cypress Cucumber Automation Framework

## Descripción general

Este proyecto es un framework de automatización creado desde cero con Cypress, siguiendo una metodología incremental por evolutivos.

El framework incluye:

* Base de Cypress
* Integración con Cucumber / BDD
* Validador de archivos Gherkin `.feature`
* Pruebas end-to-end de UI
* Pruebas backend/API
* Validación de respuestas con JSON Schema
* Ejecución por ambientes `dev`, `pre` y `pro`
* Librerías auxiliares para mejorar el uso de Cypress
* Generación de datos sintéticos
* Reporte técnico con Mochawesome
* Reporte visual con Cucumber HTML

---

## Estrategia de ramas

El proyecto sigue una metodología de trabajo por evolutivos usando Git.

```text
main      -> rama de release
develop   -> rama de integración del sprint
feature/* -> ramas de evolutivos
```

Cada evolutivo se crea desde `develop`, se implementa en una rama `feature/*`, se prueba localmente y luego se integra a `develop` mediante Pull Request.

Cuando todos los evolutivos están estables en `develop`, se realiza el paso final de release hacia `main`.

---

## Evolutivos implementados

### Evolutivo 1: Base de Cypress

Se creó la estructura base del proyecto Cypress.

Incluye:

* Instalación de Cypress
* Configuración inicial de `cypress.config.js`
* Estructura básica del proyecto
* Primera ejecución de pruebas

---

### Evolutivo 2: Integración con Cucumber

Se integró Cucumber con Cypress para trabajar con archivos `.feature` escritos en Gherkin.

Incluye:

* `@badeball/cypress-cucumber-preprocessor`
* `@bahmutov/cypress-esbuild-preprocessor`
* `esbuild`
* Archivos `.feature`
* Step definitions
* Ejecución de escenarios Cucumber desde Cypress

---

### Evolutivo 3: Validador de Gherkin

Se agregó un validador para los archivos `.feature`.

Incluye:

* `@cucumber/gherkin-utils`
* Script de validación de Gherkin
* Comando `npm run validate:gherkin`

Este evolutivo permite validar la sintaxis de los archivos `.feature` antes de ejecutar las pruebas.

---

### Evolutivo 4: Pruebas E2E y librerías de soporte

Se agregaron pruebas end-to-end y librerías auxiliares para mejorar la legibilidad y estabilidad de las pruebas.

Incluye:

* `@testing-library/cypress`
* `cypress-if`
* `cypress-real-events`
* `cypress-wait-until`
* Comandos reutilizables
* Helpers para pruebas de UI
* Validaciones E2E

---

### Evolutivo 5: Pruebas backend/API y JSON Schema

Se agregaron pruebas backend/API y validación de respuestas usando JSON Schema.

Incluye:

* `cypress-plugin-api`
* `ajv`
* `cypress-ajv-schema-validator`
* Validación de status code
* Validación del body de la respuesta
* Validación contra schema JSON

---

### Evolutivo 6: Configuración por ambientes

Se agregó un sistema de archivos de entorno para ejecutar el framework contra distintos ambientes.

Incluye:

```text
cypress/config/environments/dev.json
cypress/config/environments/pre.json
cypress/config/environments/pro.json
```

Cada archivo contiene variables como:

* `envName`
* `baseUrl`
* `apiUrl`

Ejemplos de ejecución:

```bash
npm run cy:run:dev
npm run cy:run:pre
npm run cy:run:pro
```

---

### Evolutivo 7: Datos sintéticos y utilidades

Se agregaron librerías para generar datos dinámicos y utilidades reutilizables.

Incluye:

* `@faker-js/faker`
* `dayjs`
* `uuid`
* `handlebars`
* `cors`

Ejemplos implementados:

* Generación de datos sintéticos de usuario
* Fechas dinámicas
* Identificadores únicos
* Templates reutilizables
* Helper de CORS

---

### Evolutivo 8: Reporte técnico Mochawesome

Se configuró el reporte técnico con Mochawesome.

Incluye:

* `cypress-mochawesome-reporter`
* `mochawesome`
* `mochawesome-merge`
* `mochawesome-report-generator`
* `cypress-multi-reporters`

El reporte técnico se genera automáticamente al ejecutar Cypress.

Ruta del reporte:

```text
reports/mochawesome/index.html
```

---

### Evolutivo 9: Reporte visual Cucumber HTML

Se agregó un reporte visual basado en los escenarios de Cucumber.

Incluye:

* `multiple-cucumber-html-reporter`
* Generación de JSON de Cucumber
* Script para generar el reporte visual HTML

Comando:

```bash
npm run report:cucumber
```

Ruta del reporte:

```text
reports/cucumber-html/index.html
```

---

### Evolutivo 10: Documentación de ejercicios prácticos

Se agregó una documentación con ejercicios prácticos basados en los temas del curso.

Incluye ejercicios de:

* Configuración base de Cypress
* Pruebas E2E
* Aserciones
* BDD con Cucumber
* Validación de Gherkin
* Pruebas API
* Validación JSON Schema
* Configuración por ambientes
* Datos sintéticos
* Reportes Mochawesome
* Reporte visual Cucumber

---

## Dependencias requeridas

El framework usa las siguientes versiones exactas:

```json
{
  "@badeball/cypress-cucumber-preprocessor": "24.0.0",
  "@bahmutov/cypress-esbuild-preprocessor": "2.2.8",
  "@cucumber/gherkin-utils": "11.0.0",
  "@cypress/browserify-preprocessor": "3.0.2",
  "@faker-js/faker": "10.3.0",
  "@testing-library/cypress": "10.1.0",
  "ajv": "8.17.1",
  "cors": "2.8.6",
  "cross-env": "10.1.0",
  "cypress": "15.10.0",
  "cypress-ajv-schema-validator": "2.0.2",
  "cypress-if": "1.13.2",
  "cypress-mochawesome-reporter": "4.0.2",
  "cypress-multi-reporters": "2.0.5",
  "cypress-on-fix": "1.1.0",
  "cypress-plugin-api": "2.11.2",
  "cypress-real-events": "1.15.0",
  "cypress-wait-until": "3.0.2",
  "dayjs": "1.11.19",
  "esbuild": "0.27.3",
  "fs-extra": "11.3.3",
  "handlebars": "4.7.8",
  "mochawesome": "7.1.4",
  "mochawesome-merge": "5.1.1",
  "mochawesome-report-generator": "6.3.2",
  "multiple-cucumber-html-reporter": "3.10.0",
  "uuid": "13.0.0"
}
```

---

## Estructura del proyecto

```text
cypress/
  config/
    environments/
      dev.json
      pre.json
      pro.json
    load-env.js

  e2e/
    features/
      backend.feature
      corsHelper.feature
      ejemplo.feature
      syntheticData.feature

  schemas/
    postSchema.json

  support/
    step_definitions/
      backend.js
      corsHelper.js
      ejemplo.js
      syntheticData.js
    commands.js
    e2e.js

  utils/
    corsHelper.js
    templateUtils.js
    testDataFactory.js

scripts/
  generate-cucumber-report.js
  validate-gherkin.js

reports/
  mochawesome/
  cucumber-html/
  cucumber-json/

cypress.config.js
package.json
README.md
```

---

## Instalación

Instalar dependencias:

```bash
npm install
```

Si el binario de Cypress no está instalado o se cambió la versión de Cypress, ejecutar:

```bash
npx cypress install
npx cypress verify
```

---

## Scripts disponibles

Abrir Cypress:

```bash
npm run cy:open
```

Ejecutar Cypress:

```bash
npm run cy:run
```

Validar archivos Gherkin:

```bash
npm run validate:gherkin
```

Ejecutar pruebas usando ambiente `dev`:

```bash
npm run cy:run:dev
```

Ejecutar pruebas usando ambiente `pre`:

```bash
npm run cy:run:pre
```

Ejecutar pruebas usando ambiente `pro`:

```bash
npm run cy:run:pro
```

Generar reporte visual de Cucumber:

```bash
npm run report:cucumber
```

---

## Ejecución por ambientes

El framework carga variables desde archivos JSON ubicados en:

```text
cypress/config/environments/
```

Ejemplo de `dev.json`:

```json
{
  "envName": "dev",
  "baseUrl": "https://example.cypress.io",
  "apiUrl": "https://jsonplaceholder.typicode.com"
}
```

El ambiente se selecciona usando la variable `ENVIRONMENT` mediante `cross-env`.

Ejemplo:

```bash
cross-env ENVIRONMENT=dev cypress run
```

---

## Cucumber y Gherkin

Los archivos `.feature` se encuentran en:

```text
cypress/e2e/features/
```

Los step definitions se encuentran en:

```text
cypress/support/step_definitions/
```

Los archivos Gherkin se validan con:

```bash
npm run validate:gherkin
```

---

## Pruebas backend/API

Las pruebas backend/API se implementan usando Cypress y `cypress-plugin-api`.

La URL base de la API se carga desde el archivo JSON del ambiente seleccionado usando:

```js
Cypress.env("apiUrl")
```

Los schemas de validación se almacenan en:

```text
cypress/schemas/
```

La validación de JSON Schema se realiza usando `ajv`.

---

## Reportes

### Reporte técnico Mochawesome

El reporte Mochawesome se genera automáticamente después de ejecutar Cypress.

Comando:

```bash
npm run cy:run:dev
```

Ruta del reporte:

```text
reports/mochawesome/index.html
```

Este reporte es técnico y muestra el resultado consolidado de la ejecución de Cypress.

---

### Reporte visual Cucumber HTML

El reporte visual de Cucumber se genera a partir del JSON generado por Cucumber.

Comando:

```bash
npm run report:cucumber
```

Ruta del reporte:

```text
reports/cucumber-html/index.html
```

Este reporte está orientado a visualizar features, scenarios y resultados en formato más legible.

---

## Nota sobre Browserify Preprocessor

`@cypress/browserify-preprocessor` fue instalado porque hace parte de la paquetería solicitada.

Sin embargo, el preprocessor activo del framework es:

```text
@bahmutov/cypress-esbuild-preprocessor
```

Esto se debe a que la integración actual de Cucumber usa:

```text
@badeball/cypress-cucumber-preprocessor/esbuild
```

Browserify queda disponible como alternativa futura, pero no se habilita para evitar sobrescribir el handler `file:preprocessor` requerido por Cucumber.

---

## Nota sobre hooks

Actualmente el proyecto no requiere hooks de prueba como `before`, `beforeEach`, `after` o `afterEach`.

La configuración actual usa event handlers de Cypress dentro de `setupNodeEvents` para registrar:

* Cucumber
* Mochawesome
* Esbuild preprocessor

Si en el futuro se necesita lógica común antes o después de cada escenario, se pueden agregar hooks de Cucumber como `Before` y `After`.

---

## Validación final antes de release

Antes de hacer merge de `develop` hacia `main`, ejecutar:

```bash
npm install
npm run validate:gherkin
npm run cy:run:dev
npm run cy:run:pre
npm run cy:run:pro
npm run report:cucumber
```

Resultados esperados:

```text
La validación Gherkin pasa correctamente
Las pruebas E2E pasan correctamente
Las pruebas backend/API pasan correctamente
Las ejecuciones por ambiente pasan correctamente
El reporte Mochawesome se genera correctamente
El reporte Cucumber HTML se genera correctamente
```

---

## Proceso de release

Cuando `develop` esté estable:

1. Crear un Pull Request desde `develop` hacia `main`.
2. Hacer merge del Pull Request.
3. Cambiar a la rama `main`.
4. Descargar los últimos cambios.
5. Ejecutar las validaciones finales desde `main`.

```bash
git checkout main
git pull origin main
npm install
npm run validate:gherkin
npm run cy:run:dev
npm run report:cucumber
```

Si todas las validaciones pasan, la release se considera estable.

