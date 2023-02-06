class Mark{
    id:number
    studentName: string
    midTerm: number
    finalTerm: number
    activities: number

    constructor(
        id:number,
    studentName: string,
    midTerm: number,
    finalTerm: number,
    activities: number
    ){
        this.id=id
        this.studentName=studentName;
        this.midTerm=midTerm;
        this.finalTerm=finalTerm;
        this.activities=activities;
    }
}

export default Mark;