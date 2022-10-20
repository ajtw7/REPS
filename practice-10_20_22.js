const leagues = ["MLS", "NBA", "NFL", "MLB", "EPL", "LL", "BL"];

leagues.push("NFL");

console.log(leagues.length);

const favLeague = leagues.map((league) => {
  return `My favorite league is the ${league}`;
});

console.log(favLeague);

console.log(leagues)

const loseALeague = leagues.pop()
console.log(loseALeague)
console.log(leagues)

const lowercaseLeagues = leagues.map(league => {
    return league.toLowerCase()
})

lowercaseLeagues.filter()



/*
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519

*/