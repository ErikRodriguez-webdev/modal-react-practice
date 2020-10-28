import './index.css'

const Modal = (props) => {

    return (
        <>
            <div className="popupModal" onClick={() => props.setModal(!props.modal)}>
                <h2>Attention:</h2>
                <p>Please add your full name and phone number. Click on me to remove me!</p>
            </div>
        </>
    )
}

export default Modal;