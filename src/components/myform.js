import React from "react"
import myformStyles from "./myform.module.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className={myformStyles.form}
        onSubmit={this.submitForm}
        action="https://formspree.io/xdodywqa"
        method="POST"
      >
        
        <div className={myformStyles.col6}>
          <input type="text" name="name" placeholder="Name"/>
          <input type="email" name="email" placeholder="Email"/>
        </div>
        <div className={myformStyles.col12}>
          <textarea  name="message" placeholder="Message"/>
        </div >  
        <div>
          {status === "SUCCESS" ? <p>Thanks!</p> : <button className={myformStyles.button}>Send Message</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}