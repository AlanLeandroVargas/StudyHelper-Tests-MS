import ITestDocument from "./ITestDocument";

interface ITestCommand 
{
    createTest(): Promise<ITestDocument>;
    updateTest(): Promise<ITestDocument>;
    deleteTest(): Promise<ITestDocument>;
}
export default ITestCommand;