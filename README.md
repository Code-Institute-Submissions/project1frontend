# Project1 Frontend

<a href="https://github.com/DamianMcNulty/project1frontend/stargazers">
    <img src="https://img.shields.io/github/stars/DamianMcNulty/project1frontend.svg?style=social" alt="GitHub stars">
</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/2ec61397-e1bd-4d8a-8502-e33acc22e2df/deploy-status)](https://app.netlify.com/sites/project1frontend/deploys)

## Goal

> Build a static website for a band.

## Table of Contents

-   [Description](#description)

-   [UX](#ux)

-   [Technologies Used](#technologies-used)

-   [Local Development](#local-development)

-   [Local Testing](#local-testing)

-   [Cross Browser Testing](#cross-browser-testing)

-   [CI](#ci)

-   [Production](#production)

-   [Research](#research)

-   [Credits](#credits)

-   [LICENSE](#license)

## Description

[(Back to top)](#table-of-contents)

-   Consists of a static frontend web design for a band. Contains news, events, gallery, video, music, and booking sections. 

## UX

### User stories

1.  As a user, I would like to see and hear clips from the band's archive
2.  As a user, I would like to know when new material is available
3.  As a user, I would like to know about upcoming events
4.  As a user, I would like to view photos of the band
5.  As a user, I would like to find links to social media accounts, Twitter, Facebook and YouTube 

### Wireframes

see wireframes folder

### [Wireframe prototype](https://xd.adobe.com/view/73e6984e-d785-49a5-7d03-933b793651e2-05d7/?fullscreen)

## Architecture diagram

<img src="https://github.com/DamianMcNulty/project1frontend/blob/master/wireframes/ArchitectureDiagram/ArchitectureDiagram.png" width=100%  alt="Architecture">

## Technologies Used

[(Back to top)](#table-of-contents)

1.  [HTML5](https://en.wikipedia.org/wiki/HTML5) 

2.  [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)  

3.  [Git](https://git-scm.com/)  

4.  [Github](https://github.com/)

5.  [Squoosh](https://squoosh.app/)

6.  [Balsamiq](https://balsamiq.com)

7.  [AdobeXD](https://www.adobe.com/ie/products/xd.html)

8.  [UnCSS](https://uncss-online.com/)

9.  [Site24x7 Link Checker](https://www.site24x7.com/link-checker.html)

10. [HTML5 Validator](https://validator.w3.org/)

11. [CSS3 Validator](https://jigsaw.w3.org/css-validator/)

12. [Line Height Calculator](http://www.perfecttypography.com/)

13. [Baseline Rhythm Calculator](http://topfunky.com/baseline-rhythm-calculator/)

14. [Fontello](http://fontello.com/)

15. [Node v10.15.1](https://nodejs.org/en/)

16. [NPM 6.4.1](https://www.npmjs.com/)

17. [Responsive image generator](https://www.responsivebreakpoints.com/)

18. [Cross Browser Testing](https://crossbrowsertesting.com/)

## Local development

[(Back to top)](#table-of-contents)

    npm run buildandwatch
    open http://127.0.0.1:5500/build/index.html with live-server in vscode

## Local testing

[(Back to top)](#table-of-contents)

    (in separate terminals)
    npm run buildandwatch
    npm run test_open

## Cross Browser testing

[(Back to top)](#table-of-contents)

see screenshots in cbt folder

## CI

[(Back to top)](#table-of-contents)

    git push

## Production

[(Back to top)](#table-of-contents)

    git tag -a v1.0.0 -m "version 1.0.0"

    (in git bash terminal)
    sh ./publish.sh 1.0.0

The production version is hosted at https://damianmcnulty.github.io/project1frontend/ . It does not contain a backend element. 

Note:
A staging version is hosted at https://project1frontend.netlify.com/ . It contains a working backend for form submission and a reCAPTCHA.


## Research

[(Back to top)](#table-of-contents)

-   [Full screen image](https://css-tricks.com/perfect-full-page-background-image/)
-   [make Fontawesome icons equal in size](https://stackoverflow.com/questions/16592849/how-do-i-make-sure-every-glyph-has-the-same-width)
-   [form labels above inputs](https://stackoverflow.com/questions/6046110/styling-form-with-label-above-inputs)
-   [Responsive forms](https://www.w3schools.com/howto/howto_css_responsive_form.asp)
-   [full screen modal](https://medium.com/@andrejsabrickis/a-fullscreen-modal-with-fixed-header-footer-and-a-scrollable-content-1656845c8171)

## Credits

[(Back to top)](#table-of-contents)

-   [ToolBox](https://frontend.github.io/toolbox/)
-   [evie](https://github.com/anges244/evie)

## License

[(Back to top)](#table-of-contents)

See [LICENSE](LICENSE)
