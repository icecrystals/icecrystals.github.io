// File slidePage.js made with jAlbum 34.3.1 with LightGallery 2.0.3, album creation date 2026/4/29 01:39 
const isView= false;
const osMap = false; 
const maxNrofButtons = 3; 
const usePlaceholder= false;
const removeIndexPageCode= false;
var thumbnailHasCaption= false;
var emailBodyTextI = "Click on the link above to see the photo album I like to share with you!";
var emailSubjectI = "I like to share a photo album";
var emailBodyTextSlide = "Click on the link above to see the photo I like to share with you!";
var emailSubjectSlide = "I like to share a photo";
var emailAddresseeI= '';
var emailAddresseeSlide= '';
var descriptionInSidePanel= false;
const strCenter= "Center";
const strInClipboard = "The clipboard contains links to the image and web-page and it contains the image title";
const showCurLoc=  false;
var moreInfoURL = "";
var showPhotoLink= false;
var showFsButton=  false;
var showTitleInImage= true;
var useFallback=false;
const preventCaptionOverlap= true;
var hideTitleMinWidth = 500;
var hideTitleInTheme = false;

var apiKeyExists = false;

var showLocationNewTab= false;

var titleVPosPercent=4;
var topButtonLeft = 6;
var topButtonTop = 20;
var topButtonWidth = 100;
var topButtonPx = false;
var topButtonIcon = false;
var useThemeAsBackground = false;
var alignmentTitleInTheme = 0;
var fixedThemeImage = false;

var menuBar = false;
var menuBootstrap = false;
var relThumbHeight = 0;
const whSlideThumbPerc = 150;
const relSlideThumbHeight = 15;

var enableVericalSwipesOnIndexPage = true;
var hideArrowsOnMobile = true;
var masonryGallery = false;
var masonryGap =30;
var masonryColsAsked =0;

var openWithInfoWindow = false;
var hamburgerBtn = true;
const use_jg = true;
const autoPlay = false;  // "Start the music automatically"
const autoPlaySlideShow = true;  // "Start slide show automatically"
var ExifButton = false;

var hideCloseButton = false;
var rowHeight_jg = 80;
var margins_jg =  20;
var border_jg =  20;
var lastRow_jg = 'center';
var captionTransparency_jg = 0.40;
var maxRowHeight_jg= '133%';
var level = 1;

var slidePageFullScreen= false;
var enableSlideShow = true;
var albumImage= 'folderimage.jpg';
var useSecureLinks= true;
var standardFontFamily= 'Verdana, Geneva, Tahoma, sans-serif';
var standardFontSize='18px';
var orgFontsize= 18;
var h1Fontsize= 24;
var orgbuttonFontsize= 20;
var orgthumbsFontSize= 14;
var resourcePath = "../res";
var mapType = 'hybrid';
var initialZoom = 16;
var buttonsVisible=true;
var toggleButtonsAllowed=true;
var topButtonsVisible = true; 
var homePage = '';
var strMoreInfo= '...';
var strLessInfo= '<<';
var links_under_thumbs = false;
var enableTaps = true;
var stopAfterLastSlide = true;	
var swipesArea = 1;
var disableViewerSettings =  false;

var useGeocodingAPI = false;
//var Chrome = (navigator.appVersion.indexOf("Chrome") != -1)



var albumImageIndex = -1;

var srcImg = [
'slides/2024-08-24-25-%E5%B8%83%E8%BE%BE%E4%BD%A9%E6%96%AF6.jpg', 
'slides/2024-08-24-25-%E5%B8%83%E8%BE%BE%E4%BD%A9%E6%96%AF4.jpg', 
'slides/2024-08-24-25-%E5%B8%83%E8%BE%BE%E4%BD%A9%E6%96%AF5.jpg', 
'slides/2024-08-24-25-%E5%B8%83%E8%BE%BE%E4%BD%A9%E6%96%AF1.jpg', 
'slides/2024-08-24-25-%E5%B8%83%E8%BE%BE%E4%BD%A9%E6%96%AF2.jpg', 
'slides/2024-08-24-25-%E5%B8%83%E8%BE%BE%E4%BD%A9%E6%96%AF3.jpg', 
];
const nrofImages = '6';
const skipIndexPage = false;
var maxThumbHeight = 88;
var maxThumbWidth = 114; 

const downloadLink= false;



 // -- Start properties block --


const counterFieldUsed= false;

var fileCategory = [
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
];
var wImg = [
700,
664,
1477,
1481,
1425,
1477,
];
var hImg = [
1090,
1090,
1090,
1090,
1090,
1090,
];
// -- End properties block --




var GalleryIsOpen = false;

var slideType = '';  // 'image' 'iframe' 'video' 
var slideshowWasOn= false;
var startedFromIndexPage = false;
var mp4Video= false;
var widthSidePanel = 0;
var widhImageStage =  0;
var widhImageStagepx = '';
var widthSidePanelpx = '';
var specSidePanelWidth = 20;
var widthSidePanelInPercent = true;
const useSidePanel = false;
var emptyCaption = false;


function initExtra() {
  // $('body').bind('contextmenu', function(e) { 
   // return false;
  //});
    const bodyElement = document.querySelector('body');
    bodyElement.addEventListener('contextmenu', function(e) {
     e.preventDefault();
   });



}
