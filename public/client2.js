var list = ["722 Rowlet", "723 Dartrix", "724 Decidueye", "725 Litten",
            "726 Torracat", "727 Incineroar", "728 Popplio", "729 Brionne",
            "730 Primarina", "731 Pikipek", "732 Trumbeak", "733 Toucannon",
            "734 Yungoos", "735 Gumshoos", "736 Grubbin", "737 Charjabug",
            "738 Vikavolt", "739 Crabrawler", "740 Crabominable", "741 Oricorio",
            "742 Cutiefly", "743 Ribombee", "744 Rockruff", "745 Lycanroc",
            "746 Wishiwashi", "747 Mareanie", "748 Toxapex", "749 Mudbray",
            "750 Mudsdale", "751 Dewpider", "752 Araquanid", "753 Fomantis",
            "754 Lurantis", "755 Morelull", "756 Shiinotic", "757 Salandit",
            "758 Salazzle", "759 Stufful", "760 Bewear", "761 Bounsweet",
            "762 Steenee", "763 Tsareena", "764 Comfey", "765 Oranguru",
            "766 Passimian", "767 Wimpod", "768 Golisopod", "769 Sandygast",
            "770 Palossand", "771 Pyukumuku", "772 Type: Null", "773 Silvally",
            "774 Minior", "775 Komala", "776 Turtonator", "777 Togedemaru",
            "778 Mimikyu", "779 Bruxish", "780 Drampa", "781 Dhelmise",
            "782 Jangmo-o", "783 Hakamo-o", "784 Kommo-o", "785 Tapu Koko",
            "786 Tapu Lele", "787 Tapu Bulu", "788 Tapu Fini", "789 Cosmog",
            "790 Cosmoem", "791 Solgaleo", "792 Lunala", "793 Nihilego (Ultra Beast)",
            "794 Buzzwole (Ultra Beast)", "795 Pheromosa (Ultra Beast)", "796 Xurkitree (Ultra Beast)", "797 Celesteela (Ultra Beast)",
            "798 Kartana (Ultra Beast)", "799 Guzzlord (Ultra Beast)", "800 Necrozma", "801 Magearna",
            "802 Marshadow", "803 Poipole (Ultra Beast)", "804 Naganadel (Ultra Beast)", "805 Stakataka (Ultra Beast)",
            "806 Blacephalon (Ultra Beast)", "807 Zeraora"];

