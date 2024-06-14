const featuresDesktop = document.querySelector ('.header__features');
const companyDesktop = document.querySelector ('.header__company');
const featuresMobile = document.querySelector ('.nav-mobile__features');
const companyMobile = document.querySelector ('.nav-mobile__company');

const featuresNavItem =document.querySelector ('.nav__item-features');
const companyNavItem = document.querySelector ('.nav__item-company');
const featuresNavItemMobile = document.querySelector ('.nav-mobile__item-features');
const companyNavItemMobile = document.querySelector ('.nav-mobile__item-company');

const mobileMenu = document.querySelector ('.menu-mobile');

featuresNavItem.addEventListener ('click', (e) => {e.stopPropagation(); openFeatures();});
companyNavItem.addEventListener ('click', (e) => {e.stopPropagation(); openCompany();});
featuresNavItemMobile.addEventListener ('click', (e) => {e.stopPropagation(); openFeatures();});
companyNavItemMobile.addEventListener ('click', (e) => {e.stopPropagation(); openCompany();});
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
    closeCompany ();
    featuresNavItem.classList.add ('nav__item-features--open');
    featuresDesktop.classList.add ('header__features--open');
    featuresMobile.classList.add ('nav-mobile__features--open');
    featuresNavItemMobile.classList.add ('nav-mobile__item-features--open');

    updateFeaturesPosition ();
}

function closeFeatures ()
{
    featuresNavItem.classList.remove ('nav__item-features--open');
    featuresDesktop.classList.remove ('header__features--open');
    featuresMobile.classList.remove ('nav-mobile__features--open');
    featuresNavItemMobile.classList.remove ('nav-mobile__item-features--open');
}

function updateFeaturesPosition ()
{
    if(window.innerWidth >= 768)
        featuresDesktop.style.left = featuresNavItem.getBoundingClientRect ().left + 'px';
}




function openCompany ()
{
    closeFeatures ();
    companyNavItem.classList.add ('nav__item-company--open');
    companyDesktop.classList.add ('header__company--open');
    companyMobile.classList.add ('nav-mobile__company--open');
    companyNavItemMobile.classList.add ('nav-mobile__item-company--open');

    updateCompanyPosition ();
}

function closeCompany ()
{
    companyNavItem.classList.remove ('nav__item-company--open');
    companyDesktop.classList.remove ('header__company--open');
    companyMobile.classList.remove ('nav-mobile__company--open');
    companyNavItemMobile.classList.remove ('nav-mobile__item-company--open');
}


function updateCompanyPosition ()
{
    if(window.innerWidth >= 768)
        companyDesktop.style.left = companyNavItem.getBoundingClientRect ().left + 'px';
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