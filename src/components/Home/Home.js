import React,{Component} from 'react';
import { InputWrapper, HeaderText } from './styles';
import Typing from 'react-typing-animation';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render(){
        return(
            <InputWrapper>
                <HeaderText> 
                    <Typing speed={100}><h1>I am Sami Lieberman.</h1></Typing>
                    <h4>I am a New York City based software developer. 
                        I love learning new technologies and solving problems.</h4>
                </HeaderText>
            </InputWrapper>
        );
    }
}
export default Home;