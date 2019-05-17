(
  ()=>{
    const auth = firebase.auth();

    firebase.firestore().enablePersistance().then(() => {
      const db = app.firestore();

    //  var weekDatesR = document.getElementById('weekDates');
      //var homework = document.getElementById('homework');

      db.collection('subkect').get()
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
);
