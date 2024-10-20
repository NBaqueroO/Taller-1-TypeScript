import { Serie } from './mySeries.js';

export const series = [
    new Serie(1, "Breaking Bad", "AMC", 5,
        "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer.",
        "https://www.amc.com/shows/breaking-bad", "./Images/breakingbad.jpeg"
    ),
    new Serie(2, "Orange Is the New Black", "Netflix", 6,
        "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary.",
        "https://www.netflix.com/co/title/70242311", "./Images/orangeisthenewblack.jpeg"
    ),
    new Serie(3, "Game of Thrones", "HBO", 7,
        "American fantasy drama based on the 'A Song of Ice and Fire' novels by George R. R. Martin.",
        "https://www.hbo.com/game-of-thrones", "./Images/got.jpeg"
    ),
    new Serie(4, "The Big Bang Theory", "CBS", 12,
        "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "./Images/tbbt.jpeg"
    ),
    new Serie(5, "Sherlock", "BBC", 4,
        "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London.",
        "https://www.bbc.co.uk/programmes/b018ttws", "./Images/sherlock.jpeg"
    ),
    new Serie(6, "A Very English Scandal", "BBC", 2,
        "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "./Images/english.jpeg"
    ),
];

const tvSeriesTable = document.getElementById('tv-series-table') as HTMLTableSectionElement;
let totalSeasons = 0;

const seriesImage = document.getElementById('series-image') as HTMLImageElement;
const seriesTitle = document.getElementById('series-title') as HTMLHeadingElement;
const seriesDescription = document.getElementById('series-description') as HTMLParagraphElement;
const seriesLink = document.getElementById('series-link') as HTMLAnchorElement;

// Establecer valores por defecto
seriesImage.src = "Images/ICON.jpg";
seriesTitle.textContent = "Select a series";
seriesDescription.textContent = "Please select a series to see details."; 
seriesLink.href = "#"; 

series.forEach((serie) => {
    if (!serie) return; // Validar serie

    totalSeasons += serie.seasons;

    const row = document.createElement('tr');
    row.classList.add('table-active');

    row.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td><a href="#">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;

    row.addEventListener('click', () => {
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

const averageSeasons = totalSeasons / series.length;
document.getElementById('average-seasons')!.textContent = `Seasons average: ${averageSeasons.toFixed(0)}`;
