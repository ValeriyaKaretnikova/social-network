import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../utils/validators/validators.ts";
import { Textarea } from "../common/FormControls/FormControls.tsx";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const maxLength50 = maxLengthCreator(50);

const Dialogs = ({ dialogsData, sendMessage }) => {
  const dialogs = dialogsData.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} image={d.image} key={d.id} />;
  });

  const messages = dialogsData.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

  const addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>
        <div>{messages}</div>
        <div className={s.newMessageArea}>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your message"
        validate={[required, maxLength50]}
      ></Field>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
