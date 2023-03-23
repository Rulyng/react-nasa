import "./maillist.scss"

const Maillist = () => {
    return (
        <div className="message">
            <h2 className="message__title">Feel like a real astronaut</h2>
            <span className="message__descr">If you have questions or suggestions, write to us</span>
            <div className="message__textarea">
                <textarea name="" id="" cols="50" rows="2" placeholder="Write here..."></textarea>
                <button className="button message__button">Send</button>
            </div>
        </div>
    );
}

export default Maillist;
