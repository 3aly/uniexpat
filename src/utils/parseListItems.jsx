// src/utils.js
export const parseListItems = (listItems) => {
  const nestedList = [];
  let currentParent = null;

  listItems.forEach((item) => {
    const match = item.match(/^(\d+\.|-|[a-zA-Z]\.)\s*(.*)/);
    if (match) {
      const [, prefix, text] = match;
      if (prefix === "-" || prefix.match(/^\d+\.$/)) {
        currentParent = {
          text,
          sublist: [],
        };
        nestedList.push(currentParent);
      } else {
        if (currentParent) {
          currentParent.sublist.push(item);
        } else {
          nestedList.push({
            text: item,
            sublist: [],
          });
        }
      }
    } else {
      if (currentParent) {
        currentParent.sublist.push(item);
      } else {
        nestedList.push({
          text: item,
          sublist: [],
        });
      }
    }
  });

  return nestedList;
};
