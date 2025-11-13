const ToggleSwitch = ({ onClick }) => {

    return(
        <>
            <input type="checkbox" onClick={onClick}></input>
        </>
    );
};

export default ToggleSwitch;