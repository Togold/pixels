


var firebaseConfig = {
  apiKey: "AIzaSyAbCVmyEKKZQwAWvHw-wBYNvZkEMx1F8qY",
  authDomain: "tug-ofwars.firebaseapp.com",
  projectId: "tug-ofwars",
  storageBucket: "tug-ofwars.appspot.com",
  messagingSenderId: "224888387342",
  appId: "1:224888387342:web:d523ba8cfb5595fdee095f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const storage = firebase.storage();
const storageRef = storage.ref();

const db = firebase.firestore()



const upload = () => {
  let inp = document.getElementById("file")
  let file = inp.files[0]
  // console.log(file)
  let storageRef = storage.ref();
 
  let fileRef = storageRef.child(`usersPhotos/${file.name}`);
  fileRef.put(file).then((snapshot) => {
      console.log('uploaded a blob or file')
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        db.collection(`users/${user.uid}/photos`).add({
          photoURL: downloadURL
        })
      })
  })
}

db.collection(`users/${uid}/photos`)
    .get()
    .then((docs) =>{
      docs.forEach(doc => {
        let zurg = document.createElement('img');
        zurg.src = doc.data().photoURL
        document.getElementById('profile').appendChild(zurg);
      })
    })