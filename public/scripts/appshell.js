(
  ()=>{
    const app = firebase;
    console.log('intialized firebase app');
    const auth = app.auth();

    app.firestore().enablePersistence().then(() => {
      const db = app.firestore();

    //  var weekDatesR = document.getElementById('weekDates');
      //var homework = document.getElementById('homework');
      console.log('connected to firestore');

      db.collection('subject').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data())
        })
      })
      .catch(error => {
        console.log("Error getting documents: ", error)
      })
    })
  }
)();