function randomizer() {
  var x = Math.floor(Math.random() * 86 + 0);
  var currentIndex = list.length
  document.getElementById("test").innerHTML = list[x];
  
  if(x == 0) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2Frowlet.png?v=1574918794176">';}
  if(x == 1) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F723.png?v=1574978363997">';}
  if(x == 2) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F724.png?v=1574979538388">';}
  if(x == 3) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F725.png?v=1574979541518">';}
  if(x == 4) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F726.png?v=1574979543989">';}
  if(x == 5) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F727.png?v=1574979545891">';}
  if(x == 6) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F728.png?v=1574979548019">';}
  if(x == 7) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F729.png?v=1574979550373">';}
  if(x == 8) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F730.png?v=1574979552991">';}
  if(x == 9) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F731.png?v=1574979555511">';}
  if(x == 10) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F732.png?v=1574979569908">';}
  if(x == 11) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F733.png?v=1574979574778">';}
  if(x == 12) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F734.png?v=1574979580869">';}
  if(x == 13) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F735.png?v=1574979584883">';}
  if(x == 14) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F736.png?v=1574979587801">';}
  if(x == 15) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F737.png?v=1574979591306">';}
  if(x == 16) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F738.png?v=1574979594031">';}
  if(x == 17) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F739.png?v=1574981460967">';}
  if(x == 18) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F740.png?v=1574981465345">';}
  if(x == 19) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F741.png?v=1574981468896">';}
  if(x == 20) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F742.png?v=1574981473137">';}
  if(x == 21) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F743.png?v=1574981477963">';}
  if(x == 22) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F744.png?v=1574981481543">';}
  if(x == 23) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F745.png?v=1574981484665">';}
  if(x == 24) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F746.png?v=1574981487376">';}
  if(x == 25) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F747.png?v=1574981491354">';}
  if(x == 26) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F748.png?v=1574981494135">';}
  if(x == 27) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F749.png?v=1574981497192">';}
  if(x == 28) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F750.png?v=1574981500603">';}
  if(x == 29) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F751.png?v=1574981503661">';}
  if(x == 30) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F752.png?v=1574981505988">';}
  if(x == 31) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F753.png?v=1574982038150">';}
  if(x == 32) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F754.png?v=1574982042022">';}
  if(x == 33) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F755.png?v=1574982048818">';}
  if(x == 34) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F756.png?v=1574982052117">';}
  if(x == 35) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F757.png?v=1574982056928">';}
  if(x == 36) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F758.png?v=1574982060319">';}
  if(x == 37) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F759.png?v=1574982063550">';}
  if(x == 38) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F760.png?v=1574982066370">';}
  if(x == 39) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F761.png?v=1574982102259">';}
  if(x == 40) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/5feeb78c-fcad-48b2-a9d6-9caa53e5c1df%2F738.png?v=1574979594031">';}
  if(x == 41) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F763.png?v=1575004055677">';}
  if(x == 42) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F764.png?v=1575004059510">';}
  if(x == 43) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F765.png?v=1575004063750">';}
  if(x == 44) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F766.png?v=1575004067728">';}
  if(x == 45) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F767.png?v=1575004071099">';}
  if(x == 46) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F768.png?v=1575004074828">';}
  if(x == 47) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F769.png?v=1575004078957">';}
  if(x == 48) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F770.png?v=1575004082230">';}
  if(x == 49) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F771.png?v=1575004086217">';}
  if(x == 50) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F772.png?v=1575004090281">';}
  if(x == 51) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F773.png?v=1575004094315">';}
  if(x == 52) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F774.png?v=1575004099646">';}
  if(x == 53) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F775.png?v=1575004105025">';}
  if(x == 54) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F776.png?v=1575004118546">';}
  if(x == 55) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F777.png?v=1575004122062">';}
  if(x == 56) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F778.png?v=1575004126603">';}
  if(x == 57) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F779.png?v=1575004131855">';}
  if(x == 58) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F780.png?v=1575004145934">';}
  if(x == 59) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F781.png?v=1575004151181">';}
  if(x == 60) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F782.png?v=1575004154986">';}
  if(x == 61) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F783.png?v=1575004159298">';}
  if(x == 62) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F784.png?v=1575004163826 ">';}
  if(x == 63) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F785.png?v=1575004167663">';}
  if(x == 64) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F786.png?v=1575004174593">';}
  if(x == 65) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F787.png?v=1575004179679">';}
  if(x == 66) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F788.png?v=1575004189067">';}
  if(x == 67) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F789.png?v=1575004199506">';}
  if(x == 68) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F790.png?v=1575004204481">';}
  if(x == 69) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F791.png?v=1575004209635">';}
  if(x == 70) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F792.png?v=1575004214676">';}
  if(x == 71) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F793.png?v=1575004220051">';}
  if(x == 72) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F794.png?v=1575004225426">';}
  if(x == 73) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F795.png?v=1575004231294">';}
  if(x == 74) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F796.png?v=1575004237150">';}
  if(x == 75) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F797.png?v=1575004241234">';}
  if(x == 76) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F798.png?v=1575004247716">';}
  if(x == 77) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F799.png?v=1575004256662">';}
  if(x == 78) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F800.png?v=1575004274474">';}
  if(x == 79) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F801.png?v=1575004279341">';}
  if(x == 80) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F802.png?v=1575004283536">';}
  if(x == 81) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F803.png?v=1575004287693">';}
  if(x == 82) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F804.png?v=1575004292738">';}
  if(x == 83) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F805.png?v=1575004298038">';}
  if(x == 84) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F806.png?v=1575004303810">';}
  if(x == 85) {
    document.getElementById("img").innerHTML = '<img src="https://cdn.glitch.com/c6f27145-8db1-4e40-9e9c-048decee4e55%2F807.png?v=1575004309503">';}
}
