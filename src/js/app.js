const featuresDesktop = document.querySelector ('.header__features');
const companyDesktop = document.querySelector ('.header__company');
const featuresMobile = document.querySelector ('.nav-mobile__features');
const companyMobile = document.querySelector ('.nav-mobile__company');

const featuresNavItem =document.querySelectorAll ('.nav__item-features');
const companyNavItem = document.querySelectorAll('.nav__item-company');

const mobileMenu = document.querySelector ('.menu-mobile');

let isFeaturesOpen = false;
let isCompanyOpen = false;

featuresNavItem.forEach (el => el.addEventListener ('click', (e) => {e.stopPropagation(); openFeatures();}));
companyNavItem.forEach (el => el.addEventListener ('click', (e) => {e.stopPropagation(); openCompany();}));
document.querySelector ('.header__btn-menu').addEventListener ('click', openMobileMenu);
document.querySelector ('.menu-mobile__btn-close').addEventListener ('click', closeMobileMenu);

document.body.addEventListener ('click', closeAll);
window.addEventListener ('resize', () => { updateFeaturesPosition(); updateCompanyPosition();});


function closeAll ()
{
    closeFeatures ();
    closeCompany ();
}

function openFeatures ()
{
    if (isFeaturesOpen)
    {
        closeAll ();
        return;
    }
    closeCompany ();
    featuresNavItem.forEach (el => el.classList.add ('nav__item-features--open'));
    featuresDesktop.classList.add ('header__features--open');
    featuresMobile.classList.add ('nav-mobile__features--open');

    isFeaturesOpen = true;

    updateFeaturesPosition ();
}

function closeFeatures ()
{
    featuresNavItem.forEach (el => el.classList.remove ('nav__item-features--open'));
    featuresDesktop.classList.remove ('header__features--open');
    featuresMobile.classList.remove ('nav-mobile__features--open');

    isFeaturesOpen = false;
}

function updateFeaturesPosition ()
{
    if(window.innerWidth >= 768)
        featuresDesktop.style.left = featuresNavItem[0].getBoundingClientRect ().left + 'px';
}




function openCompany ()
{
    if (isCompanyOpen)
    {
        closeAll ();
        return;
    }
    closeFeatures ();
    companyNavItem.forEach (el => el.classList.add ('nav__item-company--open'));
    companyDesktop.classList.add ('header__company--open');
    companyMobile.classList.add ('nav-mobile__company--open');

    isCompanyOpen = true;

    updateCompanyPosition ();
}

function closeCompany ()
{
    companyNavItem.forEach (el => el.classList.remove ('nav__item-company--open'));
    companyDesktop.classList.remove ('header__company--open');
    companyMobile.classList.remove ('nav-mobile__company--open');

    isCompanyOpen = false;
}


function updateCompanyPosition ()
{
    if(window.innerWidth >= 768)
        companyDesktop.style.left = companyNavItem[0].getBoundingClientRect ().left + 'px';
}


function openMobileMenu ()
{
    mobileMenu.parentElement.classList.add ('overlay--open');
}

function closeMobileMenu ()
{
    console.log ('yes');
    mobileMenu.parentElement.classList.remove ('overlay--open');
}