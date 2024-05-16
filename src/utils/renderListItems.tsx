import { createLinks } from "./createLinks";

export const renderListItems = (listItems) => {
  return listItems.map((item, index) => (
    <li key={index}>
      {createLinks(item.text)}
      {item.sublist.length > 0 && (
        <ul className="list-disc ml-4">
          {item.sublist.map((subItem, subIndex) => (
            <li key={subIndex}>{createLinks(subItem)}</li>
          ))}
        </ul>
      )}
    </li>
  ));
};
