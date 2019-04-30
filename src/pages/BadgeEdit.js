import React from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/badge'
import BadgeForm from '../components/BadgeForm'
import api from "../api"
import PageLoading from "../components/PageLoading"

class BadgeEdit extends React.Component{

  state = { 
    loading:true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: '',
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({loading:true, error: null})

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
        this.setState({loading:false, form: data})
        
      } catch (error) {
        this.setState({loading:false, error: error})
        
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading:true, error:null})


    try {
      await api.badges.update(this.props.match.params.badgeId,this.state.form)
      this.setState({loading:false})

      this.props.history.push('/badges')

    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
      
    }

  }


  render(){
    if(this.state.loading){
      return <PageLoading />
    }

    return (
      <React.Fragment>
        
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'twitter'}
                twitter={this.state.form.twitter || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://previews.123rf.com/images/inegvin/inegvin1701/inegvin170100077/69882112-cone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-.jpg"
              />
            </div>
            <div className="col-6">
            <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeEdit