import React from 'react'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component{

  state = { 
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: '',
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render(){
    return (
      <React.Fragment>
        
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl="https://previews.123rf.com/images/inegvin/inegvin1701/inegvin170100077/69882112-cone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew