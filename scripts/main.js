import { Serie } from './mySeries.js';
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "./Images/breakingbad.jpeg"), ,
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "./Images/orangeisthenewblack.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "./Images/got.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "./Images/tbbt.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "./Images/sherlock.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "./Images/english.jpeg"),
];
var tvSeriesTable = document.getElementById('tv-series-table');
var totalSeasons = 0;
var seriesImage = document.getElementById('series-image');
var seriesTitle = document.getElementById('series-title');
var seriesDescription = document.getElementById('series-description');
var seriesLink = document.getElementById('series-link');
seriesImage.src = "Images/ICON.jpg";
seriesTitle.textContent = "Select a series";
seriesDescription.textContent = "Please select a series to see details."; // Mensaje por defecto
seriesLink.href = "#";
series.forEach(function (serie, index) {
    if (!serie)
        return;
    totalSeasons += serie.seasons;
    var row = document.createElement('tr');
    row.classList.add('table-active');
    row.innerHTML = "\n      <th scope=\"row\">".concat(serie.id, "</th>\n      <td><a href=\"#\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n  ");
    row.addEventListener('click', function () {
        console.log("Serie seleccionada:", serie);
        seriesImage.src = serie.imageUrl;
        seriesTitle.textContent = serie.name;
        seriesDescription.textContent = serie.description;
        seriesLink.href = serie.url;
        console.log("Imagen URL:", seriesImage.src);
        console.log("Descripción:", seriesDescription.textContent);
    });
    tvSeriesTable.appendChild(row);
});
var averageSeasons = totalSeasons / series.length;
document.getElementById('average-seasons').textContent = "Seasons average: ".concat(averageSeasons.toFixed(0));
