import { Document } from "mongoose";
import IQuestionDocument from "./IQuestionDocument";
interface ITestDocument extends Document
{
    Name: string;
    Questions: Array<IQuestionDocument>;
    LastScore: number;
}
export default ITestDocument;