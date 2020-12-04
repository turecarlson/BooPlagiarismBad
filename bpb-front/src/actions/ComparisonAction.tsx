import Submission from '../types/Submission'
import { getComparison, getFileContent } from '../services/ComparisonService'
import { getSubmission } from '../services/SubmissionService'
import Snippet from '../types/Snippet'

export async function compareSubmissions(compareSubmissions : Submission[]) {
    return {
        type: 'COMPARE',
        compareSubmissions: compareSubmissions,
        comparison: await getComparison(compareSubmissions)
    }
};

export function addSubmissionComparison(submission : Submission) {
    return {
        type: 'ADD_COMPARE',
        addSubmission: submission,
    }
}

export function removeSubmissionComparison(submission : Submission) {
    return {
        type: 'REMOVE_COMPARE',
        removeSubmission: submission,
    }    
}

export async function readComparisonSubmission(submissionId: String) {
    let submission = await getSubmission(submissionId);
    return {
        type: 'ADD_COMPARE',
        addSubmission: submission
    }
}

export async function readFileContent(submission: Submission, type: String) {
    // for each file in submission.files
    // request the file contents and add that to an array of strings
    // then return the object with the type and the array of strings
    console.log("Action getting files for submission", submission.name, "file names are", submission.files)

    let fileContents : String[] = [];
    
    for (let i: number = 0; i < submission.files.length; i++) {
        fileContents.push(await getFileContent(submission._id, i));
        console.log("Action: newest file content", fileContents[i]);
    }
    return {
        type: type,
        fileContents: fileContents
    }
}

export function selectSnippets(snippets : Snippet[]) {
    return {
        type: "SET_SNIPPET",
        snippets: snippets
    }
}