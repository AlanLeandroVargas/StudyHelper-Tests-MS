import ITestDocument from "./ITestDocument";

interface ITestQuery
{
    getTestsByUserId(): Promise<Array<ITestDocument>>;
}
export default ITestQuery;