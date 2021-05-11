import React from "react";
import "../Contact/style.css"

function ContactCard() {
    return (
        <div class="card text-center">
            <div class="card-body">
                <h2 class="card-title">Contact Me</h2>
                <p>I'd love to hear about projects you are working on and opportunities to collaborate!</p>
                <a class="btn btn-outline-warning" href="em.caitie@gmail.com" role="button">Email</a>
                <a class="btn btn-outline-warning" href="https://www.linkedin.com/in/caitiegorham/" role="button">LinkedIn</a>
            </div>
        </div>
    )
}

export default ContactCard;