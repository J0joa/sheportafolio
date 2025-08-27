// scripts/generatePDF.js
import puppeteer from "puppeteer";

(async () => {
  // URL de tu proyecto Vite corriendo en localhost
  const url = "http://localhost:5173";

  // Abrir navegador
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Definir vistas responsivas
  const devices = [
    { name: "Desktop", width: 800, height: 1280 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Mobile", width: 375, height: 812 }
  ];

  // Generar PDF para cada vista
  for (const device of devices) {
    await page.setViewport({ width: device.width, height: device.height });
    await page.goto(url, { waitUntil: "networkidle0" });

    await page.pdf({
      path: `pdf-${device.name}.pdf`,
      format: "A4",
      printBackground: true
    });

    console.log(`PDF generado: pdf-${device.name}.pdf`);
  }

  // Cerrar navegador
  await browser.close();
})();
