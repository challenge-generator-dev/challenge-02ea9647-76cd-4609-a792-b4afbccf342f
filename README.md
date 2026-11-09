# Desarrollo de API REST para Catálogo de Productos

La empresa 'Fintech Solutions' necesita un catálogo de productos expuesto a través de una API REST. Los productos tienen un nombre, descripción, precio y categoría. La API debe validar que los nombres de productos no sean duplicados y que los precios no sean negativos. Además, debe manejar errores de manera centralizada y proporcionar respuestas adecuadas en casos de error.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construccion de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición y Validación de Productos

**Objetivo:** Crear endpoints para añadir y consultar productos, asegurando que los nombres no sean duplicados y los precios no sean negativos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Diseña un endpoint POST para añadir un producto al catálogo, validando que el nombre no esté duplicado y el precio no sea negativo.
- Diseña un endpoint GET para consultar todos los productos.

**Entregable:** Endpoints POST y GET funcionando con validaciones de nombre y precio.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo almacenar temporalmente los productos para las validaciones.
- Piensa en cómo comunicar los errores de validación al cliente.

</details>

### Fase 2: Manejo Centralizado de Errores

**Objetivo:** Implementar un mecanismo para manejar errores de manera centralizada en la API.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Diseña una estrategia para manejar errores de validación y otros errores que puedan ocurrir en los endpoints.
- Asegúrate de que la API responda con mensajes de error claros y códigos de estado HTTP apropiados.

**Entregable:** Mecanismo de manejo de errores centralizado en la API.

<details>
<summary>Pistas de conocimiento</summary>

- Considera usar middleware para centralizar el manejo de errores.
- Piensa en cómo categorizar los errores para una mejor comprensión por parte del cliente.

</details>

### Fase 3: Exposición del Catálogo de Productos

**Objetivo:** Exponer el catálogo de productos a través de la API, asegurando que los endpoints funcionen correctamente y manejen los errores de manera adecuada.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Asegura que los endpoints creados en las fases anteriores funcionen correctamente y manejen los errores de manera adecuada.
- Realiza pruebas para verificar que la API cumple con los requisitos de validación y manejo de errores.

**Entregable:** API REST completa que expone el catálogo de productos con validación y manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Realiza pruebas unitarias y de integración para asegurar la calidad del código.
- Considera usar herramientas de testing para automatizar las pruebas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un endpoint en una API REST y cuál es su propósito?
- **paraQueSirve**: ¿Para qué sirve la validación de entradas en una API REST?
- **comoSeUsa**: ¿Cómo se usa un middleware para manejar errores en una API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al construir una API REST y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de una API REST con manejo centralizado de errores?

## Criterios de Evaluacion

- Creación de endpoints POST y GET con validaciones de nombre y precio.
- Implementación de un mecanismo de manejo de errores centralizado.
- Exposición del catálogo de productos a través de la API con validación y manejo de errores.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
