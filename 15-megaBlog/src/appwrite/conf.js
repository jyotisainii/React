import {config} from '../config/config.js';
import {Client,Account,ID,Databases,Storage,Query} from     "appwrite";

export class Service{
Client =  new Client();
database;
buket;

constructor(database){
    this.client.setEndpoint(config.appwriteUrl);
    this.client.setProject(config.appwriteProjectId);
    this.databases =  new Databases(this.client);
    this.bucket = new Storage(this.client);
}

  async createPost({title,slug,content ,featuredImages,status,userId}){
    try{
              return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                  title,
                  content,
                  featuredImages,
                  status,
                  userId
                }
              )
      }
    catch (error) {
      throw error;
    }
  }
 async updatePost(slug,{title,content,featuredImages,status}){
    try{
      return await this.database.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImages,
          status
        }
      )
    }
    catch (error) {
      throw error;
    }
  }
 
 async deletePost(slug){
    try{
       await this.database.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
      return true
    }
    catch (error) {
      throw error;
      return false
    }
 
 }

async getPost(slug){
    try{
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
    }
    catch (error) {
      throw error;
  return false
    }
  
}

async getPosts(queries=[query.equals("status","active")]) {
try {

    return await this.database.listDocuments(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      queries
    )
}catch(error){
    throw error;
}
}

///////file upload
async uploadFile(file){
    try{
       return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,
        
      )
    }
    catch (error) {
      throw error;
      return false
    }
}
async deleteFile(fileId){
try{
await this.bucket.deleteFile(
    config.appwriteBucketId,
    fileId
  
)

}catch(error){
    throw error;
    return false;
}
}
 getFilePreview(fileId){
    return this.bucket.getFilePreview(
        config.appwriteBucketId,
        fileId,
        
      
    )
 }

}



const service =new Service()
export default service