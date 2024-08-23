import mongoose, { Schema } from "mongoose";
import IQuestionDocument from "../../Interfaces/IQuestionDocument";
import ITestDocument from "../../Interfaces/ITestDocument";

const questionSchema: Schema<IQuestionDocument> = new mongoose.Schema(
    {
        Question: {type: String, required: true},
        Answer: {type: String, required: true}
    });

const testSchema: Schema<ITestDocument> = new mongoose.Schema(
    {
        Name: {type: String, required: true},
        Questions: {Questions: [questionSchema]}
    });

const TestModel = mongoose.model('Test', testSchema);
export default TestModel;