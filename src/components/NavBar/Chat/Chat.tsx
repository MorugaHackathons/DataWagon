// Chat.tsx
import React, { useState } from 'react';
import styles from './Chat.module.scss'; // Make sure you have the necessary styles
import sendIcon from "../../../assets/send.svg"
import attachmentsIcon from "../../../assets/attachment.svg"


interface Message {
    text: string;
    date: string;
}

const Chat: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleAttachmentClick = () => {
        // Implement attachment functionality here
        console.log('Attachment clicked');
    };

    const handleSendClick = () => {
        if (message != '') {
            console.log('Send clicked. Message:', message);

            const newMessage: Message = {
                text: message,
                date: new Date().toLocaleString(),
            };

            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    return (
        <div className={styles.chatContainer}>
            <h2>Чат</h2>
            {/* Chat messages go here */}
            <div className={styles.dialogContainer}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles.messageBox}>
                        <div className={styles.messageText}>{msg.text}</div>
                        <div className={styles.messageDate}>{msg.date}</div>
                    </div>
                ))}
            </div>
            {/* Input area */}
            <div className={styles.inputArea}>
                {/* Attachment button */}
                <div className={styles.attachmentButton} onClick={handleAttachmentClick}>
                    <img width={32} height={32} src={attachmentsIcon} alt={"Attachment"}/>
                </div>

                {/* Message input */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleInputChange}
                    className={styles.messageInput}
                />

                {/* Send button */}
                <div className={styles.sendButton} onClick={handleSendClick}>
                    <img width={32} height={32} src={sendIcon} alt={"Send"}/>
                </div>
            </div>
        </div>
    );
};

export default Chat;
