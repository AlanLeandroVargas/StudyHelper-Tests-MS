import ITestDocument from "../Interfaces/ITestDocument";
import ITestQuery from "../Interfaces/ITestQuery";

class TestQuery implements ITestQuery
{
    getTestsByUserId(): Promise<Array<ITestDocument>> {
        throw new Error("Method not implemented.");
    }
}
export default TestQuery;