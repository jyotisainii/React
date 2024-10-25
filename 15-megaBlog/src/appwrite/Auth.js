import {config} from '../config/config.js';
import {Client,Account,ID} from     "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl);
        this.client.setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
   
async createAccount({email, password,name}){
        try{
   const userAccount = await this.account.create(ID.unique(), email, password,name)
   if(userAccount){
    return this.login({email, password})

   }else{
    return userAccount;
   }

        }catch(error){
            throw  error;
        }
    }


    
    async login({email, password}){
        try{
           return await  this.account.createEmailPasswordSession(email, password);

        }
        catch(error){}
    }

    async getCurrentUser() {
        try{
        await this.account.get();
        }catch(error)
        {
         return error;
        }
        return null;

    }
   async logout(){
    try{
        await this.account.deleteSessions("current");
    }catch(error){}
 
   }


}





const authService= new AuthService();
export default authService