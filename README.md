# react-individuell

Detta är en portfoliosida skapad av Jesper Holmlund för Jesper Holmlund.
Portfoliot är uppbyggt med react, react-router-dom, react-icons, axios, strapi, bootstrap och framer-motion.

I korthet använder react axios för att hämta data från strapi via API. React-icons, bootstrap och framer-motion hör till visuella aspekter.
React-router-dom skapar routrar.

För att starta en fugnerade instans av detta portfolium behöver man i mappen strapi skrivs 'npm start develop' och i mappen portfolio skriva 'npm start'
Om båda dessa stegs följs bör detta portfolium återfinnas på localhost:3000 och strapi vara startad på localhost:1337.

Utan strapi igång kommer projeklistsidan att inte innehålla några projekt. Dessa är skapade med det CMS som strapi erbjuder och tagna från den API projekten finns under.

Vid start av båda och problem att visa projeklistan kan post request köras genom postman till localhost:1337/api/projecs för trubbelskjutning.
