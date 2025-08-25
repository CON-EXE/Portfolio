

function Contact() {
    return(
        <section id="contact" className="align">
            <h2>Want to get in <span>touch?</span></h2>
            <p>Send me a <span>message</span></p>
            <div className="form-container">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="953d16b1-783d-404d-9d2c-b905576f444b"></input>

                    <label for="name">Full name</label>
                    <input type="text" required name="from_name" placeholder="Your name here" className="name"></input>

                    <label for="email">Email</label>
                    <input type="email" required name="from_email" placeholder="yourname@email.com" className="email"></input>

                    <label for="message">Message</label>
                    <textarea name="form_message" required minlength="10" className="message" placeholder="Leave a message..."></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>

            <p>Heres where to find <span>me</span></p>
        </section>
    );
}

export default Contact;