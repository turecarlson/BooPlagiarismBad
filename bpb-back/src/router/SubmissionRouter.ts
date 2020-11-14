import IRouter from './IRouter'
import AbstractRouter from './AbstractRouter'
import { AppConfig } from '../AppConfig';

class SubmissionRouter extends AbstractRouter implements IRouter {
  
  constructor(app : any,route : string) {
    super(app,route);
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/helloworld",this.getHelloWorldFn);
    this.router.get("/compare?a=subid1&b=subid2",this.getComparisonResultFn); //TODO: un-hardcode
    this.router.post("/upload",this.postFileUploadFn);
  }
  
  getHelloWorldFn = async function(req : Express.Request,res : any){
    res.send({"response":"the world and the bpb-back submission router say hi back!!"});
  }

  //TODO: Replace these
  //TODO: Update! Format is no longer accurate
  //Hardcoded endpoints for front-end development purposes
  getComparisonResultFn = async function(rq : Express.Request,res : any){
    res.send({
        "matches":[
          [{"sub_id":"subid1","file_path":"/test/file.java","context":"method","start":1,"end":2,"hash":"245rr1","text":"void test() { }"},{"sub_id":"subid2","file_path":"/test/file2.java","context":"method","start":5,"end":6,"hash":"423qq1","text":"void rest() { }"}],
          [{"sub_id":"subid1","file_path":"/test/file33.java","context":"method","start":5,"end":7,"hash":"reeeetre","text":"void simultaneous() { }"},{"sub_id":"subid2","file_path":"/test/filere.java","context":"method","start":8,"end":10,"hash":"423wqq1","text":"void simulate() { }"}]
        ] 
      });
  }

  //TODO: Replace
  //Hardcoded test endpoint for example purposes
  postFileUploadFn = async function (req : Express.Request,res : any){
    console.log("FILES HERE");
    console.log(req.files);

    try {
      if(!req.files) {
          res.status(400);
          res.send({response:"No file was included in this request. Please ensure a file is provided."})
      } else {
        let submissionFile = req.files.submissionfile;
        
        if(!submissionFile) {
          res.status(400);
          res.send({"response":"File was not submitted using the key name submissionfile. Please resend the file using that key."});
        } else {
          submissionFile.mv(AppConfig.submissionFileUploadDirectory() + submissionFile.name);

          //TODO: call SubmissionManager.addFile here 

          res.send({
              "response": 'File uploaded successfully.',
              "data": {
                  "name": submissionFile.name,
                  "size": submissionFile.size
              }
            }
          );
        }
      } 
    } catch (err) {
        res.status(500);
        res.send(err);
    }
  }
}

export default SubmissionRouter;