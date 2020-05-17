<div class="heading">
    <h1>Portfolio</h1>
    <h3>Lozitsky Kirill</h3>
    <h4>Junior Frontend Developer</h4>
</div>
<div class="panels">
    <a class="item" href="Apple-Fixit/index.html" style="background-image: url('apple-fixit.jpg')">
        <span>
            Apple Fixit
        </span>
    </a>
    <a class="item" href="Grandeur/index.html" style="background-image: url('grandeur.jpg')">
        <span>
            Grandeur
        </span>
    </a>
    <a class="item" href="Edifice/index.html" style="background-image: url('edifice.jpg')">
        <span>
            Edifice Homes
        </span>
    </a>
    <a class="item" href="Swell/index.html" style="background-image: url('swell.jpg')">
        <span>
            Swell
        </span>
    </a>
   
    <a class="item" href="Doterra/index.html" style="background-image: url('doterra.jpg')">
        <span>
            Doterra
        </span>
    </a>
    <a class="item" href="Triferment/index.html" style="background-image: url('triferment.jpg')">
        <span>
            Triferment
        </span>
    </a>
    <a class="item" href="FeedbackShots/index.html" style="background-image: url('feedback.jpg')">
        <span>
            FeedbackShots
        </span>
    </a>
    <a class="item" href="Giant/index.html" style="background-image: url('giant.jpg')">
        <span>
            Giant
        </span>
    </a>
    <a class="item" href="Split/index.html" style="background-image: url('split.jpg')">
        <span>
            Split
        </span>
    </a>
    <a class="item" href="AdBot/index.html" style="background-image: url('adbot.jpg')">
        <span>
            AdBot
        </span>
    </a>
    <a class="item" href="Meningita/index.html" style="background-image: url('meningita.jpg')">
        <span>
            Meningita
        </span>
    </a>
     <a class="item" href="Colebil/index.html" style="background-image: url('colebil.jpg')">
        <span>
            Colebil
        </span>
    </a>
</div>

<style>
    body{
        /*padding: 0;*/
        /*margin: 0;*/
        font-family: 'Poppins', sans-serif;
        background-color: rgba(0, 30, 65, 0.75);
    }
    .heading {
        position: fixed;
        height: 200px;
        max-width: 100%;
        top: 75px;
    }
    h1, h2, h3, h4 {
        color: white;
    }
    .panels {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        position: relative;
        max-width: 1200px;
        margin: 200px auto 0 auto;
    }
    .panels a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 300px;
        background-size: 130%;
        background-position: center;
        border: 2px solid white;
        transition: 0.4s;
        box-sizing: border-box;
        position: relative;
        text-decoration: none;
        background-repeat: no-repeat;
        background-color: white;
    }
    @media (max-width: 1200px) {
        .panels a {
            height: 250px;
        }
    }
    @media (max-width: 991px) {
        .panels a {
            height: 200px;
        }
    }
    @media (max-width: 767px) {
        .panels a {
            width: 100%;
            height: 300px;
        }
    }
    @media (max-width: 575px) {
        .panels a {
            height: 230px;
        }
    }
    .panels a:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 30, 65, 0.25);
        z-index: 5;
        transition: 0.3s;
    }
    .panels a:hover {
        background-size: 135%;
        text-decoration: none;
    }
    .panels a:hover:before {
        background-color: rgba(0, 30, 65, 0.35);
    }
    .panels a span {
        color: rgba(0, 30, 65, 0.75);
        z-index: 10;
        padding: 10px 35px;
        min-width: 200px;
        text-decoration: none;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
