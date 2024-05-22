class customError extends Error {
    status: number;
    constructor(message:string,status:number, ...params)
    {
        super();
        this.message = message;
        this.status = status;
    }
}
export default customError;