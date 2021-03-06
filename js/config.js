/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
        "image19.jpg",
        "image20.jpg",
        "image21.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "c95jynaKVNw", name: "North Shore Installation Music"},
	{youtube: "23cQFCUFXSI", name: "North Shore Installation Music"},
        {youtube: "WlC7wA1owo8", name: "North Shore Installation Music"},
        {youtube: "TYVjDcaiD20", name: "North Shore Installation Music"},
        {youtube: "IeqtAB1WgEw", name: "North Shore Installation Music"},
        {youtube: "kRiMj_pLzOQ", name: "North Shore Installation Music"},
        {youtube: "fnu4GNwSOpA", name: "North Shore Installation Music"},
        {youtube: "EP625xQIGzs", name: "North Shore Installation Music"},


];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"You are allowed to keep someone kidnapped for a maximum of 10 minutes!",
	"RDM John kills Billy because why not (this does not include death matches that involve job rules ex: Pissed Baby killing Pedophiles!",
	"Do not break NLR (New Life Rule) - NLR is acting in roleplay upon something which occurred prior your characters last death. Don't return to where you died before 10 minutes has passed!",
        "Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "Keypads must be working, have a hold length of 4 seconds, and be placed next to the door they open!",
        "Dont Harrass people (Follow people, annoy people)!",
        "Stolen items are your property, Once you've stolen something, it's yours, there are no limits to how you can use or abuse stolen things!", 
        "There must be at least one entrance  and exit to the base!",
        "Please Do not mug people 5 million at times a minute (wait like 3 minutes for the same person!",
        "Sexism / racism will not be tolerated and if caught or reported, you will be liable for a 12hour - 1day ban with no appeal!",
        "Do not prop block. (Purposely block players or Block rooms without a keypad!",
        "Don't counter raid - You may only raid a building if no one else is. This rule does not apply to police forces!",
        "Bunny Hopping. It is unrealistic!",
        "Do not use chain adverts, at most you can have ONE action on ONE bind. (Ex: raid/raid over, PD raid/raid, These are not allowed!",
        "CitizenHack is not Allowed if caught. it's a permanent ban!",
        "Goverment officials (Mayor, Police, SWAT) are not allowed to have money printers!",
        "Breaking into someone's base can get you killed or arrested. Walking in, however, will get you killed or arrested after being asked to leave more than twice!",
        "Do not complain about staffing decisions in game or in global chat. Appeals or reports can be made on the forums!",
        "No random lockdowns, (you must give a reason) random lockdowns will result in a permanent job ban!",
        "We value realism. FearRP doesn't exist because we believe you should only be fearful of things worth being fearful of!",
        "Mugging limits - You can only mug for the maximum amount a person has, to check this use the command /balance!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
