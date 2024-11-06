

/* Simulate Data Fetching Using Promises: */
 
 //to delay function
 function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 async function userProfiles() {
  try {  console.log('1: Fetching user profile data'); 
    await delay(1000);
    console.log('1: User profile Fetched!'); //To state data has been fetched 
 } catch (error){
    console.log('Error fetching user profile', error);
 }
}


    async function posts() {
        console.log('2: Fetching posts data');
        await delay(2000); // Made it longer than previous for more of a delay
        console.log('2: Posts fetched!'); //To state data has been fetched
    }

    async function comments() {
        console.log('3: Fetching comments');
        await delay(3000); //Made it longer than previous for more of a delay
        console.log('3: Comments fetched!');//To state data has been fetched
        
        }
    
    
//initiating data fetching process
 userProfiles();
 posts();
 comments();

/*Implement Sequential and Parallel Data Fetching:*/

 //parallel/Sequential data fetching - not too confident this is correct ngl
 function fetchUserProfile(){

 }

 function fetchPosts(){

 }
//error handling//
 function fetchComments(){
    let success = false;
    if (success) {
        resolve('Fetched successfully'); }
        else{
            reject('Failed to fetch comments');
        }
 }
//initiates
 Promise.all([fetchUserProfile(), fetchPosts(), fetchComments()]) 
    
   //Refactored//
    async function fetchUserProfile() {
        return await delay(1000);
    }
    async function fetchPosts() {
        return await delay(2000);
    }
    async function fetchComments() {
        return await delay(3000);
    }

    
 

    //chained functions?
    async function getUserContent() {
        try {
            console.log('fetching user profile');
            await userProfile();
            console.log('User profile fetched');

            console.log('fetching posts');
            await posts();
            console.log('Posts fetched');

            console.log('fetching comments');
            await posts();
            console.log('Comments fetched');
        } catch (error) {
            console.log('Error, could not fetch user content');
        }
    }

    getUserContent();