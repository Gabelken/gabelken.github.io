const cardSets = {
    "overview" : [
        {
            idx: 0,
            title: "Arduino",
            src: "arduino.jpg",
            alt: "The Arduino Logo",
            to: "arduino"
        },
    ],
    "arduino" : [
        {
            idx: 0,
            title: "Hello Overworld",
            src: "HelloOverworld/overview-card.jpg",
            alt: "A cardboard game system with and LED grid",
            to: "arduino/hello-overworld"
        },
        {
            idx: 1,
            title: "Distraction-Free Reading Glasses",
            src: "ReadingGlassesPlus/model-card.jpg",
            alt: "A pair of blue reading glasses embedded with LEDs and a photocell",
            to: "arduino/reading-glasses-plus"
        },
    ]
};

export default {
    getCards(key) {
        return cardSets[key];
    }
}