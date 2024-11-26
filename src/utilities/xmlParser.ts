import {XMLParser} from 'fast-xml-parser';

const parser = new XMLParser({
  ignoreAttributes: false,  // Retain attributes as part of the parsed result
  attributeNamePrefix: "@_",
  textNodeName: "#text",
});

export const parseXmlToJson = (xmlData: string): any => {
  return parser.parse(xmlData);
};
