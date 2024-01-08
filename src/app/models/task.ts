export interface Task{
    id:number;
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    taskStatus:string;
    createdBy:string;
    assignedTo:string;

}