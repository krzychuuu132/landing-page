import { Error404 } from "./pages/Error404";
import { HomePage } from "./pages/Homepage";
import { Product } from "./pages/Product";
import { Utils } from "./pathConfiguration";

const routes = {
  "/": HomePage,
  "/product": Product,
};

const router = async () => {
  const content = null || document.getElementById("root");

  let request = Utils.parseRequestURL();

  let parsedURL = (request.resource ? "/" + request.resource : "/") + (request.id ? "/" : "") + (request.verb ? "/" + request.verb : "");

  const startIndexParams = parsedURL.indexOf("?");
  const basePath = parsedURL.slice(0, startIndexParams) || "/";

  let page = routes[basePath] ? routes[basePath] : Error404;
  content.innerHTML = await page.render();
  await page.after_render(parsedURL);
};
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
