(
  ()=>{
    const auth = firebase.auth();

    firebase.firestore().enablePersistance().then(() => {
      const db = app.firestore();

      var weekDatesR = document.getElementById('weekDates');
      var homework = document.getElementById('homework');

      db.collection('homework').where("expiry", "==", Timestamp.fromDate(new Date("2019-05-20T00:00:00+0200")))
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
        });
      });
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
    });
  }
);
