export default function replaceClassWithClassName(htmlString: string): string {
  // Create a DOM element from the HTML string
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Replace class attributes with className attributes
  const elementsWithClass = doc.querySelectorAll("[class]");
  elementsWithClass.forEach((element: Element) => {
    element.setAttribute("className", element.getAttribute("class") || "");
    element.removeAttribute("class");
  });

  // Convert the modified DOM back to an HTML string
  const modifiedHtmlString: string = doc.documentElement.outerHTML;

  return modifiedHtmlString;
}
