import React, { Component } from 'react'
import { View } from 'react-native'

import { Button, CardSection, Input } from '../common'

class LoginForm extends Component {
    state = { email: "", password: ""}

    render() {
        return (
            <View style={{margin:5}}>
            <CardSection >
                <Input label="Email" placeholder="JoeMama@gmail.com" value={this.state.email} onChangeText={email => this.setState({ email })} />
            </CardSection>
            <CardSection>
                <Input label="Password" placeholder="password" value={this.state.password} onChangeText={password => this.setState({ password })} secureTextEntry/>
            </CardSection>
            <CardSection>
                <Button>
                Log In
                </Button>
            </CardSection>
            </View>
        )
    }
}

export default LoginForm;
