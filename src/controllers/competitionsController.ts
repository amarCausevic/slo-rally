import asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
import fetch from "node-fetch";
import {parseXmlToJson} from "../utilities/xmlParser";

class CompetitionsController {
  baseURL: string = 'https://api.competitions.com';

  public getCompetitions: any = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
      const response: any = await fetch(this.baseURL)
      const xmlData: any = await response.text();
      const jsonResponse: any = parseXmlToJson(xmlData);

      res.json(jsonResponse);
      console.log("This is the response: " + jsonResponse)
    } catch (err) {
      console.error(err);
      //TODO: Is this needed since we express aysnc handler
      res.status(500).json({message: 'Failed to fetch competition results', error: err});
    }
  });
}