// Support.tsx
import React, { useState } from 'react';
import styles from './Support.module.scss'; // Предполагается, что у вас есть файл стилей
import sendIcon from "../../../assets/send.svg"
import attachmentsIcon from "../../../assets/attachment.svg"

interface Message {
    text: string;
    date: string;
}

const Support: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleAttachmentClick = () => {
        // Реализуйте функциональность вложений здесь
        console.log('Attachment clicked');
    };

    const handleSendClick = () => {
        // Реализуйте функциональность отправки здесь
        console.log('Send clicked. Message:', message);

        const newMessage: Message = {
            text: message,
            date: new Date().toLocaleString(),
        };

        setMessages([...messages, newMessage]);
        setMessage('');
    };

    return (
        <div className={styles.supportContainer}>
            <h2>Тех Поддержка</h2>
            {/* Сообщения поддержки здесь */}
            <div className={styles.dialogContainer}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles.messageBox}>
                        <div className={styles.messageText}>{msg.text}</div>
                        <div className={styles.messageDate}>{msg.date}</div>
                    </div>
                ))}
            </div>
            {/* Область ввода */}
            <div className={styles.inputArea}>
                {/* Кнопка вложения */}
                <div className={styles.attachmentButton} onClick={handleAttachmentClick}>
                    <img width={32} height={32} src={attachmentsIcon} alt={"Attachment"}/>
                </div>

                {/* Ввод сообщения */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleInputChange}
                    className={styles.messageInput}
                />

                {/* Кнопка отправки */}
                <div className={styles.sendButton} onClick={handleSendClick}>
                    <img width={32} height={32} src={sendIcon} alt={"Attachment"}/>
                </div>
            </div>
        </div>
    );
};

export default Support;