import Card from '../UI/Card'

const Search = (props) => {
    return (
        <Card>
            <form>
                <input></input>
            </form>
            <button type="button" onClick={props.cancelSearch} className="btn">Cancel</button>
        </Card>
    );
};

export default Search;