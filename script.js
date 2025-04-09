const increaseScore = (team) => {
    const teamId = `score${team}`;
    const scoreElement=document.getElementById(teamId)
    let score = Number(scoreElement.innerHTML)
    scoreElement.innerHTML = ++score
};

const decreaseScore = (team) => {
    const teamId = `score${team}`
    const scoreElement = document.getElementById(teamId)
    let score = +scoreElement.innerHTML;

    if(score > 0) {
        score--;
        scoreElement.innerHTML = score
    } else {
        alert("Skor 0 dan fazla azaltilamaz")
    }
};

const setNamePrompt = (team) => {
    const name = prompt("Yeni takım ismi girin");
    if (name === null || name.trim() === "") {
        alert("İsim Girilmedi!");
    } else {
        const teamId = `teamName${team}`;
        const teamNameElement = document.getElementById(teamId);

        console.log("Aranan ID:", teamId); // Debug için ekleme
        console.log("Bulunan Element:", teamNameElement); // Debug için ekleme

        if (!teamNameElement) {
            alert(`Hata: ${teamId} ID'sine sahip öğe bulunamadı!`);
            return;
        }

        teamNameElement.innerHTML = name;
    }
};

document.getElementById("resetButtonA").addEventListener("click", () => {
    document.getElementById("scoreA").innerHTML = 0;
});
document.getElementById("resetButtonB").addEventListener("click", () => {
    document.getElementById("scoreB").innerHTML = 0;
});

const setScorePrompt = (team) => { 
    const score = prompt("Yeni gol sayısını giriniz: "); 
    const scoreNum = Number(score); 

    if ( 
        scoreNum < 0 || 
        score === null || 
        score.trim() === "" || 
        !Number.isInteger(scoreNum) 
    ) { 
        alert("Lütfen geçerli bir sayı giriniz."); 
    } else { 
        const teamId = `score${team}`; 
        const scoreElement = document.getElementById(teamId); 
        scoreElement.innerHTML = scoreNum; 
    } 
};



    




