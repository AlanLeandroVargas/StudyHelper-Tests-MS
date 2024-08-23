import ITestCommand from "../../Infrastructure/Interfaces/ITestCommand";
import ITestQuery from "../../Infrastructure/Interfaces/ITestQuery";
import ITestServices from "../Interfaces/ITestServices";

class TestServices implements ITestServices
{
    private testCommand: ITestCommand;
    private testQuery: ITestQuery;
    constructor(testCommand: ITestCommand, testQuery: ITestQuery)
    {
        this.testCommand = testCommand;
        this.testQuery = testQuery;
    }
}
export default TestServices;