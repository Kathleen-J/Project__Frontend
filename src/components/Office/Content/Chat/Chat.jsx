import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import css from './Chat.module.css';
import { MainStoreContext } from "../../../../store/mainStore";

const Chat = observer(() => {
    const {ChatStore} = useContext(MainStoreContext);
    const messageValue = React.createRef();

    const renderChat = ChatStore.messages.map(({ nickname, msg }, index) => (
      <div key={index}>
          <div className={css.chat_message_block}>
              <div>{nickname}: <span className={css.chat_messages}>{msg}</span></div>
          </div>
      </div>
  ))

	return (
		<div className={css.chat_wrapper}>
			<div className={css.chat_title_wrapper}>
				<div className={css.chat_title}>Чат</div>
				<div className={css.chat_send_field}>
					<input
						ref={messageValue}
						name="message"
						className={css.chat_input}
						placeholder=" . . . "
						value={ChatStore.msg}
						onChange={(e) => ChatStore.typeMessage(e.target.value)}
					/>
					<button className="accordion-button" onClick={(e) => ChatStore.sendMessage(messageValue.current.value)}>Отправить</button>
				</div>
			</div>
			<div className={css.chat_block}>
				{renderChat}
			</div>
		</div>
	)
});

export default Chat;