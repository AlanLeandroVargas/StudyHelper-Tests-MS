import Question from "./Question";

class Test
{
    Name: string;
    Questions: Array<Question>
    LastScore?: number
    constructor(Name: string, Questions?: Array<Question>, LastScore?: number)
    {
        this.Name = Name;
        this.Questions = Questions ?? new Array<Question>;
        this.LastScore = LastScore ?? undefined;
    }
}
export default Test;