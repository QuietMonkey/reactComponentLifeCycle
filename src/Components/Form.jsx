import React, { Component } from 'react'

class Form extends Component {
    state = {
        title: '',
        globalTitle:'Titre'
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount(){
        console.log('Formulaire Rendu')
    }

    submitForm = (event) => {
        event.preventDefault()
        this.setState({globalTitle: `Mon formulaire - ${this.state.title}`})
    }

    componentDidUpdate(){
        console.log('Titre Changé')
    }

    render() {
        console.log(this.state)

        return (
            <div className='Form'>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <h1>{this.state.globalTitle}</h1>
                            <label htmlFor='title'>Titre</label>
                            <input
                                type='text'
                                id='title'
                                name='title'
                                onChange={this.onChange}
                                value={this.state.title}
                            />

                        <hr />
                            <input
                                type='submit' 
                                value='Validation'
                            />

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form