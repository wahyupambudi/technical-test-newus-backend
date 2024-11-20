export const successResponse = (status: number, message: string, data: any) => {
    return {
        status, message, data
    };
};

export const errorResponse = (status: number, message: string, error: Error) => {
    return {
        status, message, error
    };
};