class TaskModle {
    name;
    categoryId;
    categoryName;
    details;
    startDate;
    endDate;
    status;

    constructor(name,categoryId,categoryName,details,startDate,endDate,status){
        this.name=name;
        this.categoryId=categoryId;
        this.categoryName=categoryName;
        this.details=details;
        this.startDate=startDate;
        this.endDate=endDate;
        this.status=status;
    }
}
export default TaskModle;