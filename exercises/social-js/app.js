var members = [{
        name: "Ben",
        age: 28,
        bio: function () {
            return("Enjoys peaches and long walks on the beach")
        },
        activity: {
            likes: 100,
            subs: 30,
            friends: ["Max", "Julie", "Lindsay", "Matt"]
        }
               } ,
    {
        name: "Adam",
        age: 28,
        bio: function () {
            return("I'm awesome")
        },
        activity: {
            likes: 1000,
            subs: 330,
            friends: ["Mel", "Kim"]
        }
               },
    {
        name: "Chi",
        age: 28,
        bio: function () {
            return("Too busy for you")
        },
        activity: {
            likes: 187,
            subs: 34,
            friends: ["Joe", "Kyle", "Stephanie", "Matt"]
        }
               },
    {
        name: "Steve",
        age: 28,
        bio: function () {
            return("I bake cakes")
        },
        activity: {
            likes: 1000,
            subs: 295,
            friends: ["Mark", "Lacey", "Robert", "Max"]
        }
               }
              ];
members.push({
        name: "Carol",
        age: 28,
        bio: function () {
            return("Loves cooking")
        },
        activity: {
            likes: 57,
            subs: 13,
            friends: ["Justin", "Mel", "Matt"]
        }
               });
members[2].activity.friends.push("Nancy","Bob");
console.log(members[2].name, "has new friends!", members[2].activity.friends[3], members[2].activity.friends[4]);
