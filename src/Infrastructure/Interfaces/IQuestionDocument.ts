import { Document } from "mongoose";
interface IQuestionDocument extends Document
{
    Question: string;
    Answer: string;
}
export default IQuestionDocument;