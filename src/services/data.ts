import {Emitter} from "common/events";
//import {User} from "../models/user";
//import {Group} from "../models/group";
import {Cached} from "common/decorators";
import {Service} from "mangular/annotate";
import {Inject} from "mangular/annotate";

@Service
export class DataService extends Emitter{
    @Inject('$rootScope')
    private root:any;
    public scope:any;
    private allOnlineUsers:number = 0;
    constructor(){
        super();
        this.scope = this.root.$new(true);
        this.scope.statuses = [
            {
                name : 'All',
                id   : 'all'
            },
            {
                name : 'Online',
                id   : 'online'
            },
            {
                name : 'Offline',
                id   : 'offline'
            },
            {
                name : 'Is Talking',
                id   : 'istalking'
            }
        ]
    }
    //get users():User[]{
    //    return <User[]>User.all();
    //}
    //
    //getUser(id:string):User{
    //    return <User>User.get(id);
    //}

    updateStatus(res:any){
        res.forEach((s:any)=>{
            //var user = this.getUser(s.id);
            //var d = (s.status.isOnline == user.status.isOnline)?false:true;
            //user.set('status', s.status);
            //if(d){
            //    user.groups.map(group=>{
            //        if(s.status.isOnline) {
            //            var onlineUsers = group.get('onlineUsers');
            //            group.set('onlineUsers',onlineUsers+1);
            //            this.allOnlineUsers++;
            //        } else {
            //            var onlineUsers = group.get('onlineUsers');
            //            group.set('onlineUsers',onlineUsers-1)
            //            this.allOnlineUsers--;
            //        }
            //        this.scope.groups.map((g:any)=>{
            //            if(g.id == 'All') {
            //                g.onlineUsers = this.allOnlineUsers;
            //            }
            //            if(g.id == group.id) {
            //                g.onlineUsers = group.get('onlineUsers');
            //            }
            //        });
            //    });
            //}
        })
        this.scope.users.forEach((u:any)=>{
            res.forEach((s:any)=>{
                if(u.id == s.userId){
                    u.status.type        = s.status.type;
                    u.status.isOnline    = s.status.isOnline;
                    u.status.isTalking   = s.status.isTalking;
                    u.status.changedAt   = s.status.changedAt;
                    u.status.talkingAt   = s.status.talkingAt;
                    u.status.servers     = s.status.servers;
                    u.status.stations    = s.status.stations;
                }
            })
        })
        this.scope.$apply();
    }
    createGroup(group:any):any {
        //return Group.new(group);
    }
    returnItemFromScope(arrayName:string,itemId:string ) {
        return this.scope[arrayName].filter((r)=>{
            if(r.id == itemId) {
                return true;
            }
        })
    }
    createUser(user:any){
        //var user = User.new({id:user.id}).set(user);
        //user.groups.map(group=>{
        //    var gr  = this.createGroup(group);
        //    var users = gr.get('users');
        //    gr.set('users',users+1);
        //    if(user.hasOwnProperty('status') && user.status.isOnline) {
        //        var onlineUsers = gr.get('onlineUsers');
        //        gr.set('onlineUsers',onlineUsers+1);
        //        this.allOnlineUsers++;
        //    }
        //});
        //var groups = [{
        //    'id':'All',
        //    'name':'All',
        //    'users':User.all().length,
        //    'onlineUsers': this.allOnlineUsers
        //}]
        //Group.all().forEach((r:any,index:number)=>{
        //    groups.push({
        //        'id'          : r.id,
        //        'name'        : r.name,
        //        'users'       : r.users,
        //        'onlineUsers' : r.onlineUsers
        //    });
        //})
        //this.scope.users = User.list;
        //this.scope.groups = groups;
        this.scope.$apply();
    }
}