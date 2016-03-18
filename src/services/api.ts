import {Service} from "mangular/annotate";
import {Inject} from "mangular/annotate";
//import {User} from "../models/user";
import {DataService} from "./data"

@Service
export class ApiService {
    @Inject('$rootScope')
    private root;
    private socket:WebSocket;
    @Inject data:DataService;


    constructor(@Inject('config') config){
        window['Api'] = this;

        this.socket = new WebSocket(config.api.url,['wcb']);

        this.socket.addEventListener("open",(e)=>{
            console.info(e);
        });
        this.socket.addEventListener("close",(e)=>{
            console.info(e);
        });
        this.socket.addEventListener("message",(e)=>{
            this.onCommand(JSON.parse(e.data))
        });
    }

    onCommand(command:any){
        switch(command.type){
            case 'user' :
                this.data.createUser(command.user);
                break;
            case 'statusUpdate' :
                console.log(command.status);
                this.data.updateStatus(command.status);
                break;
        }
    }

}

