import { Request, Response } from "express";
import { errorResponse} from "../helper/responseHandler";

function isPalindrome(num: number) {
    // change num to string
    const numString = num.toString();
    // reverse with split and reverse
    const reversedString = numString.split('').reverse().join('');
    // compare
    return numString === reversedString;
}


const Palindrome = (req: Request, res: Response) => {
    try {
        const { num } = req.params;
        res.send({
            message: "Palindrome Check",
            number: num,
            result: isPalindrome(Number(num))
        });
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

export default Palindrome;