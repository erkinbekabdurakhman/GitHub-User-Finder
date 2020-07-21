import React, { useState, useContext } from 'react'; //importing useState hook
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState(''); //declaring text variable and initializing value by method setText

    const onChange = (e) => setText( e.target.value ) // initialiazing value 

    const onSubmit = (e) => {
        e.preventDefault();

        if(text === ''){
            alertContext.setAlert(' Please enter username ', 'danger') // calling setAlert function that comes from props
        } else {
            githubContext.searchUsers(text);
            setText('')
        }
        
    }

    return(
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users . . ."
                value={text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && (<button className="btn btn-light btn-block" 
            onClick={githubContext.clearUsers}>Clear</button>)}
        </div>
    )
}

export default Search;