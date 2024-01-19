import { closeModal } from "@/app/features/modal/modalSlice";
import { clearCart } from "@/app/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
    const dispatch = useDispatch();

    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>Remove all items from your cart?</h4>
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn confirm-btn"
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                        }}
                    >
                        Confirm
                    </button>
                    <button
                        type="button"
                        className="btn confirm-btn"
                        onClick={() => {
                            dispatch(closeModal())
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal
