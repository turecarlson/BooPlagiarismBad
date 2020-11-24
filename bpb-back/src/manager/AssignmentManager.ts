import { Assignment, IAssignment } from "../model/Assignment";
import { IAssignmentDAO } from "../model/AssignmentDAO";

/**
 * Represents a controller for Assignment objects.
 */
export interface IAssignmentManager {
    getAssignments() : Promise<IAssignment[]>;
    getAssignment(assignmentId : string) : Promise<IAssignment>;
    createAssignment(data : Object) : Promise<IAssignment>;
    updateAssignment(assignment : IAssignment, data : Object) : Promise<IAssignment>;
    deleteAssignment(assignmentId : string) : Promise<void>;
}

export class AssignmentManager implements IAssignmentManager {

    private assignmentDAO : IAssignmentDAO;

    constructor(assignmentDAO: IAssignmentDAO) {
        this.assignmentDAO = assignmentDAO;
    }   
    
    async getAssignments(): Promise<IAssignment[]> {
        throw new Error("Method not implemented")
    }
    getAssignment(assignmentId : string) : Promise<IAssignment> {
        return new Promise((resolve,reject) => {
            resolve(new Assignment.builder().build()); //TODO: Remove fake assignment! Required for SubmissionRouter.
        });
    }
    async createAssignment(data : Object): Promise<IAssignment> {
        throw new Error("Method not implemented.");
    }
    async updateAssignment(assignment: IAssignment, data : Object) : Promise<IAssignment> {
        throw new Error("Method not implemented.");
    }
    async deleteAssignment(assignment : string) : Promise<void> {
        throw new Error("Method not implemented.");
    }
}