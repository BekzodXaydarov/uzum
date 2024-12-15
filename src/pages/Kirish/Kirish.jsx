import React, { useState } from "react";
import "./Kirish.css";
const Kirish = () => {
    const [phone, setPhone] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    const handleSubmit = () => {
        alert("Tasdiqlash kodi uchun ${phone} raqamiga SMS yuboriladi!");
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setIsOpen(false)}>
                            ✕
                        </button>
                        <h1 className="enter-title">Telefon raqamini kiriting</h1>
                        <p className="enter-subtitle">
                            Tasdiqlash kodini SMS orqali yuboramiz
                        </p>
                        <input
                            type="text"
                            className="enter-input"
                            placeholder="+998 00 000-00-00"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button className="enter-button" onClick={handleSubmit}>
                            Kodni olish
                        </button>
                        <p className="enter-footer">
                            Avtorizatsiyadan o'tish orqali siz{" "}
                            <a href="#privacy-policy">shaxsiy ma'lumotlarni qayta ishlash</a>{" "}
                            siyosatiga rozilik bildirasiz
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Kirish;