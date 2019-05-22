export function logInUser(email, password) {
  return new Promise(res =>
    setTimeout(
      () =>
        res({
          id: 1,
          name: {
            first: "Belinda",
            last: "Grellis"
          },
          email: email,
          gender: "Female",
          position: "Paralegal",
          avatar:
            "https://robohash.org/quilaudantiumconsectetur.jpg?size=50x50&set=set1"
        }),
      1000
    )
  );
}

export function getWorkers() {
  return new Promise(res =>
    setTimeout(
      () =>
        res({
          workers: [
            {
              id: 1,
              name: {
                first: "Alison",
                last: "Beal"
              },
              email: "abeal0@opensource.org",
              gender: "Female",
              position: "Office Assistant III",
              avatar:
                "https://robohash.org/eligendietreprehenderit.jpg?size=50x50&set=set1"
            },
            {
              id: 2,
              name: {
                first: "Regina",
                last: "Hanny"
              },
              email: "rhanny1@ucoz.com",
              gender: "Female",
              position: "Payment Adjustment Coordinator",
              avatar: "https://robohash.org/sitnatuset.jpg?size=50x50&set=set1"
            },
            {
              id: 3,
              name: {
                first: "Frants",
                last: "Fautley"
              },
              email: "ffautley2@si.edu",
              gender: "Male",
              position: "Administrative Officer",
              avatar:
                "https://robohash.org/laborumnihildolores.jpg?size=50x50&set=set1"
            },
            {
              id: 4,
              name: {
                first: "Merle",
                last: "Littlejohn"
              },
              email: "mlittlejohn3@ebay.com",
              gender: "Female",
              position: "Nurse Practicioner",
              avatar:
                "https://robohash.org/inciduntpraesentiumminima.jpg?size=50x50&set=set1"
            },
            {
              id: 5,
              name: {
                first: "Alana",
                last: "Becerro"
              },
              email: "abecerro4@stanford.edu",
              gender: "Female",
              position: "Budget/Accounting Analyst II",
              avatar:
                "https://robohash.org/utesseexcepturi.jpg?size=50x50&set=set1"
            },
            {
              id: 6,
              name: {
                first: "Diahann",
                last: "Turford"
              },
              email: "dturford5@mit.edu",
              gender: "Female",
              position: "Accounting Assistant III",
              avatar:
                "https://robohash.org/temporainventoremaxime.jpg?size=50x50&set=set1"
            },
            {
              id: 7,
              name: {
                first: "Emmett",
                last: "Minster"
              },
              email: "eminster6@webs.com",
              gender: "Male",
              position: "Automation Specialist III",
              avatar:
                "https://robohash.org/maioresateaque.jpg?size=50x50&set=set1"
            },
            {
              id: 8,
              name: {
                first: "Fax",
                last: "Gregan"
              },
              email: "fgregan7@elpais.com",
              gender: "Male",
              position: "Financial Analyst",
              avatar:
                "https://robohash.org/quibusdameosmaiores.jpg?size=50x50&set=set1"
            },
            {
              id: 9,
              name: {
                first: "Anselma",
                last: "Stroton"
              },
              email: "astroton8@nasa.gov",
              gender: "Female",
              position: "Geologist III",
              avatar:
                "https://robohash.org/delectusetet.jpg?size=50x50&set=set1"
            },
            {
              id: 10,
              name: {
                first: "Boy",
                last: "Ashley"
              },
              email: "bashley9@ucoz.com",
              gender: "Male",
              position: "Marketing Manager",
              avatar:
                "https://robohash.org/providentexcepturiaccusamus.jpg?size=50x50&set=set1"
            }
          ]
        }),
      1000
    )
  );
}
