import React, { Component } from 'react'

class Form extends Component {
    state = {
        title: '',
        globalTitle:''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount(){
        console.log('Formulaire Rendu')
    }

    submitForm = () => {
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

                        <div className='form-data'>
                            <label htmlFor='title'>Votre texte ici</label>
                            <input
                                type='text'
                                id='title'
                                name='title'
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <hr />

                        <div className='form-data'>
                            <input
                                type='submit' 
                                value='Validation'
                            />
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form