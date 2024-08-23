import { Request, Response, NextFunction} from 'express';
import ITestServices from '../../Domain/Interfaces/ITestServices';
class TestController
{
    private testServices: ITestServices;
    constructor(testServices: ITestServices)
    {
        this.testServices = testServices;
    }    
}
export default TestController;