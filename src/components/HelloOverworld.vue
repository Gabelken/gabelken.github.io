<template>
    <div class="entry">
        <h1>Hello Overworld</h1>
        <p>
            Welcome to <i>Hello Overworld:The Adventures of Blink!</i>
        </p>
        <div class="inline" style="margin: 60px">
            <img src="../assets/HelloOverworld/overview-0.jpg" style="width: 30%; transform: rotate(90deg)"/>
            <img src="../assets/HelloOverworld/lit-house-top.jpg" style="width: 30%; transform: rotate(90deg"/>
            <img src="../assets/HelloOverworld/Swimming.jpg" style="width: 30%; transform: rotate(90deg)"/>
        </div>
        <p style="margin: 15px">
            Travel across the 5x5 overworld map as Blink, the hero of Light, on his journey across the great plain.
            <br/>
            Hello Overworld is a 2D matrix 'game' where you as the player can move a blinking LED across the an overworld-style map. A player can interact with the world by moving into 3d areas of the map.
            <br/>
            <br/>
            The console consists of 2 main parts - a 5x5 LED matrix and a'D' pad made up of a cut-out overlaying 4 directional buttons.
        </p>
        <img src="../assets/HelloOverworld/schematic.jpg" style="width:75%; align-self: center"/>
        <div class="inline">
            <p><B>Try it yourself:   </B></p>
            <a href="../assets/HelloOverworld/HelloOverworld.zip" download>Download the Code</a>
        </div>
        <div class="inline" style="align-content: flex-start">
            <img src="../assets/HelloOverworld/concept-sketch.jpg" style="height: 400px"/>
            <p style="margin: 16px">
                The original idea behind this app was to create a maze, but as setup and tests of the led matrix ended up taking quite some time,
                the project was scaled down to minimize coding overhead.
                <br/><br/>
                In the end, I think the overworld concept ended up being fun and probably less painful for a user than a maze with invisible walls.
                It was also a lot of fun to build the components such as the tiny house to represent a village.
                <br/><br/>
                Given more time, I'd like to add blinking 'cutscenes' for the user on entering specific parts of the map to make it feel more interactive
                and possibly a 'Dungeon' in the top corner with a more complex cutscene programmed on an rgb LED.
            </p>

            <img src="../assets/HelloOverworld/button-move-tests.jpg" style="width: 400px; transform: rotate(90deg); margin-top: 40px; margin-bottom: 40px"/>
        </div>

        <div class="inline">
            <img src="../assets/HelloOverworld/2d-button-tests.jpg" style="width:  300px; transform: rotate(90deg); margin-top: 40px; margin-bottom: 40px"/>
            <img src="../assets/HelloOverworld/Testing-grid.jpg" style="width:  300px; transform: rotate(90deg); margin-top: 40px; margin-bottom: 40px"/>
            <img src="../assets/HelloOverworld/laying-wire.jpg" style="width:  300px; transform: rotate(90deg); margin-top: 40px; margin-bottom: 40px"/>
            <img src="../assets/HelloOverworld/cutting-out-a-house.jpg" style="width:  300px; transform: rotate(90deg); margin-top: 40px; margin-bottom: 40px"/>
        </div>



        <h2>See it in Action</h2>
        <video width="320px"  controls>
            <source src="../assets/HelloOverworld/demo.mp4" type="video/mp4">
            Your browser does not support the video tag. Please try opening in a modern browser.
        </video>

        <h2>References</h2>
        <ul>
            <li>
                <a href="https://www.arduino.cc/reference/en/">Arduino Documentation</a>
            </li>
            <li>
                <a href="https://www.elegoo.com/download/">"Elegoo Mega 2560 The Most Complete Stater Kit" User Manual and Tutorials</a>
            </li>
            <li>
                <a href="https://www.circuitspecialists.com/blog/8x8-led-matrix-beating-heart-tutorial/">8x8 LED Matrix - Beating Heart Tutorial</a>
            </li>
            <li>
                <a href="https://www.circuitspecialists.com/blog/build-8x8-led-matrix/">How to Make an 8x8 LED Matrix</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HelloOverworld"
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
        justify-content: space-between;
    }
    div.inline {
        color: #333943;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        justify-content: center;
        margin: 16px;
    }
    h1 {
        padding: 12px;
    }
    h2 {
        padding: 12px;
    }
    video {
        align-self: center;
    }

</style>