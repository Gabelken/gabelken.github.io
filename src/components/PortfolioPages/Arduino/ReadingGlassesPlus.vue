<template>
    <div class="entry">
        <h1>Distraction-Free Reading Glasses</h1>
        <iframe class="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WNfFNtUU-BQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <p>
            Some of my earliest memories are of trips to the library, followed by cozying up at home together to read.
            <br/><br/>
            Distraction-free reading glasses are a project inspired by my parents, who have always loved reading but never seem to catch a break.
            As small business owners, no day seems to go by without at least a few phone calls.
            So I wanted to find a way to give a moment's respite as they read.
            <br/><br/>
            My parents use reading glasses, so what if we could set their phones to 'Do No Disturb' whenever they put them on?
        </p>
        <div class="space-around inline" >
            <img class="inline" src="../../../assets/ReadingGlassesPlus/final-front.jpg"/>
            <img class="inline" src="../../../assets/ReadingGlassesPlus/App.png"/>
            <img class="inline" src="../../../assets/ReadingGlassesPlus/final-back.jpg"/>
        </div>
        <p>
            But when I checked in with my parents for some ad-hoc requirements gathering, I discovered there was another pitfall to their reading - eye strain.
            Lately, neither had been reading much, as it was getting hard on their eyes.
            <br/><br/>
            So the glasses needed to do 2 things - create a quiet environment and brighten reading material.
        </p>

        <PhotoCardViewer :carouselImages="carouselImages"></PhotoCardViewer>

        <div class="inline" style="align-content: flex-start">
            <img class="inline" src="../../../assets/ReadingGlassesPlus/model-1.jpg"/>
            <div>
                <h2>How do they Work?</h2>
                <p style="margin: 16px">
                    Putting the glasses on signals the Arduino to start working via a pressure sensor in the nose pads.
                    From there, the glasses will react to the environment.
                    <br/><br/>
                    If the lighting is dim, LEDs at the corners of the glasses shine on whatever the user is looking at.
                    If the lighting gets even dimmer, the LEDs will brighten to compensate based on readings from a photocell at the bridge of the nose.
                    <br/><br/>
                    The glasses may also be paired to an Android app that can silence the user's phone.
                    Once paired and enabled, 'Do Not Disturb' mode is turned on when the glasses are worn and turned off when the glasses are removed.
                    Pairing may occur at any point, as the app will send a signal to the Arduino each time it connects, asking for the current state.
                    After that, the Arduino will resend the state after any changes.
                </p>
            </div>
        </div>

        <h2>The Setup</h2>
        <img src="../../../assets/ReadingGlassesPlus/schem.png" style="width:75%; align-self: center"/>
        <p><i>NOTE: 100Ohm resistors in the diagram are actually 1KOhm</i></p>
        <div class="inline">
            <p style="margin-right: 4px"><B>Check out the repository </B></p>
            <a href="https://github.com/Gabelken/Distraction-Free-Reading-Glasses">here</a>
        </div>


        <h2>References</h2>
        <p><b>Arduino</b></p>
        <a href="https://www.arduino.cc/reference/en/">Arduino Documentation</a>
        <a href="https://www.elegoo.com/download/">"Elegoo Mega 2560 The Most Complete Stater Kit" User Manual and Tutorials</a>
        <a href="http://paulmurraycbr.github.io/ArduinoTheOOWay.html">Arduino the Object Oriented Way</a>
        <a href="https://forum.arduino.cc/index.php?topic=65095.0">Callback Functions</a>

        <p><b><br/>Android</b></p>
        <a href="https://www.youtube.com/watch?v=Oz4CBHrxMMs">Kotlin 101: How to Communicate to a Bluetooth Device Part 1</a>
        <a href="https://www.youtube.com/watch?v=eg-t_rhDSoM">Kotlin 101: How to Communicate to a Bluetooth Device Part 2</a>
        <a href="https://github.com/HarryGoodwin/Arduino-Android-Sensors">Arduino-Android Sensors Bluetooth Example</a>
        <a href="https://developer.android.com/reference/kotlin/android/bluetooth/BluetoothAdapter">Bluetooth Adapter Documentation</a>
        <a href="https://android--code.blogspot.com/2018/04/android-kotlin-turn-on-of-do-not.html">Programmatic Do Not Disturb Tutorial</a>

        <h3>A Special Thanks to my Mum for Being my Model and Actress &hearts;</h3>
    </div>
</template>

<script>
    import PhotoCardViewer from "../../PhotoCardViewer";
    export default {
        name: "HelloOverworld",
        components: {
            PhotoCardViewer,
        },
        data() {
            return {
                carouselImages: [
                    {
                        id: 0,
                        src: "ReadingGlassesPlus/idea-sketch.jpg",
                        isPortrait: false
                    },
                    {
                        id: 1,
                        src: "ReadingGlassesPlus/arm-mechanism.jpg",
                        isPortrait: false
                    },
                    {
                        id: 2,
                        src: "ReadingGlassesPlus/test-wiring.jpg",
                        isPortrait: false
                    },
                    {
                        id: 3,
                        src: "ReadingGlassesPlus/test-notches.jpg",
                        isPortrait: false
                    },
                    {
                        id: 4,
                        src: "ReadingGlassesPlus/fitting-components-1.jpg",
                        isPortrait: false
                    },
                    {
                        id: 5,
                        src: "ReadingGlassesPlus/fitting-components-2.jpg",
                        isPortrait: false
                    },
                    {
                        id: 6,
                        src: "ReadingGlassesPlus/pressure-sensor.jpg",
                        isPortrait: false
                    },
                    {
                        id: 7,
                        src: "ReadingGlassesPlus/pressure-sensor-nose-piece.jpg",
                        isPortrait: false
                    },
                    {
                        id: 8,
                        src: "ReadingGlassesPlus/testing-the-pressure-nose-piece.jpg",
                        isPortrait: false
                    },
                    {
                        id: 9,
                        src: "ReadingGlassesPlus/directing-light-1.jpg",
                        isPortrait: false
                    },
                    {
                        id: 10,
                        src: "ReadingGlassesPlus/directing-light-2.jpg",
                        isPortrait: false
                    },
                    {
                        id: 11,
                        src: "ReadingGlassesPlus/wire-planning.jpg",
                        isPortrait: false
                    },
                    {
                        id: 12,
                        src: "ReadingGlassesPlus/soldering-ground.jpg",
                        isPortrait: false
                    },
                    {
                        id: 13,
                        src: "ReadingGlassesPlus/soldering-data-lines.jpg",
                        isPortrait: false
                    },
                    {
                        id: 14,
                        src: "ReadingGlassesPlus/final-back.jpg",
                        isPortrait: false
                    },
                    {
                        id: 14,
                        src: "ReadingGlassesPlus/model-card.jpg",
                        isPortrait: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    div.entry {
        margin: 12px 5% 12px 5%;
        padding: 20px;
        background-color: whitesmoke;
        color: #333943;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-around;
    }
    div.inline {
        color: #333943;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        justify-content: center;
        margin: 3em;
    }
    div.space-around {
        justify-content: space-around;
    }
    img.inline {
        max-width: 30%;
        max-height: 25em;
        object-fit: contain;
    }
    img.inline-rotated {
        max-height: 30%;
        max-width: 25em;
        object-fit: contain;
        transform: rotate(90deg);
    }
    h1 {
        padding: 12px;
    }
    h2 {
        padding: 12px;
    }
    h3 {
        margin: 2em;
        color: darkmagenta;
    }
    .video {
        align-self: center;
        margin: 2em 0;
    }

</style>