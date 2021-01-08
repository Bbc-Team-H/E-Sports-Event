function game_click() {
    console.error("Coming soon!");
}

function redirect(address) {
    window.location.href = address;
}

function coming_soon() {
    console.error("Coming soon!");
}

function leader_click(team_leader_id) {
    console.error("Coming soon! Leader: " + team_leader_id);
}

// Background Music Controller

var yourAudio = document.getElementById('background-audio'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    var pause = ctrl.innerHTML === '⏸️';
    ctrl.innerHTML = pause ? '🎧' : '⏸️';

    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    return false;
};



// Desktop Navigation

function changeHome() {
    homepage = document.querySelector("#desktop-home-container");
    gamepage = document.querySelector("#desktop-game-container");
    leaderboardpage = document.querySelector("#desktop-leaderboard-container");
    // teamspage = document.querySelector("#desktop-teams-container");

    homepage.classList.remove("hidden");
    gamepage.classList.add("hidden");
    leaderboardpage.classList.add("hidden");
    // teamspage.classList.add("hidden");
}

function changeNextGame() {
    homepage = document.querySelector("#desktop-home-container");
    gamepage = document.querySelector("#desktop-game-container");
    leaderboardpage = document.querySelector("#desktop-leaderboard-container");
    // teamspage = document.querySelector("#desktop-teams-container");

    homepage.classList.add("hidden");
    gamepage.classList.remove("hidden");
    leaderboardpage.classList.add("hidden");
    // teamspage.classList.add("hidden");
}

function changeLeaderboard() {
    homepage = document.querySelector("#desktop-home-container");
    gamepage = document.querySelector("#desktop-game-container");
    leaderboardpage = document.querySelector("#desktop-leaderboard-container");
    // teamspage = document.querySelector("#desktop-teams-container");

    homepage.classList.add("hidden");
    gamepage.classList.add("hidden");
    leaderboardpage.classList.remove("hidden");
    // teamspage.classList.add("hidden");
}

// function changeTeam() {
//     homepage = document.querySelector("#desktop-home-container");
//     gamepage = document.querySelector("#desktop-game-container");
//     leaderboardpage = document.querySelector("#desktop-leaderboard-container");
//     teamspage = document.querySelector("#desktop-teams-container");

//     homepage.classList.add("hidden");
//     gamepage.classList.add("hidden");
//     leaderboardpage.classList.add("hidden");
//     teamspage.classList.remove("hidden");
// }

function introAnimationHome() {
    introText = document.getElementById("desktop-home-title");

    introText.style.marginTop = "42%";
}