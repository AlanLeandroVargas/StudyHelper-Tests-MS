import ITestCommand from "../Interfaces/ITestCommand";
import ITestDocument from "../Interfaces/ITestDocument";
class TestCommand implements ITestCommand
{
    createTest(): Promise<ITestDocument> {
        throw new Error("Method not implemented.");
    }
    updateTest(): Promise<ITestDocument> {
        throw new Error("Method not implemented.");
    }
    deleteTest(): Promise<ITestDocument> {
        throw new Error("Method not implemented.");
    }
}
export default TestCommand;