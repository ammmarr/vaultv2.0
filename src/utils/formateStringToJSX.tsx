const formateStringToJSX = (description: string) => {
  let content = <p>{description}</p>;
  if (/<\/?[a-z][\s\S]*>/i.test(description)) {
    content = <p dangerouslySetInnerHTML={{ __html: description }}></p>;
  }

  return content;
};

export default formateStringToJSX;
