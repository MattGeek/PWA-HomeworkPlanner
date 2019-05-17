(
  ()=>{
    const auth = firebase.auth();

    firebase.firestore().enablePersistance().then(() => {
    const firestore = app.firestore();
    });
  }
);
