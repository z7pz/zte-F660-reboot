import puppeteer from "puppeteer";
import config from "../config.json";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://" + config.ip);

  await page.screenshot({ path: "last_screen.png" });
  await page.evaluate(() => {
    document.getElementById("Frm_Username")!.setAttribute("value", "admin");
    document.getElementById("Frm_Password")!.setAttribute("value", "admin");
  });

  await page.screenshot({ path: "last_screen.png" });
  await page.click('input[type="submit"]');
  await page.screenshot({ path: "last_screen.png" });
  await page.goto(`http://${config.ip}/start.ghtml`);
  await page.screenshot({ path: "last_screen.png" });
  await page.evaluate(() => {
    document.body
      .getElementsByTagName("div")[0]
      .getElementsByTagName("table")[0]
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[0]
      .getElementsByTagName("td")[0]
      .getElementsByTagName("iframe")[1]
      .contentDocument!.getElementById("Fnt_mmManager")!
      .click();
  });
  await page.screenshot({ path: "last_screen.png" });
  await page.goto(`http://${config.ip}/start.ghtml`);
  await page.screenshot({ path: "last_screen.png" });
  await page.evaluate(() => {
    document.body
      .getElementsByTagName("div")[0]
      .getElementsByTagName("table")[0]
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[0]
      .getElementsByTagName("td")[0]
      .getElementsByTagName("iframe")[1]
      .contentDocument!.getElementsByClassName("h2_content")[2]
      //@ts-ignore
      .click();
  });
  await page.screenshot({ path: "last_screen.png" });
  await page.goto(`http://${config.ip}/start.ghtml`);
  await page.screenshot({ path: "last_screen.png" });
  await page.evaluate(() => {
    const my = document.body
      .getElementsByTagName("div")[0]
      .getElementsByTagName("table")[0]
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[0]
      .getElementsByTagName("td")[0]
      .getElementsByTagName("iframe")[1].contentDocument!;
    my.getElementById("Submit1")!.click();
    my.getElementById("msgconfirmb")!.click();
  });
  await page.screenshot({ path: "last_screen.png" });
  await browser.close();
})();
