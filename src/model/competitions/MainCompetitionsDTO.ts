import {XmlDTO} from "./XmlDTO";
import {RallyCompetitionsDTO} from "./RallyCompetitionsDTO";

export interface MainCompetitionsDTO {
  "?xml": XmlDTO;
  RallyCompetitions: RallyCompetitionsDTO;
}